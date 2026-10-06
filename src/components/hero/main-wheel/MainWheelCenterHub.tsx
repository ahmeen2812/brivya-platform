// "use client";

// import * as React from "react";
// import gsap from "gsap";
// import { MainWheelPhaseConfig } from "@/types/heroMainWheel";

// interface MainWheelCenterHubProps {
//   currentPhase: MainWheelPhaseConfig;
//   cx: number;
//   cy: number;
//   radius: number;
// }

// export const MainWheelCenterHub: React.FC<MainWheelCenterHubProps> = ({
//   currentPhase,
//   cx,
//   cy,
//   radius,
// }) => {
//   const iconContainerRef = React.useRef<HTMLDivElement | null>(null);
//   const textContainerRef = React.useRef<HTMLDivElement | null>(null);
//   const prevPhaseIdRef = React.useRef<string>(currentPhase.id);

//   // 650ms Continuous Kinetic Morph Timeline
//   React.useEffect(() => {
//     if (prevPhaseIdRef.current === currentPhase.id) return;
//     prevPhaseIdRef.current = currentPhase.id;

//     const iconEl = iconContainerRef.current;
//     const textEl = textContainerRef.current;

//     if (!iconEl || !textEl) return;

//     gsap.killTweensOf([iconEl, textEl]);

//     const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

//     // 1. Vector Icon Morphs: scales down with a subtle twist, then springs forward into the new shape
//     tl.to(iconEl, {
//       scale: 0.55,
//       rotate: -25,
//       opacity: 0,
//       duration: 0.22,
//       onComplete: () => {
//         gsap.set(iconEl, { rotate: 25 });
//       },
//     }).to(iconEl, {
//       scale: 1,
//       rotate: 0,
//       opacity: 1,
//       duration: 0.43,
//       ease: "back.out(1.6)",
//     });

//     // 2. Text executes a synchronized split slide-roll (no blank gap)
//     tl.fromTo(
//       textEl,
//       { y: 8, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
//       0.18,
//     );
//   }, [currentPhase.id]);

//   // Vector Morphing Render Engine
//   const renderMorphingVectorGlyph = (morphType: "code" | "cloud" | "ai") => {
//     switch (morphType) {
//       case "code":
//         return (
//           // Web Dev: Code Brackets & Core Slash
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#0A5FD7] border border-sky-100 shadow-xs">
//             <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
//             </svg>
//           </div>
//         );

//       case "cloud":
//         return (
//           // Cloud: Smooth Multi-Lobed Infrastructure Cloud
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#D97706] border border-amber-100 shadow-xs">
//             <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
//               />
//             </svg>
//           </div>
//         );

