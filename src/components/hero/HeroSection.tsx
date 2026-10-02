"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { HeroContent } from "./HeroContent";

// Dynamically import Three.js canvas to eliminate SSR evaluation and maintain fast TTFB
const DynamicHeroSignalCanvas = dynamic(
  () =>
    import("./HeroSignalEngineCanvas").then((mod) => mod.HeroSignalEngineCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center border border-[rgba(137,152,173,0.12)] bg-[#07366D]/10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8998AD]">
          INITIALIZING SIGNAL ENGINE...
        </span>
      </div>
    ),
  },
);

export const HeroSection: React.FC = () => {
  const [activeTrackIndex, setActiveTrackIndex] = React.useState<number>(0);

  return (
    <section className="relative w-full border-b border-[rgba(137,152,173,0.15)] bg-[#06162C]">
      {/* Spatial Hairline Coordinates Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(137,152,173,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(137,152,173,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1780px] grid-cols-1 items-center gap-8 px-4 sm:px-8 md:px-12 lg:grid-cols-12 lg:gap-12">
        {/* Left 7 Columns: Editorial & Control System */}
        <div className="z-10 py-10 lg:col-span-7 lg:py-16">
          <HeroContent
            activeTrackIndex={activeTrackIndex}
            onSelectTrack={setActiveTrackIndex}
          />
        </div>

        {/* Right 5 Columns: The 3D Signal Engine Interactive Viewport */}
        <div className="relative h-[380px] w-full sm:h-[460px] lg:col-span-5 lg:h-[620px]">
          <div className="relative h-full w-full overflow-hidden border border-[rgba(137,152,173,0.2)] bg-[#07366D]/15 p-2 chamfer-md">
            {/* Viewport Telemetry Badges */}
            <div className="pointer-events-none absolute left-4 top-4 z-20 flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-[#8998AD]">
              <span className="h-1.5 w-1.5 animate-pulse bg-[#1675F8]" />
              <span>3D SIGNAL FEED // TRACK 0{activeTrackIndex + 1}</span>
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 z-20 font-mono text-[9px] tracking-wider text-[#C7A76B]">
              GPU ACCELERATED // R3F ENGINE
            </div>

            {/* R3F WebGL Canvas Mount */}
            <DynamicHeroSignalCanvas activeTrackIndex={activeTrackIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};