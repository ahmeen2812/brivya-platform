"use client";

import React, { useRef } from "react";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initFullWidthBannerAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["fullWidthBanner"];
}

export const OfficeFullWidthBannerDesktop: React.FC<Props> = ({ data }) => {
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
      className="hidden lg:block relative w-full my-12 select-none overflow-x-clip"
    >
      <div
        ref={contentRef}
        className="w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-r from-white via-[#F4F7FC] to-[#E6EFFB] p-10 lg:p-12 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
      >
        <div className="max-w-[880px]">
          <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
            {data.tag}
          </span>
          <h2 className="font-sans text-[28px] lg:text-[32px] font-extrabold text-[#07366D] tracking-tight leading-[1.18] mb-4">
            {data.heading}
          </h2>
          <p className="font-sans text-[16px] leading-[1.72] text-[#475569] font-normal">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};