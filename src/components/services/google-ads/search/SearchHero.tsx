"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { SITE_CONTACT } from "@/config/siteContact";
import { CalendlyModal } from "@/components/sections/inquiry/CalendlyModal";
import { initHeroAnimation } from "./animations";
import { SearchHeroMobile } from "./mobile/SearchHeroMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchHero: React.FC = () => {
  const { hero } = GOOGLE_SEARCH_ADS_CONTENT;
  const { meeting } = SITE_CONTACT;
  const [imageError, setImageError] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

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

            {/* Minimal Telemetry Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {hero.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#BACFE6] shadow-[0_1px_4px_rgba(7,54,109,0.03)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0A5FD7]" />
                  <span className="font-mono text-[10.5px] font-semibold text-[#06162C] uppercase tracking-wider">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Hero Action Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/start-project"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-8 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] transition-all"
              >
                <span>{hero.primaryButtonText}</span>
                <span aria-hidden="true">→</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsCalendlyOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300/90 px-7 py-3.5 font-sans text-sm font-semibold text-[#06162C] shadow-2xs hover:bg-slate-50 hover:border-[#0A5FD7]/50 hover:text-[#0A5FD7] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{hero.secondaryButtonText}</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Illustration (Pronounced 180px Edge Entrance) */}
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
        <SearchHeroMobile onOpenCalendly={() => setIsCalendlyOpen(true)} />
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={meeting.calendlyUrl}
        primaryColor={meeting.theme.primaryColor}
        textColor={meeting.theme.textColor}
        backgroundColor={meeting.theme.backgroundColor}
      />
    </>
  );
};