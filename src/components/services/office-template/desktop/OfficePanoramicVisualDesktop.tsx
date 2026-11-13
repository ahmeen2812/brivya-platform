"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initPanoramicShowcaseAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["panoramicShowcase"];
}

export const OfficePanoramicVisualDesktop: React.FC<Props> = ({ data }) => {
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initPanoramicShowcaseAnimation(containerRef.current, imageWrapperRef.current);
    return () => ctx?.revert();
  }, [data]);

  return (
    <section
      ref={containerRef}
      className="hidden lg:block relative w-full my-16 select-none overflow-x-clip"
    >
      <div className="max-w-[820px] mb-8">
        <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
          {data.tag}
        </span>
        <h2 className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14]">
          {data.heading}
        </h2>
        <p className="mt-2.5 font-sans text-[15.5px] text-[#475569] font-normal">
          {data.description}
        </p>
      </div>

      {/* Large Wide Panoramic Visual Container (16:6 aspect ratio) */}
      <div
        ref={imageWrapperRef}
        className="relative w-full aspect-[16/6] rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] shadow-[0_18px_50px_-10px_rgba(7,54,109,0.1)] overflow-hidden flex items-center justify-center will-change-transform"
      >
        {!imageError ? (
          <Image
            src={data.imagePath}
            alt={data.imageAlt}
            fill
            sizes="1280px"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
            <span className="font-mono text-[11px] font-bold text-[#06162C]">
              {data.imagePath}
            </span>
            <span className="mt-1 text-[11px] text-[#64748B]">Panoramic Landscape Showcase Slot</span>
          </div>
        )}
      </div>
    </section>
  );
};