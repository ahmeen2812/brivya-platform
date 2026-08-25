"use client";

import React, { useRef } from "react";
import { LANDING_PAGES_CONTENT } from "@/config/services/landingPages";
import { initFeaturedCardAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const LandingPagesFeaturedCardMobile: React.FC = () => {
  const { mainFeaturedCard } = LANDING_PAGES_CONTENT;
  const cardRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = initFeaturedCardAnimation(cardRef.current, null, null);
    return () => ctx?.revert();
  }, []);

  return (
    <section className="relative w-full mb-10 select-none overflow-x-clip">
      <div
        ref={cardRef}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight mb-3">
          {mainFeaturedCard.heading}
        </h2>
        <div className="flex flex-col space-y-2">
          {mainFeaturedCard.paragraphs.map((p, idx) => (
            <p key={idx} className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};