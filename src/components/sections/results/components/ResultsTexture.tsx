"use client";

import React from "react";

export const ResultsTexture: React.FC = () => {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none select-none overflow-hidden rounded-[inherit]">
      {/* 
        Subtle Technical Texture System:
        - Matches the visual language of the 3 Why Choose Us cards.
        - Default opacity: 12% (delicate, architectural).
        - Elevates smoothly to 26% on interaction.
      */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12] transition-opacity duration-700 ease-out group-hover:opacity-[0.26]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* 1. Fine Coordinate Dot Lattice */}
          <pattern id="arch-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="0.85" fill="#60A5FA" fillOpacity="0.4" />
          </pattern>

          {/* 2. Delicate Architectural Blueprint Grid */}
          <pattern id="arch-cad-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="0.5"
              strokeOpacity="0.25"
            />
          </pattern>

          {/* 3. Soft Azure Surface Wash */}
          <radialGradient id="archSurfaceWash" cx="20%" cy="10%" r="75%">
            <stop offset="0%" stopColor="#0A5FD7" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#072B5E" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#071B36" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Specular Wash */}
        <rect width="100%" height="100%" fill="url(#archSurfaceWash)" />

        {/* CAD Grid System */}
        <rect width="100%" height="100%" fill="url(#arch-cad-grid)" />

        {/* Coordinate Dot Matrices */}
        <rect x="24" y="65%" width="120" height="72" fill="url(#arch-dot-grid)" />
        <rect x="80%" y="16" width="100" height="60" fill="url(#arch-dot-grid)" />

        {/* Precision Architectural Alignment Brackets */}
        <g stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.4" fill="none">
          {/* Top-Left */}
          <path d="M 18 26 L 18 18 L 26 18" />
          {/* Top-Right */}
          <path d="M calc(100% - 26px) 18 L calc(100% - 18px) 18 L calc(100% - 18px) 26" />
          {/* Bottom-Left */}
          <path d="M 18 calc(100% - 26px) L 18 calc(100% - 18px) L 26 calc(100% - 18px)" />
          {/* Bottom-Right */}
          <path d="M calc(100% - 26px) calc(100% - 18px) L calc(100% - 18px) calc(100% - 18px) L calc(100% - 18px) calc(100% - 26px)" />
        </g>

        {/* Minimal Alignment Crosshairs (+) */}
        <g stroke="#60A5FA" strokeWidth="0.75" strokeOpacity="0.3">
          <path d="M 44 44 L 44 50 M 41 47 L 47 47" />
          <path d="M calc(100% - 44px) 44 L calc(100% - 44px) 50 M calc(100% - 47px) 47 L calc(100% - 41px) 47" />
          <path d="M 38% 30 L 38% 36 M calc(38% - 3px) 33 L calc(38% + 3px) 33" />
        </g>

        {/* Subtle Engineering Datum Guides */}
        <line
          x1="0"
          y1="34"
          x2="100%"
          y2="34"
          stroke="#60A5FA"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          strokeDasharray="4 6"
        />
        <line
          x1="38%"
          y1="0"
          x2="38%"
          y2="100%"
          stroke="#60A5FA"
          strokeWidth="0.5"
          strokeOpacity="0.12"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
};