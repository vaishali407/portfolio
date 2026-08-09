"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCursor } from "@/context/CursorContext";
import { ProjectModal, ProjectData } from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";

export const projectsData: ProjectData[] = [
  {
    id: "voxa",
    title: "VOXA",
    subtitle: "REAL-TIME MULTILINGUAL COMMUNICATION PLATFORM",
    category: "FULL-STACK / REAL-TIME AI",
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO", "AI Translation APIs"],
    description:
      "A multilingual real-time chat platform supporting 50+ languages through AI translation APIs and WebSocket communication.",
    highlight: "Low-latency real-time messaging using Socket.IO.",
    image: "/images/voxa_preview.png",
    details: {
      overview:
        "VOXA breaks language barriers in real-time communication by combining low-latency WebSocket connections with high-throughput AI translation engines. Users can communicate seamlessly across 50+ languages with automatic instant translation.",
      keyFeatures: [
        "Instant bidirectional translation across 50+ languages",
        "Low-latency WebSocket streaming powered by Socket.IO",
        "Modular Express.js backend with JWT authentication",
        "Clean responsive chat dashboard interface",
      ],
    },
    githubUrl: "https://github.com/vaishali407/VOXA-multilingual-chat-app",
  },
  {
    id: "smart-meeting",
    title: "SMART MEETING ASSISTANT",
    subtitle: "AI-POWERED MEETING PLATFORM",
    category: "FULL-STACK / AI INTEGRATION",
    tech: ["Next.js", "React.js", "Stream SDK", "Gemini AI", "Tailwind CSS"],
    description:
      "An AI-powered meeting platform with video conferencing, real-time chat, authentication, and AI-generated meeting summaries.",
    highlight: "Integrated Gemini AI, Stream Video SDK and authentication services.",
    image: "/images/smart_meeting_preview.png",
    details: {
      overview:
        "Smart Meeting Assistant streamlines remote collaboration by combining high-definition video feeds with Google's Gemini AI. Meetings are transcribed in real-time and converted into automated action items, key decisions, and executive summaries.",
      keyFeatures: [
        "HD Video Conferencing powered by Stream SDK",
        "Automated AI meeting summaries generated via Gemini API",
        "Real-time text transcript extraction & action items",
        "Secure user authentication & room management",
      ],
    },
    githubUrl: "https://github.com/vaishali407",
  },
  {
    id: "deepfake-detection",
    title: "DEEPFAKE DETECTION SYSTEM",
    subtitle: "MACHINE LEARNING / COMPUTER VISION",
    category: "MACHINE LEARNING / COMPUTER VISION",
    tech: ["Python", "TensorFlow", "InceptionV3", "Attention Mechanism", "MTCNN", "VGG16", "CNN+LSTM"],
    description:
      "A comparative deep learning system evaluating CNN, LSTM, VGG16, and InceptionV3 + Attention architectures for facial manipulation detection.",
    highlight:
      "TEAM PROJECT · 5 MEMBERS — InceptionV3 + Attention achieved 100.0% test accuracy with 0 misclassifications on Dataset 1.",
    image: "/images/deepfake_detection_preview.svg",
    details: {
      overview:
        "A comprehensive EPICS engineering research project at VIT Bhopal University evaluating multiple deep learning architectures for facial manipulation detection. The system incorporates MTCNN face isolation preprocessing, VGG16 transfer learning, CNN+LSTM hybrids, and an InceptionV3 model augmented with a spatial-channel attention mechanism.",
      keyFeatures: [
        "InceptionV3 + Attention architecture achieving 100.0% test accuracy (0 false positives / negatives)",
        "MTCNN (Multi-task Cascaded CNN) for facial bounding box extraction & background noise removal",
        "Comparative benchmark across 6 model configurations on Dataset 1 & Dataset 2",
        "Vaishali's Role: CNN + LSTM hybrid model training, hyperparameter tuning & Dataset 2 performance evaluation",
        "Team Members: Mayank Pandey, Mansi Jain, Sadique Nomani, Vasudha Sharma, Vaishali Negi",
      ],
    },
    githubUrl: "https://github.com/vaishali407",
  },
];

import { SectionHeader } from "@/components/SectionHeader";

