"use client";

import * as React from "react";
import gsap from "gsap";
import { ADS_WHEEL_PHASES, ADS_NODE_STREAM } from "@/config/heroAdsWheelData";
import { AdsWheelPhaseConfig } from "@/types/heroAdsWheel";
import { AdsWheelIcon } from "../ads-wheel/AdsWheelIcons";

export const MobileAdsWheel: React.FC = () => {
  const CX = 85;
  const CY = 85;
  const HUB_R = 40; // 80px diameter hub
  const ORBIT_R = 58; // Compact 18px clearance from hub
  const START_DEG = -80; // 280°
  const SPAN_DEG = 144; // Ends at +64°

  const [phaseIdx, setPhaseIdx] = React.useState<number>(0);
  const currentPhase: AdsWheelPhaseConfig = ADS_WHEEL_PHASES[phaseIdx] || ADS_WHEEL_PHASES[0];

  const lastPhaseRef = React.useRef<number>(0);
  const nodesRef = React.useRef<(SVGGElement | null)[]>([]);
  const streamRef = React.useRef<number>(0);
  const lastTimeRef = React.useRef<number | null>(null);

  const iconRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLDivElement | null>(null);

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
        streamRef.current = (streamRef.current + speed * delta) % 360;

        const target = Math.floor(streamRef.current / 180) % 2;
        if (target !== lastPhaseRef.current) {
          lastPhaseRef.current = target;
          setPhaseIdx(target);
        }

        for (let i = 0; i < ADS_NODE_STREAM.length; i++) {
          const el = nodesRef.current[i];
          if (!el) continue;

          let rel = (streamRef.current - i * 45) % 360;
          if (rel < 0) rel += 360;
          if (rel > 180) rel -= 360;
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

  const sRad = (START_DEG * Math.PI) / 180;
  const eRad = ((START_DEG + SPAN_DEG) * Math.PI) / 180;
  const x1 = CX + ORBIT_R * Math.cos(sRad);
  const y1 = CY + ORBIT_R * Math.sin(sRad);
  const x2 = CX + ORBIT_R * Math.cos(eRad);
  const y2 = CY + ORBIT_R * Math.sin(eRad);
  const arcD = `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${ORBIT_R} ${ORBIT_R} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;

  // Render official solid platform icons (Guarantees Meta is NEVER transparent)
  const renderCenterIcon = (iconKey: "google-ads" | "meta") => {
    if (iconKey === "meta") {
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 7.2C10.6 5.2 8.7 4 6.5 4C2.9 4 0 7.3 0 11.8C0 16.4 3 20 6.6 20C8.9 20 10.7 18.7 12 16.6C13.3 18.7 15.1 20 17.4 20C21 20 24 16.4 24 11.8C24 7.3 21.1 4 17.5 4C15.3 4 13.4 5.2 12 7.2ZM6.6 17.4C4.4 17.4 2.6 15 2.6 11.8C2.6 8.7 4.3 6.6 6.5 6.6C8.3 6.6 9.8 8.1 10.8 10.6C9.9 13.6 8.5 17.4 6.6 17.4ZM17.4 17.4C15.5 17.4 14.1 13.6 13.2 10.6C14.2 8.1 15.7 6.6 17.5 6.6C19.7 6.6 21.4 8.7 21.4 11.8C21.4 15 19.6 17.4 17.4 17.4Z"
            fill="#0064E0"
          />
        </svg>
      );
    }
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path d="M4.1 14.8l4.9-8.5c.7-1.2 2.2-1.7 3.5-1 1.3.7 1.7 2.2 1 3.5l-4.9 8.5c-.7 1.2-2.2 1.7-3.5 1-1.3-.7-1.7-2.3-1-3.5z" fill="#FBBC04" />
        <path d="M12.9 8.8l4.9 8.5c.7 1.2 2.2 1.7 3.5 1 1.3-.7 1.7-2.2 1-3.5l-4.9-8.5c-.7-1.2-2.2-1.7-3.5-1-1.3.7-1.7 2.2-1 3.5z" fill="#4285F4" />
        <circle cx="6.4" cy="17.2" r="2.8" fill="#34A853" />
      </svg>
    );
  };

  return (
    <div className="relative w-[170px] h-[170px] flex items-center justify-center select-none overflow-visible pointer-events-none">
      {/* Center Hub */}
      <div
        style={{
          width: `${HUB_R * 2}px`,
          height: `${HUB_R * 2}px`,
          left: `${CX - HUB_R}px`,
          top: `${CY - HUB_R}px`,
        }}
        className="pointer-events-auto absolute z-10 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-1.5 text-center"
      >
        <div ref={iconRef}>{renderCenterIcon(currentPhase.centerIcon)}</div>
        <div ref={textRef} className="flex flex-col items-center justify-center mt-1 w-full max-w-[68px]">
          <span className="font-sans text-[10px] font-bold text-[#06162C] leading-tight">
            {currentPhase.title}
          </span>
          <span className="text-[7px] leading-tight text-[#8998AD] line-clamp-1">
            {currentPhase.subtitle}
          </span>
        </div>
      </div>

      {/* SVG Arc and Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 170 170" fill="none">
        <defs>
          <linearGradient id="mobAdsArcGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
            <stop offset="14%" stopColor="#CBD5E1" stopOpacity="0.85" />
            <stop offset="86%" stopColor="#CBD5E1" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={arcD} stroke="url(#mobAdsArcGrad)" strokeWidth="1.2" strokeLinecap="round" />

        {ADS_NODE_STREAM.map((node, i) => (
          <g key={node.id} ref={(el) => { nodesRef.current[i] = el; }}>
            <foreignObject x="-13" y="-13" width="26" height="26" className="overflow-visible">
              <div
                style={{ width: "26px", height: "26px" }}
                className="flex items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-2xs"
              >
                <AdsWheelIcon type={node.iconKey} className="h-3 w-3" />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
};