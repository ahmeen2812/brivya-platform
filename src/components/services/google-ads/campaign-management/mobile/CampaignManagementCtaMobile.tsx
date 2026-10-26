// src/components/services/google-ads/campaign-management/mobile/CampaignManagementCtaMobile.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

interface CampaignManagementCtaMobileProps {
  onOpenCalendly: () => void;
}

export const CampaignManagementCtaMobile: React.FC<CampaignManagementCtaMobileProps> = ({
  onOpenCalendly,
}) => {
  const { cta } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="lg:hidden w-full pb-16 px-4">
      <div className="w-full rounded-2xl border border-[#BACFE6] bg-transparent p-6 text-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#0A5FD7]/10 text-[#0A5FD7] border border-[#0A5FD7]/25 mb-3">
          {cta.badge}
        </span>
        <h2 className="text-2xl font-bold text-[#07366D] mb-3 leading-snug">
          {cta.heading}
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
          {cta.description}
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href={cta.primaryButtonUrl}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#07366D] to-[#0A5FD7] text-white text-xs font-semibold shadow-md active:scale-[0.98] transition-all"
          >
            {cta.primaryButtonText} →
          </Link>
          <button
            type="button"
            onClick={onOpenCalendly}
            className="w-full py-3 rounded-xl border border-[#BACFE6] bg-white text-[#07366D] text-xs font-semibold active:scale-[0.98] transition-all"
          >
            {cta.secondaryButtonText} ↗
          </button>
        </div>
      </div>
    </section>
  );
};