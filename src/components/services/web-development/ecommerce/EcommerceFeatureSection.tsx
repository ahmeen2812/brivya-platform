"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ECOMMERCE_CONTENT } from "@/config/services/ecommerce";
import { initFeatureSectionAnimation } from "./animations";
import { EcommerceFeatureMobile } from "./mobile/EcommerceFeatureMobile";

export const EcommerceFeatureSection: React.FC = () => {
  const { features } = ECOMMERCE_CONTENT;
  const [featureImageError, setFeatureImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initFeatureSectionAnimation(
      {
        header: headerRef.current,
        illustration: illustrationRef.current,
        items: itemRefs.current,
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
        className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip"
      >
        <div className="border-b border-[#BACFE6]/60 pb-5 mb-8">
          <h2
            ref={headerRef}
            className="font-sans text-[30px] font-extrabold text-[#06162C] tracking-tight will-change-transform"
          >
            {features.heading}
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Column: Image 03 */}
          <div className="col-span-5 flex items-center justify-center">
            <div
              ref={illustrationRef}
              className="relative w-full aspect-[4/3] max-w-[420px] flex items-center justify-center will-change-transform"
            >
              {!featureImageError ? (
                <Image
                  src={features.illustrationPath}
                  alt={features.illustrationAlt}
                  fill
                  sizes="420px"
                  className="object-contain"
                  onError={() => setFeatureImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#BACFE6] rounded-3xl w-full h-full bg-white/40">
                  <span className="font-mono text-[10.5px] font-bold text-[#06162C]">
                    Image 03: {features.illustrationPath}
                  </span>
                  <span className="mt-1 text-[11px] text-[#64748B]">Feature illustration slot</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 3 Pillars Cards */}
          <div className="col-span-7 flex flex-col space-y-4">
            {features.items.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="rounded-2xl border border-[#BACFE6] bg-white/70 backdrop-blur-xs p-6 shadow-xs hover:border-[#0A5FD7]/40 hover:-translate-y-0.5 transition-all duration-300 will-change-transform"
              >
                <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <EcommerceFeatureMobile />
      </div>
    </>
  );
};