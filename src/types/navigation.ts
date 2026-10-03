/**
 * BRIVYA SOLUTIONS — CORE NAVIGATION TYPE DEFINITIONS
 * Defines strict contracts for both the floating reference navbar
 * and the secondary architectural fold navigation system.
 */

// Architectural Plane Identifiers
export type NavigationPlaneId = "build" | "acquire" | "expand";

// Subsystem Service Routes within Architectural Planes
export interface SubsystemRoute {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly tags: readonly string[];
}

// Telemetry & Infrastructure specifications per plane
export interface PlaneTelemetry {
  readonly latencyTarget: string;
  readonly stackFocus: string;
  readonly metricLead: string;
}

// Full Architectural Plane Model
export interface ArchitecturalPlane {
  readonly id: NavigationPlaneId;
  readonly index: string;
  readonly designation: string;
  readonly title: string;
  readonly thesis: string;
  readonly subsystems: readonly SubsystemRoute[];
  readonly telemetry: PlaneTelemetry;
}

// Primary Navigation Index Item Contract (Used by NavigationIndices.tsx)
export interface PrimaryIndexItem {
  readonly index: string;
  readonly label: string;
  readonly href: string;
  readonly telemetry: string;
  readonly planeTarget?: NavigationPlaneId;
  readonly isAction?: boolean;
}

// Reference Navbar Item Contract (Used by Navbar.tsx, NavLinks.tsx, NavItem.tsx)
export interface NavItemConfig {
  readonly id: string;
  readonly index: string;
  readonly label: string;
  readonly href: string;
  readonly hasDividerAfter?: boolean;
}

// Brand Visual & Target Manifest
export interface NavBrandConfig {
  readonly logoAlt: string;
  readonly logoSrc: string;
  readonly ctaText: string;
  readonly ctaHref: string;
}

// Global Nav State Model
export interface NavigationState {
  readonly isOpen: boolean;
  readonly activePlane: NavigationPlaneId;
  readonly isAnimating: boolean;
}