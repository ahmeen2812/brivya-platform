"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { RESULTS_CONTENT } from "./content";
import { EditorialIntro } from "./components/EditorialIntro";
import { MetricColumn } from "./components/MetricColumn";
import { ResultsTexture } from "./components/ResultsTexture";
import { initResultsScrollSequence } from "./animations/scrollSequence";
import { runPermanentCountUp } from "./animations/counterAnimation";

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

  // Coordinated depth hover state: elevates hovered column while others recede
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          // Permanently locks numbers at target values (800+, 08, 650+); never reverses
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
      /* Transitional Canvas: White -> Soft Ice-Blue -> F4F7FC */
      className="relative w-full bg-gradient-to-b from-[#FFFFFF] via-[#EEF4FC] to-[#F4F7FC] py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden select-none"
    >
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8">
        {/* 
          Architectural Results Panel:
          Soft midnight-blue/slate surface inspired by the navbar button.
          Hairline white border, inset specular highlight, and ambient depth.
        */}
        <div
          ref={panelRef}
          className="group relative w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-[#071B36] via-[#0B254B] to-[#081E3D] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(3,14,33,0.35)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.12)] overflow-hidden"
        >
          {/* Subtle Technical Vector Texture */}
          <ResultsTexture />

          {/* Main Layout: Left Editorial (~38%) | Right 3 Metrics (~62%) */}
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
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-1.5 sm:divide-x sm:divide-white/[0.08] items-stretch">
              {/* Metric 01 — Projects Delivered 800+ (Enters from Left) */}
              <div className="flex items-stretch">
                <MetricColumn
                  ref={metric01Ref}
                  numberRef={num01Ref}
                  data={RESULTS_CONTENT.metrics[0]}
                  isHovered={hoveredIndex === 0}
                  isAnyHovered={hoveredIndex !== null}
                  onMouseEnter={() => setHoveredIndex(0)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </div>

              {/* Metric 02 — Ongoing Projects 08 (Enters from Below) */}
              <div className="flex items-stretch">
                <MetricColumn
                  ref={metric02Ref}
                  numberRef={num02Ref}
                  data={RESULTS_CONTENT.metrics[1]}
                  isHovered={hoveredIndex === 1}
                  isAnyHovered={hoveredIndex !== null}
                  onMouseEnter={() => setHoveredIndex(1)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </div>

              {/* Metric 03 — Clients Served 650+ (Enters from Right) */}
              <div className="flex items-stretch">
                <MetricColumn
                  ref={metric03Ref}
                  numberRef={num03Ref}
                  data={RESULTS_CONTENT.metrics[2]}
                  isHovered={hoveredIndex === 2}
                  isAnyHovered={hoveredIndex !== null}
                  onMouseEnter={() => setHoveredIndex(2)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};