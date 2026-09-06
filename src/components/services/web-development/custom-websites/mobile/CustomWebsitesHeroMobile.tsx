"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

export const CustomWebsitesHeroMobile: React.FC = () => {
  const { hero } = CUSTOM_WEBSITES_CONTENT;
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full pt-2 pb-10 select-none">
      <div className="flex flex-col items-start text-left">
        {/* Navy Heading */}
        <h1 className="font-sans text-[30px] sm:text-[36px] font-extrabold text-[#07366D] leading-[1.12] tracking-[-0.035em]">
          {hero.heading}
        </h1>

        {/* Cobalt Subtitle */}
        <p className="mt-3 font-sans text-[17px] sm:text-[19px] font-semibold text-[#0A5FD7] leading-[1.3] tracking-[-0.02em]">
          {hero.tagline}
        </p>

        {/* Accent Description */}
        <div className="mt-4 border-l-2 border-[#0A5FD7]/50 pl-3.5 py-0.5">
          <p className="font-sans text-[14px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
            {hero.description}
          </p>
        </div>

        {/* Illustration Container */}
        <div className="w-full aspect-[4/3] max-w-[340px] mt-6 mx-auto relative flex items-center justify-center">
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