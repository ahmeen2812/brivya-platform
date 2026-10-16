import type { Metadata } from "next";
import { API_INTEGRATION_CONTENT } from "@/config/services/apiIntegration";

// Feature Components
import { ApiHero } from "@/components/services/web-development/api-integration/ApiHero";
import { ApiWhatWeDoSection } from "@/components/services/web-development/api-integration/ApiWhatWeDoSection";
import { ApiCardsSection } from "@/components/services/web-development/api-integration/ApiCardsSection";
import { ApiFaq } from "@/components/services/web-development/api-integration/ApiFaq";
import { ApiCta } from "@/components/services/web-development/api-integration/ApiCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: API_INTEGRATION_CONTENT.seo.title,
  description: API_INTEGRATION_CONTENT.seo.description,
};

export default function ApiIntegrationPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* SECTION 01 — HERO (Image 01) */}
        <ApiHero />

        {/* SECTION 02 — WHAT WE DO: Intro & Featured Card (Image 02) */}
        <ApiWhatWeDoSection />

        {/* SECTION 02 — WHAT WE DO: Cards 02, 03, 04 (Image 03 beside Card 03) */}
        <ApiCardsSection />

        {/* SECTION 03 — FREQUENTLY ASKED QUESTIONS (6 Questions) */}
        <ApiFaq />

        {/* SECTION 04 — FINAL CTA (Unfilled Bordered Layout) */}
        <ApiCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}

