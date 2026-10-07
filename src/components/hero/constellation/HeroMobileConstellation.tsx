"use client";

import * as React from "react";
import { MAIN_WHEEL_PHASES, CONTINUOUS_NODE_STREAM } from "@/config/heroMainWheelData";
import { ADS_WHEEL_PHASES, ADS_NODE_STREAM } from "@/config/heroAdsWheelData";
import { ADDONS_WHEEL_PHASES, ADDONS_NODE_STREAM } from "@/config/heroAddonsWheelData";
import { MainWheelIcon } from "../main-wheel/MainWheelIcons";
import { AdsWheelIcon } from "../ads-wheel/AdsWheelIcons";
import { AddonsWheelIcon } from "../addons-wheel/AddonsWheelIcons";

export const HeroMobileConstellation: React.FC = () => {
  // Phase States (Updated strictly on change, zero state lag in 60fps loop)
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

  // High-Performance Mobile Animation Engine
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
        // 1. Top Ads Wheel (cx: 100, cy: 95, R: 72, arc: -80° -> +64°)
        // ---------------------------------------------------------------------
        for (let i = 0; i < ADS_NODE_STREAM.length; i++) {
          const el = adsNodesRef.current[i];
          if (!el) continue;

          let rel = (adsStreamRef.current - i * 45) % 360;
          if (rel < 0) rel += 360;
          if (rel > 180) rel -= 360;
          const angle = -80 + rel;

          if (angle >= -92 && angle <= 76) {
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 72 * Math.cos(rad);
            const y = 95 + 72 * Math.sin(rad);

            let opacity = 1.0;
            if (angle < -80) opacity = Math.max(0, (angle - -92) / 12);
            else if (angle > 64) opacity = Math.max(0, (76 - angle) / 12);

            el.setAttribute("transform", `translate(${x.toFixed(1)}, ${y.toFixed(1)}) scale(0.9)`);
            el.style.opacity = String(opacity);
            el.style.visibility = "visible";
          } else {
            el.style.visibility = "hidden";
          }
        }

        // ---------------------------------------------------------------------
        // 2. Middle Main Wheel (cx: 115, cy: 115, R: 90, arc: -72° -> +72°)
        // ---------------------------------------------------------------------
        for (let i = 0; i < CONTINUOUS_NODE_STREAM.length; i++) {
          const el = mainNodesRef.current[i];
          if (!el) continue;

          let rel = (mainStreamRef.current - i * 40) % 1200;
          if (rel < 0) rel += 1200;
          if (rel > 600) rel -= 1200;
          const angle = -72 + rel;

          if (angle >= -84 && angle <= 84) {
            const rad = (angle * Math.PI) / 180;
            const x = 115 + 90 * Math.cos(rad);
            const y = 115 + 90 * Math.sin(rad);

            let opacity = 1.0;
            if (angle < -72) opacity = Math.max(0, (angle - -84) / 12);
            else if (angle > 72) opacity = Math.max(0, (84 - angle) / 12);

            el.setAttribute("transform", `translate(${x.toFixed(1)}, ${y.toFixed(1)}) scale(0.95)`);
            el.style.opacity = String(opacity);
            el.style.visibility = "visible";
          } else {
            el.style.visibility = "hidden";
          }
        }

        // ---------------------------------------------------------------------
        // 3. Bottom Add-ons Wheel (cx: 100, cy: 95, R: 72, arc: -64° -> +80°)
        // ---------------------------------------------------------------------
        for (let i = 0; i < ADDONS_NODE_STREAM.length; i++) {
          const el = addonsNodesRef.current[i];
          if (!el) continue;

          let rel = (addonsStreamRef.current - i * 45) % 360;
          if (rel < 0) rel += 360;
          if (rel > 180) rel -= 360;
          const angle = -64 + rel;

          if (angle >= -76 && angle <= 92) {
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 72 * Math.cos(rad);
            const y = 95 + 72 * Math.sin(rad);

            let opacity = 1.0;
            if (angle < -64) opacity = Math.max(0, (angle - -76) / 12);
            else if (angle > 80) opacity = Math.max(0, (92 - angle) / 12);

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
    <div className="relative w-full max-w-[360px] xs:max-w-[390px] h-[480px] xs:h-[500px] mx-auto select-none overflow-visible">
      {/* =================================================================== */}
      {/* 1. TOP WHEEL: GOOGLE ADS <-> META ADS (Shifted RIGHT)               */}
      {/* =================================================================== */}
      <div className="absolute top-0 right-0 w-[210px] h-[190px] overflow-visible">
        {/* Center Hub */}
        <div
          style={{ width: "94px", height: "94px", left: "53px", top: "48px" }}
          className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-2 text-center"
        >
          <AdsWheelIcon type={curAds.centerIcon} className="h-4 w-4" />
          <span className="mt-1 font-sans text-[11px] font-bold text-[#06162C] leading-tight">
            {curAds.title}
          </span>
          <span className="text-[8px] leading-tight text-[#8998AD] line-clamp-1 max-w-[72px]">
            {curAds.subtitle}
          </span>
        </div>

        {/* SVG Orbit Track & Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 210 190" fill="none">
          <path
            d="M 112 24 A 72 72 0 0 1 131 160"
            stroke="#CBD5E1"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
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
        </svg>
      </div>

      {/* =================================================================== */}
      {/* 2. MIDDLE MAIN WHEEL: DEV -> CLOUD -> AI (Shifted LEFT / CENTER)    */}
      {/* Interlocking offset at top: 135px                                   */}
      {/* =================================================================== */}
      <div className="absolute top-[135px] xs:top-[140px] left-[-10px] xs:left-0 w-[240px] h-[230px] overflow-visible">
        {/* Main Hub */}
        <div
          style={{ width: "118px", height: "118px", left: "56px", top: "56px" }}
          className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-md p-2.5 text-center"
        >
          <MainWheelIcon type={curMain.morphType} className="h-5 w-5" />
          <span className="mt-1 font-sans text-[12.5px] font-bold text-[#06162C] leading-tight">
            {curMain.title}
          </span>
          <span className="mt-0.5 text-[8.5px] leading-tight text-[#8998AD] line-clamp-1 max-w-[95px]">
            {curMain.subtitle}
          </span>
        </div>

        {/* SVG Orbit Track & Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 230" fill="none">
          <path
            d="M 143 29 A 90 90 0 0 1 143 201"
            stroke="#CBD5E1"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
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
        </svg>
      </div>

      {/* =================================================================== */}
      {/* 3. BOTTOM WHEEL: GOOGLE ADD-ONS <-> OFFICE ADD-INS (Shifted RIGHT)  */}
      {/* Interlocking offset at top: 290px                                   */}
      {/* =================================================================== */}
      <div className="absolute top-[290px] xs:top-[300px] right-0 w-[210px] h-[190px] overflow-visible">
        {/* Center Hub */}
        <div
          style={{ width: "94px", height: "94px", left: "53px", top: "48px" }}
          className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-2 text-center"
        >
          <AddonsWheelIcon type={curAddons.centerIcon} className="h-4 w-4" />
          <span className="mt-1 font-sans text-[11px] font-bold text-[#06162C] leading-tight">
            {curAddons.title}
          </span>
          <span className="text-[8px] leading-tight text-[#8998AD] line-clamp-1 max-w-[72px]">
            {curAddons.subtitle}
          </span>
        </div>

        {/* SVG Orbit Track & Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 210 190" fill="none">
          <path
            d="M 131 30 A 72 72 0 0 1 112 166"
            stroke="#CBD5E1"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
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
    </div>
  );
};