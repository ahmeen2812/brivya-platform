"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initOfficeResourcesAnimation } from "../animations/resourceAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["officialResources"];
}

export const OfficeResourcesDesktop: React.FC<Props> = ({ data }) => {
  const [badgeErrors, setBadgeErrors] = useState<{ [key: string]: boolean }>({});

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initOfficeResourcesAnimation(
      containerRef.current,
      headerRef.current,
      cardRefs.current,
      badgeRefs.current
    );
    return () => ctx?.revert();
  }, [data]);

  const handleBadgeError = (id: string) => {
    setBadgeErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      ref={containerRef}
      className="hidden lg:block relative w-full mb-28 select-none overflow-visible"
    >
      <div ref={headerRef} className="max-w-[820px] mb-12 will-change-transform">
        <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
          {data.tag}
        </span>
        <h2 className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14]">
          {data.heading}
        </h2>
        <p className="mt-2.5 font-sans text-[15.5px] text-[#475569] font-normal">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-5 gap-5 pt-6 pb-6">
        {data.items.map((item, idx) => {
          const isTop = item.badgePosition === "top";

          return (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="relative rounded-2xl border border-[#BACFE6] bg-white/85 p-6 flex flex-col justify-between hover:border-[#0A5FD7] hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(10,95,215,0.12)] transition-all duration-300 will-change-transform"
            >
              <div
                ref={(el) => {
                  badgeRefs.current[idx] = el;
                }}
                className={`absolute right-3 z-20 w-20 h-20 flex items-center justify-center will-change-transform drop-shadow-[0_16px_28px_rgba(7,54,109,0.25)] ${
                  isTop ? "-top-10" : "-bottom-10"
                }`}
              >
                {!badgeErrors[item.id] ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.badgeImagePath}
                      alt={item.badgeImageAlt}
                      fill
                      sizes="80px"
                      className="object-contain"
                      onError={() => handleBadgeError(item.id)}
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/90 border border-[#BACFE6] shadow-sm">
                    <span className="font-mono text-[9px] font-bold text-[#0A5FD7]">{idx + 1}</span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-sans text-[16px] font-bold text-[#06162C] tracking-tight mb-2 pr-6">
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] leading-[1.65] text-[#475569]">
                  {item.description}
                </p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#0A5FD7] hover:text-[#07366D] transition-colors mt-6 pt-3.5 border-t border-[#BACFE6]/60"
              >
                <span>Documentation</span>
                <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};