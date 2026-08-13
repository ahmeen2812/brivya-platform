import type { Metadata } from "next";
import { OUTLOOK_ADDIN_CONTENT } from "@/config/services/officeAddins/outlookAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: OUTLOOK_ADDIN_CONTENT.seo.title,
  description: OUTLOOK_ADDIN_CONTENT.seo.description,
};

export default function OutlookAddinPage() {
  return <OfficeServicePageTemplate content={OUTLOOK_ADDIN_CONTENT} />;
}