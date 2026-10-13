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
      <div ref={ref} className="flex flex-col items-start pr-0 md:pr-4 w-full">
        {/* 
          1. Official Brivya Logo:
          Shifted 12px to the LEFT (-ml-3) independent of description alignment
        */}
        <Link
          href="/"
          aria-label="Brivya Solutions - Back to top"
          className="group relative inline-flex items-center -ml-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
        >
          <div ref={logoRef} className="relative h-9 w-[150px] sm:h-10 sm:w-[165px]">
            <Image
              src={FOOTER_BRAND_DATA.logoSrc}
              alt={FOOTER_BRAND_DATA.name}
              width={165}
              height={44}
              priority
              className="h-full w-auto object-contain object-left"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Link>

        {/* 
          2. Company Description:
          Center-aligned (text-center mx-auto) within the brand column
        */}
        <p
          ref={descRef}
          className="mt-3.5 w-full max-w-[310px] sm:max-w-[320px] font-sans text-[13px] sm:text-[13.5px] leading-[1.65] text-[#D9E8FA] text-center mx-auto"
        >
          {FOOTER_BRAND_DATA.tagline}
        </p>

        {/* 
          3. Social Icons Row:
          Moved 40–48px lower (mt-10 sm:mt-12) with 30–35px clearance above bottom divider
        */}
        <div className="mt-10 sm:mt-12 w-full flex justify-center">
          <FooterSocial registerSocialRef={registerSocialRef} />
        </div>
      </div>
    );
  }
);

FooterBrand.displayName = "FooterBrand";
export default FooterBrand;