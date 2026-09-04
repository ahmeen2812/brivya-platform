"use client";

import React, { useRef } from "react";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initResourcesAnimation } from "./animations";
import { SearchOfficialResourcesMobile } from "./mobile/SearchOfficialResourcesMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchOfficialResources: React.FC = () => {
  const { officialResources } = GOOGLE_SEARCH_ADS_CONTENT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initResourcesAnimation(
      containerRef.current,
      headerRef.current,
      cardRefs.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT: 4 Boxes in a Single Row */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip"
      >
        <div ref={headerRef} className="max-w-[820px] mb-8 will-change-transform">
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

        {/* 4 Boxes Row */}
        <div className="grid grid-cols-4 gap-6">
          {officialResources.items.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="rounded-2xl border border-[#BACFE6] bg-white/85 p-6 flex flex-col justify-between hover:border-[#0A5FD7] hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(10,95,215,0.12)] transition-all duration-300 will-change-transform"
            >
              <div>
                {/* Authentic Vector Icon Matching User Specification */}
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

                <h3 className="font-sans text-[17px] font-bold text-[#06162C] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
                  {item.description}
                </p>
              </div>

              {/* Official Google Documentation Link */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#0A5FD7] hover:text-[#07366D] transition-colors mt-4 pt-3 border-t border-[#BACFE6]/60"
              >
                <span>Official Documentation</span>
                <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <SearchOfficialResourcesMobile />
      </div>
    </>
  );
};