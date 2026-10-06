"use client";

import * as React from "react";
import { OrbitTrackConfig, ConstellationPhase } from "@/types/heroConstellation";
import { ConstellationHub } from "./ConstellationHub";
import { HeroOrbitIcon } from "../HeroOrbitIcons";

interface ConstellationOrbitArcProps {
  config: OrbitTrackConfig;
}

export const ConstellationOrbitArc: React.FC<ConstellationOrbitArcProps> = ({
  config,
}) => {
  const {
    cx,
    cy,
    hubRadius,
    orbitRadius,
    startAngleDeg,
    arcSpanDeg,
    speed,
    gradientId,
    phases,
  } = config;

  // Track active phase index for this specific orbit
  const [phaseIndex, setPhaseIndex] = React.useState<number>(0);
  const currentPhase: ConstellationPhase = phases[phaseIndex] || phases[0];

  // Tooltip hover state
  const [hoveredNodeName, setHoveredNodeName] = React.useState<string | null>(null);
  const isHoveredRef = React.useRef<boolean>(false);

  // References for DIRECT DOM TRANSFORMS (Zero React re-renders during motion)
  const progressRef = React.useRef<number>(0);
  const lastTimeRef = React.useRef<number | null>(null);
  const nodesGroupRef = React.useRef<(SVGGElement | null)[]>([]);

  // 1. Automatic Phase Advance Timer (Every 5 seconds, advances smoothly)
  React.useEffect(() => {
    if (phases.length <= 1) return;

    const timer = setInterval(() => {
      setPhaseIndex((prev) => (prev + 1) % phases.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [phases.length]);

  // 2. SVG Arc Geometry: Exactly 144 Degrees (288° -> 72°)
  const degToRad = (deg: number) => (deg * Math.PI) / 180;
  const startRad = degToRad(startAngleDeg);
  const endRad = degToRad(startAngleDeg + arcSpanDeg);

  const startX = cx + orbitRadius * Math.cos(startRad);
  const startY = cy + orbitRadius * Math.sin(startRad);
  const endX = cx + orbitRadius * Math.cos(endRad);
  const endY = cy + orbitRadius * Math.sin(endRad);

  // SVG Arc command: 144° < 180°, so large-arc-flag is 0
  const arcPathD = `M ${startX} ${startY} A ${orbitRadius} ${orbitRadius} 0 0 1 ${endX} ${endY}`;

  // 3. Ultra-Smooth Kinetic Engine (Direct DOM transforms via requestAnimationFrame)
  React.useEffect(() => {
    let animId: number;

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;
        // Pause or slow velocity gently when user hovers a node
        const currentSpeed = isHoveredRef.current ? speed * 0.12 : speed;
        progressRef.current = (progressRef.current + currentSpeed * delta) % 1;

        const count = currentPhase.nodes.length;

        // Update each icon directly in the SVG DOM (Zero React reconciliation!)
        for (let i = 0; i < count; i++) {
          const el = nodesGroupRef.current[i];
          if (!el) continue;

          const baseP = i / count;
          const currentP = (baseP + progressRef.current) % 1;

          // Angle locked strictly within the 144-degree path
          const angle = startAngleDeg + currentP * arcSpanDeg;
          const rad = (angle * Math.PI) / 180;

          const nodeX = cx + orbitRadius * Math.cos(rad);
          const nodeY = cy + orbitRadius * Math.sin(rad);

          // Sine envelope: 0 at ends, 1.0 at apex
          const sineFactor = Math.sin(currentP * Math.PI);
          const opacity = Math.max(0, Math.min(1, sineFactor * 1.25));
          const scale = 0.82 + 0.28 * sineFactor;

          // Direct SVG attribute mutation — silky-smooth 60-144fps
          el.setAttribute("transform", `translate(${nodeX}, ${nodeY}) scale(${scale})`);
          el.style.opacity = String(opacity);
          el.style.visibility = opacity <= 0.02 ? "hidden" : "visible";
        }
      }

      lastTimeRef.current = time;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [speed, currentPhase.nodes.length, startAngleDeg, arcSpanDeg, cx, cy, orbitRadius]);

  return (
    <>
      {/* 
        Central Hub Component:
        Smoothly morphs title and icon when phase changes
      */}
      <ConstellationHub
        cx={cx}
        cy={cy}
        radius={hubRadius}
        currentPhase={currentPhase}
      />

      {/* 
        The SVG Track & Nodes Layer:
        Everything rendered inside the SAME coordinate space so icons NEVER detach
      */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 620 560" fill="none">
        <defs>
          {/* Subtle gradient fading the top and bottom tips of the 144° arc */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
            <stop offset="14%" stopColor="#CBD5E1" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.95" />
            <stop offset="86%" stopColor="#CBD5E1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. The Exact 144° Arc Line */}
        <path
          d={arcPathD}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* 2. Faint concentric inner guide line */}
        <path
          d={`M ${cx + (orbitRadius - 12) * Math.cos(startRad)} ${cy + (orbitRadius - 12) * Math.sin(startRad)} A ${orbitRadius - 12} ${orbitRadius - 12} 0 0 1 ${cx + (orbitRadius - 12) * Math.cos(endRad)} ${cy + (orbitRadius - 12) * Math.sin(endRad)}`}
          stroke={`url(#${gradientId})`}
          strokeWidth="0.8"
          strokeDasharray="2 4"
          opacity="0.4"
        />

        {/* 3. Orbiting Nodes (Embedded in SVG for sub-pixel 1:1 path alignment) */}
        {currentPhase.nodes.map((node, i) => (
          <g
            key={node.id}
            ref={(el) => {
              nodesGroupRef.current[i] = el;
            }}
            className="pointer-events-auto cursor-pointer"
            onMouseEnter={() => {
              isHoveredRef.current = true;
              setHoveredNodeName(node.name);
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
              setHoveredNodeName(null);
            }}
            style={{ willChange: "transform, opacity" }}
          >
            {/* ForeignObject centers the clean, white light-theme card precisely */}
            <foreignObject x="-20" y="-20" width="40" height="40" className="overflow-visible">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_4px_14px_rgba(6,22,44,0.08)] transition-transform duration-150 hover:scale-115">
                <HeroOrbitIcon type={node.iconType} className="h-4.5 w-4.5" />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>

      {/* Interactive Tooltip Pod */}
      {hoveredNodeName && (
        <div
          style={{ left: cx, top: cy - hubRadius - 16 }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-md bg-[#06162C] px-2.5 py-1 text-[10px] font-mono font-semibold text-white shadow-md z-40 whitespace-nowrap animate-in fade-in zoom-in-95 duration-150"
        >
          {hoveredNodeName}
        </div>
      )}
    </>
  );
};