"use client";

import * as React from "react";
import { triggerInteractiveBorderPulse } from "@/animations/navDesktopAnimations";

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
  const handleMouseEnter = () => {
    triggerInteractiveBorderPulse(borderRef.current);
  };

  return (
    <header className="fixed top-3 sm:top-5 md:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none select-none">
      {/* Central Drop Line */}
      <div
        ref={centerLineRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-12 w-[1.5px] -translate-x-1/2 bg-[#1675F8] opacity-0"
        style={{ willChange: "transform, opacity" }}
      />

      {/* 
        Engineered Floating Pill Chassis:
        - Replaced diffuse AI shadow with 1px hairline border + subtle contact shadow + top specular highlight
      */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        className="pointer-events-auto relative flex w-full max-w-[1360px] items-center justify-between overflow-hidden rounded-full bg-white px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3 border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(6,22,44,0.06),0_1px_3px_rgba(6,22,44,0.03)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]"
        style={{
          transformOrigin: "center center",
          willChange: "width, transform, opacity",
        }}
      >
        {/* Interactive Perimeter Border (Sheen on reveal, hover, or click) */}
        <div
          ref={borderRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-[#1675F8]/45 ring-1 ring-[#1675F8]/25 transition-opacity"
          style={{ willChange: "opacity" }}
        />

        {children}
      </div>
    </header>
  );
};