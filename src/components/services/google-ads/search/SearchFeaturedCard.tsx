"use client";

import React, { useRef } from "react";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initFeaturedCardAnimation } from "./animations";
import { SearchFeaturedCardMobile } from "./mobile/SearchFeaturedCardMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SearchFeaturedCard: React.FC = () => {
  const { mainFeaturedCard } = GOOGLE_SEARCH_ADS_CONTENT;

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
      {/* DESKTOP VIEWPORT: Compact vertical padding ensures the entire card fits inside the viewport */}
      <section className="hidden lg:block relative w-full  mb-16 select-none overflow-x-clip">
        <div
          ref={cardRef}
          className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] py-6 px-8 lg:py-6.5 lg:px-10 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
        >
          <div className="max-w-[940px] mx-auto flex flex-col">
            <h2
              ref={headerRef}
              className="font-sans text-[24px] lg:text-[26px] font-extrabold text-[#06162C] leading-[1.18] tracking-[-0.03em] mb-2.5 will-change-transform"
            >
              {mainFeaturedCard.heading}
            </h2>

            <div ref={bodyRef} className="flex flex-col space-y-2 will-change-transform">
              {mainFeaturedCard.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-sans text-[14.5px] lg:text-[15px] leading-[1.62] text-[#475569] font-normal tracking-[-0.01em]"
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
        <SearchFeaturedCardMobile />
      </div>
    </>
  );
};