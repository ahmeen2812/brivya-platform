/**
 * BRIVYA SOLUTIONS — OFFICE ADD-IN TEMPLATE SCHEMA
 * Master interface mapping wireframes ui4.png & ui3.png into a reusable architectural contract.
 */

export interface OfficeFaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface OfficeOfficialResource {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
}

export interface OfficeTemplateConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  // ui4.png: Left heading/content + Right hero image (enters from top)
  readonly hero: {
    readonly serviceTitle: string;
    readonly heading: string;
    readonly description: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  // ui4.png Bottom: Full-width converging directive statement banner
  readonly heroDirective: {
    readonly tag: string;
    readonly heading: string;
    readonly paragraph: string;
  };
  // ui3.png Part 1: Left feature copy + Right tall vertical UI mockup (enters top-down)
  readonly verticalSplitSection: {
    readonly tag: string;
    readonly heading: string;
    readonly description: string;
    readonly keyFeatures: readonly { title: string; description: string }[];
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  // ui3.png Part 2: Standalone full-width horizontal section (enters from bottom)
  readonly fullWidthBanner: {
    readonly tag: string;
    readonly heading: string;
    readonly description: string;
  };
  // ui3.png Part 3: 4-part horizontal mosaic: [Content] [Icon] [Content] [Icon]
  readonly fourPartMosaic: {
    readonly block1: {
      readonly title: string;
      readonly description: string;
    };
    readonly icon1: {
      readonly imagePath: string;
      readonly imageAlt: string;
    };
    readonly block2: {
      readonly title: string;
      readonly description: string;
    };
    readonly icon2: {
      readonly imagePath: string;
      readonly imageAlt: string;
    };
  };
  // ui3.png Part 4: Wide 16:6 panoramic visual showcase (enters from bottom)
  readonly panoramicShowcase: {
    readonly tag: string;
    readonly heading: string;
    readonly description: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  // Additional capabilities cards (e.g. Ribbon commands & Testing deployment)
  readonly additionalCapabilities: readonly {
    readonly index: string;
    readonly title: string;
    readonly description: string;
  }[];
  // Official documentation links with 98px badges
  readonly officialResources: {
    readonly tag: string;
    readonly heading: string;
    readonly description: string;
    readonly items: readonly OfficeOfficialResource[];
  };
  // Expandable CSS Grid FAQ
  readonly faq: {
    readonly heading: string;
    readonly items: readonly OfficeFaqItem[];
  };
  // Final Canvas CTA
  readonly cta: {
    readonly heading: string;
    readonly description: string;
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
  };
}