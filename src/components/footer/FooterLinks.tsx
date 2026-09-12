"use client";

import React from "react";
import Link from "next/link";
import { FooterCategory } from "@/data/footerLinks";

export interface FooterLinksProps {
  readonly category: FooterCategory;
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ category }) => {
  return (
    <div className="flex flex-col">
      {/* 12px Monospace Category Heading */}
      <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#F4F7FC]">
        {category.heading}
      </h3>

      {/* Compact Links Stack */}
      <ul className="mt-3 flex flex-col space-y-2">
        {category.links.map((link) => (
          <li key={link.label}>
            {link.isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] text-[#94A3B8] transition-colors duration-150 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="font-sans text-[13px] text-[#94A3B8] transition-colors duration-150 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};