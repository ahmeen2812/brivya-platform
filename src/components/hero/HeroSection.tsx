"use client";

import * as React from "react";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";

export const HeroSection: React.FC = () => {
  const [isShowreelActive, setIsShowreelActive] = React.useState<boolean>(false);

  const handleOpenShowreel = () => {
    setIsShowreelActive(true);
  };

  const handleCloseShowreel = () => {
    setIsShowreelActive(false);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F7FC] pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24">
      {/* Background Subtle Spatial Coordinates Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#06162C_1px,transparent_1px),linear-gradient(to_bottom,#06162C_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 min-h-[580px]">
          {/* Left Column: Editorial Headline & Actions (7 Columns on Desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center z-10">
            <HeroContent />
            <HeroActions onOpenShowreel={handleOpenShowreel} />
          </div>

          {/* Right Column: 3-Orbit Constellation Viewport (6 Columns on Desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            {/* 
              Constellation Mount Point:
              This placeholder is wired directly to receive Step 2's mathematical
              orbit engine without touching or modifying the Left Column.
            */}
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="relative flex h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] items-center justify-center rounded-full border border-slate-200/80 bg-white/40 shadow-xs">
                {/* Center Core Scaffold */}
                <div className="flex h-36 w-36 sm:h-44 sm:w-44 flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-md p-4 text-center">
                  <span className="font-mono text-xs font-bold text-[#0A5FD7]">&lt;/&gt;</span>
                  <span className="mt-1 font-serif text-sm sm:text-base font-bold text-[#06162C]">
                    Web Development
                  </span>
                  <span className="mt-0.5 text-[10.5px] text-[#8998AD]">
                    Advanced websites & digital systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};