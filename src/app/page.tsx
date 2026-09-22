// import { HeroSection } from "@/components/hero/HeroSection";
// import { PrecisionInPracticeSection } from "@/components/sections/precision";

// export default function HomePage() {
//   return (
//     <div className="relative w-full">
//       {/* 1. The Hero Section (Unchanged & 100% Intact) */}
//       <HeroSection />

//       {/* 2. Precision in Practice Section (Direction 1 - Audited Credibility & Proof) */}
//       <PrecisionInPracticeSection />
//     </div>
//   );
// }
import { HeroSection } from "@/components/hero/HeroSection";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us/index";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FFFFFF]">
      {/* 1. The Approved Hero Section (100% Intact) */}
      <HeroSection />

      {/* 2. Why Work With Brivya Section with In-Flow Trust Presentation */}
      <WhyChooseUsSection />

      {/* 3. New Client Testimonial Carousel */}
      <TestimonialsSection />
    </div>
  );
}