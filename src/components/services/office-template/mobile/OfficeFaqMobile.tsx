"use client";

import React, { useState, useRef } from "react";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initOfficeFaqAnimation } from "../animations/faqCtaAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["faq"];
}

export const OfficeFaqMobile: React.FC<Props> = ({ data }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initOfficeFaqAnimation(headingRef.current, itemRefs.current, containerRef.current);
    return () => ctx?.revert();
  }, [data]);

  const toggleItem = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      ref={containerRef}
      className="relative w-full mb-12 select-none overflow-x-clip"
    >
      <div className="w-full rounded-2xl border border-[#BACFE6] bg-white/70 backdrop-blur-xs p-5 shadow-xs">
        <h2
          ref={headingRef}
          className="font-sans text-[22px] font-extrabold text-[#06162C] tracking-tight pb-3 mb-3 border-b border-[#BACFE6]/60 will-change-transform"
        >
          {data.heading}
        </h2>

        <div className="flex flex-col divide-y divide-[#BACFE6]/50">
          {data.items.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="py-3.5 first:pt-0 last:pb-0 will-change-transform"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-3 focus-visible:outline-none"
                >
                  <span
                    className={`font-sans text-[15px] font-bold transition-colors ${
                      isOpen ? "text-[#0A5FD7]" : "text-[#06162C]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0A5FD7] text-white border-[#0A5FD7]"
                        : "bg-white text-slate-500 border-slate-200"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};