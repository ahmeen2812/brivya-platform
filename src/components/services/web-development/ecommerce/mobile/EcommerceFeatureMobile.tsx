"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ECOMMERCE_CONTENT } from "@/config/services/ecommerce";
import { initFeatureSectionAnimation } from "../animations";

export const EcommerceFeatureMobile: React.FC = () => {
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
    <section
      ref={containerRef}
      className="relative w-full mb-12 select-none overflow-x-clip"
    >
      <div className="border-b border-[#BACFE6]/60 pb-3 mb-4">
        <h2
          ref={headerRef}
          className="font-sans text-[22px] font-extrabold text-[#06162C] tracking-tight will-change-transform"
        >
          {features.heading}
        </h2>
      </div>

      <div
        ref={illustrationRef}
        className="w-full max-w-[280px] aspect-[4/3] mx-auto relative flex items-center justify-center mb-6 will-change-transform"
      >
        {!featureImageError ? (
          <Image
            src={features.illustrationPath}
            alt={features.illustrationAlt}
            fill
            sizes="280px"
            className="object-contain"
            onError={() => setFeatureImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-3 border border-dashed border-[#BACFE6] rounded-xl w-full h-full bg-white/40">
            <span className="font-mono text-[10px] text-[#64748B]">Image 03 slot</span>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-3">
        {features.items.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="rounded-2xl border border-[#BACFE6] bg-white/70 backdrop-blur-xs p-5 shadow-xs will-change-transform"
          >
            <h3 className="font-sans text-[17px] font-bold text-[#06162C] tracking-tight mb-1.5">
              {item.title}
            </h3>
            <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};