import type { Metadata } from "next";
import { POWERPOINT_ADDIN_CONTENT } from "@/config/services/officeAddins/powerpointAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: POWERPOINT_ADDIN_CONTENT.seo.title,
  description: POWERPOINT_ADDIN_CONTENT.seo.description,
};

export default function PowerpointAddinPage() {
  return <OfficeServicePageTemplate content={POWERPOINT_ADDIN_CONTENT} />;
}