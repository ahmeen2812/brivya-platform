"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INQUIRY_CONTENT } from "./content";

export const InquiryHeroIntro: React.FC = () => {
  const { heroIntro } = INQUIRY_CONTENT;
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col justify-start w-full pr-0 lg:pr-6 select-none">
      {/* 1. Technical Eyebrow Badge */}
      <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
        <span aria-hidden="true" className="w-5 h-[2px] bg-[#0A5FD7]" />
        <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A5FD7]">
          {heroIntro.eyebrow}
        </span>
      </div>

      {/* 2. Editorial Heading */}
      <h1 className="font-sans text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-extrabold text-[#06162C] leading-[1.08] tracking-[-0.035em]">
        <span>{heroIntro.headingPrimary}</span>{" "}
        <span className="text-[#0A5FD7]">{heroIntro.headingAccent}</span>
      </h1>

      {/* 3. Supporting Description */}
      <p className="mt-4 sm:mt-5 font-sans text-[15px] sm:text-[16px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em] max-w-lg">
        {heroIntro.description}
      </p>

      {/* 4. Dedicated Contact PNG Illustration Area */}
      <div className="mt-8 sm:mt-10 w-full max-w-md">
        <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/60 p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(6,22,44,0.04)] overflow-hidden flex items-center justify-center">
          {!imageError ? (
            <Image
              src={heroIntro.imagePath}
              alt={heroIntro.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
              className="object-contain p-2"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            /* Graceful Placeholder until you place contact-illustration.png in public/images/ */
            <div className="flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-slate-200 rounded-xl w-full h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#0A5FD7] mb-3">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-mono text-[11px] font-bold text-[#06162C]">
                Image Location: public/images/contact-illustration.png
              </span>
              <span className="mt-1 text-[11px] text-[#64748B]">
                Place your PNG file here to display automatically
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};