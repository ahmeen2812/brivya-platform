"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initFourPartMosaicAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["fourPartMosaic"];
}

export const OfficeFourPartMosaicDesktop: React.FC<Props> = ({ data }) => {
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
      className="hidden lg:block relative w-full my-16 select-none overflow-x-clip"
    >
      <div className="w-full rounded-3xl border border-[#BACFE6] bg-white/90 p-8 lg:p-10 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)]">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* 1. Block 1 (Enters Left-to-Right, -->) */}
          <div ref={block1Ref} className="col-span-4 flex flex-col justify-center will-change-transform">
            <h3 className="font-sans text-[21px] font-bold text-[#06162C] tracking-tight mb-2.5">
              {data.block1.title}
            </h3>
            <p className="font-sans text-[14.5px] leading-[1.68] text-[#475569]">
              {data.block1.description}
            </p>
          </div>

          {/* 2. Icon 1 (Pops with subtle scale settle) */}
          <div ref={icon1Ref} className="col-span-2 flex items-center justify-center will-change-transform">
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E6EFFB] to-[#F4F7FC] border border-[#CBDDF6] p-3 flex items-center justify-center shadow-xs">
              {!icon1Error ? (
                <Image
                  src={data.icon1.imagePath}
                  alt={data.icon1.imageAlt}
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                  onError={() => setIcon1Error(true)}
                />
              ) : (
                <span className="font-mono text-[10px] font-bold text-[#0A5FD7]">Icon 1</span>
              )}
            </div>
          </div>

          {/* Center Dividing Axis (Indicated by up/down arrows in ui3.png) */}
          <div
            ref={centerDividerRef}
            aria-hidden="true"
            className="hidden lg:block w-[1.5px] h-28 bg-[#BACFE6] rounded-full mx-auto will-change-transform"
          />

          {/* 3. Block 2 (Enters Right-to-Left, <--) */}
          <div ref={block2Ref} className="col-span-4 flex flex-col justify-center pl-2 will-change-transform">
            <h3 className="font-sans text-[21px] font-bold text-[#06162C] tracking-tight mb-2.5">
              {data.block2.title}
            </h3>
            <p className="font-sans text-[14.5px] leading-[1.68] text-[#475569]">
              {data.block2.description}
            </p>
          </div>

          {/* 4. Icon 2 (Pops with subtle scale settle) */}
          <div ref={icon2Ref} className="col-span-1 flex items-center justify-center will-change-transform">
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E6EFFB] to-[#F4F7FC] border border-[#CBDDF6] p-3 flex items-center justify-center shadow-xs">
              {!icon2Error ? (
                <Image
                  src={data.icon2.imagePath}
                  alt={data.icon2.imageAlt}
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                  onError={() => setIcon2Error(true)}
                />
              ) : (
                <span className="font-mono text-[10px] font-bold text-[#0A5FD7]">Icon 2</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};