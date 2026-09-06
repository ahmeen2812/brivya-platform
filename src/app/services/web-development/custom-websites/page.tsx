import type { Metadata } from "next";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";
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
    <div className="relative w-full overflow-hidden bg-[#F4F7FC]">
      {/* Main Content Chassis */}
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20">
        {/* 1. Hero Section (Heading & description left, illustration right) */}
        <CustomWebsitesHero />

        {/* 2. Centered Introduction Card (What Is Custom Website Development?) */}
        <IntroductionCard />

        {/* 3, 4, 5. Three Service Cards (Right -> Left -> Right Alternating ~70% Width) */}
        <AlternatingServiceCards />

        {/* 6. FAQ Section (Bordered container with expandable rows) */}
        <CustomWebsitesFaq />

        {/* 7. Final Call to Action (Contact Us + Book a Consultation) */}
        <CustomWebsitesCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}