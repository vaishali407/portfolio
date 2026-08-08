"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tech: string[];
  description: string;
  highlight: string;
  image: string;
  details: {
    overview: string;
    keyFeatures: string[];
    modelsOrArchitecture?: string[];
  };
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 bg-[#111111] p-6 md:p-10 shadow-2xl text-[#F5F5F5]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-6 right-6 p-2 rounded-full border border-white/20 bg-white/5 hover:border-[#67B7FF] hover:text-[#67B7FF] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#67B7FF] uppercase tracking-widest mb-3">
          <span>PROJECT CASE STUDY</span>
          <span>•</span>
          <span>{project.category}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] uppercase mb-2">
          {project.title}
        </h2>
        <p className="text-base md:text-lg text-[#8A8A8A] font-light mb-8">
          {project.subtitle}
        </p>

        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden border border-white/10 mb-8 bg-[#080808]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-xs text-[#777777] uppercase tracking-wider mb-2">
              OVERVIEW
            </h3>
            <p className="text-base text-[#8A8A8A] leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* Highlight Badge */}
          <div className="rounded-xl border border-[#67B7FF]/30 bg-[#182F48]/40 p-5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#67B7FF] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-mono text-xs text-[#67B7FF] uppercase font-bold mb-1">
                KEY TECHNICAL HIGHLIGHT
              </h4>
              <p className="text-sm text-[#F5F5F5]">{project.highlight}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-mono text-xs text-[#777777] uppercase tracking-wider mb-3">
              CORE CAPABILITIES
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.details.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 font-mono text-xs text-[#8A8A8A] border border-white/10 rounded-lg p-3 bg-white/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#67B7FF]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="font-mono text-xs text-[#777777] uppercase tracking-wider mb-3">
              TECHNOLOGIES USED
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-mono text-xs text-[#F5F5F5]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-mono text-xs text-[#F5F5F5] hover:border-[#67B7FF] hover:text-[#67B7FF] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#67B7FF] px-5 py-2.5 font-mono text-xs font-bold text-[#080808] hover:bg-[#8CC8FF] transition-colors"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="font-mono text-xs text-[#777777] hover:text-[#F5F5F5] underline"
            >
              CLOSE WINDOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
