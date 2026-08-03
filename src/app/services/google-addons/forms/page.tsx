import type { Metadata } from "next";
import { FORMS_ADDIN_CONTENT } from "@/config/services/googleAddons/formsAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: FORMS_ADDIN_CONTENT.seo.title,
  description: FORMS_ADDIN_CONTENT.seo.description,
};

export default function FormsAddinPage() {
  return <OfficeServicePageTemplate content={FORMS_ADDIN_CONTENT} />;
}