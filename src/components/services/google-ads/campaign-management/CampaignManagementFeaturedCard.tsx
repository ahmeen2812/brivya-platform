// src/components/services/google-ads/campaign-management/CampaignManagementFeaturedCard.tsx
'use client';

import React from 'react';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementFeaturedCard: React.FC = () => {
  const { featuredConsole } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <div className="w-full">
      {/* Executive Sharp Console with generous clearance (mt-16 lg:mt-24) to clear initial fold */}
      <div
        data-motion="directive-console"
        className="mt-16 lg:mt-24 w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-6 lg:px-8 shadow-xs"
      >
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Directive Tag & Navy Heading (5 cols) */}
          <div className="col-span-5 border-r border-[#07366D]/25 pr-8">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#0A5FD7] block mb-2">
              {featuredConsole.tag}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#07366D] leading-snug">
              {featuredConsole.headline}
            </h2>
          </div>

          {/* Right Column: High-Density Description (7 cols) */}
          <div className="col-span-7 flex flex-col justify-center">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              {featuredConsole.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};