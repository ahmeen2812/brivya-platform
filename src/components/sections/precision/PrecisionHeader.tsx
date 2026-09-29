"use client";

import * as React from "react";
import { PRECISION_CONTENT } from "./content";
import { precisionTypography } from "./typography";
import { PrecisionCrosshairIcon, PrecisionPulseIcon } from "./icons";

export interface PrecisionHeaderProps {
  headerRef?: React.RefObject<HTMLDivElement | null>;
}

export const PrecisionHeader: React.FC<PrecisionHeaderProps> = ({ headerRef }) => {
  return (
    <div
      ref={headerRef}
      className="flex flex-col w-full max-w-[1360px] mx-auto select-none"
    >
      {/* 1. Technical Telemetry Spec & Eyebrow */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <PrecisionCrosshairIcon className="h-3.5 w-3.5 text-[#0A5FD7]" />
          <span className={precisionTypography.eyebrow}>
            {PRECISION_CONTENT.eyebrow}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <PrecisionPulseIcon className="h-1.5 w-1.5" />
          <span className={precisionTypography.telemetryCode}>
            {PRECISION_CONTENT.indexCode}
          </span>
        </div>
      </div>

      {/* 2. Asymmetric Split: Editorial Headline (Left) & Engineering Thesis (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-10 items-start">
        {/* Left 7 Columns: 3-Line Authority Display Headline */}
        <div className="lg:col-span-7 flex flex-col">
          <h2 className={precisionTypography.headline}>
            <span className="block">{PRECISION_CONTENT.headline.line1}</span>
            <span className={`block ${precisionTypography.headlineAccent}`}>
              {PRECISION_CONTENT.headline.line2Accent}
            </span>
            <span className="block">{PRECISION_CONTENT.headline.line3}</span>
          </h2>
        </div>

        {/* Right 5 Columns: Executive Supporting Thesis */}
        <div className="lg:col-span-5 flex flex-col justify-center pt-1 lg:pt-3">
          <p className={precisionTypography.thesis}>
            {PRECISION_CONTENT.thesis}
          </p>

          <div className="mt-4 flex items-center gap-3 font-mono text-[11px] text-[#8998AD]">
            <span className="h-1 w-1 rounded-full bg-[#10B981]" />
            <span>REAL-TIME AUDIT CADENCE // CONTINUOUS DEPLOYMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
};