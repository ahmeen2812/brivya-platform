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
    /* 
      Coordinated Depth Kinematics:
      - Active card elevates: scale-[1.03], translateY(-4px), subtle border sharpen, deeper shadow.
      - Non-hovered cards: subtly recede (scale-[0.98], opacity-50).
      - Resting state: scale-100, full opacity, transparent/hairline border.
      - NEVER turns into a bright white card.
    */
    const depthClasses = isHovered
      ? "scale-[1.03] -translate-y-1.5 bg-white/[0.07] border-white/20 shadow-[0_16px_36px_-8px_rgba(3,14,33,0.45)] z-20 opacity-100"
      : isAnyHovered
      ? "scale-[0.98] opacity-50 z-10 bg-transparent border-transparent"
      : "scale-100 opacity-100 z-10 bg-white/[0.025] border-white/[0.06] hover:border-white/15";

    return (
      <div
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`group relative flex flex-col items-start justify-between w-full h-full p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-default ${depthClasses}`}
      >
        {/* Top: Restrained Circular Icon Capsule */}
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-[#60A5FA] shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#0A5FD7]/20 group-hover:text-white mb-4 sm:mb-5">
          <ResultsIcon iconKey={data.iconKey} className="h-5 w-5" />
        </div>

        {/* Middle: Number with Editorial Marker Highlight */}
        <div className="relative inline-flex items-baseline gap-0.5 my-1.5 py-0.5">
          {/* 
            Editorial Documentary Marker Highlight:
            - Subtle ambient cobalt wash under digits on hover.
            - Elegant hairline accent bar draws smoothly from left to right beneath the number.
            - Digits remain 100% crisp and readable.
          */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-4px] inset-y-[-2px] bg-[#0A5FD7]/15 rounded px-1 -mx-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
          />

          {/* Hairline Accent Stroke (Left-to-Right Draw) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[-2px] h-[2px] rounded-full bg-gradient-to-r from-[#0A5FD7] to-[#38BDF8] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
          />

          {/* Number Display (Pure White Tabular Digits) */}
          <span
            ref={numberRef}
            className="relative z-10 font-sans font-bold text-[34px] sm:text-[38px] lg:text-[42px] text-white leading-none tracking-[-0.02em] tabular-nums"
          >
            0
          </span>

          {/* Suffix (Signal Cyan) */}
          {data.suffix && (
            <span className="relative z-10 font-sans font-bold text-[26px] sm:text-[28px] lg:text-[32px] text-[#38BDF8] leading-none ml-0.5">
              {data.suffix}
            </span>
          )}
        </div>

        {/* Bottom: Uppercase Monospace Label & Supporting Copy */}
        <div className="mt-2.5 flex flex-col w-full">
          <span className="font-mono text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8] mb-1">
            {data.label}
          </span>
          <p className="font-sans text-[12px] sm:text-[12.5px] leading-relaxed text-[#CBD5E1] font-normal">
            {data.description}
          </p>
        </div>
      </div>
    );
  }
);

MetricColumn.displayName = "MetricColumn";