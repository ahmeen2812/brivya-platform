import type { Metadata } from "next";
import { CONVERSION_TRACKING_CONTENT } from "@/config/services/conversionTracking";

// Feature Components
import { ConversionHero } from "@/components/services/google-ads/conversion-tracking/ConversionHero";
import { ConversionFeaturedCard } from "@/components/services/google-ads/conversion-tracking/ConversionFeaturedCard";
import { ConversionSupportingCards } from "@/components/services/google-ads/conversion-tracking/ConversionSupportingCards";
import { ConversionOfficialResources } from "@/components/services/google-ads/conversion-tracking/ConversionOfficialResources";
import { ConversionFaq } from "@/components/services/google-ads/conversion-tracking/ConversionFaq";
import { ConversionCta } from "@/components/services/google-ads/conversion-tracking/ConversionCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: CONVERSION_TRACKING_CONTENT.seo.title,
  description: CONVERSION_TRACKING_CONTENT.seo.description,
};

export default function ConversionTrackingPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* 01. Hero Section (Image on Left, Content on Right) */}
        <ConversionHero />

        {/* 02. Main Featured Service Card (Master Substrate) */}
        <ConversionFeaturedCard />

        {/* 03. Supporting Service Cards (Alternating Layout with 2 Images) */}
        <ConversionSupportingCards />

        {/* 04. Official Google Measurement Resources (4 Boxes with 98px Badges) */}
        <ConversionOfficialResources />

        {/* 05. Frequently Asked Questions (Animated Accordion) */}
        <ConversionFaq />

        {/* 06. Final Call to Action (Unfilled Bordered Layout) */}
        <ConversionCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}