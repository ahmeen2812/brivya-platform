"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

export const AlternatingServiceCardsDesktop: React.FC = () => {
  const { cards } = CUSTOM_WEBSITES_CONTENT;
  const [seoImageError, setSeoImageError] = useState(false);

  return (
    <section className="relative w-full flex flex-col space-y-10 mb-20 select-none">
      {/* =================================================================== */}
      {/* CARD 01 — CUSTOM DEVELOPMENT (80% Width, Right Aligned)            */}
      {/* =================================================================== */}
      <div className="w-[80%] ml-auto">
        <div className="relative min-h-[220px] flex flex-col justify-between rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300">
          <div>
            <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
              {cards.card1.heading}
            </h3>
            <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
              {cards.card1.description}
            </p>
          </div>
          <p className="mt-4 font-mono text-[12px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
            {cards.card1.highlight}
          </p>
        </div>
      </div>

      {/* =================================================================== */}
      {/* CARD 02 — SEO OPTIMIZATION (70% Width, Left Aligned) + ILLUSTRATION */}
      {/* =================================================================== */}
      <div className="w-full flex items-center justify-between gap-8">
        {/* Card 02 (70% Width) */}
        <div className="w-[70%]">
          <div className="relative min-h-[220px] flex flex-col justify-between rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300">
            <div>
              <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                {cards.card2.heading}
              </h3>
              <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
                {cards.card2.description}
              </p>
            </div>
            <p className="mt-4 font-mono text-[12px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
              {cards.card2.highlight}
            </p>
          </div>
        </div>

        {/* Separate External SEO Illustration Container (Remaining 30% Width) */}
        <div className="w-[30%] flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] max-w-[280px] flex items-center justify-center">
            {!seoImageError ? (
              <Image
                src={cards.card2.illustrationPath}
                alt={cards.card2.illustrationAlt}
                fill
                sizes="280px"
                className="object-contain"
                onError={() => setSeoImageError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                <span className="font-mono text-[10px] font-bold text-[#06162C]">
                  {cards.card2.illustrationPath}
                </span>
                <span className="mt-1 text-[10px] text-[#64748B]">
                  SEO illustration space
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* CARD 03 — RESPONSIVE DESIGN (80% Width, Right Aligned)              */}
      {/* =================================================================== */}
      <div className="w-[80%] ml-auto">
        <div className="relative min-h-[220px] flex flex-col justify-between rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300">
          <div>
            <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
              {cards.card3.heading}
            </h3>
            <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
              {cards.card3.description}
            </p>
          </div>
          <p className="mt-4 font-mono text-[12px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
            {cards.card3.highlight}
          </p>
        </div>
      </div>
    </section>
  );
};