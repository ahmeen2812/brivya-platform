"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initVerticalSplitAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["verticalSplitSection"];
}

export const OfficeVerticalSplitMobile: React.FC<Props> = ({ data }) => {
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const verticalImageRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initVerticalSplitAnimation(
      containerRef.current,
      contentRef.current,
      verticalImageRef.current
    );
    return () => ctx?.revert();
  }, [data]);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-8 pb-12 select-none overflow-x-clip"
    >
      <div ref={contentRef} className="flex flex-col will-change-transform">
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {data.tag}
        </span>
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] tracking-tight leading-[1.2] mb-3">
          {data.heading}
        </h2>
        <p className="font-sans text-[14px] leading-[1.65] text-[#475569] mb-6">
          {data.description}
        </p>

        <div className="flex flex-col space-y-4 mb-6">
          {data.keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl border border-[#BACFE6] bg-white/80 shadow-2xs">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#0A5FD7]/10 text-[#0A5FD7] font-mono text-[10px] font-bold">
                0{idx + 1}
              </span>
              <div>
                <h3 className="font-sans text-[15px] font-bold text-[#06162C] mb-1">
                  {feature.title}
                </h3>
                <p className="font-sans text-[13px] leading-[1.6] text-[#475569]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical UI Mockup on Mobile — Clean transparent background */}
      <div
        ref={verticalImageRef}
        className="w-full max-w-[300px] aspect-[3/4] mx-auto relative bg-transparent p-0 flex items-center justify-center will-change-transform"
      >
        {!imageError ? (
          <Image
            src={data.imagePath}
            alt={data.imageAlt}
            fill
            sizes="300px"
            className="object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] font-bold text-[#06162C]">
              {data.imagePath}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};