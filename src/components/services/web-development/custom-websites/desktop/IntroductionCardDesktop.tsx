"use client";

import React from "react";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

export const IntroductionCardDesktop: React.FC = () => {
  const { introduction } = CUSTOM_WEBSITES_CONTENT;

  return (
    <section className="relative w-full mb-16 select-none">
      <div
        /* 
          Master Gradient Card Substrate:
          from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] with border-[#BACFE6]
        */
        className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 lg:p-10 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] overflow-hidden"
      >
        <div className="relative z-10 max-w-[940px] mx-auto flex flex-col">
          {/* Compact Heading */}
          <h2 className="font-sans text-[28px] font-extrabold text-[#06162C] leading-[1.18] tracking-[-0.03em] mb-4">
            {introduction.heading}
          </h2>

          {/* Single High-Readability Paragraph */}
          <p className="font-sans text-[17px] leading-[1.74] text-[#475569] font-normal tracking-[-0.01em]">
            {introduction.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};