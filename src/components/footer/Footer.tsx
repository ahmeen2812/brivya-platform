"use client";

import React from "react";
import { FooterTexture } from "./FooterTexture";
import { FooterCTA } from "./FooterCTA";
import { BrandSection } from "./BrandSection";
import { FooterColumn } from "./FooterColumn";
import { MobileFooterAccordion } from "./MobileFooterAccordion";
import { FooterBottom } from "./FooterBottom";
import { FOOTER_CATEGORIES } from "@/data/footerLinks";
import "@/styles/footer.css";

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="brivya-footer-surface relative w-full overflow-hidden border-t border-white/[0.08] select-none"
    >
      {/* Subtle Vector Background Texture (4–5% Opacity) */}
      <FooterTexture />

      {/* Central Viewport Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8">
        {/* Top: Natural Blended CTA Strip */}
        <FooterCTA />

        {/* Middle Navigation Block */}
        <div className="py-12 sm:py-16">
          {/* Desktop Layout: Clean 5-Column Grid */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12">
            {/* Column 1: Brand Nomenclature, Manifesto, Social Icons (4 Cols) */}
            <div className="md:col-span-4 lg:col-span-4">
              <BrandSection />
            </div>

            {/* Columns 2-5: Services, Solutions, Company, Resources (8 Cols) */}
            <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {FOOTER_CATEGORIES.map((category) => (
                <FooterColumn key={category.id} category={category} />
              ))}
            </div>
          </div>

          {/* Mobile Layout: Brand First, Then Accordion Stack (< 768px) */}
          <div className="flex flex-col space-y-8 md:hidden">
            <BrandSection />
            <MobileFooterAccordion />
          </div>
        </div>

        {/* Bottom Legal Copyright Row */}
        <FooterBottom />
      </div>
    </footer>
  );
};