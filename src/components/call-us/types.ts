/**
 * BRIVYA SOLUTIONS — CALL US MEETING BOOKING TYPE DEFINITIONS
 * Authoritative contracts for Call Us meeting scheduling components.
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