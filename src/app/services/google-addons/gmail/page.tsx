import type { Metadata } from "next";
import { GMAIL_ADDIN_CONTENT } from "@/config/services/googleAddons/gmailAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: GMAIL_ADDIN_CONTENT.seo.title,
  description: GMAIL_ADDIN_CONTENT.seo.description,
};

export default function GmailAddinPage() {
  return <OfficeServicePageTemplate content={GMAIL_ADDIN_CONTENT} />;
}