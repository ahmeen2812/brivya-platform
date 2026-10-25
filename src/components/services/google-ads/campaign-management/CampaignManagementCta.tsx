// src/components/services/google-ads/campaign-management/CampaignManagementCta.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

interface CampaignManagementCtaProps {
  onOpenCalendly: () => void;
}

export const CampaignManagementCta: React.FC<CampaignManagementCtaProps> = ({
  onOpenCalendly,
}) => {
  const { cta } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="relative w-full pb-20 sm:pb-24 lg:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unfilled Bordered Layout */}
        <div
          data-motion="cta-container"
          className="w-full rounded-3xl border border-[#BACFE6] bg-transparent p-8 sm:p-10 lg:p-14 text-center shadow-xs"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-[#0A5FD7]/10 text-[#0A5FD7] border border-[#0A5FD7]/25 mb-4">
            {cta.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#07366D] max-w-2xl mx-auto mb-4 leading-tight">
            {cta.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-xl mx-auto mb-8 leading-relaxed">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary: Start a Project */}
            <Link
              href={cta.primaryButtonUrl}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#07366D] to-[#0A5FD7] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
            >
              {cta.primaryButtonText} →
            </Link>

            {/* Secondary: Book a Consultation */}
            <button
              type="button"
              onClick={onOpenCalendly}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#BACFE6] bg-white text-[#07366D] text-sm font-semibold tracking-wide hover:bg-[#E1E7EF] hover:border-[#0A5FD7] active:scale-[0.98] transition-all"
            >
              {cta.secondaryButtonText} ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};