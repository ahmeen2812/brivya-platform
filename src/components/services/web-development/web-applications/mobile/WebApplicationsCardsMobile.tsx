"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { WEB_APPLICATIONS_CONTENT } from "@/config/services/webApplications";
import { initSolutionCardsAnimation } from "../animations";

export const WebApplicationsCardsMobile: React.FC = () => {
  const { cards } = WEB_APPLICATIONS_CONTENT;
  const [dashboardImageError, setDashboardImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const dashboardIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSolutionCardsAnimation(
      {
        card1: card1Ref.current,
        card2: card2Ref.current,
        card2Container: null,
        dashboardIllustration: dashboardIllustrationRef.current,
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
      {/* Solution 01 */}
      <div
        ref={card1Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Solution 01
        </span>
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

      {/* Solution 02 */}
      <div
        ref={card2Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Solution 02
        </span>
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

      {/* External Dashboard Illustration Repositioned Below Solution 02 */}
      <div
        ref={dashboardIllustrationRef}
        className="w-full max-w-[240px] aspect-[4/3] mx-auto relative flex items-center justify-center my-2 will-change-transform"
      >
        {!dashboardImageError ? (
          <Image
            src={cards.card2.illustrationPath}
            alt={cards.card2.illustrationAlt}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setDashboardImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] text-[#64748B]">Dashboard graphic slot</span>
          </div>
        )}
      </div>

      {/* Solution 03 */}
      <div
        ref={card3Ref}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Solution 03
        </span>
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