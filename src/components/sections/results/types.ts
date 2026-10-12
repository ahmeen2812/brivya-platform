/**
 * BRIVYA SOLUTIONS — RESULTS SECTION TYPE DEFINITIONS
 * Strict type contracts for metric records, editorial copy, and animation targets.
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