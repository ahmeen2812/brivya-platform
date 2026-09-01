"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initSupportingCardsAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchSupportingCardsMobile: React.FC = () => {
  const { supportingCards } = GOOGLE_SEARCH_ADS_CONTENT;
  const [card2ImageError, setCard2ImageError] = useState(false);
  const [card3ImageError, setCard3ImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card2IllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const card3IllustrationRef = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSupportingCardsAnimation(
      {
        card1: card1Ref.current,
        card2: card2Ref.current,
        card2Container: null,
        card2Illustration: card2IllustrationRef.current,
        card3Container: null,
        card3: card3Ref.current,
        card3Illustration: card3IllustrationRef.current,
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

      {/* Image 02 for Mobile */}
      <div
        ref={card2IllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-1 will-change-transform"
      >
        {!card2ImageError ? (
          <Image
            src={supportingCards.card2IllustrationPath}
            alt={supportingCards.card2IllustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setCard2ImageError(true)}
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

      {/* Image 03 for Mobile */}
      <div
        ref={card3IllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-1 will-change-transform"
      >
        {!card3ImageError ? (
          <Image
            src={supportingCards.card3IllustrationPath}
            alt={supportingCards.card3IllustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setCard3ImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] text-[#64748B]">Image 03 slot</span>
          </div>
        )}
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