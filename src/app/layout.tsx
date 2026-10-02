import type { Metadata, Viewport } from "next";
import { fontSans, fontMono } from "@/config/fonts";
import { FoldNavigation } from "@/components/navigation/FoldNavigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brivya Solutions | Digital Operating System for Growth",
  description:
    "We build digital products. We acquire customers. We automate growth. Engineered digital systems, performance marketing, and software infrastructure.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brivya.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06162C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} dark antialiased`}>
      <body className="min-h-screen bg-[#06162C] font-sans text-[#F4F7FC] selection:bg-[#1675F8]/30 selection:text-[#F4F7FC]">
        <FoldNavigation />
        <main className="relative pt-20">{children}</main>
      </body>
    </html>
  );
}