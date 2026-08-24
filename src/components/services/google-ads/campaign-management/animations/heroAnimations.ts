// src/components/services/google-ads/campaign-management/animations/heroAnimations.ts
import gsap from 'gsap';
import { MOTION_TOKENS } from './motionTokens';

export function animateHero(): void {
  // Floating Illustration slides in with zoom
  gsap.from('[data-motion="hero-illustration"]', {
    x: MOTION_TOKENS.travel.heroX,
    scale: 0.94,
    opacity: 0,
    duration: MOTION_TOKENS.duration.heroTravel,
    ease: MOTION_TOKENS.ease.executiveDecel,
  });

  // Text payload reveals from stationary line
  gsap.from('[data-motion="hero-text"]', {
    y: MOTION_TOKENS.travel.itemY,
    opacity: 0,
    duration: MOTION_TOKENS.duration.standard,
    stagger: 0.1,
    ease: MOTION_TOKENS.ease.standardPower,
  });

  // Directive Console reveals cleanly below fold
  gsap.from('[data-motion="directive-console"]', {
    scrollTrigger: {
      trigger: '[data-motion="directive-console"]',
      start: MOTION_TOKENS.scrollTrigger.console.start,
      toggleActions: MOTION_TOKENS.scrollTrigger.console.toggleActions,
    },
    y: MOTION_TOKENS.travel.itemY,
    opacity: 0,
    duration: MOTION_TOKENS.duration.standard,
    ease: MOTION_TOKENS.ease.subtlePower,
  });
}