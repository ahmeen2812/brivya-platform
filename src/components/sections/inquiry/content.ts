/**
 * BRIVYA SOLUTIONS — PROJECT INQUIRY CONTENT MANIFEST
 * Authoritative editorial copy and form options.
 */

import { InquiryPageContent } from "./types";

export const INQUIRY_CONTENT: InquiryPageContent = {
  editorial: {
    heading: "Let's discuss the work ahead.",
    paragraph1:
      "Whether you're planning a new website, improving your advertising, or tackling a technical challenge, we'd like to hear what you have in mind. Tell us a little about your project, your goals, or the problem you're trying to solve. We'll take it from there.",
    paragraph2: "Have a question instead? You're welcome to reach out.",
    imagePath: "/images/contact-illustration.png",
    imageAlt: "Brivya Solutions project inquiry technical illustration",
  },
  form: {
    heading: "Tell us about your project",
    submitButtonText: "Send Project Inquiry",
    bookCallButtonText: "Book a Call",
    projectTypes: [
      { id: "web-dev", label: "Web Development & Custom Software" },
      { id: "google-ads", label: "Google Ads & Performance Marketing" },
      { id: "meta-ads", label: "Meta Ads & Social Growth" },
      { id: "ai-auto", label: "AI & Business Automation" },
      { id: "cloud-tech", label: "Cloud & Technology Solutions" },
      { id: "office-addins", label: "Office Add-in Development" },
      { id: "google-addons", label: "Google Add-ons Development" },
      { id: "not-sure", label: "Not Sure Yet" },
    ],
  },
  directContactHeading: "Prefer to reach us directly?",
  locationHeading: "Where to find us",
} as const;