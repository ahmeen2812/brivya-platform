"use client";

import React from "react";
import Link from "next/link";
import { FooterCategory } from "@/data/footerLinks";

export interface FooterLinksProps {
  readonly category: FooterCategory;
}

export function FooterLinks({ category }: FooterLinksProps) {
  return (
    <div className="flex flex-col">
      {/* 11.5px Monospace Category Heading */}
      <h3 className="font-mono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-white">
        {category.heading}
      </h3>

      {/* Compact Links Stack */}
      <ul className="mt-3.5 flex flex-col space-y-2">
        {category.links.map((link) => (
          <li key={link.label}>
            {link.isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] sm:text-[13.5px] text-[#CBDDF6] transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="font-sans text-[13px] sm:text-[13.5px] text-[#CBDDF6] transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;