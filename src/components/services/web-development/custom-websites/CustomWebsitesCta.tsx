"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";
import { SITE_CONTACT } from "@/config/siteContact";
import { CalendlyModal } from "@/components/sections/inquiry/CalendlyModal";

export const CustomWebsitesCta: React.FC = () => {
  const { cta } = CUSTOM_WEBSITES_CONTENT;
  const { meeting } = SITE_CONTACT;
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section className="relative w-full mb-16 sm:mb-20 select-none">
        <div
          /* 
            Master Gradient Card Chassis:
            from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] with border-[#BACFE6]
          */
          className="relative w-full rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 sm:p-11 lg:p-14 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] overflow-hidden text-center flex flex-col items-center"
        >
          <div className="relative z-10 max-w-[760px] mx-auto flex flex-col items-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#BACFE6] shadow-2xs mb-4">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#06162C]">
                Ready to Build
              </span>
            </div>

            {/* Display Heading */}
            <h2 className="font-sans text-[28px] sm:text-[36px] md:text-[40px] font-extrabold text-[#06162C] leading-[1.12] tracking-[-0.035em]">
              {cta.heading}
            </h2>

            {/* Paragraphs */}
            <div className="mt-4 sm:mt-5 flex flex-col space-y-2 max-w-[640px]">
              {cta.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-sans text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Exact Two Buttons Array */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Button 1: Contact Us (Routes to Contact Page) */}
              <Link
                href="/start-project"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-8 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] transition-all duration-300 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
              >
                <span>{cta.primaryButtonText}</span>
                <span aria-hidden="true">→</span>
              </Link>

              {/* Button 2: Book a Consultation (Triggers Calendly Modal Directly) */}
              <button
                type="button"
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300/90 px-7 py-3.5 font-sans text-sm font-semibold text-[#06162C] shadow-2xs transition-all duration-300 hover:bg-slate-50 hover:border-[#0A5FD7]/50 hover:text-[#0A5FD7] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7] cursor-pointer"
              >
                <span>{cta.secondaryButtonText}</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Official Calendly Modal Integration */}
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