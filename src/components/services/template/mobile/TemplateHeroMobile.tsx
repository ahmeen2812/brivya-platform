"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { UnifiedServiceConfig } from "../types/ServiceTemplateSchema";
import { initTemplateHeroAnimation } from "../animations/heroAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: UnifiedServiceConfig["hero"];
}

export const TemplateHeroMobile: React.FC<Props> = ({ data }) => {
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const serviceTitleRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const accentLineRef = useRef<HTMLDivElement | null>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initTemplateHeroAnimation(
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
  }, [data]);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-2 pb-10 select-none overflow-x-clip"
    >
      <div className="flex flex-col items-start text-left">
        {/* Eyebrow Badge */}
        <div ref={serviceTitleRef} className="mb-2 will-change-transform">
          <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider">
            {data.serviceTitle}
          </span>
        </div>

        {/* Main Heading */}
        <div className="overflow-hidden pb-1">
          <h1
            ref={headingRef}
            className="font-sans text-[30px] sm:text-[36px] font-extrabold text-[#07366D] leading-[1.12] tracking-[-0.035em] will-change-transform"
          >
            {data.heading}
          </h1>
        </div>

        {/* Description with Vertical Accent Line */}
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
              {data.description}
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
              src={data.imagePath}
              alt={data.imageAlt}
              fill
              sizes="340px"
              className="object-contain"
              onError={() => setImageError(true)}
              priority
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/50">
              <span className="font-mono text-[10px] font-bold text-[#06162C]">
                {data.imagePath}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};