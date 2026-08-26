"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { LANDING_PAGES_CONTENT } from "@/config/services/landingPages";
import { initSupportingCardsAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const LandingPagesSupportingCardsMobile: React.FC = () => {
  const { supportingCards } = LANDING_PAGES_CONTENT;
  const [card1ImageError, setCard1ImageError] = useState(false);
  const [card2ImageError, setCard2ImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card1IllustrationRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card2IllustrationRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSupportingCardsAnimation(
      {
        card1: card1Ref.current,
        card1Container: null,
        card1Illustration: card1IllustrationRef.current,
        card2Container: null,
        card2: card2Ref.current,
        card2Illustration: card2IllustrationRef.current,
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

      {/* Image 02 Mobile */}
      <div
        ref={card1IllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-1 will-change-transform"
      >
        {!card1ImageError ? (
          <Image
            src={supportingCards.card1IllustrationPath}
            alt={supportingCards.card1IllustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setCard1ImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] text-[#64748B]">Image 02 slot</span>
          </div>
        )}
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

      {/* Image 03 Mobile */}
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
            <span className="font-mono text-[10px] text-[#64748B]">Image 03 slot</span>
          </div>
        )}
      </div>
    </section>
  );
};