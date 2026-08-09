"use client";

import React, { useState } from "react";
import { TypewriterIntro } from "@/components/TypewriterIntro";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { EducationCertifications } from "@/components/EducationCertifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { SectionProvider } from "@/context/SectionContext";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  useSmoothScroll();

  return (
    <SectionProvider>
      <main className="relative min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-[#67B7FF] selection:text-[#080808]">
        {!introFinished && (
          <TypewriterIntro onComplete={() => setIntroFinished(true)} />
        )}
        <Navbar />
        <Hero />
        <About />
        <SectionDivider label="02_PROJECTS" />
        <Projects />
        <SectionDivider label="03_TOOLKIT" />
        <Skills />
        <SectionDivider label="04_WORK_HISTORY" />
        <Experience />
        <SectionDivider label="05_EDUCATION" />
        <EducationCertifications />
        <SectionDivider label="06_CONTACT" />
        <Contact />
        <Footer />
        <ScrollProgressIndicator />
      </main>
    </SectionProvider>
  );
}
