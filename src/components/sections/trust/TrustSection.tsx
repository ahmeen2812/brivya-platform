"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TRUST_CONTENT } from "./content";
import {
  GoogleBrandLogo,
  GoogleFiveStars,
  TrustpilotBrandLogo,
  TrustpilotFiveStarTiles,
} from "./TrustBrandIcons";
import { initTrustReveal } from "./animations/trustAnimations";

export interface TrustSectionProps {
  readonly className?: string;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const googleBlockRef = useRef<HTMLDivElement | null>(null);
  const trustpilotBlockRef = useRef<HTMLDivElement | null>(null);
  const statementRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      initTrustReveal({
        container: containerRef.current,
        googleBlock: googleBlockRef.current,
        trustpilotBlock: trustpilotBlockRef.current,
        statement: statementRef.current,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const statementText = TRUST_CONTENT.clientStatement.showVerifiedClientCount
    ? TRUST_CONTENT.clientStatement.verifiedText
    : TRUST_CONTENT.clientStatement.defaultText;

  const showStars = TRUST_CONTENT.ratings.showRatingStarsPreview;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Client Trust & Reviews"
      className={`w-full flex flex-col items-center justify-center select-none pt-2 sm:pt-4 ${className}`}
    >
      {/* 
        Two-Column Brand Arrangement matching Reference:
        Left: Google + 5 Gold Stars | Right: Trustpilot + 5 Green Star Tiles
      */}
      <div className="flex flex-row items-center justify-center gap-7 sm:gap-12 md:gap-16">
        {/* 1. Google Column */}
        <div
          ref={googleBlockRef}
          className="flex flex-col items-center justify-center gap-1.5 shrink-0"
        >
          <GoogleBrandLogo />
          {showStars && <GoogleFiveStars />}
        </div>

        {/* Subtle Vertical Hairline Divider */}
        <div
          aria-hidden="true"
          className="h-8 sm:h-9 w-[1px] bg-slate-200/80 shrink-0"
        />

        {/* 2. Trustpilot Column */}
        <div
          ref={trustpilotBlockRef}
          className="flex flex-col items-center justify-center gap-1.5 shrink-0"
        >
          <TrustpilotBrandLogo />
          {showStars && <TrustpilotFiveStarTiles />}
        </div>
      </div>

      {/* 3. Centered Trust Statement Underneath */}
      <p
        ref={statementRef}
        className="mt-3 sm:mt-3.5 text-center font-sans text-[12.5px] sm:text-[13.5px] font-medium text-[#475569] tracking-tight"
      >
        {statementText}
      </p>
    </div>
  );
};