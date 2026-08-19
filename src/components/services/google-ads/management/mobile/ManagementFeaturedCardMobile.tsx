"use client";

import React, { useRef } from "react";
import { CAMPAIGN_MANAGEMENT_CONTENT } from "@/config/services/campaignManagement";
import { initFeaturedCardAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const ManagementFeaturedCardMobile: React.FC = () => {
  const { mainFeaturedCard } = CAMPAIGN_MANAGEMENT_CONTENT;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = initFeaturedCardAnimation(cardRef.current, headerRef.current, bodyRef.current);
    return () => ctx?.revert();
  }, []);

  return (
    <section className="relative w-full mb-10 select-none overflow-x-clip">
      <div
        ref={cardRef}
        /* Mobile: Retains sharp borders (rounded-none), zero background, clear navy highlight lines mirroring the Executive pattern applied across all sub pages for Google campaigns recently structured above base layout layer formatting. */
        className="w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 shadow-xs will-change-transform"
      >
        <div className="border-b border-[#07366D]/25 pb-4 mb-4">
          <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1.5">
            {mainFeaturedCard.tag}
          </span>
          <h2 ref={headerRef} className="font-sans text-[20px] font-extrabold text-[#07366D] leading-[1.2] tracking-tight will-change-transform">
            {mainFeaturedCard.heading}
          </h2>
        </div>
        
        <div ref={bodyRef} className="flex flex-col space-y-2 will-change-transform">
          {mainFeaturedCard.paragraphs.map((p, idx) => (
            <p key={idx} className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};