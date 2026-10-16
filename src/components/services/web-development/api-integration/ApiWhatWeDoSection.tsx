"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { API_INTEGRATION_CONTENT } from "@/config/services/apiIntegration";
import { initFeaturedCardAnimation } from "./animations";
import { ApiWhatWeDoMobile } from "./mobile/ApiWhatWeDoMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const ApiWhatWeDoSection: React.FC = () => {
  const { whatWeDoIntro } = API_INTEGRATION_CONTENT;
  const [imageError, setImageError] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = initFeaturedCardAnimation(
      cardRef.current,
      headerRef.current,
      bodyRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT */}
      <section className="hidden lg:block relative w-full mb-16 select-none overflow-x-clip">
        {/* Section Intro */}
        <div ref={headerRef} className="max-w-[820px] mb-8 will-change-transform">
          <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
            Section 02 // Engineering Architecture
          </span>
          <h2 className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14]">
            {whatWeDoIntro.heading}
          </h2>
          <p className="mt-3 font-sans text-[16px] text-[#475569] leading-[1.7] font-normal">
            {whatWeDoIntro.paragraph}
          </p>
        </div>

        {/* Featured Card (Custom API Development with Image 02) */}
        <div
          ref={cardRef}
          className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 lg:p-10 shadow-[0_18px_50px_-10px_rgba(7,54,109,0.09)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
        >
          <div ref={bodyRef} className="grid grid-cols-12 gap-8 items-center will-change-transform">
            <div className="col-span-7 flex flex-col justify-center">
              <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                {whatWeDoIntro.featuredCard.tag}
              </span>
              <h3 className="font-sans text-[26px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight mb-3">
                {whatWeDoIntro.featuredCard.heading}
              </h3>
              <p className="font-sans text-[15px] font-semibold text-[#07366D] mb-3">
                {whatWeDoIntro.featuredCard.question}
              </p>
              <p className="font-sans text-[15px] leading-[1.72] text-[#475569] font-normal">
                {whatWeDoIntro.featuredCard.paragraph}
              </p>
            </div>

            {/* Image 02 — Custom API Endpoint Architecture */}
            <div className="col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[360px] flex items-center justify-center">
                {!imageError ? (
                  <Image
                    src={whatWeDoIntro.featuredCard.illustrationPath}
                    alt={whatWeDoIntro.featuredCard.illustrationAlt}
                    fill
                    sizes="360px"
                    className="object-contain"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                    <span className="font-mono text-[10.5px] font-bold text-[#06162C]">
                      Image 02: {whatWeDoIntro.featuredCard.illustrationPath}
                    </span>
                    <span className="mt-1 text-[11px] text-[#64748B]">Custom API illustration slot</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <ApiWhatWeDoMobile />
      </div>
    </>
  );
};