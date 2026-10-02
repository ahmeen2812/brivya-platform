export const spacing = {
  0: "0rem",
  px: "1px",
  0.5: "0.125rem", // 2px
  1: "0.25rem",     // 4px
  1.5: "0.375rem",  // 6px
  2: "0.5rem",       // 8px
  2.5: "0.625rem",  // 10px
  3: "0.75rem",      // 12px
  4: "1rem",         // 16px
  5: "1.25rem",      // 20px
  6: "1.5rem",       // 24px
  8: "2rem",         // 32px
  10: "2.5rem",      // 40px
  12: "3rem",        // 48px
  16: "4rem",        // 64px
  20: "5rem",        // 80px
  24: "6rem",        // 96px
  32: "8rem",        // 128px
  40: "10rem",       // 160px
} as const;

export const layoutRhythm = {
  gutter: {
    mobile: "1rem",
    tablet: "2rem",
    desktop: "3.5rem",
    wide: "5rem",
  },
  containerMaxWidth: "1520px",
  sectionPaddingY: {
    compact: "clamp(3rem, 6vw, 5rem)",
    standard: "clamp(4.5rem, 9vw, 8rem)",
    hero: "clamp(6rem, 12vw, 11rem)",
  },
} as const;