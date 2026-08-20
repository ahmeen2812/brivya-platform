"use client";

import React, { useRef } from "react";
import { CAMPAIGN_MANAGEMENT_CONTENT } from "@/config/services/campaignManagement";
import { initFeaturedCardAnimation } from "./animations";
import { ManagementFeaturedCardMobile } from "./mobile/ManagementFeaturedCardMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const ManagementFeaturedCard: React.FC = () => {
  const { mainFeaturedCard } = CAMPAIGN_MANAGEMENT_CONTENT;

  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = initFeaturedCardAnimation(
      cardRef.current,
      headerRef.current,
      bodyRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT: SPACING FIX 
          Added mt-24 lg:mt-32 mb-24 lg:mb-32 for extreme professional whitespace.
      */}
      <section className="hidden lg:block relative w-full mt-24 lg:mt-32 mb-24 lg:mb-32 select-none overflow-x-clip">
        <div
          ref={cardRef}
          className="relative w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-8 lg:px-12 shadow-xs will-change-transform"
        >
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-5 pr-8 border-r border-[#07366D]/25">
              <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                {mainFeaturedCard.tag}
              </span>
              <h2
                ref={headerRef}
                className="font-sans text-[26px] font-extrabold text-[#07366D] tracking-tight leading-[1.15] will-change-transform"
              >
                {mainFeaturedCard.heading}
              </h2>
            </div>

            <div ref={bodyRef} className="col-span-7 flex flex-col space-y-4 will-change-transform">
              {mainFeaturedCard.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-sans text-[15.5px] leading-[1.7] text-[#475569] font-normal"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <ManagementFeaturedCardMobile />
      </div>
    </>
  );
};