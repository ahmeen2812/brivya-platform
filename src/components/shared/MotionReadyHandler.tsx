"use client";

import { useEffect } from "react";

/**
 * BRIVYA SOLUTIONS — MOTION READY LIFECYCLE CONTROLLER
 * Coordinates the handoff between CSS first-paint concealment and GSAP runtime control.
 * Uses a double requestAnimationFrame to ensure all child component useEffect hooks
 * have registered their initial GSAP transform offsets before releasing CSS suppression.
 */
export function MotionReadyHandler() {
  useEffect(() => {
    // Double requestAnimationFrame ensures that React child hydration and GSAP
    // initial timeline renders are fully committed to the DOM before releasing CSS concealment.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.add("motion-ready");
      });
    });
  }, []);

  return null;
}