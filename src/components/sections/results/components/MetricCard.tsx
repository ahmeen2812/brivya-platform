"use client";

import React, { forwardRef } from "react";
import { MetricItemData } from "../types";
import { ResultsIcon } from "./ResultsIcons";

export interface MetricCardProps {
  readonly data: MetricItemData;
  readonly numberRef?: React.Ref<HTMLSpanElement>;
}

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  ({ data, numberRef }, ref) => {
    return (
      <div
        ref={ref}
        /* 
          Hover Isolation:
          - Only THIS card scales to 1.03 and lifts -translate-y-1.5.
          - Other cards do NOTHING.
          - Clean light surface: bg-white/70, border-slate-200/80.
        */
        className="group relative flex flex-col items-start justify-between w-full h-full p-4 sm:p-5 lg:p-6 rounded-2xl bg-white/70 backdrop-blur-xs border border-slate-200/80 shadow-[0_2px_10px_-2px_rgba(6,22,44,0.03)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:-translate-y-1.5 hover:bg-white hover:border-[#CBDDF6] hover:shadow-[0_12px_32px_-6px_rgba(10,95,215,0.08)] select-none cursor-default"
      >
        {/* Top: Icon Capsule with Navbar Accent Styling */}
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#EBF3FF] border border-[#CBDDF6] text-[#0A5FD7] shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0A5FD7] group-hover:text-white mb-4 sm:mb-5">
          <ResultsIcon iconKey={data.iconKey} className="h-5 w-5" />
        </div>

        {/* Middle: Number with Subtle Editorial Highlight Accent */}
        <div className="relative inline-flex items-baseline gap-0.5 my-1.5 py-0.5">
          {/* Subtle Editorial Translucent Marker Wash */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-4px] inset-y-[-2px] bg-[#0A5FD7]/08 rounded px-1 -mx-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
          />

          {/* Hairline Editorial Accent Line (Left-to-Right Draw) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[-2px] h-[2px] rounded-full bg-gradient-to-r from-[#0A5FD7] to-[#1675F8] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
          />

          {/* Tabular Display Number */}
          <span
            ref={numberRef}
            className="relative z-10 font-sans font-bold text-[34px] sm:text-[38px] lg:text-[42px] text-[#06162C] leading-none tracking-[-0.02em] tabular-nums"
          >
            0
          </span>

          {/* Suffix */}
          {data.suffix && (
            <span className="relative z-10 font-sans font-bold text-[26px] sm:text-[28px] lg:text-[32px] text-[#0A5FD7] leading-none ml-0.5">
              {data.suffix}
            </span>
          )}
        </div>

        {/* Bottom: Uppercase Monospace Label & Description */}
        <div className="mt-2.5 flex flex-col w-full">
          <span className="font-mono text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#06162C] mb-1">
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

MetricCard.displayName = "MetricCard";