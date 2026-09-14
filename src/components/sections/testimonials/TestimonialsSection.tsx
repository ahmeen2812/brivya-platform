"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { TESTIMONIALS_DATA } from "./content";
import { TrustHeader } from "./components/TrustHeader";
import { ReviewCard } from "./components/ReviewCard";
import { CarouselNavButtons } from "./components/CarouselNavButtons";
import { use3DCarousel } from "./hooks/use3DCarousel";
import {
  animateCardCarouselShift,
  setCardSlotPosition,
  getRelativeCardSlot,
  getResponsiveCardOffsets,
} from "./animations/carousel3DAnimations";
import { initTestimonialsScrollReveal } from "./animations/scrollRevealAnimations";

export const TestimonialsSection: React.FC = () => {
  const { header, carouselConfig, reviews } = TESTIMONIALS_DATA;
  const totalReviews = reviews.length;

  // Structural References
  const sectionRef = useRef<HTMLElement | null>(null);
  const trustHeaderRef = useRef<HTMLDivElement | null>(null);
  const introHeaderRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);

  // References for all 12 persistent review card elements
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Shift handler ref for autoplay forward advancement
  const handleShiftLeftRef = useRef<() => void>(() => {});
  const onAdvanceLeft = useCallback(() => {
    handleShiftLeftRef.current();
  }, []);

  const {
    centerIndex,
    isAnimating,
    setIsAnimating,
    commitShift,
    progressBarRef,
    startProgressTimer,
    stopAndResetProgress,
    handleCardMouseEnter,
    handleCardMouseLeave,
  } = use3DCarousel({
    totalItems: totalReviews,
    autoPlayDurationSec: carouselConfig.autoPlayDurationSec,
    onAdvanceLeft,
  });

  // Position all 12 cards cleanly according to the active center index
  const updateAllCardPositions = useCallback(
    (activeCenter: number) => {
      const config = getResponsiveCardOffsets();
      cardElementsRef.current.forEach((el, index) => {
        if (!el) return;
        const diff = getRelativeCardSlot(index, activeCenter, totalReviews);
        setCardSlotPosition(el, diff, config);
      });
    },
    [totalReviews]
  );

  // Initialize card positions and start timer on mount
  useEffect(() => {
    updateAllCardPositions(centerIndex);
    startProgressTimer();

    const handleResize = () => {
      updateAllCardPositions(centerIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [centerIndex, updateAllCardPositions, startProgressTimer]);

  // ---------------------------------------------------------------------------
  // LEFT ARROW (←) & AUTOPLAY: Cards physically move LEFT
  // ---------------------------------------------------------------------------
  const handleShiftLeft = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    stopAndResetProgress();

    const targetCenter = (centerIndex + 1) % totalReviews;

    animateCardCarouselShift(
      cardElementsRef.current,
      centerIndex,
      targetCenter,
      totalReviews,
      "shift-left",
      carouselConfig.transitionDurationSec,
      () => {
        commitShift(targetCenter);
        setIsAnimating(false);
        startProgressTimer();
      }
    );
  }, [
    isAnimating,
    setIsAnimating,
    stopAndResetProgress,
    centerIndex,
    totalReviews,
    carouselConfig.transitionDurationSec,
    commitShift,
    startProgressTimer,
  ]);

  // Connect autoplay to shift left
  useEffect(() => {
    handleShiftLeftRef.current = handleShiftLeft;
  }, [handleShiftLeft]);

  // ---------------------------------------------------------------------------
  // RIGHT ARROW (→): Cards physically move RIGHT
  // ---------------------------------------------------------------------------
  const handleShiftRight = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    stopAndResetProgress();

    const targetCenter = (centerIndex - 1 + totalReviews) % totalReviews;

    animateCardCarouselShift(
      cardElementsRef.current,
      centerIndex,
      targetCenter,
      totalReviews,
      "shift-right",
      carouselConfig.transitionDurationSec,
      () => {
        commitShift(targetCenter);
        setIsAnimating(false);
        startProgressTimer();
      }
    );
  }, [
    isAnimating,
    setIsAnimating,
    stopAndResetProgress,
    centerIndex,
    totalReviews,
    carouselConfig.transitionDurationSec,
    commitShift,
    startProgressTimer,
  ]);

  // Touch Swipe Gesture Handlers
  const touchStartXRef = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleShiftLeft();  // Swipe left -> cards move left
      else handleShiftRight();          // Swipe right -> cards move right
    }
    touchStartXRef.current = null;
  };

  // Coordinated Scroll Reveal Timeline
  useEffect(() => {
    const ctx = initTestimonialsScrollReveal({
      section: sectionRef.current,
      trustHeader: trustHeaderRef.current,
      introHeader: introHeaderRef.current,
      stage: stageRef.current,
      controls: controlsRef.current,
    });
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Client Reviews and Testimonials"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full bg-[#F4F7FC] pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 overflow-hidden select-none"
    >
      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start">
        {/* 1. TRUST HEADER: Google, Trustpilot & "Trusted by 650+ clients worldwide." */}
        <div ref={trustHeaderRef} className="w-full">
          <TrustHeader />
        </div>

        {/* 2. EDITORIAL INTRO: CLIENT EXPERIENCES / In their words. */}
        <div
          ref={introHeaderRef}
          className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto pb-8 sm:pb-10"
        >
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
          3. 3D CAROUSEL STAGE:
          All 12 cards retain their own permanent DOM nodes.
          No content is ever swapped between slots, guaranteeing zero text blink.
        */}
        <div
          ref={stageRef}
          className="relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[375px] md:min-h-[385px] overflow-visible"
        >
          {reviews.map((review, index) => {
            const isCenter = index === centerIndex;
            const diff = getRelativeCardSlot(index, centerIndex, totalReviews);
            const slotName =
              diff === 0 ? "center" : diff === -1 ? "left" : diff === 1 ? "right" : "far-left";

            return (
              <div
                key={review.id}
                ref={(el) => {
                  cardElementsRef.current[index] = el;
                }}
                className="absolute will-change-transform"
              >
                <ReviewCard
                  review={review}
                  slot={slotName}
                  progressRef={isCenter ? progressBarRef : undefined}
                  onCardMouseEnter={isCenter ? handleCardMouseEnter : undefined}
                  onCardMouseLeave={isCenter ? handleCardMouseLeave : undefined}
                />
              </div>
            );
          })}
        </div>

        {/* 4. DUAL GRADIENT NAVIGATION CONTROLS */}
        <div ref={controlsRef} className="w-full">
          <CarouselNavButtons
            onMoveLeft={handleShiftLeft}
            onMoveRight={handleShiftRight}
            isAnimating={isAnimating}
          />
        </div>
      </div>
    </section>
  );
};