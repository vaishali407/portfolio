"use client";

import React, { useState } from "react";
import { useCursor } from "@/context/CursorContext";
import { Code2, Cpu, Palette, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();
  const [activeTab, setActiveTab] = useState<"overview" | "stack" | "philosophy">("overview");

  const highlightWords = [
    { word: "FULL-STACK", color: "#67C96B" },
    { word: "AI-POWERED", color: "#82E286" },
    { word: "REAL-TIME", color: "#67C96B" },
    { word: "DESIGN-ORIENTED", color: "#82E286" },
  ];

  return (
    <section id="about" className="py-36 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 font-mono text-xs text-[#777777] uppercase tracking-[0.15em] mb-12">
          <span className="text-[#67C96B]">01</span>
          <span>—</span>
          <span>ABOUT</span>
        </div>

        {/* Editorial Heading */}
        <div
          onMouseEnter={() => setCursorState("text")}
          onMouseLeave={resetCursorState}
          className="mb-16"
        >
          <h2 className="text-section-title font-bold tracking-tighter uppercase leading-[0.9] text-[#F5F5F5] max-w-5xl">
            A DEVELOPER WHO LIKES TO <span className="text-[#67C96B]">BUILD</span> THINGS.
          </h2>
        </div>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Controlled Width Readable Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-lg md:text-xl text-[#8A8A8A] font-light leading-[1.65] max-w-[720px]">
            <p>
              I am a Computer Science & Engineering student at{" "}
              <strong className="text-[#F5F5F5] font-normal">VIT Bhopal University</strong>, focusing on full-stack web engineering, AI integrations, real-time communication systems, and interactive digital experiences.
            </p>

            <p>
              My work spans full-stack applications, AI-powered products, real-time communication, and deep learning projects.
            </p>

            <p>
              I also contribute to the{" "}
              <strong className="text-[#67C96B] font-normal">Vitronix Club Design Team</strong>, combining software development with visual design.
            </p>

            {/* Keyword Pills */}
            <div className="pt-6 flex flex-wrap gap-3">
              {highlightWords.map((item) => (
                <span
                  key={item.word}
                  onMouseEnter={() => setCursorState("button")}
                  onMouseLeave={resetCursorState}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs text-[#F5F5F5] transition-all hover:border-[#67C96B] hover:text-[#67C96B] hover:bg-[#67C96B]/10"
                >
                  {item.word}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Degree Card & Specialization Blocks */}
          <div className="lg:col-span-5 space-y-6">
            {/* Compact Degree Block */}
            <div className="rounded-2xl border border-white/12 bg-[#111111] p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs tracking-[0.15em]">
                <span className="text-[#777777]">DEGREE</span>
                <span className="text-[#67C96B] font-bold">2023 — 2027</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5F5F5]">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-sm text-[#8A8A8A] mt-1">VIT Bhopal University</p>
              </div>
              <div className="flex items-center gap-3 pt-2 font-mono text-xs text-[#8A8A8A]">
                <span className="rounded bg-[#183D20] px-3 py-1 text-[#67C96B] font-bold">
                  CGPA 8.23
                </span>
                <span>VIT Bhopal CSE</span>
              </div>
            </div>

            {/* Specialization Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-[#111111] p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#67C96B]" />
                  <h4 className="font-mono text-xs text-[#F5F5F5] font-bold tracking-[0.15em]">
                    FULL-STACK
                  </h4>
                </div>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  React, Next.js, Node.js, Express, Socket.IO
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111111] p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#67C96B]" />
                  <h4 className="font-mono text-xs text-[#F5F5F5] font-bold tracking-[0.15em]">
                    AI & VISION
                  </h4>
                </div>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  Python, TensorFlow, OpenCV, Gemini AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
