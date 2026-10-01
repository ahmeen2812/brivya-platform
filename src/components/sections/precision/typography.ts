/**
 * BRIVYA SOLUTIONS — PRECISION IN PRACTICE TYPOGRAPHY TOKENS
 * Enforces editorial rhythm, optical line-heights, and fixed-width
 * monospace tabular alignments without scattering raw Tailwind classes.
 */

export const precisionTypography = {
  // Eyebrow / Kicker Tag
  eyebrow:
    "font-mono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#0A5FD7] select-none",

  // Telemetry Index Indicator
  telemetryCode:
    "font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] text-[#8998AD] select-none",

  // Section Display Headline (3-line editorial cadence matching hero)
  headline:
    "font-sans text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-extrabold tracking-[-0.035em] leading-[1.08] text-[#06162C]",

  // Headline Accent Color
  headlineAccent: "text-[#0A5FD7]",

  // Executive Supporting Thesis
  thesis:
    "font-sans text-[15px] sm:text-[16.5px] leading-relaxed text-[#475569] font-normal tracking-[-0.01em]",

  // Telemetry Metric Numerals (Fixed-width monospace with tight tabular alignment)
  metricValue:
    "font-mono text-[32px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-[#06162C] tabular-nums leading-none",

  // Metric Unit Subscript
  metricUnit:
    "font-mono text-[11px] sm:text-[12px] font-semibold text-[#0A5FD7] tracking-wider uppercase ml-1.5",

  // Metric Label
  metricLabel:
    "font-sans text-[13px] sm:text-[14px] font-bold text-[#06162C] tracking-tight leading-snug",

  // Metric Supporting Technical Standard
  metricBenchmark:
    "font-sans text-[11px] sm:text-[11.5px] leading-normal text-[#8998AD] font-normal",

  // Verification Badge
  verificationBadge:
    "font-mono text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border border-emerald-200/80 bg-emerald-50 text-[#059669]",

  // Deployment Ledger Headers
  ledgerHeader:
    "font-mono text-[10px] uppercase tracking-[0.18em] text-[#8998AD] font-semibold select-none",

  // Ledger Client Sector
  ledgerSector:
    "font-sans text-[13.5px] font-bold text-[#06162C] tracking-tight group-hover:text-[#0A5FD7] transition-colors",

  // Ledger Deliverable Description
  ledgerDeliverable:
    "font-sans text-[12px] text-[#475569] leading-snug",

  // Ledger Architecture Spec
  ledgerArchitecture:
    "font-mono text-[11px] text-[#8998AD] tracking-tight",

  // Ledger Outcome Accent
  ledgerOutcome:
    "font-mono text-[11.5px] font-bold text-[#059669] tracking-tight",
} as const;

export type PrecisionTypography = typeof precisionTypography;