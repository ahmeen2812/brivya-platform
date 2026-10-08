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
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center w-full max-w-[720px] mx-auto lg:mx-0">
      {/* 1. Concise Technical Kicker */}
      <div
        ref={kickerRef}
        style={{ opacity: 0 }}
        className="inline-flex items-center justify-center lg:justify-start gap-2 mb-2"
      >
        <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A5FD7]">
          {HERO_EDITORIAL_COPY.kicker}
        </span>
      </div>

      {/* 2. Authority 2-Line Display Headline */}
      <h1
        ref={headlineRef}
        style={{ opacity: 0 }}
        className="mt-1 font-sans text-[clamp(28px,7.4vw,34px)] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[60px] font-extrabold tracking-[-0.035em] leading-[1.1] sm:leading-[1.08] text-[#06162C]"
      >
        <span className="block whitespace-normal sm:whitespace-nowrap">
          {HERO_EDITORIAL_COPY.headlineLine1}
        </span>
        <span className="block whitespace-normal sm:whitespace-nowrap text-[#0A5FD7]">
          {HERO_EDITORIAL_COPY.headlineLine2}
        </span>
        {/* Render 3rd line only if provided */}
        {HERO_EDITORIAL_COPY.headlineLine3 && (
          <span className="block whitespace-normal sm:whitespace-nowrap">
            {HERO_EDITORIAL_COPY.headlineLine3}
          </span>
        )}
      </h1>

      {/* 3. Executive Supporting Thesis */}
      <p
        ref={descriptionRef}
        style={{ opacity: 0 }}
        className="mt-3.5 sm:mt-5 max-w-[340px] sm:max-w-md lg:max-w-xl font-sans text-[14px] sm:text-[16.5px] leading-relaxed text-[#475569] font-normal tracking-[-0.01em] mx-auto lg:mx-0"
      >
        {HERO_EDITORIAL_COPY.description}
      </p>
    </div>
  );
};