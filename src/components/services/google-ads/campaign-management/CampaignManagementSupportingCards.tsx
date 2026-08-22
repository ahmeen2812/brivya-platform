// src/components/services/google-ads/campaign-management/CampaignManagementSupportingCards.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementSupportingCards: React.FC = () => {
  const { supportingCards } = CAMPAIGN_MANAGEMENT_CONFIG;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24">
      <div className="space-y-12 sm:space-y-16">
        {/* =========================================================================
            CARD 01: 80% Right Aligned (ml-auto), square right corners, right edge fade
            ========================================================================= */}
        <div data-motion="service-card" className="w-full flex justify-end">
          <div className="relative w-[80%] ml-auto rounded-l-3xl rounded-r-none border border-r-0 border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-10 lg:p-12 shadow-sm [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#0A5FD7]/40">
            {/* Absolute Alpha Edge Gradient Mask */}
            <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#F4F7FC]/40 to-[#F4F7FC] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07366D] mb-4">
                {supportingCards.card01.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {supportingCards.card01.description}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARD 02: 70% Left Aligned, square left corners, left edge fade
                    + External Image 02 on the Right (30% width) FLOATING ON #F4F7FC
            ========================================================================= */}
        <div className="w-full flex items-center gap-6">
          <div
            data-motion="service-card"
            className="relative w-[70%] rounded-r-3xl rounded-l-none border border-l-0 border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-10 lg:p-12 shadow-sm [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#0A5FD7]/40"
          >
            {/* Alpha Edge Gradient Mask */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-l from-transparent via-[#F4F7FC]/40 to-[#F4F7FC] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07366D] mb-4">
                {supportingCards.card02.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {supportingCards.card02.description}
              </p>
            </div>
          </div>

          {/* External Image 02 (30% scope) — FLOATING ON CANVAS (NO CONTAINER BOX) */}
          <div
            data-motion="floating-mockup"
            data-mockup-side="right"
            className="w-[30%] flex items-center justify-center p-4 will-change-transform"
          >
            {supportingCards.card02.companionImage && (
              <div className="relative w-full max-w-[320px]">
                <Image
                  src={supportingCards.card02.companionImage}
                  alt={supportingCards.card02.companionAlt || 'Campaign Diagnostic Mockup'}
                  width={380}
                  height={280}
                  className="w-full h-auto object-contain select-none drop-shadow-[0_20px_35px_rgba(7,54,109,0.22)]"
                />
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            CARD 03: External Image 03 on the Left (30% width) FLOATING ON #F4F7FC
                    + 70% Card Right Aligned (ml-auto), square right corners, right edge fade
            ========================================================================= */}
        <div className="w-full flex items-center gap-6">
          {/* External Image 03 (30% scope) — FLOATING ON CANVAS (NO CONTAINER BOX) */}
          <div
            data-motion="floating-mockup"
            data-mockup-side="left"
            className="w-[30%] flex items-center justify-center p-4 will-change-transform"
          >
            {supportingCards.card03.companionImage && (
              <div className="relative w-full max-w-[280px]">
                <Image
                  src={supportingCards.card03.companionImage}
                  alt={supportingCards.card03.companionAlt || 'Mobile Diagnostics Mockup'}
                  width={320}
                  height={380}
                  className="w-full h-auto object-contain select-none drop-shadow-[0_20px_35px_rgba(7,54,109,0.22)]"
                />
              </div>
            )}
          </div>

          {/* Right-Aligned Card (70% scope), square right, alpha edge fade */}
          <div
            data-motion="service-card"
            className="relative w-[70%] ml-auto rounded-l-3xl rounded-r-none border border-r-0 border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-10 lg:p-12 shadow-sm [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#0A5FD7]/40"
          >
            <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#F4F7FC]/40 to-[#F4F7FC] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07366D] mb-4">
                {supportingCards.card03.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {supportingCards.card03.description}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARD 04: 80% Left Aligned (mr-auto), square left corners, left edge fade
            ========================================================================= */}
        <div data-motion="service-card" className="w-full flex justify-start">
          <div className="relative w-[80%] mr-auto rounded-r-3xl rounded-l-none border border-l-0 border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-10 lg:p-12 shadow-sm [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#0A5FD7]/40">
            <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-l from-transparent via-[#F4F7FC]/40 to-[#F4F7FC] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07366D] mb-4">
                {supportingCards.card04.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {supportingCards.card04.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};