/**
 * BRIVYA SOLUTIONS — METRIC COUNT-UP ANIMATION UTILITY
 * Animates numeric values directly in the DOM without React state re-rendering lag.
 */

import gsap from "gsap";

export interface CounterAnimationTarget {
  readonly element: HTMLElement | null;
  readonly targetNumber: number;
}

export function createMetricCounterTween(
  target: CounterAnimationTarget,
  timeline: gsap.core.Timeline,
  position: number | string = 0
): void {
  const { element, targetNumber } = target;
  if (!element) return;

  const proxy = { val: 0 };

  timeline.to(
    proxy,
    {
      val: targetNumber,
      ease: "power2.out",
      duration: 1.2,
      onUpdate: () => {
        const current = Math.floor(proxy.val);
        // Format with leading zero if single digit (e.g., 08)
        element.textContent = current < 10 && targetNumber < 10 ? `0${current}` : `${current}`;
      },
      onComplete: () => {
        element.textContent = targetNumber < 10 ? `0${targetNumber}` : `${targetNumber}`;
      },
    },
    position
  );
}