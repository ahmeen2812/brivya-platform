/**
 * BRIVYA SOLUTIONS — PRECISION IN PRACTICE TYPE SYSTEM
 * Strict type contracts for the credibility & proof section:
 * - Telemetry metrics & verification standards
 * - Deployment ledger records
 * - Architectural visual plate schematic nodes
 * - 5-stage kinetic animation lifecycle targets
 */

export type VerificationStatus = "verified" | "active" | "compiled";

/**
 * Verifiable performance metric data model.
 * Strictly avoids vanity numbers; maps directly to technical and operational standards.
 */
export interface TelemetryMetric {
  readonly id: string;
  readonly index: string; // e.g. "01", "02"
  readonly value: string; // e.g. "< 80ms", "99.8%"
  readonly unit?: string;
  readonly label: string; // e.g. "TTFB Edge Latency"
  readonly benchmarkStandard: string; // e.g. "Global Cloudflare Benchmark"
  readonly verificationBadge: string; // e.g. "Audited SLA"
}

/**
 * Factual deployment ledger record representing an engineered client system.
 */
export interface DeploymentRecord {
  readonly id: string;
  readonly code: string; // e.g. "SYS-094"
  readonly clientSector: string; // e.g. "Enterprise Logistics"
  readonly deliverable: string; // e.g. "Headless Commerce Architecture"
  readonly technicalArchitecture: string; // e.g. "Next.js / Shopify / AWS"
  readonly verifiedOutcome: string; // e.g. "+38% Conversion Throughput"
  readonly timestamp: string; // e.g. "Q1 // 2026"
  readonly href?: string;
}

/**
 * Inspection coordinate pin on the architectural schematic visual plate.
 */
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

/**
 * Complete editorial and telemetry data model for the section.
 */
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

/**
 * DOM targets participating in the 5-stage GSAP kinetic reveal.
 */
export interface PrecisionAnimationTargets {
  readonly sectionContainer: HTMLElement | null;
  readonly headerBlock: HTMLElement | null;
  readonly visualPlate: HTMLElement | null;
  readonly liveHtmlOverlay: HTMLElement | null;
  readonly metricsGrid: HTMLElement | null;
  readonly ledgerContainer: HTMLElement | null;
}