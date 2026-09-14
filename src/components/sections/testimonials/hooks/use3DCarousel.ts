/**
 * BRIVYA SOLUTIONS — 3D CAROUSEL STATE & TIMER SYNCHRONIZER
 * Single-source GSAP progress bar animation, card-only hover pause, and flicker-free reset.
 */

import { useState, useRef, useCallback } from "react";
import gsap from "gsap";

export interface Use3DCarouselOptions {
  readonly totalItems: number;
  readonly autoPlayDurationSec: number;
  readonly onAdvanceLeft: () => void;
}

export function use3DCarousel({
  totalItems,
  autoPlayDurationSec = 6.5,
  onAdvanceLeft,
}: Use3DCarouselOptions) {
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const progressTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Derive the 5 slot review indices for continuous looping
  const farLeftIndex = (centerIndex - 2 + totalItems) % totalItems;
  const leftIndex = (centerIndex - 1 + totalItems) % totalItems;
  const rightIndex = (centerIndex + 1) % totalItems;
  const farRightIndex = (centerIndex + 2) % totalItems;

  // Single-source GSAP Progress & Autoplay Timer
  const startProgressTimer = useCallback(() => {
    if (progressTimelineRef.current) {
      progressTimelineRef.current.kill();
      progressTimelineRef.current = null;
    }

    if (!progressBarRef.current) return;

    // Guaranteed reset to zero before the tween begins
    gsap.set(progressBarRef.current, { scaleX: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        onAdvanceLeft();
      },
    });

    tl.to(progressBarRef.current, {
      scaleX: 1,
      duration: autoPlayDurationSec,
      ease: "none",
    });

    progressTimelineRef.current = tl;
  }, [autoPlayDurationSec, onAdvanceLeft]);

  // Kill progress bar and reset to 0 immediately when a card starts moving
  const stopAndResetProgress = useCallback(() => {
    if (progressTimelineRef.current) {
      progressTimelineRef.current.kill();
      progressTimelineRef.current = null;
    }
    if (progressBarRef.current) {
      gsap.set(progressBarRef.current, { scaleX: 0 });
    }
  }, []);

  // Card-Only Hover Listeners (Pauses the active GSAP progress tween)
  const handleCardMouseEnter = useCallback(() => {
    if (progressTimelineRef.current && progressTimelineRef.current.isActive()) {
      progressTimelineRef.current.pause();
    }
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    if (progressTimelineRef.current && progressTimelineRef.current.paused()) {
      progressTimelineRef.current.resume();
    }
  }, []);

  // Update center index cleanly
  const commitShift = useCallback((newCenter: number) => {
    setCenterIndex(newCenter);
  }, []);

  return {
    centerIndex,
    leftIndex,
    rightIndex,
    farLeftIndex,
    farRightIndex,
    isAnimating,
    setIsAnimating,
    commitShift,
    progressBarRef,
    startProgressTimer,
    stopAndResetProgress,
    handleCardMouseEnter,
    handleCardMouseLeave,
  };
}