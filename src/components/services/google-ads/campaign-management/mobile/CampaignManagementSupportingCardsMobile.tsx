// src/components/services/google-ads/campaign-management/mobile/CampaignManagementSupportingCardsMobile.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementSupportingCardsMobile: React.FC = () => {
  const { supportingCards } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="w-full py-8 px-4 space-y-6">
      {/* Card 01 */}
      <div className="rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)]">
        <h3 className="text-xl font-bold text-[#07366D] mb-2">
          {supportingCards.card01.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
          {supportingCards.card01.description}
        </p>
      </div>

      {/* Card 02 + Floating Mockup */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)]">
          <h3 className="text-xl font-bold text-[#07366D] mb-2">
            {supportingCards.card02.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {supportingCards.card02.description}
          </p>
        </div>
        {supportingCards.card02.companionImage && (
          <div className="flex items-center justify-center py-2">
            <Image
              src={supportingCards.card02.companionImage}
              alt={supportingCards.card02.companionAlt || 'Companion graphic'}
              width={280}
              height={200}
              className="w-auto max-h-44 object-contain select-none drop-shadow-[0_16px_28px_rgba(7,54,109,0.18)]"
            />
          </div>
        )}
      </div>

      {/* Card 03 + Floating Mockup */}
      <div className="space-y-4">
        {supportingCards.card03.companionImage && (
          <div className="flex items-center justify-center py-2">
            <Image
              src={supportingCards.card03.companionImage}
              alt={supportingCards.card03.companionAlt || 'Companion graphic'}
              width={280}
              height={200}
              className="w-auto max-h-44 object-contain select-none drop-shadow-[0_16px_28px_rgba(7,54,109,0.18)]"
            />
          </div>
        )}
        <div className="rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)]">
          <h3 className="text-xl font-bold text-[#07366D] mb-2">
            {supportingCards.card03.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {supportingCards.card03.description}
          </p>
        </div>
      </div>

      {/* Card 04 */}
      <div className="rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-sm [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)]">
        <h3 className="text-xl font-bold text-[#07366D] mb-2">
          {supportingCards.card04.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
          {supportingCards.card04.description}
        </p>
      </div>
    </section>
  );
};