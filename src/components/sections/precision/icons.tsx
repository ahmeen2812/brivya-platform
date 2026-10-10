"use client";

import * as React from "react";
import { MetricIconKey } from "./types";

interface IconProps { className?: string; }

export const IconCalendar: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="8" cy="14" r="1" fill="currentColor" /><circle cx="12" cy="14" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" /><circle cx="8" cy="18" r="1" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" /><circle cx="16" cy="18" r="1" fill="currentColor" />
  </svg>
);

export const IconProjectsStack: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);

export const IconClientsUsers: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const IconCampaignsTarget: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const IconSatisfactionShield: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);

export const IconExpandDiagonal: React.FC<{ isExpanded: boolean; className?: string }> = ({
  isExpanded,
  className = "h-4 w-4",
}) => (
  <svg
    className={`${className} transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
  >
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>
);

export const MetricIconResolver: React.FC<{ iconKey: MetricIconKey; className?: string }> = ({
  iconKey,
  className = "h-6 w-6",
}) => {
  switch (iconKey) {
    case "projects": return <IconProjectsStack className={className} />;
    case "experience": return <IconCalendar className={className} />;
    case "clients": return <IconClientsUsers className={className} />;
    case "campaigns": return <IconCampaignsTarget className={className} />;
    case "satisfaction": return <IconSatisfactionShield className={className} />;
    default: return <IconProjectsStack className={className} />;
  }
};