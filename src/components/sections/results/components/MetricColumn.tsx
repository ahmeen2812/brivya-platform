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
        className="group relative flex flex-col items-start justify-between w-full h-full p-4 sm:p-5 lg:p-6 transition-all duration-300 rounded-xl hover:bg-white/60 select-none"
      >
        {/* Top: Circular Icon Capsule */}
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#EBF3FF] border border-[#CBDDF6] text-[#0A5FD7] shadow-2xs transition-transform duration-300 group-hover:scale-105 mb-4 sm:mb-5">
          <ResultsIcon iconKey={data.iconKey} className="h-5 w-5" />
        </div>

        {/* Middle: Prominent Yet Refined Tabular Display Number */}
        <div className="flex items-baseline gap-0.5 my-1">
          <span
            ref={numberRef}
            className="font-sans font-bold text-[34px] sm:text-[38px] lg:text-[42px] text-[#06162C] leading-none tracking-[-0.02em] tabular-nums"
          >
            0
          </span>
          {data.suffix && (
            <span className="font-sans font-bold text-[26px] sm:text-[28px] lg:text-[32px] text-[#0A5FD7] leading-none ml-0.5">
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