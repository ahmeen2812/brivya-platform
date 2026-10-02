export const borders = {
  width: {
    hairline: "1px",
    medium: "2px",
    heavy: "4px",
  },
  radii: {
    sharp: "0px",
    micro: "2px",
    subtle: "4px",
    card: "6px",
    terminal: "8px",
  },
  chamfers: {
    small: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
    medium: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
    symmetric: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)",
  },
  focusRing: "0 0 0 2px rgba(22, 117, 248, 0.4)",
} as const;