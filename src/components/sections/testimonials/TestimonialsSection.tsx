"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TESTIMONIALS_DATA } from "./content";
import { TrustHeader } from "./components/TrustHeader";
import { ReviewCard } from "./components/ReviewCard";
import { CarouselNavButtons } from "./components/CarouselNavButtons";
import { use3DCarousel } from "./hooks/use3DCarousel";

export const TestimonialsSection: React.FC = () => {
  const { header, carouselConfig, reviews } = TESTIMONIALS_DATA;
  const sectionRef = useRef<HTMLElement | null>(null);

  const centerCardRef = useRef<HTMLDivElement | null>(null);
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);

  const {
    centerIndex,
    leftIndex,
    rightIndex,
    isAnimating,
    progress,
    shiftLeft,
    shiftRight,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  } = use3DCarousel({
    totalItems: reviews.length,
    autoPlayDurationMs: carouselConfig.autoPlayDurationMs,
  });

  // Calculate incoming cards for continuous looping transitions
  const incomingRightIndex = (rightIndex + 1) % reviews.length;
  const incomingLeftIndex = (leftIndex - 1 + reviews.length) % reviews.length;

  // Center card settle reveal
  useEffect(() => {
    if (centerCardRef.current) {
      gsap.fromTo(
        centerCardRef.current,
        { scale: 0.96 },
        { scale: 1.0, duration: 0.45, ease: "power2.out" }
      );
    }
  }, [centerIndex]);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Client Reviews and Testimonials"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      /* 
        Seamless Light Substrate:
        Flows continuously on #F4F7FC matching the upper section with zero color breaks.
      */
      className="relative w-full bg-[#F4F7FC] pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 overflow-hidden select-none"
    >
      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start">
        {/* 1. TRUST HEADER: Google, Trustpilot, & "Trusted by 650+ clients worldwide." */}
        <TrustHeader />

        {/* 2. EDITORIAL INTRO: CLIENT EXPERIENCES / In their words. */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto pb-8 sm:pb-10">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="inline-flex items-center justify-center bg-[#EBF3FF] border border-[#CBDDF6] px-3.5 sm:px-4 py-1.5 rounded-full shadow-2xs">
              <span className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#0A5FD7] pt-px">
                {header.eyebrow}
              </span>
            </div>
          </div>

          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-extrabold text-[#06162C] leading-[1.12] tracking-[-0.035em]">
            {header.title}
          </h2>

          <p className="mt-3 font-sans text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed text-[#475569] text-balance">
            {header.subtitle}
          </p>
        </div>

        {/* 
          3. REAL 3D-STYLE CAROUSEL STAGE:
          Left Card (Behind/Smaller) — Center Card (Forward/Larger) — Right Card (Behind/Smaller)
        */}
        <div className="relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[380px] overflow-visible">
          {/* LEFT CARD (Visual depth behind center) */}
          <div
            ref={leftCardRef}
            className="hidden sm:block absolute transition-transform duration-500 ease-out z-10 -translate-x-[260px] md:-translate-x-[360px] lg:-translate-x-[420px] scale-[0.86] opacity-45 pointer-events-none"
          >
            <ReviewCard
              review={reviews[leftIndex]}
              slot="left"
            />
          </div>

          {/* CENTER CARD (Prominent in front with active progress underline) */}
          <div
            ref={centerCardRef}
            className="relative z-30 scale-100 opacity-100 transition-transform duration-500 ease-out"
          >
            <ReviewCard
              review={reviews[centerIndex]}
              slot="center"
              progress={progress}
            />
          </div>

          {/* RIGHT CARD (Visual depth behind center) */}
          <div
            ref={rightCardRef}
            className="hidden sm:block absolute transition-transform duration-500 ease-out z-10 translate-x-[260px] md:-translate-x-[-360px] lg:translate-x-[420px] scale-[0.86] opacity-45 pointer-events-none"
          >
            <ReviewCard
              review={reviews[rightIndex]}
              slot="right"
            />
          </div>
        </div>

        {/* 
          4. NAVIGATION BUTTONS:
          ONLY TWO circular arrow buttons (← and →) centered together underneath.
        */}
        <CarouselNavButtons
          onMoveLeft={shiftLeft}
          onMoveRight={shiftRight}
          isAnimating={isAnimating}
        />
      </div>
    </section>
  );
};