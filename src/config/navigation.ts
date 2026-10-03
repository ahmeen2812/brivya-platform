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
    hasDividerAfter: true, // Exact match to reference divider between 01 and 02
  },
  {
    id: "services",
    index: "02",
    label: "Services",
    href: "/services",
    hasDividerAfter: false,
  },
  {
    id: "work",
    index: "03",
    label: "Work",
    href: "/work",
    hasDividerAfter: true, // Matches divider between 03 and 04
  },
  {
    id: "products",
    index: "04",
    label: "Products",
    href: "/products",
    hasDividerAfter: true, // Matches divider between 04 and 05
  },
  {
    id: "about",
    index: "05",
    label: "About",
    href: "/about",
    hasDividerAfter: true, // Matches divider between 05 and 06
  },
  {
    id: "contact",
    index: "06",
    label: "Contact",
    href: "/contact",
    hasDividerAfter: false,
  },
] as const;

export const NAV_BRAND_CONFIG = {
  logoAlt: "Brivya Solutions",
  logoSrc: "/images/logo.png",
  ctaText: "Start a Project",
  ctaHref: "/start-project",
} as const;