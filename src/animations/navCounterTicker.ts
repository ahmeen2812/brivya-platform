import gsap from "gsap";

/**
 * Runs a digital odometer roll on an HTML element, starting from 00 up to the target string (e.g., "01" .. "06").
 */
export function runCounterTicker(
  element: HTMLElement | null,
  targetNumber: number,
  duration = 0.55,
  delay = 0,
): void {
  if (!element) return;

  const proxy = { value: 0 };

  gsap.to(proxy, {
    value: targetNumber,
    duration,
    delay,
    ease: "power2.out",
    onUpdate: () => {
      const current = Math.floor(proxy.value);
      element.innerText = current < 10 ? `0${current}` : `${current}`;
    },
    onComplete: () => {
      element.innerText = targetNumber < 10 ? `0${targetNumber}` : `${targetNumber}`;
    },
  });
}