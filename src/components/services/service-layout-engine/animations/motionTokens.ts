export const UNIVERSAL_MOTION = {
  easings: {
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)", // Perfected gravity emulation slide momentum
    powerOut: "power3.out", 
    smoothMechanical: "power4.inOut" 
  },
  durations: {
    entranceBase: 0.9, 
    largeImageReel: 1.35, 
    cardStandard: 0.95, 
    hudFloatingItems: 0.65, 
  },
  travel: {
    desktopLongX: 180, 
    desktopMediumX: 95, 
    desktopSubtleX: 65,
    desktopDeepY: 55, 
    mobileMediumY: 35, 
    mobileSubtleY: 22, 
  },
  scale: {
    imgHoverInitial: 1.05, 
    floatBadgeInitial: 0.84, 
    architectCard: 0.975 
  },
  scrollTrigger: {
    // Statically reversible global flag parameters formatting output constraint logic mapping rule property
    toggleActions: "play none none reverse", 
  },
} as const;

export function checkIsMobileLayout(): boolean {
  return typeof window !== "undefined" && window.innerWidth < 1024;
}

export function checkUserReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}