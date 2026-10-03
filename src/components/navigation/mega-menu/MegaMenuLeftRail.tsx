"use client";

import * as React from "react";
import { ServiceCategory } from "@/config/servicesMegaMenu";

interface MegaMenuLeftRailProps {
  categories: readonly ServiceCategory[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  railRef?: React.RefObject<HTMLDivElement | null>;
}

export const MegaMenuLeftRail: React.FC<MegaMenuLeftRailProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  railRef,
}) => {
  // Renders bespoke geometric glyphs for each service category
  const renderCategoryIcon = (type: ServiceCategory["iconType"]) => {
    switch (type) {
      case "code":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "google":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case "meta":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "ai":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "cloud":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={railRef}
      role="tablist"
      aria-label="Service Pillars"
      className="flex w-full flex-col gap-1.5 p-4 sm:p-5"
    >
      <div className="mb-2 flex items-center justify-between px-3 text-[10px] font-mono uppercase tracking-widest text-[#8998AD]">
        <span>// 05 CORE SYSTEMS</span>
        <span>SELECT CATEGORY</span>
      </div>

      {categories.map((cat) => {
        const isActive = cat.id === activeCategoryId;

        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${cat.id}`}
            id={`tab-${cat.id}`}
            onMouseEnter={() => onSelectCategory(cat.id)}
            onClick={() => onSelectCategory(cat.id)}
            className={`group relative flex items-start gap-3.5 rounded-2xl p-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] ${
              isActive
                ? "bg-slate-100/90 shadow-sm text-[#06162C]"
                : "text-[#8998AD] hover:bg-slate-50 hover:text-[#06162C]"
            }`}
          >
            {/* Active Indicator Left Spine */}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute left-1 top-3 bottom-3 w-[2.5px] rounded-full bg-[#1675F8]"
              />
            )}

            {/* Pillar Icon Capsule */}
            <div
              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                isActive
                  ? "border-[#1675F8]/30 bg-white text-[#1675F8] shadow-sm"
                  : "border-slate-200/80 bg-white/60 text-[#8998AD] group-hover:border-slate-300 group-hover:text-[#06162C]"
              }`}
            >
              {renderCategoryIcon(cat.iconType)}
            </div>

            {/* Category Nomenclature & Subtitle */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className={`font-mono text-[10px] tracking-tight ${
                    isActive ? "text-[#1675F8] font-semibold" : "text-[#8998AD]"
                  }`}
                >
                  {cat.code}
                </span>
                <span
                  className={`font-sans text-[13.5px] font-bold tracking-tight transition-colors ${
                    isActive ? "text-[#06162C]" : "text-[#06162C]/85 group-hover:text-[#06162C]"
                  }`}
                >
                  {cat.title}
                </span>
              </div>

              <span className="mt-0.5 line-clamp-1 font-sans text-[11.5px] text-[#8998AD]">
                {cat.subtitle}
              </span>
            </div>

            {/* Trailing Micro Arrow on Active */}
            <div className="ml-auto mt-1 flex shrink-0 items-center">
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  isActive
                    ? "translate-x-0 text-[#1675F8] opacity-100"
                    : "-translate-x-1 text-[#8998AD] opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        );
      })}
    </div>
  );
};