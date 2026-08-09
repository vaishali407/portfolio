"use client";

import React from "react";
import { useSection } from "@/context/SectionContext";

export const ScrollProgressIndicator: React.FC = () => {
  const { activeSection, activeSectionIndex, totalSections } = useSection();

  return (
    <div className="fixed bottom-8 right-8 z-30 pointer-events-none hidden md:block">
      <div className="flex items-center gap-3 bg-[#080808]/90 border border-white/10 backdrop-blur-md px-3.5 py-2 rounded-lg font-mono text-[11px] text-[#8A8A8A] shadow-xl transition-all duration-300">
        <span className="text-[#67B7FF] font-bold">
          0{activeSectionIndex} / 0{totalSections}
        </span>
        <span className="text-white/20">|</span>
        <span className="text-[#F5F5F5] font-medium tracking-wider uppercase">
          {activeSection.title}
        </span>
      </div>
    </div>
  );
};
