"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { DATABASE_SYSTEMS_CONTENT } from "@/config/services/databaseSystems";
import { initHeroAnimation } from "./animations";
import { DatabaseHeroMobile } from "./mobile/DatabaseHeroMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const DatabaseHero: React.FC = () => {
  const { hero, servicesIntro } = DATABASE_SYSTEMS_CONTENT;
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);
  const consoleRef = useRef<HTMLDivElement | null>(null);

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
      {/* DESKTOP VIEWPORT: Hero + Executive Terminal Console */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full pt-4 pb-12 select-none overflow-x-clip"
      >
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-7 flex flex-col justify-center">
            <div className="overflow-hidden pb-1">
              <h1
                ref={headingRef}
                className="font-sans text-[44px] xl:text-[50px] font-extrabold text-[#07366D] leading-[1.08] tracking-[-0.035em] will-change-transform"
              >
                {hero.heading}
              </h1>
            </div>

            <div className="overflow-hidden pb-1">
              <p
                ref={taglineRef}
                className="mt-4 font-sans text-[22px] xl:text-[24px] font-semibold text-[#0A5FD7] leading-[1.3] tracking-[-0.02em] will-change-transform"
              >
                {hero.tagline}
              </p>
            </div>

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
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Executive Terminal Console */}
        <div
          ref={consoleRef}
          className="mt-12 w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-[#06162C] p-6 lg:py-6 lg:px-9 shadow-[0_16px_40px_-8px_rgba(6,22,44,0.35)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.15)] will-change-transform"
        >
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-5 pr-4 border-r border-white/10">
              <span className="font-mono text-[10px] font-bold text-[#1675F8] uppercase tracking-wider block mb-1.5">
                Architecture Directive
              </span>
              <h2 className="font-sans text-[21px] font-extrabold text-white tracking-tight leading-tight">
                {servicesIntro.heading}
              </h2>
            </div>
            <div className="col-span-7">
              <p className="font-sans text-[14.5px] leading-[1.65] text-[#BACFE6] font-normal">
                {servicesIntro.paragraph}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <DatabaseHeroMobile />
      </div>
    </>
  );
};