"use client";

import React, { useState, useRef } from "react";
import { YOUTUBE_ADS_CONTENT } from "@/config/services/youtubeAds";
import { initFaqAnimation } from "./animations";
import { YoutubeFaqMobile } from "./mobile/YoutubeFaqMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const YoutubeFaq: React.FC = () => {
  const { faq } = YOUTUBE_ADS_CONTENT;
  const [openId, setOpenId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initFaqAnimation(
      {
        heading: headingRef.current,
        items: itemRefs.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* DESKTOP VIEWPORT */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip"
      >
        <div className="w-full rounded-3xl border border-[#BACFE6] bg-white/70 backdrop-blur-xs p-10 shadow-[0_8px_30px_-6px_rgba(7,54,109,0.04)]">
          <div className="border-b border-[#BACFE6]/60 pb-5 mb-6">
            <h2
              ref={headingRef}
              className="font-sans text-[30px] font-extrabold text-[#06162C] tracking-tight will-change-transform"
            >
              {faq.heading}
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-[#BACFE6]/50">
            {faq.items.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="py-5 first:pt-0 last:pb-0 will-change-transform"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7] rounded-lg cursor-pointer"
                  >
                    <span
                      className={`font-sans text-[17px] font-bold transition-colors duration-200 ${
                        isOpen ? "text-[#0A5FD7]" : "text-[#06162C] group-hover:text-[#0A5FD7]"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0A5FD7] text-white border-[#0A5FD7]"
                          : "bg-white text-slate-500 border-slate-200 group-hover:border-[#BACFE6]"
                      }`}
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  {/* Animated CSS Grid Expansion */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3.5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden pr-8">
                      <p className="font-sans text-[15px] leading-[1.72] text-[#475569] font-normal tracking-[-0.01em]">
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

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <YoutubeFaqMobile />
      </div>
    </>
  );
};