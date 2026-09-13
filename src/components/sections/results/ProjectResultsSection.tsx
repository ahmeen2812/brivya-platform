"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { RESULTS_CONTENT } from "./content";
import { EditorialIntro } from "./components/EditorialIntro";
import { MetricCard } from "./components/MetricCard";
import { ResultsTexture } from "./components/ResultsTexture";
import { initResultsScrollSequence } from "./animations/ResultsAnimations";
import { runPermanentCountUp } from "./animations/NumberCounter";

export const ProjectResultsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  // References for all 3 cards and their internal elements
  const card01Ref = useRef<HTMLDivElement | null>(null);
  const card02Ref = useRef<HTMLDivElement | null>(null);
  const card03Ref = useRef<HTMLDivElement | null>(null);

  const icon01Ref = useRef<HTMLDivElement | null>(null);
  const icon02Ref = useRef<HTMLDivElement | null>(null);
  const icon03Ref = useRef<HTMLDivElement | null>(null);

  const numWrap01Ref = useRef<HTMLDivElement | null>(null);
  const numWrap02Ref = useRef<HTMLDivElement | null>(null);
  const numWrap03Ref = useRef<HTMLDivElement | null>(null);

  const num01Ref = useRef<HTMLSpanElement | null>(null);
  const num02Ref = useRef<HTMLSpanElement | null>(null);
  const num03Ref = useRef<HTMLSpanElement | null>(null);

  const label01Ref = useRef<HTMLSpanElement | null>(null);
  const label02Ref = useRef<HTMLSpanElement | null>(null);
  const label03Ref = useRef<HTMLSpanElement | null>(null);

  const desc01Ref = useRef<HTMLParagraphElement | null>(null);
  const desc02Ref = useRef<HTMLParagraphElement | null>(null);
  const desc03Ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      initResultsScrollSequence({
        section: sectionRef.current,
        panel: panelRef.current,
        eyebrow: eyebrowRef.current,
        heading: headingRef.current,
        description: descRef.current,
        cardTargets: [
          {
            card: card01Ref.current,
            icon: icon01Ref.current,
            numberWrapper: numWrap01Ref.current,
            label: label01Ref.current,
            desc: desc01Ref.current,
          },
          {
            card: card02Ref.current,
            icon: icon02Ref.current,
            numberWrapper: numWrap02Ref.current,
            label: label02Ref.current,
            desc: desc02Ref.current,
          },
          {
            card: card03Ref.current,
            icon: icon03Ref.current,
            numberWrapper: numWrap03Ref.current,
            label: label03Ref.current,
            desc: desc03Ref.current,
          },
        ],
        onFirstEntrance: () => {
          // Numbers count up once and remain permanently locked
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
      /* Seamless Light Canvas: Flows smoothly on #F4F7FC */
      className="relative w-full bg-gradient-to-b from-[#FFFFFF] via-[#F4F7FC] to-[#F4F7FC] py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden select-none"
    >
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8">
        {/* 
          Middle-Tone Architectural Results Panel:
          50% Light + 50% Dark balance using a soft blue-gray / muted navy-tinted surface:
          bg-gradient-to-br from-[#E6F0FA] via-[#DAE8F6] to-[#CFE0F2]
          Border: #BACFE5 with specular inset rim
        */}
        <div
          ref={panelRef}
          className="group relative w-full rounded-2xl sm:rounded-3xl border border-[#BACFE5] bg-gradient-to-br from-[#E6F0FA] via-[#DAE8F6] to-[#CFE0F2] p-6 sm:p-8 lg:p-10 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.85)] overflow-hidden"
        >
          {/* Subtle 8–12% Architectural Vector Texture */}
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
              {/* Card 01 — Projects Delivered 800+ */}
              <div className="flex items-stretch">
                <MetricCard
                  ref={card01Ref}
                  iconWrapperRef={icon01Ref}
                  numberWrapperRef={numWrap01Ref}
                  numberRef={num01Ref}
                  labelRef={label01Ref}
                  descRef={desc01Ref}
                  data={RESULTS_CONTENT.metrics[0]}
                />
              </div>

              {/* Card 02 — Ongoing Projects 08 */}
              <div className="flex items-stretch">
                <MetricCard
                  ref={card02Ref}
                  iconWrapperRef={icon02Ref}
                  numberWrapperRef={numWrap02Ref}
                  numberRef={num02Ref}
                  labelRef={label02Ref}
                  descRef={desc02Ref}
                  data={RESULTS_CONTENT.metrics[1]}
                />
              </div>

              {/* Card 03 — Clients Served 650+ */}
              <div className="flex items-stretch">
                <MetricCard
                  ref={card03Ref}
                  iconWrapperRef={icon03Ref}
                  numberWrapperRef={numWrap03Ref}
                  numberRef={num03Ref}
                  labelRef={label03Ref}
                  descRef={desc03Ref}
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