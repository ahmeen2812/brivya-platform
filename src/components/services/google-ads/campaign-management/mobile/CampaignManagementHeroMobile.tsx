// src/components/services/google-ads/campaign-management/mobile/CampaignManagementHeroMobile.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementHeroMobile: React.FC = () => {
  const { hero } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="lg:hidden w-full pt-12 pb-6 px-4">
      {/* Badge */}
      <div className="mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-[#0A5FD7]/10 text-[#0A5FD7] border border-[#0A5FD7]/25">
          {hero.badge}
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold tracking-tight text-[#07366D] leading-tight mb-2">
        {hero.headline}
      </h1>

      {/* Subtitle */}
      <p className="text-base font-medium text-[#0A5FD7] mb-4">
        {hero.subtitle}
      </p>

      {/* Framed Accent Description */}
      <div className="border-l-2 border-[#0A5FD7]/50 pl-4 py-0.5 mb-6">
        <p className="text-sm text-[#475569] leading-relaxed">
          {hero.description}
        </p>
      </div>

      {/* Visual Substrate Card */}
      <div className="relative w-full aspect-4/3 rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-4 shadow-md overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-[#07366D]/20 pb-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#07366D] font-semibold">
            TELEMETRY // MOBILE_FEED
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#0A5FD7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1675F8] animate-pulse" />
            LIVE
          </span>
        </div>
        <div className="relative w-full h-full flex items-center justify-center py-2">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            width={320}
            height={240}
            priority
            className="w-full h-auto max-h-[160px] object-contain"
          />
        </div>
        <div className="flex items-center justify-between border-t border-[#07366D]/20 pt-2 font-mono text-[9px] text-[#475569]">
          <span>BUDGET PACING // OPTIMAL</span>
          <span>BID CONTROL // SMART</span>
        </div>
      </div>
    </section>
  );
};