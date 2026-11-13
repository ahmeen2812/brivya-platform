// src/components/services/google-ads/management/ManagementFeaturedConsole.tsx
'use client';

import React from 'react';
import { MANAGEMENT_SERVICE_CONFIG } from '@/config/services/management';

export const ManagementFeaturedConsole: React.FC = () => {
  const { featuredConsole } = MANAGEMENT_SERVICE_CONFIG;

  return (
    <div className="w-full">
      {/* Executive Sharp Console with deep fold clearance */}
      <div
        data-motion="directive-console"
        className="mt-20 lg:mt-32 w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-6 lg:px-8 shadow-xs"
      >
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Directive Tag & Ink Heading (5 cols) */}
          <div className="col-span-5 border-r border-[#07366D]/25 pr-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1675F8]" />
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#0A5FD7]">
                {featuredConsole.tag}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#06162C] leading-snug">
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