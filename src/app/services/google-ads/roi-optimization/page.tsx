import type { Metadata } from "next";
import { ROI_OPTIMIZATION_CONTENT } from "@/config/services/roiOptimization";

import { RoiHero } from "@/components/services/google-ads/roi-optimization/RoiHero";
import { RoiFeaturedCard } from "@/components/services/google-ads/roi-optimization/RoiFeaturedCard";
import { RoiSupportingCards } from "@/components/services/google-ads/roi-optimization/RoiSupportingCards";
import { RoiOfficialResources } from "@/components/services/google-ads/roi-optimization/RoiOfficialResources";
import { RoiFaq } from "@/components/services/google-ads/roi-optimization/RoiFaq";
import { RoiCta } from "@/components/services/google-ads/roi-optimization/RoiCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: ROI_OPTIMIZATION_CONTENT.seo.title,
  description: ROI_OPTIMIZATION_CONTENT.seo.description,
};

export default function RoiOptimizationPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        <RoiHero />
        <RoiFeaturedCard />
        <RoiSupportingCards />
        <RoiOfficialResources />
        <RoiFaq />
        <RoiCta />
      </div>

      <Footer />
    </div>
  );
}