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

        {/* Editorial Typographic List */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`space-y-6 ${
                idx === 0 || idx === 1 ? "md:col-span-6" : "md:col-span-4"
              }`}
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-3 font-mono text-xs text-[#67C96B] tracking-wider uppercase">
                <span>0{idx + 1}</span>
                <span>/</span>
                <span>{cat.title}</span>
              </div>

              <div className="flex flex-col space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    onMouseEnter={() => setCursorState("button")}
                    onMouseLeave={resetCursorState}
                    className="group flex items-center justify-between py-2 border-b border-white/5 transition-all hover:border-[#67C96B]/50 hover:pl-2"
                  >
                    <span className="text-lg md:text-xl font-sans text-[#8A8A8A] transition-colors group-hover:text-[#F5F5F5]">
                      {skill}
                    </span>
                    <span className="font-mono text-xs text-transparent group-hover:text-[#67C96B] transition-all">
                      +
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
