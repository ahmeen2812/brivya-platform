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
      <div ref={ref} className="flex flex-col items-start pr-0 md:pr-4">
        {/* Real Brivya Logo with explicit styles to maintain aspect ratio and silence warning */}
        <Link
          href="/"
          aria-label="Brivya Solutions - Back to top"
          className="group relative inline-flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
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

        {/* Human Manifesto Description: High-Contrast Deep Slate-Navy */}
        <p
          ref={descRef}
          className="mt-3.5 max-w-[310px] font-sans text-[13px] sm:text-[13.5px] leading-[1.65] text-[#0E2B4E]"
        >
          {FOOTER_BRAND_DATA.tagline}
        </p>

        {/* 36px Synchronized Social Badges */}
        <div className="mt-5">
          <FooterSocial registerSocialRef={registerSocialRef} />
        </div>
      </div>
    );
  }
);

FooterBrand.displayName = "FooterBrand";
export default FooterBrand;