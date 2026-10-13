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

        {/* Links Stack with Directional Masked Text-Shift Hover */}
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
                  className="group/link relative inline-flex h-[20px] items-center overflow-hidden font-sans text-[13px] sm:text-[13.5px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                >
                  {/* Layer 1: Default text (rolls up and out on hover) */}
                  <span className="inline-block text-[#CBDDF6] transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:-translate-y-full group-focus-visible/link:-translate-y-full">
                    {link.label}
                  </span>
                  {/* Layer 2: Incoming accent text (rolls in from below on hover) */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 inline-block translate-y-full text-white transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-y-0 group-focus-visible/link:translate-y-0"
                  >
                    {link.label}
                  </span>
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="group/link relative inline-flex h-[20px] items-center overflow-hidden font-sans text-[13px] sm:text-[13.5px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                >
                  {/* Layer 1: Default text (rolls up and out on hover) */}
                  <span className="inline-block text-[#CBDDF6] transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:-translate-y-full group-focus-visible/link:-translate-y-full">
                    {link.label}
                  </span>
                  {/* Layer 2: Incoming accent text (rolls in from below on hover) */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 inline-block translate-y-full text-white transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-y-0 group-focus-visible/link:translate-y-0"
                  >
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