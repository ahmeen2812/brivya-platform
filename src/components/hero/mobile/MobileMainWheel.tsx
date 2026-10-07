"use client";

import * as React from "react";
import gsap from "gsap";
import { MAIN_WHEEL_PHASES, CONTINUOUS_NODE_STREAM } from "@/config/heroMainWheelData";
import { MainWheelPhaseConfig } from "@/types/heroMainWheel";
import { MainWheelIcon } from "../main-wheel/MainWheelIcons";

export const MobileMainWheel: React.FC = () => {
  // Mobile-specific mathematical dimensions
  const CX = 125;
  const CY = 125;
  const HUB_R = 56; // 112px diameter hub
  const ORBIT_R = 92; // 36px clearance from hub
  const START_DEG = -72; // 288°
  const SPAN_DEG = 144; // Ends at +72°

  const [phaseIdx, setPhaseIdx] = React.useState<number>(0);
  const currentPhase: MainWheelPhaseConfig = MAIN_WHEEL_PHASES[phaseIdx] || MAIN_WHEEL_PHASES[0];

  const lastPhaseRef = React.useRef<number>(0);
  const nodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const streamRef = React.useRef<number>(0);
  const lastTimeRef = React.useRef<number | null>(null);

  const iconRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLDivElement | null>(null);

  // 650ms Morph on phase change
  React.useEffect(() => {
    const iconEl = iconRef.current;
    const textEl = textRef.current;
    if (!iconEl || !textEl) return;

    gsap.killTweensOf([iconEl, textEl]);
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.to(iconEl, { scale: 0.55, rotate: -20, opacity: 0, duration: 0.2 })
      .to(iconEl, { scale: 1, rotate: 0, opacity: 1, duration: 0.4, ease: "back.out(1.5)" });

    tl.fromTo(textEl, { y: 6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }, 0.15);
  }, [currentPhase.id]);

  // 60fps Direct DOM Animation Loop
  React.useEffect(() => {
    let animId: number;
    const speed = 12;

    const animate = (time: number) => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        animId = requestAnimationFrame(animate);
        return;
      }

      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;
        streamRef.current = (streamRef.current + speed * delta) % 1200;

        // Deterministic phase synchronization
        const target = Math.floor(streamRef.current / 400) % 3;
        if (target !== lastPhaseRef.current) {
          lastPhaseRef.current = target;
          setPhaseIdx(target);
        }

        // Sub-pixel node coordinate mutator
        for (let i = 0; i < CONTINUOUS_NODE_STREAM.length; i++) {
          const el = nodesRef.current[i];
          if (!el) continue;

          let rel = (streamRef.current - i * 40) % 1200;
          if (rel < 0) rel += 1200;
          if (rel > 600) rel -= 1200;
          const angle = START_DEG + rel;

          if (angle >= START_DEG - 10 && angle <= START_DEG + SPAN_DEG + 10) {
            const rad = (angle * Math.PI) / 180;
            const x = CX + ORBIT_R * Math.cos(rad);
            const y = CY + ORBIT_R * Math.sin(rad);

            let opacity = 1.0;
            if (angle < START_DEG) {
              opacity = Math.max(0, (angle - (START_DEG - 10)) / 10);
            } else if (angle > START_DEG + SPAN_DEG) {
              opacity = Math.max(0, (START_DEG + SPAN_DEG + 10 - angle) / 10);
            }

            el.setAttribute("transform", `translate(${x.toFixed(1)}, ${y.toFixed(1)}) scale(0.92)`);
            el.style.opacity = String(opacity);
            el.style.visibility = "visible";
          } else {
            el.style.visibility = "hidden";
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
  }, []);

  // SVG Arc Geometry
  const sRad = (START_DEG * Math.PI) / 180;
  const eRad = ((START_DEG + SPAN_DEG) * Math.PI) / 180;
  const x1 = CX + ORBIT_R * Math.cos(sRad);
  const y1 = CY + ORBIT_R * Math.sin(sRad);
  const x2 = CX + ORBIT_R * Math.cos(eRad);
  const y2 = CY + ORBIT_R * Math.sin(eRad);
  const arcD = `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${ORBIT_R} ${ORBIT_R} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;

  // Vector Morphing Render Engine (Eliminates "API" Bug)
  const renderGlyph = (morphType: "code" | "cloud" | "ai") => {
    switch (morphType) {
      case "code":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-[#0A5FD7] border border-sky-100 shadow-2xs">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
            </svg>
          </div>
        );
      case "cloud":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-[#D97706] border border-amber-100 shadow-2xs">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
        );
      case "ai":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-[#7C3AED] border border-violet-100 shadow-2xs">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="relative w-[250px] h-[250px] flex items-center justify-center select-none overflow-visible pointer-events-none">
      {/* 1. Center Hub */}
      <div
        style={{
          width: `${HUB_R * 2}px`,
          height: `${HUB_R * 2}px`,
          left: `${CX - HUB_R}px`,
          top: `${CY - HUB_R}px`,
        }}
        className="pointer-events-auto absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-md p-2 text-center"
      >
        <div ref={iconRef}>{renderGlyph(currentPhase.morphType)}</div>
        <div ref={textRef} className="flex flex-col items-center justify-center mt-1 w-full max-w-[96px]">
          <span className="font-sans text-[12px] font-bold text-[#06162C] leading-tight">
            {currentPhase.title}
          </span>
          <span className="mt-0.5 text-[8px] leading-tight text-[#8998AD] line-clamp-1">
            {currentPhase.subtitle}
          </span>
        </div>
      </div>

      {/* 2. SVG Track and Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 250 250" fill="none">
        <defs>
          <linearGradient id="mobMainArcGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
            <stop offset="14%" stopColor="#CBD5E1" stopOpacity="0.85" />
            <stop offset="86%" stopColor="#CBD5E1" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={arcD} stroke="url(#mobMainArcGrad)" strokeWidth="1.3" strokeLinecap="round" />

        {CONTINUOUS_NODE_STREAM.map((node, i) => (
          <g key={node.id} ref={(el) => { nodesRef.current[i] = el; }}>
            <foreignObject x="-17" y="-17" width="34" height="34" className="overflow-visible">
              <div
                style={{ width: "34px", height: "34px" }}
                className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-2xs"
              >
                <MainWheelIcon type={node.iconKey} className="h-4 w-4" />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
};