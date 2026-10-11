"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TRUST_CONTENT } from "./content";
import { GoogleOfficialLogo, TrustpilotOfficialLogo } from "./TrustBrandIcons";
import { initTrustReveal } from "./animations/trustAnimations";

export interface TrustSectionProps {
  readonly className?: string;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const googleRef = useRef<HTMLDivElement | null>(null);
  const trustpilotRef = useRef<HTMLDivElement | null>(null);
  const statementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      initTrustReveal({
        container: containerRef.current,
        googlePill: googleRef.current,
        trustpilotPill: trustpilotRef.current,
        statement: statementRef.current,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const statementText = TRUST_CONTENT.clientStatement.showVerifiedCount
    ? TRUST_CONTENT.clientStatement.verifiedText
    : TRUST_CONTENT.clientStatement.defaultText;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Platform Credibility & Global Reach"
      className={`w-full flex items-center justify-center select-none ${className}`}
    >
      {/* 
        High-Precision Executive Trust Capsule:
        - Desktop: Single slim inline row
        - Mobile: Natural flex-wrap centering without horizontal overflow
      */}
      <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-6 rounded-2xl sm:rounded-full bg-white/90 border border-slate-200/80 px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_2px_10px_-2px_rgba(6,22,44,0.04)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]">
        {/* 1. Google Official Attribution */}
        <div ref={googleRef} className="flex items-center gap-2 shrink-0">
          <GoogleOfficialLogo className="h-4 sm:h-4.5 w-auto" />
          <span className="font-mono text-[9px] sm:text-[9.5px] uppercase tracking-wider text-[#475569] font-medium bg-slate-50 border border-slate-200/60 rounded px-1.5 py-0.5">
            {TRUST_CONTENT.platforms[0].attributionLabel}
          </span>
        </div>

        {/* Divider 1 */}
        <div
          aria-hidden="true"
          className="hidden sm:block h-3.5 w-[1px] bg-slate-200 shrink-0"
        />

        {/* 2. Trustpilot Official Attribution */}
        <div ref={trustpilotRef} className="flex items-center gap-2 shrink-0">
          <TrustpilotOfficialLogo className="h-4 sm:h-4.5 w-auto" />
          <span className="font-mono text-[9px] sm:text-[9.5px] uppercase tracking-wider text-[#475569] font-medium bg-slate-50 border border-slate-200/60 rounded px-1.5 py-0.5">
            {TRUST_CONTENT.platforms[1].attributionLabel}
          </span>
        </div>

        {/* Divider 2 */}
        <div
          aria-hidden="true"
          className="hidden sm:block h-3.5 w-[1px] bg-slate-200 shrink-0"
        />

        {/* 3. Client Trust Statement */}
        <div ref={statementRef} className="flex items-center gap-2 shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shrink-0" />
          <span className="font-sans text-[12px] sm:text-[13px] font-medium text-[#06162C] tracking-tight">
            {statementText}
          </span>
        </div>
      </div>
    </div>
  );
};