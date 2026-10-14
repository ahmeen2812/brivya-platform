/**
 * BRIVYA SOLUTIONS — PROJECT INQUIRY TYPE DEFINITIONS
 * Authoritative contracts for the 4-field inquiry model and panel schemas.
 */

export interface InquiryFormState {
  fullName: string;
  email: string;
  projectType: string;
  message: string;
}

export interface InquiryFormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export interface ServiceOption {
  readonly id: string;
  readonly label: string;
}

export interface InquiryPageContent {
  readonly editorial: {
    readonly heading: string;
    readonly paragraph1: string;
    readonly paragraph2: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly form: {
    readonly heading: string;
    readonly submitButtonText: string;
    readonly bookCallButtonText: string;
    readonly projectTypes: readonly ServiceOption[];
  };
  readonly directContactHeading: string;
  readonly locationHeading: string;
}