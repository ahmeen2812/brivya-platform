// src/components/services/google-ads/campaign-management/mobile/CampaignManagementFeaturedCardMobile.tsx
'use client';

import React from 'react';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementFeaturedCardMobile: React.FC = () => {
  const { featuredConsole } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <div className="w-full px-4 mt-8">
      {/* Sharp-cornered, unfilled directive console */}
      <div className="rounded-none border border-[#07366D]/35 bg-transparent p-5">
        <span className="font-mono text-[10px] font-semibold tracking-wider uppercase text-[#0A5FD7] block mb-2">
          {featuredConsole.tag}
        </span>
        <h2 className="text-lg font-bold text-[#06162C] leading-snug mb-3">
          {featuredConsole.headline}
        </h2>
        <p className="text-xs text-[#475569] leading-relaxed border-t border-[#07366D]/20 pt-3">
          {featuredConsole.description}
        </p>
      </div>
    </div>
  );
};