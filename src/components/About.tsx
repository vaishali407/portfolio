import React from "react";
import Image from "next/image";
import { useCursor } from "@/context/CursorContext";
import { Code2, Cpu, GraduationCap } from "lucide-react";

export const About: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();

  const highlightWords = [
    "FULL-STACK",
    "AI-POWERED",
    "REAL-TIME",
    "DESIGN-ORIENTED",
  ];

  return (
    <section id="about" className="py-36 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-4 font-mono text-xs text-[#777777] uppercase tracking-[0.15em] mb-12">
          <span className="text-[#67B7FF]">01</span>
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
            A DEVELOPER WHO LIKES TO <span className="text-[#67B7FF]">BUILD</span> THINGS.
          </h2>
        </div>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Substantial Editorial Text, Tags, & Supporting Info */}
          <div className="lg:col-span-7 space-y-12">
            {/* Prominent, readable body paragraphs with highlighted phrases */}
            <div className="space-y-7 text-xl md:text-[22px] lg:text-[23px] text-[#8A8A8A] font-light leading-[1.7] max-w-[780px]">
              <p>
                I&apos;m a Computer Science & Engineering student at{" "}
                <span className="text-[#67B7FF] font-normal">VIT Bhopal University</span>, focused on building{" "}
                <span className="text-[#67B7FF] font-normal">full-stack web applications</span>,{" "}
                <span className="text-[#67B7FF] font-normal">AI-powered products</span>, and interactive digital experiences.
              </p>

              <p>
                I enjoy working across the stack — from designing interfaces and building responsive frontends to developing APIs,{" "}
                <span className="text-[#67B7FF] font-normal">real-time communication systems</span>, and AI integrations. I&apos;m especially interested in the space where{" "}
                <span className="text-[#67B7FF] font-normal">software engineering meets thoughtful design</span>.
              </p>

              <p>
                Beyond development, I contribute to the{" "}
                <span className="text-[#67B7FF] font-normal">Vitronix Club Design Team</span>, where I combine my technical background with visual design and digital art direction. Whether I&apos;m building a product, experimenting with AI, or designing an interface, I care about making things that are functional, distinctive, and enjoyable to use.
              </p>
            </div>

            {/* Keyword Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {highlightWords.map((word) => (
                <span
                  key={word}
                  onMouseEnter={() => setCursorState("button")}
                  onMouseLeave={resetCursorState}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs text-[#F5F5F5] transition-all hover:border-[#67B7FF] hover:text-[#67B7FF] hover:bg-[#67B7FF]/10"
                >
                  {word}
                </span>
              ))}
            </div>

            {/* Supporting Information (Education & Skill Cards placed underneath) */}
            <div className="pt-4 space-y-4 max-w-[780px]">
              {/* Education Card */}
              <div className="rounded-xl border border-white/10 bg-[#111111]/80 p-6 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs tracking-[0.15em] text-[#777777]">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#67B7FF]" />
                    <span>EDUCATION</span>
                  </div>
                  <span className="text-[#67B7FF] font-bold">2023 — 2027</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 pt-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#F5F5F5]">
                      B.Tech in Computer Science & Engineering
                    </h3>
                    <p className="text-xs text-[#8A8A8A] mt-0.5">VIT Bhopal University</p>
                  </div>
                  <span className="inline-block w-fit rounded bg-[#182F48] px-3 py-1 font-mono text-xs font-bold text-[#67B7FF]">
                    CGPA 8.23
                  </span>
                </div>
              </div>

              {/* Compact Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#111111]/80 p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#67B7FF]" />
                    <h4 className="font-mono text-xs text-[#F5F5F5] font-bold tracking-[0.15em]">
                      FULL-STACK
                    </h4>
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    React, Next.js, Node.js, Express, Socket.IO
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#111111]/80 p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#67B7FF]" />
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

          {/* Right Column: Editorial Portrait Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#111111] shadow-2xl transition-all duration-500 hover:border-[#67B7FF]/50">
              <div className="relative h-[540px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden">
                <Image
                  src="/images/vaishali_portrait.png"
                  alt="Vaishali Negi — Full-Stack Developer Portrait"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04] filter contrast-[1.03] brightness-[0.97] saturate-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-4 font-mono text-[11px] text-[#8A8A8A] flex items-center justify-between bg-[#111111] border-t border-white/10 group-hover:text-[#F5F5F5] transition-colors">
                <span className="tracking-wider">VAISHALI NEGI</span>
                <span className="text-[#67B7FF] font-bold tracking-widest">PORTRAIT / 01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
