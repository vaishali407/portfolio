"use client";

import React, { useEffect, useRef, useState } from "react";
import { useCursor } from "@/context/CursorContext";
import { useSection } from "@/context/SectionContext";

interface SectionHeaderProps {
  number: string;
  title: string;
  sectionId: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  sectionId,
  className = "mb-24",
}) => {
  const { setCursorState, resetCursorState } = useCursor();
  const { activeSection } = useSection();
  const headerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const isActive = activeSection.id === sectionId;

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headerRef}
      onMouseEnter={() => setCursorState("text")}
      onMouseLeave={resetCursorState}
      className={`group relative inline-block cursor-default select-none transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-none transition-all duration-300">
        <span
          className={`inline-block transition-all duration-300 group-hover:translate-x-1 ${
            isActive
              ? "text-[#67B7FF] drop-shadow-[0_0_20px_rgba(103,183,255,0.4)]"
              : "text-[#67B7FF] group-hover:drop-shadow-[0_0_20px_rgba(103,183,255,0.4)]"
          }`}
        >
          {number}
        </span>
        <span className="text-[#777777] mx-3 md:mx-4 font-light">—</span>
        <span
          className={`transition-colors duration-300 ${
            isActive ? "text-white font-bold" : "text-[#F5F5F5] group-hover:text-white"
          }`}
        >
          {title}
        </span>
      </h1>

      {/* Subtle blue accent line (animates on hover or when active) */}
      <div
        className={`h-[2px] w-full bg-gradient-to-r from-[#67B7FF] via-[#67B7FF]/40 to-transparent transition-transform duration-500 origin-left mt-2 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </div>
  );
};
