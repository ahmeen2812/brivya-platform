"use client";

import React from "react";

export const FooterTexture: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 36px Engineering Grid */}
          <pattern id="footer-cad-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path
              d="M 36 0 L 0 0 0 36"
              fill="none"
              stroke="#F4F7FC"
              strokeWidth="0.5"
            />
            <circle cx="18" cy="18" r="0.75" fill="#F4F7FC" />
          </pattern>

          {/* Micro-Coordinate Dot Lattice */}
          <pattern id="footer-dot-lattice" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="9" cy="9" r="0.6" fill="#60A5FA" />
          </pattern>
        </defs>

        {/* Global Grid Surface */}
        <rect width="100%" height="100%" fill="url(#footer-cad-grid)" />

        {/* Subtle Corner Matrix Clusters */}
        <rect x="3%" y="40px" width="140" height="70" fill="url(#footer-dot-lattice)" />
        <rect x="88%" y="30%" width="100" height="80" fill="url(#footer-dot-lattice)" />

        {/* Horizontal Datum Guide */}
        <line
          x1="0"
          y1="80"
          x2="100%"
          y2="80"
          stroke="#F4F7FC"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
};