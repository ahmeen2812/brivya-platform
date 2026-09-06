"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";
import { SITE_CONTACT } from "@/config/siteContact";
import { CalendlyModal } from "@/components/sections/inquiry/CalendlyModal";

export const CustomWebsitesCtaDesktop: React.FC = () => {
  const { cta } = CUSTOM_WEBSITES_CONTENT;
  const { meeting } = SITE_CONTACT;
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section className="relative w-full mb-20 select-none">
        {/* Unfilled Bordered Layout (NOT filled card background) */}
        <div className="w-full rounded-3xl border border-[#BACFE6] bg-white/60 backdrop-blur-xs p-12 text-center flex flex-col items-center shadow-[0_8px_30px_-6px_rgba(7,54,109,0.04)]">
          <h2 className="font-sans text-[36px] font-extrabold text-[#06162C] leading-[1.14] tracking-[-0.035em]">
            {cta.heading}
          </h2>

          <p className="mt-4 font-sans text-[16px] leading-[1.7] text-[#475569] font-normal tracking-[-0.01em] max-w-[620px]">
            {cta.description}
          </p>

          {/* Two Action Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
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

      {/* Calendly Consultation Modal */}
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