export interface NavItemConfig {
  readonly id: string;
  readonly index: string;
  readonly label: string;
  readonly href: string;
  readonly hasDividerAfter?: boolean;
}

export const NAV_ITEMS: readonly NavItemConfig[] = [
  {
    id: "home",
    index: "01",
    label: "Home",
    href: "/",
    hasDividerAfter: true, // Divider between 01 Home and 02 Services
  },
  {
    id: "services",
    index: "02",
    label: "Services",
    href: "/services",
    hasDividerAfter: true, // Fixed: Added divider between 02 Services and 03 Work
  },
  {
    id: "work",
    index: "03",
    label: "Work",
    href: "/work",
    hasDividerAfter: true, // Divider between 03 Work and 04 Products
  },
  {
    id: "products",
    index: "04",
    label: "Products",
    href: "/products",
    hasDividerAfter: true, // Divider between 04 Products and 05 About
  },
  {
    id: "about",
    index: "05",
    label: "About",
    href: "/about",
    hasDividerAfter: true, // Divider between 05 About and 06 Contact
  },
  {
    id: "contact",
    index: "06",
    label: "Contact",
    href: "/contact",
    hasDividerAfter: false, // The divider after 06 Contact sits structurally before the CTA button
  },
] as const;

export const NAV_BRAND_CONFIG = {
  logoAlt: "Brivya Solutions",
  logoSrc: "/images/logo.png",
  ctaText: "Start a Project",
  ctaHref: "/start-project",
} as const;