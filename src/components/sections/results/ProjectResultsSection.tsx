"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { RESULTS_CONTENT } from "./content";
import { EditorialIntro } from "./components/EditorialIntro";
import { MetricCard } from "./components/MetricCard";
import { ResultsTexture } from "./components/ResultsTexture";
import { initResultsScrollSequence } from "./animations/ResultsAnimations";
import { runPermanentCountUp } from "./animations/NumberReveal";

export const ProjectResultsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  const metric01Ref = useRef<HTMLDivElement | null>(null);
  const metric02Ref = useRef<HTMLDivElement | null>(null);
  const metric03Ref = useRef<HTMLDivElement | null>(null);

  const num01Ref = useRef<HTMLSpanElement | null>(null);
  const num02Ref = useRef<HTMLSpanElement | null>(null);
  const num03Ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      initResultsScrollSequence({
        section: sectionRef.current,
        panel: panelRef.current,
        eyebrow: eyebrowRef.current,
        heading: headingRef.current,
        description: descRef.current,
        metric01: metric01Ref.current,
        metric02: metric02Ref.current,
        metric03: metric03Ref.current,
        onFirstEntrance: () => {
          // Numbers count up smoothly once on entrance and stay locked
          runPermanentCountUp([
            { element: num01Ref.current, targetNumber: RESULTS_CONTENT.metrics[0].numericValue },
            { element: num02Ref.current, targetNumber: RESULTS_CONTENT.metrics[1].numericValue },
            { element: num03Ref.current, targetNumber: RESULTS_CONTENT.metrics[2].numericValue },
          ]);
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      aria-label="Delivery Record & Performance Metrics"
      /* Seamless Light Canvas: #FFFFFF -> #F4F7FC */
      className="relative w-full bg-gradient-to-b from-[#FFFFFF] via-[#F4F7FC] to-[#F4F7FC] py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden select-none"
    >
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8">
        {/* 
          Architectural Light Results Panel:
          Soft white + ice-blue substrate with controlled navbar accents
        */}
        <div
          ref={panelRef}
          className="group relative w-full rounded-2xl sm:rounded-3xl border border-[#CBDDF6]/90 bg-gradient-to-b from-white via-[#F8FAFD] to-[#F1F6FB] p-6 sm:p-8 lg:p-10 shadow-[0_16px_45px_-10px_rgba(6,22,44,0.06),0_2px_6px_rgba(6,22,44,0.02)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,1)] overflow-hidden"
        >
          {/* 8–12% Subtle Architectural Vector Texture */}
          <ResultsTexture />

          {/* Main Layout: Left Editorial (~38%) | Right 3 Cards (~62%) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
            {/* LEFT — Editorial Introduction */}
            <div className="lg:col-span-5 flex items-center">
              <EditorialIntro
                eyebrowRef={eyebrowRef}
                headingRef={headingRef}
                descRef={descRef}
              />
            </div>

            {/* RIGHT — Three Metric Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 items-stretch">
              {/* Card 01 — Projects Delivered 800+ (Enters from Left) */}
              <div className="flex items-stretch">
                <MetricCard
                  ref={metric01Ref}
                  numberRef={num01Ref}
                  data={RESULTS_CONTENT.metrics[0]}
                />
              </div>

              {/* Card 02 — Ongoing Projects 08 (Enters from Below) */}
              <div className="flex items-stretch">
                <MetricCard
                  ref={metric02Ref}
                  numberRef={num02Ref}
                  data={RESULTS_CONTENT.metrics[1]}
                />
              </div>

              {/* Card 03 — Clients Served 650+ (Enters from Right) */}
              <div className="flex items-stretch">
                <MetricCard
                  ref={metric03Ref}
                  numberRef={num03Ref}
                  data={RESULTS_CONTENT.metrics[2]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};