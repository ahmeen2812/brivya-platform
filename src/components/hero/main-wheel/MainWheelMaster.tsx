"use client";

import * as React from "react";
import {
  MAIN_WHEEL_DIMENSIONS,
  MAIN_WHEEL_PHASES,
  CONTINUOUS_NODE_STREAM,
} from "@/config/heroMainWheelData";
import { MainWheelPhaseConfig, MainWheelNode } from "@/types/heroMainWheel";
import { MainWheelOrbitPath } from "./MainWheelOrbitPath";
import { MainWheelCenterHub } from "./MainWheelCenterHub";
import { MainWheelIcon } from "./MainWheelIcons";

export const MainWheelMaster: React.FC = () => {
  const { viewBoxSize, cx, cy, hubRadius, orbitRadius, arcStartDeg, arcSpanDeg } =
    MAIN_WHEEL_DIMENSIONS;

  // Active Phase State (01 Dev -> 02 Cloud -> 03 AI)
  const [activePhaseIndex, setActivePhaseIndex] = React.useState<number>(0);
  const currentPhase: MainWheelPhaseConfig = MAIN_WHEEL_PHASES[activePhaseIndex];

  // Tooltip Hover State
  const [hoveredNode, setHoveredNode] = React.useState<MainWheelNode | null>(null);
  const isHoveredRef = React.useRef<boolean>(false);

  // DIRECT DOM NODE REFS (Decoupled from React render cycle for zero-stutter 60fps motion)
  const nodesGroupRef = React.useRef<(SVGGElement | null)[]>([]);
  const streamPositionRef = React.useRef<number>(0);
  const lastTimeRef = React.useRef<number | null>(null);

  // Direct DOM 60fps Continuous Kinetic Engine
  React.useEffect(() => {
    let animId: number;
    const speed = 12; // Constant linear velocity: exactly 12 degrees per second

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;
        const currentSpeed = isHoveredRef.current ? speed * 0.12 : speed;

        // Total 30-node conveyor loop = 30 * 40° = 1200°
        streamPositionRef.current = (streamPositionRef.current + currentSpeed * delta) % 1200;

        // ---------------------------------------------------------------------
        // DETERMINISTIC CATEGORY SYNCHRONIZATION
        // Category 0 (Web Dev): 0° - 399.9° (Icon 0 enters at -72°)
        // Category 1 (Cloud):   400° - 799.9° (Icon 10 enters at -72°)
        // Category 2 (AI):      800° - 1199.9° (Icon 20 enters at -72°)
        // ---------------------------------------------------------------------
        const targetPhase = Math.floor(streamPositionRef.current / 400) % 3;
        setActivePhaseIndex((prev) => (prev !== targetPhase ? targetPhase : prev));

        // ---------------------------------------------------------------------
        // CONTINUOUS 144° VISIBLE ARC RENDERING (-72° to +72° with 12° fade zones)
        // ---------------------------------------------------------------------
        const count = CONTINUOUS_NODE_STREAM.length; // Exactly 30 nodes
        const nodeSpacingDeg = 40; // Exactly 40° spacing between icon centers

        for (let i = 0; i < count; i++) {
          const el = nodesGroupRef.current[i];
          if (!el) continue;

          // Compute relative distance from stream head
          let relDist = (streamPositionRef.current - i * nodeSpacingDeg) % 1200;
          if (relDist < 0) relDist += 1200;

          // Normalize so negative angles represent oncoming icons before entrance
          if (relDist > 600) relDist -= 1200;

          // Map distance directly to orbit angle starting at -72°
          const angle = arcStartDeg + relDist;

          const minVisible = arcStartDeg - 12; // -84°
          const maxVisible = arcStartDeg + arcSpanDeg + 12; // +84°

          if (angle >= minVisible && angle <= maxVisible) {
            // Compute exact (cx, cy, R) sub-pixel coordinate
            const rad = (angle * Math.PI) / 180;
            const nodeX = cx + orbitRadius * Math.cos(rad);
            const nodeY = cy + orbitRadius * Math.sin(rad);

            // Compute smooth entry/exit opacity envelope
            let opacity = 1.0;
            if (angle < arcStartDeg) {
              // Pre-entry fade-in (-84° to -72°)
              opacity = Math.max(0, (angle - minVisible) / 12);
            } else if (angle > arcStartDeg + arcSpanDeg) {
              // Post-exit fade-out (+72° to +84°)
              opacity = Math.max(0, (maxVisible - angle) / 12);
            }

            // Continuous depth scale based on angle: 0.90 at edges, 1.04 at apex (0°)
            const scale = 0.90 + 0.14 * Math.cos(rad);

            // Direct SVG attribute mutation — silky-smooth 60-144fps
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

  return (
    <div className="relative w-full max-w-[520px] h-[480px] sm:h-[520px] flex items-center justify-center select-none overflow-visible">
      {/* 
        1. Morphing Central Core Hub:
        196px diameter with physical elevation and zero text overflow
      */}
      <MainWheelCenterHub
        currentPhase={currentPhase}
        cx={cx}
        cy={cy}
        radius={hubRadius}
      />

      {/* 
        2. Master SVG Canvas:
        Maps all 30 nodes simultaneously so the track is NEVER empty!
      */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
      >
        {/* Exact 144° Arc Track with Faded Gradient Ends */}
        <MainWheelOrbitPath />

        {/* ALL 30 Nodes in DOM simultaneously (Seamless continuous conveyor) */}
        {CONTINUOUS_NODE_STREAM.map((node, i) => (
          <g
            key={node.id}
            ref={(el) => {
              nodesGroupRef.current[i] = el;
            }}
            className="pointer-events-auto cursor-pointer"
            onMouseEnter={() => {
              isHoveredRef.current = true;
              setHoveredNode(node);
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
              setHoveredNode(null);
            }}
            style={{ willChange: "transform, opacity" }}
          >
            {/* Center point sits exactly on the track line */}
            <foreignObject x="-25" y="-25" width="50" height="50" className="overflow-visible">
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(6,22,44,0.08)] transition-transform duration-150 hover:scale-115">
                <MainWheelIcon type={node.iconKey} className="h-6 w-6" />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>

      {/* Rich Interactive Tooltip Pod */}
      {hoveredNode && (
        <div
          style={{ left: cx, top: cy - hubRadius - 16 }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-xl bg-[#06162C] p-3 shadow-xl z-50 max-w-[280px] text-left animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <span className="font-sans text-xs font-bold text-white">
              {hoveredNode.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#C7A76B]">
              {hoveredNode.role}
            </span>
          </div>
          <p className="mt-1 font-sans text-[11px] leading-snug text-slate-300">
            {hoveredNode.description}
          </p>
        </div>
      )}
    </div>
  );
};