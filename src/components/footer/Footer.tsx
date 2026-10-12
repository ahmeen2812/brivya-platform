"use client";

import React from "react";
import { FooterTexture } from "./FooterTexture";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { MobileFooterAccordion } from "./MobileFooterAccordion";
import { FooterBottom } from "./FooterBottom";
import { FOOTER_CATEGORIES } from "@/data/footerLinks";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="relative w-full overflow-hidden select-none bg-[linear-gradient(180deg,#F4F7FC_0%,#DCEBFA_18%,#2A5692_60%,#16355F_100%)]"
    >
      <FooterTexture />

      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8">
        <div className="pt-10 sm:pt-12 md:pt-14 pb-7 sm:pb-8">
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="md:col-span-5 lg:col-span-4">
              <FooterBrand />
            </div>

            <div className="md:col-span-3 lg:col-span-3">
              <FooterLinks category={FOOTER_CATEGORIES[0]} />
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <FooterLinks category={FOOTER_CATEGORIES[1]} />
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <FooterLinks category={FOOTER_CATEGORIES[2]} />
            </div>
          </div>

          <div className="flex flex-col space-y-6 md:hidden">
            <FooterBrand />
            <MobileFooterAccordion />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
