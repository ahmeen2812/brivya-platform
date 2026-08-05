import type { Metadata } from "next";
import { DOCS_ADDIN_CONTENT } from "@/config/services/googleAddons/docsAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: DOCS_ADDIN_CONTENT.seo.title,
  description: DOCS_ADDIN_CONTENT.seo.description,
};

export default function DocsAddinPage() {
  return <OfficeServicePageTemplate content={DOCS_ADDIN_CONTENT} />;
}