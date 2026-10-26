// src/components/services/google-ads/campaign-management/animations/resourceFaqCtaAnimations.ts
import gsap from 'gsap';
import { MOTION_TOKENS } from './motionTokens';

export function animateResourceFaqCta(): void {
  const ecosystemCards = gsap.utils.toArray<HTMLElement>('[data-motion="ecosystem-card"]');
  if (ecosystemCards.length > 0) {
    gsap.from(ecosystemCards, {
      scrollTrigger: {
        trigger: '#ecosystem-grid',
        start: 'top 82%',
        toggleActions: MOTION_TOKENS.scrollTriggerDefaults.toggleActions,
      },
      opacity: 0,
      y: 28,
      stagger: 0.1,
      duration: MOTION_TOKENS.duration.medium,
      ease: MOTION_TOKENS.ease.power2Out,
    });
  }

  gsap.from('[data-motion="faq-container"]', {
    scrollTrigger: {
      trigger: '[data-motion="faq-container"]',
      start: MOTION_TOKENS.scrollTriggerDefaults.start,
      toggleActions: MOTION_TOKENS.scrollTriggerDefaults.toggleActions,
    },
    opacity: 0,
    y: 24,
    duration: MOTION_TOKENS.duration.medium,
    ease: MOTION_TOKENS.ease.power2Out,
  });

  gsap.from('[data-motion="cta-container"]', {
    scrollTrigger: {
      trigger: '[data-motion="cta-container"]',
      start: MOTION_TOKENS.scrollTriggerDefaults.start,
      toggleActions: MOTION_TOKENS.scrollTriggerDefaults.toggleActions,
    },
    opacity: 0,
    y: 24,
    duration: MOTION_TOKENS.duration.medium,
    ease: MOTION_TOKENS.ease.power2Out,
  });
}