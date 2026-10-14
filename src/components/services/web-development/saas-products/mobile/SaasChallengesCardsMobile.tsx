"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SAAS_PRODUCTS_CONTENT } from "@/config/services/saasProducts";
import { initChallengesCardsAnimation } from "../animations";

export const SaasChallengesCardsMobile: React.FC = () => {
  const { challenges } = SAAS_PRODUCTS_CONTENT;
  const [metricsImageError, setMetricsImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const metricsIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initChallengesCardsAnimation(
      {
        card1: card1Ref.current,
        card2: card2Ref.current,
        card2Container: null,
        metricsIllustration: metricsIllustrationRef.current,
        card3: card3Ref.current,
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
      {/* Challenge 01 */}
      <div
        ref={card1Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Challenge 01
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {challenges.challenge1.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {challenges.challenge1.description}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {challenges.challenge1.highlight}
        </p>
      </div>

      {/* Challenge 02 */}
      <div
        ref={card2Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Challenge 02
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {challenges.challenge2.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {challenges.challenge2.description}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {challenges.challenge2.highlight}
        </p>
      </div>

      {/* External Metrics Illustration for Mobile */}
      <div
        ref={metricsIllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-2 will-change-transform"
      >
        {!metricsImageError ? (
          <Image
            src={challenges.challenge2.illustrationPath}
            alt={challenges.challenge2.illustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setMetricsImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] text-[#64748B]">SaaS metrics illustration slot</span>
          </div>
        )}
      </div>

      {/* Challenge 03 */}
      <div
        ref={card3Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Challenge 03
        </span>
        <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
          {challenges.challenge3.heading}
        </h3>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] font-normal">
          {challenges.challenge3.description}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
          {challenges.challenge3.highlight}
        </p>
      </div>
    </section>
  );
};