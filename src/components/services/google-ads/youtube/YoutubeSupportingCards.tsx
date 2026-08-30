"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { YOUTUBE_ADS_CONTENT } from "@/config/services/youtubeAds";
import { initSupportingCardsAnimation } from "./animations";
import { YoutubeSupportingCardsMobile } from "./mobile/YoutubeSupportingCardsMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const YoutubeSupportingCards: React.FC = () => {
  const { supportingCards } = YOUTUBE_ADS_CONTENT;
  const [card2ImageError, setCard2ImageError] = useState(false);
  const [card3ImageError, setCard3ImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card2ContainerRef = useRef<HTMLDivElement | null>(null);
  const card2IllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3ContainerRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const card3IllustrationRef = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSupportingCardsAnimation(
      {
        card1: card1Ref.current,
        card2: card2Ref.current,
        card2Container: card2ContainerRef.current,
        card2Illustration: card2IllustrationRef.current,
        card3Container: card3ContainerRef.current,
        card3: card3Ref.current,
        card3Illustration: card3IllustrationRef.current,
        card4: card4Ref.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* 
        DESKTOP VIEWPORT: Alternating Layout
        - Card 01: 80% Right
        - Card 02: 70% Left + Image 02 on Right (30%)
        - Card 03: Image 03 on Left (30%) + 70% Card on Right
        - Card 04: 80% Left
      */}
      <section
        ref={containerRef}
        className="hidden lg:flex relative w-full flex-col space-y-12 mb-24 select-none overflow-x-clip"
      >
        {/* Card 01: Audience Targeting & Strategy (80% Right) */}
        <div ref={card1Ref} className="w-[80%] ml-auto will-change-transform">
          <div className="group/card relative min-h-[200px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
            />
            <div className="relative z-0">
              <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                {supportingCards.items[0].title}
              </h3>
              <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal">
                {supportingCards.items[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Card 02: Ad Formats & Placements (70% Left) + Image 02 on Right (30%) */}
        <div ref={card2ContainerRef} className="w-full flex items-center justify-between gap-8">
          <div ref={card2Ref} className="w-[70%] will-change-transform">
            <div className="group/card relative min-h-[200px] flex flex-col justify-between rounded-r-3xl rounded-l-none border border-[#BACFE6] border-l-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
              />
              <div className="relative z-0">
                <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                  {supportingCards.items[1].title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal">
                  {supportingCards.items[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Image 02 Container */}
          <div
            ref={card2IllustrationRef}
            className="w-[30%] flex items-center justify-center will-change-transform"
          >
            <div className="relative w-full aspect-[4/3] max-w-[280px] flex items-center justify-center">
              {!card2ImageError ? (
                <Image
                  src={supportingCards.card2IllustrationPath}
                  alt={supportingCards.card2IllustrationAlt}
                  fill
                  sizes="280px"
                  className="object-contain"
                  onError={() => setCard2ImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                  <span className="font-mono text-[10px] font-bold text-[#06162C]">
                    Image 02: {supportingCards.card2IllustrationPath}
                  </span>
                  <span className="mt-1 text-[10px] text-[#64748B]">Ad formats illustration slot</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card 03: Video Creative & Messaging (Image 03 on Left 30% + Card 03 on Right 70%) */}
        <div ref={card3ContainerRef} className="w-full flex items-center justify-between gap-8">
          <div
            ref={card3IllustrationRef}
            className="w-[30%] flex items-center justify-center will-change-transform"
          >
            <div className="relative w-full aspect-[4/3] max-w-[280px] flex items-center justify-center">
              {!card3ImageError ? (
                <Image
                  src={supportingCards.card3IllustrationPath}
                  alt={supportingCards.card3IllustrationAlt}
                  fill
                  sizes="280px"
                  className="object-contain"
                  onError={() => setCard3ImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                  <span className="font-mono text-[10px] font-bold text-[#06162C]">
                    Image 03: {supportingCards.card3IllustrationPath}
                  </span>
                  <span className="mt-1 text-[10px] text-[#64748B]">Analytics illustration slot</span>
                </div>
              )}
            </div>
          </div>

          <div ref={card3Ref} className="w-[70%] will-change-transform">
            <div className="group/card relative min-h-[200px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
              />
              <div className="relative z-0">
                <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                  {supportingCards.items[2].title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal">
                  {supportingCards.items[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 04: Performance Tracking & Optimization (80% Left Aligned) */}
        <div ref={card4Ref} className="w-[80%] mr-auto will-change-transform">
          <div className="group/card relative min-h-[200px] flex flex-col justify-between rounded-r-3xl rounded-l-none border border-[#BACFE6] border-l-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
            />
            <div className="relative z-0">
              <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                {supportingCards.items[3].title}
              </h3>
              <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal">
                {supportingCards.items[3].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <YoutubeSupportingCardsMobile />
      </div>
    </>
  );
};