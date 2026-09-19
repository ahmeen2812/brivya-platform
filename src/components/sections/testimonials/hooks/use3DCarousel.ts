/**
 * BRIVYA SOLUTIONS — 3D CAROUSEL STATE HOOK
 * Manages 3D slot indices, continuous autoplay, synchronized progress, and card-only hover pause.
 */

import { useState, useEffect, useRef, useCallback } from "react";

export interface Use3DCarouselOptions {
  readonly totalItems: number;
  readonly autoPlayDurationMs: number;
}

export function use3DCarousel({ totalItems, autoPlayDurationMs = 6500 }: Use3DCarouselOptions) {
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const elapsedMsRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);
  const frameIdRef = useRef<number | null>(null);

  // Derive neighbor slot indices
  const leftIndex = (centerIndex - 1 + totalItems) % totalItems;
  const rightIndex = (centerIndex + 1) % totalItems;

  // Advance left (Left Button Click or Autoplay)
  const shiftLeft = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    elapsedMsRef.current = 0;
    lastTimeRef.current = null;

    setCenterIndex((prev) => (prev + 1) % totalItems);
    setTimeout(() => {
      setIsAnimating(false);
    }, 660);
  }, [isAnimating, totalItems]);

  // Advance right (Right Button Click)
  const shiftRight = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    elapsedMsRef.current = 0;
    lastTimeRef.current = null;

    setCenterIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setTimeout(() => {
      setIsAnimating(false);
    }, 660);
  }, [isAnimating, totalItems]);

  // Unified Single-Source Timer & Progress Loop
  useEffect(() => {
    if (isHovered || isAnimating) {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      lastTimeRef.current = null;
      return;
    }

    const tick = (now: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = now;
      }

      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;
      elapsedMsRef.current += delta;

      const currentProgress = Math.min(100, (elapsedMsRef.current / autoPlayDurationMs) * 100);
      setProgress(currentProgress);

      if (elapsedMsRef.current >= autoPlayDurationMs) {
        shiftLeft();
      } else {
        frameIdRef.current = requestAnimationFrame(tick);
      }
    };

    frameIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
    };
  }, [isHovered, isAnimating, autoPlayDurationMs, shiftLeft]);

  // Card-Only Hover Handlers (Never attached to section or window)
  const handleCardMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    lastTimeRef.current = null;
    setIsHovered(false);
  }, []);

  // Mobile Swipe Gestures
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartXRef.current === null) return;
      const diff = touchStartXRef.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) shiftLeft();
        else shiftRight();
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
    isHovered,
    progress,
    shiftLeft,
    shiftRight,
    handleCardMouseEnter,
    handleCardMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  };
}