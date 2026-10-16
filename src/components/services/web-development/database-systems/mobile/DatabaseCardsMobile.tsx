"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { DATABASE_SYSTEMS_CONTENT } from "@/config/services/databaseSystems";
import { initDatabaseCardsAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const DatabaseCardsMobile: React.FC = () => {
  const { cards } = DATABASE_SYSTEMS_CONTENT;
  const [architectureImageError, setArchitectureImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const architectureIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initDatabaseCardsAnimation(
      {
        card2: card2Ref.current,
        card3: card3Ref.current,
        card3Container: null,
        architectureIllustration: architectureIllustrationRef.current,
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
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {cards.card2.highlight}
        </p>
      </div>

      {/* Card 03 */}
      <div
        ref={card3Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
   
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
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {cards.card3.highlight}
        </p>
      </div>

      {/* External Architecture Illustration for Mobile (Image 03) */}
      <div
        ref={architectureIllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-2 will-change-transform"
      >
        {!architectureImageError ? (
          <Image
            src={cards.card3.illustrationPath}
            alt={cards.card3.illustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setArchitectureImageError(true)}
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
          {cards.card4.heading}
        </h3>
        <div className="flex flex-col space-y-2">
          {cards.card4.paragraphs.map((p, idx) => (
            <p key={idx} className="font-sans text-[14px] leading-[1.65] text-[#475569]">
              {p}
            </p>
          ))}
        </div>
       
      </div>
    </section>
  );
};