/**
 * BRIVYA SOLUTIONS — MASTER SERVICE TEMPLATE INTERFACE
 * Establishes strict generic typings enabling dynamic render assembly across 
 * all platform marketing verticals without rewriting presentation layer code.
 */

export interface ServiceFaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface ServiceSupportingCard {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

export interface ServiceEcosystemResource {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly iconType: string;
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
}

export interface UnifiedServiceConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly serviceTitle: string;
    readonly heading: string;
    readonly description: string;
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly mainFeaturedCard: {
    readonly tag: string;
    readonly heading: string;
    readonly paragraphs: readonly string[];
  };
  readonly supportingCards: {
    readonly heading: string;
    readonly subtitle: string;
    readonly card2IllustrationPath: string;
    readonly card2IllustrationAlt: string;
    readonly card3IllustrationPath: string;
    readonly card3IllustrationAlt: string;
    readonly items: readonly ServiceSupportingCard[];
  };
  readonly officialResources: {
    readonly tag: string;
    readonly heading: string;
    readonly description: string;
    readonly items: readonly ServiceEcosystemResource[];
  };
  readonly faq: {
    readonly heading: string;
    readonly items: readonly ServiceFaqItem[];
  };
  readonly cta: {
    readonly heading: string;
    readonly description: string;
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
  };
}