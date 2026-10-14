import type { Metadata } from "next";
import { WEB_APPLICATIONS_CONTENT } from "@/config/services/webApplications";

// Authoritative Feature Components
import { WebApplicationsHero } from "@/components/services/web-development/web-applications/WebApplicationsHero";
import { WebApplicationsIntro } from "@/components/services/web-development/web-applications/WebApplicationsIntro";
import { WebApplicationsCards } from "@/components/services/web-development/web-applications/WebApplicationsCards";
import { WebApplicationsFaq } from "@/components/services/web-development/web-applications/WebApplicationsFaq";
import { WebApplicationsCta } from "@/components/services/web-development/web-applications/WebApplicationsCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: WEB_APPLICATIONS_CONTENT.seo.title,
  description: WEB_APPLICATIONS_CONTENT.seo.description,
};

export default function WebApplicationsPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      {/* Container Chassis */}
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* 1. Hero Section (Heading left, illustration right) */}
        <WebApplicationsHero />

        {/* 2. Introduction Card (What We Help You Solve) */}
        <WebApplicationsIntro />

        {/* 3. Three Solution Cards (Alternating 80% -> 70% + Graphic -> 80%) */}
        <WebApplicationsCards />

        {/* 4. FAQ Section (Bordered container with 3 expandable rows) */}
        <WebApplicationsFaq />

        {/* 5. Final CTA Section (Unfilled bordered container with Calendly modal bridge) */}
        <WebApplicationsCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}