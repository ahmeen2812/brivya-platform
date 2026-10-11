"use client";

import React from "react";

interface BrandIconProps {
  className?: string;
}

/**
 * Official Google Multi-Color Logotype SVG
 * Proportions: Blue (#4285F4), Red (#EA4335), Yellow (#FBBC05), Green (#34A853)
 */
export const GoogleBrandLogo: React.FC<BrandIconProps> = ({ className = "h-5 sm:h-5.5 w-auto" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 74 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
      role="img"
    >
      <path
        d="M9.24 10.9v2.54h6.05c-.24 1.4-1.63 4.1-6.05 4.1-3.65 0-6.62-3.02-6.62-6.74s2.97-6.74 6.62-6.74c2.08 0 3.47.88 4.27 1.64l2.01-1.93C14.23 2.52 11.95 1.5 9.24 1.5 4.13 1.5 0 5.63 0 10.8s4.13 9.3 9.24 9.3c5.35 0 8.9-3.73 8.9-9.02 0-.61-.06-1.07-.15-1.54H9.24v.36z"
        fill="#4285F4"
      />
      <path
        d="M24.28 10.3c-2.9 0-5.18 2.22-5.18 5.25s2.28 5.25 5.18 5.25c2.9 0 5.18-2.22 5.18-5.25s-2.28-5.25-5.18-5.25zm0 8.42c-1.6 0-3-1.32-3-3.17 0-1.87 1.4-3.17 3-3.17s3 1.3 3 3.17c0 1.85-1.4 3.17-3 3.17z"
        fill="#EA4335"
      />
      <path
        d="M35.64 10.3c-2.9 0-5.18 2.22-5.18 5.25s2.28 5.25 5.18 5.25c2.9 0 5.18-2.22 5.18-5.25s-2.28-5.25-5.18-5.25zm0 8.42c-1.6 0-3-1.32-3-3.17 0-1.87 1.4-3.17 3-3.17s3 1.3 3 3.17c0 1.85-1.4 3.17-3 3.17z"
        fill="#FBBC05"
      />
      <path
        d="M46.72 10.3c-2.78 0-4.96 2.24-4.96 5.25 0 2.99 2.18 5.25 4.96 5.25 1.62 0 2.54-.7 3.16-1.43v1.14c0 1.95-1.08 3.01-2.82 3.01-1.45 0-2.35-1.03-2.7-1.89l-2.24.93c.65 1.54 2.37 2.92 4.94 2.92 2.86 0 5.28-1.68 5.28-5.46V10.6h-2.42v1.07c-.64-.78-1.64-1.37-3.2-1.37zm.25 8.42c-1.57 0-2.86-1.3-2.86-3.17 0-1.89 1.29-3.17 2.86-3.17 1.54 0 2.76 1.3 2.76 3.19 0 1.87-1.22 3.15-2.76 3.15z"
        fill="#4285F4"
      />
      <path d="M54.12 1.9h2.54v18.52h-2.54V1.9z" fill="#34A853" />
      <path
        d="M62.67 17.06c-1.28 0-2.18-.58-2.77-1.74l7.65-3.14-.26-.64c-.48-1.3-1.95-3.64-4.93-3.64-2.95 0-5.41 2.29-5.41 5.25 0 2.93 2.44 5.25 5.72 5.25 2.65 0 4.18-1.6 4.81-2.54l-1.98-1.32c-.65.95-1.54 1.52-2.83 1.52zm-.19-5.07c.97 0 1.8.49 2.08 1.18l-4.98 2.06c0-2.31 1.67-3.24 2.9-3.24z"
        fill="#EA4335"
      />
    </svg>
  );
};

/**
 * Google 5 Gold Stars Rating Row
 * Color: Official Google Review Gold (#FBBC04)
 */
export const GoogleFiveStars: React.FC = () => {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars on Google">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#FBBC04]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
};

/**
 * Official Trustpilot Logotype SVG
 * Green star (#00B67A) + Charcoal wordmark (#1A1A1A)
 */
export const TrustpilotBrandLogo: React.FC<BrandIconProps> = ({ className = "h-5 sm:h-5.5 w-auto" }) => {
  return (
    <div className="flex items-center gap-1.5" aria-label="Trustpilot" role="img">
      {/* Trustpilot 4-point Star Glyph */}
      <svg className="h-5 w-5 sm:h-5.5 sm:w-5.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1.5l3.2 6.5 7.2 1.1-5.2 5.1 1.2 7.2-6.4-3.4-6.4 3.4 1.2-7.2-5.2-5.1 7.2-1.1L12 1.5z"
          fill="#00B67A"
        />
        <path
          d="M16.3 14.3l-4.3-2.3v-7.8l2.3 4.6 5 .7-3 4.8z"
          fill="#005128"
          fillOpacity="0.35"
        />
      </svg>

      {/* Trustpilot Wordmark in high-legibility Brivya typography */}
      <span className="font-sans text-[15px] sm:text-[16px] font-extrabold tracking-[-0.03em] text-[#1A1A1A] leading-none">
        Trustpilot
      </span>
    </div>
  );
};

/**
 * Official Trustpilot 5 Green Star Tiles
 * Signature Trustpilot rating presentation: 5 green square tiles with white star silhouettes
 */
export const TrustpilotFiveStarTiles: React.FC = () => {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars on Trustpilot">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-[2px] bg-[#00B67A] p-0.5"
        >
          <svg className="h-full w-full text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        </div>
      ))}
    </div>
  );
};