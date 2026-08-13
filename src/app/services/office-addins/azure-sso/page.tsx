import type { Metadata } from "next";
import { AZURE_SSO_CONTENT } from "@/config/services/officeAddins/azureSso";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: AZURE_SSO_CONTENT.seo.title,
  description: AZURE_SSO_CONTENT.seo.description,
};

export default function AzureSsoPage() {
  return <OfficeServicePageTemplate content={AZURE_SSO_CONTENT} />;
}