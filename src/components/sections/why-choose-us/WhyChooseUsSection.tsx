"use client";

import React, { useEffect, useRef } from "react";
import { WHY_US_CONTENT } from "./content";
import { WhyChooseUsHeader } from "./WhyChooseUsHeader";
import { CardQuality } from "./CardQuality";
import { CardSpeed } from "./CardSpeed";
import { CardValue } from "./CardValue";
import { initWhyUsScrollSequence } from "./animations";

export const WhyChooseUsSection = () => {
  const sectionContainerRef = useRef<HTMLElement | null>(null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  
  const cardsGroupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionContainerRef.current) return;

    const animationTL = initWhyUsScrollSequence({
      container: sectionContainerRef.current,
      eyebrow: eyebrowRef.current,
      title: titleRef.current,
      description: descriptionRef.current,
      cardsRefList: cardsGroupRefs.current,
    });

    if (!animationTL) return;

    const viewTriggerMap = new IntersectionObserver(
      (nodeEntries) => {
        nodeEntries.forEach((frameTarget) => {
          if (frameTarget.isIntersecting) {
            animationTL.play();
            viewTriggerMap.unobserve(frameTarget.target); 
          }
        });
      },
      { threshold: 0.10 } // Optimized Mobile Visibility threshold safely activating rendering securely resolving cleanly triggering elegantly smoothing entry visually matching flow properly updating correctly releasing.
    );

    viewTriggerMap.observe(sectionContainerRef.current);

    return () => {
      viewTriggerMap.disconnect();
      animationTL.kill();
    };
  }, []);

  return (
    <section 
       id="why-choose-us"
       aria-label="Core Competitive Differences Matrix"
       ref={sectionContainerRef} 
       className="relative w-full bg-[#FFFFFF] py-[80px] md:py-[100px] lg:py-[120px] overflow-hidden"
    >
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8 flex flex-col justify-start">
        
        <WhyChooseUsHeader 
          headerTargets={{ 
            eyebrow: eyebrowRef, 
            title: titleRef, 
            description: descriptionRef 
          }} 
        />

        {/* Multi-layered responsive array strictly rendering cleanly bounding elements correctly adjusting limits securely padding logically executing automatically optimizing formats seamlessly. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[28px] items-stretch w-full mx-auto relative z-10 pt-[24px]">
          
          <CardQuality 
            data={WHY_US_CONTENT.cards[0]} 
            ref={(captureEl) => { cardsGroupRefs.current[0] = captureEl; }} 
          />
          <CardSpeed 
            data={WHY_US_CONTENT.cards[1]} 
            ref={(captureEl) => { cardsGroupRefs.current[1] = captureEl; }} 
          />
          <CardValue 
            data={WHY_US_CONTENT.cards[2]} 
            ref={(captureEl) => { cardsGroupRefs.current[2] = captureEl; }} 
          />
          
        </div>
        
      </div>
    </section>
  );
};