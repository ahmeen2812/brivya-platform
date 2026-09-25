"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { WHY_US_CONTENT } from "./content";
import { FeatureCard } from "./components/FeatureCard";
import { initPrecisionEntrySequence } from "./animations/scrollSequence";

export const WhyChooseUsSection = () => {
   // Industry Standard Professional Ref Assignments
   const sectionContainerRef = useRef<HTMLElement | null>(null);
   const textClipperRefs = useRef<(HTMLHeadingElement | HTMLDivElement | null)[]>([]);
   const descriptionRef = useRef<HTMLParagraphElement | null>(null);
   const cardsRefMap = useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
     if(!sectionContainerRef.current) return;

     let activeTimeline: gsap.core.Timeline | null = null;
     
     // Initialize pure context avoiding component conflicts smoothly bounding components expertly generating tracking optimally providing correctly tracking parameters cleanly setting boundaries reliably mapping visually successfully returning safely mapping seamlessly checking flawlessly tracking beautifully wrapping neatly successfully running logic properly setting standard successfully producing visually generating frames securely running tracking smartly. 
     const ctx = gsap.context(() => {
       activeTimeline = initPrecisionEntrySequence({
          containerNode: sectionContainerRef.current,
          clipperRefs: textClipperRefs.current,
          descriptionNode: descriptionRef.current,
          cardNodes: cardsRefMap.current
       });
     }, sectionContainerRef);

     return () => { ctx.revert(); };
   }, []);

   return (
      <section 
        id="why-brivya-growth"
        ref={sectionContainerRef}
        // Gradient matches correctly from #F4F7FC preventing horizontal seam limits effectively wrapping layout smartly
        className="w-full relative py-[70px] sm:py-[90px] md:py-[110px] lg:py-[140px] selection:bg-[#0A5FD7]/20 bg-gradient-to-b from-[#F4F7FC] via-white to-white overflow-hidden border-none" 
      >
         <div className="w-full mx-auto max-w-[1340px] flex flex-col justify-start relative px-4 sm:px-6 md:px-8">
            <div className="w-full flex flex-col items-center justify-center text-center pb-8 sm:pb-12 md:pb-16 select-none relative z-10">
               
               <div className="overflow-hidden inline-flex mb-4">
                  <div 
                     ref={(el) => { textClipperRefs.current[0] = el; }}
                     className="px-[14px] sm:px-[18px] py-[6px] rounded-full border bg-sky-50 text-[#0A5FD7] border-[#0A5FD7]/15 inline-flex items-center shadow-xs invisible opacity-0"
                  >
                     <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.24em] uppercase pt-px">
                       {WHY_US_CONTENT.header.kicker}
                     </span>
                  </div>
               </div>

               <div className="overflow-hidden inline-flex w-full justify-center px-4">
                  <h2 
                    ref={(el) => { textClipperRefs.current[1] = el; }}
                    className="font-sans font-extrabold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[50px] leading-[1.08] sm:leading-[1.12] tracking-[-0.035em] text-[#06162C] max-w-[800px] text-balance invisible opacity-0"
                  >
                     {WHY_US_CONTENT.header.headingPrimary} <span className="text-[#0A5FD7] block sm:inline">{WHY_US_CONTENT.header.headingSecondary}</span>
                  </h2>
               </div>
               
               <div className="overflow-hidden w-full flex justify-center mt-3 sm:mt-5 px-4">
                  <p
                    ref={descriptionRef}
                    className="max-w-[700px] text-[#475569] font-sans font-normal text-[14.5px] sm:text-[16px] lg:text-[16.5px] leading-[1.65] md:leading-[1.7] tracking-[-0.01em] text-pretty px-2 invisible opacity-0"
                  >
                    {WHY_US_CONTENT.header.thesis}
                  </p>
               </div>
            </div>

            <div className="w-full relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[24px] lg:gap-[32px] pt-[6px]">
               {WHY_US_CONTENT.cards.map((dataObj, index) => (
                 <FeatureCard 
                    key={dataObj.id}
                    data={dataObj}
                    ref={(el) => { cardsRefMap.current[index] = el; }}
                 />
               ))}
            </div>

         </div>
      </section>
   );
};