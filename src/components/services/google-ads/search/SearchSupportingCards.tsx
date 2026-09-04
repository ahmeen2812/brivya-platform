"use client";

import React, { useRef } from "react";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initSupportingCardsAnimation } from "./animations";
import { SearchSupportingCardsMobile } from "./mobile/SearchSupportingCardsMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchSupportingCards: React.FC = () => {
  const { supportingCards } = GOOGLE_SEARCH_ADS_CONTENT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSupportingCardsAnimation(containerRef.current, cardRefs.current);
    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT: 2x2 Architectural Grid on Master Gradient Substrate */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip"
      >
        <div className="max-w-[820px] mb-8">
          <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
            Section 03 // Supporting Capabilities
          </span>
          <h2 className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14]">
            {supportingCards.heading}
          </h2>
          <p className="mt-2.5 font-sans text-[15.5px] text-[#475569] font-normal">
            {supportingCards.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {supportingCards.items.map((card, idx) => (
            <div
              key={card.index}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="group/card relative rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 flex flex-col justify-between will-change-transform"
            >
              <div>
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/85 text-[#0A5FD7] font-mono text-[11.5px] font-bold border border-[#BACFE6] shadow-2xs mb-3">
                  {card.index}
                </span>
                <h3 className="font-sans text-[21px] font-bold text-[#06162C] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.7] text-[#475569] font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <SearchSupportingCardsMobile />
      </div>
    </>
  );
};