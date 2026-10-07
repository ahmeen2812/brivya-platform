/**
 * BRIVYA SOLUTIONS — HERO ADDONS WHEEL TYPE SYSTEM
 * Strict type contracts for the Google Add-ons <-> Office Add-ins
 * bottom-right satellite wheel, 144-degree arc, and direct DOM nodes.
 */

export type AddonsWheelPhaseId = "google-addons" | "office-addins";

export type AddonsWheelIconKey =
  // Google Workspace Suite
  | "workspace"
  | "sheets"
  | "docs"
  | "gmail"
  | "forms"
  | "apps-script"
  // Microsoft Office 365 Suite
  | "microsoft"
  | "excel"
  | "word"
  | "outlook"
  | "teams"
  | "vsto";

export interface AddonsWheelNode {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly categoryId: AddonsWheelPhaseId;
  readonly iconKey: AddonsWheelIconKey;
}

export interface AddonsWheelPhaseConfig {
  readonly id: AddonsWheelPhaseId;
  readonly title: string;
  readonly subtitle: string;
  readonly centerIcon: "workspace" | "microsoft";
  readonly accentColor: string;
}

export interface AddonsWheelDimensions {
  readonly viewBoxSize: number;
  readonly cx: number;
  readonly cy: number;
  readonly hubRadius: number;
  readonly orbitRadius: number;
  readonly arcStartDeg: number;
  readonly arcSpanDeg: number;
}