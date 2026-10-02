import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] disabled:pointer-events-none disabled:opacity-40 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0A5FD7] text-[#F4F7FC] hover:bg-[#1675F8] active:translate-y-[1px] shadow-[inset_0_1px_0_0_rgba(244,247,252,0.12)] border border-[#1675F8]/40",
        secondary:
          "bg-[#07366D]/40 text-[#F4F7FC] border border-[#8998AD]/20 hover:border-[#8998AD]/40 hover:bg-[#07366D]/70 active:translate-y-[1px]",
        ghost:
          "bg-transparent text-[#8998AD] hover:text-[#F4F7FC] hover:bg-[#07366D]/20 active:translate-y-[1px]",
        technical:
          "font-mono bg-[#06162C] text-[#C7A76B] border border-[#C7A76B]/40 hover:border-[#C7A76B] hover:bg-[#C7A76B]/10 active:translate-y-[1px] uppercase tracking-wider text-xs",
      },
      size: {
        small: "h-8 px-3 text-xs gap-1.5",
        medium: "h-11 px-5 text-sm gap-2",
        large: "h-13 px-7 text-base gap-2.5",
      },
      geometry: {
        sharp: "rounded-none",
        micro: "rounded-[2px]",
        chamfer: "chamfer-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      geometry: "micro",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, geometry, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, geometry, className }))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";