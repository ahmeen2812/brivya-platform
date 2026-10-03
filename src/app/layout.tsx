import type { Metadata, Viewport } from "next";
import { fontSans, fontMono } from "@/config/fonts";
import { Navbar } from "@/components/navigation/Navbar";
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
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#F4F7FC] font-sans text-[#06162C]">
        {/* Floating Navbar */}
        <Navbar />

        {/* Page Content Viewport */}
        <main className="relative pt-28 sm:pt-32">{children}</main>
      </body>
    </html>
  );
}