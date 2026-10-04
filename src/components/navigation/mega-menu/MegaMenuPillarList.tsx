"use client";

import * as React from "react";
import { ServicePillar } from "@/types/megaMenu";
import { MegaMenuBrandIcon } from "./MegaMenuBrandIcons";

interface MegaMenuPillarListProps {
  pillars: readonly ServicePillar[];
  activePillarId: string | null;
  onHoverPillar: (pillarId: string) => void;
  onClickPillar: (pillarId: string) => void;
  railRef?: React.RefObject<HTMLDivElement | null>;
}

export const MegaMenuPillarList: React.FC<MegaMenuPillarListProps> = ({
  pillars,
  activePillarId,
  onHoverPillar,
  onClickPillar,
  railRef,
}) => {
  return (
    <div
      ref={railRef}
      role="tablist"
      aria-label="Core Capabilities"
      className="flex w-full flex-col gap-1 p-3 sm:p-3.5"
    >
      <div className="mb-1 flex items-center justify-between px-2.5 text-[10.5px] font-mono uppercase tracking-wider text-[#8998AD]">
        <span>CAPABILITIES</span>
        <span>07 SYSTEMS</span>
      </div>

      {pillars.map((pillar) => {
        const isSelected = pillar.id === activePillarId;

        return (
          <button
            key={pillar.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`subpanel-${pillar.id}`}
            id={`pillartab-${pillar.id}`}
            onMouseEnter={() => onHoverPillar(pillar.id)}
            onClick={() => onClickPillar(pillar.id)}
            className={`group relative flex items-center justify-between rounded-xl px-2.5 py-2 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] ${
              isSelected
                ? "bg-slate-100/90 text-[#06162C] font-bold shadow-xs"
                : "text-[#475569] hover:bg-slate-50/80 hover:text-[#06162C]"
            }`}
          >
            {/* Active Pillar Left Spine Indicator */}
            {isSelected && (
              <span
                aria-hidden="true"
                className="absolute left-0.5 top-2 bottom-2 w-[2.5px] rounded-full bg-[#1675F8]"
              />
            )}

            {/* Left Content: Light-Theme Native Brand Icon + Title + Subtitle */}
            <div className="flex items-center gap-2.5">
              <MegaMenuBrandIcon type={pillar.iconType} />

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-mono text-[9px] ${
                      isSelected ? "text-[#1675F8] font-bold" : "text-[#8998AD]"
                    }`}
                  >
                    {pillar.index}
                  </span>
                  <span className="font-sans text-[13px] tracking-tight leading-snug">
                    {pillar.title}
                  </span>
                </div>
                <span className="text-[10.5px] font-normal text-[#8998AD]">
                  {pillar.subtitle}
                </span>
              </div>
            </div>

            {/* High-Contrast Interactive Chevron Arrow */}
            <div className="ml-2 flex shrink-0 items-center">
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isSelected
                    ? "translate-x-0.5 text-[#1675F8] opacity-100"
                    : "text-[#64748B] opacity-50 group-hover:translate-x-0.5 group-hover:opacity-100"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        );
      })}
    </div>
  );
};