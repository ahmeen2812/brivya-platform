"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { PERFORMANCE_OPTIMIZATION_CONTENT } from "@/config/services/performanceOptimization";
import { SITE_CONTACT } from "@/config/siteContact";
import { CalendlyModal } from "@/components/sections/inquiry/CalendlyModal";
import { initCtaAnimation } from "./animations";
import { PerformanceCtaMobile } from "./mobile/PerformanceCtaMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const PerformanceCta: React.FC = () => {
  const { cta } = PERFORMANCE_OPTIMIZATION_CONTENT;
  const { meeting } = SITE_CONTACT;
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initCtaAnimation({
      container: containerRef.current,
      heading: headingRef.current,
      descriptionParagraphs: paraRefs.current,
      buttons: buttonsRef.current,
    });

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT */}
      <section className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip">
        <div
          ref={containerRef}
          className="w-full rounded-3xl border border-[#BACFE6] bg-transparent p-12 text-center flex flex-col items-center will-change-transform"
        >
          <h2
            ref={headingRef}
            className="font-sans text-[34px] xl:text-[38px] font-extrabold text-[#06162C] leading-[1.14] tracking-[-0.035em] will-change-transform max-w-[840px]"
          >
            {cta.heading}
          </h2>

          <div className="mt-4 flex flex-col space-y-2 max-w-[680px]">
            {cta.paragraphs.map((p, idx) => (
              <p
                key={idx}
                ref={(el) => {
                  paraRefs.current[idx] = el;
                }}
                className="font-sans text-[15.5px] leading-[1.7] text-[#475569] font-normal tracking-[-0.01em] will-change-transform"
              >
                {p}
              </p>
            ))}
          </div>

          <div
            ref={buttonsRef}
            className="mt-8 flex items-center justify-center gap-4 will-change-transform"
          >
            <Link
              href="/start-project"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-8 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] transition-all"
            >
              <span>{cta.primaryButtonText}</span>
              <span aria-hidden="true">→</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsCalendlyOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300/90 px-7 py-3.5 font-sans text-sm font-semibold text-[#06162C] shadow-2xs hover:bg-slate-50 hover:border-[#0A5FD7]/50 hover:text-[#0A5FD7] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>{cta.secondaryButtonText}</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <PerformanceCtaMobile onOpenCalendly={() => setIsCalendlyOpen(true)} />
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={meeting.calendlyUrl}
        primaryColor={meeting.theme.primaryColor}
        textColor={meeting.theme.textColor}
        backgroundColor={meeting.theme.backgroundColor}
      />
    </>
  );
};