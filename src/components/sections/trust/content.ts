/**
 * BRIVYA SOLUTIONS — TRUST SECTION DATA MANIFEST
 * Canonical copy, review platform rating configurations, and verified client parameters.
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
    readonly showVerifiedClientCount: boolean;
  };
  readonly ratings: {
    readonly showRatingStarsPreview: boolean;
    readonly google: TrustPlatformRatingConfig;
    readonly trustpilot: TrustPlatformRatingConfig;
  };
}

export const TRUST_CONTENT: TrustSectionConfig = {
  clientStatement: {
    // Verified wording confirmed for 670+ clients served worldwide
    defaultText: "Trusted by 670+ clients worldwide.",
    verifiedText: "Trusted by 670+ clients worldwide.",
    clientCount: "670+",
    showVerifiedClientCount: true,
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


