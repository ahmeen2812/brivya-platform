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

export const OfficeHeroDesktop: React.FC<Props> = ({ hero, directive }) => {
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
      className="hidden lg:block relative w-full pt-4 pb-10 select-none overflow-x-clip"
    >
      {/* 1. TOP SPLIT (ui4.png): Left Headline/Content + Right Hero Visual */}
      <div className="grid grid-cols-12 gap-10 items-center">
        <div className="col-span-7 flex flex-col justify-center">
          <div ref={serviceTitleRef} className="w-fit mb-3 will-change-transform">
            <span className="font-mono text-[11.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block">
              {hero.serviceTitle}
            </span>
          </div>

          <div className="overflow-hidden pb-1">
            <h1
              ref={headingRef}
              className="font-sans text-[42px] xl:text-[48px] font-extrabold text-[#07366D] leading-[1.08] tracking-[-0.035em] will-change-transform"
            >
              {hero.heading}
            </h1>
          </div>

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
                {hero.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual (Enters from Top) */}
        <div className="col-span-5 flex items-center justify-center">
          <div
            ref={illustrationRef}
            className="relative w-full aspect-[4/3] flex items-center justify-center will-change-transform"
          >
            {!imageError ? (
              <Image
                src={hero.imagePath}
                alt={hero.imageAlt}
                fill
                sizes="480px"
                className="object-contain"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#BACFE6] rounded-3xl w-full h-full bg-white/50 shadow-xs">
                <span className="font-mono text-[11px] font-bold text-[#06162C]">
                  {hero.imagePath}
                </span>
                <span className="mt-1 text-[11px] text-[#64748B]">Illustration slot</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 
        2. BOTTOM DIRECTIVE BANNER (ui4.png Bottom)
        Adjusted with `mt-16 lg:mt-20` to place it slightly down from the hero text.
        (You can edit `mt-16 lg:mt-20` directly if you want it closer or further down).
      */}
      <div
        ref={directiveContainerRef}
        className="mt-16 lg:mt-20 w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-6 lg:px-8 shadow-xs will-change-transform"
      >
        <div className="grid grid-cols-12 gap-8 items-center">
          <div ref={directiveLeftRef} className="col-span-5 pr-6 border-r border-[#07366D]/25 will-change-transform">
            <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
              {directive.tag}
            </span>
            <h2 className="font-sans text-[22px] font-extrabold text-[#07366D] tracking-tight leading-tight">
              {directive.heading}
            </h2>
          </div>

          <div ref={directiveRightRef} className="col-span-7 will-change-transform">
            <p className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal">
              {directive.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};