"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initFourPartMosaicAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["fourPartMosaic"];
}

export const OfficeFourPartMosaicMobile: React.FC<Props> = ({ data }) => {
  const [icon1Error, setIcon1Error] = useState(false);
  const [icon2Error, setIcon2Error] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const block1Ref = useRef<HTMLDivElement | null>(null);
  const icon1Ref = useRef<HTMLDivElement | null>(null);
  const centerDividerRef = useRef<HTMLDivElement | null>(null);
  const block2Ref = useRef<HTMLDivElement | null>(null);
  const icon2Ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initFourPartMosaicAnimation(
      {
        block1: block1Ref.current,
        icon1: icon1Ref.current,
        centerDivider: centerDividerRef.current,
        block2: block2Ref.current,
        icon2: icon2Ref.current,
      },
      containerRef.current
    );
    return () => ctx?.revert();
  }, [data]);

  return (
    <section
      ref={containerRef}
      className="relative w-full my-8 select-none overflow-x-clip"
    >
      <div className="w-full rounded-2xl border border-[#BACFE6] bg-white/90 p-6 shadow-sm">
        {/* Unit 1: Block 1 + Icon 1 */}
        <div className="flex flex-col items-start gap-4">
          <div ref={icon1Ref} className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#E6EFFB] to-[#F4F7FC] border border-[#CBDDF6] p-2.5 flex items-center justify-center will-change-transform">
            {!icon1Error ? (
              <Image
                src={data.icon1.imagePath}
                alt={data.icon1.imageAlt}
                fill
                sizes="64px"
                className="object-contain p-1.5"
                onError={() => setIcon1Error(true)}
              />
            ) : (
              <span className="font-mono text-[9px] font-bold text-[#0A5FD7]">Icon 1</span>
            )}
          </div>

          <div ref={block1Ref} className="will-change-transform">
            <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
              {data.block1.title}
            </h3>
            <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {data.block1.description}
            </p>
          </div>
        </div>

        {/* Center Divider */}
        <div
          ref={centerDividerRef}
          aria-hidden="true"
          className="w-full h-[1px] bg-[#BACFE6] my-6 will-change-transform"
        />

        {/* Unit 2: Block 2 + Icon 2 */}
        <div className="flex flex-col items-start gap-4">
          <div ref={icon2Ref} className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#E6EFFB] to-[#F4F7FC] border border-[#CBDDF6] p-2.5 flex items-center justify-center will-change-transform">
            {!icon2Error ? (
              <Image
                src={data.icon2.imagePath}
                alt={data.icon2.imageAlt}
                fill
                sizes="64px"
                className="object-contain p-1.5"
                onError={() => setIcon2Error(true)}
              />
            ) : (
              <span className="font-mono text-[9px] font-bold text-[#0A5FD7]">Icon 2</span>
            )}
          </div>

          <div ref={block2Ref} className="will-change-transform">
            <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
              {data.block2.title}
            </h3>
            <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {data.block2.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};