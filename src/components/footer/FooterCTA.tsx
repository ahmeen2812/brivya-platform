"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_BRAND_DATA } from "@/data/footerLinks";

export const FooterCTA: React.FC = () => {
  const { cta } = FOOTER_BRAND_DATA;

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 sm:py-7 border-b border-white/[0.08]">
      {/* Left Text Block */}
      <div className="flex flex-col">
        <h2 className="font-sans text-[22px] sm:text-[26px] md:text-[28px] font-extrabold tracking-[-0.03em] text-[#F4F7FC] leading-snug">
          {cta.headline}
        </h2>
        <p className="mt-0.5 font-sans text-[13px] sm:text-[14px] text-[#94A3B8]">
          {cta.subheadline}
        </p>
      </div>

      {/* Navbar-Gradient Button */}
      <Link
        href={cta.buttonHref}
        className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-5 sm:px-6 py-2.5 sm:py-3 font-sans text-[13px] font-semibold text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.4)] border border-white/10 transition-all duration-200 hover:border-[#1675F8]/40 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] select-none shrink-0"
      >
        <span>{cta.buttonText}</span>
        <span
          aria-hidden="true"
          className="text-[#F4F7FC] transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>
  );
};