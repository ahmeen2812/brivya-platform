import gsap from "gsap";
import { runCounterTicker } from "./navCounterTicker";

export interface MobileDrawerElements {
  backdrop: HTMLDivElement | null;
  drawerCard: HTMLDivElement | null;
  items: (HTMLLIElement | null)[];
  numberRefs: (HTMLSpanElement | null)[];
  ctaButton: HTMLDivElement | null;
}

/**
 * Animates the Mobile Drawer Opening
 */
export function animateMobileDrawerOpen(elements: MobileDrawerElements): void {
  const { backdrop, drawerCard, items, numberRefs, ctaButton } = elements;
  if (!backdrop || !drawerCard) return;

  const validItems = items.filter(Boolean);

  // Set initial states
  gsap.set(backdrop, { opacity: 0 });
  gsap.set(drawerCard, {
    opacity: 0,
    y: -18,
    scale: 0.97,
    transformOrigin: "top center",
  });
  if (validItems.length > 0) gsap.set(validItems, { opacity: 0, x: -14 });
  if (ctaButton) gsap.set(ctaButton, { opacity: 0, y: 12 });

  // Reset numbers to 00
  numberRefs.forEach((ref) => {
    if (ref) ref.innerText = "00";
  });

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(backdrop, {
    opacity: 1,
    duration: 0.28,
    ease: "power2.out",
  })
    .to(
      drawerCard,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.38,
        ease: "power3.out",
      },
      "-=0.18",
    )
    .to(
      validItems,
      {
        opacity: 1,
        x: 0,
        duration: 0.32,
        stagger: 0.04,
        ease: "power3.out",
        onStart: () => {
          numberRefs.forEach((ref, index) => {
            runCounterTicker(ref, index + 1, 0.4, index * 0.04);
          });
        },
      },
      "-=0.22",
    );

  if (ctaButton) {
    tl.to(
      ctaButton,
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.2)",
      },
      "-=0.18",
    );
  }
}

/**
 * Animates the Mobile Drawer Closing
 */
export function animateMobileDrawerClose(
  backdrop: HTMLDivElement | null,
  drawerCard: HTMLDivElement | null,
  onComplete: () => void,
): void {
  if (!backdrop || !drawerCard) {
    onComplete();
    return;
  }

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete,
  });

  tl.to(drawerCard, {
    opacity: 0,
    y: -12,
    scale: 0.98,
    duration: 0.2,
  }).to(
    backdrop,
    {
      opacity: 0,
      duration: 0.2,
    },
    "-=0.1",
  );
}