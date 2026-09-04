"use client";

import React, { useRef } from "react";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initSupportingCardsAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchSupportingCardsMobile: React.FC = () => {
  const { supportingCards } = GOOGLE_SEARCH_ADS_CONTENT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSupportingCardsAnimation(containerRef.current, cardRefs.current);
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col space-y-5 mb-10 select-none overflow-x-clip"
    >
      <div>
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Section 03 // Supporting Capabilities
        </span>
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight">
          {supportingCards.heading}
        </h2>
      </div>

      {supportingCards.items.map((card, idx) => (
        <div
          key={card.index}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded bg-white/85 text-[#0A5FD7] font-mono text-[10.5px] font-bold border border-[#BACFE6] mb-2.5">
            {card.index}
          </span>
          <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
            {card.title}
          </h3>
          <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
            {card.description}
          </p>
        </div>
      ))}
    </section>
  );
};