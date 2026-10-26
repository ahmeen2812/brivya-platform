// src/components/services/google-ads/campaign-management/mobile/CampaignManagementSupportingCardsMobile.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementSupportingCardsMobile: React.FC = () => {
  const { supportingCards } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="lg:hidden w-full py-10 px-4 space-y-6">
      {/* Card 01 */}
      <div className="rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-md">
        <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#0A5FD7]">
          {supportingCards.card01.tag}
        </span>
        <h3 className="text-xl font-bold text-[#07366D] mt-1 mb-2">
          {supportingCards.card01.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
          {supportingCards.card01.description}
        </p>
        <div className="grid grid-cols-1 gap-2 pt-3 border-t border-[#BACFE6]/60 font-mono text-[11px] text-[#07366D]">
          {supportingCards.card01.metrics.map((m) => (
            <div key={m.label} className="flex justify-between">
              <span className="text-[#0A5FD7] uppercase">{m.label}:</span>
              <span className="font-semibold">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 02 + Companion */}
      <div className="rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-md space-y-4">
        <div>
          <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#0A5FD7]">
            {supportingCards.card02.tag}
          </span>
          <h3 className="text-xl font-bold text-[#07366D] mt-1 mb-2">
            {supportingCards.card02.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
            {supportingCards.card02.description}
          </p>
          <div className="grid grid-cols-1 gap-2 pt-3 border-t border-[#BACFE6]/60 font-mono text-[11px] text-[#07366D]">
            {supportingCards.card02.metrics.map((m) => (
              <div key={m.label} className="flex justify-between">
                <span className="text-[#0A5FD7] uppercase">{m.label}:</span>
                <span className="font-semibold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/80 rounded-xl p-4 flex items-center justify-center border border-[#BACFE6]">
          <Image
            src={supportingCards.card02.companionImage}
            alt={supportingCards.card02.companionAlt}
            width={160}
            height={200}
            className="w-auto h-32 object-contain"
          />
        </div>
      </div>

      {/* Card 03 + Companion */}
      <div className="rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-md space-y-4">
        <div>
          <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#0A5FD7]">
            {supportingCards.card03.tag}
          </span>
          <h3 className="text-xl font-bold text-[#07366D] mt-1 mb-2">
            {supportingCards.card03.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
            {supportingCards.card03.description}
          </p>
          <div className="grid grid-cols-1 gap-2 pt-3 border-t border-[#BACFE6]/60 font-mono text-[11px] text-[#07366D]">
            {supportingCards.card03.metrics.map((m) => (
              <div key={m.label} className="flex justify-between">
                <span className="text-[#0A5FD7] uppercase">{m.label}:</span>
                <span className="font-semibold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/80 rounded-xl p-4 flex items-center justify-center border border-[#BACFE6]">
          <Image
            src={supportingCards.card03.companionImage}
            alt={supportingCards.card03.companionAlt}
            width={200}
            height={160}
            className="w-auto h-28 object-contain"
          />
        </div>
      </div>

      {/* Card 04 */}
      <div className="rounded-2xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 shadow-md">
        <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#0A5FD7]">
          {supportingCards.card04.tag}
        </span>
        <h3 className="text-xl font-bold text-[#07366D] mt-1 mb-2">
          {supportingCards.card04.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
          {supportingCards.card04.description}
        </p>
        <div className="grid grid-cols-1 gap-2 pt-3 border-t border-[#BACFE6]/60 font-mono text-[11px] text-[#07366D]">
          {supportingCards.card04.metrics.map((m) => (
            <div key={m.label} className="flex justify-between">
              <span className="text-[#0A5FD7] uppercase">{m.label}:</span>
              <span className="font-semibold">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};