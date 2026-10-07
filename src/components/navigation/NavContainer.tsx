"use client";

import * as React from "react";
import { triggerInteractiveBorderPulse } from "@/animations/navDesktopAnimations";

export interface NavContainerProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
  borderRef: React.RefObject<HTMLDivElement | null>;
  centerLineRef: React.RefObject<HTMLDivElement | null>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const NavContainer: React.FC<NavContainerProps> = ({
  children,
  containerRef,
  borderRef,
  centerLineRef,
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleContainerMouseEnter = () => {
    // Pulse the perimeter border
    triggerInteractiveBorderPulse(borderRef.current);
    // Notify parent to cancel any idle timers
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 md:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none select-none">
      {/* 
        Central Drop Line (Plumb line for initial reveal):
        Drops from above at 0.0s before the pill expands
      */}
      <div
        ref={centerLineRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-12 w-[1.5px] -translate-x-1/2 bg-[#1675F8] opacity-0"
        style={{ willChange: "transform, opacity" }}
      />

      {/* 
        The Main Floating Pill Chassis:
        Pre-rendered directly in its hidden initial animation state
        (opacity: 0, width: 60px, scale: 0.96) to eliminate the initial paint flash!
      */}
      <div
        ref={containerRef}
        onMouseEnter={handleContainerMouseEnter}
        onMouseLeave={onMouseLeave}
        className="pointer-events-auto relative flex w-full max-w-[1360px] items-center justify-between overflow-hidden rounded-full bg-white px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3 border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(6,22,44,0.06),0_1px_3px_rgba(6,22,44,0.03)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]"
        style={{
          opacity: 0,
          width: "60px",
          transform: "scale(0.96)",
          transformOrigin: "center center",
          willChange: "width, transform, opacity, max-width",
        }}
      >
        {/* Subtle interactive perimeter border */}
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