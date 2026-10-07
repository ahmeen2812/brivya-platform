"use client";

import * as React from "react";
import { MobileMainWheel } from "../mobile/MobileMainWheel";
import { MobileAdsWheel } from "../mobile/MobileAdsWheel";
import { MobileAddonsWheel } from "../mobile/MobileAddonsWheel";

export const HeroMobileConstellation: React.FC = () => {
  return (
    <div className="relative w-full max-w-[360px] xs:max-w-[380px] h-[395px] xs:h-[405px] mx-auto select-none overflow-visible">
      {/* 
        1. TOP SATELLITE: Google Ads <-> Meta Ads
        Shifted RIGHT (top: 0px)
      */}
      <div className="absolute top-[0px] right-[4px] sm:right-[12px] z-20">
        <MobileAdsWheel />
      </div>

      {/* 
        2. MAIN WHEEL: Web Dev -> Cloud -> AI
        Shifted LEFT / LEFT-CENTER (top: 105px, exactly 105px vertical distance from top wheel)
      */}
      <div className="absolute top-[105px] left-[-15px] sm:left-[-5px] z-10">
        <MobileMainWheel />
      </div>

      {/* 
        3. BOTTOM SATELLITE: Google Add-ons <-> Office Add-ins
        Shifted RIGHT (top: 210px, exactly 105px vertical distance from main wheel)
      */}
      <div className="absolute top-[210px] right-[4px] sm:right-[12px] z-20">
        <MobileAddonsWheel />
      </div>
    </div>
  );
};