// src/components/services/google-ads/campaign-management/CampaignManagementHero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementHero: React.FC = () => {
  const { hero } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-6 lg:pb-8 overflow-hidden">
      <div className="w-full">
        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Column on the LEFT (5 cols) — FLOATING DIRECTLY ON #F4F7FC (NO BOXES) */}
          <div
            data-motion="hero-illustration"
            className="col-span-5 flex items-center justify-center will-change-transform"
          >
            <div className="relative w-full max-w-[480px]">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                width={540}
                height={400}
                priority
                className="w-full h-auto object-contain select-none drop-shadow-[0_20px_35px_rgba(7,54,109,0.18)]"
              />
            </div>
          </div>

          {/* Text Payload on the RIGHT (7 cols) */}
          <div className="col-span-7 flex flex-col justify-center">
            {/* Service Tag */}
            <div data-motion="hero-text" className="mb-3">
              <span className="text-xs font-mono font-medium tracking-wide uppercase text-[#0A5FD7]">
                {hero.tag}
              </span>
            </div>

            {/* Deep Navy H1 */}
            <h1
              data-motion="hero-text"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07366D] leading-[1.08] mb-6"
            >
              {hero.headline}
            </h1>

            {/* Stationary Vertical Structural Divider & Description */}
            <div
              data-motion="hero-text"
              className="border-l-[2.5px] border-[#0A5FD7] pl-5 py-0.5"
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