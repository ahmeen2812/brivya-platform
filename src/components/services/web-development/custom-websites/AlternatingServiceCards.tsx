"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";
import { initServiceCardsAnimation } from "./animations";
import { AlternatingServiceCardsMobile } from "./mobile/AlternatingServiceCardsMobile";

export const AlternatingServiceCards: React.FC = () => {
  const { cards } = CUSTOM_WEBSITES_CONTENT;
  const [seoImageError, setSeoImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card2ContainerRef = useRef<HTMLDivElement | null>(null);
  const seoIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initServiceCardsAnimation(
      {
        card1: card1Ref.current,
        card2: card2Ref.current,
        card2Container: card2ContainerRef.current,
        seoIllustration: seoIllustrationRef.current,
        card3: card3Ref.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT: 80% Right -> 70% Left (+ 30% SEO Illustration) -> 80% Right */}
      <section
        ref={containerRef}
        className="hidden lg:flex relative w-full flex-col space-y-10 mb-20 select-none overflow-x-clip"
      >
        {/* =================================================================== */}
        {/* CARD 01 — Enters RIGHT -> LEFT (80% Width, Right Square, Edge Fade) */}
        {/* =================================================================== */}
        <div
          ref={card1Ref}
          className="w-[80%] ml-auto will-change-transform"
        >
          <div
            /* 
              Special Edge Styling:
              - Left corners: smoothly rounded (rounded-l-3xl)
              - Right corners: square (rounded-r-none)
              - Right border: border-r-0 blending into #F4F7FC canvas
              - Subtle right-edge fade overlay
            */
            className="group/card relative min-h-[220px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden"
          >
            {/* Subtle right-edge fade mask */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
            />

            <div className="relative z-0">
              <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                {cards.card1.heading}
              </h3>
              <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
                {cards.card1.description}
              </p>
            </div>
            <p className="relative z-0 mt-4 font-mono text-[12px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
              {cards.card1.highlight}
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* CARD 02 — Enters LEFT -> RIGHT (70% Width, Left Square, Edge Fade)  */}
        {/* =================================================================== */}
        <div
          ref={card2ContainerRef}
          className="w-full flex items-center justify-between gap-8"
        >
          {/* Card 02 (70% Width) */}
          <div
            ref={card2Ref}
            className="w-[70%] will-change-transform"
          >
            <div
              /* 
                Special Edge Styling:
                - Left corners: square (rounded-l-none)
                - Right corners: smoothly rounded (rounded-r-3xl)
                - Left border: border-l-0 blending into #F4F7FC canvas
                - Subtle left-edge fade overlay
              */
              className="group/card relative min-h-[220px] flex flex-col justify-between rounded-r-3xl rounded-l-none border border-[#BACFE6] border-l-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle left-edge fade mask */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
              />

              <div className="relative z-0">
                <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                  {cards.card2.heading}
                </h3>
                <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
                  {cards.card2.description}
                </p>
              </div>
              <p className="relative z-0 mt-4 font-mono text-[12px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
                {cards.card2.highlight}
              </p>
            </div>
          </div>

          {/* Reserved External SEO Illustration (Independent Upward Reveal) */}
          <div
            ref={seoIllustrationRef}
            className="w-[30%] flex items-center justify-center will-change-transform"
          >
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
        {/* CARD 03 — Enters RIGHT -> LEFT (80% Width, Right Square, Edge Fade) */}
        {/* =================================================================== */}
        <div
          ref={card3Ref}
          className="w-[80%] ml-auto will-change-transform"
        >
          <div
            /* 
              Special Edge Styling:
              - Left corners: smoothly rounded (rounded-l-3xl)
              - Right corners: square (rounded-r-none)
              - Right border: border-r-0 blending into #F4F7FC canvas
              - Subtle right-edge fade overlay
            */
            className="group/card relative min-h-[220px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden"
          >
            {/* Subtle right-edge fade mask */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
            />

            <div className="relative z-0">
              <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                {cards.card3.heading}
              </h3>
              <p className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
                {cards.card3.description}
              </p>
            </div>
            <p className="relative z-0 mt-4 font-mono text-[12px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
              {cards.card3.highlight}
            </p>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <AlternatingServiceCardsMobile />
      </div>
    </>
  );
};