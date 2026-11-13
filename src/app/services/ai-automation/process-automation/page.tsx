import type { Metadata } from "next";
import { PROCESS_AUTOMATION_CONTENT } from "@/config/services/aiAutomation/processAutomation";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: PROCESS_AUTOMATION_CONTENT.seo.title,
  description: PROCESS_AUTOMATION_CONTENT.seo.description,
};

export default function ProcessAutomationPage() {
  return <ServicePageTemplate content={PROCESS_AUTOMATION_CONTENT} />;
}