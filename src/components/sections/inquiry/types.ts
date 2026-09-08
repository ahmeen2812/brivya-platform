/**
 * BRIVYA SOLUTIONS — PROJECT INQUIRY TYPE DEFINITIONS
 * Strict contracts for inquiry form state, validation, and contact panel schemas.
 */

export interface InquiryFormState {
  fullName: string;
  email: string;
  company: string;
  serviceCategory: string;
  projectDetails: string;
  budgetRange: string;
  timeline: string;
}

export interface InquiryFormErrors {
  fullName?: string;
  email?: string;
  serviceCategory?: string;
  projectDetails?: string;
}

export interface ServiceOption {
  readonly id: string;
  readonly label: string;
}

export interface SelectionOption {
  readonly id: string;
  readonly label: string;
}

export interface ContactDirectInfo {
  readonly email: string;
  readonly phone: string;
  readonly responseTimeNote: string;
}

export interface LocationAvailabilityInfo {
  readonly operatingLocation: string;
  readonly workingHours: string;
  readonly timeZone: string;
  readonly engagementModel: string;
}

export interface InquiryPageContent {
  readonly heroIntro: {
    readonly eyebrow: string;
    readonly headingPrimary: string;
    readonly headingAccent: string;
    readonly description: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly form: {
    readonly heading: string;
    readonly supportingLine: string;
    readonly submitButtonText: string;
    readonly services: readonly ServiceOption[];
    readonly budgetRanges: readonly SelectionOption[];
    readonly timelines: readonly SelectionOption[];
  };
  readonly directContact: {
    readonly heading: string;
    readonly info: ContactDirectInfo;
  };
  readonly locationAvailability: {
    readonly heading: string;
    readonly info: LocationAvailabilityInfo;
  };
}