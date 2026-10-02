# Brivya Design System: Architecture & Usage Manual

## 1. Core Principles
* **Engineered Precision:** Physical hairline borders (1px) and chamfered geometries instead of uniform 20px SaaS card radii.
* **Controlled Chromatic Hierarchy:** 85% solid substrates (Ink #06162C, Navy #07366D), high-contrast technical type (Ice #F4F7FC), telemetry (Steel #8998AD), and maximum 3–5% Champagne (#C7A76B) for high-value metrics.
* **Dual-Axis Typography:** Instrument Sans for high-authority editorial headlines; IBM Plex Mono with tabular numbers for coordinates, indices, and systems data.

## 2. Forbidden Patterns (Strictly Enforced)
* No purple-blue linear gradients on cards or backgrounds.
* No floating glowing orbs or mesh blur canvases.
* No generic glassmorphism panels with heavy backdrop filters.
* No artificial AI badges or generic robot/brain icons.

## 3. Kinetic Standards
* All GSAP transitions and layout morphs must utilize the `easeBrivya` curve: `[0.16, 1, 0.3, 1]`.
* System interactions resolve within 180ms; structural planes unfold within 600ms–1100ms.