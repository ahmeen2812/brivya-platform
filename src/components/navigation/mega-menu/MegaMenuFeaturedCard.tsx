"use client";

import * as React from "react";
import Link from "next/link";
import { MEGA_MENU_FEATURED_CARD } from "@/config/servicesMegaMenu";

interface MegaMenuFeaturedCardProps {
  onNavigate: () => void;
  cardRef?: React.RefObject<HTMLDivElement | null>;
}

export const MegaMenuFeaturedCard: React.FC<MegaMenuFeaturedCardProps> = ({
  onNavigate,
  cardRef,
}) => {
  return (
    <div
      ref={cardRef}
      className="flex h-full w-full flex-col justify-between rounded-2xl bg-gradient-to-br from-[#061B3A] via-[#072B5E] to-[#0A5FD7] p-5 sm:p-6 text-white shadow-md relative overflow-hidden"
    >
      {/* Background Architectural Geometry Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"
      />

      <div className="relative z-10 flex flex-col">
        {/* System Tag */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#C7A76B] border border-white/15 w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C7A76B]" />
          {MEGA_MENU_FEATURED_CARD.tag}
        </div>

        {/* Title & Description */}
        <h4 className="mt-3 font-sans text-base font-bold leading-snug tracking-tight text-white">
          {MEGA_MENU_FEATURED_CARD.title}
        </h4>

        <p className="mt-2 font-sans text-xs leading-relaxed text-white/80">
          {MEGA_MENU_FEATURED_CARD.description}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex flex-col gap-3">
        {/* Telemetry Metric Pill */}
        <div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 border border-white/10 font-mono text-[10px]">
          <span className="text-white/75">{MEGA_MENU_FEATURED_CARD.metricLabel}</span>
          <span className="font-bold text-[#C7A76B]">
            {MEGA_MENU_FEATURED_CARD.metricHighlight}
          </span>
        </div>

        {/* Direct Action Button */}
        <Link
          href={MEGA_MENU_FEATURED_CARD.buttonHref}
          onClick={onNavigate}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 font-sans text-xs font-bold text-[#06162C] shadow-sm transition-all duration-200 hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.98]"
        >
          <span>{MEGA_MENU_FEATURED_CARD.buttonText}</span>
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};