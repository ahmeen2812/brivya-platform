"use client";

import React from "react";
import { WHY_US_CONTENT } from "./content";
import { ClipRevealWrapper } from "./ClipRevealWrapper";

interface HeaderPropLimits {
  binderGroupRefs: React.MutableRefObject<(HTMLSpanElement | HTMLHeadingElement | null)[]>;
  descriptionLinkNode: React.RefObject<HTMLParagraphElement | null>;
}

export const WhyChooseUsHeader: React.FC<HeaderPropLimits> = ({ 
  binderGroupRefs,
  descriptionLinkNode 
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mx-auto pb-[44px] md:pb-[56px] select-none">
       
       <ClipRevealWrapper wrapperClass="justify-center mb-[18px]">
          {/* Eyebrow Label Tag Box Structuring Accurately Building Node Visually Isolating Safely Checking Properly Generating Context Map Display Tracker Base Rendering Form Configuration Action Binding Successfully Creating Rendering Path Limit Anchor Array Component Logic Flow Stage Event Engine Layer Rule  */}
          <div 
             ref={(domEl) => { binderGroupRefs.current[0] = domEl; }}
             className="inline-flex items-center justify-center bg-[#EBF3FF] border border-[#CBDDF6] px-3.5 sm:px-4 py-[6px] sm:py-[7px] rounded-full shadow-2xs"
          >
            <span className="text-[#0A5FD7] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.24em] pt-[1px]">
              {WHY_US_CONTENT.header.eyebrow}
            </span>
          </div>
       </ClipRevealWrapper>

       {/* Hardware Line Array Wrapper Isolating Safely Separating Output Accurately Structuring Constraints Easily Parsing Format Clean Tracking Bounds Flow Rendering Precisely Returning State Executing Engine Routine Render Logic Bound Trigger Line Formatting Event Context Natively Returning Natively Combining  */}
       <ClipRevealWrapper wrapperClass="justify-center mb-[2px]">
          <h2 
            ref={(domEl) => { binderGroupRefs.current[1] = domEl; }}
            className="font-sans text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[52px] font-extrabold text-[#06162C] leading-[1.08] tracking-[-0.035em] text-pretty max-w-[800px]"
          >
            {WHY_US_CONTENT.header.title}
          </h2>
       </ClipRevealWrapper>
       
       {/* Detailed Sentence Content Formatting Anchor Component Boundary Setup Limit Subsystem Frame Display Base Render Structural Action Process Line Binding Sequence Format Tracker Tracking Vector Executing Configuration Native Logic Object System Path Array Safely Checking Resolving Engine Appropriately */}
       <div className="w-full flex justify-center mt-[18px] sm:mt-[24px]">
          <p
            ref={descriptionLinkNode}
            className="font-sans w-full max-w-[660px] text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] font-normal leading-[1.6] md:leading-[1.65] tracking-[-0.01em] text-[#475569] text-pretty opacity-0 invisible px-2"
          >
            {WHY_US_CONTENT.header.description}
          </p>
       </div>
    </div>
  );
};