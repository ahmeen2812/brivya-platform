"use client";

import React from "react";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

export const IntroductionCard: React.FC = () => {
  const { introduction } = CUSTOM_WEBSITES_CONTENT;

  return (
    <section className="relative w-full mb-14 sm:mb-18 lg:mb-22 select-none">
      <div
        /* 
          Master Brivya Card Chassis:
          Matches reviews and inquiry cards:
          from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] with border-[#BACFE6]
        */
        className="relative w-full rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-7 sm:p-10 lg:p-14 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] overflow-hidden"
      >
        <div className="relative z-10 max-w-[960px] mx-auto flex flex-col">
          {/* Card Title */}
          <h2 className="font-sans text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-[#06162C] leading-[1.16] tracking-[-0.03em] border-b border-[#BACFE6]/60 pb-5 sm:pb-6 mb-6 sm:mb-8">
            {introduction.heading}
          </h2>

          {/* Paragraph Sequence with Clean Typographic Breathing Room */}
          <div className="flex flex-col space-y-4 sm:space-y-5">
            {introduction.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-sans text-[14.5px] sm:text-[15.5px] leading-[1.74] text-[#475569] font-normal tracking-[-0.01em]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};