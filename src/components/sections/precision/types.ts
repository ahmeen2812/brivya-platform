export type VerificationStatus = "verified" | "active" | "compiled";

export interface TelemetryMetric {
  readonly id: string;
  readonly index: string;
  readonly value: string;
  readonly unit?: string;
  readonly label: string;
  readonly benchmarkStandard: string;
  readonly verificationBadge: string;
}

export interface DeploymentRecord {
  readonly id: string;
  readonly code: string;
  readonly clientSector: string;
  readonly deliverable: string;
  readonly technicalArchitecture: string;
  readonly verifiedOutcome: string;
  readonly timestamp: string;
  readonly href?: string;
}

export interface VisualPlateNode {
  readonly id: string;
  readonly label: string;
  readonly specification: string;
  readonly coordinatePercent: {
    readonly x: number;
    readonly y: number;
  };
  readonly status: VerificationStatus;
}

export interface PrecisionSectionContent {
  readonly eyebrow: string;
  readonly indexCode: string;
  readonly headline: {
    readonly line1: string;
    readonly line2Accent: string;
    readonly line3: string;
  };
  readonly thesis: string;
  readonly metrics: readonly TelemetryMetric[];
  readonly ledgerEntries: readonly DeploymentRecord[];
  readonly plateNodes: readonly VisualPlateNode[];
}

export interface PrecisionAnimationTargets {
  readonly sectionContainer: HTMLElement | null;
  readonly headerBlock: HTMLElement | null;
  readonly visualPlate: HTMLElement | null;
  readonly liveHtmlOverlay: HTMLElement | null;
  readonly metricsGrid: HTMLElement | null;
  readonly ledgerContainer: HTMLElement | null;
}