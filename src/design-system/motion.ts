export const motion = {
  durations: {
    instant: 0.1,
    fast: 0.18,
    standard: 0.35,
    extended: 0.6,
    cinematic: 0.9,
    planeUnfold: 1.1,
  },
  easings: {
    // Brivya signature: high entry velocity, precise mechanical settling
    easeBrivya: [0.16, 1, 0.3, 1] as const,
    easeBrivyaString: "cubic-bezier(0.16, 1, 0.3, 1)",
    easeMechanical: [0.25, 0.1, 0.25, 1] as const,
    easeMechanicalString: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    easeSnappy: [0.05, 0.7, 0.1, 1] as const,
    easeSnappyString: "cubic-bezier(0.05, 0.7, 0.1, 1)",
  },
} as const;