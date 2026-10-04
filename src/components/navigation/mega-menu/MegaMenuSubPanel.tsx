"use client";

import * as React from "react";
import Link from "next/link";
import { ServicePillar, SubServiceItem } from "@/types/megaMenu";
import { MegaMenuBrandIcon } from "./MegaMenuBrandIcons";
import { animateSubPanelEntrance } from "@/animations/servicesMegaMenuAnimations";

interface MegaMenuSubPanelProps {
  pillar: ServicePillar;
  onNavigate: () => void;
  subPanelRef?: React.RefObject<HTMLDivElement | null>;
}

// Clean Sub-Service Item with Precision Bullet (or official badge for Office/Google)
const SubServiceItemRow: React.FC<{
  sub: SubServiceItem;
  onNavigate: () => void;
}> = ({ sub, onNavigate }) => {
  // If the item has a specific product badge (like Word/Excel or Docs/Sheets), show its colored badge
  const hasProductBadge =
    sub.iconType &&
    [
      "word",
      "excel",
      "powerpoint",
      "outlook",
      "teams",
      "sheets",
      "docs",
      "gmail",
      "forms",
    ].includes(sub.iconType);

  return (
    <Link
      href={sub.href}
      onClick={onNavigate}
      className="group flex items-start gap-2.5 rounded-xl p-2 transition-all duration-150 hover:bg-slate-50 border border-transparent hover:border-slate-100/90"
    >
      {/* Precision Visual Indicator: Micro-badge for tools, or active bullet for services */}
      {hasProductBadge ? (
        <div className="mt-0.5 shrink-0">
          <MegaMenuBrandIcon type={sub.iconType!} />
        </div>
      ) : (
        <div className="mt-2 flex h-2 w-2 shrink-0 items-center justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-all duration-200 group-hover:bg-[#1675F8] group-hover:scale-125" />
        </div>
      )}

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[12.5px] font-semibold text-[#06162C] group-hover:text-[#1675F8] transition-colors">
            {sub.title}
          </span>

          {sub.badge && (
            <span className="rounded-full bg-[#1675F8]/10 px-2 py-0.5 text-[9px] font-semibold text-[#1675F8]">
              {sub.badge}
            </span>
          )}
        </div>

        <p className="mt-0.5 line-clamp-1 font-sans text-[11px] leading-relaxed text-[#8998AD]">
          {sub.description}
        </p>
      </div>
    </Link>
  );
};

export const MegaMenuSubPanel: React.FC<MegaMenuSubPanelProps> = ({
  pillar,
  onNavigate,
  subPanelRef,
}) => {
  const internalRef = React.useRef<HTMLDivElement | null>(null);
  const panelRef = subPanelRef || internalRef;

  React.useEffect(() => {
    animateSubPanelEntrance(panelRef.current);
  }, [pillar.id, panelRef]);

  return (
    <div
      ref={panelRef}
      id={`subpanel-${pillar.id}`}
      role="tabpanel"
      aria-labelledby={`pillartab-${pillar.id}`}
      className="flex h-full w-full flex-col justify-between p-4 sm:p-5"
    >
      <div>
        {/* Header with Title and Overview Link */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs font-bold text-[#06162C]">
              {pillar.title}
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-sans text-[11px] text-[#8998AD]">
              {pillar.subServices.length} Deliverables
            </span>
          </div>

          <Link
            href={pillar.href}
            onClick={onNavigate}
            className="group inline-flex items-center gap-1 font-sans text-xs font-bold text-[#1675F8] hover:text-[#0A5FD7] transition-colors"
          >
            <span>Overview</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* 2-Column Clean Subservices Grid */}
        <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
          {pillar.subServices.map((sub: SubServiceItem) => (
            <SubServiceItemRow key={sub.id} sub={sub} onNavigate={onNavigate} />
          ))}
        </div>
      </div>

      {/* Contextual Per-Pillar Conversion CTA Panel (Light-Theme Studio Standard) */}
      <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 sm:p-3 shadow-xs">
        <div className="flex flex-col">
          <span className="font-sans text-xs font-bold text-[#06162C]">
            {pillar.contextualCta.headline}
          </span>
          <span className="font-mono text-[9.5px] text-[#64748B]">
            {pillar.contextualCta.turnaroundTag}
          </span>
        </div>

        <Link
          href={pillar.contextualCta.href}
          onClick={onNavigate}
          className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-3.5 py-2 font-sans text-[11px] font-semibold text-white shadow-xs transition-all duration-200 hover:shadow-sm active:scale-[0.98] shrink-0 ml-3"
        >
          <span>{pillar.contextualCta.actionText}</span>
          <svg
            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};