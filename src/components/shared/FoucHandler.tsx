"use client";

import { useEffect } from "react";

/**
 * BRIVYA SOLUTIONS — FOUC PREVENTION LIFECYCLE CONTROLLER
 * Coordinates the handoff between CSS first-paint concealment and GSAP runtime control.
 * Fires after hydration when component animation instances have registered their initial states.
 */
export function FoucHandler() {
  useEffect(() => {
    // Runs after React hydration and after child animation hooks initialize their starting states
    requestAnimationFrame(() => {
      document.documentElement.classList.add("fouc-ready");
    });
  }, []);

  return null;
}