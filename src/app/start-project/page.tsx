import type { Metadata } from "next";
import {
  InquiryHeroIntro,
  InquiryForm,
  AsymmetricalContactPanels,
} from "@/components/sections/inquiry";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Start a Project | Brivya Solutions",
  description:
    "Let's talk about what you're building. Discuss your web application, customer acquisition campaigns, or business automation project with Brivya Solutions.",
};

export default function StartProjectPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F4F7FC] select-none">
      {/* Main Content Area */}
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24">
        {/* 
          SECTION 1: Two-Column Main Content
          - Left: Introduction & Dedicated PNG Illustration Bay (~46%)
          - Right: Project Inquiry Form Panel (~54%)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16 sm:mb-20 lg:mb-24">
          <div className="lg:col-span-5 xl:col-span-5">
            <InquiryHeroIntro />
          </div>

          <div className="lg:col-span-7 xl:col-span-7">
            <InquiryForm />
          </div>
        </div>

        {/* 
          SECTION 2: Two Asymmetrical 70%-Width Contact Panels
          - Card 1: Direct Contact (Aligned Right, 70% width)
          - Card 2: Where to Find Us (Aligned Left, 70% width)
        */}
        <AsymmetricalContactPanels />
      </div>

      {/* Existing Brivya Footer (Design Preserved 100%) */}
      <Footer />
    </div>
  );
}