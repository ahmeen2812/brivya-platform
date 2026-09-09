import { HeroSection } from "@/components/hero/HeroSection";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us/index";
import { ProjectResultsSection } from "@/components/sections/results";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FFFFFF]">
      {/* 1. Existing Hero Section */}
      <HeroSection />

      {/* 2. Why Work With Brivya (Three Cards) */}
      <WhyChooseUsSection />

      {/* 3. Delivery Record & Performance Metrics */}
      <ProjectResultsSection />

      {/* 4. Google + Trustpilot Trust Header & 3D Testimonial Carousel */}
      <TestimonialsSection />

      {/* 5. Refined Brivya Footer */}
      <Footer />
    </div>
  );
}