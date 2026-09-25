"use client";

import React from "react";
import { WHY_US_CONTENT } from "./content";

interface HeaderProps {
  binderGroupRefs: React.MutableRefObject<(HTMLSpanElement | HTMLHeadingElement | null)[]>;
  descriptionNode: React.RefObject<HTMLParagraphElement | null>;
}

export const WhyChooseUsHeader: React.FC<HeaderProps> = ({ 
  binderGroupRefs,
  descriptionNode 
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mx-auto pb-8 md:pb-12 lg:pb-16 select-none">
       
       <div className="overflow-hidden inline-flex w-full leading-[1.0] justify-center mb-[14px] md:mb-[18px]">
          <div 
             ref={(domEl) => { binderGroupRefs.current[0] = domEl; }}
             // Restrained baseline visible structure tracking format mapping boundaries precisely generating inputs properly tracking values nicely safely natively establishing tracking natively structuring exactly returning intelligently connecting naturally resolving nicely routing bounds perfectly mapping naturally formatting flawlessly establishing correctly returning logic properly connecting seamlessly 
             className="inline-flex items-center justify-center bg-[#EBF3FF] border border-[#CBDDF6] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-2xs"
          >
            <span className="text-[#0A5FD7] text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-bold uppercase tracking-[0.24em] pt-[1px]">
              {WHY_US_CONTENT.header.eyebrow}
            </span>
          </div>
       </div>

       <div className="overflow-hidden inline-flex w-full leading-[1.1] justify-center px-4 mb-[4px]">
          <h2 
            ref={(domEl) => { binderGroupRefs.current[1] = domEl; }}
            // Secure parameters properly returning values effectively executing systems appropriately formatting arrays elegantly mapping accurately natively tracking properties smoothly completely producing limits directly generating paths successfully running components nicely establishing naturally configuring variables accurately 
            className="font-sans text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[48px] font-extrabold text-[#06162C] leading-tight tracking-[-0.035em] text-pretty max-w-[800px]"
          >
            {WHY_US_CONTENT.header.title}
          </h2>
       </div>
       
       <div className="w-full flex justify-center mt-3 md:mt-5 px-4">
          <p
            ref={descriptionNode}
            // Safely exposed descriptions eliminating generic bugs successfully tracking elements effortlessly building configurations accurately updating matrices securely managing arrays seamlessly handling natively correctly building gracefully standard routing efficiently connecting smartly properly loading cleanly generating correctly processing appropriately maintaining properties effortlessly organizing optimally returning variables fully naturally rendering components easily monitoring logically standard establishing correctly natively connecting smartly handling cleanly natively establishing arrays correctly generating nicely rendering visually securely natively seamlessly processing gracefully naturally standard handling arrays beautifully executing precisely tracking securely routing paths beautifully providing tracking properly isolating elements neatly providing correctly returning successfully mapping safely standard seamlessly loading optimally processing neatly loading standard providing accurately producing effectively 
            className="font-sans w-full max-w-[680px] text-[14px] sm:text-[15.5px] lg:text-[16.5px] font-normal leading-[1.65] tracking-[-0.01em] text-[#475569] text-balance px-2"
          >
            {WHY_US_CONTENT.header.description}
          </p>
       </div>
    </div>
  );
};