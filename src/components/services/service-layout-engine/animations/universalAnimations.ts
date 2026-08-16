import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UNIVERSAL_MOTION, checkIsMobileLayout, checkUserReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function useUniversalEntranceAnimation(targets: Element[], triggerEl: HTMLElement, direction: 'horizontal-split' | 'vertical-drop' | 'stagger-lateral' = 'vertical-drop') {
  if (checkUserReducedMotion() || targets.length === 0 || !triggerEl) {
    gsap.set(targets, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  const isMobile = checkIsMobileLayout();
  const baseTravel = isMobile ? UNIVERSAL_MOTION.travel.mobileMediumY : UNIVERSAL_MOTION.travel.desktopDeepY;

  return gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: isMobile ? "top 92%" : "top 88%", 
        toggleActions: UNIVERSAL_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(targets, { clearProps: "all" }),
    });

    if (direction === 'horizontal-split') {
       targets.forEach((el, i) => {
         const dx = isMobile ? 0 : (i % 2 === 0 ? UNIVERSAL_MOTION.travel.desktopLongX : -UNIVERSAL_MOTION.travel.desktopLongX);
         const dy = isMobile ? baseTravel : 0;
         tl.fromTo(el, { autoAlpha: 0, x: dx, y: dy }, { autoAlpha: 1, x: 0, y: 0, duration: UNIVERSAL_MOTION.durations.entranceBase, ease: UNIVERSAL_MOTION.easings.executiveDecel }, i * 0.12);
       });
    } else {
       targets.forEach((el, i) => {
         tl.fromTo(el, { autoAlpha: 0, y: baseTravel + (i * 12) }, { autoAlpha: 1, y: 0, duration: UNIVERSAL_MOTION.durations.entranceBase, ease: UNIVERSAL_MOTION.easings.executiveDecel }, i * 0.08);
       });
    }
  }, triggerEl);
}

export function animateSingleCardDirect(card: HTMLElement | null) {
  if (checkUserReducedMotion() || !card) return;
  const isMobile = checkIsMobileLayout();
  return gsap.context(() => {
    gsap.fromTo(card, 
      { autoAlpha: 0, scale: UNIVERSAL_MOTION.scale.architectCard, y: isMobile ? 25 : 55 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.95, ease: UNIVERSAL_MOTION.easings.executiveDecel,
        scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" }
      });
  });
}