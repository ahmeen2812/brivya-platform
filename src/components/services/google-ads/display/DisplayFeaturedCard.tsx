"use client";

import React, { useRef } from "react";
import { GOOGLE_DISPLAY_ADS_CONTENT } from "@/config/services/googleDisplayAds";
import { initFeaturedCardAnimation } from "./animations";
import { DisplayFeaturedCardMobile } from "./mobile/DisplayFeaturedCardMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const DisplayFeaturedCard: React.FC = () => {
  const { mainFeaturedCard } = GOOGLE_DISPLAY_ADS_CONTENT;

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
      {/* DESKTOP VIEWPORT: Executive Terminal Console (#06162C) */}
      <section className="hidden lg:block relative w-full mb-16 select-none overflow-x-clip">
        <div
          ref={cardRef}
          className="relative w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-[#06162C] p-6 lg:py-6 lg:px-9 shadow-[0_16px_40px_-8px_rgba(6,22,44,0.35)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.15)] will-change-transform"
        >
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-5 pr-4 border-r border-white/10">
              <span className="font-mono text-[10px] font-bold text-[#1675F8] uppercase tracking-wider block mb-1.5">
                Strategic Directive
              </span>
              <h2
                ref={headerRef}
                className="font-sans text-[22px] font-extrabold text-white tracking-tight leading-tight will-change-transform"
              >
                {mainFeaturedCard.heading}
              </h2>
            </div>

            <div ref={bodyRef} className="col-span-7 flex flex-col space-y-2 will-change-transform">
              {mainFeaturedCard.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-sans text-[14px] lg:text-[14.5px] leading-[1.62] text-[#BACFE6] font-normal"
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
        <DisplayFeaturedCardMobile />
      </div>
    </>
  );
};