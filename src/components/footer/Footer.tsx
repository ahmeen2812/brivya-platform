"use client";

import React from "react";
import { FooterTexture } from "./FooterTexture";
import { FooterCTA } from "./FooterCTA";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { MobileFooterAccordion } from "./MobileFooterAccordion";
import { FooterBottom } from "./FooterBottom";
import { FOOTER_CATEGORIES } from "@/data/footerLinks";
import "@/styles/footer.css";

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      /* 
        Compact Full-Width Ending:
        - Thin hairline separator above
        - Soft blue-gray surface: #162A45 to #245CA8
        - Desktop height targeted within 350-450px
      */
      className="brivya-footer-surface relative w-full overflow-hidden border-t border-slate-200/60 select-none"
    >
      {/* 4–6% Subtle Vector Texture */}
      <FooterTexture />

      {/* Main Viewport Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8">
        {/* 1. Horizontal CTA Strip */}
        <FooterCTA />

        {/* 2. Compact 4-Column Navigation Block */}
        <div className="py-8 sm:py-9 md:py-10">
          {/* Desktop Layout: 4 Columns */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10">
            {/* Column 1: Brand (Logo, Tagline, 34px Social Icons) - 4 Cols */}
            <div className="md:col-span-5 lg:col-span-4">
              <FooterBrand />
            </div>

            {/* Column 2: Services - 3.5 Cols */}
            <div className="md:col-span-3 lg:col-span-3">
              <FooterLinks category={FOOTER_CATEGORIES[0]} />
            </div>

            {/* Column 3: Company - 2 Cols */}
            <div className="md:col-span-2 lg:col-span-2">
              <FooterLinks category={FOOTER_CATEGORIES[1]} />
            </div>

            {/* Column 4: Resources - 3 Cols */}
            <div className="md:col-span-2 lg:col-span-3">
              <FooterLinks category={FOOTER_CATEGORIES[2]} />
            </div>
          </div>

          {/* Mobile Layout (< 768px): Brand First, Then Accordion */}
          <div className="flex flex-col space-y-6 md:hidden">
            <FooterBrand />
            <MobileFooterAccordion />
          </div>
        </div>

        {/* 3. Bottom Legal Row */}
        <FooterBottom />
      </div>
    </footer>
  );
};