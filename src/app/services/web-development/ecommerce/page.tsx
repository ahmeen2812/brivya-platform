import type { Metadata } from "next";
import { ECOMMERCE_CONTENT } from "@/config/services/ecommerce";

// Feature Components
import { EcommerceHero } from "@/components/services/web-development/ecommerce/EcommerceHero";
import { EcommerceCards } from "@/components/services/web-development/ecommerce/EcommerceCards";
import { EcommerceFeatureSection } from "@/components/services/web-development/ecommerce/EcommerceFeatureSection";
import { EcommerceFaq } from "@/components/services/web-development/ecommerce/EcommerceFaq";
import { EcommerceCta } from "@/components/services/web-development/ecommerce/EcommerceCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: ECOMMERCE_CONTENT.seo.title,
  description: ECOMMERCE_CONTENT.seo.description,
};

export default function EcommercePage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* 1. Hero Section (Image 01) */}
        <EcommerceHero />

        {/* 2. Store Needs Intro & Alternating Cards (Image 02 beside Card 02) */}
        <EcommerceCards />

        {/* 3. Built for Customers / Practical for Business Showcase (Image 03) */}
        <EcommerceFeatureSection />

        {/* 4. FAQ Section (4 Questions) */}
        <EcommerceFaq />

        {/* 5. Final Unfilled CTA Section */}
        <EcommerceCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}



