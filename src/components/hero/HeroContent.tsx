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
        className="inline-flex items-center gap-2 mb-1"
      >
        <span className="font-mono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A5FD7]">
          {HERO_EDITORIAL_COPY.kicker}
        </span>
      </div>

      {/* 2. Responsive 3-Line Authority Display Headline */}
      <h1
        ref={headlineRef}
        style={{ opacity: 0 }}
        className="mt-2 font-sans text-[34px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[60px] font-extrabold tracking-[-0.035em] leading-[1.08] text-[#06162C]"
      >
        <span className="block">{HERO_EDITORIAL_COPY.headlineLine1}</span>
        <span className="block text-[#0A5FD7]">
          {HERO_EDITORIAL_COPY.headlineLine2}
        </span>
        <span className="block">{HERO_EDITORIAL_COPY.headlineLine3}</span>
      </h1>

      {/* 3. Executive Supporting Thesis */}
      <p
        ref={descriptionRef}
        style={{ opacity: 0 }}
        className="mt-4 sm:mt-6 max-w-xl font-sans text-[15px] sm:text-[17px] leading-relaxed text-[#475569] font-normal tracking-[-0.01em]"
      >
        {HERO_EDITORIAL_COPY.description}
      </p>
    </div>
  );
};