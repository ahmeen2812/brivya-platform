// "use client";

// import React, { useRef, useEffect } from "react";
// import { SAAS_PRODUCTS_CONTENT } from "@/config/services/saasProducts";
// import { initChallengesIntroAnimation } from "./animations";
// import { SaasChallengesIntroMobile } from "./mobile/SaasChallengesIntroMobile";

// export const SaasChallengesIntro: React.FC = () => {
//   const { challengesIntro } = SAAS_PRODUCTS_CONTENT;

//   const cardRef = useRef<HTMLDivElement | null>(null);
//   const headingRef = useRef<HTMLHeadingElement | null>(null);
//   const paragraphRef = useRef<HTMLParagraphElement | null>(null);

//   useEffect(() => {
//     if (!cardRef.current) return;

//     const ctx = initChallengesIntroAnimation(
//       cardRef.current,
//       headingRef.current,
//       paragraphRef.current
//     );

//     return () => ctx?.revert();
//   }, []);

//   return (
//     <>
//       {/* DESKTOP VIEWPORT */}
//       <section className="hidden lg:block relative w-full mb-16 select-none overflow-x-clip">
//         <div
//           ref={cardRef}
//           className="relative w-full rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-8 lg:p-10 shadow-[0_18px_50px_-10px_rgba(7,54,109,0.09)] [box-shadow:inset_0_1.5px_0_0_rgba(255,255,255,1)] will-change-transform"
//         >
//           <div className="relative z-10 max-w-[940px] mx-auto flex flex-col">
//             <h2
//               ref={headingRef}
//               className="font-sans text-[28px] font-extrabold text-[#06162C] leading-[1.18] tracking-[-0.03em] mb-4 will-change-transform"
//             >
//               {challengesIntro.heading}
//             </h2>

//             <p
//               ref={paragraphRef}
//               className="font-sans text-[17px] leading-[1.74] text-[#475569] font-normal tracking-[-0.01em] will-change-transform"
//             >
//               {challengesIntro.paragraph}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* DEDICATED MOBILE VIEWPORT */}
//       <div className="block lg:hidden">
//         <SaasChallengesIntroMobile />
//       </div>
//     </>
//   );
// };


"use client";

import React, { useRef } from "react";
import { SAAS_PRODUCTS_CONTENT } from "@/config/services/saasProducts";
import { initChallengesIntroAnimation } from "./animations";
import { SaasChallengesIntroMobile } from "./mobile/SaasChallengesIntroMobile";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";

export const SaasChallengesIntro: React.FC = () => {
  const { challengesIntro } = SAAS_PRODUCTS_CONTENT;

  const cardRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = initChallengesIntroAnimation(
      cardRef.current,
      headingRef.current,
      paragraphRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT: Sharp Unfilled Console with Generous Top Clearance */}
      <section className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip mt-16 lg:mt-20">
        <div
          ref={cardRef}
          className="relative w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-7 lg:px-9 shadow-xs will-change-transform"
        >
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-5 pr-6 border-r border-[#07366D]/25">
              <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1.5">
                Market Directive
              </span>
              <h2
                ref={headingRef}
                className="font-sans text-[22px] font-extrabold text-[#07366D] tracking-tight leading-tight will-change-transform"
              >
                {challengesIntro.heading}
              </h2>
            </div>

            <div className="col-span-7">
              <p
                ref={paragraphRef}
                className="font-sans text-[14.5px] leading-[1.68] text-[#475569] font-normal will-change-transform"
              >
                {challengesIntro.paragraph}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <SaasChallengesIntroMobile />
      </div>
    </>
  );
};