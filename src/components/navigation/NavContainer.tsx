"use client";

import * as React from "react";

interface NavContainerProps {
  children: React.ReactNode;
}

export const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto relative flex w-full max-w-[1360px] items-center justify-between rounded-full bg-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 shadow-[0_12px_45px_-8px_rgba(6,22,44,0.12),0_4px_16px_-4px_rgba(6,22,44,0.06)] border border-slate-100/80 transition-all duration-300">
        {children}
      </div>
    </header>
  );
};