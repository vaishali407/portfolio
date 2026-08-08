"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-[#080808] border-t border-white/10 font-mono text-xs text-[#777777]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#F5F5F5] uppercase">VAISHALI NEGI</span>
          <span>•</span>
          <span>B.TECH CSE</span>
        </div>

        <div>
          <span>BUILT WITH NEXT.JS, GSAP & TAILWIND CSS</span>
        </div>

        <div>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
};
