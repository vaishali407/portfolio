"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface SectionInfo {
  number: string;
  title: string;
  id: string;
}

export const SECTIONS: SectionInfo[] = [
  { number: "01", title: "ABOUT", id: "about" },
  { number: "02", title: "PROJECTS", id: "work" },
  { number: "03", title: "TOOLKIT", id: "skills" },
  { number: "04", title: "WORK HISTORY", id: "experience" },
  { number: "05", title: "EDUCATION", id: "education" },
  { number: "06", title: "CONTACT", id: "contact" },
];

interface SectionContextType {
  activeSection: SectionInfo;
  activeSectionIndex: number;
  totalSections: number;
  setActiveSectionId: (id: string) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionInfo>(SECTIONS[0]);

  const setActiveSectionId = (id: string) => {
    const found = SECTIONS.find((s) => s.id === id);
    if (found && found.id !== activeSection.id) {
      setActiveSection(found);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Find currently visible section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeSectionIndex = SECTIONS.findIndex((s) => s.id === activeSection.id) + 1;

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        activeSectionIndex,
        totalSections: SECTIONS.length,
        setActiveSectionId,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
};
