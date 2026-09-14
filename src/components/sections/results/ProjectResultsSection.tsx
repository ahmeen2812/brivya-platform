"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { RESULTS_CONTENT } from "./content";
import { EditorialIntro } from "./components/EditorialIntro";
import { MetricColumn } from "./components/MetricColumn";
import { ResultsTexture } from "./components/ResultsTexture";
import { initResultsScrollSequence } from "./animations/scrollSequence";

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
        num01: num01Ref.current,
        num02: num02Ref.current,
        num03: num03Ref.current,
        numValues: [
          RESULTS_CONTENT.metrics[0].numericValue,
          RESULTS_CONTENT.metrics[1].numericValue,
          RESULTS_CONTENT.metrics[2].numericValue,
        ],
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
      /* Light substrate seamlessly continuing on #F4F7FC */
      className="relative w-full bg-[#F4F7FC] py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden select-none"
    >
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8">
        {/* 
          Elevated Architectural Results Panel:
          Light theme, hairline border, subtle specular shadow, and corner technical details
        */}
        <div
          ref={panelRef}
          className="relative w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_-8px_rgba(6,22,44,0.06)] overflow-hidden"
        >
          {/* Subtle Technical Blueprint Texture */}
          <ResultsTexture />

          {/* Main Content Layout: Left Editorial (~38%) | Right 3 Metrics (~62%) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
            {/* LEFT — Editorial Introduction */}
            <div className="lg:col-span-5 flex items-center">
              <EditorialIntro
                eyebrowRef={eyebrowRef}
                headingRef={headingRef}
                descRef={descRef}
              />
            </div>

            {/* RIGHT — Three Performance Metrics */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 sm:divide-x sm:divide-slate-200/80 items-stretch">
              {/* Metric 01 — Completed Projects (Enters from Left) */}
              <div className="flex items-stretch">
                <MetricColumn
                  ref={metric01Ref}
                  numberRef={num01Ref}
                  data={RESULTS_CONTENT.metrics[0]}
                />
              </div>

              {/* Metric 02 — Ongoing Projects (Enters from Below) */}
              <div className="flex items-stretch">
                <MetricColumn
                  ref={metric02Ref}
                  numberRef={num02Ref}
                  data={RESULTS_CONTENT.metrics[1]}
                />
              </div>

              {/* Metric 03 — Clients Served 650+ (Enters from Right) */}
              <div className="flex items-stretch">
                <MetricColumn
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