"use client";

import * as React from "react";
import { HERO_EDITORIAL_COPY } from "@/config/hero";

export interface HeroContentRefs {
  kickerRef: React.RefObject<HTMLDivElement | null>;
  headlineRef: React.RefObject<HTMLHeadingElement | null>;
  descriptionRef: React.RefObject<HTMLParagraphElement | null>;
}

export const HeroContent: React.FC<HeroContentRefs> = ({
  kickerRef,
  headlineRef,
  descriptionRef,
}) => {
  return (
    <div className="flex flex-col justify-center w-full max-w-[720px]">
      {/* 1. Concise Technical Kicker */}
      <div
        ref={kickerRef}
        style={{ opacity: 0 }}
        className="inline-flex items-center gap-2"
      >
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A5FD7]">
          {HERO_EDITORIAL_COPY.kicker}
        </span>
      </div>

      {/* 2. Authority 3-Line Display Headline (Spreads across 3 clean lines without wrapping) */}
      <h1
        ref={headlineRef}
        style={{ opacity: 0 }}
        className="mt-4 font-sans text-[38px] sm:text-[48px] md:text-[54px] lg:text-[56px] xl:text-[60px] font-extrabold tracking-[-0.035em] leading-[1.08] text-[#06162C]"
      >
        <span className="block whitespace-nowrap">
          {HERO_EDITORIAL_COPY.headlineLine1}
        </span>
        <span className="block whitespace-nowrap text-[#0A5FD7]">
          {HERO_EDITORIAL_COPY.headlineLine2}
        </span>
        <span className="block whitespace-nowrap">
          {HERO_EDITORIAL_COPY.headlineLine3}
        </span>
      </h1>

      {/* 3. Executive Supporting Thesis */}
      <p
        ref={descriptionRef}
        style={{ opacity: 0 }}
        className="mt-6 max-w-xl font-sans text-base sm:text-[17px] leading-relaxed text-[#475569] font-normal tracking-[-0.01em]"
      >
        {HERO_EDITORIAL_COPY.description}
      </p>
    </div>
  );
};