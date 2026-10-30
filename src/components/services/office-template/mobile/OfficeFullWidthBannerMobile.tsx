"use client";

import React, { useRef } from "react";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initFullWidthBannerAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["fullWidthBanner"];
}

export const OfficeFullWidthBannerMobile: React.FC<Props> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initFullWidthBannerAnimation(containerRef.current, contentRef.current);
    return () => ctx?.revert();
  }, [data]);

  return (
    <section
      ref={containerRef}
      className="relative w-full my-8 select-none overflow-x-clip"
    >
      <div
        ref={contentRef}
        className="w-full rounded-2xl border border-[#BACFE6] bg-gradient-to-r from-white via-[#F4F7FC] to-[#E6EFFB] p-6 shadow-sm will-change-transform"
      >
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {data.tag}
        </span>
        <h2 className="font-sans text-[20px] font-extrabold text-[#07366D] tracking-tight leading-tight mb-2.5">
          {data.heading}
        </h2>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
          {data.description}
        </p>
      </div>
    </section>
  );
};