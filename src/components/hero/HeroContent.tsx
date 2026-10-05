"use client";

import * as React from "react";
import { HERO_EDITORIAL_COPY } from "@/config/hero";

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* 1. Precision Technical Kicker */}
      <div className="inline-flex items-center gap-2">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8998AD]">
          {HERO_EDITORIAL_COPY.kicker}
        </span>
      </div>

      {/* 2. Authority Editorial Display Headline */}
      <h1 className="mt-4 font-serif text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-bold tracking-[-0.035em] leading-[1.04] text-[#06162C]">
        <span>{HERO_EDITORIAL_COPY.headlineLine1}</span>
        <br />
        <span className="text-[#0A5FD7] italic font-medium">
          {HERO_EDITORIAL_COPY.headlineLine2}
        </span>
        <br />
        <span>{HERO_EDITORIAL_COPY.headlineLine3}</span>
      </h1>

      {/* 3. Executive Supporting Thesis */}
      <p className="mt-6 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-[#475569] font-normal tracking-[-0.01em]">
        {HERO_EDITORIAL_COPY.description}
      </p>
    </div>
  );
};