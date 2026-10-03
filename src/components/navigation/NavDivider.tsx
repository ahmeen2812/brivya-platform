import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface NavDividerProps {
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export const NavDivider: React.FC<NavDividerProps> = ({
  className,
  orientation = "vertical",
}) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={twMerge(
        clsx(
          orientation === "vertical"
            ? "h-8 w-[1px] bg-slate-200/90 shrink-0 self-center"
            : "w-full h-[1px] bg-slate-200/90",
          className,
        ),
      )}
    />
  );
};