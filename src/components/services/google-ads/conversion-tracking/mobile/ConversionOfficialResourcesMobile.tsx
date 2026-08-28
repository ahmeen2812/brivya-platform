"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { CONVERSION_TRACKING_CONTENT } from "@/config/services/conversionTracking";
import { initResourcesAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const ConversionOfficialResourcesMobile: React.FC = () => {
  const { officialResources } = CONVERSION_TRACKING_CONTENT;
  const [badgeErrors, setBadgeErrors] = useState<{ [key: string]: boolean }>({});

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initResourcesAnimation(containerRef.current, null, cardRefs.current, badgeRefs.current);
    return () => ctx?.revert();
  }, []);

  const handleBadgeError = (id: string) => {
    setBadgeErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col space-y-6 mb-12 select-none overflow-visible"
    >
      <div>
        <span className="font-mono text-[10px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1">
          {officialResources.tag}
        </span>
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight">
          {officialResources.heading}
        </h2>
      </div>

      {officialResources.items.map((item, idx) => (
        <div
          key={item.id}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className="relative rounded-2xl border border-[#BACFE6] bg-white/85 p-6 shadow-xs flex flex-col justify-between will-change-transform"
        >
          {/* Enlarged Transparent Floating Badge on Mobile */}
          <div
            ref={(el) => {
              badgeRefs.current[idx] = el;
            }}
            className="absolute -top-6 right-4 z-20 w-16 h-16 flex items-center justify-center will-change-transform drop-shadow-[0_12px_22px_rgba(7,54,109,0.22)]"
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
              <span className="font-mono text-[9px] font-bold text-[#0A5FD7]">{idx + 1}</span>
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
      ))}
    </section>
  );
};