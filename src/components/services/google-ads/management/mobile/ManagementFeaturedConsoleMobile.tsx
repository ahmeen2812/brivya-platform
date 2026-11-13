// src/components/services/google-ads/management/mobile/ManagementFeaturedConsoleMobile.tsx
'use client';

import React from 'react';
import { MANAGEMENT_SERVICE_CONFIG } from '@/config/services/management';

export const ManagementFeaturedConsoleMobile: React.FC = () => {
  const { featuredConsole } = MANAGEMENT_SERVICE_CONFIG;

  return (
    <div className="w-full px-4 mt-8">
      <div className="rounded-none border border-[#07366D]/35 bg-transparent p-5">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1675F8]" />
          <span className="font-mono text-[10px] font-semibold tracking-wider uppercase text-[#0A5FD7]">
            {featuredConsole.tag}
          </span>
        </div>
        <h2 className="text-lg font-bold text-[#06162C] leading-snug mb-3">
          {featuredConsole.headline}
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#07366D]/20 pt-3">
          {featuredConsole.description}
        </p>
      </div>
    </div>
  );
};