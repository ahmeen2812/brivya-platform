import type { Metadata } from "next";
import { WORKFLOW_INTEGRATION_CONTENT } from "@/config/services/aiAutomation/workflowIntegration";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: WORKFLOW_INTEGRATION_CONTENT.seo.title,
  description: WORKFLOW_INTEGRATION_CONTENT.seo.description,
};

export default function WorkflowIntegrationPage() {
  return <ServicePageTemplate content={WORKFLOW_INTEGRATION_CONTENT} />;
}