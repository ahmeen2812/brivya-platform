import type { Metadata } from "next";
import { CAMPAIGN_MANAGEMENT_CONTENT } from "@/config/services/campaignManagement";

import { ManagementHero } from "@/components/services/google-ads/management/ManagementHero";
import { ManagementFeaturedCard } from "@/components/services/google-ads/management/ManagementFeaturedCard";
import { ManagementSupportingCards } from "@/components/services/google-ads/management/ManagementSupportingCards";
import { ManagementOfficialResources } from "@/components/services/google-ads/management/ManagementOfficialResources";
import { ManagementFaq } from "@/components/services/google-ads/management/ManagementFaq";
import { ManagementCta } from "@/components/services/google-ads/management/ManagementCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: CAMPAIGN_MANAGEMENT_CONTENT.seo.title,
  description: CAMPAIGN_MANAGEMENT_CONTENT.seo.description,
};

export default function CampaignManagementPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        <ManagementHero />
        <ManagementFeaturedCard />
        <ManagementSupportingCards />
        <ManagementOfficialResources />
        <ManagementFaq />
        <ManagementCta />
      </div>

      <Footer />
    </div>
  );
}