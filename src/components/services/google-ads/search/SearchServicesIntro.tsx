"use client";

import React, { useRef } from "react";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initBentoIntroAnimation } from "./animations";
import { SearchServicesIntroMobile } from "./mobile/SearchServicesIntroMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchServicesIntro: React.FC = () => {
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
    <>
      {/* DESKTOP VIEWPORT */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full mb-10 select-none overflow-x-clip"
      >
        <div className="max-w-[820px] will-change-transform">
          <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
            Pillar 02 // Performance Architecture
          </span>
          <h2
            ref={headingRef}
            className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14] will-change-transform"
          >
            {intro.heading}
          </h2>
          <p
            ref={subheadingRef}
            className="mt-3 font-sans text-[16px] text-[#475569] leading-[1.7] font-normal will-change-transform"
          >
            {intro.subheading}
          </p>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <SearchServicesIntroMobile />
      </div>
    </>
  );
};