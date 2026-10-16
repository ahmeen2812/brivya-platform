import type { Metadata } from "next";
import { DATABASE_SYSTEMS_CONTENT } from "@/config/services/databaseSystems";

// Feature Components
import { DatabaseHero } from "@/components/services/web-development/database-systems/DatabaseHero";
import { DatabaseServicesIntro } from "@/components/services/web-development/database-systems/DatabaseServicesIntro";
import { DatabaseCardsSection } from "@/components/services/web-development/database-systems/DatabaseCardsSection";
import { DatabaseFaq } from "@/components/services/web-development/database-systems/DatabaseFaq";
import { DatabaseCta } from "@/components/services/web-development/database-systems/DatabaseCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: DATABASE_SYSTEMS_CONTENT.seo.title,
  description: DATABASE_SYSTEMS_CONTENT.seo.description,
};

export default function DatabaseSystemsPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* SECTION 01 — HERO (Image 01) */}
        <DatabaseHero />

        {/* SECTION 02 — OUR SERVICES: Intro & Featured Card (Image 02) */}
        <DatabaseServicesIntro />

        {/* SECTION 02 — OUR SERVICES: Cards 02, 03, 04 (Image 03 beside Card 03) */}
        <DatabaseCardsSection />

        {/* SECTION 03 — FREQUENTLY ASKED QUESTIONS (7 Questions) */}
        <DatabaseFaq />

        {/* SECTION 04 — FINAL CTA (Unfilled Bordered Layout) */}
        <DatabaseCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}