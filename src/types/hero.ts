/**
 * BRIVYA SOLUTIONS — HERO & CONSTELLATION TYPE SYSTEM
 * Defines strict contracts for editorial copy, orbital constellations,
 * category sequence transitions, and showreel spatial state.
 */

import { SubServiceIconType } from "./megaMenu";

export interface HeroEditorialCopy {
  readonly kicker: string;
  readonly headlineLine1: string;
  readonly headlineLine2: string;
  readonly headlineLine3: string;
  readonly description: string;
  readonly primaryCtaText: string;
  readonly primaryCtaHref: string;
  readonly showreelCtaText: string;
}

export interface OrbitTechNode {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly iconType: SubServiceIconType;
  readonly telemetrySpec: string;
}

export interface OrbitCategorySequence {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly glyphType: SubServiceIconType;
  readonly nodes: readonly OrbitTechNode[];
}

export interface ConstellationOrbitSystem {
  readonly id: "build" | "acquire" | "extend";
  readonly systemDesignation: string;
  readonly diameter: number;
  readonly rotationSpeed: number; // Seconds per 360-degree rotation
  readonly sequences: readonly OrbitCategorySequence[];
}

export interface HeroSectionState {
  readonly isShowreelActive: boolean;
  readonly activeBuildSequenceId: string;
  readonly activeAcquireSequenceId: string;
  readonly activeExtendSequenceId: string;
}