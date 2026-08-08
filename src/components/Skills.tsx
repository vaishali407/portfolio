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
        {/* Section Label */}
        <div className="flex items-center gap-4 font-mono text-xs text-[#777777] uppercase tracking-[0.15em] mb-12">
          <span className="text-[#67C96B]">03</span>
          <span>—</span>
          <span>TOOLKIT</span>
        </div>

        {/* Section Heading */}
        <div
          onMouseEnter={() => setCursorState("text")}
          onMouseLeave={resetCursorState}
          className="mb-20"
        >
          <h2 className="text-section-title font-bold tracking-tighter uppercase leading-[0.88] text-[#F5F5F5]">
            WHAT I WORK WITH.
          </h2>
        </div>

        {/* Editorial Compact Typographic Categories */}
        <div className="space-y-12 max-w-5xl">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="group border-b border-white/10 pb-8 space-y-4 transition-all hover:border-[#67C96B]/40"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-[#67C96B] tracking-[0.18em] uppercase">
                <span>0{idx + 1}</span>
                <span>/</span>
                <span className="text-[#777777] group-hover:text-[#67C96B] transition-colors">
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
                      <span className="text-[#67C96B]/40 font-mono text-base select-none">
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
