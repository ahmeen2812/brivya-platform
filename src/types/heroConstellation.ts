/**
 * BRIVYA SOLUTIONS — HERO CONSTELLATION TYPE SYSTEM
 * Strict type contracts for 144-degree partial orbits,
 * phased category transitions, and direct DOM node references.
 */

import { HeroIconKey } from "@/components/hero/HeroOrbitIcons";

export interface ConstellationNodeItem {
  readonly id: string;
  readonly name: string;
  readonly iconType: HeroIconKey;
}

export interface ConstellationPhase {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly centerIcon: HeroIconKey;
  readonly centerIconType?: "code" | "cloud" | "ai" | "google-ads" | "meta" | "microsoft" | "workspace";
  readonly nodes: readonly ConstellationNodeItem[];
}

export interface OrbitTrackConfig {
  readonly id: string;
  readonly cx: number;
  readonly cy: number;
  readonly hubRadius: number;
  readonly orbitRadius: number;
  readonly startAngleDeg: number;
  readonly arcSpanDeg: number; // Exactly 144 degrees
  readonly speed: number;
  readonly gradientId: string;
  readonly phases: readonly ConstellationPhase[];
}