/**
 * BRIVYA SOLUTIONS — TESTIMONIALS TYPE DEFINITIONS
 * Authoritative type contracts for review items, author profiles, and carousel mechanics.
 */

export interface TestimonialItem {
  readonly id: string;
  readonly quote: string;
  readonly authorName: string;
  readonly authorRole: string;
  readonly authorCompany: string;
  readonly authorAvatarUrl?: string; // Optional real image URL
  readonly initials: string;         // Understated fallback initials
  readonly ratingStars?: number;     // Optional star rating (1–5)
  readonly categoryTag?: string;     // e.g. "Web Development", "Google Ads", "AI Automation"
}

export interface TestimonialsSectionConfig {
  readonly header: {
    readonly eyebrow: string;
    readonly title: string;
    readonly subtitle: string;
  };
  readonly carousel: {
    readonly autoPlayDurationMs: number; // Reading duration per card
    readonly transitionDurationMs: number;
    readonly pauseOnHover: boolean;
    readonly pauseOnFocus: boolean;
  };
  readonly reviews: readonly TestimonialItem[];
}

export type CarouselDirection = "next" | "prev";

export interface CarouselState {
  readonly activeIndex: number;
  readonly isPlaying: boolean;
  readonly isHovered: boolean;
  readonly progress: number; // 0 to 100
  readonly direction: CarouselDirection;
}