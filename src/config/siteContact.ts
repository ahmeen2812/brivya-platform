/**
 * BRIVYA SOLUTIONS — CENTRALIZED CONTACT & SOCIAL CONFIGURATION
 * Single source of truth for public business contact details and social media profiles.
 * Modify values here to update them across all website sections and pages.
 */

export interface ContactChannelInfo {
  readonly email: string;
  readonly phone: string;
  readonly responseTimeNote: string;
}

export interface StudioPresenceInfo {
  readonly primaryLocation: string;
  readonly operatingHubs: string;
  readonly businessHours: string;
  readonly timeZone: string;
  readonly engagementModel: string;
}

export interface SocialLinksConfig {
  readonly linkedin: string;
  readonly github: string;
  readonly twitter: string;
  readonly instagram: string;
}

export interface SiteContactConfig {
  readonly companyName: string;
  readonly channels: ContactChannelInfo;
  readonly presence: StudioPresenceInfo;
  readonly socials: SocialLinksConfig;
}

export const SITE_CONTACT: SiteContactConfig = {
  companyName: "Brivya Solutions",
  channels: {
    // Configurable direct business channels
    email: "hello@brivya.com",
    phone: "+971 4 000 0000",
    responseTimeNote: "Direct communication with our technical team. Inquiries reviewed within 24 hours.",
  },
  presence: {
    primaryLocation: "Global Remote Studio",
    operatingHubs: "Engineering Hubs in Dubai & London",
    businessHours: "Monday – Friday: 9:00 AM – 6:00 PM UTC+4",
    timeZone: "Gulf Standard Time (GST / UTC+4)",
    engagementModel: "Serving international enterprise and growth clients worldwide.",
  },
  socials: {
    linkedin: "https://linkedin.com/company/brivya",
    github: "https://github.com/brivya",
    twitter: "https://x.com/brivya",
    instagram: "https://instagram.com/brivya",
  },
} as const;