"use client";

import React from "react";
import { TESTIMONIALS_DATA } from "../content";
import {
  GoogleBrandLogo,
  GoogleFiveStars,
  TrustpilotBrandLogo,
  TrustpilotFiveStarTiles,
} from "../../trust/TrustBrandIcons";

export const TrustHeader: React.FC = () => {
  const { statement, showStars } = TESTIMONIALS_DATA.trustHeader;

  return (
    <div className="w-full flex flex-col items-center justify-center select-none pb-8 sm:pb-10 pt-2">
      {/* Platform Branding Arrangement: Left Google | Divider | Right Trustpilot */}
      <div className="flex flex-row items-center justify-center gap-7 sm:gap-12 md:gap-16">
        {/* 1. Google Column */}
        <div className="flex flex-col items-center justify-center gap-1.5 shrink-0">
          <GoogleBrandLogo />
          {showStars && <GoogleFiveStars />}
        </div>

        {/* Vertical Hairline Divider */}
        <div
          aria-hidden="true"
          className="h-8 sm:h-9 w-[1px] bg-slate-200/90 shrink-0"
        />

        {/* 2. Trustpilot Column */}
        <div className="flex flex-col items-center justify-center gap-1.5 shrink-0">
          <TrustpilotBrandLogo />
          {showStars && <TrustpilotFiveStarTiles />}
        </div>
      </div>

      {/* 3. Centered Statement: "Trusted by 650+ clients worldwide." */}
      <p className="mt-3.5 sm:mt-4 text-center font-sans text-[13px] sm:text-[14px] font-semibold text-[#06162C] tracking-tight">
        {statement}
      </p>
    </div>
  );
};