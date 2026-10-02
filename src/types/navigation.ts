export type NavigationPlaneId = "build" | "acquire" | "expand";

export interface SubsystemRoute {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly tags: readonly string[];
}

export interface ArchitecturalPlane {
  readonly id: NavigationPlaneId;
  readonly index: string;
  readonly designation: string;
  readonly title: string;
  readonly thesis: string;
  readonly subsystems: readonly SubsystemRoute[];
  readonly telemetry: {
    readonly latencyTarget: string;
    readonly stackFocus: string;
    readonly metricLead: string;
  };
}

export interface PrimaryIndexItem {
  readonly index: string;
  readonly label: string;
  readonly href: string;
  readonly planeTarget?: NavigationPlaneId;
  readonly telemetry: string;
  readonly isAction?: boolean;
}

export interface NavigationState {
  readonly isOpen: boolean;
  readonly activePlane: NavigationPlaneId;
  readonly isAnimating: boolean;
}