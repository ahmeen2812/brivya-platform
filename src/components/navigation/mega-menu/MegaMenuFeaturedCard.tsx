// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { MEGA_MENU_FEATURED_CARD } from "@/config/servicesMegaMenu";

// interface MegaMenuFeaturedCardProps {
//   onNavigate: () => void;
//   cardRef?: React.RefObject<HTMLDivElement | null>;
// }

// export const MegaMenuFeaturedCard: React.FC<MegaMenuFeaturedCardProps> = ({
//   onNavigate,
//   cardRef,
// }) => {
//   return (
//     <div
//       ref={cardRef}
//       className="flex h-full w-full flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5 shadow-sm"
//     >
//       <div className="flex flex-col">
//         {/* Availability Status Badge */}
//         <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#06162C] border border-slate-200/80 w-fit shadow-xs">
//           <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
//           <span>{MEGA_MENU_FEATURED_CARD.tag}</span>
//         </div>

//         {/* Card Title & Description */}
//         <h4 className="mt-3 font-sans text-[13.5px] font-bold leading-snug tracking-tight text-[#06162C]">
//           {MEGA_MENU_FEATURED_CARD.title}
//         </h4>

//         <p className="mt-1.5 font-sans text-[11px] leading-relaxed text-[#64748B]">
//           {MEGA_MENU_FEATURED_CARD.description}
//         </p>
//       </div>

//       <div className="mt-4 flex flex-col gap-2.5">
//         {/* Metric Label */}
//         <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 border border-slate-200/60 font-sans text-[11px]">
//           <span className="text-[#64748B]">{MEGA_MENU_FEATURED_CARD.metricLabel}</span>
//           <span className="font-bold text-[#06162C]">
//             {MEGA_MENU_FEATURED_CARD.metricHighlight}
//           </span>
//         </div>

//         {/* Direct Action Link */}
//         <Link
//           href={MEGA_MENU_FEATURED_CARD.buttonHref}
//           onClick={onNavigate}
//           className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#06162C] px-3.5 py-2.5 font-sans text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#07366D] active:scale-[0.98]"
//         >
//           <span>{MEGA_MENU_FEATURED_CARD.buttonText}</span>
//           <svg
//             className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//           </svg>
//         </Link>
//       </div>
//     </div>
//   );
// };