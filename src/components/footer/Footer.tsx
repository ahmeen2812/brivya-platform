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
        Calibrated Three-Boundary Gradient:
        - 0px (Line 1): #F4F7FC (exact website canvas)
        - 75px (Line 2): #8CB6E3 (intermediate muted blue-gray)
        - 160px (Line 3): #1D477D (softened Brivya blue reached BEFORE content begins)
        - Below 160px: Stable #1D477D throughout
      */
      className="relative w-full overflow-hidden select-none bg-[linear-gradient(180deg,#F4F7FC_0px,#D9E8F9_35px,#8CB6E3_75px,#4174AC_115px,#20497F_145px,#1D477D_160px,#1D477D_100%)]"
    >
      {/* 6% Subtle Architectural Vector Texture */}
      <FooterTexture />

      {/* Main Viewport Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8">
        {/* Navigation Content Area (Top padding aligns content with Boundary 3) */}
        <div className="pt-28 sm:pt-32 md:pt-36 pb-6 sm:pb-7">
          {/* Desktop 4-Column Cross-Directional Layout (>= 768px) */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 items-start overflow-hidden">
            {/* Group 1: Brand (Enters from RIGHT, 140px travel) */}
            <div ref={brandColRef} className="md:col-span-5 lg:col-span-4 will-change-transform">
              <FooterBrand
                logoRef={brandLogoRef}
                descRef={brandDescRef}
                registerSocialRef={(idx, el) => {
                  socialIconsList.current[idx] = el;
                }}
              />
            </div>

            {/* Group 2: Services (Enters from RIGHT, 140px travel) */}
            <div ref={servicesColRef} className="md:col-span-3 lg:col-span-3 will-change-transform">
              <FooterLinks
                category={FOOTER_CATEGORIES[0]}
                headerRef={servicesHeaderRef}
                registerLinkRef={(idx, el) => {
                  servicesLinksList.current[idx] = el;
                }}
              />
            </div>

            {/* Group 3: Company (Enters from LEFT, 140px travel) */}
            <div ref={companyColRef} className="md:col-span-2 lg:col-span-2 will-change-transform">
              <FooterLinks
                category={FOOTER_CATEGORIES[1]}
                headerRef={companyHeaderRef}
                registerLinkRef={(idx, el) => {
                  companyLinksList.current[idx] = el;
                }}
              />
            </div>

            {/* Group 4: Resources (Enters from LEFT, 140px travel) */}
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