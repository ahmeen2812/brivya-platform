import type { Metadata } from "next";
import { SAAS_PRODUCTS_CONTENT } from "@/config/services/saasProducts";

// Feature Components
import { SaasProductsHero } from "@/components/services/web-development/saas-products/SaasProductsHero";
import { SaasChallengesIntro } from "@/components/services/web-development/saas-products/SaasChallengesIntro";
import { SaasChallengesCards } from "@/components/services/web-development/saas-products/SaasChallengesCards";
import { SaasLifecycleGrid } from "@/components/services/web-development/saas-products/SaasLifecycleGrid";
import { SaasProductsFaq } from "@/components/services/web-development/saas-products/SaasProductsFaq";
import { SaasProductsCta } from "@/components/services/web-development/saas-products/SaasProductsCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: SAAS_PRODUCTS_CONTENT.seo.title,
  description: SAAS_PRODUCTS_CONTENT.seo.description,
};

export default function SaasProductsPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* 1. Hero Section */}
        <SaasProductsHero />

        {/* 2. Challenges Intro Card */}
        <SaasChallengesIntro />

        {/* 3. Three SaaS Challenges Cards */}
        <SaasChallengesCards />

        {/* 4. 3-Stage Lifecycle Grid */}
        <SaasLifecycleGrid />

        {/* 5. FAQ Section (4 Questions) */}
        <SaasProductsFaq />

        {/* 6. Final Unfilled CTA Section */}
        <SaasProductsCta />
      </div>

      {/* Official Brivia Footer */}
      <Footer />
    </div>
  );
}