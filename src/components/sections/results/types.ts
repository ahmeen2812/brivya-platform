/**
 * BRIVYA SOLUTIONS — RESULTS SECTION TYPE DEFINITIONS
 * Authoritative contracts for metrics, editorial copy, and counter state.
 */

export type MetricIconKey = "completed" | "ongoing" | "clients";

export interface MetricItemData {
  readonly id: string;
  readonly iconKey: MetricIconKey;
  readonly numericValue: number;
  readonly suffix: string;
  readonly label: string;
  readonly description: string;
  readonly animationDirection: "left" | "bottom" | "right";
}

export interface ResultsSectionContent {
  readonly eyebrow: string;
  readonly headingPrimary: string;
  readonly headingAccent: string;
  readonly description: string;
  readonly metrics: readonly MetricItemData[];
}