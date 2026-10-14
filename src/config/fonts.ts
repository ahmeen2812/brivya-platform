// import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";

// export const fontSans = Instrument_Sans({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   display: "swap",
//   weight: ["400", "500", "600", "700"],
// });

// export const fontMono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
//   display: "swap",
//   weight: ["400", "500", "600"],
// });


/**
 * BRIVYA SOLUTIONS — FONT TOPOLOGY
 * Decoupled font configuration removing build-time network requests to fonts.gstatic.com.
 * Fully preserves --font-sans and --font-mono for Tailwind CSS.
 */

export const fontSans = {
  variable: "font-sans-loaded",
};

export const fontMono = {
  variable: "font-mono-loaded",
};