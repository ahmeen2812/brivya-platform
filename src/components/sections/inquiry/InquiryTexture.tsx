"use client";

import React from "react";

export const InquiryTexture: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none overflow-hidden rounded-[inherit]"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="inquiry-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#0A5FD7" strokeWidth="0.5" />
            <circle cx="16" cy="16" r="0.75" fill="#0A5FD7" />
          </pattern>
          <pattern id="inquiry-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="0.6" fill="#1675F8" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#inquiry-grid)" />
        <rect x="5%" y="70%" width="120" height="80" fill="url(#inquiry-dots)" />
        <rect x="85%" y="10%" width="100" height="70" fill="url(#inquiry-dots)" />

        {/* Minimal Engineering Corner Brackets */}
        <g stroke="#0A5FD7" strokeWidth="0.8" fill="none">
          <path d="M 18 26 L 18 18 L 26 18" />
          <path d="M calc(100% - 26px) 18 L calc(100% - 18px) 18 L calc(100% - 18px) 26" />
          <path d="M 18 calc(100% - 26px) L 18 calc(100% - 18px) L 26 calc(100% - 18px)" />
          <path d="M calc(100% - 26px) calc(100% - 18px) L calc(100% - 18px) calc(100% - 18px) L calc(100% - 18px) calc(100% - 26px)" />
        </g>
      </svg>
    </div>
  );
};