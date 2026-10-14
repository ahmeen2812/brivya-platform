"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";
import { initHeroAnimation } from "../animations";

export const CustomWebsitesHeroMobile: React.FC = () => {
  const { hero } = CUSTOM_WEBSITES_CONTENT;
  const [imageError, setImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
            <p
              ref={descriptionTextRef}
              className="font-sans text-[14px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em] will-change-transform"
            >
              {hero.description}
            </p>
          </div>
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
                {hero.imagePath}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};