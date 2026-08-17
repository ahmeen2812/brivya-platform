"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ROI_OPTIMIZATION_CONTENT } from "@/config/services/roiOptimization";
import { initResourcesAnimation } from "./animations";
import { RoiOfficialResourcesMobile } from "./mobile/RoiOfficialResourcesMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const RoiOfficialResources: React.FC = () => {
  const { officialResources } = ROI_OPTIMIZATION_CONTENT;
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
      {/* DESKTOP VIEWPORT: 4 Light-Theme Boxes w/ Enlarged 98px Badges Down-Up pattern */}
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
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="relative rounded-2xl border border-[#BACFE6] bg-white/85 p-7 flex flex-col justify-between hover:border-[#0A5FD7] hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(10,95,215,0.12)] transition-all duration-300 will-change-transform"
              >
                <div
                  ref={(el) => { badgeRefs.current[idx] = el; }}
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
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-[#CBDDF6] text-[#0A5FD7] mb-4 shadow-2xs">
                    {/* SVG matching specific service components config typing */}
                    {item.iconType === "objectives" && (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    )}
                    {item.iconType === "conversion-measurement" && (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )}
                    {item.iconType === "bidding" && (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )}
                    {item.iconType === "search-terms" && (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    )}
                  </div>

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
        <RoiOfficialResourcesMobile />
      </div>
    </>
  );
};