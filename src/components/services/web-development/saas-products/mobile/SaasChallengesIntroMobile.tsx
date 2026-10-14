"use client";

import React from "react";
import { SAAS_PRODUCTS_CONTENT } from "@/config/services/saasProducts";

export const SaasChallengesIntroMobile: React.FC = () => {
  const { challengesIntro } = SAAS_PRODUCTS_CONTENT;

  return (
    <section className="relative w-full mb-10 select-none">
      <div className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]">
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight mb-3">
          {challengesIntro.heading}
        </h2>
        <p className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
          {challengesIntro.paragraph}
        </p>
      </div>
    </section>
  );
};