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
      - Active card elevates forward into a glowing dark-cobalt glass tint (NEVER white).
      - Other cards subtly recede in scale and opacity without layout shift.
    */
    const depthClasses = isHovered
      ? "scale-[1.03] -translate-y-1.5 bg-[#0A5FD7]/15 border-[#1675F8]/50 shadow-[0_16px_36px_-6px_rgba(6,27,58,0.6),0_0_24px_rgba(22,117,248,0.25)] z-20 opacity-100"
      : isAnyHovered
      ? "scale-[0.98] opacity-45 z-10 bg-transparent border-transparent"
      : "scale-100 opacity-100 z-10 bg-white/[0.03] border-white/[0.06] hover:border-[#1675F8]/30";

    return (
      <div
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`group relative flex flex-col items-start justify-between w-full h-full p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-default backdrop-blur-xs ${depthClasses}`}
      >
        {/* Top: Luminous Circular Icon Capsule */}
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#0A5FD7]/20 border border-[#1675F8]/40 text-[#38BDF8] shadow-[0_0_15px_rgba(22,117,248,0.2)] transition-transform duration-300 group-hover:scale-110 mb-4 sm:mb-5">
          <ResultsIcon iconKey={data.iconKey} className="h-5 w-5" />
        </div>

        {/* Middle: Number with Architectural Animated Drafting Bracket Stroke */}
        <div className="relative inline-flex items-baseline gap-0.5 my-1.5 py-1 px-1">
          {/* 
            Cinematic Architectural SVG Draw-Stroke:
            Draws around the number on hover using stroke-dashoffset interpolation
          */}
          <svg
            className="pointer-events-none absolute -inset-1.5 h-[calc(100%+12px)] w-[calc(100%+12px)] overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="calc(100% - 4px)"
              height="calc(100% - 4px)"
              rx="4"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeOpacity="0.75"
              strokeDasharray="220"
              className="transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [stroke-dashoffset:220] group-hover:[stroke-dashoffset:0]"
            />
          </svg>

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
          <span className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#94A3B8] mb-1">
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