/**
 * BRIVYA SOLUTIONS — PROJECT INQUIRY CONTENT MANIFEST
 * Editorial copy, service categories, form options, and contact information.
 */

import { InquiryPageContent } from "./types";

export const INQUIRY_CONTENT: InquiryPageContent = {
  heroIntro: {
    eyebrow: "START A CONVERSATION",
    headingPrimary: "Let's talk about",
    headingAccent: "what you're building.",
    description:
      "Tell us what you have in mind, whether it's a new digital product, a marketing challenge, or a system that needs improvement. We'll help you explore the right way forward.",
    imagePath: "/images/contact-illustration.png",
    imageAlt: "Brivya Solutions architectural project inquiry illustration",
  },
  form: {
    heading: "Tell us about your project",
    supportingLine: "A few details will help us understand what you need.",
    submitButtonText: "Send Project Inquiry",
    services: [
      { id: "web-dev", label: "Web Development & Custom Software" },
      { id: "google-ads", label: "Google Ads & Performance Marketing" },
      { id: "meta-ads", label: "Meta Ads & Social Growth" },
      { id: "ai-auto", label: "AI & Business Automation" },
      { id: "cloud-tech", label: "Cloud & Technology Solutions" },
      { id: "office-addins", label: "Office Add-in Development" },
      { id: "google-addons", label: "Google Add-ons Development" },
      { id: "not-sure", label: "Not Sure Yet" },
    ],
    budgetRanges: [
      { id: "budget-tier-1", label: "< $5,000" },
      { id: "budget-tier-2", label: "$5,000 – $15,000" },
      { id: "budget-tier-3", label: "$15,000 – $30,000" },
      { id: "budget-tier-4", label: "$30,000+" },
      { id: "budget-flexible", label: "Flexible / TBD" },
    ],
    timelines: [
      { id: "time-urgent", label: "< 1 Month" },
      { id: "time-standard", label: "1 – 3 Months" },
      { id: "time-extended", label: "3 – 6 Months" },
      { id: "time-flexible", label: "Flexible" },
    ],
  },
  directContact: {
    heading: "Prefer to reach us directly?",
    info: {
      email: "hello@brivya.com", // Ready to update with real business email
      phone: "+971 4 000 0000",   // Ready to update with real phone
      responseTimeNote: "Inquiries reviewed directly by our technical partners within 24 hours.",
    },
  },
  locationAvailability: {
    heading: "Where to find us",
    info: {
      operatingLocation: "Global Remote Studio · Engineering Hubs in Dubai & London",
      workingHours: "Monday – Friday: 9:00 AM – 6:00 PM UTC+4",
      timeZone: "Gulf Standard Time (GST / UTC+4)",
      engagementModel: "Serving international enterprise and growth clients worldwide.",
    },
  },
} as const;