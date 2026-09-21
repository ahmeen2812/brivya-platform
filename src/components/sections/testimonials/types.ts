/**
 * BRIVYA SOLUTIONS — TESTIMONIALS & 3D CAROUSEL TYPE SYSTEM
 * Type definitions for review items, 3D slot placements, and kinematic state.
 */

export interface ReviewItem {
  readonly id: string;
  readonly name: string;
  readonly quote: string;
  readonly avatarUrl?: string;
  readonly initials: string;
}

export type CarouselSlot = "center" | "left" | "right" | "hidden-left" | "hidden-right";

export type SlideDirection = "shift-left" | "shift-right";

export interface Carousel3DState {
  readonly centerIndex: number;
  readonly leftIndex: number;
  readonly rightIndex: number;
  readonly isAnimating: boolean;
  readonly isPlaying: boolean;
  readonly progress: number; // 0 to 100
}