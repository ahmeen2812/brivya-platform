/**
 * BRIVYA SOLUTIONS — METRICS & CREDIBILITY SECTION TYPES
 * Strict type contracts for the 3+2 expandable metrics layout.
 */

export type MetricIconKey =
  | "projects"
  | "experience"
  | "clients"
  | "campaigns"
  | "satisfaction";

export interface MetricItemData {
  readonly id: string;
  readonly iconKey: MetricIconKey;
  readonly value: string; // Verifiable numeric value (e.g. "45+", "6+", "98%")
  readonly label: string; // e.g. "Completed Projects"
  readonly sublabel?: string; // e.g. "Documented deliverables"
  readonly isPrimary: boolean; // true = visible initially; false = visible when expanded
}

export interface MetricsSectionCopy {
  readonly eyebrow: string;
  readonly headingLine1: string;
  readonly headingLine2Accent: string;
  readonly description: string;
  readonly footerStatement: string;
  readonly expandLabel: string;
  readonly collapseLabel: string;
}