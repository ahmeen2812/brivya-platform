"use client";

import React, { useRef } from "react";
import { ROI_OPTIMIZATION_CONTENT } from "@/config/services/roiOptimization";
import { initFeaturedCardAnimation } from "./animations";
import { RoiFeaturedCardMobile } from "./mobile/RoiFeaturedCardMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const RoiFeaturedCard: React.FC = () => {
  const { mainFeaturedCard } = ROI_OPTIMIZATION_CONTENT;

  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;
    const ctx = initFeaturedCardAnimation(cardRef.current, headerRef.current, bodyRef.current);
    return () => ctx?.revert();
  }, []);

  return (
    <>
      <section className="hidden lg:block relative w-full mb-16 lg:mb-20 select-none overflow-x-clip">
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
                <p key={idx} className="font-sans text-[15.5px] leading-[1.7] text-[#475569] font-normal">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="block lg:hidden">
        <RoiFeaturedCardMobile />
      </div>
    </>
  );
};