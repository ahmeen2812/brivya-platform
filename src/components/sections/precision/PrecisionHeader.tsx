"use client";

import * as React from "react";
import { METRICS_SECTION_COPY } from "./content";
import { metricsTypography } from "./typography";

export const PrecisionHeader: React.FC = () => {
  return (
    <div className="flex flex-col w-full select-none">
      {/* 1. Eyebrow with Blue Dash (Exact Match to Screenshot) */}
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <span
          aria-hidden="true"
          className="w-6 sm:w-7 h-[2.5px] bg-[#0A5FD7] inline-block shrink-0"
        />
        <span className={metricsTypography.eyebrow}>
          {METRICS_SECTION_COPY.eyebrow}
        </span>
      </div>

      {/* 2. Two-Tone Authority Display Headline */}
      <h2 className="flex flex-col font-sans tracking-tight">
        <span className={metricsTypography.headingLine1}>
          {METRICS_SECTION_COPY.headingLine1}
        </span>
        <span className={metricsTypography.headingAccent}>
          {METRICS_SECTION_COPY.headingLine2Accent}
        </span>
      </h2>

      {/* 3. Supporting Thesis Paragraph */}
      <p className={`mt-4 sm:mt-6 max-w-3xl ${metricsTypography.paragraph}`}>
        {METRICS_SECTION_COPY.description}
      </p>
    </div>
  );
};