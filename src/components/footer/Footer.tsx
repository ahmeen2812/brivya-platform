"use client";

import React, { useEffect, useRef } from "react";
import { FooterTexture } from "./FooterTexture";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { MobileFooterAccordion } from "./MobileFooterAccordion";
import { FooterBottom } from "./FooterBottom";
import { FOOTER_CATEGORIES } from "@/data/footerLinks";
import { initFooterScrollSequence } from "./animations/footerScrollAnimations";

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  // Column Refs (4 Major Groups)
  const brandColRef = useRef<HTMLDivElement | null>(null);
  const servicesColRef = useRef<HTMLDivElement | null>(null);
  const companyColRef = useRef<HTMLDivElement | null>(null);
  const resourcesColRef = useRef<HTMLDivElement | null>(null);
  const bottomBarRef = useRef<HTMLDivElement | null>(null);

  // Internal Stagger Targets
  const brandLogoRef = useRef<HTMLDivElement | null>(null);
  const brandDescRef = useRef<HTMLParagraphElement | null>(null);
  const socialIconsList = useRef<(HTMLElement | null)[]>([]);

  const servicesHeaderRef = useRef<HTMLHeadingElement | null>(null);
  const servicesLinksList = useRef<(HTMLElement | null)[]>([]);

  const companyHeaderRef = useRef<HTMLHeadingElement | null>(null);
  const companyLinksList = useRef<(HTMLElement | null)[]>([]);

  const resourcesHeaderRef = useRef<HTMLHeadingElement | null>(null);
  const resourcesLinksList = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = initFooterScrollSequence({
      footer: footerRef.current,
      brandCol: brandColRef.current,
      servicesCol: servicesColRef.current,
      companyCol: companyColRef.current,
      resourcesCol: resourcesColRef.current,
      bottomBar: bottomBarRef.current,
      brandLogo: brandLogoRef.current,
      brandDesc: brandDescRef.current,
      socialIcons: socialIconsList.current,
      servicesHeader: servicesHeaderRef.current,
      servicesLinks: servicesLinksList.current,
      companyHeader: companyHeaderRef.current,
      companyLinks: companyLinksList.current,
      resourcesHeader: resourcesHeaderRef.current,
      resourcesLinks: resourcesLinksList.current,
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      aria-label="Site Footer"
      /* 
        Spatially Continuous White-to-Blue Transition:
        - 0%: #F4F7FC (exact match with previous section, zero hard edge)
        - 10%: #C8DCF5 (soft blue transition)
        - 24%: #3665A3 (cobalt deepening)
        - 38%: #1C4376 (rich blue reached BEFORE navigation content begins)
        - 100%: #14335E (deep base)
      */
      className="relative w-full overflow-hidden select-none bg-[linear-gradient(180deg,#F4F7FC_0%,#C8DCF5_10%,#3665A3_24%,#1C4376_38%,#14335E_100%)]"
    >
      {/* 6% Subtle Architectural Texture */}
      <FooterTexture />

      {/* Main Viewport Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8">
        {/* Navigation Content Area (Padded to let transition complete before text) */}
        <div className="pt-16 sm:pt-20 md:pt-22 pb-7 sm:pb-8">
          {/* Desktop 4-Column Cross-Directional Layout (>= 768px) */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Group 1: Brand (Enters from RIGHT) */}
            <div ref={brandColRef} className="md:col-span-5 lg:col-span-4 will-change-transform">
              <FooterBrand
                logoRef={brandLogoRef}
                descRef={brandDescRef}
                registerSocialRef={(idx, el) => {
                  socialIconsList.current[idx] = el;
                }}
              />
            </div>

            {/* Group 2: Services (Enters from RIGHT) */}
            <div ref={servicesColRef} className="md:col-span-3 lg:col-span-3 will-change-transform">
              <FooterLinks
                category={FOOTER_CATEGORIES[0]}
                headerRef={servicesHeaderRef}
                registerLinkRef={(idx, el) => {
                  servicesLinksList.current[idx] = el;
                }}
              />
            </div>

            {/* Group 3: Company (Enters from LEFT) */}
            <div ref={companyColRef} className="md:col-span-2 lg:col-span-2 will-change-transform">
              <FooterLinks
                category={FOOTER_CATEGORIES[1]}
                headerRef={companyHeaderRef}
                registerLinkRef={(idx, el) => {
                  companyLinksList.current[idx] = el;
                }}
              />
            </div>

            {/* Group 4: Resources (Enters from LEFT) */}
            <div ref={resourcesColRef} className="md:col-span-2 lg:col-span-3 will-change-transform">
              <FooterLinks
                category={FOOTER_CATEGORIES[2]}
                headerRef={resourcesHeaderRef}
                registerLinkRef={(idx, el) => {
                  resourcesLinksList.current[idx] = el;
                }}
              />
            </div>
          </div>

          {/* Mobile Layout (< 768px) */}
          <div className="flex flex-col space-y-6 md:hidden">
            <FooterBrand />
            <MobileFooterAccordion />
          </div>
        </div>

        {/* Minimal Copyright Row */}
        <div ref={bottomBarRef}>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;