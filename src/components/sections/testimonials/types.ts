/**
 * BRIVYA SOLUTIONS — TESTIMONIALS & 3D CAROUSEL TYPE SYSTEM
 * Type definitions for review items, 3D physical slots, and animation controls.
 */

export interface ReviewItem {
  readonly id: string;
  readonly name: string;
  readonly quote: string;
  readonly avatarUrl?: string;
  readonly initials: string;
}

export type CarouselSlot = "center" | "left" | "right" | "far-left" | "far-right";

export type SlideDirection = "shift-left" | "shift-right";

// Backward-compatible alias to cleanly resolve any legacy imports
export type CarouselDirection = SlideDirection | "next" | "prev";

export interface Carousel3DState {
  readonly centerIndex: number;
  readonly isAnimating: boolean;
  readonly isHovered: boolean;
}