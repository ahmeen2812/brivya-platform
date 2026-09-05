"use client";

import React from "react";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

export const AlternatingServiceCards: React.FC = () => {
  const { serviceCards } = CUSTOM_WEBSITES_CONTENT;

  return (
    <section className="relative w-full flex flex-col space-y-8 sm:space-y-10 lg:space-y-12 mb-16 sm:mb-20 lg:mb-24 select-none">
      {serviceCards.map((card) => {
        const isRightAligned = card.alignment === "right";

        return (
          <div
            key={card.index}
            /* 
              Desktop ~70% Width with Alternating Margin Offsets:
              - Right aligned: ml-auto
              - Left aligned: mr-auto
            */
            className={`w-full lg:w-[74%] xl:w-[70%] ${
              isRightAligned ? "ml-auto" : "mr-auto"
            }`}
          >
            <div
              /* 
                Isolated Card Hover Physics:
                - Hovering lifts ONLY this target (-translate-y-1.5)
                - Sibling cards remain completely stationary
              */
              className="group/card relative rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_48px_-8px_rgba(7,54,109,0.12)] hover:border-[#0A5FD7]/40"
            >
              <div className="relative z-10 flex flex-col">
                {/* Header Row: Title & Index Pill */}
                <div className="flex items-center justify-between gap-4 border-b border-[#BACFE6]/60 pb-4 mb-4 sm:mb-5">
                  <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider">
                    Card {card.index} — {card.title}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/85 text-[#06162C] font-mono text-[11.5px] font-bold border border-[#BACFE6] shadow-2xs">
                    {card.index}
                  </span>
                </div>

                {/* Subtitle Heading */}
                <h3 className="font-sans text-[20px] sm:text-[23px] font-bold text-[#06162C] tracking-tight mb-4">
                  {card.subtitle}
                </h3>

                {/* Paragraphs */}
                <div className="flex flex-col space-y-3.5">
                  {card.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans text-[14px] sm:text-[15px] leading-[1.7] text-[#475569] font-normal tracking-[-0.01em]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
