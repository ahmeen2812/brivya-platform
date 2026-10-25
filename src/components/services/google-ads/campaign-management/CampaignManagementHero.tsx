// src/components/services/google-ads/campaign-management/CampaignManagementHero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementHero: React.FC = () => {
  const { hero } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Column on the LEFT (5 cols) */}
          <div
            data-motion="hero-illustration"
            className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[460px] aspect-4/3 sm:aspect-square rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 sm:p-8 [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] shadow-xl overflow-hidden flex flex-col justify-between">
              {/* Subtle Mathematical Grid Lines */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(#07366D 1px, transparent 1px), linear-gradient(90deg, #07366D 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Top Console Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#07366D]/20 pb-3">
                <span className="font-mono text-[10px] tracking-widest text-[#07366D] uppercase font-semibold">
                  CAMPAIGN_GOVERNANCE // AD_OPT_02
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#0A5FD7]">
                  <span className="w-2 h-2 rounded-full bg-[#1675F8] animate-pulse" />
                  ACTIVE_MONITORING
                </span>
              </div>

              {/* Graphic Center Mockup */}
              <div className="relative z-10 my-auto py-4 flex items-center justify-center">
                <div className="relative w-full max-w-[340px] drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    width={480}
                    height={380}
                    priority
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

              {/* Bottom Metrics Pill */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#07366D]/20 pt-3 font-mono text-[10px] sm:text-[11px] text-[#475569]">
                <span>BUDGET PACING // OPTIMAL</span>
                <span>BID CONTROL // SMART_VALUE</span>
              </div>
            </div>
          </div>

          {/* Text Content Column on the RIGHT (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Service Badge */}
            <div data-motion="hero-text" className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-[#0A5FD7]/10 text-[#0A5FD7] border border-[#0A5FD7]/25">
                {hero.badge}
              </span>
            </div>

            {/* Navy Display Heading */}
            <h1
              data-motion="hero-text"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07366D] leading-[1.08] mb-3"
            >
              {hero.headline}
            </h1>

            {/* Cobalt Subtitle */}
            <p
              data-motion="hero-text"
              className="text-lg sm:text-xl font-medium text-[#0A5FD7] tracking-tight mb-6"
            >
              {hero.subtitle}
            </p>

            {/* Framed Accent Line Description — STRICTLY NO CTA BUTTONS IN HERO */}
            <div
              data-motion="hero-text"
              className="border-l-2 border-[#0A5FD7]/50 pl-5 py-0.5"
            >
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};