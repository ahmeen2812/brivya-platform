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
          {/* 1. Fine Coordinate Dot Lattice */}
          <pattern id="dark-panel-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.1" fill="#38BDF8" fillOpacity="0.22" />
          </pattern>

          {/* 2. Precision Architectural CAD Grid */}
          <pattern id="dark-panel-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path
              d="M 36 0 L 0 0 0 36"
              fill="none"
              stroke="#1675F8"
              strokeWidth="0.5"
              strokeOpacity="0.14"
            />
          </pattern>

          {/* 3. Top-Left Specular Surface Light Wash */}
          <radialGradient id="darkPanelSpecular" cx="15%" cy="15%" r="75%">
            <stop offset="0%" stopColor="#0A5FD7" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#072B5E" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#061B3A" stopOpacity="0" />
          </radialGradient>

          {/* 4. Diagonal Data Conduit Gradient */}
          <linearGradient id="darkConduitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#1675F8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#072B5E" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Surface Specular Wash */}
        <rect width="100%" height="100%" fill="url(#darkPanelSpecular)" />

        {/* CAD Grid Lattice */}
        <rect width="100%" height="100%" fill="url(#dark-panel-grid)" />

        {/* Coordinate Dot Matrices (Bottom-Left and Top-Right) */}
        <rect x="24" y="62%" width="120" height="84" fill="url(#dark-panel-dots)" opacity="0.85" />
        <rect x="80%" y="14" width="110" height="64" fill="url(#dark-panel-dots)" opacity="0.75" />

        {/* Architectural Corner Alignment Brackets */}
        <g stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.45" fill="none">
          {/* Top-Left Bracket */}
          <path d="M 16 30 L 16 16 L 30 16" />
          {/* Top-Right Bracket */}
          <path d="M calc(100% - 30px) 16 L calc(100% - 16px) 16 L calc(100% - 16px) 30" />
          {/* Bottom-Left Bracket */}
          <path d="M 16 calc(100% - 30px) L 16 calc(100% - 16px) L 30 calc(100% - 16px)" />
          {/* Bottom-Right Bracket */}
          <path d="M calc(100% - 30px) calc(100% - 16px) L calc(100% - 16px) calc(100% - 16px) L calc(100% - 16px) calc(100% - 30px)" />
        </g>

        {/* Precision CAD Crosshairs (+) at Quadrant Intersections */}
        <g stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.32">
          <path d="M 44 44 L 44 54 M 39 49 L 49 49" />
          <path d="M calc(100% - 46px) 44 L calc(100% - 46px) 54 M calc(100% - 51px) 49 L calc(100% - 41px) 49" />
          <path d="M 38% 30 L 38% 40 M calc(38% - 5px) 35 L calc(38% + 5px) 35" />
          <path d="M 72% 68% L 72% calc(68% + 10px) M calc(72% - 5px) calc(68% + 5px) L calc(72% + 5px) calc(68% + 5px)" />
        </g>

        {/* Horizontal & Vertical Datum Lines */}
        <line
          x1="0"
          y1="35"
          x2="100%"
          y2="35"
          stroke="#1675F8"
          strokeWidth="0.75"
          strokeOpacity="0.22"
          strokeDasharray="4 6"
          className="animate-[pulse_4s_ease-in-out_infinite]"
        />
        <line
          x1="38%"
          y1="0"
          x2="38%"
          y2="100%"
          stroke="#1675F8"
          strokeWidth="0.75"
          strokeOpacity="0.20"
          strokeDasharray="4 6"
        />

        {/* Diagonal Signal Trace */}
        <path
          d="M 10 140 L 190 25 M 480 200 L 320 325"
          fill="none"
          stroke="url(#darkConduitGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* Luminous Corner Pin Markers */}
        <rect x="calc(100% - 12px)" y="10" width="4" height="4" fill="#38BDF8" fillOpacity="0.85" />
        <rect x="calc(100% - 12px)" y="calc(100% - 14px)" width="4" height="4" fill="#38BDF8" fillOpacity="0.85" />
      </svg>
    </div>
  );
};