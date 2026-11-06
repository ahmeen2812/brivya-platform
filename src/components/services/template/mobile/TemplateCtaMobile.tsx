"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { SITE_CONTACT } from "@/config/siteContact";
import { CalendlyModal } from "@/components/sections/inquiry/CalendlyModal";
import { UnifiedServiceConfig } from "../types/ServiceTemplateSchema";
import { initTemplateCtaAnimation } from "../animations/faqCtaAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: UnifiedServiceConfig["cta"];
}

export const TemplateCtaMobile: React.FC<Props> = ({ data }) => {
  const { meeting } = SITE_CONTACT;
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = initTemplateCtaAnimation({
      container: containerRef.current,
      heading: headingRef.current,
      description: descRef.current,
      buttons: buttonsRef.current,
    });
    return () => ctx?.revert();
  }, [data]);

  return (
    <>
      <section className="relative w-full mb-12 select-none overflow-x-clip">
        <div ref={containerRef} className="w-full rounded-2xl border border-[#BACFE6] bg-transparent p-6 text-center flex flex-col items-center will-change-transform">
          <h2 ref={headingRef} className="font-sans text-[24px] font-extrabold text-[#06162C] leading-[1.2] tracking-tight will-change-transform">
            {data.heading}
          </h2>
          <p ref={descRef} className="mt-3 font-sans text-[14px] leading-[1.65] text-[#475569] will-change-transform">
            {data.description}
          </p>
          
          <div ref={buttonsRef} className="mt-6 flex flex-col gap-3 w-full will-change-transform">
            <Link href="/start-project" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] py-3.5 font-sans text-sm font-semibold text-white shadow-md active:scale-[0.98]">
              <span>{data.primaryButtonText}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <button type="button" onClick={() => setIsCalendlyOpen(true)} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300 py-3.5 font-sans text-sm font-semibold text-[#06162C] shadow-2xs active:scale-[0.98]">
              <span>{data.secondaryButtonText}</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>

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