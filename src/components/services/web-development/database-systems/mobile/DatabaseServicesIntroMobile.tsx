"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { DATABASE_SYSTEMS_CONTENT } from "@/config/services/databaseSystems";
import { initFeaturedCardAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const DatabaseServicesIntroMobile: React.FC = () => {
  const { servicesIntro } = DATABASE_SYSTEMS_CONTENT;
  const [imageError, setImageError] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = initFeaturedCardAnimation(cardRef.current, null, null);
    return () => ctx?.revert();
  }, []);

  return (
    <section className="relative w-full mb-10 select-none overflow-x-clip">
      <div className="mb-5">
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          Section 02 // Core Architecture
        </span>
        <h2 className="font-sans text-[24px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight">
          {servicesIntro.heading}
        </h2>
        <p className="mt-2 font-sans text-[14px] leading-[1.65] text-[#475569]">
          {servicesIntro.paragraph}
        </p>
      </div>

      <div
        ref={cardRef}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {servicesIntro.featuredCard.tag}
        </span>
        <h3 className="font-sans text-[19px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight mb-3">
          {servicesIntro.featuredCard.heading}
        </h3>
        <div className="flex flex-col space-y-2 mb-4">
          {servicesIntro.featuredCard.paragraphs.map((p, idx) => (
            <p key={idx} className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {p}
            </p>
          ))}
        </div>

        {/* Image 02 for Mobile */}
        <div className="w-full max-w-[260px] aspect-[4/3] mx-auto relative flex items-center justify-center">
          {!imageError ? (
            <Image
              src={servicesIntro.featuredCard.illustrationPath}
              alt={servicesIntro.featuredCard.illustrationAlt}
              fill
              sizes="260px"
              className="object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
              <span className="font-mono text-[10px] text-[#64748B]">Image 02 slot</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};