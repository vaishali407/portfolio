"use client";

import React from "react";
import { useCursor } from "@/context/CursorContext";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();

  return (
    <section id="experience" className="py-36 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 font-mono text-xs text-[#777777] uppercase tracking-[0.15em] mb-12">
          <span className="text-[#67B7FF]">04</span>
          <span>—</span>
          <span>EXPERIENCE</span>
        </div>

        {/* Section Heading */}
        <div
          onMouseEnter={() => setCursorState("text")}
          onMouseLeave={resetCursorState}
          className="mb-16"
        >
          <h2 className="text-section-title font-bold tracking-tighter uppercase leading-[0.88] text-[#F5F5F5]">
            WORK HISTORY.
          </h2>
        </div>

        {/* Minimal Timeline */}
        <div className="max-w-4xl space-y-12">
          <div
            onMouseEnter={() => setCursorState("button")}
            onMouseLeave={resetCursorState}
            className="group rounded-2xl border border-white/12 bg-[#111111] p-8 md:p-10 transition-all hover:border-[#67B7FF]/50 hover:shadow-[0_0_40px_rgba(103,201,107,0.1)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-[#67B7FF] uppercase font-bold tracking-widest mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span>INTERNPRO</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] group-hover:text-[#67B7FF] transition-colors">
                  Web Developer Intern
                </h3>
              </div>

              <div className="flex flex-col md:items-end font-mono text-xs text-[#8A8A8A] space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#67B7FF]" />
                  <span>JUNE 2025 — JULY 2025</span>
                </div>
                <div className="flex items-center gap-2 text-[#777777]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>REMOTE</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-base text-[#8A8A8A] leading-relaxed">
              <p>
                Developed responsive web pages using HTML, CSS, JavaScript, and modern frontend development workflows.
              </p>
              <p>
                Collaborated on web development tasks, code debugging, and feature implementations, acquiring practical experience across full-stack component lifecycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
