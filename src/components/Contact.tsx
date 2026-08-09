"use client";

import React, { useState } from "react";
import { useCursor } from "@/context/CursorContext";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export const Contact: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();
  const contactBtnRef = useMagnetic(0.4);
  const [copied, setCopied] = useState(false);

  const email = "vaishalinegi407@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-40 md:py-48 px-6 md:px-12 bg-[#080808] bg-grain border-t border-white/10 relative">
      <div className="max-w-[1600px] mx-auto space-y-20">
        {/* MAIN SECTION HEADING - Large & Prominent Chapter Title */}
        <div
          onMouseEnter={() => setCursorState("text")}
          onMouseLeave={resetCursorState}
          className="group relative inline-block cursor-default select-none mb-12"
        >
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-none transition-all duration-300">
            <span className="text-[#67B7FF] inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_20px_rgba(103,183,255,0.4)]">
              06
            </span>
            <span className="text-[#777777] mx-3 md:mx-4 font-light">—</span>
            <span className="text-[#F5F5F5] group-hover:text-white transition-colors">
              CONTACT
            </span>
          </h1>
          {/* Subtle blue accent underline on hover */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#67B7FF] via-[#67B7FF]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-2" />
        </div>

        {/* Oversized Statement Heading */}
        <div
          onMouseEnter={() => setCursorState("text")}
          onMouseLeave={resetCursorState}
          className="space-y-2 select-none"
        >
          <h2 className="text-[clamp(3.8rem,9vw,10rem)] font-bold tracking-tighter uppercase leading-[0.88] text-[#F5F5F5]">
            LET&apos;S BUILD
          </h2>
          <h2 className="text-[clamp(3.8rem,9vw,10rem)] font-bold tracking-tighter uppercase leading-[0.88] text-[#67B7FF]">
            SOMETHING.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-8">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl md:text-2xl text-[#8A8A8A] font-light leading-relaxed max-w-xl">
              Have an idea or want to work together? Let&apos;s connect.
            </p>

            {/* Email Copy Card */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href={`mailto:${email}`}
                onMouseEnter={() => setCursorState("button")}
                onMouseLeave={resetCursorState}
                className="font-mono text-lg md:text-xl text-[#F5F5F5] hover:text-[#67B7FF] transition-colors underline underline-offset-4"
              >
                {email}
              </a>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursorState("button")}
                onMouseLeave={resetCursorState}
                className="rounded-full border border-white/20 bg-white/5 p-2.5 text-[#8A8A8A] hover:border-[#67B7FF] hover:text-[#67B7FF] transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-[#67B7FF]" /> : <Copy className="w-4 h-4" />}
              </button>

              {copied && (
                <span className="font-mono text-xs text-[#67B7FF] animate-fade-in">
                  COPIED TO CLIPBOARD!
                </span>
              )}
            </div>
          </div>

          {/* Magnetic CTA Button */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <a
              ref={contactBtnRef as React.RefObject<HTMLAnchorElement>}
              href={`mailto:${email}`}
              onMouseEnter={() => setCursorState("button")}
              onMouseLeave={resetCursorState}
              className="group relative inline-flex h-36 w-36 md:h-44 md:w-44 items-center justify-center rounded-full border border-[#67B7FF] bg-[#182F48]/40 text-center transition-all duration-300 hover:bg-[#67B7FF] hover:shadow-[0_0_50px_rgba(103,183,255,0.4)]"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-xs tracking-widest text-[#67B7FF] uppercase font-bold group-hover:text-[#080808] transition-colors">
                  GET IN TOUCH
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#67B7FF] group-hover:text-[#080808] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          </div>
        </div>

        {/* Social Links Footer Bar */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6 font-mono text-xs text-[#8A8A8A]">
            <a
              href="https://github.com/vaishali407"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorState("link")}
              onMouseLeave={resetCursorState}
              className="flex items-center gap-1.5 hover:text-[#67B7FF] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://linkedin.com/in/vaishali-negi-ba7752289"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorState("link")}
              onMouseLeave={resetCursorState}
              className="flex items-center gap-1.5 hover:text-[#67B7FF] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={`mailto:${email}`}
              onMouseEnter={() => setCursorState("link")}
              onMouseLeave={resetCursorState}
              className="flex items-center gap-1.5 hover:text-[#67B7FF] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="font-mono text-xs text-[#777777]">
            DESIGNED & DEVELOPED BY VAISHALI NEGI
          </div>
        </div>
      </div>
    </section>
  );
};
