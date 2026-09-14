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
        {/* Fine Coordinate Dot Pattern */}
        <pattern id="results-dot-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="0.9" fill="#0A5FD7" fillOpacity="0.25" />
        </pattern>

        {/* Ambient Specular Light Wash */}
        <radialGradient id="resultsPanelWash" cx="15%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#F8FAFC" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#EEF4FC" stopOpacity="0.4" />
        </radialGradient>
      </defs>

      {/* Surface Specular Wash */}
      <rect width="100%" height="100%" fill="url(#resultsPanelWash)" />

      {/* Bottom-Left Coordinate Dot Matrix (80px x 64px) */}
      <rect x="32" y="70%" width="96" height="64" fill="url(#results-dot-grid)" opacity="0.75" />

      {/* Top-Right Coordinate Dot Matrix */}
      <rect x="88%" y="16" width="80" height="48" fill="url(#results-dot-grid)" opacity="0.65" />

      {/* Hairline Architectural Guide Lines */}
      <line x1="0" y1="24" x2="100%" y2="24" stroke="#0A5FD7" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="3 4" />
      <line x1="38%" y1="0" x2="38%" y2="100%" stroke="#0A5FD7" strokeWidth="0.5" strokeOpacity="0.10" strokeDasharray="4 4" />

      {/* Top-Right Technical Pin Marker */}
      <rect x="calc(100% - 10px)" y="8" width="4" height="4" fill="#0A5FD7" fillOpacity="0.8" />
      {/* Bottom-Right Technical Pin Marker */}
      <rect x="calc(100% - 10px)" y="calc(100% - 12px)" width="4" height="4" fill="#0A5FD7" fillOpacity="0.8" />
    </svg>
  );
};