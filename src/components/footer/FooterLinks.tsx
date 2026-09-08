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
        {/* Category Header: High-Contrast Deep Slate-Navy (#102D50) */}
        <h3
          ref={headerRef}
          className="relative z-20 font-mono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#102D50]"
        >
          {category.heading}
        </h3>

        {/* 
          Links Stack:
          - If isMaskedDownward (Company column): overflow-hidden ensures links emerge from behind heading
          - Directional cobalt arrow & line draw reveal on hover
        */}
        <div className={`mt-3.5 ${isMaskedDownward ? "overflow-hidden pt-1" : ""}`}>
          <ul ref={linksContainerRef} className="flex flex-col space-y-2.5">
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
                    className="group/link relative inline-flex items-center font-sans text-[13px] sm:text-[13.5px] text-[#0E2B4E] transition-colors duration-200 hover:text-[#06162C] focus-visible:text-[#06162C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0A5FD7] py-0.5"
                  >
                    {/* 1. Cobalt Arrow & Stem Line (Reveals from Left and Draws Right) */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 inline-flex items-center text-[#0A5FD7] opacity-0 -translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:opacity-100 group-hover/link:translate-x-0 group-focus-visible/link:opacity-100 group-focus-visible/link:translate-x-0"
                    >
                      <svg
                        className="h-2.5 w-3.5 stroke-[#0A5FD7]"
                        viewBox="0 0 16 12"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line
                          x1="1"
                          y1="6"
                          x2="14"
                          y2="6"
                          strokeDasharray="16"
                          className="[stroke-dashoffset:16] transition-[stroke-dashoffset] duration-300 ease-out group-hover/link:[stroke-dashoffset:0] group-focus-visible/link:[stroke-dashoffset:0]"
                        />
                        <polyline points="10 2 14 6 10 10" />
                      </svg>
                    </span>

                    {/* 2. Link Text: Shifts smoothly to the right without column width change */}
                    <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-4.5 group-focus-visible/link:translate-x-4.5">
                      {link.label}
                    </span>
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className="group/link relative inline-flex items-center font-sans text-[13px] sm:text-[13.5px] text-[#0E2B4E] transition-colors duration-200 hover:text-[#06162C] focus-visible:text-[#06162C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0A5FD7] py-0.5"
                  >
                    {/* 1. Cobalt Arrow & Stem Line (Reveals from Left and Draws Right) */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 inline-flex items-center text-[#0A5FD7] opacity-0 -translate-x-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:opacity-100 group-hover/link:translate-x-0 group-focus-visible/link:opacity-100 group-focus-visible/link:translate-x-0"
                    >
                      <svg
                        className="h-2.5 w-3.5 stroke-[#0A5FD7]"
                        viewBox="0 0 16 12"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line
                          x1="1"
                          y1="6"
                          x2="14"
                          y2="6"
                          strokeDasharray="16"
                          className="[stroke-dashoffset:16] transition-[stroke-dashoffset] duration-300 ease-out group-hover/link:[stroke-dashoffset:0] group-focus-visible/link:[stroke-dashoffset:0]"
                        />
                        <polyline points="10 2 14 6 10 10" />
                      </svg>
                    </span>

                    {/* 2. Link Text: Shifts smoothly to the right */}
                    <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-4.5 group-focus-visible/link:translate-x-4.5">
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