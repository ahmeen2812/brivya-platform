import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "compact" | "standard" | "hero";
  borderBottom?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "standard", borderBottom = false, children, ...props }, ref) => {
    const spacingClasses = {
      compact: "py-12 sm:py-16 md:py-20",
      standard: "py-20 sm:py-28 md:py-36",
      hero: "pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-44 md:pb-36",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-transparent",
          spacingClasses[spacing],
          borderBottom && "border-b border-[rgba(137,152,173,0.15)]",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";