"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initResourcesAnimation } from "./animations";
import { SearchOfficialResourcesMobile } from "./mobile/SearchOfficialResourcesMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchOfficialResources: React.FC = () => {
  const { officialResources } = GOOGLE_SEARCH_ADS_CONTENT;
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
      {/* DESKTOP VIEWPORT: 4 Light-Theme Bordered Boxes with Alternating Down/Up Floating Badges */}
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

        {/* 4 Cards in a Row with Unclipped Overflows for Floating Badges */}
        <div className="grid grid-cols-4 gap-6 pt-6 pb-6">
          {officialResources.items.map((item, idx) => {
            const isTop = item.badgePosition === "top";

            return (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="relative rounded-2xl border border-[#BACFE6] bg-white/85 p-6 flex flex-col justify-between hover:border-[#0A5FD7] hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(10,95,215,0.12)] transition-all duration-300 will-change-transform"
              >
                {/* 
                  Alternating Floating Feature Badge Image:
                  - Card 1 & 3: Positioned at Bottom-Right (Down)
                  - Card 2 & 4: Positioned at Top-Right (Up)
                */}
                <div
                  ref={(el) => {
                    badgeRefs.current[idx] = el;
                  }}
                  className={`absolute right-4 z-20 w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-white border border-[#CBDDF6] p-2 shadow-[0_12px_26px_-4px_rgba(7,54,109,0.18)] flex items-center justify-center will-change-transform ${
                    isTop ? "-top-7" : "-bottom-7"
                  }`}
                >
                  {!badgeErrors[item.id] ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.badgeImagePath}
                        alt={item.badgeImageAlt}
                        fill
                        sizes="64px"
                        className="object-contain"
                        onError={() => handleBadgeError(item.id)}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center bg-slate-50 rounded-xl p-1">
                      <span className="font-mono text-[8px] font-bold text-[#0A5FD7]">Badge {idx + 1}</span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-[#CBDDF6] text-[#0A5FD7] mb-4 shadow-2xs">
                    {item.iconType === "keyword-planner" && (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM9 10h.01M15 10h.01M9 14h6" />
                      </svg>
                    )}
                    {item.iconType === "responsive-ads" && (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10M4 18h7" />
                      </svg>
                    )}
                    {item.iconType === "search-terms" && (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {item.iconType === "conversion-measurement" && (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>

                  <h3 className="font-sans text-[17px] font-bold text-[#06162C] tracking-tight mb-2 pr-6">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#0A5FD7] hover:text-[#07366D] transition-colors mt-6 pt-3 border-t border-[#BACFE6]/60"
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
        <SearchOfficialResourcesMobile />
      </div>
    </>
  );
};