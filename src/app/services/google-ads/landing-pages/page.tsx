import type { Metadata } from "next";
import { LANDING_PAGES_CONTENT } from "@/config/services/landingPages";

// Feature Components
import { LandingPagesHero } from "@/components/services/google-ads/landing-pages/LandingPagesHero";
import { LandingPagesFeaturedCard } from "@/components/services/google-ads/landing-pages/LandingPagesFeaturedCard";
import { LandingPagesSupportingCards } from "@/components/services/google-ads/landing-pages/LandingPagesSupportingCards";
import { LandingPagesOfficialResources } from "@/components/services/google-ads/landing-pages/LandingPagesOfficialResources";
import { LandingPagesFaq } from "@/components/services/google-ads/landing-pages/LandingPagesFaq";
import { LandingPagesCta } from "@/components/services/google-ads/landing-pages/LandingPagesCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: LANDING_PAGES_CONTENT.seo.title,
  description: LANDING_PAGES_CONTENT.seo.description,
};

export default function LandingPagesOptimizationPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* 01. Hero Section (Image on Left, Content on Right) */}
        <LandingPagesHero />

        {/* 02. Main Featured Service Card (Master Substrate) */}
        <LandingPagesFeaturedCard />

        {/* 03. Supporting Service Cards (Alternating Layout with 2 Images) */}
        <LandingPagesSupportingCards />

        {/* 04. Official Google Optimization Resources (4 Boxes with 98px Badges) */}
        <LandingPagesOfficialResources />

        {/* 05. Frequently Asked Questions (Animated Accordion) */}
        <LandingPagesFaq />

        {/* 06. Final Call to Action (Unfilled Bordered Layout) */}
        <LandingPagesCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}