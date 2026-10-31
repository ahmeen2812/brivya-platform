import type { Metadata } from "next";
import { WHATSAPP_EMAIL_AUTOMATION_CONTENT } from "@/config/services/aiAutomation/whatsappEmailAutomation";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: WHATSAPP_EMAIL_AUTOMATION_CONTENT.seo.title,
  description: WHATSAPP_EMAIL_AUTOMATION_CONTENT.seo.description,
};

export default function WhatsappEmailAutomationPage() {
  return <ServicePageTemplate content={WHATSAPP_EMAIL_AUTOMATION_CONTENT} />;
}