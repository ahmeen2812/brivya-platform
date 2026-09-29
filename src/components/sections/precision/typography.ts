/**
 * BRIVYA SOLUTIONS — METRICS SECTION TYPOGRAPHY TOKENS
 * Enforces editorial rhythm, optical sizing, and high-contrast hierarchy.
 */

export const metricsTypography = {
  // Eyebrow with blue line
  eyebrow:
    "font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#0A5FD7] select-none",

  // 2-Line Display Headline
  headingLine1:
    "font-sans text-[32px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.1] text-[#06162C]",

  // Headline Accent Line
  headingAccent:
    "font-sans text-[32px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.1] text-[#0A5FD7]",

  // Supporting Thesis Paragraph
  paragraph:
    "font-sans text-[15px] sm:text-[17px] leading-relaxed text-[#475569] font-normal tracking-[-0.01em]",

  // Numeric Metric Value (Prominent, clean, high-contrast)
  metricValue:
    "font-sans text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-tight text-[#06162C] leading-none select-none",

  // Metric Column Label
  metricLabel:
    "font-sans text-[14px] sm:text-[15px] font-bold text-[#06162C] tracking-tight leading-snug",

  // Metric Sublabel
  metricSublabel:
    "font-sans text-[11.5px] sm:text-[12px] text-[#8998AD] font-normal leading-normal",

  // Footer Statement
  footerText:
    "font-sans text-[12px] sm:text-[13.5px] text-[#475569] font-medium tracking-tight select-none",
} as const;