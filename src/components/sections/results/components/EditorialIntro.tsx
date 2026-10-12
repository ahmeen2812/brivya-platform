"use client";

import React, { forwardRef } from "react";
import { RESULTS_CONTENT } from "../content";

export interface EditorialIntroProps {
  readonly eyebrowRef?: React.Ref<HTMLDivElement>;
  readonly headingRef?: React.Ref<HTMLHeadingElement>;
  readonly descRef?: React.Ref<HTMLParagraphElement>;
}

export const EditorialIntro = forwardRef<HTMLDivElement, EditorialIntroProps>(
  ({ eyebrowRef, headingRef, descRef }, ref) => {
    return (
      <div ref={ref} className="flex flex-col justify-center w-full select-none pr-0 lg:pr-8">
        {/* Technical Eyebrow Badge */}
        <div ref={eyebrowRef} className="flex items-center gap-2 mb-3.5 sm:mb-4">
          <span aria-hidden="true" className="w-5 h-[2px] bg-[#0A5FD7]" />
          <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A5FD7]">
            {RESULTS_CONTENT.eyebrow}
          </span>
        </div>

        {/* 2-Line Editorial Heading */}
        <h2
          ref={headingRef}
          className="font-sans text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.035em]"
        >
          <span className="block text-[#06162C]">{RESULTS_CONTENT.headingPrimary}</span>
          <span className="block text-[#0A5FD7]">{RESULTS_CONTENT.headingAccent}</span>
        </h2>

        {/* Supporting Technical Description */}
        <p
          ref={descRef}
          className="mt-3.5 sm:mt-4 font-sans text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-relaxed text-[#475569] font-normal tracking-[-0.01em] max-w-md"
        >
          {RESULTS_CONTENT.description}
        </p>
      </div>
    );
  }
);

EditorialIntro.displayName = "EditorialIntro";