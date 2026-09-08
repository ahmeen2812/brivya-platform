"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_BRAND_DATA } from "@/data/footerLinks";
import { FooterSocial } from "./FooterSocial";

export interface FooterBrandProps {
  readonly logoRef?: React.Ref<HTMLDivElement>;
  readonly descRef?: React.Ref<HTMLParagraphElement>;
  readonly registerSocialRef?: (index: number, el: HTMLElement | null) => void;
}

export const FooterBrand = forwardRef<HTMLDivElement, FooterBrandProps>(
  ({ logoRef, descRef, registerSocialRef }, ref) => {
    return (
      /* 
        Symmetrical Column Flexbox:
        - Removed asymmetrical md:pr-4 so the center axis is mathematically balanced.
        - items-center ensures Logo, Description, and Social Icons share the identical center line.
      */
      <div ref={ref} className="flex flex-col items-center text-center w-full">
        {/* 1. Official Brivya Logo — Centered on the shared horizontal center axis */}
        <div className="w-full flex justify-center items-center">
          <Link
            href="/"
            aria-label="Brivya Solutions - Back to top"
            className="group relative inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
          >
            <div ref={logoRef} className="relative h-9 w-[150px] sm:h-10 sm:w-[165px] flex items-center justify-center">
              <Image
                src={FOOTER_BRAND_DATA.logoSrc}
                alt={FOOTER_BRAND_DATA.name}
                width={165}
                height={44}
                priority
                className="h-full w-auto object-contain object-center"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </Link>
        </div>

        {/* 
          2. Company Description:
          - High-contrast Deep Slate-Navy (#163456) with >9:1 contrast ratio against the gradient.
          - Horizontally centered with balanced line wrapping.
        */}
        <p
          ref={descRef}
          style={{ color: "#163456" }}
          className="mt-3.5 w-full max-w-[310px] sm:max-w-[320px] font-sans text-[13px] sm:text-[13.5px] leading-[1.65] font-medium text-center mx-auto"
        >
          {FOOTER_BRAND_DATA.tagline}
        </p>

        {/* 3. Social Icons Row — Centered on the shared horizontal center axis */}
        <div className="mt-10 sm:mt-12 w-full flex justify-center items-center">
          <FooterSocial registerSocialRef={registerSocialRef} />
        </div>
      </div>
    );
  }
);

FooterBrand.displayName = "FooterBrand";
export default FooterBrand;



