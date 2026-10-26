// src/components/services/google-ads/campaign-management/animations/heroAnimations.ts
import gsap from 'gsap';
import { MOTION_TOKENS } from './motionTokens';

export function animateCampaignHero(): void {
  gsap.from('[data-motion="hero-illustration"]', {
    opacity: 0,
    x: -32,
    duration: MOTION_TOKENS.duration.slow,
    ease: MOTION_TOKENS.ease.power3Out,
  });

  gsap.from('[data-motion="hero-text"]', {
    opacity: 0,
    y: 28,
    duration: MOTION_TOKENS.duration.medium,
    stagger: 0.12,
    ease: MOTION_TOKENS.ease.power3Out,
  });

  gsap.from('[data-motion="directive-console"]', {
    scrollTrigger: {
      trigger: '[data-motion="directive-console"]',
      start: 'top 90%',
      toggleActions: MOTION_TOKENS.scrollTriggerDefaults.toggleActions,
    },
    opacity: 0,
    y: 24,
    duration: MOTION_TOKENS.duration.medium,
    ease: MOTION_TOKENS.ease.power2Out,
  });
}