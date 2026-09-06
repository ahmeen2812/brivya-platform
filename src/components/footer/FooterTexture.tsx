"use client";

import React from "react";

export function FooterTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="footer-cad-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.5"
            />
            <circle cx="16" cy="16" r="0.75" fill="#FFFFFF" />
          </pattern>

          <pattern id="footer-dot-lattice" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="0.6" fill="#38BDF8" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#footer-cad-grid)" />
        <rect x="4%" y="25%" width="120" height="60" fill="url(#footer-dot-lattice)" />
        <rect x="88%" y="35%" width="100" height="70" fill="url(#footer-dot-lattice)" />

        <line
          x1="0"
          y1="38%"
          x2="100%"
          y2="38%"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
}

export default FooterTexture;