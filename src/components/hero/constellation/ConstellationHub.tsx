"use client";

import * as React from "react";
import gsap from "gsap";
import { ConstellationPhase } from "@/types/heroConstellation";
import { HeroOrbitIcon } from "../HeroOrbitIcons";

interface ConstellationHubProps {
  cx: number;
  cy: number;
  radius: number;
  currentPhase: ConstellationPhase;
}

export const ConstellationHub: React.FC<ConstellationHubProps> = ({
  cx,
  cy,
  radius,
  currentPhase,
}) => {
  const iconWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const textWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const prevPhaseIdRef = React.useRef<string>(currentPhase.id);

  // Kinetic Morph sequence whenever the phase changes
  React.useEffect(() => {
    if (prevPhaseIdRef.current === currentPhase.id) return;
    prevPhaseIdRef.current = currentPhase.id;

    const iconEl = iconWrapperRef.current;
    const textEl = textWrapperRef.current;

    if (!iconEl || !textEl) return;

    gsap.killTweensOf([iconEl, textEl]);

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // 1. Icon contracts with slight rotation, then springs back with new asset
    tl.to(iconEl, {
      scale: 0.6,
      rotate: -20,
      opacity: 0,
      duration: 0.18,
      onComplete: () => {
        // Icon swap happens at zero-scale
        gsap.set(iconEl, { rotate: 20 });
      },
    }).to(iconEl, {
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 0.35,
      ease: "back.out(1.5)",
    });

    // 2. Text slides down and morphs simultaneously
    tl.fromTo(
      textEl,
      { y: 6, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.28, ease: "power3.out" },
      0.15,
    );
  }, [currentPhase.id]);

  return (
    <div
      style={{
        width: radius * 2,
        height: radius * 2,
        left: cx - radius,
        top: cy - radius,
      }}
      className="pointer-events-auto absolute z-20 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_8px_30px_-6px_rgba(6,22,44,0.08)] p-3 text-center select-none"
    >
      {/* Morphing Icon Capsule */}
      <div
        ref={iconWrapperRef}
        className="flex items-center justify-center shrink-0"
        style={{ willChange: "transform, opacity" }}
      >
        <HeroOrbitIcon type={currentPhase.centerIcon} className="h-5 w-5" />
      </div>

      {/* Morphing Text Container */}
      <div
        ref={textWrapperRef}
        className="flex flex-col items-center justify-center mt-1"
        style={{ willChange: "transform, opacity" }}
      >
        <span className="font-sans text-xs sm:text-[13.5px] font-bold text-[#06162C] leading-snug">
          {currentPhase.title}
        </span>
        <span className="mt-0.5 text-[9.5px] sm:text-[10px] leading-tight text-[#8998AD] line-clamp-1 max-w-[90%]">
          {currentPhase.subtitle}
        </span>
      </div>
    </div>
  );
};