"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initSearchCardsAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchCardsMobile: React.FC = () => {
  const { cards } = GOOGLE_SEARCH_ADS_CONTENT;
  const [relevanceImageError, setRelevanceImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const relevanceIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSearchCardsAnimation(
      {
        card2: card2Ref.current,
        card3: card3Ref.current,
        card3Container: null,
        relevanceIllustration: relevanceIllustrationRef.current,
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
      {/* Card 02 */}
      <div
        ref={card2Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {cards.card2.tag}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-1">
          {cards.card2.title}
        </h3>
        <p className="font-sans text-[13.5px] font-semibold text-[#07366D] mb-2.5">
          {cards.card2.heading}
        </p>
        <div className="flex flex-col space-y-2 mb-3">
          {cards.card2.paragraphs.map((p, idx) => (
            <p key={idx} className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {p}
            </p>
          ))}
        </div>
        <div className="flex flex-col space-y-1.5 pt-2.5 border-t border-[#BACFE6]/60">
          {cards.card2.deliverables.map((item, idx) => (
            <span key={idx} className="font-sans text-[12px] text-[#06162C]">
              • <strong>{item.title}:</strong> {item.description}
            </span>
          ))}
        </div>
      </div>

      {/* Card 03 */}
      <div
        ref={card3Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {cards.card3.tag}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-1">
          {cards.card3.title}
        </h3>
        <p className="font-sans text-[13.5px] font-semibold text-[#07366D] mb-2.5">
          {cards.card3.heading}
        </p>
        <div className="flex flex-col space-y-2 mb-3">
          {cards.card3.paragraphs.map((p, idx) => (
            <p key={idx} className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {p}
            </p>
          ))}
        </div>
        <div className="flex flex-col space-y-1.5 pt-2.5 border-t border-[#BACFE6]/60">
          {cards.card3.deliverables.map((item, idx) => (
            <span key={idx} className="font-sans text-[12px] text-[#06162C]">
              • <strong>{item.title}:</strong> {item.description}
            </span>
          ))}
        </div>
      </div>

      {/* External Ad Relevance Illustration for Mobile (Image 03) */}
      <div
        ref={relevanceIllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-2 will-change-transform"
      >
        {!relevanceImageError ? (
          <Image
            src={cards.card3.illustrationPath}
            alt={cards.card3.illustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setRelevanceImageError(true)}
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
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {cards.card4.tag}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-1">
          {cards.card4.title}
        </h3>
        <p className="font-sans text-[13.5px] font-semibold text-[#07366D] mb-2.5">
          {cards.card4.heading}
        </p>
        <div className="flex flex-col space-y-2 mb-3">
          {cards.card4.paragraphs.map((p, idx) => (
            <p key={idx} className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {p}
            </p>
          ))}
        </div>
        <div className="flex flex-col space-y-1.5 pt-2.5 border-t border-[#BACFE6]/60">
          {cards.card4.deliverables.map((item, idx) => (
            <span key={idx} className="font-sans text-[12px] text-[#06162C]">
              • <strong>{item.title}:</strong> {item.description}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};