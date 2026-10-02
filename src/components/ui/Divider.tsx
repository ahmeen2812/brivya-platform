import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "hairline" | "subtle" | "structural" | "accent";
  indicator?: string;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", variant = "hairline", indicator, ...props }, ref) => {
    const variantColors = {
      hairline: "border-[rgba(137,152,173,0.15)]",
      subtle: "border-[rgba(137,152,173,0.25)]",
      structural: "border-[rgba(7,54,109,0.8)]",
      accent: "border-[rgba(199,167,107,0.5)]",
    };

    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          className={cn("inline-block h-full w-[1px] border-l", variantColors[variant], className)}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn("relative my-6 w-full border-t", variantColors[variant], className)}
        {...props}
      >
        {indicator && (
          <span className="absolute left-0 top-0 -translate-y-1/2 bg-[#06162C] pr-3 font-mono text-[10px] tracking-wider text-[#8998AD] uppercase">
            {indicator}
          </span>
        )}
      </div>
    );
  },
);

Divider.displayName = "Divider";