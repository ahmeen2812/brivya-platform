// "use client";

// import * as React from "react";
// import { ServicePillar, ServiceIconType } from "@/types/megaMenu";

// interface MegaMenuPillarListProps {
//   pillars: readonly ServicePillar[];
//   activePillarId: string | null;
//   onHoverPillar: (pillarId: string) => void;
//   onClickPillar: (pillarId: string) => void;
// }

// export const MegaMenuPillarList: React.FC<MegaMenuPillarListProps> = ({
//   pillars,
//   activePillarId,
//   onHoverPillar,
//   onClickPillar,
// }) => {
//   // Official, high-contrast, recognizable brand iconography
//   const renderOfficialBrandIcon = (type: ServiceIconType) => {
//     switch (type) {
//       case "google":
//         return (
//           // Official Google Ads 4-Color Geometry
//           <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M3.5 15.5L8.5 6.5C9.2 5.2 10.8 4.7 12.1 5.4C13.4 6.1 13.9 7.7 13.2 9L8.2 18C7.5 19.3 5.9 19.8 4.6 19.1C3.3 18.4 2.8 16.8 3.5 15.5Z"
//               fill="#FBBC04"
//             />
//             <path
//               d="M13.2 9L18.2 18C18.9 19.3 20.5 19.8 21.8 19.1C23.1 18.4 23.6 16.8 22.9 15.5L17.9 6.5C17.2 5.2 15.6 4.7 14.3 5.4C13 6.1 12.5 7.7 13.2 9Z"
//               fill="#4285F4"
//             />
//             <circle cx="5.8" cy="17.3" r="2.8" fill="#34A853" />
//           </svg>
//         );

//       case "meta":
//         return (
//           // Official Meta Blue Infinity Mark
//           <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M16.9 4C14.7 4 13.1 5.3 12 6.8C10.9 5.3 9.3 4 7.1 4C3.2 4 0.5 7.2 0.5 11.5C0.5 16.2 4.1 20 8.2 20C10.7 20 12.2 18.6 13 17.5C13.8 18.6 15.3 20 17.8 20C21.9 20 25.5 16.2 25.5 11.5C25.5 7.2 22.8 4 16.9 4ZM8.1 17C5.4 17 3.3 14.4 3.3 11.5C3.3 8.6 5.3 6.8 7.7 6.8C9.6 6.8 11.1 8.2 12.1 10.3C11.1 12.8 9.8 17 8.1 17ZM17.9 17C16.2 17 14.9 12.8 13.9 10.3C14.9 8.2 16.4 6.8 18.3 6.8C20.7 6.8 22.7 8.6 22.7 11.5C22.7 14.4 20.6 17 17.9 17Z"
//               fill="#0668E1"
//             />
//           </svg>
//         );

//       case "code":
//         return (
//           // Official React / TypeScript Cyan & Deep Slate Code Glyph
//           <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F172A] text-[#38BDF8] shadow-xs">
//             <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
//             </svg>
//           </div>
//         );

//       case "ai":
//         return (
//           // Electric Violet Neural Processor Emblem
//           <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] text-white shadow-xs">
//             <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//         );

//       case "cloud":
//         return (
//           // Cloudflare & AWS Orange/Cyan Edge Cloud Symbol
//           <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#F97316] text-white shadow-xs">
//             <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
//             </svg>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       role="tablist"
//       aria-label="Core Services"
//       className="flex w-full flex-col gap-1 p-3 sm:p-3.5"
//     >
//       <div className="mb-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#8998AD]">
//         Capabilities
//       </div>

//       {pillars.map((pillar) => {
//         const isSelected = pillar.id === activePillarId;

//         return (
//           <button
//             key={pillar.id}
//             type="button"
//             role="tab"
//             aria-selected={isSelected}
//             aria-controls={`subpanel-${pillar.id}`}
//             id={`pillartab-${pillar.id}`}
//             onMouseEnter={() => onHoverPillar(pillar.id)}
//             onClick={() => onClickPillar(pillar.id)}
//             className={`group relative flex items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] ${
//               isSelected
//                 ? "bg-slate-100/90 text-[#06162C] font-bold shadow-xs"
//                 : "text-[#475569] hover:bg-slate-50/80 hover:text-[#06162C]"
//             }`}
//           >
//             {/* Left Content */}
//             <div className="flex items-center gap-3">
//               <div className="flex h-6 w-6 shrink-0 items-center justify-center">
//                 {renderOfficialBrandIcon(pillar.iconType)}
//               </div>

//               <div className="flex flex-col">
//                 <span className="font-sans text-[13.5px] tracking-tight leading-snug">
//                   {pillar.title}
//                 </span>
//                 <span className="text-[11px] font-normal text-[#8998AD]">
//                   {pillar.subtitle}
//                 </span>
//               </div>
//             </div>

