"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ROI_OPTIMIZATION_CONTENT } from "@/config/services/roiOptimization";
import { initHeroAnimation } from "./animations";
import { RoiHeroMobile } from "./mobile/RoiHeroMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const RoiHero: React.FC = () => {
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
    <>
      {/* DESKTOP VIEWPORT: Photo on LEFT, Text on RIGHT (No Buttons!) */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full pt-6 pb-20 lg:pb-24 select-none overflow-x-clip"
      >
        <div className="grid grid-cols-12 gap-10 items-center">
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
                    Hero Illustration: {hero.imagePath}
                  </span>
                </div>
              )}
            </div>
          </div>

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
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <RoiHeroMobile />
      </div>
    </>
  );
};