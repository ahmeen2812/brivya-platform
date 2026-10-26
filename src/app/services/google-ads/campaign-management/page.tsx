// src/app/services/google-ads/campaign-management/page.tsx
'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/components/shared/useIsomorphicLayoutEffect';
import { SITE_CONTACT } from '@/config/siteContact';
import { CalendlyModal } from '@/components/sections/inquiry/CalendlyModal';

// Desktop Components
import { CampaignManagementHero } from '@/components/services/google-ads/campaign-management/CampaignManagementHero';
import { CampaignManagementFeaturedCard } from '@/components/services/google-ads/campaign-management/CampaignManagementFeaturedCard';
import { CampaignManagementSupportingCards } from '@/components/services/google-ads/campaign-management/CampaignManagementSupportingCards';
import { CampaignManagementOfficialResources } from '@/components/services/google-ads/campaign-management/CampaignManagementOfficialResources';
import { CampaignManagementFaq } from '@/components/services/google-ads/campaign-management/CampaignManagementFaq';
import { CampaignManagementCta } from '@/components/services/google-ads/campaign-management/CampaignManagementCta';

// Mobile Components
import { CampaignManagementHeroMobile } from '@/components/services/google-ads/campaign-management/mobile/CampaignManagementHeroMobile';
import { CampaignManagementFeaturedCardMobile } from '@/components/services/google-ads/campaign-management/mobile/CampaignManagementFeaturedCardMobile';
import { CampaignManagementSupportingCardsMobile } from '@/components/services/google-ads/campaign-management/mobile/CampaignManagementSupportingCardsMobile';
import { CampaignManagementOfficialResourcesMobile } from '@/components/services/google-ads/campaign-management/mobile/CampaignManagementOfficialResourcesMobile';
import { CampaignManagementFaqMobile } from '@/components/services/google-ads/campaign-management/mobile/CampaignManagementFaqMobile';
import { CampaignManagementCtaMobile } from '@/components/services/google-ads/campaign-management/mobile/CampaignManagementCtaMobile';

// Animation Suite
import {
  animateCampaignHero,
  animateCampaignCards,
  animateResourceFaqCta,
} from '@/components/services/google-ads/campaign-management/animations';

// Existing Footer
import { Footer } from '@/components/footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CampaignManagementPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animateCampaignHero();
      animateCampaignCards();
      animateResourceFaqCta();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#F4F7FC] text-[#06162C] selection:bg-[#0A5FD7] selection:text-white"
    >
      {/* =========================================================================
          SECTION 01: HERO SECTION
          ========================================================================= */}
      <div className="hidden lg:block">
        <CampaignManagementHero />
      </div>
      <div className="block lg:hidden">
        <CampaignManagementHeroMobile />
      </div>

      {/* =========================================================================
          SECTION 02: MAIN EXECUTIVE DIRECTIVE CONSOLE
          ========================================================================= */}
      <div className="hidden lg:block">
        <CampaignManagementFeaturedCard />
      </div>
      <div className="block lg:hidden">
        <CampaignManagementFeaturedCardMobile />
      </div>

      {/* =========================================================================
          SECTION 03: SUPPORTING SERVICE CARDS (ALTERNATING LAYOUT)
          ========================================================================= */}
      <div className="hidden lg:block">
        <CampaignManagementSupportingCards />
      </div>
      <div className="block lg:hidden">
        <CampaignManagementSupportingCardsMobile />
      </div>

      {/* =========================================================================
          SECTION 04: OFFICIAL GOOGLE ADS RESOURCES GRID
          ========================================================================= */}
      <div className="hidden lg:block">
        <CampaignManagementOfficialResources />
      </div>
      <div className="block lg:hidden">
        <CampaignManagementOfficialResourcesMobile />
      </div>

      {/* =========================================================================
          SECTION 05: FREQUENTLY ASKED QUESTIONS ACCORDION
          ========================================================================= */}
      <div className="hidden lg:block">
        <CampaignManagementFaq />
      </div>
      <div className="block lg:hidden">
        <CampaignManagementFaqMobile />
      </div>

      {/* =========================================================================
          SECTION 06: FINAL CALL TO ACTION
          ========================================================================= */}
      <div className="hidden lg:block">
        <CampaignManagementCta onOpenCalendly={() => setIsCalendlyOpen(true)} />
      </div>
      <div className="block lg:hidden">
        <CampaignManagementCtaMobile onOpenCalendly={() => setIsCalendlyOpen(true)} />
      </div>

      {/* Existing Studio Footer (Reused, never duplicated) */}
      <Footer />

      {/* Interactive Consultation Scheduler Modal with required calendlyUrl */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={SITE_CONTACT.meeting.calendlyUrl}
      />
    </div>
  );
}