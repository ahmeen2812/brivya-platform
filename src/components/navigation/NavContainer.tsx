"use client";

import * as React from "react";

interface NavContainerProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
  borderRef: React.RefObject<HTMLDivElement | null>;
  centerLineRef: React.RefObject<HTMLDivElement | null>;
}

export const NavContainer: React.FC<NavContainerProps> = ({
  children,
  containerRef,
  borderRef,
  centerLineRef,
}) => {
  return (
    <header className="fixed top-3 sm:top-5 md:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none select-none">
      {/* 
        Temporary Central Caliper String: 
        Drops from the sky at 0.0s before the pill expands
      */}
      <div
        ref={centerLineRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-12 w-[1.5px] -translate-x-1/2 bg-[#1675F8] opacity-0"
        style={{ willChange: "transform, opacity" }}
      />

      {/* 
        The Main Pill Shell:
        Expands outward from center (Dynamic Island)
      */}
      <div
        ref={containerRef}
        className="pointer-events-auto relative flex w-full max-w-[1360px] items-center justify-between overflow-hidden rounded-full bg-white px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3 shadow-[0_12px_45px_-8px_rgba(6,22,44,0.12),0_4px_16px_-4px_rgba(6,22,44,0.06)]"
        style={{
          transformOrigin: "center center",
          willChange: "width, transform, opacity",
        }}
      >
        {/* 
          Temporary Perimeter Border (Traces for 2-3 seconds, then dissolves):
          Engineered using a high-precision hairline SVG wrapper to fit any screen smoothly
        */}
        <div
          ref={borderRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-[#1675F8]/40 ring-1 ring-[#1675F8]/20 transition-opacity duration-700"
          style={{ willChange: "opacity" }}
        />

        {/* Child components (Logo, Links, Dividers, CTA) */}
        {children}
      </div>
    </header>
  );
};