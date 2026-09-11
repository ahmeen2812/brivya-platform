"use client";

import React from "react";

export const FooterTexture: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 40px Engineering Grid */}
          <pattern id="footer-tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#F4F7FC"
              strokeWidth="0.5"
            />
            <circle cx="20" cy="20" r="0.8" fill="#F4F7FC" />
          </pattern>

          {/* Coordinate Node Matrix */}
          <pattern id="footer-dot-matrix" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.6" fill="#1675F8" />
          </pattern>
        </defs>

        {/* Global Grid Surface */}
        <rect width="100%" height="100%" fill="url(#footer-tech-grid)" />

        {/* Tactical Dot Matrices at Corners */}
        <rect x="5%" y="60px" width="160" height="80" fill="url(#footer-dot-matrix)" />
        <rect x="85%" y="40%" width="120" height="100" fill="url(#footer-dot-matrix)" />

        {/* Subtle Horizontal Datum Axis */}
        <line
          x1="0"
          y1="120"
          x2="100%"
          y2="120"
          stroke="#F4F7FC"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
};