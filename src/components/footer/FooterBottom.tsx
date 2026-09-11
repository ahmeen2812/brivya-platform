"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_BRAND_DATA } from "@/data/footerLinks";

export const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 font-sans text-[12px] text-[#8998AD]">
      {/* Left: Copyright Statement */}
      <p>
        &copy; {FOOTER_BRAND_DATA.establishedYear} {FOOTER_BRAND_DATA.name}. All rights reserved.
      </p>

      {/* Right: Quick Legal Links */}
      <div className="flex items-center space-x-6">
        <Link
          href="/privacy"
          className="transition-colors duration-200 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1675F8]"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="transition-colors duration-200 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1675F8]"
        >
          Terms
        </Link>
        <Link
          href="/cookies"
          className="transition-colors duration-200 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1675F8]"
        >
          Cookies
        </Link>
      </div>
    </div>
  );
};