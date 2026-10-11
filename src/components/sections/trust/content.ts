/**
 * BRIVYA SOLUTIONS — TRUST SECTION DATA MANIFEST
 * Authoritative copy, review platform branding data, and client trust parameters.
 */

export interface TrustPlatformConfig {
  readonly id: "google" | "trustpilot";
  readonly name: string;
  readonly attributionLabel: string;
  readonly badgeLabel: string;
  readonly profileUrl?: string;
  readonly isVerified: boolean;
}

export interface TrustSectionData {
  readonly clientStatement: {
    readonly defaultText: string;
    readonly verifiedText: string;
    readonly showVerifiedCount: boolean;
  };
  readonly platforms: readonly TrustPlatformConfig[];
}

export const TRUST_CONTENT: TrustSectionData = {
  clientStatement: {
    // Default safe public wording
    defaultText: "Working with businesses around the world.",
    // Configurable verified target (ready for instant toggle once confirmed)
    verifiedText: "Trusted by 600+ clients worldwide.",
    showVerifiedCount: false, // Set to true when verified records are confirmed
  },
  platforms: [
    {
      id: "google",
      name: "Google",
      attributionLabel: "Verified Reviews",
      badgeLabel: "Google Customer Reviews",
      profileUrl: undefined, // Will be linked when Brivya Google Business profile is public
      isVerified: true,
    },
    {
      id: "trustpilot",
      name: "Trustpilot",
      attributionLabel: "Verified Profile",
      badgeLabel: "Rated on Trustpilot",
      profileUrl: undefined, // Will be linked when Brivya Trustpilot profile is public
      isVerified: true,
    },
  ],
} as const;