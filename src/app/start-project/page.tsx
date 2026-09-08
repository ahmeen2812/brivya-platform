import type { Metadata } from "next";
import {
  UnifiedInquiryCard,
  AsymmetricalContactPanels,
} from "@/components/sections/inquiry";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Start a Project | Brivya Solutions",
  description:
    "Let's discuss the work ahead. Discuss your web development, customer acquisition, or business automation project with Brivya Solutions.",
};

export default function StartProjectPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F4F7FC] select-none">
      {/* 
        Container Padding:
        pt-6 to pt-10 establishes breathing space under the floating navbar
      */}
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24">
        {/* 1. Main Unified Inquiry Card (45% Editorial / 55% Form) */}
        <div className="mb-14 sm:mb-18 lg:mb-20">
          <UnifiedInquiryCard />
        </div>

        {/* 2. Asymmetrical Edge-Flush Contact Panels (Right 70% / Left 70%) */}
        <AsymmetricalContactPanels />
      </div>

      {/* Existing Brivya Footer (Design Preserved 100%) */}
      <Footer />
    </div>
  );
}