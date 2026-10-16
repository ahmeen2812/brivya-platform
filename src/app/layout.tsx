import type { Metadata, Viewport } from "next";
import { fontSans, fontMono } from "@/config/fonts";
import { Navbar } from "@/components/navigation/Navbar";
import { MotionReadyHandler } from "@/components/shared/MotionReadyHandler";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brivya Solutions | We build digital products. We acquire customers. We automate growth.",
  description:
    "Brivya Solutions is a digital product studio and customer acquisition agency engineering web platforms, Google Ads, Meta Ads, and automation pipelines.",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} antialiased`}
    >
      <head>
        {/* Synchronous FOUC Prevention Script:
            Executes BEFORE the browser constructs or paints <body>.
            Tags <html> with js-motion immediately so initial CSS applies on Frame 0. */}
        <script
          id="brivya-fouc-guard"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-motion');`,
          }}
        />

        {/* Scoped Pre-Paint Animation Concealment Rule:
            1. Scoped strictly to 'main .will-change-transform' so it NEVER affects the Navbar.
            2. Only active when JavaScript is enabled (html.js-motion).
            3. Respects reduced-motion preferences immediately.
            4. Automatically releases once .motion-ready is added after GSAP initializes. */}
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            html.js-motion:not(.motion-ready) main .will-change-transform {
              opacity: 0 !important;
              visibility: hidden !important;
            }
          }
        `}</style>

        {/* Google Fonts: Preconnect & Direct Client-Side Stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />

        {/* Global Font Variable Injections for Tailwind font-sans & font-mono */}
        <style>{`
          :root {
            --font-sans: 'Instrument Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-[#F4F7FC] font-sans text-[#06162C]">
        {/* Lifecycle synchronization handler */}
        <MotionReadyHandler />

        {/* Floating Navbar */}
        <Navbar />

        {/* Page Content Viewport */}
        <main className="relative pt-28 sm:pt-32">{children}</main>
      </body>
    </html>
  );
}