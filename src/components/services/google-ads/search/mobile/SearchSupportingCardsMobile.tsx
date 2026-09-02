"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initSupportingCardsAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchSupportingCardsMobile: React.FC = () => {
  const { supportingCards } = GOOGLE_SEARCH_ADS_CONTENT;
  const [supportingImageError, setSupportingImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const supportingIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSupportingCardsAnimation(
      {
        card1: card1Ref.current,
        card2: card2Ref.current,
        card2Container: null,
        supportingIllustration: supportingIllustrationRef.current,
        card3: card3Ref.current,
        card4: card4Ref.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col space-y-6 mb-12 select-none overflow-x-clip"
    >
      <div>
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Section 03 // Supporting Capabilities
        </span>
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight">
          {supportingCards.heading}
        </h2>
      </div>

      {/* Card 01 */}
      <div
        ref={card1Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {supportingCards.items[0].title}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
          {supportingCards.items[0].description}
        </p>
      </div>

      {/* Card 02 */}
      <div
        ref={card2Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {supportingCards.items[1].title}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
          {supportingCards.items[1].description}
        </p>
      </div>

      {/* External Supporting Illustration for Mobile */}
      <div
        ref={supportingIllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-2 will-change-transform"
      >
        {!supportingImageError ? (
          <Image
            src={supportingCards.illustrationPath}
            alt={supportingCards.illustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setSupportingImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] text-[#64748B]">Image 02 slot</span>
          </div>
        )}
      </div>

      {/* Card 03 */}
      <div
        ref={card3Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {supportingCards.items[2].title}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
          {supportingCards.items[2].description}
        </p>
      </div>

      {/* Card 04 */}
      <div
        ref={card4Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {supportingCards.items[3].title}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
          {supportingCards.items[3].description}
        </p>
      </div>
    </section>
  );
};