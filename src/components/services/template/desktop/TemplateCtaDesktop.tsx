"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { SITE_CONTACT } from "@/config/siteContact";
import { CalendlyModal } from "@/components/sections/inquiry/CalendlyModal";
import { UnifiedServiceConfig } from "../types/ServiceTemplateSchema";
import { initTemplateCtaAnimation } from "../animations/faqCtaAnimations";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

interface Props {
  data: UnifiedServiceConfig["cta"];
}

export const TemplateCtaDesktop: React.FC<Props> = ({ data }) => {
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
      <section className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip">
        <div ref={containerRef} className="w-full rounded-3xl border border-[#BACFE6] bg-transparent p-12 text-center flex flex-col items-center will-change-transform">
          <h2 ref={headingRef} className="font-sans text-[34px] xl:text-[38px] font-extrabold text-[#06162C] leading-[1.14] tracking-[-0.035em] will-change-transform max-w-[840px]">
            {data.heading}
          </h2>
          <p ref={descRef} className="mt-4 font-sans text-[15.5px] leading-[1.7] text-[#475569] font-normal tracking-[-0.01em] max-w-[660px] will-change-transform">
            {data.description}
          </p>

          <div ref={buttonsRef} className="mt-8 flex items-center justify-center gap-4 will-change-transform">
            <Link href="/start-project" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-8 py-3.5 font-sans text-sm font-semibold text-white shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all">
              <span>{data.primaryButtonText}</span>
              <span aria-hidden="true">→</span>
            </Link>

            <button type="button" onClick={() => setIsCalendlyOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300/90 px-7 py-3.5 font-sans text-sm font-semibold text-[#06162C] shadow-sm hover:text-[#0A5FD7] active:scale-[0.98] transition-all">
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