//       case "ai":
//         return (
//           // AI: Radiant Hexagonal Neural Processor Core
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-[#7C3AED] border border-violet-100 shadow-xs">
//             <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//             </svg>
//           </div>
//         );
//     }
//   };

//   return (
//     <div
//       style={{
//         width: radius * 2,
//         height: radius * 2,
//         left: cx - radius,
//         top: cy - radius,
//       }}
//       className="pointer-events-auto absolute z-20 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(6,22,44,0.09)] p-4 text-center select-none"
//     >
//       {/* 1. Vector Icon Capsule (Physical Morph Anchor) */}
//       <div
//         ref={iconContainerRef}
//         className="flex items-center justify-center shrink-0"
//         style={{ willChange: "transform, opacity" }}
//       >
//         {renderMorphingVectorGlyph(currentPhase.morphType)}
//       </div>

//       {/* 2. Typographic Core (Title & Clean One-Line Description — Zero Overflow) */}
//       <div
//         ref={textContainerRef}
//         className="flex flex-col items-center justify-center mt-2 w-full max-w-[136px]"
//         style={{ willChange: "transform, opacity" }}
//       >
//         {/* Main Category Title */}
//         <span className="font-sans text-[15px] sm:text-[16px] font-bold text-[#06162C] leading-snug">
//           {currentPhase.title}
//         </span>

//         {/* Short Professional Description (Guaranteed fits inside 196px circle) */}
//         <span className="mt-1 text-[10.5px] leading-snug text-[#8998AD]">
//           {currentPhase.subtitle}
//         </span>
//       </div>
//     </div>
//   );
// };

"use client";

import * as React from "react";
import gsap from "gsap";
import { MainWheelPhaseConfig } from "@/types/heroMainWheel";

interface MainWheelCenterHubProps {
  currentPhase: MainWheelPhaseConfig;
  cx: number;
  cy: number;
  radius: number;
}

export const MainWheelCenterHub: React.FC<MainWheelCenterHubProps> = ({
  currentPhase,
  cx,
  cy,
  radius,
}) => {
  const iconContainerRef = React.useRef<HTMLDivElement | null>(null);
  const textContainerRef = React.useRef<HTMLDivElement | null>(null);
  const prevPhaseIdRef = React.useRef<string>(currentPhase.id);

  // 650ms Continuous Kinetic Morph Timeline
  React.useEffect(() => {
    if (prevPhaseIdRef.current === currentPhase.id) return;
    prevPhaseIdRef.current = currentPhase.id;

    const iconEl = iconContainerRef.current;
    const textEl = textContainerRef.current;

    if (!iconEl || !textEl) return;

    gsap.killTweensOf([iconEl, textEl]);

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // 1. Vector Icon Morphs: scales down with subtle twist, then springs forward into the new shape
    tl.to(iconEl, {
      scale: 0.55,
      rotate: -25,
      opacity: 0,
      duration: 0.22,
      onComplete: () => {
        gsap.set(iconEl, { rotate: 25 });
      },
    }).to(iconEl, {
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 0.43,
      ease: "back.out(1.6)",
    });

    // 2. Text executes a synchronized split slide-roll (no blank gap)
    tl.fromTo(
      textEl,
      { y: 8, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
      0.18,
    );
  }, [currentPhase.id]);

  // Vector Morphing Render Engine
  const renderMorphingVectorGlyph = (morphType: "code" | "cloud" | "ai") => {
    switch (morphType) {
      case "code":
        return (
          // Web Dev: Code Brackets & Core Slash
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#0A5FD7] border border-sky-100 shadow-xs">
            <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
            </svg>
          </div>
        );

      case "cloud":
        return (
          // Cloud: Smooth Multi-Lobed Infrastructure Cloud
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#D97706] border border-amber-100 shadow-xs">
            <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
        );

      case "ai":
        return (
          // AI: Radiant Hexagonal Neural Processor Core
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-[#7C3AED] border border-violet-100 shadow-xs">
            <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div
      style={{
        width: radius * 2,
        height: radius * 2,
        left: cx - radius,
        top: cy - radius,
      }}
      className="pointer-events-auto absolute z-20 flex flex-col items-center justify-center rounded-full bg-white border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(6,22,44,0.09)] p-4 text-center select-none"
    >
      {/* 1. Vector Icon Capsule (Physical Morph Anchor) */}
      <div
        ref={iconContainerRef}
        className="flex items-center justify-center shrink-0"
        style={{ willChange: "transform, opacity" }}
      >
        {renderMorphingVectorGlyph(currentPhase.morphType)}
      </div>

      {/* 2. Typographic Core (Title & Clean One-Line Description — Zero Overflow) */}
      <div
        ref={textContainerRef}
        className="flex flex-col items-center justify-center mt-2 w-full max-w-[136px]"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Main Category Title */}
        <span className="font-sans text-[15px] sm:text-[16px] font-bold text-[#06162C] leading-snug">
          {currentPhase.title}
        </span>

        {/* Short Professional Description (Guaranteed fits inside 196px circle) */}
        <span className="mt-1 text-[10.5px] leading-snug text-[#8998AD]">
          {currentPhase.subtitle}
        </span>
      </div>
    </div>
  );
};