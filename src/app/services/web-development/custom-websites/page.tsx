import type { Metadata } from "next";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

// 5 Authoritative Section Components
import { CustomWebsitesHero } from "@/components/services/web-development/custom-websites/CustomWebsitesHero";
import { IntroductionCard } from "@/components/services/web-development/custom-websites/IntroductionCard";
import { AlternatingServiceCards } from "@/components/services/web-development/custom-websites/AlternatingServiceCards";
import { CustomWebsitesFaq } from "@/components/services/web-development/custom-websites/CustomWebsitesFaq";
import { CustomWebsitesCta } from "@/components/services/web-development/custom-websites/CustomWebsitesCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: CUSTOM_WEBSITES_CONTENT.seo.title,
  description: CUSTOM_WEBSITES_CONTENT.seo.description,
};

export default function CustomWebsitesPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      {/* Main Content Chassis */}
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* 1. Hero Section */}
        <CustomWebsitesHero />

        {/* 2. Centered Introduction Card */}
        <IntroductionCard />

        {/* 3. Three Alternating Service Cards */}
        <AlternatingServiceCards />

        {/* 4. FAQ Section */}
        <CustomWebsitesFaq />

        {/* 5. Final CTA */}
        <CustomWebsitesCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}


