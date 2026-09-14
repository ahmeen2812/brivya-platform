"use client";

import React from "react";

export interface ReviewCardTextureProps {
  readonly isActive?: boolean;
}

/**
 * Architectural Technical Vector Pattern for Testimonial Cards
 * Fine millimeter grid, CAD crosshairs, corner alignment brackets, and specular wash.
 */
export const ReviewCardTexture: React.FC<ReviewCardTextureProps> = ({ isActive = false }) => {
  return (
    <svg
      className={`absolute inset-0 h-full w-full pointer-events-none select-none transition-opacity duration-700 ease-out ${
        isActive ? "opacity-80 sm:opacity-90" : "opacity-40 sm:opacity-50"
      }`}
      viewBox="0 0 440 340"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* 1. Fine Millimeter Coordinate Lattice */}
        <pattern id="card-cad-lattice" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="18" cy="18" r="1" fill="#0A5FD7" fillOpacity="0.22" />
          <path
            d="M 36 0 L 0 0 0 36"
            fill="none"
            stroke="#8998AD"
            strokeWidth="0.4"
            strokeOpacity="0.14"
          />
        </pattern>

        {/* 2. Top-Center Ambient Light Wash */}
        <radialGradient id="cardSpecularCore" cx="50%" cy="8%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
          <stop offset="50%" stopColor="#F8FAFC" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#EEF4FC" stopOpacity="0.5" />
        </radialGradient>

        {/* 3. Subtle Technical Conduit Gradient */}
        <linearGradient id="cardConduitSweep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A5FD7" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#1675F8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Surface Base Wash */}
      <rect width="100%" height="100%" fill="url(#cardSpecularCore)" />

      {/* Coordinate Lattice */}
      <rect width="100%" height="100%" fill="url(#card-cad-lattice)" />

      {/* Architectural Corner Alignment Brackets */}
      <g stroke="#0A5FD7" strokeWidth="0.9" strokeOpacity="0.28" fill="none">
        {/* Top-Left Bracket */}
        <path d="M 24 34 L 24 24 L 34 24" />
        {/* Top-Right Bracket */}
        <path d="M 416 34 L 416 24 L 406 24" />
        {/* Bottom-Left Bracket */}
        <path d="M 24 306 L 24 316 L 34 316" />
        {/* Bottom-Right Bracket */}
        <path d="M 416 306 L 416 316 L 406 316" />
      </g>

      {/* Precision CAD Crosshairs (+) */}
      <g stroke="#0A5FD7" strokeWidth="0.8" strokeOpacity="0.22">
        <path d="M 48 44 L 48 52 M 44 48 L 52 48" />
        <path d="M 392 44 L 392 52 M 388 48 L 396 48" />
        <path d="M 48 288 L 48 296 M 44 292 L 52 292" />
        <path d="M 392 288 L 392 296 M 388 292 L 396 292" />
      </g>

      {/* Subtle Concentric Alignment Arcs behind Avatar */}
      <circle
        cx="220"
        cy="52"
        r="44"
        fill="none"
        stroke="#0A5FD7"
        strokeWidth="0.6"
        strokeDasharray="2 3"
        strokeOpacity="0.16"
      />
      <circle
        cx="220"
        cy="52"
        r="54"
        fill="none"
        stroke="#1675F8"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        strokeOpacity="0.10"
      />

      {/* Fine Diagonal Data Paths */}
      <path
        d="M 10 120 L 140 30 M 430 220 L 300 310"
        fill="none"
        stroke="url(#cardConduitSweep)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  );
};