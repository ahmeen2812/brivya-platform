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

  // Internal Targets
  const brandLogoRef = useRef<HTMLDivElement | null>(null);
  const brandDescRef = useRef<HTMLParagraphElement | null>(null);
  const socialIconsList = useRef<(HTMLElement | null)[]>([]);

  const servicesHeaderRef = useRef<HTMLHeadingElement | null>(null);
  const servicesLinksList = useRef<(HTMLElement | null)[]>([]);

  const companyHeaderRef = useRef<HTMLHeadingElement | null>(null);
  const companyLinksContainerRef = useRef<HTMLUListElement | null>(null);
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
      companyLinksContainer: companyLinksContainerRef.current,
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
        Completely Smooth 10-Stop Progression:
        - 0%: #F4F7FC (exact match with previous section, zero cut line)
        - 12%: #EBF2FB (subtle ice blue begins)
        - 24%: #D8E6F7 (pale cool blue)
        - 36%: #BDD4F0 (soft blue-gray begins)
        - 48%: #9BBFE7 (Line 2: intermediate muted blue-gray)
        - 60%: #73A5DC (gentle slate blue)
        - 72%: #4F89CE (medium slate blue)
        - 84%: #3570B7 (deepening to Brivya blue)
        - 94%: #255A9C (settling into softened blue)
        - 100%: #204F8C (Line 3: final softened Brivya blue reached right before content begins)
      */
      className="relative w-full overflow-hidden select-none bg-[linear-gradient(180deg,#F4F7FC_0%,#EBF2FB_12%,#D8E6F7_24%,#BDD4F0_36%,#9BBFE7_48%,#73A5DC_60%,#4F89CE_72%,#3570B7_84%,#255A9C_94%,#204F8C_100%)]"
    >
      {/* 6% Subtle Architectural Vector Texture */}
      <FooterTexture />

      {/* Main Viewport Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8">
        {/* Navigation Content Area (Top padding aligns content with Line 3) */}
        <div className="pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-7 overflow-hidden">
          {/* Desktop 4-Column Layout (>= 768px) */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* 1. BRAND: Enters from Services position (RIGHT) -> Settle on Left */}
            <div ref={brandColRef} className="md:col-span-5 lg:col-span-4 will-change-transform">
              <FooterBrand
                logoRef={brandLogoRef}
                descRef={brandDescRef}
                registerSocialRef={(idx, el) => {
                  socialIconsList.current[idx] = el;
                }}
              />
            </div>

            {/* 2. SERVICES: Enters from Brand position (LEFT) -> Settle on Column 2 */}
            <div ref={servicesColRef} className="md:col-span-3 lg:col-span-3 will-change-transform">
              <FooterLinks
                category={FOOTER_CATEGORIES[0]}
                headerRef={servicesHeaderRef}
                registerLinkRef={(idx, el) => {
                  servicesLinksList.current[idx] = el;
                }}
              />
            </div>

            {/* 3. COMPANY: Links Emerge DOWNWARD from under heading */}
            <div ref={companyColRef} className="md:col-span-2 lg:col-span-2 will-change-transform">
              <FooterLinks
                category={FOOTER_CATEGORIES[1]}
                headerRef={companyHeaderRef}
                linksContainerRef={companyLinksContainerRef}
                isMaskedDownward={true}
                registerLinkRef={(idx, el) => {
                  companyLinksList.current[idx] = el;
                }}
              />
            </div>

            {/* 4. RESOURCES: Enters from BOTTOM (BELOW) */}
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

          {/* Mobile Layout (< 768px): Vertical Motion */}
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