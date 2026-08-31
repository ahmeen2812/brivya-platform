import type { Metadata } from "next";
import { GOOGLE_DISPLAY_ADS_CONTENT } from "@/config/services/googleDisplayAds";

// Feature Components
import { DisplayHero } from "@/components/services/google-ads/display/DisplayHero";
import { DisplayFeaturedCard } from "@/components/services/google-ads/display/DisplayFeaturedCard";
import { DisplaySupportingCards } from "@/components/services/google-ads/display/DisplaySupportingCards";
import { DisplayOfficialResources } from "@/components/services/google-ads/display/DisplayOfficialResources";
import { DisplayFaq } from "@/components/services/google-ads/display/DisplayFaq";
import { DisplayCta } from "@/components/services/google-ads/display/DisplayCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: GOOGLE_DISPLAY_ADS_CONTENT.seo.title,
  description: GOOGLE_DISPLAY_ADS_CONTENT.seo.description,
};

export default function GoogleDisplayAdsPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* 01. Hero Section (Image on Left, Content on Right) */}
        <DisplayHero />

        {/* 02. Main Featured Service Card (Master Substrate) */}
        <DisplayFeaturedCard />

        {/* 03. Supporting Service Cards (Alternating Layout with 2 Images) */}
        <DisplaySupportingCards />

        {/* 04. Official Google Ads Resources (4 Boxes with Enlarged 98px Badges) */}
        <DisplayOfficialResources />

        {/* 05. Frequently Asked Questions (Animated Accordion) */}
        <DisplayFaq />

        {/* 06. Final Call to Action (Unfilled Bordered Layout) */}
        <DisplayCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}