"use client";

import * as React from "react";
import gsap from "gsap";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroOrbitIcon } from "./HeroOrbitIcons";

export const HeroSection: React.FC = () => {
  const [isShowreelActive, setIsShowreelActive] = React.useState<boolean>(false);

  // Animation Target References
  const kickerRef = React.useRef<HTMLDivElement | null>(null);
  const headlineRef = React.useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement | null>(null);
  const actionsRef = React.useRef<HTMLDivElement | null>(null);

  // Constellation DOM Targets
  const constellationContainerRef = React.useRef<HTMLDivElement | null>(null);
  const mainHubRef = React.useRef<HTMLDivElement | null>(null);
  const mainOrbitTrackRef = React.useRef<HTMLDivElement | null>(null);
  const topSatelliteRef = React.useRef<HTMLDivElement | null>(null);
  const bottomSatelliteRef = React.useRef<HTMLDivElement | null>(null);

  // Synchronized Master Entrance Sequence
  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // If user prefers reduced motion, make visible immediately
      [kickerRef, headlineRef, descriptionRef, actionsRef, constellationContainerRef].forEach(
        (r) => {
          if (r.current) r.current.style.visibility = "visible";
        },
      );
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.38, // Synchronized: Starts right as the navbar drop-line finishes landing
    });

    // 1. Kicker tag slides in
    if (kickerRef.current) {
      tl.fromTo(
        kickerRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.3 },
        0,
      );
    }

    // 2. Headline reveals with authority
    if (headlineRef.current) {
      const lines = headlineRef.current.children;
      if (lines.length > 0) {
        tl.fromTo(
          Array.from(lines),
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power3.out" },
          0.06,
        );
      } else {
        tl.fromTo(
          headlineRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.45 },
          0.06,
        );
      }
    }

    // 3. Thesis description glides up softly
    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.35 },
        0.26,
      );
    }

    // 4. Action buttons spring into place
    if (actionsRef.current) {
      tl.fromTo(
        actionsRef.current,
        { autoAlpha: 0, scale: 0.95, y: 10 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" },
        0.34,
      );
    }

    // 5. Constellation Orchestration
    if (constellationContainerRef.current) {
      tl.fromTo(
        constellationContainerRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4 },
        0.1,
      );
    }

    if (mainHubRef.current) {
      tl.fromTo(
        mainHubRef.current,
        { autoAlpha: 0, scale: 0.86 },
        { autoAlpha: 1, scale: 1, duration: 0.55, ease: "back.out(1.25)" },
        0.18,
      );
    }

    if (mainOrbitTrackRef.current) {
      tl.fromTo(
        mainOrbitTrackRef.current,
        { autoAlpha: 0, scale: 0.94 },
        { autoAlpha: 1, scale: 1, duration: 0.5 },
        0.24,
      );
    }

    if (topSatelliteRef.current && bottomSatelliteRef.current) {
      tl.fromTo(
        [topSatelliteRef.current, bottomSatelliteRef.current],
        { autoAlpha: 0, x: 24, scale: 0.9 },
        { autoAlpha: 1, x: 0, scale: 1, duration: 0.45, stagger: 0.1, ease: "power3.out" },
        0.3,
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F4F7FC] pt-10 sm:pt-14 md:pt-18 pb-16 sm:pb-24">
      {/* Clean, Simple Light-Theme Light Pool (No Grid Boxes) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 min-h-[560px]">
          {/* 
            Left Column: Editorial Headline & Actions 
            Expanded to 7 Columns for generous width so lines spread naturally
          */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center z-10">
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
            Right Column: 3-Orbit Constellation System (5 Columns)
            Positioned with 40-50% visible sweep and compact orbits
          */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[460px] sm:min-h-[520px]">
            <div
              ref={constellationContainerRef}
              style={{ opacity: 0, visibility: "hidden" }}
              className="relative flex items-center justify-center w-full max-w-[540px] h-[520px]"
            >
              {/* ============================================================= */}
              {/* 1. MAIN CENTER ORBIT: WEB DEVELOPMENT (Largest Anchor)       */}
              {/* ============================================================= */}
              <div
                ref={mainOrbitTrackRef}
                className="absolute left-[-20px] sm:left-[10px] flex items-center justify-center h-[370px] w-[370px] rounded-full border border-slate-200/80 bg-white/30 shadow-xs"
              >
                {/* Secondary Hairline Guide Ring */}
                <div className="absolute inset-4 rounded-full border border-slate-100/90 pointer-events-none" />

                {/* Main Enlarged Inner Core Hub (185px) */}
                <div
                  ref={mainHubRef}
                  className="relative z-10 flex h-[185px] w-[185px] flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_8px_30px_-6px_rgba(6,22,44,0.08)] p-4 text-center select-none"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-[#0A5FD7] border border-sky-100">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
                    </svg>
                  </div>
                  <span className="mt-2 font-sans text-base font-bold text-[#06162C]">
                    Web Development
                  </span>
                  <span className="mt-1 text-[11px] leading-snug text-[#8998AD]">
                    Advanced websites & digital systems
                  </span>
                </div>
              </div>

              {/* ============================================================= */}
              {/* 2. TOP-RIGHT SATELLITE ORBIT: GOOGLE ADS                      */}
              {/* ============================================================= */}
              <div
                ref={topSatelliteRef}
                className="absolute top-[20px] right-[0px] sm:right-[15px] flex items-center justify-center h-[230px] w-[230px] rounded-full border border-slate-200/70 bg-white/40 shadow-2xs"
              >
                {/* Google Ads Inner Hub (125px) */}
                <div className="relative z-10 flex h-[125px] w-[125px] flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-3 text-center select-none">
                  <HeroOrbitIcon type="google-ads" className="h-4 w-4" />
                  <span className="mt-1.5 font-sans text-xs font-bold text-[#06162C]">
                    Google Ads
                  </span>
                  <span className="text-[9.5px] leading-tight text-[#8998AD] line-clamp-1">
                    High-intent acquisition
                  </span>
                </div>
              </div>

              {/* ============================================================= */}
              {/* 3. BOTTOM-RIGHT SATELLITE ORBIT: META ADS                    */}
              {/* ============================================================= */}
              <div
                ref={bottomSatelliteRef}
                className="absolute bottom-[20px] right-[0px] sm:right-[15px] flex items-center justify-center h-[230px] w-[230px] rounded-full border border-slate-200/70 bg-white/40 shadow-2xs"
              >
                {/* Meta Ads Inner Hub (125px) */}
                <div className="relative z-10 flex h-[125px] w-[125px] flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-sm p-3 text-center select-none">
                  <HeroOrbitIcon type="meta" className="h-4 w-4" />
                  <span className="mt-1.5 font-sans text-xs font-bold text-[#06162C]">
                    Meta Ads
                  </span>
                  <span className="text-[9.5px] leading-tight text-[#8998AD] line-clamp-1">
                    Data-driven scaling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};