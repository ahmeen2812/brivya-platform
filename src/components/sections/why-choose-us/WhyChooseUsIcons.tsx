"use client";

import React from "react";

export interface WhyChooseUsIconProps {
  type: string;
  className?: string;
}

export const WhyChooseUsIcon: React.FC<WhyChooseUsIconProps> = ({ type, className = "h-5 w-5" }) => {
  switch (type) {
    // Structural Audit / Quality Glyph - Architectural Integrity Mark
    case "quality":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" stroke="currentColor" fill="rgba(255, 255, 255, 0.4)"/>
          <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2"/>
        </svg>
      );
    
    // Propulsion / Speed Matrix Asset 
    case "speed":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" fill="rgba(255, 255, 255, 0.4)"/>
          <line x1="5" y1="5" x2="6" y2="6" stroke="currentColor" strokeOpacity="0.4" />
          <line x1="18" y1="6" x2="19" y2="7" stroke="currentColor" strokeOpacity="0.4" />
          <line x1="19" y1="18" x2="20" y2="19" stroke="currentColor" strokeOpacity="0.4" />
        </svg>
      );

    // Structural Value Base Index - Commercial Operations 
    case "value":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" />
          <path d="M16 5V4c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v4" stroke="currentColor" strokeOpacity="0.6"/>
          <circle cx="17" cy="12" r="1.5" stroke="currentColor" fill="currentColor"/>
          <path d="M14 12h6" stroke="currentColor"/>
          <path d="M4 14c2.8 0 5-2.2 5-5" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="2 2" />
        </svg>
      );

    default:
      return null;
  }
};