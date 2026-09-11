"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_BRAND_DATA } from "@/data/footerLinks";

export const FooterCTA: React.FC = () => {
  const { cta } = FOOTER_BRAND_DATA;

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10 sm:py-12 border-b border-white/[0.08]">
      {/* Left Copy Block */}
      <div className="flex flex-col">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#38BDF8]">
          {cta.eyebrow}
        </span>
        <h2 className="mt-1.5 font-sans text-[26px] sm:text-[30px] md:text-[34px] font-extrabold tracking-[-0.03em] text-[#F4F7FC]">
          {cta.headline}
        </h2>
        <p className="mt-1 font-sans text-[14px] sm:text-[15px] text-[#8998AD]">
          {cta.subheadline}
        </p>
      </div>

      {/* Primary Action Button (Matches Navbar Gradient Spec) */}
      <Link
        href={cta.buttonHref}
        className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-6 sm:px-8 py-3.5 font-sans text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_4px_20px_-2px_rgba(6,27,58,0.5)] border border-white/10 transition-all duration-300 hover:border-[#1675F8]/40 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] select-none shrink-0"
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