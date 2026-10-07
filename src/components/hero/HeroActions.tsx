"use client";

import * as React from "react";
import Link from "next/link";
import { HERO_EDITORIAL_COPY } from "@/config/hero";
import { animateKineticArrowLoop } from "@/animations/navHoverAnimations";

export interface HeroActionsProps {
  actionsRef: React.RefObject<HTMLDivElement | null>;
  onOpenShowreel: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  actionsRef,
  onOpenShowreel,
}) => {
  const arrowRef = React.useRef<SVGSVGElement | null>(null);

  const handleMouseEnter = () => {
    animateKineticArrowLoop(arrowRef.current);
  };

  return (
    <div
      ref={actionsRef}
      style={{ opacity: 0 }}
      className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 w-full"
    >
      {/* Primary CTA: Website Theme Gradient Pill */}
      <Link
        href={HERO_EDITORIAL_COPY.primaryCtaHref}
        onMouseEnter={handleMouseEnter}
        className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-6 py-3 sm:px-7 sm:py-3.5 font-sans text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] transition-all duration-300 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] select-none shrink-0"
      >
        <span className="tracking-[-0.01em]">{HERO_EDITORIAL_COPY.primaryCtaText}</span>

        {/* Boundary Mask for Kinetic Arrow Loop */}
        <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
          <svg
            ref={arrowRef}
            className="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            aria-hidden="true"
            style={{ willChange: "transform, opacity" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </Link>

      {/* View Showreel Play Button */}
      <button
        type="button"
        onClick={onOpenShowreel}
        aria-label="Play Brivya Studio Showreel"
        className="group inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 sm:px-5 sm:py-3 border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(6,22,44,0.04)] font-sans text-[13px] sm:text-[14px] font-semibold text-[#06162C] transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] shrink-0"
      >
        <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-slate-100 text-[#06162C] transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#0A5FD7] group-hover:text-white">
          <svg className="h-3 w-3 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        <span className="tracking-[-0.01em]">{HERO_EDITORIAL_COPY.showreelCtaText}</span>
      </button>
    </div>
  );
};