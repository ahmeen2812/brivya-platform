/**
 * BRIVYA SOLUTIONS — TRUST SECTION DATA MANIFEST
 * Canonical copy, review platform rating configurations, and client trust parameters.
 */

export interface TrustPlatformRatingConfig {
  readonly platformId: "google" | "trustpilot";
  readonly name: string;
  readonly ratingScore: string;
  readonly starCount: number;
}

export interface TrustSectionConfig {
  readonly clientStatement: {
    readonly defaultText: string;
    readonly verifiedText: string;
    readonly clientCount: string;
    readonly showVerifiedClientCount: boolean; // Set to true when records confirm 670+ clients
  };
  readonly ratings: {
    readonly showRatingStarsPreview: boolean; // Development preview matching reference
    readonly google: TrustPlatformRatingConfig;
    readonly trustpilot: TrustPlatformRatingConfig;
  };
}

export const TRUST_CONTENT: TrustSectionConfig = {
  clientStatement: {
    defaultText: "Working with businesses around the world.",
    verifiedText: "Trusted by 670+ clients worldwide.",
    clientCount: "670+",
    showVerifiedClientCount: false, // Default: safe public wording until confirmed
  },
  ratings: {
    showRatingStarsPreview: true, // Development preview matching your reference layout
    google: {
      platformId: "google",
      name: "Google",
      ratingScore: "5.0",
      starCount: 5,
    },
    trustpilot: {
      platformId: "trustpilot",
      name: "Trustpilot",
      ratingScore: "5.0",
      starCount: 5,
    },
  },
} as const;