import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const textVariants = cva("", {
  variants: {
    variant: {
      display:
        "text-[clamp(2.75rem,5vw+1rem,5.5rem)] font-bold tracking-[-0.035em] leading-[1.02] text-[#F4F7FC]",
      h1: "text-[clamp(2.25rem,3.5vw+0.5rem,4rem)] font-bold tracking-[-0.03em] leading-[1.08] text-[#F4F7FC]",
      h2: "text-[clamp(1.75rem,2.5vw+0.5rem,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.15] text-[#F4F7FC]",
      h3: "text-[clamp(1.35rem,1.8vw+0.3rem,1.85rem)] font-semibold tracking-[-0.02em] leading-[1.25] text-[#F4F7FC]",
      h4: "text-xl font-semibold tracking-[-0.015em] leading-snug text-[#F4F7FC]",
      bodyLarge: "text-lg leading-relaxed text-[#8998AD] font-normal tracking-[-0.01em]",
      bodyDefault: "text-base leading-relaxed text-[#8998AD] font-normal",
      bodySmall: "text-sm leading-normal text-[#8998AD]/85 font-normal",
      caption: "text-xs leading-normal text-[#8998AD]/70 font-medium",
      telemetry: "font-mono text-xs uppercase tracking-[0.06em] text-[#8998AD]",
      accent: "text-sm font-mono text-[#C7A76B] tracking-wider uppercase",
    },
  },
  defaultVariants: {
    variant: "bodyDefault",
  },
});

type PolymorphicTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: PolymorphicTag;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, as, children, ...props }, ref) => {
    let Component = as;

    if (!Component) {
      if (variant === "display" || variant === "h1") Component = "h1";
      else if (variant === "h2") Component = "h2";
      else if (variant === "h3") Component = "h3";
      else if (variant === "h4") Component = "h4";
      else if (variant === "telemetry" || variant === "accent") Component = "span";
      else Component = "p";
    }

    return React.createElement(
      Component,
      {
        ref,
        className: cn(textVariants({ variant, className })),
        ...props,
      },
      children,
    );
  },
);

Text.displayName = "Text";