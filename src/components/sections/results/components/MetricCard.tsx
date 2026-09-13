"use client";

import React, { forwardRef } from "react";
import { MetricItemData } from "../types";
import { ResultsIcon } from "./ResultsIcons";

export interface MetricCardProps {
  readonly data: MetricItemData;
  readonly numberRef?: React.Ref<HTMLSpanElement>;
  readonly iconWrapperRef?: React.Ref<HTMLDivElement>;
  readonly numberWrapperRef?: React.Ref<HTMLDivElement>;
  readonly labelRef?: React.Ref<HTMLSpanElement>;
  readonly descRef?: React.Ref<HTMLParagraphElement>;
}

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      data,
      numberRef,
      iconWrapperRef,
      numberWrapperRef,
      labelRef,
      descRef,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        /* 
          Hover Isolation:
          - Only THIS card scales to 1.03 and lifts -translate-y-1.5.
          - Other cards do NOTHING.
          - Clean light surface: bg-white/80, border-slate-200/80.
        */
        className="group relative flex flex-col items-start justify-between w-full h-full p-5 sm:p-6 lg:p-7 rounded-2xl bg-white/80 backdrop-blur-xs border border-white/90 shadow-[0_4px_16px_-4px_rgba(7,54,109,0.04)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:-translate-y-1.5 hover:bg-white hover:border-[#BACFE5] hover:shadow-[0_16px_36px_-6px_rgba(7,54,109,0.10)] select-none cursor-default"
      >
        {/* Top: Icon Capsule with Navbar Accent Styling */}
        <div
          ref={iconWrapperRef}
          className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#EBF3FF] border border-[#CBDDF6] text-[#0A5FD7] shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0A5FD7] group-hover:text-white mb-4 sm:mb-5"
        >
          <ResultsIcon iconKey={data.iconKey} className="h-5 w-5" />
        </div>

        {/* Middle: Number with Editorial Highlight Accent */}
        <div ref={numberWrapperRef} className="relative inline-flex items-baseline gap-0.5 my-1.5 py-0.5">
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
          <span
            ref={labelRef}
            className="font-mono text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#06162C] mb-1"
          >
            {data.label}
          </span>
          <p
            ref={descRef}
            className="font-sans text-[12px] sm:text-[12.5px] leading-relaxed text-[#64748B] font-normal"
          >
            {data.description}
          </p>
        </div>
      </div>
    );
  }
);

MetricCard.displayName = "MetricCard";