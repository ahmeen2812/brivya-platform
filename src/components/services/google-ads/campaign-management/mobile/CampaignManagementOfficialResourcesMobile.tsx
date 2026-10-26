// src/components/services/google-ads/campaign-management/mobile/CampaignManagementOfficialResourcesMobile.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementOfficialResourcesMobile: React.FC = () => {
  const { officialResources } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="lg:hidden w-full py-12 px-4 bg-white/40 border-y border-[#BACFE6]">
      <div className="text-center mb-10">
        <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-[#0A5FD7]">
          {officialResources.tag}
        </span>
        <h2 className="text-2xl font-bold text-[#07366D] mt-1 mb-2">
          {officialResources.heading}
        </h2>
        <p className="text-xs text-[#475569]">
          {officialResources.subheading}
        </p>
      </div>

      <div className="space-y-8 pt-4">
        {officialResources.items.map((item) => (
          <div
            key={item.title}
            className="relative rounded-2xl border border-[#BACFE6] bg-white/90 p-5 shadow-xs"
          >
            {/* Mobile Floating Badge */}
            <div
              className={`absolute right-4 pointer-events-none z-10 ${
                item.badgePosition === 'down' ? '-bottom-5' : '-top-5'
              }`}
            >
              <Image
                src={item.badgeImage}
                alt={item.badgeAlt}
                width={68}
                height={68}
                className="w-16 h-16 object-contain drop-shadow-[0_12px_20px_rgba(7,54,109,0.22)]"
              />
            </div>

            <div className="pr-16 mb-4">
              <h3 className="text-base font-bold text-[#07366D] leading-snug mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#BACFE6]/60">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-semibold text-[#0A5FD7]"
              >
                <span>Explore Documentation</span>
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};