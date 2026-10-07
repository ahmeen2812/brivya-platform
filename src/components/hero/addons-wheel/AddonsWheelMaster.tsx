"use client";

import * as React from "react";
import {
  ADDONS_WHEEL_DIMENSIONS,
  ADDONS_WHEEL_PHASES,
  ADDONS_NODE_STREAM,
} from "@/config/heroAddonsWheelData";
import { AddonsWheelPhaseConfig, AddonsWheelNode } from "@/types/heroAddonsWheel";
import { AddonsWheelOrbitPath } from "./AddonsWheelOrbitPath";
import { AddonsWheelCenterHub } from "./AddonsWheelCenterHub";
import { AddonsWheelIcon } from "./AddonsWheelIcons";

export const AddonsWheelMaster: React.FC = () => {
  const { viewBoxSize, cx, cy, hubRadius, orbitRadius, arcStartDeg, arcSpanDeg } =
    ADDONS_WHEEL_DIMENSIONS;

  // Active Phase State (0: Google Add-ons, 1: Office Add-ins)
  const [activePhaseIndex, setActivePhaseIndex] = React.useState<number>(0);
  const currentPhase: AddonsWheelPhaseConfig = ADDONS_WHEEL_PHASES[activePhaseIndex];

  // Tooltip Hover State & Position Anchor
  const [hoveredNode, setHoveredNode] = React.useState<AddonsWheelNode | null>(null);
  const [hoveredCoords, setHoveredCoords] = React.useState<{ x: number; y: number } | null>(null);
  const isHoveredRef = React.useRef<boolean>(false);

  // DIRECT DOM NODE REFS (Zero React state in loop for 60fps motion)
  const nodesGroupRef = React.useRef<(SVGGElement | null)[]>([]);
  const streamPositionRef = React.useRef<number>(0);
  const lastTimeRef = React.useRef<number | null>(null);

  // Direct DOM 60fps Continuous Kinetic Engine
  React.useEffect(() => {
    let animId: number;
    const speed = 12; // Constant linear velocity: 12 degrees per second

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;
        const currentSpeed = isHoveredRef.current ? speed * 0.12 : speed;

        // Total 8-node conveyor loop = 8 * 45° = 360°
        streamPositionRef.current = (streamPositionRef.current + currentSpeed * delta) % 360;

        // Deterministic Phase Synchronization: 0° - 179.9° = Google Add-ons, 180° - 359.9° = Office Add-ins
        const targetPhase = Math.floor(streamPositionRef.current / 180) % 2;
        setActivePhaseIndex((prev) => (prev !== targetPhase ? targetPhase : prev));

        const count = ADDONS_NODE_STREAM.length; // 8 nodes
        const nodeSpacingDeg = 45; // Exactly 45° spacing (strictly max 4 visible icons)

        for (let i = 0; i < count; i++) {
          const el = nodesGroupRef.current[i];
          if (!el) continue;

          let relDist = (streamPositionRef.current - i * nodeSpacingDeg) % 360;
          if (relDist < 0) relDist += 360;
          if (relDist > 180) relDist -= 360;

          // Map distance to orbit angle starting at -64° (296°)
          const angle = arcStartDeg + relDist;

          const minVisible = arcStartDeg - 12; // -76°
          const maxVisible = arcStartDeg + arcSpanDeg + 12; // +92°

          if (angle >= minVisible && angle <= maxVisible) {
            const rad = (angle * Math.PI) / 180;
            const nodeX = cx + orbitRadius * Math.cos(rad);
            const nodeY = cy + orbitRadius * Math.sin(rad);

            let opacity = 1.0;
            if (angle < arcStartDeg) {
              // Pre-entry fade-in (-76° to -64°)
              opacity = Math.max(0, (angle - minVisible) / 12);
            } else if (angle > arcStartDeg + arcSpanDeg) {
              // Post-exit fade-out (+80° to +92°)
              opacity = Math.max(0, (maxVisible - angle) / 12);
            }

            // Depth scale along the path
            const scale = 0.88 + 0.16 * Math.cos(rad);

            el.setAttribute("transform", `translate(${nodeX}, ${nodeY}) scale(${scale})`);
            el.style.opacity = String(opacity);
            el.style.visibility = "visible";
          } else {
            el.style.visibility = "hidden";
            el.style.opacity = "0";
          }
        }
      }

      lastTimeRef.current = time;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [cx, cy, orbitRadius, arcStartDeg, arcSpanDeg]);

  // Handler to capture the exact node coordinates upon mouse enter
  const handleNodeMouseEnter = (node: AddonsWheelNode, index: number) => {
    isHoveredRef.current = true;
    setHoveredNode(node);

    let relDist = (streamPositionRef.current - index * 45) % 360;
    if (relDist < 0) relDist += 360;
    if (relDist > 180) relDist -= 360;
    const angle = arcStartDeg + relDist;
    const rad = (angle * Math.PI) / 180;
    const nodeX = cx + orbitRadius * Math.cos(rad);
    const nodeY = cy + orbitRadius * Math.sin(rad);

    setHoveredCoords({ x: nodeX, y: nodeY });
  };

  const handleNodeMouseLeave = () => {
    isHoveredRef.current = false;
    setHoveredNode(null);
    setHoveredCoords(null);
  };

  return (
    <div className="relative w-[340px] h-[340px] flex items-center justify-center select-none overflow-visible pointer-events-none">
      {/* 1. Morphing Central Core Hub */}
      <AddonsWheelCenterHub
        currentPhase={currentPhase}
        cx={cx}
        cy={cy}
        radius={hubRadius}
      />

      {/* 2. Master SVG Canvas */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
      >
        <AddonsWheelOrbitPath />

        {/* 8 Nodes in DOM with 45° Spacing */}
        {ADDONS_NODE_STREAM.map((node, i) => (
          <g
            key={node.id}
            ref={(el) => {
              nodesGroupRef.current[i] = el;
            }}
            className="pointer-events-auto cursor-pointer"
            onMouseEnter={() => handleNodeMouseEnter(node, i)}
            onMouseLeave={handleNodeMouseLeave}
            style={{ willChange: "transform, opacity" }}
          >
            <foreignObject x="-22" y="-22" width="44" height="44" className="overflow-visible">
              <div
                style={{ width: "44px", height: "44px" }}
                className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_3px_12px_rgba(6,22,44,0.08)] transition-transform duration-150 hover:scale-115"
              >
                <AddonsWheelIcon type={node.iconKey} className="h-5 w-5" />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>

      {/* 
        3. Professional Rich Hover Tooltip Pod:
        Top coordinate is clamped to max 218px so hovering the lowest/exiting
        icons NEVER pushes the tooltip past the bottom section cutoff boundary.
      */}
      {hoveredNode && (
        <div
          style={{
            left: hoveredCoords ? Math.min(Math.max(hoveredCoords.x - 20, 110), 195) : cx,
            top: hoveredCoords ? Math.min(hoveredCoords.y + 16, 218) : cy + hubRadius + 14,
          }}
          className="pointer-events-none absolute -translate-x-1/2 rounded-xl bg-[#06162C] p-3 shadow-2xl z-50 w-[260px] sm:w-[280px] text-left border border-white/10 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <span className="font-sans text-[12px] font-bold text-white tracking-tight">
              {hoveredNode.name}
            </span>
            <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#C7A76B] font-semibold">
              {hoveredNode.role}
            </span>
          </div>
          <p className="mt-1.5 font-sans text-[10.5px] leading-relaxed text-slate-300 font-normal">
            {hoveredNode.description}
          </p>
        </div>
      )}
    </div>
  );
};