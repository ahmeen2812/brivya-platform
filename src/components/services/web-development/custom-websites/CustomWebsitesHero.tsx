"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

export const CustomWebsitesHero: React.FC = () => {
  const { hero } = CUSTOM_WEBSITES_CONTENT;
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ================================================================= */}
        {/* LEFT COLUMN: Headings, Tagline & Editorial Description            */}
        {/* ================================================================= */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Section Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#BACFE6] shadow-[0_2px_8px_rgba(7,54,109,0.04)] w-fit mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0A5FD7]" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#06162C]">
              Web Development & Custom Software
            </span>
          </div>

          {/* Main Display Heading */}
          <h1 className="font-sans text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-extrabold text-[#06162C] leading-[1.08] tracking-[-0.035em]">
            {hero.heading}
          </h1>

          {/* Prominent Subtitle Tagline */}
          <p className="mt-4 sm:mt-5 font-sans text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#07366D] leading-[1.3] tracking-[-0.02em]">
            {hero.tagline}
          </p>

          {/* Supporting Description */}
          <p className="mt-4 sm:mt-5 font-sans text-[15px] sm:text-[16px] leading-[1.72] text-[#475569] font-normal tracking-[-0.01em] max-w-[620px]">
            {hero.description}
          </p>
        </div>

        {/* ================================================================= */}
        {/* RIGHT COLUMN: Dedicated Illustration Bay                          */}
        {/* ================================================================= */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] max-w-[480px] lg:max-w-none flex items-center justify-center">
            {!imageError ? (
              <Image
                src={hero.imagePath}
                alt={hero.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                className="object-contain"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#BACFE6] rounded-3xl w-full h-full bg-white/60 shadow-xs">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0A5FD7] border border-[#CBDDF6] shadow-2xs mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-mono text-[11px] font-bold text-[#06162C]">
                  {hero.imagePath}
                </span>
                <span className="mt-1 text-[11.5px] text-[#64748B] max-w-[280px]">
                  Place illustration in public/images/services/web-development/ to render automatically
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};