"use client";

import React, { useRef } from "react";
import { UnifiedServiceConfig } from "../types/ServiceTemplateSchema";
import { initTemplateFeaturedCard } from "../animations/cardAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: UnifiedServiceConfig["mainFeaturedCard"];
}

export const TemplateFeaturedCardDesktop: React.FC<Props> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;
    const ctx = initTemplateFeaturedCard(cardRef.current, headerRef.current, bodyRef.current);
    return () => ctx?.revert();
  }, [data]);

  return (
    <section className="hidden lg:block relative w-full mb-16 select-none overflow-x-clip">
      <div
        ref={cardRef}
        className="relative w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-6 lg:px-8 shadow-xs will-change-transform"
      >
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-5 pr-6 border-r border-[#07366D]/25">
            <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
              {data.tag}
            </span>
            <h2
              ref={headerRef}
              className="font-sans text-[22px] font-extrabold text-[#07366D] tracking-tight leading-tight will-change-transform"
            >
              {data.heading}
            </h2>
          </div>

          <div ref={bodyRef} className="col-span-7 flex flex-col space-y-2.5 will-change-transform">
            {data.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};