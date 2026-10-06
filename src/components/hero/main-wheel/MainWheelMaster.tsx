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
  const globalAngleRef = React.useRef<number>(0);
  const lastTimeRef = React.useRef<number | null>(null);

  // Track currently active category triggered at -40° threshold
  const lastTriggeredCategoryRef = React.useRef<string>("development");

  // Direct DOM 60fps Kinetic Engine
  React.useEffect(() => {
    let animId: number;
    const speed = 12; // Constant linear velocity: exactly 12 degrees per second

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;
        const currentSpeed = isHoveredRef.current ? speed * 0.12 : speed;
        globalAngleRef.current = (globalAngleRef.current + currentSpeed * delta) % 360;

        const count = CONTINUOUS_NODE_STREAM.length; // Exactly 15 nodes
        const angleStep = 360 / count; // 24° spacing between icon centers

        for (let i = 0; i < count; i++) {
          const el = nodesGroupRef.current[i];
          if (!el) continue;

          // Compute angle around 360° circle
          let angle = (i * angleStep + globalAngleRef.current) % 360;
          if (angle > 180) angle -= 360;

          // -------------------------------------------------------------------
          // Phase Change Trigger at -40° Threshold
          // -------------------------------------------------------------------
          // Node 0: Lead Dev, Node 5: Lead Cloud, Node 10: Lead AI
          if (i === 0 && Math.abs(angle - -40) < 1.5 && lastTriggeredCategoryRef.current !== "development") {
            lastTriggeredCategoryRef.current = "development";
            setActivePhaseIndex(0);
          } else if (i === 5 && Math.abs(angle - -40) < 1.5 && lastTriggeredCategoryRef.current !== "cloud") {
            lastTriggeredCategoryRef.current = "cloud";
            setActivePhaseIndex(1);
          } else if (i === 10 && Math.abs(angle - -40) < 1.5 && lastTriggeredCategoryRef.current !== "ai") {
            lastTriggeredCategoryRef.current = "ai";
            setActivePhaseIndex(2);
          }

          // -------------------------------------------------------------------
          // 144° Visible Arc Mapping (-72° to +72° with 12° fade zones)
          // -------------------------------------------------------------------
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
        190px diameter with physical elevation
      */}
      <MainWheelCenterHub
        currentPhase={currentPhase}
        cx={cx}
        cy={cy}
        radius={hubRadius}
      />

      {/* 
        2. Master SVG Canvas:
        Houses both the 144° track and the nodes in the SAME coordinate space
      */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
      >
        {/* Exact 144° Arc Track with Faded Gradient Ends */}
        <MainWheelOrbitPath />

        {/* 15-Node Continuous Conveyor Stream */}
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
            <foreignObject x="-26" y="-26" width="52" height="52" className="overflow-visible">
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(6,22,44,0.08)] transition-transform duration-150 hover:scale-115">
                <MainWheelIcon type={node.iconKey} className="h-7 w-7" />
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