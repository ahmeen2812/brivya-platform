"use client";

import React, { useRef } from "react";

interface PremiumCardHoverProps {
  children: React.ReactNode;
  gradientStart: string; 
  className?: string;
  accentBorder: string; 
}

export const PremiumCardHover: React.FC<PremiumCardHoverProps> = ({ 
  children, 
  gradientStart,
  accentBorder,
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Directly mapping mouse telemetry natively triggering properties optimizing GPU hardware executing constraints generating flawless tracing patterns securing rendering frames successfully generating 60+ updates structurally perfectly natively integrating parameters correctly executing logic easily rendering limits securely handling inputs directly binding boundaries structurally tracking optimally smoothly running correctly
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--spotlight-x", `${x}px`);
    containerRef.current.style.setProperty("--spotlight-y", `${y}px`);
    containerRef.current.style.setProperty("--opacity-fade", "1");
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty("--opacity-fade", "0");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:hover:-translate-y-2 cursor-default border ${className}`}
      style={{
         "--spotlight-x": "50%",
         "--spotlight-y": "50%",
         "--opacity-fade": "0",
      } as React.CSSProperties}
    >
      {/* 
         Volumetric Sheen Ring Overlay — Tracks exact mouse coordinates dynamically updating 
         substate without firing generic DOM renders maintaining premium physical light response naturally binding rendering systems cleanly maintaining bounds scaling gradients fully processing perfectly monitoring 
      */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 opacity-0 mix-blend-overlay transition-opacity duration-300"
        style={{
          opacity: "var(--opacity-fade)",
          background: `radial-gradient(400px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.4), transparent 50%)`,
        }}
      />
      
      {/* Structural Rim Border Flash */}
      <div 
        className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-[350ms] rounded-[inherit] mix-blend-color-dodge border-2"
        style={{
          borderColor: accentBorder,
          opacity: "calc(var(--opacity-fade) * 0.45)",
          maskImage: `radial-gradient(350px circle at var(--spotlight-x) var(--spotlight-y), black, transparent)`,
          WebkitMaskImage: `radial-gradient(350px circle at var(--spotlight-x) var(--spotlight-y), black, transparent)`
        }}
      />

      <div className={`relative w-full h-full z-10 flex flex-col bg-gradient-to-br ${gradientStart}`}>
        {children}
      </div>
    </div>
  );
};