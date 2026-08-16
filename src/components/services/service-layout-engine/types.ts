import React from "react";

export interface UniversalFaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface UniversalSupportingCard {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

export interface UniversalEcosystemResource {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
  readonly svgMarkup: React.ReactNode; 
}

export interface UniversalServicePageConfig {
  readonly seo: { title: string; description: string; };
  readonly hero: {
    readonly serviceTitle: string;
    readonly heading: string;
    readonly description: string;
    readonly imagePath: string;
    readonly imageAlt: string;
    readonly imageAlignment: "left" | "right";
  };
  readonly directiveConsole: {
    readonly tag: string;
    readonly heading: string;
    readonly paragraphs: readonly string[];
  };
  readonly supportingArchitecture: {
    readonly heading: string;
    readonly subtitle: string;
    readonly card2IllustrationPath?: string;
    readonly card2IllustrationAlt?: string;
    readonly card3IllustrationPath?: string;
    readonly card3IllustrationAlt?: string;
    readonly items: readonly UniversalSupportingCard[];
  };
  readonly officialEcosystem?: {
    readonly tag: string;
    readonly heading: string;
    readonly description: string;
    readonly items: readonly UniversalEcosystemResource[];
  };
  readonly faq: {
    readonly heading: string;
    readonly items: readonly UniversalFaqItem[];
  };
  readonly cta: {
    readonly heading: string;
    readonly description: string;
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
  };
}