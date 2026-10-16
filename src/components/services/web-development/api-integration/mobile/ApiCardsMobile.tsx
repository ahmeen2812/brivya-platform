"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { API_INTEGRATION_CONTENT } from "@/config/services/apiIntegration";
import { initApiCardsAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const ApiCardsMobile: React.FC = () => {
  const { cards } = API_INTEGRATION_CONTENT;
  const [syncImageError, setSyncImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const syncIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initApiCardsAnimation(
      {
        card2: card2Ref.current,
        card3: card3Ref.current,
        card3Container: null,
        syncIllustration: syncIllustrationRef.current,
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
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Card {cards.card2.index} — {cards.card2.title}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {cards.card2.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {cards.card2.paragraph}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {cards.card2.highlight}
        </p>
      </div>

      {/* Card 03 */}
      <div
        ref={card3Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Card {cards.card3.index} — {cards.card3.title}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {cards.card3.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {cards.card3.paragraph}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {cards.card3.highlight}
        </p>
      </div>

      {/* External Sync Illustration for Mobile (Image 03) */}
      <div
        ref={syncIllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-2 will-change-transform"
      >
        {!syncImageError ? (
          <Image
            src={cards.card3.illustrationPath}
            alt={cards.card3.illustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setSyncImageError(true)}
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
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Card {cards.card4.index} — {cards.card4.title}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {cards.card4.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {cards.card4.paragraph}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {cards.card4.highlight}
        </p>
      </div>
    </section>
  );
};