"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FOOTER_CATEGORIES } from "@/data/footerLinks";

export const MobileFooterAccordion: React.FC = () => {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex w-full flex-col divide-y divide-white/[0.08] border-b border-t border-white/[0.08]">
      {FOOTER_CATEGORIES.map((category) => {
        const isOpen = openCategoryId === category.id;

        return (
          <div key={category.id} className="flex flex-col py-3">
            <button
              type="button"
              onClick={() => toggleCategory(category.id)}
              aria-expanded={isOpen}
              aria-controls={`footer-accordion-${category.id}`}
              className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1675F8]"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#F4F7FC]">
                {category.heading}
              </span>
              <span className="font-mono text-sm text-[#8998AD] transition-transform duration-200">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Smooth CSS Grid Row Transition */}
            <div
              id={`footer-accordion-${category.id}`}
              className={`footer-accordion-content overflow-hidden ${
                isOpen ? "grid-rows-[1fr] pt-3.5" : "grid-rows-[0fr]"
              }`}
            >
              <ul className="min-h-0 flex flex-col space-y-2.5">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-[13px] text-[#8998AD] transition-colors duration-200 hover:text-[#F4F7FC]"
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
};