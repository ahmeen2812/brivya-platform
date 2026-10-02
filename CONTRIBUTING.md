# Brivya Solutions Engineering Protocol

1. Architectural Separation: Keep 3D/canvas components, animation engines, and domain state decoupled.
2. Styling Discipline: Strictly utilize design tokens. Direct raw hex codes outside the token matrix are prohibited.
3. Performance Guardrails: WebGL components must implement accessible HTML/SVG fallbacks for low-power or non-WebGL devices.
