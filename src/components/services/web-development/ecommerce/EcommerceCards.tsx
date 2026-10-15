"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ECOMMERCE_CONTENT } from "@/config/services/ecommerce";
import { initStoreNeedsIntroAnimation, initEcommerceCardsAnimation } from "./animations";
import { EcommerceCardsMobile } from "./mobile/EcommerceCardsMobile";

export const EcommerceCards: React.FC = () => {
  const { storeNeedsIntro, cards } = ECOMMERCE_CONTENT;
  const [supportingImageError, setSupportingImageError] = useState(false);

  const introCardRef = useRef<HTMLDivElement | null>(null);
  const introHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const introParaRef = useRef<HTMLParagraphElement | null>(null);

  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card2ContainerRef = useRef<HTMLDivElement | null>(null);
  const supportingIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (introCardRef.current) {
      initStoreNeedsIntroAnimation(
        introCardRef.current,
        introHeadingRef.current,
        introParaRef.current
      );
    }

    if (cardsContainerRef.current) {
      initEcommerceCardsAnimation(
        {
          card1: card1Ref.current,
          card2: card2Ref.current,
          card2Container: card2ContainerRef.current,
          supportingIllustration: supportingIllustrationRef.current,
          card3: card3Ref.current,
        },
        cardsContainerRef.current
      );
    }
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT */}
      <div className="hidden lg:block select-none overflow-x-clip">
        {/* Intro Card */}
        <section className="relative w-full mb-16">
          <div
            ref={introCardRef}
            className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 lg:p-10 shadow-[0_18px_50px_-10px_rgba(7,54,109,0.09)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
          >
            <div className="relative z-10 max-w-[940px] mx-auto flex flex-col">
              <h2
                ref={introHeadingRef}
                className="font-sans text-[28px] font-extrabold text-[#06162C] leading-[1.18] tracking-[-0.03em] mb-4 will-change-transform"
              >
                {storeNeedsIntro.heading}
              </h2>
              <p
                ref={introParaRef}
                className="font-sans text-[17px] leading-[1.74] text-[#475569] font-normal tracking-[-0.01em] will-change-transform"
              >
                {storeNeedsIntro.paragraph}
              </p>
            </div>
          </div>
        </section>

        {/* Alternating Service Cards */}
        <section ref={cardsContainerRef} className="relative w-full flex flex-col space-y-10 mb-20">
          {/* Card 01: 80% Width, Right Aligned */}
          <div ref={card1Ref} className="w-[80%] ml-auto will-change-transform">
            <div className="group/card relative min-h-[220px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
              />
              <div className="relative z-0">
                <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                  Card 01 — {cards.card1.title}
                </span>
                <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                  {cards.card1.heading}
                </h3>
                <div className="flex flex-col space-y-2">
                  {cards.card1.paragraphs.map((p, idx) => (
                    <p key={idx} className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: 70% Width, Left Aligned + Image 02 */}
          <div ref={card2ContainerRef} className="w-full flex items-center justify-between gap-8">
            <div ref={card2Ref} className="w-[70%] will-change-transform">
              <div className="group/card relative min-h-[220px] flex flex-col justify-between rounded-r-3xl rounded-l-none border border-[#BACFE6] border-l-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
                />
                <div className="relative z-0">
                  <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                    Card 02 — {cards.card2.title}
                  </span>
                  <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                    {cards.card2.heading}
                  </h3>
                  <div className="flex flex-col space-y-2">
                    {cards.card2.paragraphs.map((p, idx) => (
                      <p key={idx} className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reserved External Supporting Illustration (Image 02) */}
            <div
              ref={supportingIllustrationRef}
              className="w-[30%] flex items-center justify-center will-change-transform"
            >
              <div className="relative w-full aspect-[4/3] max-w-[280px] flex items-center justify-center">
                {!supportingImageError ? (
                  <Image
                    src={cards.card2.illustrationPath}
                    alt={cards.card2.illustrationAlt}
                    fill
                    sizes="280px"
                    className="object-contain"
                    onError={() => setSupportingImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                    <span className="font-mono text-[10px] font-bold text-[#06162C]">
                      Image 02: {cards.card2.illustrationPath}
                    </span>
                    <span className="mt-1 text-[10px] text-[#64748B]">Supporting illustration slot</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 03: 80% Width, Right Aligned */}
          <div ref={card3Ref} className="w-[80%] ml-auto will-change-transform">
            <div className="group/card relative min-h-[220px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
              />
              <div className="relative z-0">
                <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                  Card 03 — {cards.card3.title}
                </span>
                <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                  {cards.card3.heading}
                </h3>
                <div className="flex flex-col space-y-2">
                  {cards.card3.paragraphs.map((p, idx) => (
                    <p key={idx} className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <EcommerceCardsMobile />
      </div>
    </>
  );
};