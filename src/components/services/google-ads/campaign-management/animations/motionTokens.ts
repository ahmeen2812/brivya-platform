// src/components/services/google-ads/campaign-management/animations/motionTokens.ts

export const MOTION_TOKENS = {
  ease: {
    power3Out: 'power3.out',
    power2Out: 'power2.out',
    expoOut: 'expo.out',
  },
  duration: {
    fast: 0.45,
    medium: 0.75,
    slow: 0.85,
  },
  scrollTriggerDefaults: {
    start: 'top 85%',
    toggleActions: 'play none none reverse' as const,
  },
} as const;