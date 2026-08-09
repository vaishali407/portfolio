"use client";

import React from "react";
import Image from "next/image";
import { useCursor } from "@/context/CursorContext";
import { Award, GraduationCap, Palette } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

export const EducationCertifications: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();

  const certifications = [
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google / Coursera",
      date: "JULY 2026",
    },
    {
      title: "DevOps Fundamentals",
      issuer: "IBM Career Education Program",
      date: "JUNE 2025",
    },
    {
      title: "Mastering HTML5 and CSS3",
      issuer: "Udemy",
      date: "SEPTEMBER 2025",
    },
    {
      title: "Programming in Java",
      issuer: "Vityarthi, VIT Bhopal",
      date: "APRIL 2025",
    },
    {
      title: "Introduction to Data Science",
      issuer: "Simplilearn SkillUp",
      date: "FEBRUARY 2026",
    },
  ];

  return (
    <section id="certificates" className="py-44 md:py-52 lg:py-60 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto space-y-20">
        {/* MAIN SECTION HEADING - Large Chapter Title with Scroll Reveal */}
        <SectionHeader number="05" title="CERTIFICATES" sectionId="certificates" className="mb-12" />

        {/* Education & Leadership Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#F5F5F5]">
              EDUCATION
            </h3>

            <div
              onMouseEnter={() => setCursorState("button")}
              onMouseLeave={resetCursorState}
              className="rounded-2xl border border-white/12 bg-[#111111] p-8 space-y-4 transition-all hover:border-[#67B7FF]/50"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#67B7FF] tracking-[0.15em] font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>VIT BHOPAL UNIVERSITY</span>
                </div>
                <span className="font-mono text-xs text-[#777777]">2023 — 2027</span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#F5F5F5]">
                  Bachelor of Technology
                </h4>
                <p className="text-sm text-[#8A8A8A]">Computer Science and Engineering</p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <span className="rounded-md bg-[#182F48] px-3 py-1 font-mono text-xs font-bold text-[#67B7FF]">
                  CGPA 8.23
                </span>
                <span className="font-mono text-xs text-[#777777]">Full-Time Program</span>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Design */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#F5F5F5]">
              CREATIVE DIRECTION
            </h3>

            <div
              onMouseEnter={() => setCursorState("button")}
              onMouseLeave={resetCursorState}
              className="rounded-2xl border border-white/12 bg-[#111111] p-8 space-y-4 transition-all hover:border-[#67B7FF]/50"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#67B7FF] tracking-[0.15em] font-bold">
                  <Palette className="w-4 h-4" />
                  <span>VITRONIX CLUB</span>
                </div>
                <span className="font-mono text-xs text-[#777777]">2024 — PRESENT</span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#F5F5F5]">
                  Core Member — Design Team
                </h4>
                <p className="text-sm text-[#8A8A8A] mt-1">
                  Designed promotional graphics, digital media, and branding for technical events, workshops, and student initiatives.
                </p>
              </div>

              {/* Design Showcase Preview Image */}
              <div className="relative h-32 w-full rounded-xl overflow-hidden border border-white/10 mt-4">
                <Image
                  src="/images/vitronix_design_preview.png"
                  alt="Vitronix Club Design Showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Editorial List */}
        <div className="space-y-8 border-t border-white/10 pt-16">
          <h3 className="text-2xl font-bold uppercase tracking-tight text-[#F5F5F5]">
            CREDENTIALS & CERTIFICATIONS
          </h3>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                onMouseEnter={() => setCursorState("button")}
                onMouseLeave={resetCursorState}
                className="group flex flex-col md:flex-row md:items-center justify-between py-7 md:py-8 px-4 transition-all hover:bg-white/[0.03] rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <Award className="w-5 h-5 text-[#67B7FF] shrink-0" />
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-[#F5F5F5] group-hover:text-[#67B7FF] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#777777] font-mono mt-1">{cert.issuer}</p>
                  </div>
                </div>
                <div className="mt-3 md:mt-0 font-mono text-xs md:text-sm text-[#8A8A8A] tracking-[0.15em]">
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
