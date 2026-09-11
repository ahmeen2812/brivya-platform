"use client";

import React from "react";
import Link from "next/link";
import { FooterCategory } from "@/data/footerLinks";

export interface FooterColumnProps {
  readonly category: FooterCategory;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ category }) => {
  return (
    <div className="flex flex-col">
      {/* Category Heading */}
      <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#F4F7FC]">
        {category.heading}
      </h3>

      {/* Links Stack */}
      <ul className="mt-4 flex flex-col space-y-2.5">
        {category.links.map((link) => (
          <li key={link.label}>
            {link.isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] text-[#8998AD] transition-colors duration-200 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1675F8]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="font-sans text-[13px] text-[#8998AD] transition-colors duration-200 hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1675F8]"
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