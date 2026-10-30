"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { UnifiedServiceConfig } from "../types/ServiceTemplateSchema";
import { initTemplateSupportingCards } from "../animations/cardAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: UnifiedServiceConfig["supportingCards"];
}

export const TemplateSupportingCardsDesktop: React.FC<Props> = ({ data }) => {
  const [img2Error, setImg2Error] = useState(false);
  const [img3Error, setImg3Error] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2ContainerRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card2ImgRef = useRef<HTMLDivElement | null>(null);
  const card3ContainerRef = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const card3ImgRef = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initTemplateSupportingCards(
      {
        card1: card1Ref.current,
        card2Container: card2ContainerRef.current,
        card2: card2Ref.current,
        card2Illustration: card2ImgRef.current,
        card3Container: card3ContainerRef.current,
        card3: card3Ref.current,
        card3Illustration: card3ImgRef.current,
        card4: card4Ref.current,
      },
      containerRef.current
    );
    return () => ctx?.revert();
  }, [data]);

  return (
    /* pt-8 lg:pt-12 ensures this entire section starts completely below the fold on initial load */
    <section
      ref={containerRef}
      className="hidden lg:flex relative w-full flex-col space-y-12 pt-8 lg:pt-12 mb-24 select-none overflow-x-clip"
    >
      <div className="max-w-[820px] mb-8">
        <h2 className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14]">
          {data.heading}
        </h2>
        <p className="mt-2.5 font-sans text-[15.5px] text-[#475569] font-normal">
          {data.subtitle}
        </p>
      </div>

      {/* Card 01: Right 80% */}
      <div ref={card1Ref} className="w-[80%] ml-auto will-change-transform">
        <div className="relative min-h-[200px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-md [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10" />
          <div className="relative z-0">
            <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
              {data.items[0]?.title}
            </h3>
            <p className="font-sans text-[15px] leading-[1.68] text-[#475569]">
              {data.items[0]?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Card 02: Left 70% + Right 30% Image */}
      <div ref={card2ContainerRef} className="w-full flex items-center justify-between gap-8">
        <div ref={card2Ref} className="w-[70%] will-change-transform">
          <div className="relative min-h-[200px] flex flex-col justify-between rounded-r-3xl rounded-l-none border border-[#BACFE6] border-l-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-md [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10" />
            <div className="relative z-0">
              <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                {data.items[1]?.title}
              </h3>
              <p className="font-sans text-[15px] leading-[1.68] text-[#475569]">
                {data.items[1]?.description}
              </p>
            </div>
          </div>
        </div>
        <div ref={card2ImgRef} className="w-[30%] flex items-center justify-center will-change-transform">
          <div className="relative w-full aspect-[4/3] max-w-[280px] flex items-center justify-center">
            {!img2Error ? (
              <Image src={data.card2IllustrationPath} alt={data.card2IllustrationAlt} fill sizes="280px" className="object-contain" onError={() => setImg2Error(true)} />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40 text-xs font-bold text-[#06162C]">Image 02</div>
            )}
          </div>
        </div>
      </div>

      {/* Card 03: Left 30% Image + Right 70% Card */}
      <div ref={card3ContainerRef} className="w-full flex items-center justify-between gap-8">
        <div ref={card3ImgRef} className="w-[30%] flex items-center justify-center will-change-transform">
          <div className="relative w-full aspect-[4/3] max-w-[280px] flex items-center justify-center">
            {!img3Error ? (
              <Image src={data.card3IllustrationPath} alt={data.card3IllustrationAlt} fill sizes="280px" className="object-contain" onError={() => setImg3Error(true)} />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/40 text-xs font-bold text-[#06162C]">Image 03</div>
            )}
          </div>
        </div>
        <div ref={card3Ref} className="w-[70%] will-change-transform">
          <div className="relative min-h-[200px] flex flex-col justify-between rounded-l-3xl rounded-r-none border border-[#BACFE6] border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-md [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10" />
            <div className="relative z-0">
              <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
                {data.items[2]?.title}
              </h3>
              <p className="font-sans text-[15px] leading-[1.68] text-[#475569]">
                {data.items[2]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 04: Left 80% */}
      <div ref={card4Ref} className="w-[80%] mr-auto will-change-transform">
        <div className="relative min-h-[200px] flex flex-col justify-between rounded-r-3xl rounded-l-none border border-[#BACFE6] border-l-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-md [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/40 to-transparent z-10" />
          <div className="relative z-0">
            <h3 className="font-sans text-[22px] font-bold text-[#06162C] tracking-tight mb-3">
              {data.items[3]?.title}
            </h3>
            <p className="font-sans text-[15px] leading-[1.68] text-[#475569]">
              {data.items[3]?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};