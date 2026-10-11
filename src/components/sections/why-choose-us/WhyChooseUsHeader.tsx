"use client";

import React from "react";
import { WHY_US_CONTENT } from "./content";

export interface WhyChooseUsHeaderProps {
  readonly eyebrowRef?: React.Ref<HTMLDivElement>;
  readonly headingRef?: React.Ref<HTMLHeadingElement>;
  readonly descRef?: React.Ref<HTMLParagraphElement>;
}

export const WhyChooseUsHeader: React.FC<WhyChooseUsHeaderProps> = ({
  eyebrowRef,
  headingRef,
  descRef,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mx-auto pb-8 sm:pb-10 md:pb-12 select-none">
      {/* Eyebrow Badge */}
      <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
        <div
          ref={eyebrowRef}
          className="inline-flex items-center justify-center bg-[#EBF3FF] border border-[#CBDDF6] px-3.5 sm:px-4 py-1.5 rounded-full shadow-2xs"
        >
          <span className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#0A5FD7] pt-px">
            {WHY_US_CONTENT.header.eyebrow}
          </span>
        </div>
      </div>

      {/* Main Display Heading */}
      <div className="w-full flex justify-center px-4">
        <h2
          ref={headingRef}
          className="font-sans text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-extrabold text-[#06162C] leading-[1.12] tracking-[-0.035em] max-w-3xl text-balance"
        >
          <span>{WHY_US_CONTENT.header.headingPrimary}</span>{" "}
          <span className="text-[#0A5FD7] block sm:inline">
            {WHY_US_CONTENT.header.headingSecondary}
          </span>
        </h2>
      </div>

      {/* Supporting Thesis Statement */}
      <div className="w-full flex justify-center mt-3 sm:mt-4 px-4">
        <p
          ref={descRef}
          className="font-sans w-full max-w-2xl text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed text-[#475569] text-balance"
        >
          {WHY_US_CONTENT.header.thesis}
        </p>
      </div>
    </div>
  );
};