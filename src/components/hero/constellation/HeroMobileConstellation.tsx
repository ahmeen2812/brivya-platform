"use client";

import * as React from "react";
import { MobileMainWheel } from "../mobile/MobileMainWheel";
import { MobileAdsWheel } from "../mobile/MobileAdsWheel";
import { MobileAddonsWheel } from "../mobile/MobileAddonsWheel";

export const HeroMobileConstellation: React.FC = () => {
  return (
    <div className="relative w-full max-w-[360px] xs:max-w-[380px] h-[410px] xs:h-[420px] mx-auto select-none overflow-visible">
      {/* 
        1. TOP SATELLITE: Google Ads <-> Meta Ads
        Positioned RIGHT (top: 0px, center Y: 85px)
      */}
      <div className="absolute top-0 right-[2px] sm:right-[10px] z-20">
        <MobileAdsWheel />
      </div>

      {/* 
        2. MAIN WHEEL: Web Dev -> Cloud -> AI
        Positioned LEFT (top: 105px, center Y: 210px)
        Exact 125px vertical distance from top wheel (210 - 85 = 125px)
      */}
      <div className="absolute top-[105px] left-[-15px] sm:left-[-5px] z-10">
        <MobileMainWheel />
      </div>

      {/* 
        3. BOTTOM SATELLITE: Google Add-ons <-> Office Add-ins
        Positioned RIGHT (top: 230px, center Y: 335px)
        Exact 125px vertical distance from main wheel (335 - 210 = 125px)
      */}
      <div className="absolute top-[230px] right-[2px] sm:right-[10px] z-20">
        <MobileAddonsWheel />
      </div>
    </div>
  );
};