/**
 * BRIVYA SOLUTIONS — CAROUSEL STATE HOOK
 * Manages active index, right-to-left autoplay, timer synchronization, pause/resume, and gestures.
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { CarouselDirection } from "../types";

export interface UseCarouselOptions {
  readonly totalItems: number;
  readonly autoPlayDurationMs: number;
  readonly pauseOnHover?: boolean;
}

export function useTestimonialCarousel({
  totalItems,
  autoPlayDurationMs = 6500,
  pauseOnHover = true,
}: UseCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<CarouselDirection>("next");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const startTimeRef = useRef<number | null>(null);
  const elapsedBeforePauseRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  // Advance to next slide
  const goToNext = useCallback(() => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % totalItems);
    setProgress(0);
    startTimeRef.current = null;
    elapsedBeforePauseRef.current = 0;
  }, [totalItems]);

  // Return to previous slide
  const goToPrev = useCallback(() => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setProgress(0);
    startTimeRef.current = null;
    elapsedBeforePauseRef.current = 0;
  }, [totalItems]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Single-source autoplay and progress synchronizer
  useEffect(() => {
    if (!isPlaying || (isHovered && pauseOnHover)) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const tick = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = now - elapsedBeforePauseRef.current;
      }

      const elapsed = now - startTimeRef.current;
      elapsedBeforePauseRef.current = elapsed;
      const currentProgress = Math.min(100, (elapsed / autoPlayDurationMs) * 100);
      setProgress(currentProgress);

      if (elapsed >= autoPlayDurationMs) {
        goToNext();
      } else {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, isHovered, pauseOnHover, autoPlayDurationMs, goToNext]);

  // Hover handlers
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsHovered(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      startTimeRef.current = null; // Re-aligns start timestamp on resume
      setIsHovered(false);
    }
  }, [pauseOnHover]);

  // Touch swipe gesture handlers
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartXRef.current === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartXRef.current - touchEndX;

      if (Math.abs(diffX) > 40) {
        if (diffX > 0) goToNext(); // Swiped left -> next
        else goToPrev();           // Swiped right -> prev
      }
      touchStartXRef.current = null;
    },
    [goToNext, goToPrev]
  );

  return {
    activeIndex,
    direction,
    isPlaying,
    progress,
    goToNext,
    goToPrev,
    togglePlay,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  };
}