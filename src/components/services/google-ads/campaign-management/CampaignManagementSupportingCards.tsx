// src/components/services/google-ads/campaign-management/CampaignManagementSupportingCards.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementSupportingCards: React.FC = () => {
  const { supportingCards } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* =========================================================================
            CARD 01: Right-Aligned (80% width), square right corners, right fade
            ========================================================================= */}
        <div data-motion="service-card" className="w-full flex justify-end">
          <div className="relative w-full lg:w-[80%] rounded-l-3xl rounded-r-none border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-10 lg:p-12 shadow-lg [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] overflow-hidden">
            {/* Seamless edge fade into canvas */}
            <div className="absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-r from-transparent to-[#F4F7FC] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#0A5FD7]">
                {supportingCards.card01.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07366D] mt-2 mb-4">
                {supportingCards.card01.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                {supportingCards.card01.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#BACFE6]/60 font-mono text-xs text-[#07366D]">
                {supportingCards.card01.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="text-[#0A5FD7] block text-[10px] uppercase font-semibold">
                      {metric.label}
                    </span>
                    {metric.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARD 02: Left-Aligned (70% width), square left corners, left fade + Image 02 (30%)
            ========================================================================= */}
        <div data-motion="service-card" className="w-full flex flex-col lg:flex-row items-stretch gap-6">
          <div className="relative w-full lg:w-[70%] rounded-r-3xl rounded-l-none border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-10 lg:p-12 shadow-lg [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] overflow-hidden">
            {/* Seamless edge fade into canvas */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-l from-transparent to-[#F4F7FC] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#0A5FD7]">
                {supportingCards.card02.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07366D] mt-2 mb-4">
                {supportingCards.card02.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                {supportingCards.card02.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#BACFE6]/60 font-mono text-xs text-[#07366D]">
                {supportingCards.card02.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="text-[#0A5FD7] block text-[10px] uppercase font-semibold">
                      {metric.label}
                    </span>
                    {metric.value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image 02 Companion (30% width) */}
          <div className="w-full lg:w-[30%] rounded-3xl border border-[#BACFE6] bg-white/70 p-6 flex flex-col justify-between shadow-xs">
            <span className="text-[11px] font-mono text-[#0A5FD7] tracking-wider uppercase font-semibold">
              DIAGNOSTIC_TELEMETRY // QUERY_HEALTH
            </span>
            <div className="my-auto py-4 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
                <Image
                  src={supportingCards.card02.companionImage}
                  alt={supportingCards.card02.companionAlt}
                  width={240}
                  height={320}
                  className="w-full h-auto object-contain select-none drop-shadow-md"
                />
              </div>
              <span className="font-mono text-xl font-bold text-[#07366D] mt-2">SEARCH TERM PURITY</span>
              <span className="text-xs text-[#475569] text-center">Irrelevant clicks filtered daily</span>
            </div>
            <div className="text-[11px] font-mono text-[#64748B] text-center border-t border-[#BACFE6]/50 pt-3">
              WASTE_REDUCTION // VERIFIED
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARD 03: Image 03 Left (30%) + Right-Aligned Card (70%), square right corners
            ========================================================================= */}
        <div data-motion="service-card" className="w-full flex flex-col-reverse lg:flex-row items-stretch gap-6">
          {/* Image 03 Companion (30% width) */}
          <div className="w-full lg:w-[30%] rounded-3xl border border-[#BACFE6] bg-white/70 p-6 flex flex-col justify-between shadow-xs">
            <span className="text-[11px] font-mono text-[#0A5FD7] tracking-wider uppercase font-semibold">
              EXPERIMENTATION // SPLIT_ENGINE
            </span>
            <div className="my-auto py-4 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[220px] aspect-square flex items-center justify-center">
                <Image
                  src={supportingCards.card03.companionImage}
                  alt={supportingCards.card03.companionAlt}
                  width={280}
                  height={220}
                  className="w-full h-auto object-contain select-none drop-shadow-md"
                />
              </div>
              <span className="font-mono text-xl font-bold text-[#07366D] mt-2">CONFIDENCE 95%+</span>
              <span className="text-xs text-[#475569] text-center">Rigorous statistical evaluation</span>
            </div>
            <div className="text-[11px] font-mono text-[#64748B] text-center border-t border-[#BACFE6]/50 pt-3">
              ISOLATED_TESTING_PROTOCOL
            </div>
          </div>

          {/* Right-Aligned Card (70% width), square right corners */}
          <div className="relative w-full lg:w-[70%] rounded-l-3xl rounded-r-none border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-10 lg:p-12 shadow-lg [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] overflow-hidden">
            {/* Seamless edge fade into canvas */}
            <div className="absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-r from-transparent to-[#F4F7FC] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#0A5FD7]">
                {supportingCards.card03.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07366D] mt-2 mb-4">
                {supportingCards.card03.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                {supportingCards.card03.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#BACFE6]/60 font-mono text-xs text-[#07366D]">
                {supportingCards.card03.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="text-[#0A5FD7] block text-[10px] uppercase font-semibold">
                      {metric.label}
                    </span>
                    {metric.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARD 04: Left-Aligned (80% width), square left corners, left fade
            ========================================================================= */}
        <div data-motion="service-card" className="w-full flex justify-start">
          <div className="relative w-full lg:w-[80%] rounded-r-3xl rounded-l-none border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-10 lg:p-12 shadow-lg [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] overflow-hidden">
            {/* Seamless edge fade into canvas */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-l from-transparent to-[#F4F7FC] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#0A5FD7]">
                {supportingCards.card04.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07366D] mt-2 mb-4">
                {supportingCards.card04.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                {supportingCards.card04.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#BACFE6]/60 font-mono text-xs text-[#07366D]">
                {supportingCards.card04.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="text-[#0A5FD7] block text-[10px] uppercase font-semibold">
                      {metric.label}
                    </span>
                    {metric.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};