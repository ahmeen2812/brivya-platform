"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { FooterCategory } from "@/data/footerLinks";

export interface FooterLinksProps {
  readonly category: FooterCategory;
  readonly headerRef?: React.Ref<HTMLHeadingElement>;
  readonly registerLinkRef?: (index: number, el: HTMLElement | null) => void;
}

export const FooterLinks = forwardRef<HTMLDivElement, FooterLinksProps>(
  ({ category, headerRef, registerLinkRef }, ref) => {
    return (
      <div ref={ref} className="flex flex-col">
        {/* Monospace Category Header */}
        <h3
          ref={headerRef}
          className="font-mono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-white"
        >
          {category.heading}
        </h3>

        {/* Links Stack with Directional Micro-Interactions */}
        <ul className="mt-3.5 flex flex-col space-y-2">
          {category.links.map((link, idx) => (
            <li
              key={link.label}
              ref={(el) => {
                if (registerLinkRef) registerLinkRef(idx, el);
              }}
            >
              {link.isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 font-sans text-[13px] sm:text-[13.5px] text-[#CBDDF6] transition-colors duration-150 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                >
                  <span className="transition-transform duration-200 ease-out group-hover/link:translate-x-1.5">
                    {link.label}
                  </span>
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="group/link inline-flex items-center gap-1.5 font-sans text-[13px] sm:text-[13.5px] text-[#CBDDF6] transition-colors duration-150 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                >
                  <span className="transition-transform duration-200 ease-out group-hover/link:translate-x-1.5">
                    {link.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

FooterLinks.displayName = "FooterLinks";
export default FooterLinks;