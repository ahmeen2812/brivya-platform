"use client";

import React, { useRef } from "react";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initAdditionalCapabilitiesAnimation } from "../animations/sectionAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  items: OfficeTemplateConfig["additionalCapabilities"];
}

export const OfficeAdditionalCapabilitiesDesktop: React.FC<Props> = ({ items }) => {
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
      className="hidden lg:block relative w-full my-16 select-none overflow-x-clip"
    >
      <div className="grid grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="relative rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-8px_rgba(7,54,109,0.12)] transition-all duration-300 flex flex-col justify-between will-change-transform"
          >
            <div>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/85 text-[#0A5FD7] font-mono text-[11.5px] font-bold border border-[#BACFE6] mb-3">
                {item.index}
              </span>
              <h3 className="font-sans text-[21px] font-bold text-[#06162C] tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-[14.5px] leading-[1.7] text-[#475569]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};