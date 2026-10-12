/**
 * BRIVYA SOLUTIONS — PERMANENT ONE-WAY METRIC COUNT-UP ENGINE
 * Runs once on viewport entrance and locks numbers at their final verified values.
 * Strictly prevents backward counting during reverse scrolling.
 */

import gsap from "gsap";

export interface CounterAnimationTarget {
  readonly element: HTMLElement | null;
  readonly targetNumber: number;
}

export function runPermanentCountUp(
  targets: readonly CounterAnimationTarget[],
  durationSec: number = 1.4
): void {
  targets.forEach(({ element, targetNumber }) => {
    if (!element) return;

    const proxy = { val: 0 };

    gsap.to(proxy, {
      val: targetNumber,
      duration: durationSec,
      ease: "power2.out",
      onUpdate: () => {
        const current = Math.floor(proxy.val);
        // Formats numbers < 10 with leading zero (e.g., "07")
        element.textContent = current < 10 && targetNumber < 10 ? `0${current}` : `${current}`;
      },
      onComplete: () => {
        element.textContent = targetNumber < 10 ? `0${targetNumber}` : `${targetNumber}`;
      },
    });
  });
}