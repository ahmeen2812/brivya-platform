"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_BRAND_DATA } from "@/data/footerLinks";
import { FooterSocial } from "./FooterSocial";

export const FooterBrand: React.FC = () => {
  return (
    <div className="flex flex-col items-start pr-0 md:pr-4">
      {/* Official Brivya Logo (132px Desktop Width, Matching Navbar Root) */}
      <Link
        href="/"
        aria-label="Brivya Solutions - Back to top"
        className="group relative inline-flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
      >
        <div className="relative h-8 w-[132px] sm:h-9 sm:w-[138px]">
          <Image
            src={FOOTER_BRAND_DATA.logoSrc}
            alt={FOOTER_BRAND_DATA.name}
            fill
            sizes="138px"
            className="object-contain object-left"
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
};