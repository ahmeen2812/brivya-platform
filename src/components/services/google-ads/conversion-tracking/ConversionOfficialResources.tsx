"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { CONVERSION_TRACKING_CONTENT } from "@/config/services/conversionTracking";
import { initResourcesAnimation } from "./animations";
import { ConversionOfficialResourcesMobile } from "./mobile/ConversionOfficialResourcesMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const ConversionOfficialResources: React.FC = () => {
  const { officialResources } = CONVERSION_TRACKING_CONTENT;
  const [badgeErrors, setBadgeErrors] = useState<{ [key: string]: boolean }>({});

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initResourcesAnimation(
      containerRef.current,
      headerRef.current,
      cardRefs.current,
      badgeRefs.current
    );

    return () => ctx?.revert();
  }, []);

  const handleBadgeError = (id: string) => {
    setBadgeErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {/* DESKTOP VIEWPORT: 4 Light-Theme Bordered Boxes with Enlarged 98px Badges */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full mb-28 select-none overflow-visible"
      >
        <div ref={headerRef} className="max-w-[820px] mb-12 will-change-transform">
          <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
            {officialResources.tag}
          </span>
          <h2 className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14]">
            {officialResources.heading}
          </h2>
          <p className="mt-2.5 font-sans text-[15.5px] text-[#475569] font-normal">
            {officialResources.description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-4 gap-6 pt-6 pb-6">
          {officialResources.items.map((item, idx) => {
            const isTop = item.badgePosition === "top";

            return (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="relative rounded-2xl border border-[#BACFE6] bg-white/85 p-7 flex flex-col justify-between hover:border-[#0A5FD7] hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(10,95,215,0.12)] transition-all duration-300 will-change-transform"
              >
                {/* Enlarged Floating Badge: w-24 h-24 lg:w-[98px] lg:h-[98px] */}
                <div
                  ref={(el) => {
                    badgeRefs.current[idx] = el;
                  }}
                  className={`absolute right-3 z-20 w-24 h-24 lg:w-[98px] lg:h-[98px] flex items-center justify-center will-change-transform drop-shadow-[0_16px_28px_rgba(7,54,109,0.25)] ${
                    isTop ? "-top-12" : "-bottom-12"
                  }`}
                >
                  {!badgeErrors[item.id] ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.badgeImagePath}
                        alt={item.badgeImageAlt}
                        fill
                        sizes="98px"
                        className="object-contain"
                        onError={() => handleBadgeError(item.id)}
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/90 border border-[#BACFE6] shadow-sm">
                      <span className="font-mono text-[9px] font-bold text-[#0A5FD7]">Badge {idx + 1}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2.5 pr-8">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-[1.68] text-[#475569]">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#0A5FD7] hover:text-[#07366D] transition-colors mt-6 pt-3.5 border-t border-[#BACFE6]/60"
                >
                  <span>Explore Documentation</span>
                  <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <ConversionOfficialResourcesMobile />
      </div>
    </>
  );
};