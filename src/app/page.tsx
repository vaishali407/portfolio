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

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  useSmoothScroll();

  return (
    <main className="relative min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-[#67B7FF] selection:text-[#080808]">
      {!introFinished && (
        <TypewriterIntro onComplete={() => setIntroFinished(true)} />
      )}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <EducationCertifications />
      <Contact />
      <Footer />
    </main>
  );
}
