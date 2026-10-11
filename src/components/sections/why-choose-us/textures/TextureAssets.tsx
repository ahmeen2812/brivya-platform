"use client";

import React from "react";

/**
 * Card 01 Texture: Connected Digital Systems (Network Topology & Data Nodes)
 * Palette: Brivya Cobalt & Signal Blue (#0A5FD7 / #1675F8)
 */
export const ConnectedNetworkTexture: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none select-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      viewBox="0 0 400 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Network lattice pattern */}
        <pattern id="network-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2.5" fill="#1675F8" fillOpacity="0.35" />
          <circle cx="60" cy="50" r="2" fill="#0A5FD7" fillOpacity="0.45" />
          <path
            d="M 20 20 L 60 50 M 60 50 L 100 20 M 20 20 L 20 100"
            fill="none"
            stroke="#1675F8"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            strokeOpacity="0.25"
          />
        </pattern>

        {/* Soft radial illumination around connection hubs */}
        <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1675F8" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#0A5FD7" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid Pattern Layer */}
      <rect width="100%" height="100%" fill="url(#network-grid)" />

      {/* Large Relational Conduit Paths */}
      <path
        d="M -20 180 C 80 120, 160 220, 260 140 S 380 200, 420 160"
        fill="none"
        stroke="#1675F8"
        strokeWidth="1.2"
        strokeOpacity="0.3"
      />
      <path
        d="M 40 40 L 140 120 L 280 80 L 360 180"
        fill="none"
        stroke="#0A5FD7"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.25"
      />

      {/* Focal Nodes */}
      <g className="transition-opacity duration-500 group-hover:opacity-100 opacity-75">
        <circle cx="140" cy="120" r="5" fill="#1675F8" fillOpacity="0.2" />
        <circle cx="140" cy="120" r="2.5" fill="#1675F8" />
        <circle cx="280" cy="80" r="5" fill="#0A5FD7" fillOpacity="0.2" />
        <circle cx="280" cy="80" r="2.5" fill="#0A5FD7" />
        <circle cx="260" cy="140" r="6" fill="#1675F8" fillOpacity="0.15" />
        <circle cx="260" cy="140" r="3" fill="#1675F8" />
      </g>

      {/* Gradient Ambient Wash */}
      <rect width="100%" height="100%" fill="url(#networkGradient)" />
    </svg>
  );
};

/**
 * Card 02 Texture: Practical Engineering (Blueprint CAD Grid & Isometric Infrastructure)
 * Palette: Emerald & Precision Mint (#059669 / #10B981)
 */
export const EngineeringBlueprintTexture: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none select-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      viewBox="0 0 400 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Precision CAD grid pattern */}
        <pattern id="cad-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#059669" strokeWidth="0.5" strokeOpacity="0.18" />
          <path d="M 16 0 L 16 32 M 0 16 L 32 16" fill="none" stroke="#10B981" strokeWidth="0.3" strokeDasharray="1 3" strokeOpacity="0.15" />
        </pattern>

        <linearGradient id="blueprintGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="70%" stopColor="#059669" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Base Grid */}
      <rect width="100%" height="100%" fill="url(#cad-grid)" />

      {/* Structural Crosshairs (+) and Dimension Marks */}
      <g stroke="#059669" strokeWidth="1" strokeOpacity="0.35">
        <path d="M 64 60 L 64 68 M 60 64 L 68 64" />
        <path d="M 224 92 L 224 100 M 220 96 L 228 96" />
        <path d="M 320 220 L 320 228 M 316 224 L 324 224" />
      </g>

      {/* Isometric Infrastructure Lines */}
      <path
        d="M 120 240 L 220 180 L 320 230 L 220 290 Z"
        fill="none"
        stroke="#059669"
        strokeWidth="1"
        strokeOpacity="0.25"
      />
      <path
        d="M 220 180 L 220 110 L 320 160 L 320 230"
        fill="none"
        stroke="#10B981"
        strokeWidth="1"
        strokeDasharray="3 3"
        strokeOpacity="0.2"
      />
      <line x1="120" y1="240" x2="120" y2="170" stroke="#059669" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="120" y1="170" x2="220" y2="110" stroke="#059669" strokeWidth="1" strokeOpacity="0.25" />

      {/* Gradient Ambient Wash */}
      <rect width="100%" height="100%" fill="url(#blueprintGradient)" />
    </svg>
  );
};

/**
 * Card 03 Texture: Clear Communication (Dialogue Flow, Waves & Signal Harmonics)
 * Palette: Deep Violet & Lilac Accent (#7C3AED / #9333EA)
 */
export const CommunicationWaveTexture: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none select-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      viewBox="0 0 400 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveStrokeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#9333EA" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="commAmbientGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.10" />
          <stop offset="60%" stopColor="#9333EA" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Harmonic Wave Curvatures representing speech and feedback loops */}
      <path
        d="M -40 220 C 60 140, 160 260, 260 170 S 380 90, 440 130"
        fill="none"
        stroke="url(#waveStrokeGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M -20 260 C 80 180, 180 300, 280 210 S 390 130, 440 170"
        fill="none"
        stroke="url(#waveStrokeGradient)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M 10 160 C 100 90, 200 200, 300 120 S 380 40, 430 70"
        fill="none"
        stroke="url(#waveStrokeGradient)"
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Communication Resonance Nodes */}
      <g className="transition-opacity duration-500 group-hover:opacity-100 opacity-75">
        <circle cx="160" cy="210" r="4.5" fill="#7C3AED" fillOpacity="0.2" />
        <circle cx="160" cy="210" r="2" fill="#7C3AED" />
        <circle cx="260" cy="170" r="5" fill="#9333EA" fillOpacity="0.25" />
        <circle cx="260" cy="170" r="2.5" fill="#9333EA" />
        <circle cx="340" cy="115" r="4" fill="#7C3AED" fillOpacity="0.2" />
        <circle cx="340" cy="115" r="2" fill="#7C3AED" />
      </g>

      {/* Ambient Gradient Fill */}
      <rect width="100%" height="100%" fill="url(#commAmbientGradient)" />
    </svg>
  );
};