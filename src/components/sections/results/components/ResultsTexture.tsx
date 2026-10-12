"use client";

import React from "react";

export const ResultsTexture: React.FC = () => {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none select-none overflow-hidden rounded-[inherit]">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Fine Coordinate Dot Lattice */}
          <pattern id="results-dot-grid-v2" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#0A5FD7" fillOpacity="0.25" />
          </pattern>

          {/* Architectural Cad Guide Grid */}
          <pattern id="results-cad-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#0A5FD7"
              strokeWidth="0.5"
              strokeOpacity="0.08"
            />
          </pattern>

          {/* Diagonal Conduit Gradient */}
          <linearGradient id="resultsConduitSweep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A5FD7" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#1675F8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Structural CAD Guide Lattice */}
        <rect width="100%" height="100%" fill="url(#results-cad-grid)" />

        {/* 2. Bottom-Left & Top-Right Coordinate Dot Matrices */}
        <rect x="24" y="65%" width="120" height="80" fill="url(#results-dot-grid-v2)" opacity="0.9" />
        <rect x="82%" y="12" width="100" height="60" fill="url(#results-dot-grid-v2)" opacity="0.8" />

        {/* 3. Architectural Corner Alignment Brackets */}
        <g stroke="#0A5FD7" strokeWidth="1.2" strokeOpacity="0.4" fill="none">
          {/* Top-Left Bracket */}
          <path d="M 16 28 L 16 16 L 28 16" />
          {/* Top-Right Bracket */}
          <path d="M calc(100% - 28px) 16 L calc(100% - 16px) 16 L calc(100% - 16px) 28" />
          {/* Bottom-Left Bracket */}
          <path d="M 16 calc(100% - 28px) L 16 calc(100% - 16px) L 28 calc(100% - 16px)" />
          {/* Bottom-Right Bracket */}
          <path d="M calc(100% - 28px) calc(100% - 16px) L calc(100% - 16px) calc(100% - 16px) L calc(100% - 16px) calc(100% - 28px)" />
        </g>

        {/* 4. Precision CAD Crosshairs (+) */}
        <g stroke="#0A5FD7" strokeWidth="1" strokeOpacity="0.32">
          <path d="M 44 44 L 44 54 M 39 49 L 49 49" />
          <path d="M calc(100% - 48px) 44 L calc(100% - 48px) 54 M calc(100% - 53px) 49 L calc(100% - 43px) 49" />
          <path d="M 38% 30 L 38% 40 M calc(38% - 5px) 35 L calc(38% + 5px) 35" />
          <path d="M 72% 70% L 72% calc(70% + 10px) M calc(72% - 5px) calc(70% + 5px) L calc(72% + 5px) calc(70% + 5px)" />
        </g>

        {/* 5. Animated Flowing Data Conduit Lines */}
        <path
          d="M 0 34 L 100% 34"
          fill="none"
          stroke="#0A5FD7"
          strokeWidth="0.75"
          strokeOpacity="0.22"
          strokeDasharray="4 6"
          className="animate-[pulse_4s_ease-in-out_infinite]"
        />
        <path
          d="M 38% 0 L 38% 100%"
          fill="none"
          stroke="#0A5FD7"
          strokeWidth="0.75"
          strokeOpacity="0.18"
          strokeDasharray="4 6"
        />

        {/* Diagonal Conduit Trace */}
        <path
          d="M 10 140 L 180 30 M 460 210 L 320 320"
          fill="none"
          stroke="url(#resultsConduitSweep)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
};