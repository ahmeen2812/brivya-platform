"use client";

import * as React from "react";
import { CONSTELLATION_CONFIG } from "@/config/heroConstellationData";
import { ConstellationOrbitArc } from "./ConstellationOrbitArc";

export const HeroOrbitConstellation: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] h-[540px] sm:h-[560px] overflow-visible">
      {/* 
        Renders all 3 Orbits with clean spatial clearance:
        1. Main Orbit (Development -> Cloud -> AI)
        2. Top-Right Orbit (Google Ads <-> Meta Ads)
        3. Bottom-Right Orbit (Office Add-ins <-> Google Add-ons)
      */}
      {CONSTELLATION_CONFIG.map((track) => (
        <ConstellationOrbitArc key={track.id} config={track} />
      ))}
    </div>
  );
};