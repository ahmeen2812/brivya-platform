"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initVerticalSplitAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["verticalSplitSection"];
}

export const OfficeVerticalSplitDesktop: React.FC<Props> = ({ data }) => {
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rightContentRef = useRef<HTMLDivElement | null>(null);
  const verticalImageRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initVerticalSplitAnimation(
      containerRef.current,
      rightContentRef.current,
      verticalImageRef.current
    );
    return () => ctx?.revert();
  }, [data]);

  return (
    <section
      ref={containerRef}
      className="hidden lg:block relative w-full pt-12 pb-20 select-none overflow-x-clip"
    >
      <div className="grid grid-cols-12 gap-12 items-center">
        {/* 
          1. LEFT COLUMN: Vertical UI Mockup 
          - Flipped to Left side to balance the Hero visual on the Right
          - Removed container card background, borders, and gradients
          - Transparent PNG rests cleanly on the page canvas
        */}
        <div className="col-span-5 flex items-center justify-center">
          <div
            ref={verticalImageRef}
            className="relative w-full aspect-[3/4] max-w-[420px] bg-transparent p-0 flex items-center justify-center will-change-transform"
          >
            {!imageError ? (
              <Image
                src={data.imagePath}
                alt={data.imageAlt}
                fill
                sizes="420px"
                className="object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                <span className="font-mono text-[11px] font-bold text-[#06162C]">
                  {data.imagePath}
                </span>
                <span className="mt-1 text-[11px] text-[#64748B]">Vertical UI Mockup Slot</span>
              </div>
            )}
          </div>
        </div>

        {/* 2. RIGHT COLUMN: Heading & Capabilities List */}
        <div ref={rightContentRef} className="col-span-7 flex flex-col justify-center will-change-transform">
          <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
            {data.tag}
          </span>
          <h2 className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14] mb-4">
            {data.heading}
          </h2>
          <p className="font-sans text-[15.5px] leading-[1.7] text-[#475569] font-normal mb-8 max-w-[580px]">
            {data.description}
          </p>

          <div className="flex flex-col space-y-6">
            {data.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-[#BACFE6] bg-white/80 shadow-2xs">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0A5FD7]/10 text-[#0A5FD7] font-mono text-[11px] font-bold">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-sans text-[17px] font-bold text-[#06162C] mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-[1.65] text-[#475569]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};