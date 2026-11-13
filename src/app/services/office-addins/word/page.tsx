import type { Metadata } from "next";
import { WORD_ADDIN_CONTENT } from "@/config/services/officeAddins/wordAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: WORD_ADDIN_CONTENT.seo.title,
  description: WORD_ADDIN_CONTENT.seo.description,
};

export default function WordAddinPage() {
  return <OfficeServicePageTemplate content={WORD_ADDIN_CONTENT} />;
}