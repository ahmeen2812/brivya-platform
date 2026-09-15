/**
 * BRIVYA SOLUTIONS — 3D CAROUSEL STATE & TIMER SYNCHRONIZER
 * Single-source GSAP progress bar animation, card-only hover pause, and loop handling.
 */

import { useState, useEffect, useRef, useCallback } from "react";
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
    }

    if (!progressBarRef.current) return;

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

  // Restart timer whenever the active center card changes
  useEffect(() => {
    startProgressTimer();
    return () => {
      if (progressTimelineRef.current) progressTimelineRef.current.kill();
    };
  }, [centerIndex, startProgressTimer]);

  // Card-Only Hover Listeners
  const handleCardMouseEnter = useCallback(() => {
    if (progressTimelineRef.current) {
      progressTimelineRef.current.pause();
    }
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    if (progressTimelineRef.current) {
      progressTimelineRef.current.play();
    }
  }, []);

  // Update center index and reset animation lock
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
    handleCardMouseEnter,
    handleCardMouseLeave,
  };
}