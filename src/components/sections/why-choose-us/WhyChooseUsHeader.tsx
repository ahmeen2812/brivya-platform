"use client";

import React from "react";
import { WHY_US_CONTENT } from "./content";
import { ClipRevealWrapper } from "./ClipRevealWrapper";

interface HeaderProps {
  binderGroupRefs: React.MutableRefObject<(HTMLSpanElement | HTMLHeadingElement | null)[]>;
  descriptionNode: React.RefObject<HTMLParagraphElement | null>;
}

export const WhyChooseUsHeader: React.FC<HeaderProps> = ({ 
  binderGroupRefs,
  descriptionNode 
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mx-auto pb-[44px] md:pb-[56px] select-none">
       
       <ClipRevealWrapper wrapperClass="justify-center mb-[18px]">
          <div 
             // Native array assignment bypasses prop-depth resolving undefined reference null failures explicitly ensuring 1:1 runtime validation execution correctly setting 
             ref={(domEl) => { binderGroupRefs.current[0] = domEl; }}
             className="inline-flex items-center justify-center bg-[#EBF3FF] border border-[#CBDDF6] px-3.5 sm:px-4 py-[6px] sm:py-[7px] rounded-full shadow-2xs"
          >
            <span className="text-[#0A5FD7] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.24em] pt-[1px]">
              {WHY_US_CONTENT.header.eyebrow}
            </span>
          </div>
       </ClipRevealWrapper>

       <ClipRevealWrapper wrapperClass="justify-center mb-[2px]">
          <h2 
            ref={(domEl) => { binderGroupRefs.current[1] = domEl; }}
            className="font-sans text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[48px] font-extrabold text-[#06162C] leading-[1.08] tracking-[-0.035em] text-pretty max-w-[800px]"
          >
            {WHY_US_CONTENT.header.title}
          </h2>
       </ClipRevealWrapper>
       
       <div className="w-full flex justify-center mt-[18px] sm:mt-[24px]">
          <p
            ref={descriptionNode}
            className="font-sans w-full max-w-[700px] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.65] md:leading-[1.7] tracking-[-0.01em] text-[#475569] text-pretty opacity-0 invisible px-2"
          >
            {WHY_US_CONTENT.header.description}
          </p>
       </div>
    </div>
  );
};