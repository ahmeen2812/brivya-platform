"use client";

import React, { useRef } from "react";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initBentoIntroAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchServicesIntroMobile: React.FC = () => {
  const { intro } = GOOGLE_SEARCH_ADS_CONTENT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initBentoIntroAnimation(
      containerRef.current,
      headingRef.current,
      subheadingRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full mb-8 select-none overflow-x-clip">
      <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
        Pillar 02 // Performance Architecture
      </span>
      <h2
        ref={headingRef}
        className="font-sans text-[24px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight will-change-transform"
      >
        {intro.heading}
      </h2>
      <p
        ref={subheadingRef}
        className="mt-2 font-sans text-[14px] leading-[1.65] text-[#475569] will-change-transform"
      >
        {intro.subheading}
      </p>
    </section>
  );
};