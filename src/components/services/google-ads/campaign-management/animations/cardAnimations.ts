// src/components/services/google-ads/campaign-management/animations/cardAnimations.ts
import gsap from 'gsap';
import { MOTION_TOKENS } from './motionTokens';

export function animateCards(): void {
  // Animate substrate cards
  const cards = gsap.utils.toArray<HTMLElement>('[data-motion="service-card"]');
  cards.forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: MOTION_TOKENS.scrollTrigger.default.start,
        toggleActions: MOTION_TOKENS.scrollTrigger.default.toggleActions,
      },
      y: MOTION_TOKENS.travel.cardY,
      opacity: 0,
      duration: MOTION_TOKENS.duration.cardEntry,
      ease: MOTION_TOKENS.ease.standardPower,
    });
  });

  // Animate floating companion mockups
  const mockups = gsap.utils.toArray<HTMLElement>('[data-motion="floating-mockup"]');
  mockups.forEach((mockup) => {
    const isLeft = mockup.getAttribute('data-mockup-side') === 'left';
    gsap.from(mockup, {
      scrollTrigger: {
        trigger: mockup,
        start: MOTION_TOKENS.scrollTrigger.default.start,
        toggleActions: MOTION_TOKENS.scrollTrigger.default.toggleActions,
      },
      x: isLeft ? -MOTION_TOKENS.travel.companionX : MOTION_TOKENS.travel.companionX,
      scale: 0.92,
      opacity: 0,
      duration: MOTION_TOKENS.duration.heroTravel,
      ease: MOTION_TOKENS.ease.executiveDecel,
    });
  });
}