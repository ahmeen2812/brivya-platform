"use client";

import React, { forwardRef } from "react";
import { MetricItemData } from "../types";
import { ResultsIcon } from "./ResultsIcons";

export interface MetricColumnProps {
  readonly data: MetricItemData;
  readonly numberRef?: React.Ref<HTMLSpanElement>;
}

export const MetricColumn = forwardRef<HTMLDivElement, MetricColumnProps>(
  ({ data, numberRef }, ref) => {
    return (
      <div
        ref={ref}
        className="group relative flex flex-col items-start justify-between w-full h-full p-4 sm:p-5 lg:p-6 transition-all duration-300 rounded-xl hover:bg-slate-50/70 select-none"
      >
        {/* Top: Circular Icon Capsule */}
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#EBF3FF] border border-[#CBDDF6] text-[#0A5FD7] shadow-2xs transition-transform duration-300 group-hover:scale-105 mb-4 sm:mb-5">
          <ResultsIcon iconKey={data.iconKey} className="h-5 w-5" />
        </div>

        {/* Middle: Prominent Tabular Display Number */}
        <div className="flex items-baseline gap-0.5 my-1">
          <span
            ref={numberRef}
            className="font-sans font-extrabold text-[36px] sm:text-[42px] lg:text-[46px] text-[#06162C] leading-none tracking-tight tabular-nums"
          >
            0
          </span>
          <span className="font-sans font-extrabold text-[28px] sm:text-[34px] lg:text-[38px] text-[#0A5FD7] leading-none">
            {data.suffix}
          </span>
        </div>

        {/* Bottom: Uppercase Monospace Label & Description */}
        <div className="mt-2.5 flex flex-col w-full">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#06162C]">
            {data.label}
          </span>
          <p className="mt-1.5 font-sans text-[12px] sm:text-[12.5px] leading-relaxed text-[#64748B] font-normal">
            {data.description}
          </p>
        </div>

        {/* Subtle Hover Floor Accent Bar */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0A5FD7] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"
        />
      </div>
    );
  }
);

MetricColumn.displayName = "MetricColumn";