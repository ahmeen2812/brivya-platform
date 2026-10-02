export const typography = {
  fontFamilies: {
    sans: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "var(--font-mono), SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  sizes: {
    display: {
      fontSize: "clamp(2.75rem, 5vw + 1rem, 5.5rem)",
      lineHeight: "1.02",
      letterSpacing: "-0.035em",
      fontWeight: "700",
    },
    h1: {
      fontSize: "clamp(2.25rem, 3.5vw + 0.5rem, 4rem)",
      lineHeight: "1.08",
      letterSpacing: "-0.03em",
      fontWeight: "700",
    },
    h2: {
      fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem)",
      lineHeight: "1.15",
      letterSpacing: "-0.025em",
      fontWeight: "600",
    },
    h3: {
      fontSize: "clamp(1.35rem, 1.8vw + 0.3rem, 1.85rem)",
      lineHeight: "1.25",
      letterSpacing: "-0.02em",
      fontWeight: "600",
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: "1.4",
      letterSpacing: "-0.015em",
      fontWeight: "600",
    },
    bodyLarge: {
      fontSize: "1.125rem",
      lineHeight: "1.65",
      letterSpacing: "-0.01em",
      fontWeight: "400",
    },
    bodyDefault: {
      fontSize: "1rem",
      lineHeight: "1.6",
      letterSpacing: "-0.005em",
      fontWeight: "400",
    },
    bodySmall: {
      fontSize: "0.875rem",
      lineHeight: "1.55",
      letterSpacing: "0",
      fontWeight: "400",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: "1.5",
      letterSpacing: "0.02em",
      fontWeight: "500",
    },
    telemetry: {
      fontSize: "0.8125rem",
      lineHeight: "1.4",
      letterSpacing: "0.06em",
      fontWeight: "500",
      textTransform: "uppercase",
    },
  },
} as const;

export type TypographyTokens = typeof typography;