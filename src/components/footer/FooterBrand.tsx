"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_BRAND_DATA, FOOTER_SOCIAL_LINKS, SocialLinkItem } from "@/data/footerLinks";

const SocialIcon: React.FC<{ iconKey: SocialLinkItem["iconKey"] }> = ({ iconKey }) => {
  const iconProps = {
    className: "h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (iconKey) {
    case "linkedin":
      return (
        <svg {...iconProps}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.4a1.46 1.46 0 1 0 .01 2.92 1.46 1.46 0 0 0-.01-2.92z" />
        </svg>
      );
    case "github":
      return (
        <svg {...iconProps}>
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...iconProps}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth="2.5" />
        </svg>
      );
  }
};

export const FooterBrand: React.FC = () => {
  return (
    <div className="flex flex-col items-start pr-0 md:pr-4">
      {/* Brand Monogram & Nomenclature */}
      <Link
        href="/"
        aria-label="Brivya Solutions - Back to top"
        className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] transition-colors duration-200 group-hover:border-[#38BDF8]/50 group-hover:bg-[#1675F8]/15">
          <svg className="h-4.5 w-4.5" viewBox="0 0 40 40" fill="none">
            <path
              d="M8 6H22C26.4183 6 30 9.58172 30 14C30 16.7118 28.6508 19.108 26.581 20.5303C29.176 22.0321 31 24.8093 31 28C31 32.4183 27.4183 36 23 36H8V6Z"
              stroke="#F4F7FC"
              strokeWidth="2.6"
              strokeLinecap="square"
            />
            <path
              d="M8 20H23C25.2091 20 27 18.2091 27 16C27 13.7909 25.2091 12 23 12H15"
              stroke="#38BDF8"
              strokeWidth="2.2"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-sans text-[15px] font-extrabold tracking-tight text-[#F4F7FC]">
            {FOOTER_BRAND_DATA.name}
          </span>
          <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#94A3B8]">
            ENGINEERED SYSTEMS
          </span>
        </div>
      </Link>

      {/* Description */}
      <p className="mt-3 max-w-[260px] font-sans text-[12.5px] leading-relaxed text-[#94A3B8]">
        {FOOTER_BRAND_DATA.tagline}
      </p>

      {/* 34px Circular Social Badges */}
      <div className="mt-5 flex items-center gap-2.5">
        {FOOTER_SOCIAL_LINKS.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Brivya on ${social.name}`}
            className="group flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#CBD5E1] transition-all duration-200 hover:border-white/25 hover:bg-white/[0.12] hover:text-[#F4F7FC] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
          >
            <SocialIcon iconKey={social.iconKey} />
          </a>
        ))}
      </div>
    </div>
  );
};