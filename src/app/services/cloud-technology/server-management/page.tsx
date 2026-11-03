import type { Metadata } from "next";
import { SERVER_MANAGEMENT_CONTENT } from "@/config/services/cloudSolutions/serverManagement";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: SERVER_MANAGEMENT_CONTENT.seo.title,
  description: SERVER_MANAGEMENT_CONTENT.seo.description,
};

export default function ServerManagementPage() {
  return <ServicePageTemplate content={SERVER_MANAGEMENT_CONTENT} />;
}