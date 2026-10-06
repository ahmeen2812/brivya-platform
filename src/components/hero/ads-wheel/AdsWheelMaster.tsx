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

        // ---------------------------------------------------------------------
        // DETERMINISTIC PHASE SYNCHRONIZATION
        // Category 0 (Google Ads): 0° - 179.9°
        // Category 1 (Meta Ads):   180° - 359.9°
        // When lead icon enters -80° threshold, category locks deterministically
        // ---------------------------------------------------------------------
        const targetPhase = Math.floor(streamPositionRef.current / 180) % 2;
        setActivePhaseIndex((prev) => (prev !== targetPhase ? targetPhase : prev));

        // ---------------------------------------------------------------------
        // CONTINUOUS 144° VISIBLE ARC RENDERING (280° -> 64° / -80° to +64°)
        // ---------------------------------------------------------------------
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
    <div className="relative w-[340px] h-[340px] flex items-center justify-center select-none overflow-visible">
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
        Maps all 10 nodes simultaneously so the track is NEVER empty!
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
            {/* Center point sits exactly on the track line */}
            <foreignObject x="-22" y="-22" width="44" height="44" className="overflow-visible">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_3px_12px_rgba(6,22,44,0.08)] transition-transform duration-150 hover:scale-115">
                <AdsWheelIcon type={node.iconKey} className="h-5 w-5" />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>

      {/* Rich Interactive Tooltip Pod */}
      {hoveredNode && (
        <div
          style={{ left: cx, top: cy - hubRadius - 14 }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-xl bg-[#06162C] p-2.5 shadow-xl z-50 max-w-[240px] text-left animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <span className="font-sans text-[11px] font-bold text-white">
              {hoveredNode.name}
            </span>
            <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#C7A76B]">
              {hoveredNode.role}
            </span>
          </div>
          <p className="mt-1 font-sans text-[10px] leading-snug text-slate-300">
            {hoveredNode.description}
          </p>
        </div>
      )}
    </div>
  );
};