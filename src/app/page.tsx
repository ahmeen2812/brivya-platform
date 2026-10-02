import { HeroSection } from "@/components/hero/HeroSection";

export default function HomePage() {
  return (
    <main className="relative flex flex-col bg-[#06162C]">
      {/* 1. The Brivya Signal Engine Hero */}
      <HeroSection />

      {/* Subsequent sections: Proof Ledger, Selected Work, Growth Architecture */}
    </main>
  );
}