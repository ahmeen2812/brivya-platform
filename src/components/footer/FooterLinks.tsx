"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { FooterCategory } from "@/data/footerLinks";

export interface FooterLinksProps {
  readonly category: FooterCategory;
  readonly headerRef?: React.Ref<HTMLHeadingElement>;
  readonly linksContainerRef?: React.Ref<HTMLUListElement>;
  readonly registerLinkRef?: (index: number, el: HTMLElement | null) => void;
  readonly isMaskedDownward?: boolean;
}

export const FooterLinks = forwardRef<HTMLDivElement, FooterLinksProps>(
  ({ category, headerRef, linksContainerRef, registerLinkRef, isMaskedDownward = false }, ref) => {
    return (
      <div ref={ref} className="flex flex-col">
        {/* Monospace Category Header */}
        <h3
          ref={headerRef}
          className="relative z-20 font-mono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-white"
        >
          {category.heading}
        </h3>

        {/* 
          Links Stack:
          - If isMaskedDownward (Company column): overflow-hidden ensures links emerge from behind heading
          - Directional text replacement on hover
        */}
        <div className={`mt-3.5 ${isMaskedDownward ? "overflow-hidden pt-1" : ""}`}>
          <ul ref={linksContainerRef} className="flex flex-col space-y-2">
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
                    aria-label={link.label}
                    className="group/link relative inline-flex h-[20px] items-center overflow-hidden font-sans text-[13px] sm:text-[13.5px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                  >
                    {/* Layer 1: Default text (rolls up on hover) */}
                    <span className="inline-block text-[#D9E8FA] transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:-translate-y-full group-focus-visible/link:-translate-y-full">
                      {link.label}
                    </span>
                    {/* Layer 2: Incoming white accent text (rolls in from below) */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 inline-block translate-y-full text-white transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-y-0 group-focus-visible/link:translate-y-0 font-medium"
                    >
                      {link.label}
                    </span>
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className="group/link relative inline-flex h-[20px] items-center overflow-hidden font-sans text-[13px] sm:text-[13.5px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
                  >
                    {/* Layer 1: Default text (rolls up on hover) */}
                    <span className="inline-block text-[#D9E8FA] transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:-translate-y-full group-focus-visible/link:-translate-y-full">
                      {link.label}
                    </span>
                    {/* Layer 2: Incoming white accent text (rolls in from below) */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 inline-block translate-y-full text-white transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-y-0 group-focus-visible/link:translate-y-0 font-medium"
                    >
                      {link.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

FooterLinks.displayName = "FooterLinks";
export default FooterLinks;