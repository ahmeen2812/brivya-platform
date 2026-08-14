"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { OfficeTemplateConfig } from "../types/OfficeTemplateSchema";
import { initOfficeResourcesAnimation } from "../animations/resourceAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: OfficeTemplateConfig["officialResources"];
}

export const OfficeResourcesMobile: React.FC<Props> = ({ data }) => {
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
      className="relative w-full flex flex-col space-y-6 my-12 select-none overflow-visible pt-4"
    >
      <div ref={headerRef} className="will-change-transform">
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {data.tag}
        </span>
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight">
          {data.heading}
        </h2>
      </div>

      {data.items.map((item, idx) => {
        const isTop = item.badgePosition === "top";

        return (
          <div
            key={item.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="relative rounded-2xl border border-[#BACFE6] bg-white/85 p-6 shadow-xs flex flex-col justify-between will-change-transform"
          >
            <div
              ref={(el) => {
                badgeRefs.current[idx] = el;
              }}
              className={`absolute right-4 z-20 w-16 h-16 flex items-center justify-center will-change-transform drop-shadow-[0_12px_22px_rgba(7,54,109,0.22)] ${
                isTop ? "-top-6" : "-bottom-6"
              }`}
            >
              {!badgeErrors[item.id] ? (
                <div className="relative w-full h-full">
                  <Image
                    src={item.badgeImagePath}
                    alt={item.badgeImageAlt}
                    fill
                    sizes="64px"
                    className="object-contain"
                    onError={() => handleBadgeError(item.id)}
                  />
                </div>
              ) : (
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#BACFE6] shadow-sm text-xs font-bold text-[#0A5FD7]">
                  {idx + 1}
                </div>
              )}
            </div>

            <div>
              <h3 className="font-sans text-[17px] font-bold text-[#06162C] tracking-tight mb-2 pr-14">
                {item.title}
              </h3>
              <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
                {item.description}
              </p>
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold text-[#0A5FD7] mt-4 pt-3 border-t border-[#BACFE6]/60"
            >
              <span>Explore Documentation</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        );
      })}
    </section>
  );
};