"use client";

import React from "react";

export const ResultsTexture: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Fine Coordinate Dot Lattice */}
        <pattern id="results-dot-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="0.85" fill="#0A5FD7" fillOpacity="0.22" />
        </pattern>

        {/* Ambient Specular Light Wash */}
        <radialGradient id="resultsPanelWash" cx="20%" cy="15%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
          <stop offset="55%" stopColor="#F8FAFD" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#EDF4FC" stopOpacity="0.5" />
        </radialGradient>

        {/* Diagonal Technical Datum Gradient */}
        <linearGradient id="resultsDatumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A5FD7" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#1675F8" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Surface Base Wash */}
      <rect width="100%" height="100%" fill="url(#resultsPanelWash)" />

      {/* Bottom-Left Coordinate Dot Matrix (96px x 64px) */}
      <rect x="28" y="66%" width="96" height="64" fill="url(#results-dot-grid)" opacity="0.85" />

      {/* Top-Right Coordinate Dot Matrix */}
      <rect x="86%" y="16" width="88" height="52" fill="url(#results-dot-grid)" opacity="0.75" />

      {/* Architectural Corner Alignment Brackets */}
      <g stroke="#0A5FD7" strokeWidth="0.85" strokeOpacity="0.3" fill="none">
        {/* Top-Left Bracket */}
        <path d="M 18 28 L 18 18 L 28 18" />
        {/* Bottom-Left Bracket */}
        <path d="M 18 calc(100% - 28px) L 18 calc(100% - 18px) L 28 calc(100% - 18px)" />
      </g>

      {/* Precision CAD Crosshairs (+) */}
      <g stroke="#0A5FD7" strokeWidth="0.8" strokeOpacity="0.22">
        <path d="M 40 40 L 40 48 M 36 44 L 44 44" />
        <path d="M calc(100% - 44px) 36 L calc(100% - 44px) 44 M calc(100% - 48px) 40 L calc(100% - 40px) 40" />
        <path d="M 38% 32 L 38% 40 M calc(38% - 4px) 36 L calc(38% + 4px) 36" />
      </g>

      {/* Hairline Architectural Guide Lines */}
      <line x1="0" y1="28" x2="100%" y2="28" stroke="#0A5FD7" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="3 4" />
      <line x1="38%" y1="0" x2="38%" y2="100%" stroke="#0A5FD7" strokeWidth="0.5" strokeOpacity="0.10" strokeDasharray="4 4" />

      {/* Top-Right Technical Pin Markers */}
      <rect x="calc(100% - 12px)" y="10" width="4" height="4" fill="#0A5FD7" fillOpacity="0.85" />
      <rect x="calc(100% - 12px)" y="calc(100% - 14px)" width="4" height="4" fill="#0A5FD7" fillOpacity="0.85" />
    </svg>
  );
};