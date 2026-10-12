"use client";

import React, { forwardRef } from "react";
import { MetricItemData } from "../types";
import { ResultsIcon } from "./ResultsIcons";

export interface MetricColumnProps {
  readonly data: MetricItemData;
  readonly numberRef?: React.Ref<HTMLSpanElement>;
  readonly isHovered: boolean;
  readonly isAnyHovered: boolean;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
}

export const MetricColumn = forwardRef<HTMLDivElement, MetricColumnProps>(
  ({ data, numberRef, isHovered, isAnyHovered, onMouseEnter, onMouseLeave }, ref) => {
    // Coordinated depth state: this card elevates forward, other cards subtly recede
    const depthClasses = isHovered
      ? "scale-[1.03] -translate-y-1 bg-white/90 shadow-[0_16px_36px_-8px_rgba(10,95,215,0.14)] z-20 opacity-100 border-white/80"
      : isAnyHovered
      ? "scale-[0.97] opacity-65 z-10 bg-transparent border-transparent"
      : "scale-100 opacity-100 z-10 bg-transparent border-transparent hover:bg-white/60";

    return (
      <div
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`group relative flex flex-col items-start justify-between w-full h-full p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-default ${depthClasses}`}
      >
        {/* Top: Circular Icon Capsule */}
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#EBF3FF] border border-[#CBDDF6] text-[#0A5FD7] shadow-2xs transition-transform duration-300 group-hover:scale-110 mb-4 sm:mb-5">
          <ResultsIcon iconKey={data.iconKey} className="h-5 w-5" />
        </div>

        {/* Middle: Number with Editorial Translucent Marker Highlighter Effect */}
        <div className="relative inline-flex items-baseline gap-0.5 my-1">
          {/* 
            Editorial Marker Highlighter:
            Reveals smoothly from left to right behind the lower half of the digits
          */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[-4px] right-[-6px] bottom-1 h-3.5 sm:h-4 bg-gradient-to-r from-[#0A5FD7]/20 via-[#1675F8]/18 to-[#0A5FD7]/08 rounded-[2px] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 -z-10"
          />

          <span
            ref={numberRef}
            className="relative z-10 font-sans font-bold text-[34px] sm:text-[38px] lg:text-[42px] text-[#06162C] leading-none tracking-[-0.02em] tabular-nums"
          >
            0
          </span>
          {data.suffix && (
            <span className="relative z-10 font-sans font-bold text-[26px] sm:text-[28px] lg:text-[32px] text-[#0A5FD7] leading-none ml-0.5">
              {data.suffix}
            </span>
          )}
        </div>

        {/* Bottom: Uppercase Monospace Label & Supporting Copy */}
        <div className="mt-2.5 flex flex-col w-full">
          <span className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#06162C] mb-1">
            {data.label}
          </span>
          <p className="font-sans text-[12px] sm:text-[12.5px] leading-relaxed text-[#64748B] font-normal">
            {data.description}
          </p>
        </div>
      </div>
    );
  }
);

MetricColumn.displayName = "MetricColumn";