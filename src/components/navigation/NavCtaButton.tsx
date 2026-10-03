"use client";

import * as React from "react";
import Link from "next/link";
import { NAV_BRAND_CONFIG } from "@/config/navigation";

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
  return (
    <div
      ref={buttonRef}
      className="shrink-0"
      style={{ willChange: "transform, opacity" }}
    >
      <Link
        href={NAV_BRAND_CONFIG.ctaHref}
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 font-sans text-[12.5px] sm:text-[13.5px] lg:text-[14px] font-medium text-white shadow-[0_6px_20px_-3px_rgba(6,27,58,0.35)] transition-all duration-300 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] select-none ${
          className || ""
        }`}
      >
        <span className="tracking-[-0.01em] whitespace-nowrap">
          {NAV_BRAND_CONFIG.ctaText}
        </span>

        {/* Trailing Directional Arrow Icon */}
        <svg
          className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
};