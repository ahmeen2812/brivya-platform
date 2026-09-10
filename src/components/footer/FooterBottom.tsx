"use client";

import React from "react";
import { FOOTER_BRAND_DATA } from "@/data/footerLinks";

export const FooterBottom: React.FC = () => {
  return (
    <div className="flex items-center justify-center border-t border-white/[0.12] py-4 sm:py-5">
      <p className="font-sans text-[11.5px] sm:text-[12px] text-[#A9C5EC] tracking-tight text-center">
        &copy; {FOOTER_BRAND_DATA.establishedYear} {FOOTER_BRAND_DATA.name}. All rights reserved.
      </p>
    </div>
  );
};