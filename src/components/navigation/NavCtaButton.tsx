"use client";

import * as React from "react";
import Link from "next/link";
import { NAV_BRAND_CONFIG } from "@/config/navigation";
import { animateKineticArrowLoop } from "@/animations/navHoverAnimations";

interface NavCtaButtonProps {
  className?: string;
  onClick?: () => void;
  buttonRef?: React.RefObject<HTMLDivElement | null>;
}

export const NavCtaButton: React.FC<NavCtaButtonProps> = ({
  className,
  onClick,
  buttonRef,
}) => {
  const arrowRef = React.useRef<SVGSVGElement | null>(null);

  const handleMouseEnter = () => {
    animateKineticArrowLoop(arrowRef.current);
  };

  return (
    <div
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      className="shrink-0"
      style={{ willChange: "transform, opacity" }}
    >
      <Link
        href={NAV_BRAND_CONFIG.ctaHref}
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-3.5 py-1.5 sm:px-5 sm:py-2.5 lg:px-7 lg:py-3 font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] transition-all duration-300 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] select-none ${
          className || ""
        }`}
      >
        <span className="tracking-[-0.01em] whitespace-nowrap">
          {NAV_BRAND_CONFIG.ctaText}
        </span>

        {/* Boundary Mask for Kinetic Arrow Loop */}
        <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center overflow-hidden">
          <svg
            ref={arrowRef}
            className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            style={{ willChange: "transform, opacity" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};