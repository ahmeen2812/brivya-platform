"use client";

import * as React from "react";
import { MAIN_WHEEL_PHASES, CONTINUOUS_NODE_STREAM } from "@/config/heroMainWheelData";
import { ADS_WHEEL_PHASES, ADS_NODE_STREAM } from "@/config/heroAdsWheelData";
import { ADDONS_WHEEL_PHASES, ADDONS_NODE_STREAM } from "@/config/heroAddonsWheelData";
import { MainWheelIcon } from "../main-wheel/MainWheelIcons";
import { AdsWheelIcon } from "../ads-wheel/AdsWheelIcons";
import { AddonsWheelIcon } from "../addons-wheel/AddonsWheelIcons";

export const HeroMobileConstellation: React.FC = () => {
  // Phase States (Updated strictly on change, NOT on every frame)
  const [adsPhaseIdx, setAdsPhaseIdx] = React.useState<number>(0);
  const [mainPhaseIdx, setMainPhaseIdx] = React.useState<number>(0);
  const [addonsPhaseIdx, setAddonsPhaseIdx] = React.useState<number>(0);

  // References to prevent state setter calls inside the 60fps loop
  const lastAdsPhaseRef = React.useRef<number>(0);
  const lastMainPhaseRef = React.useRef<number>(0);
  const lastAddonsPhaseRef = React.useRef<number>(0);

  // DOM node references
  const adsNodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const mainNodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const addonsNodesRef = React.useRef<(SVGGElement | null)[]>([]);

  // Stream positions
  const adsStreamRef = React.useRef<number>(0);
  const mainStreamRef = React.useRef<number>(0);
  const addonsStreamRef = React.useRef<number>(0);

  const lastTimeRef = React.useRef<number | null>(null);

  // High-Performance Mobile Animation Engine (Direct DOM updates with 0 lag)
  React.useEffect(() => {
    let animId: number;
    const speed = 12; // 12 deg/sec linear velocity

    const animate = (time: number) => {
      // Sleep animation loop if resized to desktop to save CPU cycles
      if (window.innerWidth >= 1024) {
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
        // ZERO-LAG PHASE DISPATCH:
        // Only trigger React state updates when the category genuinely changes!
        // ---------------------------------------------------------------------
        const targetAds = Math.floor(adsStreamRef.current / 180) % 2;
        if (targetAds !== lastAdsPhaseRef.current) {
          lastAdsPhaseRef.current = targetAds;
          setAdsPhaseIdx(targetAds);
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
        // 1. Top Ads Wheel (cx: 110, cy: 110, R: 76, arc: -80° -> +64°)
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
            const x = 110 + 76 * Math.cos(rad);
            const y = 110 + 76 * Math.sin(rad);

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
        // 2. Middle Main Wheel (cx: 130, cy: 130, R: 98, arc: -72° -> +72°)
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
            const x = 130 + 98 * Math.cos(rad);
            const y = 130 + 98 * Math.sin(rad);

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
        // 3. Bottom Add-ons Wheel (cx: 110, cy: 110, R: 76, arc: -64° -> +80°)
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
            const x = 110 + 76 * Math.cos(rad);
            const y = 110 + 76 * Math.sin(rad);

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
    <div className="flex flex-col items-center w-full max-w-[390px] mx-auto pt-2 pb-10 select-none overflow-visible">
      {/* =================================================================== */}
      {/* 1. TOP WHEEL: GOOGLE ADS <-> META ADS (Shifted Right)               */}
      {/* =================================================================== */}
      <div className="w-full flex justify-end pr-2 sm:pr-4">
        <div className="relative w-[240px] h-[200px] flex items-center justify-center overflow-visible">
          {/* Center Hub (100px) */}
          <div
            style={{ width: "100px", height: "100px", left: "60px", top: "60px" }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-2 text-center"
          >
            <AdsWheelIcon type={curAds.centerIcon} className="h-4.5 w-4.5" />
            <span className="mt-1 font-sans text-[11.5px] font-bold text-[#06162C] leading-tight">
              {curAds.title}
            </span>
            <span className="text-[8.5px] leading-tight text-[#8998AD] line-clamp-1 max-w-[75px]">
              {curAds.subtitle}
            </span>
          </div>

          {/* SVG Orbit Track & Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 200" fill="none">
            <path
              d="M 123 35 A 76 76 0 0 1 143 178"
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
                    className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-xs"
                  >
                    <AdsWheelIcon type={node.iconKey} className="h-3.5 w-3.5" />
                  </div>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. MIDDLE MAIN WHEEL: DEV -> CLOUD -> AI (Shifted Left/Center)      */}
      {/* Tucked upward with -mt-8 to create an interconnected S-curve        */}
      {/* =================================================================== */}
      <div className="w-full flex justify-start pl-2 sm:pl-4 -mt-8 sm:-mt-10">
        <div className="relative w-[280px] h-[240px] flex items-center justify-center overflow-visible">
          {/* Main Hub (130px) */}
          <div
            style={{ width: "130px", height: "130px", left: "65px", top: "65px" }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-md p-3 text-center"
          >
            <MainWheelIcon type={curMain.morphType} className="h-5 w-5" />
            <span className="mt-1 font-sans text-[13px] font-bold text-[#06162C] leading-tight">
              {curMain.title}
            </span>
            <span className="mt-0.5 text-[9px] leading-tight text-[#8998AD] line-clamp-1 max-w-[95px]">
              {curMain.subtitle}
            </span>
          </div>

          {/* SVG Orbit Track & Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 240" fill="none">
            <path
              d="M 160 37 A 98 98 0 0 1 160 223"
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
                <foreignObject x="-19" y="-19" width="38" height="38" className="overflow-visible">
                  <div
                    style={{ width: "38px", height: "38px" }}
                    className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-xs"
                  >
                    <MainWheelIcon type={node.iconKey} className="h-4 w-4" />
                  </div>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. BOTTOM WHEEL: GOOGLE ADD-ONS <-> OFFICE ADD-INS (Shifted Right)  */}
      {/* Tucked upward with -mt-8 for compact flow                           */}
      {/* =================================================================== */}
      <div className="w-full flex justify-end pr-2 sm:pr-4 -mt-8 sm:-mt-10">
        <div className="relative w-[240px] h-[200px] flex items-center justify-center overflow-visible">
          {/* Center Hub (100px) */}
          <div
            style={{ width: "100px", height: "100px", left: "60px", top: "60px" }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-2 text-center"
          >
            <AddonsWheelIcon type={curAddons.centerIcon} className="h-4.5 w-4.5" />
            <span className="mt-1 font-sans text-[11.5px] font-bold text-[#06162C] leading-tight">
              {curAddons.title}
            </span>
            <span className="text-[8.5px] leading-tight text-[#8998AD] line-clamp-1 max-w-[75px]">
              {curAddons.subtitle}
            </span>
          </div>

          {/* SVG Orbit Track & Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 200" fill="none">
            <path
              d="M 143 42 A 76 76 0 0 1 123 185"
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
                    className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-xs"
                  >
                    <AddonsWheelIcon type={node.iconKey} className="h-3.5 w-3.5" />
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