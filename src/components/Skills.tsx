"use client";

import React from "react";
import { useCursor } from "@/context/CursorContext";

export const Skills: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();

  const skillCategories = [
    {
      title: "PROGRAMMING",
      skills: ["Java", "Python", "C++", "JavaScript", "HTML5", "CSS3", "SQL"],
    },
    {
      title: "FRAMEWORKS & LIBRARIES",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      title: "DATABASE",
      skills: ["MySQL"],
    },
    {
      title: "TOOLS & ENVIRONMENT",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Canva"],
    },
    {
      title: "CORE COMPUTER SCIENCE",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "REST API Architecture",
      ],
    },
  ];

  return (
    <section id="skills" className="py-36 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">
        {/* MAIN SECTION HEADING - Large & Prominent Chapter Title */}
        <div
          onMouseEnter={() => setCursorState("text")}
          onMouseLeave={resetCursorState}
          className="group relative inline-block cursor-default select-none mb-20"
        >
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-none transition-all duration-300">
            <span className="text-[#67B7FF] inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_20px_rgba(103,183,255,0.4)]">
              03
            </span>
            <span className="text-[#777777] mx-3 md:mx-4 font-light">—</span>
            <span className="text-[#F5F5F5] group-hover:text-white transition-colors">
              TOOLKIT
            </span>
          </h1>
          {/* Subtle blue accent underline on hover */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#67B7FF] via-[#67B7FF]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-2" />
        </div>

        {/* Editorial Compact Typographic Categories */}
        <div className="space-y-12 max-w-5xl">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="group border-b border-white/10 pb-8 space-y-4 transition-all hover:border-[#67B7FF]/40"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-[#67B7FF] tracking-[0.18em] uppercase">
                <span>0{idx + 1}</span>
                <span>/</span>
                <span className="text-[#777777] group-hover:text-[#67B7FF] transition-colors">
                  {cat.title}
                </span>
              </div>

              <div
                onMouseEnter={() => setCursorState("text")}
                onMouseLeave={resetCursorState}
                className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xl md:text-2xl font-sans text-[#8A8A8A] font-light leading-relaxed"
              >
                {cat.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    <span className="transition-colors hover:text-[#F5F5F5] cursor-default">
                      {skill}
                    </span>
                    {sIdx < cat.skills.length - 1 && (
                      <span className="text-[#67B7FF]/40 font-mono text-base select-none">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
