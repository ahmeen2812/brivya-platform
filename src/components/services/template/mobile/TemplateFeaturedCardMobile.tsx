"use client";

import React, { useRef } from "react";
import { UnifiedServiceConfig } from "../types/ServiceTemplateSchema";
import { initTemplateFeaturedCard } from "../animations/cardAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: UnifiedServiceConfig["mainFeaturedCard"];
}

export const TemplateFeaturedCardMobile: React.FC<Props> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = initTemplateFeaturedCard(
      cardRef.current,
      headerRef.current,
      bodyRef.current
    );
    
    return () => ctx?.revert();
  }, [data]);

  return (
    <section className="relative w-full mb-10 select-none overflow-x-clip">
      <div
        ref={cardRef}
        /* Mobile terminal console constraint - matches Desktop formatting structure mappings locally completely rendering safe architecture array logic gracefully */
        className="w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 shadow-xs will-change-transform"
      >
        <div className="border-b border-[#07366D]/25 pb-4 mb-4">
          <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1.5">
            {data.tag}
          </span>
          <h2
            ref={headerRef}
            className="font-sans text-[20px] font-extrabold text-[#07366D] leading-[1.2] tracking-tight will-change-transform"
          >
            {data.heading}
          </h2>
        </div>
        
        <div ref={bodyRef} className="flex flex-col space-y-2 will-change-transform">
          {data.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="font-sans text-[13.5px] leading-[1.65] text-[#475569]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};