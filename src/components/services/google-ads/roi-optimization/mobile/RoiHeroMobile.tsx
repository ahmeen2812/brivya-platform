"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ROI_OPTIMIZATION_CONTENT } from "@/config/services/roiOptimization";
import { initHeroAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const RoiHeroMobile: React.FC = () => {
  const { hero } = ROI_OPTIMIZATION_CONTENT;
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const serviceTitleRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const accentLineRef = useRef<HTMLDivElement | null>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initHeroAnimation(
      {
        serviceTitle: serviceTitleRef.current,
        heading: headingRef.current,
        accentLine: accentLineRef.current,
        descriptionText: descriptionTextRef.current,
        illustration: illustrationRef.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-2 pb-12 select-none overflow-x-clip"
    >
      <div className="flex flex-col items-start text-left">
        {/* Service Eyebrow */}
        <div ref={serviceTitleRef} className="mb-2 will-change-transform">
          <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider">
            {hero.serviceTitle}
          </span>
        </div>

        {/* Heading */}
        <div className="overflow-hidden pb-1">
          <h1
            ref={headingRef}
            className="font-sans text-[30px] sm:text-[36px] font-extrabold text-[#07366D] leading-[1.12] tracking-[-0.035em] will-change-transform"
          >
            {hero.heading}
          </h1>
        </div>

        {/* Description with Synchronized Vertical Accent Line */}
        <div className="mt-4 flex items-stretch">
          <div
            ref={accentLineRef}
            aria-hidden="true"
            className="w-[2.5px] bg-[#0A5FD7] shrink-0 rounded-full will-change-transform"
          />
          <div className="overflow-hidden pl-3.5 py-0.5">
            <p
              ref={descriptionTextRef}
              className="font-sans text-[14px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em] will-change-transform"
            >
              {hero.description}
            </p>
          </div>
        </div>

        {/* Illustration Container */}
        <div
          ref={illustrationRef}
          className="w-full aspect-[4/3] max-w-[340px] mt-6 mx-auto relative flex items-center justify-center will-change-transform"
        >
          {!imageError ? (
            <Image
              src={hero.imagePath}
              alt={hero.imageAlt}
              fill
              sizes="340px"
              className="object-contain"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/50">
              <span className="font-mono text-[10px] font-bold text-[#06162C]">
                Image: {hero.imagePath}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};