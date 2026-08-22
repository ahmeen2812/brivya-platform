// src/components/services/google-ads/campaign-management/CampaignManagementOfficialResources.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementOfficialResources: React.FC = () => {
  const { ecosystem } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white/40 border-y border-[#BACFE6]">
      <div className="w-full">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[#0A5FD7]">
            {ecosystem.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#07366D] mt-2 mb-3">
            {ecosystem.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            {ecosystem.subheading}
          </p>
        </div>

        {/* 4 Cards Grid with Alternating Floating Badges (-bottom-6, -top-6) */}
        <div id="ecosystem-grid" className="grid grid-cols-4 gap-6 pt-6">
          {ecosystem.items.map((item) => (
            <div
              key={item.title}
              data-motion="ecosystem-card"
              className="relative flex flex-col justify-between rounded-2xl border border-[#BACFE6] bg-white/85 p-6 shadow-xs hover:border-[#0A5FD7] hover:-translate-y-1 transition-all group overflow-visible min-h-[350px]"
            >
              {/* Pure Transparent Floating Badge (NO white box, NO wrapper container) */}
              <div
                className={`absolute right-4 pointer-events-none z-20 transition-transform duration-300 group-hover:scale-105 ${
                  item.badgePosition === 'down' ? '-bottom-6' : '-top-6'
                }`}
              >
                <div className="relative w-[92px] h-[92px]">
                  <Image
                    src={item.badgeImage}
                    alt={item.badgeAlt}
                    width={92}
                    height={92}
                    className="w-full h-full object-contain select-none drop-shadow-[0_16px_28px_rgba(7,54,109,0.25)]"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-2 pr-6">
                <h3 className="text-base sm:text-lg font-bold text-[#07366D] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Documentation Link with Trailing Arrow */}
              <div className="pt-4 border-t border-[#BACFE6]/60 mt-auto">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono font-semibold text-[#0A5FD7] hover:text-[#07366D] transition-colors group/link"
                >
                  <span>Explore Documentation</span>
                  <span className="ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};