import type { Metadata } from "next";
import { DRIVE_ADDIN_CONTENT } from "@/config/services/googleAddons/driveAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: DRIVE_ADDIN_CONTENT.seo.title,
  description: DRIVE_ADDIN_CONTENT.seo.description,
};

export default function DriveAddinPage() {
  return <OfficeServicePageTemplate content={DRIVE_ADDIN_CONTENT} />;
}