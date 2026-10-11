"use client";

import React, { forwardRef } from "react";
import { WhyUsCardData } from "../content";
import {
  ConnectedNetworkTexture,
  EngineeringBlueprintTexture,
  CommunicationWaveTexture,
} from "../textures/TextureAssets";

interface FeatureCardProps {
  readonly data: WhyUsCardData;
}

/**
 * Contextual SVG Icon Components representing:
 * 1. Connected Thinking: Interconnected Network Topology
 * 2. Practical Engineering: Infrastructure / Microchip Hexagon
 * 3. Clear Communication: Bidirectional Conversation Nodes
 */
const CardIcon: React.FC<{ vectorId: WhyUsCardData["vectorId"] }> = ({ vectorId }) => {
  const iconClass =
    "h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ease-out group-hover:scale-105";

  switch (vectorId) {
    case "network":
      return (
        <svg
          className={`${iconClass} group-hover:rotate-2`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );

    case "engineering":
      return (
        <svg
          className={`${iconClass} group-hover:-rotate-2`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
          <polyline points="2 15.5 12 8.5 22 15.5" />
        </svg>
      );

    case "communication":
      return (
        <svg
          className={`${iconClass} group-hover:rotate-2`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
        </svg>
      );
  }
};

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ data }, ref) => {
    // Theme configurations mapping substrate tones, textures, and accents
    const themeConfig = (() => {
      switch (data.theme) {
        case "blue":
          return {
            texture: <ConnectedNetworkTexture />,
            bgSubstrate:
              "bg-gradient-to-br from-[#FAFCFF] via-[#F4F8FD] to-[#EBF3FB]",
            borderClass:
              "border-slate-200/90 hover:border-[#0A5FD7]/50",
            iconContainer:
              "bg-[#EBF3FF] text-[#0A5FD7] border-[#0A5FD7]/20 shadow-[0_2px_8px_rgba(10,95,215,0.08)]",
            accentBar: "#0A5FD7",
          };
        case "green":
          return {
            texture: <EngineeringBlueprintTexture />,
            bgSubstrate:
              "bg-gradient-to-br from-[#FAFCFF] via-[#F3FAF6] to-[#E8F6EF]",
            borderClass:
              "border-slate-200/90 hover:border-[#059669]/50",
            iconContainer:
              "bg-[#E3FAED] text-[#059669] border-[#059669]/20 shadow-[0_2px_8px_rgba(5,150,105,0.08)]",
            accentBar: "#059669",
          };
        case "purple":
          return {
            texture: <CommunicationWaveTexture />,
            bgSubstrate:
              "bg-gradient-to-br from-[#FAFCFF] via-[#F6F3FA] to-[#EEE8F7]",
            borderClass:
              "border-slate-200/90 hover:border-[#7C3AED]/50",
            iconContainer:
              "bg-[#F2EDFB] text-[#7C3AED] border-[#7C3AED]/20 shadow-[0_2px_8px_rgba(124,58,237,0.08)]",
            accentBar: "#7C3AED",
          };
      }
    })();

    return (
      <div
        ref={ref}
        className="w-full h-full perspective-[1200px]"
        style={{ willChange: "transform, opacity" }}
      >
        <div
          className={`group relative flex flex-col justify-start w-full h-full rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 min-h-[240px] sm:min-h-[260px] md:min-h-[270px] border shadow-[0_2px_12px_rgba(6,22,44,0.03)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-6px_rgba(6,22,44,0.08)] overflow-hidden ${themeConfig.bgSubstrate} ${themeConfig.borderClass}`}
        >
          {/* 
            Background Texture Layer:
            - Default resting state: opacity-70 (~70% reveal intensity)
            - Hover state: opacity-100 (100% full illumination)
          */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-100">
            {themeConfig.texture}
          </div>

          {/* Card Foreground Content (Guaranteed 100% Opaque & High-Contrast) */}
          <div className="relative z-10 flex flex-col flex-1 w-full text-left pointer-events-none">
            {/* Contextual Icon Capsule */}
            <div
              className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border transition-all duration-300 ease-out group-hover:scale-105 mb-5 sm:mb-6 shrink-0 ${themeConfig.iconContainer}`}
            >
              <CardIcon vectorId={data.vectorId} />
            </div>

            {/* Spacer pushing typography to the lower anchor */}
            <div className="flex-1 min-h-[8px]" />

            {/* Title */}
            <h3 className="font-sans text-[17px] sm:text-[18px] md:text-[19px] font-bold text-[#06162C] tracking-tight leading-snug">
              {data.title}
            </h3>

            {/* Description */}
            <p className="mt-2 font-sans text-[13.5px] sm:text-[14px] font-normal text-[#475569] leading-relaxed tracking-[-0.01em]">
              {data.desc}
            </p>
          </div>

          {/* Micro Bottom Accent Bar */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-6 right-6 h-[3px] rounded-t-sm origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 pointer-events-none"
            style={{ backgroundColor: themeConfig.accentBar }}
          />
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";