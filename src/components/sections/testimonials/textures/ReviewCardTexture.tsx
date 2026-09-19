"use client";

import React from "react";

export interface ReviewCardTextureProps {
  readonly isActive?: boolean;
}

/**
 * Authentic Technical Vector Pattern for Testimonial Cards
 * Restrained hairline grid, coordinate crosshairs, and soft specular light wash.
 */
export const ReviewCardTexture: React.FC<ReviewCardTextureProps> = ({ isActive = false }) => {
  return (
    <svg
      className={`absolute inset-0 h-full w-full pointer-events-none select-none transition-opacity duration-500 ease-out ${
        isActive ? "opacity-75 sm:opacity-85" : "opacity-40 sm:opacity-50"
      }`}
      viewBox="0 0 400 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Subtle geometric dot and guide lattice */}
        <pattern id="card-tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1.2" fill="#0A5FD7" fillOpacity="0.25" />
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#8998AD"
            strokeWidth="0.4"
            strokeOpacity="0.15"
          />
        </pattern>

        {/* Specular light wash from top-center */}
        <radialGradient id="cardSpecularWash" cx="50%" cy="10%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#F8FAFC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#EDF4FC" stopOpacity="0.4" />
        </radialGradient>

        {/* Diagonal architectural conduit lines */}
        <linearGradient id="cardConduitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A5FD7" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#1675F8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. Base Specular Wash */}
      <rect width="100%" height="100%" fill="url(#cardSpecularWash)" />

      {/* 2. Precision Lattice Pattern */}
      <rect width="100%" height="100%" fill="url(#card-tech-grid)" />

      {/* 3. Subtle Hairline Technical Crosshairs */}
      <g stroke="#0A5FD7" strokeWidth="0.8" strokeOpacity="0.25">
        <path d="M 32 28 L 32 36 M 28 32 L 36 32" />
        <path d="M 368 28 L 368 36 M 364 32 L 372 32" />
        <path d="M 32 288 L 32 296 M 28 292 L 36 292" />
        <path d="M 368 288 L 368 296 M 364 292 L 372 292" />
      </g>

      {/* 4. Fine Diagonal Technical Axis Lines */}
      <path
        d="M 0 60 L 120 0 M 400 260 L 280 320"
        fill="none"
        stroke="url(#cardConduitGrad)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
    </svg>
  );
};