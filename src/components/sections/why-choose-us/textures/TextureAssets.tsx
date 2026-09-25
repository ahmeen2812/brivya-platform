"use client";

import React from "react";

// Network Configuration: Connection Node Flow Systems Processing Visually Display Bounds Safely Natively Tracing Successfully
export function ConnectedTexture() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="connect-nodes" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="2.5" fill="#4B77BE" opacity="0.8" />
          <path d="M 0,0 L 25,25 M 50,0 L 25,25 M 0,50 L 25,25 M 50,50 L 25,25" stroke="#6086B8" strokeWidth="0.8" opacity="0.4" />
          <circle cx="0" cy="0" r="1.5" fill="#6086B8" opacity="0.5" />
          <circle cx="50" cy="0" r="1.5" fill="#6086B8" opacity="0.5" />
          <circle cx="0" cy="50" r="1.5" fill="#6086B8" opacity="0.5" />
          <circle cx="50" cy="50" r="1.5" fill="#6086B8" opacity="0.5" />
        </pattern>
        <linearGradient id="fadeConnect" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#EEF2F6" stopOpacity="1" />
          <stop offset="100%" stopColor="#EEF2F6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#connect-nodes)" className="origin-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" />
      <rect width="100%" height="100%" fill="url(#fadeConnect)" />
    </svg>
  );
}

// Engineering Blueprint Grid Overlay Mapping Formatting Neatly Visual Constraints Smoothly Setting Standard Successfully Tracing Flawlessly Scaling Output Correctly Optimizing Intelligently Handling Smooth Native Safely Accurately Parsing Correct Output 
export function EngineeringTexture() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="engineer-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#65A69B" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.7" />
          <rect x="0" y="0" width="3" height="3" fill="#65A69B" opacity="0.5" />
        </pattern>
        <linearGradient id="fadeEng" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D6F8E4" stopOpacity="1" />
          <stop offset="100%" stopColor="#D6F8E4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#engineer-grid)" className="origin-center transition-transform duration-700 ease-out group-hover:-translate-x-3 group-hover:-translate-y-2 group-hover:scale-[1.02]" />
      <rect width="100%" height="100%" fill="url(#fadeEng)" />
    </svg>
  );
}

// Communication Soft Tone Soundwave Rendering Accurately Designing Patterns Visual Logic Clean Fluid Operations Securing Formatting Elegantly Safely Dynamically Rendering Generating Neatly Tracking Accurately Mapping Structuring Efficient Bounds 
export function CommunicationTexture() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.5]" viewBox="0 0 400 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fadeCom" x1="0%" y1="0%" x2="0%" y2="100%">
           <stop offset="20%" stopColor="#E6D4FC" stopOpacity="0" />
           <stop offset="100%" stopColor="#F1E5F8" stopOpacity="1" />
        </linearGradient>
        <filter id="softGlow">
           <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
           <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
           </feMerge>
        </filter>
      </defs>
      <g className="origin-left transition-transform duration-[800ms] ease-out group-hover:scale-x-[1.15] group-hover:-translate-y-4">
        <path d="M-100,180 Q100,110 250,150 T500,80" fill="none" stroke="#CAAFE2" strokeWidth="2" filter="url(#softGlow)" opacity="0.5" />
        <path d="M-50,220 Q150,280 300,180 T600,150" fill="none" stroke="#CAAFE2" strokeWidth="3" filter="url(#softGlow)" opacity="0.7" />
        <path d="M0,260 Q100,230 200,270 T500,210" fill="none" stroke="#DBCDEC" strokeWidth="1.5" opacity="0.6" />
      </g>
      <rect width="100%" height="100%" fill="url(#fadeCom)" />
    </svg>
  );
}