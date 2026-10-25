// src/components/services/google-ads/campaign-management/CampaignManagementFeaturedCard.tsx
'use client';

import React from 'react';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementFeaturedCard: React.FC = () => {
  const { featuredCard } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Sharp-cornered, unfilled architectural console with generous clearance */}
      <div
        data-motion="directive-console"
        className="mt-14 sm:mt-16 lg:mt-20 w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Directive Tag & Navy Heading */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#07366D]/25 pb-6 lg:pb-0 lg:pr-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1675F8]" />
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#0A5FD7]">
                {featuredCard.tag}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#07366D] leading-snug">
              {featuredCard.headline}
            </h2>
          </div>

          {/* Right Column: High-Density Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              {featuredCard.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};