"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { WHY_US_CONTENT } from "./content";
import { FeatureCard } from "./components/FeatureCard";
import { TrustBanner } from "./TrustBanner";
import { setupCinematicScrubEngine } from "./animations/scrollSequence";

export const WhyChooseUsSection = () => {
   // Normal Standard Variables cleanly bounding components executing exactly limits
   const sectionRef = useRef<HTMLElement | null>(null);
   const textRefs = useRef<(HTMLHeadingElement | HTMLDivElement | null)[]>([]);
   const descRef = useRef<HTMLParagraphElement | null>(null);
   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
   const bannerRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
     if(!sectionRef.current) return;

     let activeTimeline: gsap.core.Timeline | null = null;
     
     const ctx = gsap.context(() => {
       activeTimeline = setupCinematicScrubEngine({
          containerTarget: sectionRef.current,
          textElementHeaders: textRefs.current,
          textElementBody: descRef.current,
          cardsMatrixArray: cardRefs.current,
          trustBannerTarget: bannerRef.current
       });
     }, sectionRef);

     return () => { ctx.revert(); };

   }, []);

   return (
      <section 
        id="why-brivya-growth"
        ref={sectionRef}
        className="w-full relative py-[70px] sm:py-[90px] md:py-[110px] lg:py-[140px] selection:bg-[#0A5FD7]/20 bg-gradient-to-b from-[#F4F7FC] via-white to-white overflow-hidden border-none" 
      >
         <div className="w-full mx-auto max-w-[1340px] flex flex-col justify-start relative px-4 sm:px-6 md:px-8">
            <div className="w-full flex flex-col items-center justify-center text-center pb-8 sm:pb-12 md:pb-16 select-none relative z-10">
               
               <div className="overflow-hidden inline-flex mb-4 sm:mb-6">
                  <div 
                     ref={(el) => { textRefs.current[0] = el; }}
                     className="invisible opacity-0 px-[16px] sm:px-[20px] py-[8px] rounded-full border bg-sky-50 text-[#0A5FD7] border-[#0A5FD7]/15 inline-flex items-center shadow-xs"
                  >
                     <span className="font-sans font-bold text-[10px] sm:text-[11.5px] tracking-[0.24em] uppercase pt-[2px]">
                       {WHY_US_CONTENT.header.kicker}
                     </span>
                  </div>
               </div>

               <div className="overflow-hidden inline-flex w-full justify-center pb-1">
                  <h2 
                    ref={(el) => { textRefs.current[1] = el; }}
                    className="invisible opacity-0 font-sans font-extrabold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] leading-[1.08] sm:leading-[1.12] tracking-[-0.035em] text-[#06162C] max-w-4xl text-balance"
                  >
                     {WHY_US_CONTENT.header.headingPrimary} <span className="text-[#0A5FD7] block md:inline">{WHY_US_CONTENT.header.headingSecondary}</span>
                  </h2>
               </div>
               
               <p
                 ref={descRef}
                 className="invisible opacity-0 mt-[16px] sm:mt-[24px] max-w-[800px] text-[#475569] font-sans font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] tracking-[-0.01em] text-pretty px-2"
               >
                 {WHY_US_CONTENT.header.thesis}
               </p>
            </div>

            {/* Exactly matching content arrays mapped seamlessly mapping native IDs successfully checking formatting reliably connecting parameters effortlessly updating arrays beautifully checking structures easily managing. */}
            <div className="w-full relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 pt-[10px]">
               {WHY_US_CONTENT.cards.map((cardItem, idx) => (
                 <FeatureCard 
                    key={cardItem.id}
                    data={cardItem}
                    ref={(el) => { cardRefs.current[idx] = el; }}
                 />
               ))}
            </div>

            {/* Clean Tracking Node Executing Confidently Running Flow  */}
            <TrustBanner ref={bannerRef} />
            
         </div>
      </section>
   );
};