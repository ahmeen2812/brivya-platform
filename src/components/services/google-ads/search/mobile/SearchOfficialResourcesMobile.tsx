"use client";

import React, { useRef } from "react";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initResourcesAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchOfficialResourcesMobile: React.FC = () => {
  const { officialResources } = GOOGLE_SEARCH_ADS_CONTENT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initResourcesAnimation(containerRef.current, null, cardRefs.current);
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col space-y-4 mb-10 select-none overflow-x-clip"
    >
      <div>
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {officialResources.tag}
        </span>
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight">
          {officialResources.heading}
        </h2>
      </div>

      {officialResources.items.map((item, idx) => (
        <div
          key={item.id}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className="rounded-2xl border border-[#BACFE6] bg-white/85 p-5 shadow-xs flex flex-col justify-between will-change-transform"
        >
          <div>
            <h3 className="font-sans text-[16px] font-bold text-[#06162C] tracking-tight mb-1.5">
              {item.title}
            </h3>
            <p className="font-sans text-[13px] leading-[1.65] text-[#475569]">
              {item.description}
            </p>
          </div>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-[11.5px] font-semibold text-[#0A5FD7] mt-3.5 pt-2.5 border-t border-[#BACFE6]/60"
          >
            <span>Official Documentation</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      ))}
    </section>
  );
};