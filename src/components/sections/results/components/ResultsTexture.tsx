"use client";

import React from "react";

/**
 * Architectural Vector Texture for Light Results Panel
 * Matches the visual language of the 3 Why Work With Brivya cards:
 * - 8–12% default opacity (clean, subtle)
 * - 16–20% on hover
 * - Zero glowing neon effects
 */
export const ResultsTexture: React.FC = () => {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none select-none overflow-hidden rounded-[inherit]">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.10] transition-opacity duration-700 ease-out group-hover:opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* 1. Fine Coordinate Dot Lattice */}
          <pattern id="light-results-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="0.8" fill="#0A5FD7" />
          </pattern>

          {/* 2. Thin Architectural Guide Grid */}
          <pattern id="light-results-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#0A5FD7"
              strokeWidth="0.5"
            />
          </pattern>

          {/* 3. Soft Specular Wash */}
          <radialGradient id="lightPanelSpecular" cx="15%" cy="10%" r="75%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#F8FAFD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EDF4FC" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Specular Surface Wash */}
        <rect width="100%" height="100%" fill="url(#lightPanelSpecular)" />

        {/* CAD Grid System */}
        <rect width="100%" height="100%" fill="url(#light-results-grid)" />

        {/* Coordinate Dot Matrices (Bottom-Left and Top-Right) */}
        <rect x="24" y="65%" width="120" height="72" fill="url(#light-results-dots)" />
        <rect x="80%" y="16" width="100" height="60" fill="url(#light-results-dots)" />

        {/* Minimal Engineering Corner Brackets */}
        <g stroke="#0A5FD7" strokeWidth="0.75" fill="none">
          <path d="M 18 26 L 18 18 L 26 18" />
          <path d="M calc(100% - 26px) 18 L calc(100% - 18px) 18 L calc(100% - 18px) 26" />
          <path d="M 18 calc(100% - 26px) L 18 calc(100% - 18px) L 26 calc(100% - 18px)" />
          <path d="M calc(100% - 26px) calc(100% - 18px) L calc(100% - 18px) calc(100% - 18px) L calc(100% - 18px) calc(100% - 26px)" />
        </g>

        {/* Minimal Engineering Crosshairs (+) */}
        <g stroke="#0A5FD7" strokeWidth="0.7">
          <path d="M 44 44 L 44 50 M 41 47 L 47 47" />
          <path d="M calc(100% - 44px) 44 L calc(100% - 44px) 50 M calc(100% - 47px) 47 L calc(100% - 41px) 47" />
          <path d="M 38% 30 L 38% 36 M calc(38% - 3px) 33 L calc(38% + 3px) 33" />
        </g>

        {/* Subtle Architectural Datum Guides */}
        <line
          x1="0"
          y1="34"
          x2="100%"
          y2="34"
          stroke="#0A5FD7"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
        <line
          x1="38%"
          y1="0"
          x2="38%"
          y2="100%"
          stroke="#0A5FD7"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
};