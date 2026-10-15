"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initBentoGridAnimation } from "./animations";
import { SearchCardsMobile } from "./mobile/SearchCardsMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchCardsSection: React.FC = () => {
  const { bento } = GOOGLE_SEARCH_ADS_CONTENT;
  const [featuredImageError, setFeaturedImageError] = useState(false);
  const [relevanceImageError, setRelevanceImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const featuredCardRef = useRef<HTMLDivElement | null>(null);
  const targetingCardRef = useRef<HTMLDivElement | null>(null);
  const relevanceCardRef = useRef<HTMLDivElement | null>(null);
  const relevanceImageRef = useRef<HTMLDivElement | null>(null);
  const attributionCardRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initBentoGridAnimation(
      {
        featuredCard: featuredCardRef.current,
        targetingCard: targetingCardRef.current,
        relevanceCard: relevanceCardRef.current,
        relevanceImage: relevanceImageRef.current,
        attributionCard: attributionCardRef.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP BENTO GRID VIEWPORT */}
      <section
        ref={containerRef}
        className="hidden lg:flex relative w-full flex-col space-y-6 mb-20 select-none overflow-x-clip"
      >
        {/* =================================================================== */}
        {/* BENTO CELL 1: FEATURED CARD (Full Width Showcase + Image 02)        */}
        {/* =================================================================== */}
        <div
          ref={featuredCardRef}
          className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 lg:p-10 shadow-[0_18px_50px_-10px_rgba(7,54,109,0.09)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
        >
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7 flex flex-col justify-center">
              <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                {bento.featured.badge}
              </span>
              <h3 className="font-sans text-[26px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight mb-3">
                {bento.featured.heading}
              </h3>
              <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal mb-5">
                {bento.featured.summary}
              </p>

              {/* Minimal Capability Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[#BACFE6]/60">
                {bento.featured.capabilities.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#BACFE6] font-mono text-[11px] font-semibold text-[#06162C]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0A5FD7]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Image 02: Account Architecture */}
            <div className="col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[360px] flex items-center justify-center">
                {!featuredImageError ? (
                  <Image
                    src={bento.featured.illustrationPath}
                    alt={bento.featured.illustrationAlt}
                    fill
                    sizes="360px"
                    className="object-contain"
                    onError={() => setFeaturedImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                    <span className="font-mono text-[10.5px] font-bold text-[#06162C]">
                      Image 02: {bento.featured.illustrationPath}
                    </span>
                    <span className="mt-1 text-[11px] text-[#64748B]">Account topology illustration</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* BENTO ROW 2: ASYMMETRIC SPLIT (Targeting + Relevance with Image 03) */}
        {/* =================================================================== */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* Bento Cell 2: Targeting (5-Column Asymmetric Bay) */}
          <div
            ref={targetingCardRef}
            className="col-span-5 relative rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-7 flex flex-col justify-between shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] will-change-transform"
          >
            <div>
              <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                {bento.targeting.badge}
              </span>
              <h3 className="font-sans text-[21px] font-bold text-[#06162C] tracking-tight mb-2.5">
                {bento.targeting.heading}
              </h3>
              <p className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal mb-4">
                {bento.targeting.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#BACFE6]/60">
              {bento.targeting.capabilities.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-white/80 border border-[#BACFE6] font-mono text-[10.5px] font-medium text-[#06162C]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Cell 3: Relevance (7-Column Bay with Embedded Image 03) */}
          <div
            ref={relevanceCardRef}
            className="col-span-7 relative rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-7 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] flex items-center gap-6 will-change-transform"
          >
            <div className="w-[60%] flex flex-col justify-between h-full">
              <div>
                <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                  {bento.relevance.badge}
                </span>
                <h3 className="font-sans text-[21px] font-bold text-[#06162C] tracking-tight mb-2.5">
                  {bento.relevance.heading}
                </h3>
                <p className="font-sans text-[14px] leading-[1.68] text-[#475569] font-normal mb-4">
                  {bento.relevance.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#BACFE6]/60">
                {bento.relevance.capabilities.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/80 border border-[#BACFE6] font-mono text-[10.5px] font-medium text-[#06162C]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Image 03: Ad Copy & Quality Score Resonance */}
            <div
              ref={relevanceImageRef}
              className="w-[40%] flex items-center justify-center will-change-transform"
            >
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                {!relevanceImageError ? (
                  <Image
                    src={bento.relevance.illustrationPath}
                    alt={bento.relevance.illustrationAlt}
                    fill
                    sizes="260px"
                    className="object-contain"
                    onError={() => setRelevanceImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
                    <span className="font-mono text-[10px] text-[#06162C]">Image 03 slot</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* BENTO CELL 4: ATTRIBUTION ANCHOR CARD                               */}
        {/* =================================================================== */}
        <div
          ref={attributionCardRef}
          className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-7 lg:p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] will-change-transform"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-[620px]">
              <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1.5">
                {bento.attribution.badge}
              </span>
              <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-2">
                {bento.attribution.heading}
              </h3>
              <p className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal">
                {bento.attribution.summary}
              </p>
            </div>
            <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
              {bento.attribution.capabilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0A5FD7]" />
                  <span className="font-mono text-[11px] font-semibold text-[#06162C] uppercase tracking-wider">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <SearchCardsMobile />
      </div>
    </>
  );
};