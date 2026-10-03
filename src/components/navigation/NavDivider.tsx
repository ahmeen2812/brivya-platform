"use client";

import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface NavDividerProps {
  className?: string;
  orientation?: "vertical" | "horizontal";
  customRef?: (el: HTMLDivElement | null) => void;
}

export const NavDivider: React.FC<NavDividerProps> = ({
  className,
  orientation = "vertical",
  customRef,
}) => {
  return (
    <div
      ref={customRef}
      role="separator"
      aria-orientation={orientation}
      className={twMerge(
        clsx(
          orientation === "vertical"
            ? "h-7 sm:h-8 w-[1px] bg-slate-200/90 shrink-0 self-center"
            : "w-full h-[1px] bg-slate-200/90",
          className,
        ),
      )}
      style={{ willChange: "transform, opacity" }}
    />
  );
};