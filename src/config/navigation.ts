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
    hasDividerAfter: true,
  },
  {
    id: "services",
    index: "02",
    label: "Services",
    href: "/services",
    hasDividerAfter: true,
  },
  {
    id: "work",
    index: "03",
    label: "Work",
    href: "/work",
    hasDividerAfter: true,
  },
  {
    id: "products",
    index: "04",
    label: "Products",
    href: "/products",
    hasDividerAfter: true,
  },
  {
    id: "about",
    index: "05",
    label: "About",
    href: "/about",
    hasDividerAfter: true,
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

// Backwards-compatible export for architectural files
export const PRIMARY_NAVIGATION_INDICES = [
  { index: "01", label: "Work", href: "/work", telemetry: "PROVEN DEPLOYMENTS" },
  { index: "02", label: "Services", href: "/services", telemetry: "SYSTEM CORE CAPABILITIES" },
  { index: "03", label: "Capabilities", href: "/capabilities", telemetry: "INTELLIGENCE & AI R&D" },
  { index: "04", label: "Products", href: "/products", telemetry: "PROPRIETARY STUDIO TOOLS" },
  { index: "05", label: "Team", href: "/team", telemetry: "ENGINEERING TOPOLOGY" },
  { index: "06", label: "Insights", href: "/insights", telemetry: "SYSTEM ARCHITECTURE LOGS" },
  { index: "07", label: "Start Project", href: "/start-project", telemetry: "DEPLOY GROWTH SYSTEM", isAction: true },
] as const;