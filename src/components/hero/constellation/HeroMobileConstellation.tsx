"use client";

import * as React from "react";
import { MAIN_WHEEL_PHASES, CONTINUOUS_NODE_STREAM } from "@/config/heroMainWheelData";
import { ADS_WHEEL_PHASES, ADS_NODE_STREAM } from "@/config/heroAdsWheelData";
import { ADDONS_WHEEL_PHASES, ADDONS_NODE_STREAM } from "@/config/heroAddonsWheelData";
import { MainWheelIcon } from "../main-wheel/MainWheelIcons";
import { AdsWheelIcon } from "../ads-wheel/AdsWheelIcons";
import { AddonsWheelIcon } from "../addons-wheel/AddonsWheelIcons";

export const HeroMobileConstellation: React.FC = () => {
  // Phase States (Updated strictly on change to prevent 60fps re-render lag)
  const [adsPhaseIdx, setAdsPhaseIdx] = React.useState<number>(0);
  const [mainPhaseIdx, setMainPhaseIdx] = React.useState<number>(0);
  const [addonsPhaseIdx, setAddonsPhaseIdx] = React.useState<number>(0);

  // References to prevent state setter calls inside the 60fps loop
  const lastAdsPhaseRef = React.useRef<number>(0);
  const lastMainPhaseRef = React.useRef<number>(0);
  const lastAddonsPhaseRef = React.useRef<number>(0);

  // DOM node references for direct SVG attribute mutation
  const adsNodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const mainNodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const addonsNodesRef = React.useRef<(SVGGElement | null)[]>([]);

  // Continuous stream positions
  const adsStreamRef = React.useRef<number>(0);
  const mainStreamRef = React.useRef<number>(0);
  const addonsStreamRef = React.useRef<number>(0);

  const lastTimeRef = React.useRef<number | null>(null);

  // ---------------------------------------------------------------------------
  // MATHEMATICAL GEOMETRIC DEFINITIONS (Mobile Coordinates)
  // ---------------------------------------------------------------------------
  // 1. TOP WHEEL (Google Ads <-> Meta Ads): cx = 246, cy = 105, R = 80, Hub = 100px dia
  const TOP_CX = 246;
  const TOP_CY = 105;
  const TOP_R = 80;
  const TOP_START_DEG = -80; // 280°
  const TOP_SPAN_DEG = 144;  // Ends at +64°

  // 2. MAIN CENTER WHEEL (Dev -> Cloud -> AI): cx = 120, cy = 260, R = 106, Hub = 132px dia
  const MAIN_CX = 120;
  const MAIN_CY = 260; // Exact Center of the 520px stage
  const MAIN_R = 106;
  const MAIN_START_DEG = -72; // 288°
  const MAIN_SPAN_DEG = 144;  // Ends at +72°

  // 3. BOTTOM WHEEL (Office <-> Workspace): cx = 248, cy = 415, R = 80, Hub = 100px dia
  const BTM_CX = 248;
  const BTM_CY = 415; // Exact 155px distance from MAIN_CY (260 + 155 = 415)
  const BTM_R = 80;
  const BTM_START_DEG = -64; // 296°
  const BTM_SPAN_DEG = 144;  // Ends at +80°

  // Helper to generate SVG Arc Path matching the node coordinates
  const createArcD = (cx: number, cy: number, r: number, startDeg: number, spanDeg: number) => {
    const sRad = (startDeg * Math.PI) / 180;
    const eRad = ((startDeg + spanDeg) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(sRad);
    const y1 = cy + r * Math.sin(sRad);
    const x2 = cx + r * Math.cos(eRad);
    const y2 = cy + r * Math.sin(eRad);
    return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  };

  // High-Performance Mobile Animation Engine (Direct DOM updates with 0 lag)
  React.useEffect(() => {
    let animId: number;
    const speed = 12; // 12 deg/sec linear velocity

    const animate = (time: number) => {
      // Sleep animation loop if on desktop to preserve CPU cycles
      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        animId = requestAnimationFrame(animate);
        return;
      }

      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;

        // Advance streams
        adsStreamRef.current = (adsStreamRef.current + speed * delta) % 360;
        mainStreamRef.current = (mainStreamRef.current + speed * delta) % 1200;
        addonsStreamRef.current = (addonsStreamRef.current + speed * delta) % 360;

        // ---------------------------------------------------------------------
        // ZERO-LAG PHASE DISPATCH (Retains verified targetAdsPhase fix)
        // ---------------------------------------------------------------------
        const targetAdsPhase = Math.floor(adsStreamRef.current / 180) % 2;
        if (targetAdsPhase !== lastAdsPhaseRef.current) {
          lastAdsPhaseRef.current = targetAdsPhase;
          setAdsPhaseIdx(targetAdsPhase);
        }

        const targetMain = Math.floor(mainStreamRef.current / 400) % 3;
        if (targetMain !== lastMainPhaseRef.current) {
          lastMainPhaseRef.current = targetMain;
          setMainPhaseIdx(targetMain);
        }

        const targetAddons = Math.floor(addonsStreamRef.current / 180) % 2;
        if (targetAddons !== lastAddonsPhaseRef.current) {
          lastAddonsPhaseRef.current = targetAddons;
          setAddonsPhaseIdx(targetAddons);
        }

        // ---------------------------------------------------------------------
        // 1. Top Ads Wheel (Mathematically locked to TOP_CX, TOP_CY, TOP_R)
        // ---------------------------------------------------------------------
        for (let i = 0; i < ADS_NODE_STREAM.length; i++) {
          const el = adsNodesRef.current[i];
          if (!el) continue;

          let rel = (adsStreamRef.current - i * 45) % 360;
          if (rel < 0) rel += 360;
          if (rel > 180) rel -= 360;
          const angle = TOP_START_DEG + rel;

          if (angle >= TOP_START_DEG - 10 && angle <= TOP_START_DEG + TOP_SPAN_DEG + 10) {
            const rad = (angle * Math.PI) / 180;
            const x = TOP_CX + TOP_R * Math.cos(rad);
            const y = TOP_CY + TOP_R * Math.sin(rad);

            let opacity = 1.0;
            if (angle < TOP_START_DEG) {
              opacity = Math.max(0, (angle - (TOP_START_DEG - 10)) / 10);
            } else if (angle > TOP_START_DEG + TOP_SPAN_DEG) {
              opacity = Math.max(0, (TOP_START_DEG + TOP_SPAN_DEG + 10 - angle) / 10);
            }

            el.setAttribute("transform", `translate(${x.toFixed(1)}, ${y.toFixed(1)}) scale(0.9)`);
            el.style.opacity = String(opacity);
            el.style.visibility = "visible";
          } else {
            el.style.visibility = "hidden";
          }
        }

        // ---------------------------------------------------------------------
        // 2. Middle Main Wheel (Mathematically locked to MAIN_CX, MAIN_CY, MAIN_R)
        // ---------------------------------------------------------------------
        for (let i = 0; i < CONTINUOUS_NODE_STREAM.length; i++) {
          const el = mainNodesRef.current[i];
          if (!el) continue;

          let rel = (mainStreamRef.current - i * 40) % 1200;
          if (rel < 0) rel += 1200;
          if (rel > 600) rel -= 1200;
          const angle = MAIN_START_DEG + rel;

          if (angle >= MAIN_START_DEG - 10 && angle <= MAIN_START_DEG + MAIN_SPAN_DEG + 10) {
            const rad = (angle * Math.PI) / 180;
            const x = MAIN_CX + MAIN_R * Math.cos(rad);
            const y = MAIN_CY + MAIN_R * Math.sin(rad);

            let opacity = 1.0;
            if (angle < MAIN_START_DEG) {
              opacity = Math.max(0, (angle - (MAIN_START_DEG - 10)) / 10);
            } else if (angle > MAIN_START_DEG + MAIN_SPAN_DEG) {
              opacity = Math.max(0, (MAIN_START_DEG + MAIN_SPAN_DEG + 10 - angle) / 10);
            }

            el.setAttribute("transform", `translate(${x.toFixed(1)}, ${y.toFixed(1)}) scale(0.95)`);
            el.style.opacity = String(opacity);
            el.style.visibility = "visible";
          } else {
            el.style.visibility = "hidden";
          }
        }

        // ---------------------------------------------------------------------
        // 3. Bottom Add-ons Wheel (Mathematically locked to BTM_CX, BTM_CY, BTM_R)
        // ---------------------------------------------------------------------
        for (let i = 0; i < ADDONS_NODE_STREAM.length; i++) {
          const el = addonsNodesRef.current[i];
          if (!el) continue;

          let rel = (addonsStreamRef.current - i * 45) % 360;
          if (rel < 0) rel += 360;
          if (rel > 180) rel -= 360;
          const angle = BTM_START_DEG + rel;

          if (angle >= BTM_START_DEG - 10 && angle <= BTM_START_DEG + BTM_SPAN_DEG + 10) {
            const rad = (angle * Math.PI) / 180;
            const x = BTM_CX + BTM_R * Math.cos(rad);
            const y = BTM_CY + BTM_R * Math.sin(rad);

            let opacity = 1.0;
            if (angle < BTM_START_DEG) {
              opacity = Math.max(0, (angle - (BTM_START_DEG - 10)) / 10);
            } else if (angle > BTM_START_DEG + BTM_SPAN_DEG) {
              opacity = Math.max(0, (BTM_START_DEG + BTM_SPAN_DEG + 10 - angle) / 10);
            }

            el.setAttribute("transform", `translate(${x.toFixed(1)}, ${y.toFixed(1)}) scale(0.9)`);
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

  const curAds = ADS_WHEEL_PHASES[adsPhaseIdx] || ADS_WHEEL_PHASES[0];
  const curMain = MAIN_WHEEL_PHASES[mainPhaseIdx] || MAIN_WHEEL_PHASES[0];
  const curAddons = ADDONS_WHEEL_PHASES[addonsPhaseIdx] || ADDONS_WHEEL_PHASES[0];

  return (
    <div className="relative w-full max-w-[360px] xs:max-w-[380px] h-[520px] mx-auto select-none overflow-visible">
      {/* 
        ========================================================================
        CENTER HUBS LAYER (All dimensions mathematically positioned)
        ========================================================================
      */}

      {/* 1. TOP HUB: GOOGLE ADS <-> META ADS (Shifted RIGHT, cy: 105px) */}
      <div
        style={{
          width: "98px",
          height: "98px",
          left: `${TOP_CX - 49}px`,
          top: `${TOP_CY - 49}px`,
        }}
        className="pointer-events-auto absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-2 text-center"
      >
        <AdsWheelIcon type={curAds.centerIcon} className="h-4 w-4" />
        <span className="mt-1 font-sans text-[11px] font-bold text-[#06162C] leading-tight">
          {curAds.title}
        </span>
        <span className="text-[8px] leading-tight text-[#8998AD] line-clamp-1 max-w-[75px]">
          {curAds.subtitle}
        </span>
      </div>

      {/* 2. MAIN CENTER HUB: DEV -> CLOUD -> AI (Shifted LEFT, cy: 260px) */}
      <div
        style={{
          width: "132px",
          height: "132px",
          left: `${MAIN_CX - 66}px`,
          top: `${MAIN_CY - 66}px`,
        }}
        className="pointer-events-auto absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-md p-2.5 text-center"
      >
        <MainWheelIcon type={curMain.morphType} className="h-5 w-5" />
        <span className="mt-1 font-sans text-[13px] font-bold text-[#06162C] leading-tight">
          {curMain.title}
        </span>
        <span className="mt-0.5 text-[8.5px] leading-tight text-[#8998AD] line-clamp-1 max-w-[95px]">
          {curMain.subtitle}
        </span>
      </div>

      {/* 3. BOTTOM HUB: GOOGLE ADD-ONS <-> OFFICE ADD-INS (Shifted RIGHT, cy: 415px) */}
      <div
        style={{
          width: "98px",
          height: "98px",
          left: `${BTM_CX - 49}px`,
          top: `${BTM_CY - 49}px`,
        }}
        className="pointer-events-auto absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-2 text-center"
      >
        <AddonsWheelIcon type={curAddons.centerIcon} className="h-4 w-4" />
        <span className="mt-1 font-sans text-[11px] font-bold text-[#06162C] leading-tight">
          {curAddons.title}
        </span>
        <span className="text-[8px] leading-tight text-[#8998AD] line-clamp-1 max-w-[75px]">
          {curAddons.subtitle}
        </span>
      </div>

      {/* 
        ========================================================================
        SVG CANVAS LAYER: All 3 tracks & all nodes share exact (cx, cy, R)
        ========================================================================
      */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 380 520"
        fill="none"
      >
        <defs>
          <linearGradient id="mobileOrbitFade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
            <stop offset="14%" stopColor="#CBD5E1" stopOpacity="0.85" />
            <stop offset="86%" stopColor="#CBD5E1" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. TOP ARC TRACK */}
        <path
          d={createArcD(TOP_CX, TOP_CY, TOP_R, TOP_START_DEG, TOP_SPAN_DEG)}
          stroke="url(#mobileOrbitFade)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* 2. MAIN CENTER ARC TRACK */}
        <path
          d={createArcD(MAIN_CX, MAIN_CY, MAIN_R, MAIN_START_DEG, MAIN_SPAN_DEG)}
          stroke="url(#mobileOrbitFade)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* 3. BOTTOM ARC TRACK */}
        <path
          d={createArcD(BTM_CX, BTM_CY, BTM_R, BTM_START_DEG, BTM_SPAN_DEG)}
          stroke="url(#mobileOrbitFade)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* 1. Top Ads Orbit Nodes */}
        {ADS_NODE_STREAM.map((node, i) => (
          <g
            key={node.id}
            ref={(el) => {
              adsNodesRef.current[i] = el;
            }}
          >
            <foreignObject x="-16" y="-16" width="32" height="32" className="overflow-visible">
              <div
                style={{ width: "32px", height: "32px" }}
                className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-2xs"
              >
                <AdsWheelIcon type={node.iconKey} className="h-3.5 w-3.5" />
              </div>
            </foreignObject>
          </g>
        ))}

        {/* 2. Middle Main Orbit Nodes */}
        {CONTINUOUS_NODE_STREAM.map((node, i) => (
          <g
            key={node.id}
            ref={(el) => {
              mainNodesRef.current[i] = el;
            }}
          >
            <foreignObject x="-18" y="-18" width="36" height="36" className="overflow-visible">
              <div
                style={{ width: "36px", height: "36px" }}
                className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-2xs"
              >
                <MainWheelIcon type={node.iconKey} className="h-4 w-4" />
              </div>
            </foreignObject>
          </g>
        ))}

        {/* 3. Bottom Add-ons Orbit Nodes */}
        {ADDONS_NODE_STREAM.map((node, i) => (
          <g
            key={node.id}
            ref={(el) => {
              addonsNodesRef.current[i] = el;
            }}
          >
            <foreignObject x="-16" y="-16" width="32" height="32" className="overflow-visible">
              <div
                style={{ width: "32px", height: "32px" }}
                className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-2xs"
              >
                <AddonsWheelIcon type={node.iconKey} className="h-3.5 w-3.5" />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
};