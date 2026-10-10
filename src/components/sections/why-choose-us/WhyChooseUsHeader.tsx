"use client";

import React from "react";
import { WHY_US_CONTENT } from "./content";

interface WhyChooseUsHeaderProps {
  headerTargets: {
    eyebrow: React.MutableRefObject<HTMLDivElement | null>;
    title: React.MutableRefObject<HTMLHeadingElement | null>;
    description: React.MutableRefObject<HTMLParagraphElement | null>;
  };
}

export const WhyChooseUsHeader: React.FC<WhyChooseUsHeaderProps> = ({
  headerTargets: { eyebrow, title, description },
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mx-auto pb-[44px] md:pb-[54px] selection:bg-[#1675F8]/30">
      
      {/* Light Muted Eyebrow Pill Tag */}
      <div 
        ref={eyebrow}
        className="inline-flex items-center justify-center bg-blue-50/70 border border-blue-100 px-3.5 py-1.5 rounded-full mb-[16px] sm:mb-[20px] invisible"
      >
        <span className="text-[#0A5FD7] text-[11px] sm:text-[12px] uppercase font-bold tracking-[0.06em]">
          {WHY_US_CONTENT.header.eyebrow}
        </span>
      </div>

      {/* Main Authoritative Headline Node */}
      <h2
        ref={title}
        className="font-sans text-[28px] sm:text-[34px] md:text-[38px] lg:text-[44px] font-extrabold text-[#06162C] leading-[1.15] sm:leading-[1.12] tracking-[-0.025em] max-w-2xl invisible"
      >
        {WHY_US_CONTENT.header.title}
      </h2>

      {/* Context Execution Thesis Block */}
      <p
        ref={description}
        className="mt-[16px] sm:mt-[20px] w-full max-w-[600px] mx-auto text-[15px] sm:text-[16px] md:text-[17px] text-[#475569] leading-[1.6] md:leading-[1.65] font-normal tracking-[-0.01em] invisible"
      >
        {WHY_US_CONTENT.header.description}
      </p>

    </div>
  );
};