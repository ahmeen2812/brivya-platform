import { HeroSection } from "@/components/hero/HeroSection";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us/index";
import { ProjectResultsSection } from "@/components/sections/results";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FFFFFF]">
      {/* 1. Existing Hero Section (Approved & Protected) */}
      <HeroSection />

      {/* 2. Why Work With Brivya — Three Cards (Approved & Protected) */}
      <WhyChooseUsSection />

      {/* 3. NEW PROJECT RESULTS SECTION (Delivery Record) */}
      <ProjectResultsSection />

      {/* 4. Google + Trustpilot & 5. Existing Testimonials Carousel */}
      <TestimonialsSection />
    </div>
  );
}