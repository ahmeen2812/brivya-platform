/**
 * BRIVYA SOLUTIONS — CENTRALIZED CONTACT, SOCIAL & MEETING CONFIGURATION
 * Single source of truth for public business contact details, social media profiles,
 * and meeting booking scheduling parameters.
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

export interface MeetingBookingConfig {
  readonly calendlyUrl: string;
  readonly meetingTitle: string;
  readonly durationMinutes: number;
  readonly durationLabel: string;
  readonly heading: string;
  readonly description: string;
  readonly secondaryDescription: string;
  readonly illustrationPath: string;
  readonly illustrationAlt: string;
  readonly theme: {
    readonly primaryColor: string;
    readonly textColor: string;
    readonly backgroundColor: string;
  };
}

export interface SiteContactConfig {
  readonly companyName: string;
  readonly channels: ContactChannelInfo;
  readonly presence: StudioPresenceInfo;
  readonly socials: SocialLinksConfig;
  readonly meeting: MeetingBookingConfig;
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
  meeting: {
    // Official Calendly Scheduling URL
    calendlyUrl: "https://calendly.com/ahmedtouqeer2812/meeting",
    meetingTitle: "30 Minute Meeting | Brivya Solutions",
    durationMinutes: 30,
    durationLabel: "30 Min",
    heading: "Book a Meeting",
    description:
      "Schedule a 30-minute introductory strategy session with our technical and digital growth leads. Pick a time on our calendar that fits your availability, and we will prepare a dedicated technical roadmap for our discussion.",
    secondaryDescription:
      "All sessions are held directly with senior architects. No sales pressure—just direct engineering and growth analysis.",
    illustrationPath: "/call-us/assets/call-us-illustration.png",
    illustrationAlt: "Brivya Solutions scheduled consultation technical illustration",
    theme: {
      primaryColor: "0a5fd7", // Brivya Cobalt
      textColor: "06162c",    // Brivya Ink
      backgroundColor: "ffffff",
    },
  },
} as const;