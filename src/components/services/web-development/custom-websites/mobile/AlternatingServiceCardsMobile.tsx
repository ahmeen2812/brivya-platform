"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

export const AlternatingServiceCardsMobile: React.FC = () => {
  const { cards } = CUSTOM_WEBSITES_CONTENT;
  const [seoImageError, setSeoImageError] = useState(false);

  return (
    <section className="relative w-full flex flex-col space-y-6 mb-12 select-none">
      {/* Card 01 */}
      <div className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]">
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {cards.card1.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {cards.card1.description}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {cards.card1.highlight}
        </p>
      </div>

      {/* Card 02 */}
      <div className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]">
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {cards.card2.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {cards.card2.description}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {cards.card2.highlight}
        </p>
      </div>

      {/* Repositioned SEO Illustration for Mobile (Outside Card 02, zero collision) */}
      <div className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-2">
        {!seoImageError ? (
          <Image
            src={cards.card2.illustrationPath}
            alt={cards.card2.illustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setSeoImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] text-[#64748B]">SEO illustration slot</span>
          </div>
        )}
      </div>

      {/* Card 03 */}
      <div className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]">
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {cards.card3.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {cards.card3.description}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {cards.card3.highlight}
        </p>
      </div>
    </section>
  );
};