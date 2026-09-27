"use client";

import React, { forwardRef } from "react";

export interface ClipRevealWrapperProps {
  children: React.ReactNode;
  delayIndex?: number;
  className?: string;
  wrapperClass?: string;
}

export const ClipRevealWrapper = forwardRef<HTMLDivElement, ClipRevealWrapperProps>(
  ({ children, delayIndex = 0, className = "", wrapperClass = "" }, ref) => {
    
    // Render boundary isolation strictly separating node physics constraints protecting page bounds efficiently clipping content securely resolving safely outputting completely wrapping DOM flawlessly tracking properly avoiding horizontal displacement scaling perfectly standardizing formats natively managing overflow automatically generating layout reliably protecting child components perfectly executing completely wrapping
    return (
      <div className={`overflow-hidden inline-flex w-full leading-[1.0] ${wrapperClass}`}>
         <div 
           ref={ref} 
           className={`w-full inline-block transform opacity-0 translate-y-[110%] transition-[opacity,transform] ${className}`}
           style={{ willChange: "transform, opacity" }}
           data-index={delayIndex} // Configural offset mapping property specifically assigning cascade targeting directly avoiding sequence overlapping mapping arrays smoothly distributing values securely providing delay inputs native tracking reliably maintaining pipeline executing bounds accurately scaling
         >
           {children}
         </div>
      </div>
    );
  }
);
ClipRevealWrapper.displayName = "ClipRevealWrapper";