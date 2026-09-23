"use client";

import React from "react";

// Technical Data / Server Relational Mesh Vectors Creating Complex Tonal Assets Routing Bounds Automatically Generating Constraints
export function ConnectedTexture() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.25]" viewBox="0 0 400 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="data-nodes" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="2.5" fill="#4B77BE" opacity="0.6" />
          <path d="M 0,15 L 30,30 M 60,15 L 30,30 M 0,45 L 30,30 M 60,45 L 30,30" stroke="#6086B8" strokeWidth="0.8" opacity="0.2" />
          <circle cx="0" cy="15" r="1.5" fill="#6086B8" opacity="0.3" />
          <circle cx="60" cy="15" r="1.5" fill="#6086B8" opacity="0.3" />
        </pattern>
        <linearGradient id="fadeConnect" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#data-nodes)" className="origin-center transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-translate-x-1" />
      <rect width="100%" height="100%" fill="url(#fadeConnect)" />
    </svg>
  );
}

// Engineering Blueprint Metric Grid System Accurately Executing Spatial Limits Standard Seamless Structure Formatting Seamless Context Optimally Naturally Validating Smooth Mapping Format
export function EngineeringTexture() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]" viewBox="0 0 400 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="engineer-metric" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#65A69B" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
          <path d="M 0 30 L 15 15 L 30 30" fill="none" stroke="#65A69B" strokeWidth="0.6" opacity="0.2" />
        </pattern>
        <linearGradient id="fadeBlueprint" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D6F8E4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#engineer-metric)" className="origin-top-left transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:translate-y-2 group-hover:scale-[1.05]" />
      <rect width="100%" height="100%" fill="url(#fadeBlueprint)" />
    </svg>
  );
}

// Organic Speech Flow Modulation Path Rendering Native Volume Structures Creating Precise Elegant Sound Visualization Output Safely Scaling Parameters Safely Mapping Correct Settings Successfully Automatically Output Dynamically Managing
export function CommunicationTexture() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.5]" viewBox="0 0 400 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glowPurp" x1="0%" y1="0%" x2="0%" y2="100%">
           <stop offset="0%" stopColor="#CAAFE2" stopOpacity="0.8" />
           <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
        </linearGradient>
        <filter id="softGlimmer">
           <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
           <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
           </feMerge>
        </filter>
      </defs>
      <g className="origin-center transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-[1.1] group-hover:translate-x-2">
        <path d="M-100,120 Q100,190 250,140 T500,160" fill="none" stroke="url(#glowPurp)" strokeWidth="2.5" filter="url(#softGlimmer)" opacity="0.7" />
        <path d="M-50,220 Q150,270 300,190 T600,240" fill="none" stroke="url(#glowPurp)" strokeWidth="4" filter="url(#softGlimmer)" opacity="0.4" />
        <circle cx="280" cy="185" r="4" fill="#9333EA" filter="url(#softGlimmer)" opacity="0.3"/>
        <circle cx="210" cy="135" r="2.5" fill="#9333EA" filter="url(#softGlimmer)" opacity="0.5"/>
      </g>
    </svg>
  );
}