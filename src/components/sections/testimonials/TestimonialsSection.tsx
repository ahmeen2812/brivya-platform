"use client";

import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { TESTIMONIALS_DATA } from "./content";
import { TrustHeader } from "./components/TrustHeader";
import { ReviewCard } from "./components/ReviewCard";
import { CarouselNavButtons } from "./components/CarouselNavButtons";
import { use3DCarousel } from "./hooks/use3DCarousel";
import { animate3DCardTransition } from "./animations/carousel3DAnimations";
import { initTestimonialsScrollReveal } from "./animations/scrollRevealAnimations";

export const TestimonialsSection: React.FC = () => {
  const { header, carouselConfig, reviews } = TESTIMONIALS_DATA;

  // DOM node references
  const sectionRef = useRef<HTMLElement | null>(null);
  const trustHeaderRef = useRef<HTMLDivElement | null>(null);
  const introHeaderRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);

  // 5 Physical Slot Wrappers
  const farLeftSlotRef = useRef<HTMLDivElement | null>(null);
  const leftSlotRef = useRef<HTMLDivElement | null>(null);
  const centerSlotRef = useRef<HTMLDivElement | null>(null);
  const rightSlotRef = useRef<HTMLDivElement | null>(null);
  const farRightSlotRef = useRef<HTMLDivElement | null>(null);

  // Forward declarations for shift handlers
  const handleShiftLeftRef = useRef<() => void>(() => {});
  const onAdvanceLeft = useCallback(() => {
    handleShiftLeftRef.current();
  }, []);

  const {
    centerIndex,
    leftIndex,
    rightIndex,
    farLeftIndex,
    farRightIndex,
    isAnimating,
    setIsAnimating,
    commitShift,
    progressBarRef,
    startProgressTimer,
    stopAndResetProgress,
    handleCardMouseEnter,
    handleCardMouseLeave,
  } = use3DCarousel({
    totalItems: reviews.length,
    autoPlayDurationSec: carouselConfig.autoPlayDurationSec,
    onAdvanceLeft,
  });

  // Calculate base offset distances responsively
  const getSlotXOffset = useCallback(() => {
    if (typeof window === "undefined") return 420;
    if (window.innerWidth < 768) return window.innerWidth < 480 ? 320 : 350;
    if (window.innerWidth < 1024) return 370;
    return 420;
  }, []);

  // Initialize and reset base slot coordinates
  const setBaseSlotTransforms = useCallback(() => {
    const xOffset = getSlotXOffset();
    const xExit = xOffset * 1.6;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (centerSlotRef.current) {
      gsap.set(centerSlotRef.current, { x: 0, scale: 1.0, autoAlpha: 1.0, zIndex: 30 });
    }
    if (leftSlotRef.current) {
      gsap.set(leftSlotRef.current, {
        x: -xOffset,
        scale: 0.86,
        autoAlpha: isMobile ? 0 : 0.45,
        zIndex: 10,
      });
    }
    if (rightSlotRef.current) {
      gsap.set(rightSlotRef.current, {
        x: xOffset,
        scale: 0.86,
        autoAlpha: isMobile ? 0 : 0.45,
        zIndex: 10,
      });
    }
    if (farLeftSlotRef.current) {
      gsap.set(farLeftSlotRef.current, { x: -xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 });
    }
    if (farRightSlotRef.current) {
      gsap.set(farRightSlotRef.current, { x: xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 });
    }
  }, [getSlotXOffset]);

  // Set initial coordinates on mount and start initial timer
  useEffect(() => {
    setBaseSlotTransforms();
    startProgressTimer();

    const handleResize = () => setBaseSlotTransforms();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setBaseSlotTransforms, startProgressTimer]);

  // ---------------------------------------------------------------------------
  // LEFT ARROW CLICK & AUTOPLAY (Cards physically move LEFT)
  // ---------------------------------------------------------------------------
  const handleShiftLeft = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Reset progress bar instantly before movement begins
    stopAndResetProgress();

    animate3DCardTransition(
      {
        farLeft: farLeftSlotRef.current,
        left: leftSlotRef.current,
        center: centerSlotRef.current,
        right: rightSlotRef.current,
        farRight: farRightSlotRef.current,
      },
      "shift-left",
      carouselConfig.transitionDurationSec,
      () => {
        // Commit index advance and reset base transforms cleanly
        commitShift((centerIndex + 1) % reviews.length);
        setBaseSlotTransforms();
        setIsAnimating(false);
        // Start fresh timer only after card has settled
        startProgressTimer();
      }
    );
  }, [
    isAnimating,
    setIsAnimating,
    stopAndResetProgress,
    carouselConfig.transitionDurationSec,
    commitShift,
    centerIndex,
    reviews.length,
    setBaseSlotTransforms,
    startProgressTimer,
  ]);

  // Assign to ref for autoplay handler
  useEffect(() => {
    handleShiftLeftRef.current = handleShiftLeft;
  }, [handleShiftLeft]);

  // ---------------------------------------------------------------------------
  // RIGHT ARROW CLICK (Cards physically move RIGHT)
  // ---------------------------------------------------------------------------
  const handleShiftRight = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Reset progress bar instantly before movement begins
    stopAndResetProgress();

    animate3DCardTransition(
      {
        farLeft: farLeftSlotRef.current,
        left: leftSlotRef.current,
        center: centerSlotRef.current,
        right: rightSlotRef.current,
        farRight: farRightSlotRef.current,
      },
      "shift-right",
      carouselConfig.transitionDurationSec,
      () => {
        // Commit index decrement and reset base transforms cleanly
        commitShift((centerIndex - 1 + reviews.length) % reviews.length);
        setBaseSlotTransforms();
        setIsAnimating(false);
        // Start fresh timer only after card has settled
        startProgressTimer();
      }
    );
  }, [
    isAnimating,
    setIsAnimating,
    stopAndResetProgress,
    carouselConfig.transitionDurationSec,
    commitShift,
    centerIndex,
    reviews.length,
    setBaseSlotTransforms,
    startProgressTimer,
  ]);

  // Mobile Touch Gestures
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
      /* 
        Unified Light Substrate:
        Flows on #F4F7FC with zero background break or seam.
      */
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
          3. REAL PHYSICAL 5-SLOT 3D STAGE:
          [Far-Left (Off)] - [Left Slot] - [Center Slot] - [Right Slot] - [Far-Right (Off)]
          Cards translate continuously without unmounting or text blinking.
        */}
        <div
          ref={stageRef}
          className="relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[375px] md:min-h-[385px] overflow-visible"
        >
          {/* Slot 1: Far-Left Buffer (Off-screen) */}
          <div ref={farLeftSlotRef} className="absolute will-change-transform">
            <ReviewCard review={reviews[farLeftIndex]} slot="far-left" />
          </div>

          {/* Slot 2: Left Visible Slot */}
          <div ref={leftSlotRef} className="absolute will-change-transform">
            <ReviewCard review={reviews[leftIndex]} slot="left" />
          </div>

          {/* Slot 3: Center Active Slot (Prominent forward position with stabilized progress bar) */}
          <div ref={centerSlotRef} className="relative will-change-transform">
            <ReviewCard
              review={reviews[centerIndex]}
              slot="center"
              progressRef={progressBarRef}
              onCardMouseEnter={handleCardMouseEnter}
              onCardMouseLeave={handleCardMouseLeave}
            />
          </div>

          {/* Slot 4: Right Visible Slot */}
          <div ref={rightSlotRef} className="absolute will-change-transform">
            <ReviewCard review={reviews[rightIndex]} slot="right" />
          </div>

          {/* Slot 5: Far-Right Buffer (Off-screen) */}
          <div ref={farRightSlotRef} className="absolute will-change-transform">
            <ReviewCard review={reviews[farRightIndex]} slot="far-right" />
          </div>
        </div>

        {/* 
          4. DUAL GRADIENT NAVIGATION CONTROLS:
          Only two circular buttons centered together underneath.
        */}
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