//             {/* Trailing Expansion Indicator */}
//             <div className="ml-2 flex shrink-0 items-center">
//               <svg
//                 className={`h-4 w-4 transition-all duration-200 ${
//                   isSelected
//                     ? "translate-x-0.5 text-[#1675F8] opacity-100"
//                     : "text-[#CBD5E1] opacity-40 group-hover:translate-x-0.5 group-hover:opacity-100"
//                 }`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//               </svg>
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );
// };


"use client";

import * as React from "react";
import { ServicePillar, ServiceIconType } from "@/types/megaMenu";

interface MegaMenuPillarListProps {
  pillars: readonly ServicePillar[];
  activePillarId: string | null;
  onHoverPillar: (pillarId: string) => void;
  onClickPillar: (pillarId: string) => void;
}

export const MegaMenuPillarList: React.FC<MegaMenuPillarListProps> = ({
  pillars,
  activePillarId,
  onHoverPillar,
  onClickPillar,
}) => {
  // Official, high-contrast brand icons
  const renderOfficialBrandIcon = (type: ServiceIconType) => {
    switch (type) {
      case "google":
        return (
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path
              d="M3.5 15.5L8.5 6.5C9.2 5.2 10.8 4.7 12.1 5.4C13.4 6.1 13.9 7.7 13.2 9L8.2 18C7.5 19.3 5.9 19.8 4.6 19.1C3.3 18.4 2.8 16.8 3.5 15.5Z"
              fill="#FBBC04"
            />
            <path
              d="M13.2 9L18.2 18C18.9 19.3 20.5 19.8 21.8 19.1C23.1 18.4 23.6 16.8 22.9 15.5L17.9 6.5C17.2 5.2 15.6 4.7 14.3 5.4C13 6.1 12.5 7.7 13.2 9Z"
              fill="#4285F4"
            />
            <circle cx="5.8" cy="17.3" r="2.8" fill="#34A853" />
          </svg>
        );

      case "meta":
        return (
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path
              d="M16.9 4C14.7 4 13.1 5.3 12 6.8C10.9 5.3 9.3 4 7.1 4C3.2 4 0.5 7.2 0.5 11.5C0.5 16.2 4.1 20 8.2 20C10.7 20 12.2 18.6 13 17.5C13.8 18.6 15.3 20 17.8 20C21.9 20 25.5 16.2 25.5 11.5C25.5 7.2 22.8 4 16.9 4ZM8.1 17C5.4 17 3.3 14.4 3.3 11.5C3.3 8.6 5.3 6.8 7.7 6.8C9.6 6.8 11.1 8.2 12.1 10.3C11.1 12.8 9.8 17 8.1 17ZM17.9 17C16.2 17 14.9 12.8 13.9 10.3C14.9 8.2 16.4 6.8 18.3 6.8C20.7 6.8 22.7 8.6 22.7 11.5C22.7 14.4 20.6 17 17.9 17Z"
              fill="#0668E1"
            />
          </svg>
        );

      case "code":
        return (
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F172A] text-[#38BDF8] shadow-xs">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
            </svg>
          </div>
        );

      case "ai":
        return (
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] text-white shadow-xs">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        );

      case "cloud":
        return (
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#F97316] text-white shadow-xs">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Core Services"
      className="flex w-full flex-col gap-1 p-3 sm:p-3.5"
    >
      <div className="mb-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#8998AD]">
        Capabilities
      </div>

      {pillars.map((pillar) => {
        const isSelected = pillar.id === activePillarId;

        return (
          <button
            key={pillar.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`subpanel-${pillar.id}`}
            id={`pillartab-${pillar.id}`}
            onMouseEnter={() => onHoverPillar(pillar.id)}
            onClick={() => onClickPillar(pillar.id)}
            className={`group relative flex items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] ${
              isSelected
                ? "bg-slate-100/90 text-[#06162C] font-bold shadow-xs"
                : "text-[#475569] hover:bg-slate-50/80 hover:text-[#06162C]"
            }`}
          >
            {/* Left Content */}
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                {renderOfficialBrandIcon(pillar.iconType)}
              </div>

              <div className="flex flex-col">
                <span className="font-sans text-[13.5px] tracking-tight leading-snug">
                  {pillar.title}
                </span>
                <span className="text-[11px] font-normal text-[#8998AD]">
                  {pillar.subtitle}
                </span>
              </div>
            </div>

            {/* Trailing Expansion Indicator */}
            <div className="ml-2 flex shrink-0 items-center">
              <svg
                className={`h-4 w-4 transition-all duration-200 ${
                  isSelected
                    ? "translate-x-0.5 text-[#1675F8] opacity-100"
                    : "text-[#CBD5E1] opacity-40 group-hover:translate-x-0.5 group-hover:opacity-100"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        );
      })}
    </div>
  );
};