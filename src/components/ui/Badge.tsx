import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const badgeVariants = cva(
  "inline-flex items-center font-mono text-[11px] uppercase tracking-[0.08em] px-2 py-0.5 select-none transition-colors border",
  {
    variants: {
      variant: {
        default: "bg-[#07366D]/20 text-[#8998AD] border-[#8998AD]/20",
        signal: "bg-[#1675F8]/10 text-[#1675F8] border-[#1675F8]/30",
        accent: "bg-[#C7A76B]/10 text-[#C7A76B] border-[#C7A76B]/30",
        live: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30",
      },
      geometry: {
        sharp: "rounded-none",
        micro: "rounded-[2px]",
        chamfer: "chamfer-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      geometry: "micro",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  ping?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, geometry, ping = false, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(badgeVariants({ variant, geometry, className }))} {...props}>
        {ping && (
          <span className="mr-1.5 flex h-1.5 w-1.5">
            <span className="inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
            <span className="relative -ml-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-current" />
          </span>
        )}
        {children}
      </div>
    );
  },
);

Badge.displayName = "Badge";