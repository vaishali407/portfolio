"use client";

import React, { useState, useEffect } from "react";

interface SectionDividerProps {
  label?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Small 2-4px subtle offset relative to window center
      const x = ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 4;
      const y = ((e.clientY - window.innerHeight / 2) / window.innerHeight) * 4;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="py-20 md:py-28 px-6 md:px-12 bg-[#080808] border-t border-white/5 flex items-center justify-between select-none overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between font-mono text-[10px] md:text-xs text-[#777777]/50 tracking-[0.2em] uppercase">
        {/* Left technical fragment */}
        <div
          className="flex items-center gap-3 transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          }}
        >
          <span className="text-[#67B7FF]/40 font-bold">//</span>
          <span>{label || "CH.NEXT"}</span>
        </div>

        {/* Center subtle measurement line */}
        <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Right subtle code symbol */}
        <div
          className="flex items-center gap-2 transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${-mouseOffset.x}px, ${-mouseOffset.y}px, 0)`,
          }}
        >
          <span className="text-[#67B7FF]/30 font-bold">&lt;/&gt;</span>
          <span className="hidden sm:inline text-white/20">1600PX_GRID</span>
        </div>
      </div>
    </div>
  );
};
