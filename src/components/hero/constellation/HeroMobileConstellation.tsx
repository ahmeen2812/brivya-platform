"use client";

import * as React from "react";
import { MobileMainWheel } from "../mobile/MobileMainWheel";
import { MobileAdsWheel } from "../mobile/MobileAdsWheel";
import { MobileAddonsWheel } from "../mobile/MobileAddonsWheel";

export const HeroMobileConstellation: React.FC = () => {
  return (
    <div className="relative w-full max-w-[360px] xs:max-w-[380px] h-[520px] mx-auto select-none overflow-visible">
      {/* 
        1. TOP SATELLITE: Google Ads <-> Meta Ads
        Shifted to the RIGHT (cy: 105px)
      */}
      <div className="absolute top-[5px] right-[5px] z-20">
        <MobileAdsWheel />
      </div>

      {/* 
        2. MAIN WHEEL: Web Dev -> Cloud -> AI
        Shifted to the LEFT / LEFT-CENTER (cy: 260px, exactly 155px vertical distance from top wheel)
      */}
      <div className="absolute top-[135px] left-[-10px] xs:left-0 z-10">
        <MobileMainWheel />
      </div>

      {/* 
        3. BOTTOM SATELLITE: Google Add-ons <-> Office Add-ins
        Shifted to the RIGHT (cy: 415px, exactly 155px vertical distance from main wheel)
      */}
      <div className="absolute top-[315px] right-[5px] z-20">
        <MobileAddonsWheel />
      </div>
    </div>
  );
};