"use client";

import * as React from "react";
import gsap from "gsap";
import { AddonsWheelPhaseConfig } from "@/types/heroAddonsWheel";
import { AddonsWheelIcon } from "./AddonsWheelIcons";

interface AddonsWheelCenterHubProps {
  currentPhase: AddonsWheelPhaseConfig;
  cx: number;
  cy: number;
  radius: number;
}

export const AddonsWheelCenterHub: React.FC<AddonsWheelCenterHubProps> = ({
  currentPhase,
  cx,
  cy,
  radius,
}) => {
  const iconContainerRef = React.useRef<HTMLDivElement | null>(null);
  const textContainerRef = React.useRef<HTMLDivElement | null>(null);
  const prevPhaseIdRef = React.useRef<string>(currentPhase.id);

  // 650ms Continuous Kinetic Morph Timeline
  React.useEffect(() => {
    if (prevPhaseIdRef.current === currentPhase.id) return;
    prevPhaseIdRef.current = currentPhase.id;

    const iconEl = iconContainerRef.current;
    const textEl = textContainerRef.current;

    if (!iconEl || !textEl) return;

    gsap.killTweensOf([iconEl, textEl]);

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // 1. Vector Icon Morph
    tl.to(iconEl, {
      scale: 0.55,
      rotate: -20,
      opacity: 0,
      duration: 0.22,
      onComplete: () => {
        gsap.set(iconEl, { rotate: 20 });
      },
    }).to(iconEl, {
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 0.43,
      ease: "back.out(1.6)",
    });

    // 2. Text split slide-roll
    tl.fromTo(
      textEl,
      { y: 6, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
      0.18,
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
      className="pointer-events-auto absolute z-20 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(6,22,44,0.08)] p-3 text-center select-none"
    >
      {/* 1. Official Platform Icon Capsule */}
      <div
        ref={iconContainerRef}
        className="flex items-center justify-center shrink-0"
        style={{ willChange: "transform, opacity" }}
      >
        <AddonsWheelIcon type={currentPhase.centerIcon} className="h-6 w-6" />
      </div>

      {/* 2. Typographic Content (Title & Description Contained) */}
      <div
        ref={textContainerRef}
        className="flex flex-col items-center justify-center mt-1.5 w-full max-w-[105px]"
        style={{ willChange: "transform, opacity" }}
      >
        <span className="font-sans text-[13px] sm:text-[14px] font-bold text-[#06162C] leading-snug">
          {currentPhase.title}
        </span>
        <span className="mt-0.5 text-[9.5px] leading-tight text-[#8998AD]">
          {currentPhase.subtitle}
        </span>
      </div>
    </div>
  );
};