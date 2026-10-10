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
import { PrecisionInPracticeSection } from "@/components/sections/precision";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <HeroSection />
      
      <PrecisionInPracticeSection />
      
      <WhyChooseUsSection />
      
    </div>
  );
}