"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { UnifiedServiceConfig } from "../types/ServiceTemplateSchema";
import { initTemplateHeroAnimation } from "../animations/heroAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: UnifiedServiceConfig["hero"];
}

export const TemplateHeroDesktop: React.FC<Props> = ({ data }) => {
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
      className="hidden lg:block relative w-full pt-4 pb-6 lg:pb-8 select-none overflow-x-clip"
    >
      <div className="grid grid-cols-12 gap-10 items-center">
        {/* Left Column: Hero Illustration Container (Glides in from Left) */}
        <div className="col-span-5 flex items-center justify-center">
          <div
            ref={illustrationRef}
            className="relative w-full aspect-[4/3] flex items-center justify-center will-change-transform"
          >
            {!imageError ? (
              <Image
                src={data.imagePath}
                alt={data.imageAlt}
                fill
                sizes="480px"
                className="object-contain"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#BACFE6] rounded-3xl w-full h-full bg-white/50 shadow-xs">
                <span className="font-mono text-[11px] font-bold text-[#06162C]">
                  Hero Image: {data.imagePath}
                </span>
                <span className="mt-1 text-[11px] text-[#64748B]">Missing PNG Fallback</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Title, Heading, and Description with Vertical Line (No Buttons) */}
        <div className="col-span-7 flex flex-col justify-center">
          {/* Eyebrow Badge */}
          <div ref={serviceTitleRef} className="w-fit mb-3 will-change-transform">
            <span className="font-mono text-[11.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block">
              {data.serviceTitle}
            </span>
          </div>

          {/* Main Heading */}
          <div className="overflow-hidden pb-1">
            <h1
              ref={headingRef}
              className="font-sans text-[42px] xl:text-[48px] font-extrabold text-[#07366D] leading-[1.08] tracking-[-0.035em] will-change-transform"
            >
              {data.heading}
            </h1>
          </div>

          {/* Description (Emerges from behind synchronized vertical accent line) */}
          <div className="mt-6 flex items-stretch">
            <div
              ref={accentLineRef}
              aria-hidden="true"
              className="w-[2.5px] bg-[#0A5FD7] shrink-0 rounded-full will-change-transform"
            />
            <div className="overflow-hidden pl-5 py-0.5">
              <p
                ref={descriptionTextRef}
                className="font-sans text-[15.5px] leading-[1.72] text-[#475569] font-normal tracking-[-0.01em] max-w-[580px] will-change-transform"
              >
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};