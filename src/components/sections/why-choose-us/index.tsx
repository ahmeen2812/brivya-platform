"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { WHY_US_CONTENT } from "./content";
import { WhyChooseUsHeader } from "./WhyChooseUsHeader";
import { FeatureCard } from "./components/FeatureCard";
import { setupWhyUsScrubEngine } from "./animations/scrollSequence";
import { TrustSection } from "@/components/sections/trust";

export const WhyChooseUsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Isolate GSAP timeline within React context for reliable cleanup
    const ctx = gsap.context(() => {
      setupWhyUsScrubEngine({
        container: containerRef.current,
        eyebrow: eyebrowRef.current,
        heading: headingRef.current,
        description: descRef.current,
        cards: cardRefs.current,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="why-work-with-brivya"
      ref={containerRef}
      aria-label="Why Work With Brivya"
      /* 
        1. SEAMLESS HERO TRANSITION:
           Starts with `from-[#F4F7FC]`, matching the hero's bottom color exactly.
           No top border so the canvas flows continuously.
        
        2. COMPACT VERTICAL PROPORTIONS:
           Reduced padding keeps the combined header, 3 cards, and trust section
           within ~50-60% of usable desktop viewport height.
      */
      className="relative w-full bg-gradient-to-b from-[#F4F7FC] via-[#F8FAFC] to-[#FFFFFF] pt-10 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 overflow-hidden select-none"
    >
      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8 flex flex-col justify-start">
        {/* Compact Typography Header */}
        <WhyChooseUsHeader
          eyebrowRef={eyebrowRef}
          headingRef={headingRef}
          descRef={descRef}
        />

        {/* 3 Distinct Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 w-full items-stretch">
          {WHY_US_CONTENT.cards.map((card, index) => (
            <FeatureCard
              key={card.id}
              data={card}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            />
          ))}
        </div>

        {/* 
          Reference-Aligned Trust Section:
          Google + Gold Stars | Trustpilot + Green Star Tiles | Client Statement
        */}
        <div className="mt-7 sm:mt-8 md:mt-10 w-full">
          <TrustSection />
        </div>
      </div>
    </section>
  );
};


