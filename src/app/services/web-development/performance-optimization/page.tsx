import type { Metadata } from "next";
import { PERFORMANCE_OPTIMIZATION_CONTENT } from "@/config/services/performanceOptimization";

// Feature Components
import { PerformanceHero } from "@/components/services/web-development/performance-optimization/PerformanceHero";
import { PerformanceServicesIntro } from "@/components/services/web-development/performance-optimization/PerformanceServicesIntro";
import { PerformanceCardsSection } from "@/components/services/web-development/performance-optimization/PerformanceCardsSection";
import { PerformanceFaq } from "@/components/services/web-development/performance-optimization/PerformanceFaq";
import { PerformanceCta } from "@/components/services/web-development/performance-optimization/PerformanceCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: PERFORMANCE_OPTIMIZATION_CONTENT.seo.title,
  description: PERFORMANCE_OPTIMIZATION_CONTENT.seo.description,
};

export default function PerformanceOptimizationPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* SECTION 01 — HERO (Image 01) */}
        <PerformanceHero />

        {/* SECTION 02 — OUR SERVICES: Intro & Featured Card (Image 02) */}
        <PerformanceServicesIntro />

        {/* SECTION 02 — OUR SERVICES: Cards 02, 03, 04 (Image 03 beside Card 03) */}
        <PerformanceCardsSection />

        {/* SECTION 03 — FREQUENTLY ASKED QUESTIONS (8 Questions with Animated Accordion) */}
        <PerformanceFaq />

        {/* SECTION 04 — FINAL CTA (Unfilled Bordered Layout) */}
        <PerformanceCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}