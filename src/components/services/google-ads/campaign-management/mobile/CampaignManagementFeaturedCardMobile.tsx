// src/components/services/google-ads/campaign-management/mobile/CampaignManagementFeaturedCardMobile.tsx
'use client';

import React from 'react';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementFeaturedCardMobile: React.FC = () => {
  const { featuredCard } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <div className="lg:hidden w-full px-4 mt-8">
      <div className="rounded-none border border-[#07366D]/35 bg-transparent p-5">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1675F8]" />
          <span className="font-mono text-[10px] font-semibold tracking-wider uppercase text-[#0A5FD7]">
            {featuredCard.tag}
          </span>
        </div>
        <h2 className="text-lg font-bold text-[#07366D] leading-snug mb-3">
          {featuredCard.headline}
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#07366D]/20 pt-3">
          {featuredCard.description}
        </p>
      </div>
    </div>
  );
};