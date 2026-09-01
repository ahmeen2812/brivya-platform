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
      {/* DESKTOP VIEWPORT: Tag removed, positioned lower with increased margin */}
      <section className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip">
        <div
          ref={cardRef}
          className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 lg:p-12 shadow-[0_18px_50px_-10px_rgba(7,54,109,0.09)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
        >
          <div className="max-w-[940px] mx-auto flex flex-col">
            <h2
              ref={headerRef}
              className="font-sans text-[30px] font-extrabold text-[#06162C] leading-[1.18] tracking-[-0.03em] mb-4 will-change-transform"
            >
              {mainFeaturedCard.heading}
            </h2>

            <div ref={bodyRef} className="flex flex-col space-y-3.5 will-change-transform">
              {mainFeaturedCard.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-sans text-[16px] leading-[1.74] text-[#475569] font-normal tracking-[-0.01em]"
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