"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_BRAND_DATA } from "@/data/footerLinks";
import { FooterSocial } from "./FooterSocial";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start pr-0 md:pr-4">
      {/* Official Brivya Logo from navbar root (/images/logo.png) */}
      <Link
        href="/"
        aria-label="Brivya Solutions - Back to top"
        className="group relative inline-flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
      >
        <div className="relative h-8 w-[132px] sm:h-9 sm:w-[138px]">
          <Image
            src={FOOTER_BRAND_DATA.logoSrc}
            alt={FOOTER_BRAND_DATA.name}
            width={138}
            height={36}
            className="h-full w-auto object-contain object-left"
            priority
          />
        </div>
      </Link>

      {/* Human Manifesto Copy */}
      <p className="mt-3.5 max-w-[310px] font-sans text-[13px] sm:text-[13.5px] leading-[1.65] text-[#DCEBFC]/90">
        {FOOTER_BRAND_DATA.tagline}
      </p>

      {/* 36px Social Badges */}
      <div className="mt-5">
        <FooterSocial />
      </div>
    </div>
  );
}

export default FooterBrand;