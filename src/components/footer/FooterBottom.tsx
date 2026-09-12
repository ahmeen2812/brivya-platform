"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_BRAND_DATA } from "@/data/footerLinks";

export const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-4 sm:py-5 border-t border-white/[0.08] font-sans text-[11.5px] text-[#94A3B8]">
      {/* Left: Copyright */}
      <p>
        &copy; {FOOTER_BRAND_DATA.establishedYear} {FOOTER_BRAND_DATA.name}. All rights reserved.
      </p>

      {/* Right: Quick Links */}
      <div className="flex items-center space-x-5">
        <Link
          href="/privacy"
          className="transition-colors duration-150 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="transition-colors duration-150 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
        >
          Terms
        </Link>
        <Link
          href="/cookies"
          className="transition-colors duration-150 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
        >
          Cookies
        </Link>
      </div>
    </div>
  );
};