"use client";

import React, { useRef, useEffect } from "react";
import { SAAS_PRODUCTS_CONTENT } from "@/config/services/saasProducts";
import { initChallengesIntroAnimation } from "./animations";
import { SaasChallengesIntroMobile } from "./mobile/SaasChallengesIntroMobile";

export const SaasChallengesIntro: React.FC = () => {
  const { challengesIntro } = SAAS_PRODUCTS_CONTENT;

  const cardRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = initChallengesIntroAnimation(
      cardRef.current,
      headingRef.current,
      paragraphRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT */}
      <section className="hidden lg:block relative w-full mb-16 select-none overflow-x-clip">
        <div
          ref={cardRef}
          className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 lg:p-10 shadow-[0_18px_50px_-10px_rgba(7,54,109,0.09)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
        >
          <div className="relative z-10 max-w-[940px] mx-auto flex flex-col">
            <h2
              ref={headingRef}
              className="font-sans text-[28px] font-extrabold text-[#06162C] leading-[1.18] tracking-[-0.03em] mb-4 will-change-transform"
            >
              {challengesIntro.heading}
            </h2>

            <p
              ref={paragraphRef}
              className="font-sans text-[17px] leading-[1.74] text-[#475569] font-normal tracking-[-0.01em] will-change-transform"
            >
              {challengesIntro.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <SaasChallengesIntroMobile />
      </div>
    </>
  );
};