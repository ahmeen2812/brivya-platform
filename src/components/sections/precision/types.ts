export type MetricIconKey =
  | "projects"
  | "experience"
  | "clients"
  | "campaigns"
  | "satisfaction";

export interface MetricItemData {
  readonly id: string;
  readonly iconKey: MetricIconKey;
  readonly value: string;
  readonly label: string;
  readonly sublabel?: string;
  readonly isPrimary: boolean;
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