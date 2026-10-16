import { useEffect, useLayoutEffect } from "react";

/**
 * BRIVYA SOLUTIONS — PRE-PAINT LIFECYCLE HOOK
 * Resolves to useLayoutEffect in the browser so GSAP initializes starting transforms
 * and opacities synchronously BEFORE the browser paints the screen, eliminating FOUC
 * on both initial load and client-side page transitions.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;