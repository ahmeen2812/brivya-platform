/**
 * BRIVYA SOLUTIONS — PROJECT INQUIRY TYPE DEFINITIONS
 * Streamlined 4-field form contract and contact panel schemas.
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
    readonly projectTypes: readonly ServiceOption[];
  };
  readonly directContactHeading: string;
  readonly locationHeading: string;
}