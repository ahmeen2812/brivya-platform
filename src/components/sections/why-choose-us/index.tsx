"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { WHY_US_CONTENT } from "./content";
import { WhyChooseUsHeader } from "./WhyChooseUsHeader";
import { FeatureCard } from "./components/FeatureCard";
import { setupWhyUsScrubEngine } from "./animations/scrollSequence";

export const WhyChooseUsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

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
      className="relative w-full bg-gradient-to-b from-[#F4F7FC] via-[#F8FAFC] to-[#FFFFFF] pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 overflow-hidden select-none"
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
      </div>
    </section>
  );
};