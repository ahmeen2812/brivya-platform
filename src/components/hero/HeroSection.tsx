"use client";

import * as React from "react";
import gsap from "gsap";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { MainWheelMaster } from "./main-wheel/MainWheelMaster";
import { AdsWheelMaster } from "./ads-wheel/AdsWheelMaster";

export const HeroSection: React.FC = () => {
  const [isShowreelActive, setIsShowreelActive] = React.useState<boolean>(false);

  // Animation Target References
  const kickerRef = React.useRef<HTMLDivElement | null>(null);
  const headlineRef = React.useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement | null>(null);
  const actionsRef = React.useRef<HTMLDivElement | null>(null);
  const constellationWrapperRef = React.useRef<HTMLDivElement | null>(null);

  // Synchronized Master Entrance Timeline
  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (kickerRef.current) kickerRef.current.style.opacity = "1";
      if (headlineRef.current) headlineRef.current.style.opacity = "1";
      if (descriptionRef.current) descriptionRef.current.style.opacity = "1";
      if (actionsRef.current) actionsRef.current.style.opacity = "1";
      if (constellationWrapperRef.current) constellationWrapperRef.current.style.opacity = "1";
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.38, // Synchronized with navbar drop-line
    });

    // 1. Kicker tag slides in
    if (kickerRef.current) {
      tl.fromTo(
        kickerRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.32 },
        0,
      );
    }

    // 2. Headline reveals directly with full visibility guaranteed
    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.06,
      );
    }

    // 3. Thesis description glides up softly
    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.38 },
        0.24,
      );
    }

    // 4. Action buttons spring into place
    if (actionsRef.current) {
      tl.fromTo(
        actionsRef.current,
        { autoAlpha: 0, scale: 0.95, y: 10 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.42, ease: "back.out(1.2)" },
        0.32,
      );
    }

    // 5. Constellation blooms smoothly into view
    if (constellationWrapperRef.current) {
      tl.fromTo(
        constellationWrapperRef.current,
        { autoAlpha: 0, scale: 0.96 },
        { autoAlpha: 1, scale: 1, duration: 0.6, ease: "power3.out" },
        0.18,
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F4F7FC] pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24">
      {/* Clean Luminous Light Pool */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8 min-h-[580px]">
          {/* Left Column: Editorial Headline & Actions (6 Columns) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center z-10">
            <HeroContent
              kickerRef={kickerRef}
              headlineRef={headlineRef}
              descriptionRef={descriptionRef}
            />
            <HeroActions
              actionsRef={actionsRef}
              onOpenShowreel={() => setIsShowreelActive(true)}
            />
          </div>

          {/* 
            Right Column: 2-Wheel Constellation Stage (6 Columns)
            - On Desktop (lg): Side-by-side with Ads Wheel aligned to navbar right edge
            - On Mobile (< lg): Stacked vertically with clean spacing (no cramming/overlap)
          */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[520px] sm:min-h-[580px]">
            <div
              ref={constellationWrapperRef}
              style={{ opacity: 0 }}
              className="relative w-full max-w-[540px] lg:max-w-none h-auto lg:h-[580px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 overflow-visible"
            >
              {/* 
                1. Main Wheel:
                Desktop: Anchored on the left of the right stage (left-[-20px] lg:left-[-15px] xl:left-0)
                Mobile: Centered with full 100% visibility
              */}
              <div className="relative lg:absolute lg:left-[-15px] xl:left-0 lg:top-[50px] z-10 pointer-events-none">
                <MainWheelMaster />
              </div>

              {/* 
                2. Top-Right Satellite Wheel: Google Ads <-> Meta Ads
                Desktop: Anchored at right-[-35px] lg:right-[-40px], aligning with the navbar's right edge
                Mobile: Positioned cleanly below the main wheel with zero collision
              */}
              <div className="relative lg:absolute lg:top-[-10px] lg:right-[-35px] xl:right-[-40px] z-20 pointer-events-none">
                <AdsWheelMaster />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};