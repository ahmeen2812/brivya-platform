"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initOfficeHeroAnimation, initDirectiveBannerAnimation } from "../animations/heroAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  hero: OfficeTemplateConfig["hero"];
  directive: OfficeTemplateConfig["heroDirective"];
}

export const OfficeHeroMobile: React.FC<Props> = ({ hero, directive }) => {
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const serviceTitleRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const accentLineRef = useRef<HTMLDivElement | null>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  const directiveContainerRef = useRef<HTMLDivElement | null>(null);
  const directiveLeftRef = useRef<HTMLDivElement | null>(null);
  const directiveRightRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const heroCtx = initOfficeHeroAnimation(
      {
        serviceTitle: serviceTitleRef.current,
        heading: headingRef.current,
        accentLine: accentLineRef.current,
        descriptionText: descriptionTextRef.current,
        illustration: illustrationRef.current,
      },
      containerRef.current
    );

    const directiveCtx = initDirectiveBannerAnimation(
      directiveContainerRef.current,
      directiveLeftRef.current,
      directiveRightRef.current
    );

    return () => {
      heroCtx?.revert();
      directiveCtx?.revert();
    };
  }, [hero, directive]);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-2 pb-10 select-none overflow-x-clip"
    >
      <div className="flex flex-col items-start text-left">
        {/* Category Eyebrow */}
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
              {hero.description}
            </p>
          </div>
        </div>

        {/* Hero Visual (Drops from above) */}
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
                {hero.imagePath}
              </span>
            </div>
          )}
        </div>

        {/* Directive Banner (ui4.png Bottom) */}
        <div
          ref={directiveContainerRef}
          className="mt-8 w-full rounded-none border border-[#07366D]/35 bg-transparent p-5 shadow-xs will-change-transform"
        >
          <div ref={directiveLeftRef} className="border-b border-[#07366D]/25 pb-3 mb-3 will-change-transform">
            <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
              {directive.tag}
            </span>
            <h2 className="font-sans text-[19px] font-extrabold text-[#07366D] leading-tight">
              {directive.heading}
            </h2>
          </div>
          <div ref={directiveRightRef} className="will-change-transform">
            <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {directive.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};