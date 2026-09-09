"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FOOTER_CATEGORIES } from "@/data/footerLinks";

export function MobileFooterAccordion() {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex w-full flex-col divide-y divide-white/[0.1] border-b border-t border-white/[0.1]">
      {FOOTER_CATEGORIES.map((category) => {
        const isOpen = openCategoryId === category.id;

        return (
          <div key={category.id} className="flex flex-col py-2.5">
            <button
              type="button"
              onClick={() => toggleCategory(category.id)}
              aria-expanded={isOpen}
              aria-controls={`footer-accordion-${category.id}`}
              className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                {category.heading}
              </span>
              <span className="font-mono text-sm text-[#CBDDF6]">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={`footer-accordion-${category.id}`}
              className={`footer-accordion-content overflow-hidden ${
                isOpen ? "grid-rows-[1fr] pt-2.5" : "grid-rows-[0fr]"
              }`}
            >
              <ul className="min-h-0 flex flex-col space-y-2">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-[12.5px] text-[#CBDDF6] transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MobileFooterAccordion;