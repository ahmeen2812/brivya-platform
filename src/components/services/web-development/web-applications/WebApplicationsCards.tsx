"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { WEB_APPLICATIONS_CONTENT } from "@/config/services/webApplications";
import { initSolutionCardsAnimation } from "./animations";
import { WebApplicationsCardsMobile } from "./mobile/WebApplicationsCardsMobile";

export const WebApplicationsCards: React.FC = () => {
  const { cards } = WEB_APPLICATIONS_CONTENT;
  const [dashboardImageError, setDashboardImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card2ContainerRef = useRef<HTMLDivElement | null>(null);
  const dashboardIllustrationRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initSolutionCardsAnimation(
      {
        card1: card1Ref.current,
        card2: card2Ref.current,
        card2Container: card2ContainerRef.current,
        dashboardIllustration: dashboardIllustrationRef.current,
        card3: card3Ref.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT: 80% Right -> 70% Left (+ 30% Dashboard) -> 80% Right */}
      <section
        ref={containerRef}
        className="hidden lg:flex relative w-full flex-col space-y-10 mb-20 select-none overflow-x-clip"
      >
        {/* =================================================================== */}
        {/* CARD 01 — DISCONNECTED WORKFLOWS (80% Width, Right Aligned)        */}
        {/* =================================================================== */}
        <div ref={card1Ref} className="w-[80%] ml-auto will-change-transform">
          <div className="group/card relative min-h-[220px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
            />

            <div className="relative z-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider">
                  Solution 01
                </span>
              </div>
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
        {/* CARD 02 — LIMITED VISIBILITY (70% Width, Left Aligned) + DASHBOARD */}
        {/* =================================================================== */}
        <div ref={card2ContainerRef} className="w-full flex items-center justify-between gap-8">
          <div ref={card2Ref} className="w-[70%] will-change-transform">
            <div className="group/card relative min-h-[220px] flex flex-col justify-between rounded-r-3xl rounded-l-none border border-[#BACFE6] border-l-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
              />

              <div className="relative z-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider">
                    Solution 02
                  </span>
                </div>
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

          {/* Reserved External Dashboard Graphic (Independent Upward Reveal) */}
          <div
            ref={dashboardIllustrationRef}
            className="w-[30%] flex items-center justify-center will-change-transform"
          >
            <div className="relative w-full aspect-[4/3] max-w-[280px] flex items-center justify-center">
              {!dashboardImageError ? (
                <Image
                  src={cards.card2.illustrationPath}
                  alt={cards.card2.illustrationAlt}
                  fill
                  sizes="280px"
                  className="object-contain"
                  onError={() => setDashboardImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                  <span className="font-mono text-[10px] font-bold text-[#06162C]">
                    {cards.card2.illustrationPath}
                  </span>
                  <span className="mt-1 text-[10px] text-[#64748B]">
                    Dashboard graphic slot
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* CARD 03 — COMPLEX USER MANAGEMENT (80% Width, Right Aligned)       */}
        {/* =================================================================== */}
        <div ref={card3Ref} className="w-[80%] ml-auto will-change-transform">
          <div className="group/card relative min-h-[220px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10"
            />

            <div className="relative z-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider">
                  Solution 03
                </span>
              </div>
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
        <WebApplicationsCardsMobile />
      </div>
    </>
  );
};