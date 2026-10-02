import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const surfaceVariants = cva("relative transition-all duration-200 border", {
  variants: {
    level: {
      base: "bg-[#06162C] border-[rgba(137,152,173,0.12)]",
      panel: "bg-[#0A1D36]/80 border-[rgba(137,152,173,0.16)] backdrop-blur-sm",
      elevated: "bg-[#0D2544]/90 border-[rgba(7,54,109,0.8)] shadow-[0_4px_24px_rgba(2,7,14,0.6)]",
      interactive:
        "bg-[#0A1D36]/60 border-[rgba(137,152,173,0.15)] hover:border-[#1675F8]/50 hover:bg-[#0A1D36]/90 cursor-pointer",
    },
    geometry: {
      sharp: "rounded-none",
      micro: "rounded-[2px]",
      chamfer: "chamfer-md",
    },
  },
  defaultVariants: {
    level: "panel",
    geometry: "micro",
  },
});

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {
  cornerIndicator?: string;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, level, geometry, cornerIndicator, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(surfaceVariants({ level, geometry, className }))} {...props}>
        {cornerIndicator && (
          <div className="absolute right-2 top-2 font-mono text-[9px] tracking-wider text-[#8998AD]/60 uppercase">
            {cornerIndicator}
          </div>
        )}
        {children}
      </div>
    );
  },
);

Surface.displayName = "Surface";