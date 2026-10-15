"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ECOMMERCE_CONTENT } from "@/config/services/ecommerce";
import { initHeroAnimation } from "../animations";

export interface EcommerceHeroMobileProps {
  readonly onOpenCalendly: () => void;
}

export const EcommerceHeroMobile: React.FC<EcommerceHeroMobileProps> = ({ onOpenCalendly }) => {
  const { hero } = ECOMMERCE_CONTENT;
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionTextRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initHeroAnimation(
      {
        heading: headingRef.current,
        tagline: taglineRef.current,
        descriptionText: descriptionTextRef.current,
        buttons: buttonsRef.current,
        illustration: illustrationRef.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-2 pb-10 select-none overflow-x-clip"
    >
      <div className="flex flex-col items-start text-left">
        <div className="overflow-hidden pb-1">
          <h1
            ref={headingRef}
            className="font-sans text-[30px] sm:text-[36px] font-extrabold text-[#07366D] leading-[1.12] tracking-[-0.035em] will-change-transform"
          >
            {hero.heading}
          </h1>
        </div>

        <div className="overflow-hidden pb-1">
          <p
            ref={taglineRef}
            className="mt-3 font-sans text-[17px] sm:text-[19px] font-semibold text-[#0A5FD7] leading-[1.3] tracking-[-0.02em] will-change-transform"
          >
            {hero.tagline}
          </p>
        </div>

        <div className="mt-4 flex items-stretch">
          <div aria-hidden="true" className="w-[2.5px] bg-[#0A5FD7] shrink-0 rounded-full" />
          <div className="overflow-hidden pl-3.5 py-0.5">
            <div ref={descriptionTextRef} className="flex flex-col space-y-2 will-change-transform">
              {hero.paragraphs.map((p, idx) => (
                <p key={idx} className="font-sans text-[14px] leading-[1.68] text-[#475569] font-normal">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div ref={buttonsRef} className="mt-6 flex flex-col gap-3 w-full will-change-transform">
          <Link
            href="/start-project"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] py-3.5 font-sans text-sm font-semibold text-white shadow-md active:scale-[0.98]"
          >
            <span>{hero.primaryButtonText}</span>
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300 py-3.5 font-sans text-sm font-semibold text-[#06162C] shadow-2xs active:scale-[0.98]"
          >
            <span>{hero.secondaryButtonText}</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>

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
                Image 01: {hero.imagePath}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};