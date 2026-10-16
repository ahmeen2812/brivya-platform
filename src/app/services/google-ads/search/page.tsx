import type { Metadata } from "next";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";

// Feature Components
import { SearchHero } from "@/components/services/google-ads/search/SearchHero";
import { SearchServicesIntro } from "@/components/services/google-ads/search/SearchServicesIntro";
import { SearchCardsSection } from "@/components/services/google-ads/search/SearchCardsSection";
import { SearchFaq } from "@/components/services/google-ads/search/SearchFaq";
import { SearchCta } from "@/components/services/google-ads/search/SearchCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: GOOGLE_SEARCH_ADS_CONTENT.seo.title,
  description: GOOGLE_SEARCH_ADS_CONTENT.seo.description,
};

export default function GoogleSearchAdsPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* SECTION 01 — HERO (Image 01) */}
        <SearchHero />

        {/* SECTION 02 — GOOGLE SEARCH ADS SERVICES: Intro & Featured Card (Image 02) */}
        <SearchServicesIntro />

        {/* SECTION 02 — GOOGLE SEARCH ADS SERVICES: Cards 02, 03, 04 (Image 03 beside Card 03) */}
        <SearchCardsSection />

        {/* SECTION 03 — FREQUENTLY ASKED QUESTIONS (7 Questions with Animated Accordion) */}
        <SearchFaq />

        {/* SECTION 04 — FINAL CTA (Unfilled Bordered Layout) */}
        <SearchCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}