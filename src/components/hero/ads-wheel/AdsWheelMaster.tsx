"use client";

import * as React from "react";
import {
  ADS_WHEEL_DIMENSIONS,
  ADS_WHEEL_PHASES,
  ADS_NODE_STREAM,
} from "@/config/heroAdsWheelData";
import { AdsWheelPhaseConfig, AdsWheelNode } from "@/types/heroAdsWheel";
import { AdsWheelOrbitPath } from "./AdsWheelOrbitPath";
import { AdsWheelCenterHub } from "./AdsWheelCenterHub";
import { AdsWheelIcon } from "./AdsWheelIcons";

export const AdsWheelMaster: React.FC = () => {
  const { viewBoxSize, cx, cy, hubRadius, orbitRadius, arcStartDeg, arcSpanDeg } =
    ADS_WHEEL_DIMENSIONS;

  // Active Phase State (0: Google Ads, 1: Meta Ads)
  const [activePhaseIndex, setActivePhaseIndex] = React.useState<number>(0);
  const currentPhase: AdsWheelPhaseConfig = ADS_WHEEL_PHASES[activePhaseIndex];

  // Tooltip Hover State
  const [hoveredNode, setHoveredNode] = React.useState<AdsWheelNode | null>(null);
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

        // Total 10-node conveyor loop = 10 * 36° = 360°
        streamPositionRef.current = (streamPositionRef.current + currentSpeed * delta) % 360;

        // Deterministic Phase Synchronization: 0° - 179.9° = Google Ads, 180° - 359.9° = Meta Ads
        const targetPhase = Math.floor(streamPositionRef.current / 180) % 2;
        setActivePhaseIndex((prev) => (prev !== targetPhase ? targetPhase : prev));

        const count = ADS_NODE_STREAM.length; // 10 nodes
        const nodeSpacingDeg = 36; // 36° spacing

        for (let i = 0; i < count; i++) {
          const el = nodesGroupRef.current[i];
          if (!el) continue;

          let relDist = (streamPositionRef.current - i * nodeSpacingDeg) % 360;
          if (relDist < 0) relDist += 360;
          if (relDist > 180) relDist -= 360;

          // Map distance to orbit angle starting at -80°
          const angle = arcStartDeg + relDist;

          const minVisible = arcStartDeg - 12; // -92°
          const maxVisible = arcStartDeg + arcSpanDeg + 12; // +76°

          if (angle >= minVisible && angle <= maxVisible) {
            const rad = (angle * Math.PI) / 180;
            const nodeX = cx + orbitRadius * Math.cos(rad);
            const nodeY = cy + orbitRadius * Math.sin(rad);

            let opacity = 1.0;
            if (angle < arcStartDeg) {
              // Pre-entry fade-in (-92° to -80°)
              opacity = Math.max(0, (angle - minVisible) / 12);
            } else if (angle > arcStartDeg + arcSpanDeg) {
              // Post-exit fade-out (+64° to +76°)
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

  return (
    // Explicit responsive dimensions maintain non-zero layout box on all devices
    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px] flex items-center justify-center select-none overflow-visible pointer-events-none">
      {/* 
        1. Morphing Central Core Hub:
        126px diameter with physical elevation
      */}
      <AdsWheelCenterHub
        currentPhase={currentPhase}
        cx={cx}
        cy={cy}
        radius={hubRadius}
      />

      {/* 
        2. Master SVG Canvas:
        Maps all 10 nodes simultaneously in sub-pixel SVG coordinates
      */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
      >
        {/* Exact 144° Arc Track with Faded Gradient Ends */}
        <AdsWheelOrbitPath />

        {/* ALL 10 Nodes in DOM simultaneously */}
        {ADS_NODE_STREAM.map((node, i) => (
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
            {/* Explicit 44px x 44px ForeignObject with guaranteed dimensions */}
            <foreignObject
              x="-22"
              y="-22"
              width="44"
              height="44"
              className="overflow-visible"
            >
              <div
                style={{ width: "44px", height: "44px" }}
                className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_3px_12px_rgba(6,22,44,0.08)] transition-transform duration-150 hover:scale-115"
              >
                <AdsWheelIcon type={node.iconKey} className="h-5 w-5" />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>

      {/* 
        3. Professional Rich Hover Tooltip Pod:
        Fixed rigid width (w-[260px] sm:w-[280px]) with clean line wrapping
      */}
      {hoveredNode && (
        <div
          style={{ left: cx, top: cy - hubRadius - 14 }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-xl bg-[#06162C] p-3 shadow-2xl z-50 w-[260px] sm:w-[280px] text-left border border-white/10 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
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