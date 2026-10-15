"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ECOMMERCE_CONTENT } from "@/config/services/ecommerce";
import { initEcommerceCardsAnimation } from "../animations";

export const EcommerceCardsMobile: React.FC = () => {
  const { storeNeedsIntro, cards } = ECOMMERCE_CONTENT;
  const [supportingImageError, setSupportingImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const supportingIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initEcommerceCardsAnimation(
      {
        card1: card1Ref.current,
        card2: card2Ref.current,
        card2Container: null,
        supportingIllustration: supportingIllustrationRef.current,
        card3: card3Ref.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <div className="select-none overflow-x-clip">
      {/* Intro Card */}
      <section className="relative w-full mb-8">
        <div className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]">
          <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight mb-3">
            {storeNeedsIntro.heading}
          </h2>
          <p className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal">
            {storeNeedsIntro.paragraph}
          </p>
        </div>
      </section>

      {/* Cards Stack */}
      <section ref={containerRef} className="relative w-full flex flex-col space-y-6 mb-12">
        {/* Card 01 */}
        <div
          ref={card1Ref}
          className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
        >
          <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
            Card 01 — {cards.card1.title}
          </span>
          <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
            {cards.card1.heading}
          </h3>
          <div className="flex flex-col space-y-2">
            {cards.card1.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[14px] leading-[1.65] text-[#475569]">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Card 02 */}
        <div
          ref={card2Ref}
          className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
        >
          <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
            Card 02 — {cards.card2.title}
          </span>
          <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
            {cards.card2.heading}
          </h3>
          <div className="flex flex-col space-y-2">
            {cards.card2.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[14px] leading-[1.65] text-[#475569]">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* External Supporting Illustration for Mobile (Image 02) */}
        <div
          ref={supportingIllustrationRef}
          className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-2 will-change-transform"
        >
          {!supportingImageError ? (
            <Image
              src={cards.card2.illustrationPath}
              alt={cards.card2.illustrationAlt}
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
          <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
            Card 03 — {cards.card3.title}
          </span>
          <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
            {cards.card3.heading}
          </h3>
          <div className="flex flex-col space-y-2">
            {cards.card3.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[14px] leading-[1.65] text-[#475569]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};