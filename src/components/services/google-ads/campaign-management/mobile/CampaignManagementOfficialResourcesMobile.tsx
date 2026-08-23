// src/components/services/google-ads/campaign-management/mobile/CampaignManagementOfficialResourcesMobile.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementOfficialResourcesMobile: React.FC = () => {
  const { ecosystem } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="w-full py-10 px-4 bg-white/40 border-y border-[#BACFE6]">
      <div className="text-center mb-8">
        <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-[#0A5FD7]">
          {ecosystem.tag}
        </span>
        <h2 className="text-2xl font-bold text-[#07366D] mt-1 mb-2">
          {ecosystem.heading}
        </h2>
        <p className="text-xs text-[#475569]">
          {ecosystem.subheading}
        </p>
      </div>

      <div className="space-y-8 pt-4">
        {ecosystem.items.map((item) => (
          <div
            key={item.title}
            className="relative rounded-2xl border border-[#BACFE6] bg-white/90 p-5 shadow-xs overflow-visible"
          >
            {/* Pure Floating Badge overlapping border (NO white box wrapper) */}
            <div
              className={`absolute right-4 pointer-events-none z-10 ${
                item.badgePosition === 'down' ? '-bottom-6' : '-top-6'
              }`}
            >
              <Image
                src={item.badgeImage}
                alt={item.badgeAlt}
                width={68}
                height={68}
                className="w-16 h-16 object-contain select-none drop-shadow-[0_16px_28px_rgba(7,54,109,0.25)]"
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