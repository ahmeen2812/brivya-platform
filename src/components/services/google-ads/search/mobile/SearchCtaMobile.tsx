"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { GOOGLE_SEARCH_ADS_CONTENT } from "@/config/services/googleSearchAds";
import { initCtaAnimation } from "../animations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export interface SearchCtaMobileProps {
  readonly onOpenCalendly: () => void;
}

export const SearchCtaMobile: React.FC<SearchCtaMobileProps> = ({ onOpenCalendly }) => {
  const { cta } = GOOGLE_SEARCH_ADS_CONTENT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initCtaAnimation({
      container: containerRef.current,
      heading: headingRef.current,
      description: descRef.current,
      buttons: buttonsRef.current,
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section className="relative w-full mb-12 select-none overflow-x-clip">
      <div
        ref={containerRef}
        className="w-full rounded-2xl border border-[#BACFE6] bg-transparent p-6 text-center flex flex-col items-center will-change-transform"
      >
        <h2
          ref={headingRef}
          className="font-sans text-[24px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight will-change-transform"
        >
          {cta.heading}
        </h2>

        <p
          ref={descRef}
          className="mt-3 font-sans text-[14px] leading-[1.65] text-[#475569] will-change-transform"
        >
          {cta.description}
        </p>

        <div
          ref={buttonsRef}
          className="mt-6 flex flex-col gap-3 w-full will-change-transform"
        >
          <Link
            href="/start-project"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] py-3.5 font-sans text-sm font-semibold text-white shadow-md active:scale-[0.98]"
          >
            <span>{cta.primaryButtonText}</span>
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            onClick={onOpenCalendly}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300 py-3.5 font-sans text-sm font-semibold text-[#06162C] shadow-2xs active:scale-[0.98]"
          >
            <span>{cta.secondaryButtonText}</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};