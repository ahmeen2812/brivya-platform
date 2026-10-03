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

export default function HomePage() {
  return (
    <div className="min-h-[80vh] w-full px-4 sm:px-8 max-w-[1360px] mx-auto flex flex-col items-center justify-center text-center">
      {/* Ready for next step */}
    </div>
  );
}