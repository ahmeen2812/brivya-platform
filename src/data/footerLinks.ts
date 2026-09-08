/**
 * BRIVYA SOLUTIONS — FOOTER DATA MANIFEST
 * Reads centralized contact and social URLs from siteContact.ts.
 */

import { SITE_CONTACT } from "@/config/siteContact";

export interface FooterLinkItem {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface FooterCategory {
  readonly id: "services" | "company" | "resources";
  readonly heading: string;
  readonly links: readonly FooterLinkItem[];
}

export interface SocialLinkItem {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly iconKey: "linkedin" | "github" | "twitter" | "instagram";
}

export const FOOTER_BRAND_DATA = {
  name: SITE_CONTACT.companyName,
  logoSrc: "/images/logo.png",
  tagline:
    "Brivya combines thoughtful design, powerful technology, and performance-driven solutions to help businesses build, grow, and operate better.",
  establishedYear: 2026,
} as const;

export const FOOTER_SOCIAL_LINKS: readonly SocialLinkItem[] = [
  {
    id: "social-linkedin",
    name: "LinkedIn",
    href: SITE_CONTACT.socials.linkedin,
    iconKey: "linkedin",
  },
  {
    id: "social-github",
    name: "GitHub",
    href: SITE_CONTACT.socials.github,
    iconKey: "github",
  },
  {
    id: "social-x",
    name: "X (Twitter)",
    href: SITE_CONTACT.socials.twitter,
    iconKey: "twitter",
  },
  {
    id: "social-instagram",
    name: "Instagram",
    href: SITE_CONTACT.socials.instagram,
    iconKey: "instagram",
  },
] as const;

export const FOOTER_CATEGORIES: readonly FooterCategory[] = [
  {
    id: "services",
    heading: "Services",
    links: [
      { label: "Web Development & Custom Software", href: "/services/web-development" },
      { label: "Google Ads & Performance Marketing", href: "/services/google-ads" },
      { label: "Meta Ads & Social Growth", href: "/services/meta-ads" },
      { label: "AI & Business Automation", href: "/services/ai-automation" },
      { label: "Cloud & Technology Solutions", href: "/services/cloud-technology" },
      { label: "Office Add-in Development", href: "/services/office-addins" },
      { label: "Google Add-ons Development", href: "/services/google-addons" },
    ],
  },
  {
    id: "company",
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/insights" },
    ],
  },
  {
    id: "resources",
    heading: "Resources",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Support", href: "/contact?topic=support" },
    ],
  },
] as const;