// src/components/services/google-ads/campaign-management/animations/motionTokens.ts

export const MOTION_TOKENS = {
  ease: {
    executiveDecel: 'cubic-bezier(0.16, 1, 0.3, 1)',
    standardPower: 'power3.out',
    subtlePower: 'power2.out',
  },
  duration: {
    heroTravel: 1.25,
    cardEntry: 0.85,
    standard: 0.75,
  },
  travel: {
    heroX: -150,
    companionX: 120,
    cardY: 32,
    itemY: 24,
  },
  scrollTrigger: {
    default: {
      start: 'top 85%',
      toggleActions: 'play none none reverse' as const,
    },
    console: {
      start: 'top 96%',
      toggleActions: 'play none none reverse' as const,
    },
    grid: {
      start: 'top 82%',
      toggleActions: 'play none none reverse' as const,
    },
  },
} as const;