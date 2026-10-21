"use client";

import React, { useRef } from "react";
import { LANDING_PAGES_CONTENT } from "@/config/services/landingPages";
import { initFeaturedCardAnimation } from "./animations";
import { LandingPagesFeaturedCardMobile } from "./mobile/LandingPagesFeaturedCardMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const LandingPagesFeaturedCard: React.FC = () => {
  const { mainFeaturedCard } = LANDING_PAGES_CONTENT;

  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = initFeaturedCardAnimation(
      cardRef.current,
      headerRef.current,
      bodyRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT: Sharp Unfilled Border Console */}
      <section className="hidden lg:block relative w-full mb-16 select-none overflow-x-clip">
        <div
          ref={cardRef}
          className="relative w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-6 lg:px-8 shadow-xs will-change-transform"
        >
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-5 pr-6 border-r border-[#07366D]/25">
              <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
                Conversion Directive
              </span>
              <h2
                ref={headerRef}
                className="font-sans text-[22px] font-extrabold text-[#07366D] tracking-tight leading-tight will-change-transform"
              >
                {mainFeaturedCard.heading}
              </h2>
            </div>

            <div ref={bodyRef} className="col-span-7 flex flex-col space-y-2 will-change-transform">
              {mainFeaturedCard.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <LandingPagesFeaturedCardMobile />
      </div>
    </>
  );
};