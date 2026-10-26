// src/components/services/google-ads/campaign-management/animations/cardAnimations.ts
import gsap from 'gsap';
import { MOTION_TOKENS } from './motionTokens';

export function animateCampaignCards(): void {
  const cards = gsap.utils.toArray<HTMLElement>('[data-motion="service-card"]');
  cards.forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: MOTION_TOKENS.scrollTriggerDefaults.start,
        toggleActions: MOTION_TOKENS.scrollTriggerDefaults.toggleActions,
      },
      opacity: 0,
      y: 32,
      duration: MOTION_TOKENS.duration.slow,
      ease: MOTION_TOKENS.ease.power3Out,
    });
  });
}