"use client";

import * as React from "react";

interface PrecisionIconProps {
  className?: string;
}

/**
 * Technical Crosshair Alignment Glyph
 */
export const PrecisionCrosshairIcon: React.FC<PrecisionIconProps> = ({
  className = "h-4 w-4",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" strokeOpacity="0.4" />
    <line x1="12" y1="2" x2="12" y2="6" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="22" strokeLinecap="round" />
    <line x1="2" y1="12" x2="6" y2="12" strokeLinecap="round" />
    <line x1="18" y1="12" x2="22" y2="12" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * Audited Verification Checkmark Badge
 */
export const PrecisionCheckmarkIcon: React.FC<PrecisionIconProps> = ({
  className = "h-3.5 w-3.5",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/**
 * Terminal Deployment Chevron Link
 */
export const PrecisionArrowIcon: React.FC<PrecisionIconProps> = ({
  className = "h-3.5 w-3.5",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

/**
 * Live Operational Telemetry Diode
 */
export const PrecisionPulseIcon: React.FC<PrecisionIconProps> = ({
  className = "h-2 w-2",
}) => (
  <span className={`relative inline-flex ${className}`}>
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
    <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
  </span>
);

/**
 * Structural Architecture Code Bracket
 */
export const PrecisionCodeBracketIcon: React.FC<PrecisionIconProps> = ({
  className = "h-4 w-4",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

/**
 * Server Security Shield Badge
 */
export const PrecisionShieldIcon: React.FC<PrecisionIconProps> = ({
  className = "h-4 w-4",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);