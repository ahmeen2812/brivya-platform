"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initPanoramicShowcaseAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["panoramicShowcase"];
}

export const OfficePanoramicVisualMobile: React.FC<Props> = ({ data }) => {
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
      className="relative w-full my-10 select-none overflow-x-clip"
    >
      <div className="mb-4">
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {data.tag}
        </span>
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] tracking-tight leading-[1.2]">
          {data.heading}
        </h2>
        <p className="mt-2 font-sans text-[13.5px] text-[#475569]">
          {data.description}
        </p>
      </div>

      <div
        ref={imageWrapperRef}
        className="relative w-full aspect-[16/10] rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] shadow-sm overflow-hidden flex items-center justify-center will-change-transform"
      >
        {!imageError ? (
          <Image
            src={data.imagePath}
            alt={data.imageAlt}
            fill
            sizes="360px"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] font-bold text-[#06162C]">
              {data.imagePath}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};