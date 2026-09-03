import type { Metadata } from "next";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";

// Feature Components
import { SearchHero } from "@/components/services/google-ads/search/SearchHero";
import { SearchFeaturedCard } from "@/components/services/google-ads/search/SearchFeaturedCard";
import { SearchSupportingCards } from "@/components/services/google-ads/search/SearchSupportingCards";
import { SearchOfficialResources } from "@/components/services/google-ads/search/SearchOfficialResources";
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
        {/* 01. Hero Section (Image on Left, Content on Right) */}
        <SearchHero />

        {/* 02. Main Featured Service Card (Master Substrate) */}
        <SearchFeaturedCard />

        {/* 03. Supporting Service Cards (Web Development Alternating Layout) */}
        <SearchSupportingCards />

        {/* 04. Official Google Ads Resources (4 Boxes Row with Links) */}
        <SearchOfficialResources />

        {/* 05. Frequently Asked Questions (Animated Accordion) */}
        <SearchFaq />

        {/* 06. Final Call to Action (Unfilled Bordered Layout) */}
        <SearchCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}