export const Projects: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="work" className="py-44 md:py-52 lg:py-60 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">
        {/* MAIN SECTION HEADING - Large Chapter Title with Scroll Reveal */}
        <SectionHeader number="02" title="PROJECTS" sectionId="work" className="mb-28 md:mb-36" />

        {/* Editorial Art-Directed Layout with Generous Vertical Separation */}
        <div className="space-y-44 md:space-y-56">
          {/* PROJECT 01 — VOXA Multilingual Real-Time Chat Platform */}
          <div
            onClick={() => setSelectedProject(projectsData[0])}
            onMouseEnter={() => setCursorState("project", "VIEW CASE")}
            onMouseLeave={resetCursorState}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 relative">
              {/* Primary Screenshot (VOXA Chat Interface — Full Widescreen 16:9 View) */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 bg-[#080C14] transition-all duration-500 group-hover:border-[#67B7FF]/60 group-hover:shadow-[0_0_60px_rgba(103,183,255,0.22)] p-1 sm:p-2">
                <Image
                  src="/images/voxa_preview.png"
                  alt="VOXA Real-Time Multilingual Chat Interface Screenshot"
                  fill
                  priority
                  className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                />
              </div>

              {/* Floating Secondary Screenshot (VOXA Welcome & Join Interface — Uncropped View) */}
              <div className="hidden sm:block absolute -bottom-6 -right-4 md:-bottom-8 md:-right-6 w-44 md:w-56 aspect-[3/4] rounded-xl overflow-hidden border border-white/25 shadow-2xl bg-[#090D16] z-10 transition-transform duration-700 group-hover:scale-[1.04] group-hover:-translate-y-2 p-1">
                <Image
                  src="/images/voxa_join_preview.png"
                  alt="VOXA Welcome & Join Screen Screenshot"
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-2 left-2 right-2 p-1 bg-[#080808]/90 rounded border border-white/15 font-mono text-[9px] text-[#67B7FF] text-center font-bold tracking-wider uppercase">
                  JOIN INTERFACE
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:-ml-14 lg:z-10 bg-[#080808]/95 backdrop-blur-md p-7 md:p-9 rounded-2xl border border-white/12 space-y-4 transition-transform group-hover:-translate-y-1">
              <div className="font-mono text-xs text-[#67B7FF] tracking-[0.15em] uppercase font-bold">
                01 / {projectsData[0].category}
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-[#67B7FF] transition-colors">
                {projectsData[0].title}
              </h3>
              <p className="text-sm md:text-base text-[#8A8A8A] leading-relaxed">
                {projectsData[0].description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {projectsData[0].tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-[11px] text-[#8A8A8A]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-4 flex items-center gap-2 font-mono text-xs text-[#67B7FF] font-bold tracking-[0.15em] group-hover:underline">
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

          {/* PROJECT 02 — Text Left, Large Right Image Offset */}
          <div
            onClick={() => setSelectedProject(projectsData[1])}
            onMouseEnter={() => setCursorState("project", "VIEW CASE")}
            onMouseLeave={resetCursorState}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-4 lg:z-10 bg-[#080808]/95 backdrop-blur-md p-7 md:p-9 rounded-2xl border border-white/12 space-y-4 lg:-mr-14 order-2 lg:order-1 transition-transform group-hover:-translate-y-1">
              <div className="font-mono text-xs text-[#67B7FF] tracking-[0.15em] uppercase font-bold">
                02 / {projectsData[1].category}
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-[#67B7FF] transition-colors">
                {projectsData[1].title}
              </h3>
              <p className="text-sm md:text-base text-[#8A8A8A] leading-relaxed">
                {projectsData[1].description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {projectsData[1].tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-[11px] text-[#8A8A8A]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-4 flex items-center gap-2 font-mono text-xs text-[#67B7FF] font-bold tracking-[0.15em] group-hover:underline">
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="relative h-[340px] sm:h-[440px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-white/15 bg-[#111111] transition-all duration-500 group-hover:border-[#67B7FF]/60 group-hover:shadow-[0_0_60px_rgba(103,183,255,0.18)]">
                <Image
                  src={projectsData[1].image}
                  alt={projectsData[1].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* PROJECT 03 — DEEPFAKE DETECTION SYSTEM (Team Project Research Architecture) */}
          <div
            onClick={() => setSelectedProject(projectsData[2])}
            onMouseEnter={() => setCursorState("project", "VIEW CASE")}
            onMouseLeave={resetCursorState}
            className="group cursor-pointer max-w-6xl mx-auto space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-[#67B7FF] tracking-[0.15em] uppercase font-bold mb-1">
                  <span>03 / {projectsData[2].category}</span>
                  <span>•</span>
                  <span className="rounded bg-[#182F48] px-2.5 py-0.5 text-[#67B7FF]">TEAM PROJECT · 5 MEMBERS</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-[#67B7FF] transition-colors mt-1">
                  {projectsData[2].title}
                </h3>
              </div>
              <div className="font-mono text-xs text-[#8A8A8A]">
                {projectsData[2].subtitle}
              </div>
            </div>

            {/* Uncropped Research Architecture Diagram Container */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-[#080C14] transition-all duration-500 group-hover:border-[#67B7FF]/60 group-hover:shadow-[0_0_60px_rgba(103,183,255,0.22)] p-2">
              <Image
                src={projectsData[2].image}
                alt={projectsData[2].title}
                fill
                priority
                className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#080808]/90 backdrop-blur-md p-5 rounded-xl border border-white/12">
                <p className="text-xs md:text-sm text-[#8A8A8A] max-w-2xl leading-relaxed">
                  <strong className="text-[#F5F5F5]">EPICS Phase-II Research:</strong> Multi-architecture benchmarking (InceptionV3 + Attention vs VGG16 + MTCNN vs CNN vs LSTM).
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-[#67B7FF] font-bold tracking-[0.15em] shrink-0">
                  <span>EXPLORE RESEARCH CASE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
