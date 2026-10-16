"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { API_INTEGRATION_CONTENT } from "@/config/services/apiIntegration";
import { initHeroAnimation } from "./animations";
import { ApiHeroMobile } from "./mobile/ApiHeroMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const ApiHero: React.FC = () => {
  const { hero } = API_INTEGRATION_CONTENT;
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initHeroAnimation(
      {
        heading: headingRef.current,
        tagline: taglineRef.current,
        descriptionText: descriptionTextRef.current,
        illustration: illustrationRef.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full pt-6 pb-16 lg:pb-20 select-none overflow-x-clip"
      >
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-7 flex flex-col justify-center">
            {/* Heading */}
            <div className="overflow-hidden pb-1">
              <h1
                ref={headingRef}
                className="font-sans text-[44px] xl:text-[50px] font-extrabold text-[#07366D] leading-[1.08] tracking-[-0.035em] will-change-transform"
              >
                {hero.heading}
              </h1>
            </div>

            {/* Tagline */}
            <div className="overflow-hidden pb-1">
              <p
                ref={taglineRef}
                className="mt-4 font-sans text-[22px] xl:text-[24px] font-semibold text-[#0A5FD7] leading-[1.3] tracking-[-0.02em] will-change-transform"
              >
                {hero.tagline}
              </p>
            </div>

            {/* Description (Emerges from behind vertical accent line) */}
            <div className="mt-6 flex items-stretch">
              <div aria-hidden="true" className="w-[2.5px] bg-[#0A5FD7] shrink-0 rounded-full" />
              <div className="overflow-hidden pl-5 py-0.5">
                <p
                  ref={descriptionTextRef}
                  className="font-sans text-[15.5px] leading-[1.72] text-[#475569] font-normal tracking-[-0.01em] max-w-[560px] will-change-transform"
                >
                  {hero.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Illustration Container (Image 01) */}
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
                    Image 01: {hero.imagePath}
                  </span>
                  <span className="mt-1 text-[11px] text-[#64748B]">
                    Illustration renders automatically when placed in directory
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <ApiHeroMobile />
      </div>
    </>
  );
};