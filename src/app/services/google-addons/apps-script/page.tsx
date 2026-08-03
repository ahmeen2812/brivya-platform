import type { Metadata } from "next";
import { APPS_SCRIPT_ADDIN_CONTENT } from "@/config/services/googleAddons/appsScriptAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: APPS_SCRIPT_ADDIN_CONTENT.seo.title,
  description: APPS_SCRIPT_ADDIN_CONTENT.seo.description,
};

export default function AppsScriptAddinPage() {
  return <OfficeServicePageTemplate content={APPS_SCRIPT_ADDIN_CONTENT} />;
}