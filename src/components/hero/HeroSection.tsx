"use client";

import * as React from "react";
import gsap from "gsap";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { MainWheelMaster } from "./main-wheel/MainWheelMaster";
import { AdsWheelMaster } from "./ads-wheel/AdsWheelMaster";
import { AddonsWheelMaster } from "./addons-wheel/AddonsWheelMaster";
import { HeroMobileConstellation } from "./constellation/HeroMobileConstellation";

export const HeroSection: React.FC = () => {
  const [isShowreelActive, setIsShowreelActive] = React.useState<boolean>(false);

  // Animation Target References
  const kickerRef = React.useRef<HTMLDivElement | null>(null);
  const headlineRef = React.useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement | null>(null);
  const actionsRef = React.useRef<HTMLDivElement | null>(null);
  const desktopConstellationRef = React.useRef<HTMLDivElement | null>(null);
  const mobileConstellationRef = React.useRef<HTMLDivElement | null>(null);

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
      if (desktopConstellationRef.current) desktopConstellationRef.current.style.opacity = "1";
      if (mobileConstellationRef.current) mobileConstellationRef.current.style.opacity = "1";
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.38, // Synchronized with navbar drop-line landing
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

    // 5. Constellation blooms smoothly into view on desktop
    if (desktopConstellationRef.current) {
      tl.fromTo(
        desktopConstellationRef.current,
        { autoAlpha: 0, scale: 0.96 },
        { autoAlpha: 1, scale: 1, duration: 0.6, ease: "power3.out" },
        0.18,
      );
    }

    // 6. Mobile constellation reveals smoothly on small screens
    if (mobileConstellationRef.current) {
      tl.fromTo(
        mobileConstellationRef.current,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" },
        0.25,
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F4F7FC] pt-14 sm:pt-18 md:pt-20 lg:pt-8 pb-12 sm:pb-20">
      {/* Clean Luminous Light Pool */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* 
          Main Grid: 
          min-h-0 on mobile eliminates the massive blank gap before the wheels!
          lg:min-h-[580px] maintains desktop layout.
        */}
        <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8 min-h-0 lg:min-h-[580px]">
          {/* Left Column: Editorial Headline & Actions */}
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

          {/* ================================================================= */}
          {/* DESKTOP CONSTELLATION STAGE (>= 1024px — 100% UNTOUCHED & SYMMETRICAL) */}
          {/* ================================================================= */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 relative items-center justify-end min-h-[540px] sm:min-h-[600px]">
            <div
              ref={desktopConstellationRef}
              style={{ opacity: 0 }}
              className="relative w-full max-w-none h-[620px] flex items-center justify-center overflow-visible"
            >
              {/* 1. Main Wheel on Center-Left */}
              <div className="absolute left-[-15px] xl:left-0 top-[50px] z-10 pointer-events-none">
                <MainWheelMaster />
              </div>

              {/* 2. Top-Right Satellite Wheel: Google Ads <-> Meta Ads */}
              <div className="absolute top-[-20px] -right-12 xl:-right-16 z-20 pointer-events-none">
                <AdsWheelMaster />
              </div>

              {/* 
                3. Bottom-Right Satellite Wheel: Google Add-ons <-> Office Add-ins
                Positioned symmetrically at top-[320px] for identical 170px spacing
              */}
              <div className="absolute top-[320px] xl:top-[330px] -right-12 xl:-right-16 z-20 pointer-events-none">
                <AddonsWheelMaster />
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* DEDICATED MOBILE CONSTELLATION (< 1024px)                        */}
        {/* Compact 410px S-Curve stage starting closely after the buttons   */}
        {/* ================================================================= */}
        <div
          ref={mobileConstellationRef}
          style={{ opacity: 0 }}
          className="w-full lg:hidden mt-3 sm:mt-4 overflow-visible"
        >
          <HeroMobileConstellation />
        </div>
      </div>
    </section>
  );
};