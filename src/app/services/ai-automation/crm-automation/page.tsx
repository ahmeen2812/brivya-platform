import type { Metadata } from "next";
import { CRM_AUTOMATION_CONTENT } from "@/config/services/aiAutomation/crmAutomation";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: CRM_AUTOMATION_CONTENT.seo.title,
  description: CRM_AUTOMATION_CONTENT.seo.description,
};

export default function CrmAutomationPage() {
  return <ServicePageTemplate content={CRM_AUTOMATION_CONTENT} />;
}