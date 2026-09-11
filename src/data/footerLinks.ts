/**
 * BRIVYA SOLUTIONS — FOOTER NAVIGATION & METADATA MANIFEST
 * Structured content categories, external social links, and legal paths.
 */

export interface FooterLinkItem {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface FooterCategory {
  readonly id: string;
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
  name: "Brivya Solutions",
  tagline: "Digital products, automation, and growth solutions for modern businesses.",
  establishedYear: 2026,
  cta: {
    eyebrow: "GET IN TOUCH",
    headline: "Have a project in mind?",
    subheadline: "Let's build something scalable together.",
    buttonText: "Start a Project",
    buttonHref: "/start-project",
  },
} as const;

export const FOOTER_SOCIAL_LINKS: readonly SocialLinkItem[] = [
  {
    id: "social-linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/company/brivya",
    iconKey: "linkedin",
  },
  {
    id: "social-github",
    name: "GitHub",
    href: "https://github.com/brivya",
    iconKey: "github",
  },
  {
    id: "social-x",
    name: "X (Twitter)",
    href: "https://x.com/brivya",
    iconKey: "twitter",
  },
  {
    id: "social-instagram",
    name: "Instagram",
    href: "https://instagram.com/brivya",
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
    id: "solutions",
    heading: "Solutions",
    links: [
      { label: "Custom Software Development", href: "/solutions/custom-software" },
      { label: "AI Automation", href: "/solutions/ai-automation" },
      { label: "Business Systems", href: "/solutions/business-systems" },
      { label: "Cloud Infrastructure", href: "/solutions/cloud-infrastructure" },
      { label: "Marketing Systems", href: "/solutions/marketing-systems" },
      { label: "Enterprise Solutions", href: "/solutions/enterprise" },
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