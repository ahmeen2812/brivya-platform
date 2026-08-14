"use client";

import React, { useRef } from "react";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initAdditionalCapabilitiesAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  items: OfficeTemplateConfig["additionalCapabilities"];
}

export const OfficeAdditionalCapabilitiesMobile: React.FC<Props> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initAdditionalCapabilitiesAnimation(containerRef.current, cardRefs.current);
    return () => ctx?.revert();
  }, [items]);

  return (
    <section
      ref={containerRef}
      className="relative w-full my-8 select-none overflow-x-clip"
    >
      <div className="flex flex-col space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="relative rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm will-change-transform"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded bg-white/85 text-[#0A5FD7] font-mono text-[10px] font-bold border border-[#BACFE6] mb-2.5">
              {item.index}
            </span>
            <h3 className="font-sans text-[18px] font-bold text-[#06162C] tracking-tight mb-2">
              {item.title}
            </h3>
            <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};