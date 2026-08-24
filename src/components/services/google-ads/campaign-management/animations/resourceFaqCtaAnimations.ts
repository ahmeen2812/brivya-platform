// src/components/services/google-ads/campaign-management/animations/resourceFaqCtaAnimations.ts
import gsap from 'gsap';
import { MOTION_TOKENS } from './motionTokens';

export function animateResourceFaqCta(): void {
  const resourceCards = gsap.utils.toArray<HTMLElement>('[data-motion="ecosystem-card"]');
  if (resourceCards.length > 0) {
    gsap.from(resourceCards, {
      scrollTrigger: {
        trigger: '#ecosystem-grid',
        start: MOTION_TOKENS.scrollTrigger.grid.start,
        toggleActions: MOTION_TOKENS.scrollTrigger.grid.toggleActions,
      },
      y: MOTION_TOKENS.travel.itemY,
      opacity: 0,
      stagger: 0.1,
      duration: MOTION_TOKENS.duration.standard,
      ease: MOTION_TOKENS.ease.subtlePower,
    });
  }

  gsap.from('[data-motion="faq-container"]', {
    scrollTrigger: {
      trigger: '[data-motion="faq-container"]',
      start: MOTION_TOKENS.scrollTrigger.default.start,
      toggleActions: MOTION_TOKENS.scrollTrigger.default.toggleActions,
    },
    y: MOTION_TOKENS.travel.itemY,
    opacity: 0,
    duration: MOTION_TOKENS.duration.standard,
    ease: MOTION_TOKENS.ease.subtlePower,
  });

  gsap.from('[data-motion="cta-container"]', {
    scrollTrigger: {
      trigger: '[data-motion="cta-container"]',
      start: MOTION_TOKENS.scrollTrigger.default.start,
      toggleActions: MOTION_TOKENS.scrollTrigger.default.toggleActions,
    },
    y: MOTION_TOKENS.travel.itemY,
    opacity: 0,
    duration: MOTION_TOKENS.duration.standard,
    ease: MOTION_TOKENS.ease.subtlePower,
  });
}