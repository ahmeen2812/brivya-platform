"use client";

import React, { forwardRef } from "react";
import { FOOTER_SOCIAL_LINKS, SocialLinkItem } from "@/data/footerLinks";

interface SocialIconGlyphProps {
  readonly iconKey: SocialLinkItem["iconKey"];
  readonly className?: string;
}

const SocialIconGlyph: React.FC<SocialIconGlyphProps> = ({
  iconKey,
  className = "h-6 w-6 sm:h-[28px] sm:w-[28px]",
}) => {
  const commonProps = {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (iconKey) {
    case "linkedin":
      return (
        <svg {...commonProps}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.4a1.46 1.46 0 1 0 .01 2.92 1.46 1.46 0 0 0-.01-2.92z" />
        </svg>
      );
    case "github":
      return (
        <svg {...commonProps}>
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...commonProps}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth="2.5" />
        </svg>
      );
  }
};

export interface FooterSocialProps {
  readonly registerSocialRef?: (index: number, el: HTMLElement | null) => void;
}

export const FooterSocial = forwardRef<HTMLDivElement, FooterSocialProps>(
  ({ registerSocialRef }, ref) => {
    return (
      /* Gap: 12px Mobile | 14px Desktop */
      <div ref={ref} className="flex items-center gap-3 sm:gap-[14px]">
        {FOOTER_SOCIAL_LINKS.map((social, index) => (
          <a
            key={social.id}
            ref={(el) => {
              if (registerSocialRef) registerSocialRef(index, el);
            }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Brivya on ${social.name}`}
            /* 
              Dimensions:
              - Mobile: 48px × 48px
              - Desktop: 60px × 60px
              - Icon Glyphs: 24px Mobile | 28px Desktop
            */
            className="group/social relative flex h-12 w-12 sm:h-[60px] sm:w-[60px] shrink-0 items-center justify-center rounded-full bg-[#102D50]/15 border border-[#102D50]/20 overflow-hidden transition-all duration-[380ms] ease-[cubic-bezier(0.25,1,0.3,1)] hover:scale-[1.08] hover:bg-[#EBF3FF] hover:border-white focus-visible:bg-[#EBF3FF] focus-visible:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
          >
            {/* 1. Default Light Icon (Exits smoothly RIGHT on hover) */}
            <span className="absolute inset-0 flex items-center justify-center text-[#102D50] sm:text-white transition-all duration-[380ms] ease-[cubic-bezier(0.25,1,0.3,1)] group-hover/social:translate-x-14 sm:group-hover/social:translate-x-16 group-hover/social:opacity-0 group-focus-visible/social:translate-x-14 sm:group-focus-visible/social:translate-x-16 group-focus-visible/social:opacity-0">
              <SocialIconGlyph iconKey={social.iconKey} />
            </span>

            {/* 2. Dark Navy Icon (#102D50) (Enters smoothly from LEFT to Center on hover) */}
            <span className="absolute inset-0 flex items-center justify-center text-[#102D50] -translate-x-14 sm:-translate-x-16 opacity-0 transition-all duration-[380ms] ease-[cubic-bezier(0.25,1,0.3,1)] group-hover/social:translate-x-0 group-hover/social:opacity-100 group-focus-visible/social:translate-x-0 group-focus-visible/social:opacity-100">
              <SocialIconGlyph iconKey={social.iconKey} />
            </span>
          </a>
        ))}
      </div>
    );
  }
);

FooterSocial.displayName = "FooterSocial";
export default FooterSocial;