// src/app/services/google-ads/campaign-management/page.tsx
'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/components/shared/useIsomorphicLayoutEffect';
import { SITE_CONTACT } from '@/config/siteContact';
import { CalendlyModal } from '@/components/sections/inquiry/CalendlyModal';
import { Footer } from '@/components/footer';

import {
  CampaignManagementHero,
  CampaignManagementFeaturedCard,
  CampaignManagementSupportingCards,
  CampaignManagementOfficialResources,
  CampaignManagementFaq,
  CampaignManagementCta,
  CampaignManagementHeroMobile,
  CampaignManagementFeaturedCardMobile,
  CampaignManagementSupportingCardsMobile,
  CampaignManagementOfficialResourcesMobile,
  CampaignManagementFaqMobile,
  CampaignManagementCtaMobile,
  animateHero,
  animateCards,
  animateResourceFaqCta,
} from '@/components/services/google-ads/campaign-management';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CampaignManagementPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateHero();
      animateCards();
      animateResourceFaqCta();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-clip bg-[#F4F7FC] text-[#06162C] selection:bg-[#0A5FD7] selection:text-white"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            SECTION 01: HERO DIRECTIVE (FLIPPED LAYOUT)
            ========================================================================= */}
        <div className="hidden lg:block">
          <CampaignManagementHero />
        </div>
        <div className="block lg:hidden">
          <CampaignManagementHeroMobile />
        </div>

        {/* =========================================================================
            SECTION 02: MAIN EXECUTIVE TERMINAL (DIRECTIVE CONSOLE)
            ========================================================================= */}
        <div className="hidden lg:block">
          <CampaignManagementFeaturedCard />
        </div>
        <div className="block lg:hidden">
          <CampaignManagementFeaturedCardMobile />
        </div>

        {/* =========================================================================
            SECTION 03: ALTERNATING CAPABILITY SYSTEM
            ========================================================================= */}
        <div className="hidden lg:block">
          <CampaignManagementSupportingCards />
        </div>
        <div className="block lg:hidden">
          <CampaignManagementSupportingCardsMobile />
        </div>

        {/* =========================================================================
            SECTION 04: NATIVE OFFICIAL INTEGRATIONS (FLOATING SUBSTRATE BLOCKS)
            ========================================================================= */}
        <div className="hidden lg:block">
          <CampaignManagementOfficialResources />
        </div>
        <div className="block lg:hidden">
          <CampaignManagementOfficialResourcesMobile />
        </div>

        {/* =========================================================================
            SECTION 05: EXPANDING INTERROGATIVE MATRIX (FAQS)
            ========================================================================= */}
        <div className="hidden lg:block">
          <CampaignManagementFaq />
        </div>
        <div className="block lg:hidden">
          <CampaignManagementFaqMobile />
        </div>

        {/* =========================================================================
            SECTION 06: TERMINAL CONCLUSION NODE (CONVERSION ANCHOR)
            ========================================================================= */}
        <div className="hidden lg:block">
          <CampaignManagementCta onOpenCalendly={() => setIsCalendlyOpen(true)} />
        </div>
        <div className="block lg:hidden">
          <CampaignManagementCtaMobile onOpenCalendly={() => setIsCalendlyOpen(true)} />
        </div>
      </div>

      {/* Global Existing Studio Footer (Reused, never duplicated) */}
      <Footer />

      {/* In-Page Consultation Scheduler Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={SITE_CONTACT.meeting.calendlyUrl}
      />
    </div>
  );
}