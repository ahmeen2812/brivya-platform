// src/components/services/google-ads/campaign-management/mobile/CampaignManagementHeroMobile.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementHeroMobile: React.FC = () => {
  const { hero } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="w-full pt-8 pb-4 px-4">
      {/* Eyebrow Tag */}
      <div className="mb-2">
        <span className="text-[11px] font-mono font-medium tracking-wide uppercase text-[#0A5FD7]">
          {hero.tag}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl font-bold tracking-tight text-[#07366D] leading-tight mb-4">
        {hero.headline}
      </h1>

      {/* Stationary Accent Line Description */}
      <div className="border-l-[2.5px] border-[#0A5FD7] pl-4 py-0.5 mb-6">
        <p className="text-sm text-[#475569] leading-relaxed">
          {hero.description}
        </p>
      </div>

      {/* Floating Illustration on #F4F7FC (NO BOXES, NO BORDERS) */}
      <div className="relative w-full flex items-center justify-center py-2">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          width={420}
          height={320}
          priority
          className="w-full max-w-[340px] h-auto object-contain select-none drop-shadow-[0_16px_28px_rgba(7,54,109,0.18)]"
        />
      </div>
    </section>
  );
};