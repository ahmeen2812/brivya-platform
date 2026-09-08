/**
 * BRIVYA SOLUTIONS — CALL US MEETING BOOKING TYPE DEFINITIONS
 * Authoritative type contracts for meeting scheduling bays and embeds.
 */

export interface MeetingInfoBayProps {
  readonly heading: string;
  readonly description: string;
  readonly secondaryDescription: string;
  readonly durationLabel: string;
  readonly illustrationPath: string;
  readonly illustrationAlt: string;
  readonly className?: string;
}

export interface CalendlyEmbedProps {
  readonly url: string;
  readonly primaryColor?: string;
  readonly textColor?: string;
  readonly backgroundColor?: string;
  readonly className?: string;
}

export interface CalendlyEventPayload {
  readonly event: string;
  readonly payload?: {
    readonly event?: {
      readonly uri?: string;
    };
    readonly invitee?: {
      readonly uri?: string;
    };
  };
}