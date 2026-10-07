"use client";

import * as React from "react";
import { MAIN_WHEEL_PHASES, CONTINUOUS_NODE_STREAM } from "@/config/heroMainWheelData";
import { ADS_WHEEL_PHASES, ADS_NODE_STREAM } from "@/config/heroAdsWheelData";
import { ADDONS_WHEEL_PHASES, ADDONS_NODE_STREAM } from "@/config/heroAddonsWheelData";
import { MainWheelIcon } from "../main-wheel/MainWheelIcons";
import { AdsWheelIcon } from "../ads-wheel/AdsWheelIcons";
import { AddonsWheelIcon } from "../addons-wheel/AddonsWheelIcons";

export const HeroMobileConstellation: React.FC = () => {
  // ---------------------------------------------------------------------------
  // 1. TOP SATELLITE WHEEL (Google Ads <-> Meta Ads)
  // ---------------------------------------------------------------------------
  const [adsPhaseIdx, setAdsPhaseIdx] = React.useState<number>(0);
  const adsNodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const adsStreamRef = React.useRef<number>(0);

  // ---------------------------------------------------------------------------
  // 2. MIDDLE MAIN WHEEL (Dev -> Cloud -> AI)
  // ---------------------------------------------------------------------------
  const [mainPhaseIdx, setMainPhaseIdx] = React.useState<number>(0);
  const mainNodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const mainStreamRef = React.useRef<number>(0);

  // ---------------------------------------------------------------------------
  // 3. BOTTOM SATELLITE WHEEL (Google Add-ons <-> Office Add-ins)
  // ---------------------------------------------------------------------------
  const [addonsPhaseIdx, setAddonsPhaseIdx] = React.useState<number>(0);
  const addonsNodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const addonsStreamRef = React.useRef<number>(0);

  const lastTimeRef = React.useRef<number | null>(null);

  // Unified Direct-DOM Mobile Kinetic Engine (60fps, Zero React state jank)
  React.useEffect(() => {
    let animId: number;
    const speed = 12; // 12 deg/sec linear velocity

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;

        // Advance all streams continuously
        adsStreamRef.current = (adsStreamRef.current + speed * delta) % 360;
        mainStreamRef.current = (mainStreamRef.current + speed * delta) % 1200;
        addonsStreamRef.current = (addonsStreamRef.current + speed * delta) % 360;

        // Phase Synchronization
        const targetAdsPhase = Math.floor(adsStreamRef.current / 180) % 2;
        setAdsPhaseIdx((prev) => (prev !== targetAdsPhase ? targetAdsPhase : prev));

        const targetMainPhase = Math.floor(mainStreamRef.current / 400) % 3;
        setMainPhaseIdx((prev) => (prev !== targetMainPhase ? targetMainPhase : prev));

        const targetAddonsPhase = Math.floor(addonsStreamRef.current / 180) % 2;
        setAddonsPhaseIdx((prev) => (prev !== targetAddonsPhase ? targetAddonsPhase : prev));

        // ---------------------------------------------------------------------
        // Top Ads Wheel Mutator (cx: 120, cy: 120, R: 82, arc: -80° -> +64°)
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
            const x = 120 + 82 * Math.cos(rad);
            const y = 120 + 82 * Math.sin(rad);

            let opacity = 1.0;
            if (angle < -80) opacity = Math.max(0, (angle - -92) / 12);
            else if (angle > 64) opacity = Math.max(0, (76 - angle) / 12);

            el.setAttribute("transform", `translate(${x}, ${y}) scale(0.92)`);
            el.style.opacity = String(opacity);
            el.style.visibility = "visible";
          } else {
            el.style.visibility = "hidden";
          }
        }

        // ---------------------------------------------------------------------
        // Middle Main Wheel Mutator (cx: 140, cy: 140, R: 104, arc: -72° -> +72°)
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
            const x = 140 + 104 * Math.cos(rad);
            const y = 140 + 104 * Math.sin(rad);

            let opacity = 1.0;
            if (angle < -72) opacity = Math.max(0, (angle - -84) / 12);
            else if (angle > 72) opacity = Math.max(0, (84 - angle) / 12);

            el.setAttribute("transform", `translate(${x}, ${y}) scale(0.96)`);
            el.style.opacity = String(opacity);
            el.style.visibility = "visible";
          } else {
            el.style.visibility = "hidden";
          }
        }

        // ---------------------------------------------------------------------
        // Bottom Add-ons Wheel Mutator (cx: 120, cy: 120, R: 82, arc: -64° -> +80°)
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
            const x = 120 + 82 * Math.cos(rad);
            const y = 120 + 82 * Math.sin(rad);

            let opacity = 1.0;
            if (angle < -64) opacity = Math.max(0, (angle - -76) / 12);
            else if (angle > 80) opacity = Math.max(0, (92 - angle) / 12);

            el.setAttribute("transform", `translate(${x}, ${y}) scale(0.92)`);
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
    <div className="flex flex-col items-center w-full max-w-[390px] mx-auto pt-6 pb-14 gap-10 sm:gap-12 overflow-visible select-none">
      {/* =================================================================== */}
      {/* 1. TOP WHEEL: GOOGLE ADS <-> META ADS (Shifted Right)               */}
      {/* =================================================================== */}
      <div className="w-full flex justify-end pr-1 sm:pr-3">
        <div className="relative w-[280px] h-[240px] flex items-center justify-center overflow-visible">
          {/* Center Hub */}
          <div
            style={{ width: "106px", height: "106px", left: "67px", top: "67px" }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-2 text-center"
          >
            <AdsWheelIcon type={curAds.centerIcon} className="h-5 w-5" />
            <span className="mt-1 font-sans text-xs font-bold text-[#06162C]">
              {curAds.title}
            </span>
            <span className="text-[9px] leading-tight text-[#8998AD] line-clamp-1 max-w-[85px]">
              {curAds.subtitle}
            </span>
          </div>

          {/* SVG Orbit Track & Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 240" fill="none">
            <path
              d="M 134 39 A 82 82 0 0 1 155 193"
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
                <foreignObject x="-18" y="-18" width="36" height="36" className="overflow-visible">
                  <div
                    style={{ width: "36px", height: "36px" }}
                    className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-xs"
                  >
                    <AdsWheelIcon type={node.iconKey} className="h-4 w-4" />
                  </div>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. MIDDLE MAIN WHEEL: DEV -> CLOUD -> AI (Shifted Left/Center)      */}
      {/* =================================================================== */}
      <div className="w-full flex justify-start pl-1 sm:pl-3">
        <div className="relative w-[320px] h-[280px] flex items-center justify-center overflow-visible">
          {/* Main Hub */}
          <div
            style={{ width: "138px", height: "138px", left: "71px", top: "71px" }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-md p-3 text-center"
          >
            <MainWheelIcon type={curMain.morphType} className="h-5.5 w-5.5" />
            <span className="mt-1 font-sans text-[13.5px] font-bold text-[#06162C]">
              {curMain.title}
            </span>
            <span className="mt-0.5 text-[9.5px] leading-tight text-[#8998AD] line-clamp-1 max-w-[105px]">
              {curMain.subtitle}
            </span>
          </div>

          {/* SVG Orbit Track & Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 280" fill="none">
            <path
              d="M 172 41 A 104 104 0 0 1 172 239"
              stroke="#CBD5E1"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {CONTINUOUS_NODE_STREAM.map((node, i) => (
              <g
                key={node.id}
                ref={(el) => {
                  mainNodesRef.current[i] = el;
                }}
              >
                <foreignObject x="-20" y="-20" width="40" height="40" className="overflow-visible">
                  <div
                    style={{ width: "40px", height: "40px" }}
                    className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-xs"
                  >
                    <MainWheelIcon type={node.iconKey} className="h-4.5 w-4.5" />
                  </div>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. BOTTOM WHEEL: GOOGLE ADD-ONS <-> OFFICE ADD-INS (Shifted Right)  */}
      {/* =================================================================== */}
      <div className="w-full flex justify-end pr-1 sm:pr-3">
        <div className="relative w-[280px] h-[240px] flex items-center justify-center overflow-visible">
          {/* Center Hub */}
          <div
            style={{ width: "106px", height: "106px", left: "67px", top: "67px" }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-2 text-center"
          >
            <AddonsWheelIcon type={curAddons.centerIcon} className="h-5 w-5" />
            <span className="mt-1 font-sans text-xs font-bold text-[#06162C]">
              {curAddons.title}
            </span>
            <span className="text-[9px] leading-tight text-[#8998AD] line-clamp-1 max-w-[85px]">
              {curAddons.subtitle}
            </span>
          </div>

          {/* SVG Orbit Track & Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 240" fill="none">
            <path
              d="M 155 46 A 82 82 0 0 1 134 200"
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
                <foreignObject x="-18" y="-18" width="36" height="36" className="overflow-visible">
                  <div
                    style={{ width: "36px", height: "36px" }}
                    className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-xs"
                  >
                    <AddonsWheelIcon type={node.iconKey} className="h-4 w-4" />
                  </div>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};