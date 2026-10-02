export const rawColors = {
  ink: "#06162C",
  navy: "#07366D",
  cobalt: "#0A5FD7",
  signalBlue: "#1675F8",
  ice: "#F4F7FC",
  steel: "#8998AD",
  champagne: "#C7A76B",
  black: "#02070E",
  white: "#FFFFFF",
} as const;

export const colors = {
  brand: {
    ink: rawColors.ink,
    navy: rawColors.navy,
    cobalt: rawColors.cobalt,
    signalBlue: rawColors.signalBlue,
  },
  neutral: {
    ice: rawColors.ice,
    steel: rawColors.steel,
    white: rawColors.white,
    black: rawColors.black,
  },
  accent: {
    champagne: rawColors.champagne,
  },
  surface: {
    base: rawColors.ink,
    layer1: "#0A1D36",
    layer2: "#0D2544",
    structure: rawColors.navy,
    elevated: "#092548",
    active: "rgba(22, 117, 248, 0.08)",
  },
  border: {
    hairline: "rgba(137, 152, 173, 0.15)",
    subtle: "rgba(137, 152, 173, 0.25)",
    structural: "rgba(7, 54, 109, 0.8)",
    active: rawColors.signalBlue,
    accent: "rgba(199, 167, 107, 0.6)",
  },
  text: {
    primary: rawColors.ice,
    secondary: rawColors.steel,
    muted: "rgba(137, 152, 173, 0.7)",
    accent: rawColors.champagne,
    interactive: rawColors.signalBlue,
  },
  state: {
    success: "#10B981",
    warning: rawColors.champagne,
    error: "#EF4444",
    info: rawColors.signalBlue,
  },
} as const;

export type ColorTokens = typeof colors;