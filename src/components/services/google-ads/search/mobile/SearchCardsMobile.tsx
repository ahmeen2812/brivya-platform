"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initBentoGridAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchCardsMobile: React.FC = () => {
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
    <section
      ref={containerRef}
      className="relative w-full flex flex-col space-y-5 mb-12 select-none overflow-x-clip"
    >
      {/* Featured Card */}
      <div
        ref={featuredCardRef}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {bento.featured.badge}
        </span>
        <h3 className="font-sans text-[19px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight mb-2">
          {bento.featured.heading}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569] mb-4">
          {bento.featured.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {bento.featured.capabilities.map((item, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-white/80 border border-[#BACFE6] font-mono text-[10px] font-medium text-[#06162C]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Image 02 for Mobile */}
        <div className="w-full max-w-[260px] aspect-[4/3] mx-auto relative flex items-center justify-center">
          {!featuredImageError ? (
            <Image
              src={bento.featured.illustrationPath}
              alt={bento.featured.illustrationAlt}
              fill
              sizes="260px"
              className="object-contain"
              onError={() => setFeaturedImageError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
              <span className="font-mono text-[10px] text-[#64748B]">Image 02 slot</span>
            </div>
          )}
        </div>
      </div>

      {/* Targeting Card */}
      <div
        ref={targetingCardRef}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {bento.targeting.badge}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {bento.targeting.heading}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569] mb-3">
          {bento.targeting.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {bento.targeting.capabilities.map((item, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-white/80 border border-[#BACFE6] font-mono text-[10px] font-medium text-[#06162C]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Relevance Card + Image 03 */}
      <div
        ref={relevanceCardRef}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {bento.relevance.badge}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {bento.relevance.heading}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569] mb-3">
          {bento.relevance.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {bento.relevance.capabilities.map((item, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-white/80 border border-[#BACFE6] font-mono text-[10px] font-medium text-[#06162C]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Image 03 for Mobile */}
        <div
          ref={relevanceImageRef}
          className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center will-change-transform"
        >
          {!relevanceImageError ? (
            <Image
              src={bento.relevance.illustrationPath}
              alt={bento.relevance.illustrationAlt}
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
      </div>

      {/* Attribution Card */}
      <div
        ref={attributionCardRef}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {bento.attribution.badge}
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {bento.attribution.heading}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569] mb-3">
          {bento.attribution.summary}
        </p>
        <div className="flex flex-col space-y-1.5 pt-2 border-t border-[#BACFE6]/60">
          {bento.attribution.capabilities.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#0A5FD7]" />
              <span className="font-mono text-[10.5px] font-medium text-[#06162C]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};