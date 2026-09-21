/**
 * BRIVYA SOLUTIONS — 3D CAROUSEL STATE HOOK
 * Manages 3D slot indices, continuous autoplay, synchronized progress, and gestures.
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { SlideDirection } from "../types";

export interface Use3DCarouselOptions {
  readonly totalItems: number;
  readonly autoPlayDurationMs: number;
}

export function use3DCarousel({ totalItems, autoPlayDurationMs = 6500 }: Use3DCarouselOptions) {
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const startTimeRef = useRef<number | null>(null);
  const elapsedBeforePauseRef = useRef<number>(0);
  const frameIdRef = useRef<number | null>(null);

  // Derive neighbor slot indices
  const leftIndex = (centerIndex - 1 + totalItems) % totalItems;
  const rightIndex = (centerIndex + 1) % totalItems;

  // ---------------------------------------------------------------------------
  // LEFT Button Click -> Cards move LEFT, Right card becomes Center
  // ---------------------------------------------------------------------------
  const shiftLeft = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    startTimeRef.current = null;
    elapsedBeforePauseRef.current = 0;

    setCenterIndex((prev) => (prev + 1) % totalItems);
    setTimeout(() => {
      setIsAnimating(false);
    }, 660);
  }, [isAnimating, totalItems]);

  // ---------------------------------------------------------------------------
  // RIGHT Button Click -> Cards move RIGHT, Left card becomes Center
  // ---------------------------------------------------------------------------
  const shiftRight = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    startTimeRef.current = null;
    elapsedBeforePauseRef.current = 0;

    setCenterIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setTimeout(() => {
      setIsAnimating(false);
    }, 660);
  }, [isAnimating, totalItems]);

  // Autoplay & Progress Timer Synchronization (Autoplay uses Left-moving shift)
  useEffect(() => {
    if (isPaused || isAnimating) {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      return;
    }

    const tick = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = now - elapsedBeforePauseRef.current;
      }

      const elapsed = now - startTimeRef.current;
      elapsedBeforePauseRef.current = elapsed;
      const pct = Math.min(100, (elapsed / autoPlayDurationMs) * 100);
      setProgress(pct);

      if (elapsed >= autoPlayDurationMs) {
        shiftLeft();
      } else {
        frameIdRef.current = requestAnimationFrame(tick);
      }
    };

    frameIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
    };
  }, [isPaused, isAnimating, autoPlayDurationMs, shiftLeft]);

  // Hover & interaction pauses
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => {
    startTimeRef.current = null;
    setIsPaused(false);
  }, []);

  // Mobile swipe gestures
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartXRef.current === null) return;
      const diff = touchStartXRef.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) shiftLeft();  // Swipe left -> cards move left
        else shiftRight();          // Swipe right -> cards move right
      }
      touchStartXRef.current = null;
    },
    [shiftLeft, shiftRight]
  );

  return {
    centerIndex,
    leftIndex,
    rightIndex,
    isAnimating,
    progress,
    shiftLeft,
    shiftRight,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  };
}