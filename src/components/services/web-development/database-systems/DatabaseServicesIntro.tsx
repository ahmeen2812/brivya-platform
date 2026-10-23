"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { DATABASE_SYSTEMS_CONTENT } from "@/config/services/databaseSystems";
import { initFeaturedCardAnimation } from "./animations";
import { DatabaseServicesIntroMobile } from "./mobile/DatabaseServicesIntroMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const DatabaseServicesIntro: React.FC = () => {
  const { servicesIntro } = DATABASE_SYSTEMS_CONTENT;
  const [imageError, setImageError] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
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
      {/* DESKTOP VIEWPORT: Clean Featured Card entrance on scroll */}
      <section className="hidden lg:block relative w-full mb-16 select-none overflow-x-clip">
        <div
          ref={cardRef}
          className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 lg:p-10 shadow-[0_18px_50px_-10px_rgba(7,54,109,0.09)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
        >
          <div ref={bodyRef} className="grid grid-cols-12 gap-8 items-center will-change-transform">
            <div className="col-span-7 flex flex-col justify-center">
              <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
                {servicesIntro.featuredCard.tag}
              </span>
              <h3 className="font-sans text-[26px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight mb-3">
                {servicesIntro.featuredCard.heading}
              </h3>
              <div className="flex flex-col space-y-3">
                {servicesIntro.featuredCard.paragraphs.map((p, idx) => (
                  <p key={idx} className="font-sans text-[15px] leading-[1.72] text-[#475569] font-normal">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[360px] flex items-center justify-center">
                {!imageError ? (
                  <Image
                    src={servicesIntro.featuredCard.illustrationPath}
                    alt={servicesIntro.featuredCard.illustrationAlt}
                    fill
                    sizes="360px"
                    className="object-contain"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40">
                    <span className="font-mono text-[10.5px] font-bold text-[#06162C]">
                      Image 02: {servicesIntro.featuredCard.illustrationPath}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <DatabaseServicesIntroMobile />
      </div>
    </>
  );
};