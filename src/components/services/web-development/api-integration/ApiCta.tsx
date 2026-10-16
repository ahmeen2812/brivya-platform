"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { API_INTEGRATION_CONTENT } from "@/config/services/apiIntegration";
import { SITE_CONTACT } from "@/config/siteContact";
import { CalendlyModal } from "@/components/sections/inquiry/CalendlyModal";
import { initCtaAnimation } from "./animations";
import { ApiCtaMobile } from "./mobile/ApiCtaMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const ApiCta: React.FC = () => {
  const { cta } = API_INTEGRATION_CONTENT;
  const { meeting } = SITE_CONTACT;
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const leadRef = useRef<HTMLParagraphElement | null>(null);
  const bodyRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = initCtaAnimation({
      container: containerRef.current,
      heading: headingRef.current,
      descriptionLead: leadRef.current,
      descriptionBody: bodyRef.current,
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
            className="font-sans text-[34px] xl:text-[38px] font-extrabold text-[#06162C] leading-[1.14] tracking-[-0.035em] will-change-transform max-w-[820px]"
          >
            {cta.heading}
          </h2>

          <p
            ref={leadRef}
            className="mt-4 font-sans text-[16px] leading-[1.7] text-[#07366D] font-semibold tracking-[-0.01em] max-w-[620px] will-change-transform"
          >
            {cta.descriptionLead}
          </p>

          <p
            ref={bodyRef}
            className="mt-2 font-sans text-[15px] leading-[1.7] text-[#475569] font-normal tracking-[-0.01em] max-w-[680px] will-change-transform"
          >
            {cta.descriptionBody}
          </p>

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
        <ApiCtaMobile onOpenCalendly={() => setIsCalendlyOpen(true)} />
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