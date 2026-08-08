"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useCursor } from "@/context/CursorContext";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();
  const ctaRef = useMagnetic(0.35);
  const heroRef = useRef<HTMLDivElement>(null);
  const imgLeftRef = useRef<HTMLAnchorElement>(null);
  const imgRightRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro staggered reveal animation
      gsap.from(".hero-stagger", {
        y: 25,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      // Bottom parallax project images entering from bottom
      if (imgLeftRef.current && imgRightRef.current) {
        gsap.to(imgLeftRef.current, {
          y: -35,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(imgRightRef.current, {
          y: -70,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full pt-32 pb-12 px-6 md:px-12 lg:px-16 flex flex-col justify-between bg-[#080808] bg-grain overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto w-full my-auto flex flex-col justify-between min-h-[82vh] space-y-8">
        
        {/* TOP: Identity Name (Visual weight clamp 1.8rem to 3.5rem) */}
        <div className="hero-stagger flex flex-col space-y-1">
          <h2 className="text-[clamp(1.8rem,3.2vw,3.5rem)] font-bold tracking-tight text-[#F5F5F5] uppercase">
            VAISHALI NEGI
          </h2>
          <span className="font-mono text-xs tracking-[0.18em] text-[#67C96B] font-semibold uppercase">
            FULL-STACK DEVELOPER & AI ENGINEER
          </span>
        </div>

        {/* MIDDLE: Primary Hero Statement (FULL-STACK DEVELOPER) */}
        <div className="hero-stagger grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline select-none cursor-default py-4 w-full max-w-full">
          {/* Left Heading: FULL-STACK */}
          <div className="lg:col-span-7 text-left">
            <div className="masked-hero-wrapper leading-none">
              <h1 className="masked-hero-base text-[clamp(3.2rem,7.4vw,7.6rem)] font-bold tracking-tight uppercase leading-[0.88]">
                FULL-STACK
              </h1>
              <h1 className="masked-hero-cream text-[clamp(3.2rem,7.4vw,7.6rem)] font-bold tracking-tight uppercase leading-[0.88]">
                FULL-STACK
              </h1>
            </div>
          </div>

          {/* Right Heading: DEVELOPER */}
          <div className="lg:col-span-5 text-left lg:text-right">
            <div className="masked-hero-wrapper leading-none">
              <h1 className="masked-hero-base text-[clamp(3.2rem,7.4vw,7.6rem)] font-bold tracking-tight uppercase leading-[0.88]">
                DEVELOPER
              </h1>
              <h1 className="masked-hero-cream text-[clamp(3.2rem,7.4vw,7.6rem)] font-bold tracking-tight uppercase leading-[0.88]">
                DEVELOPER
              </h1>
            </div>
          </div>
        </div>

        {/* LOWER-MIDDLE: Supporting Description on Left, VIEW WORK CTA on Right */}
        <div className="hero-stagger grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Subtitle Description */}
          <div className="lg:col-span-7">
            <p className="text-[17px] md:text-[19px] text-[#8A8A8A] font-sans font-light leading-[1.65] max-w-[560px]">
              Computer Science & Engineering student building full-stack applications, AI-powered products, and interactive web experiences.
            </p>
          </div>

          {/* Right Pill CTA: VIEW WORK → */}
          <div className="lg:col-span-5 flex items-center lg:justify-end">
            <a
              ref={ctaRef as React.RefObject<HTMLAnchorElement>}
              href="#work"
              onMouseEnter={() => setCursorState("button")}
              onMouseLeave={resetCursorState}
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-mono text-xs md:text-sm tracking-[0.15em] text-[#F5F5F5] font-semibold uppercase transition-all hover:border-[#67C96B] hover:bg-[#67C96B]/10 hover:text-[#67C96B] hover:shadow-[0_0_25px_rgba(103,201,107,0.25)]"
            >
              <span>VIEW WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* BOTTOM: Social Pills on Left, SCROLL TO EXPLORE on Right */}
        <div className="hero-stagger border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/vaishali407"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorState("link")}
              onMouseLeave={resetCursorState}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs text-[#8A8A8A] transition-all hover:border-[#67C96B] hover:text-[#67C96B]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>

            <a
              href="https://linkedin.com/in/vaishali-negi-ba7752289"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorState("link")}
              onMouseLeave={resetCursorState}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs text-[#8A8A8A] transition-all hover:border-[#67C96B] hover:text-[#67C96B]"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>

            <a
              href="mailto:vaishalinegi407@gmail.com"
              onMouseEnter={() => setCursorState("link")}
              onMouseLeave={resetCursorState}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs text-[#8A8A8A] transition-all hover:border-[#67C96B] hover:text-[#67C96B]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>EMAIL</span>
            </a>
          </div>

          <div className="font-mono text-xs text-[#777777] tracking-[0.15em]">
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>

        {/* Clean Floating Project Previews Emerging from Bottom */}
        <div className="hidden lg:grid grid-cols-2 gap-8 pt-4">
          <a
            href="#work"
            ref={imgLeftRef}
            onMouseEnter={() => setCursorState("project", "VIEW")}
            onMouseLeave={resetCursorState}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-white/15 bg-[#111111] shadow-xl transition-all hover:border-[#67C96B]/50"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src="/images/voxa_preview.png"
                alt="VOXA Platform Teaser"
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-3 font-mono text-[11px] text-[#8A8A8A] flex justify-between bg-[#111111] border-t border-white/10 group-hover:text-[#F5F5F5] transition-colors">
              <span>VOXA — MULTILINGUAL CHAT</span>
              <span className="text-[#67C96B] font-bold">01</span>
            </div>
          </a>

          <a
            href="#work"
            ref={imgRightRef}
            onMouseEnter={() => setCursorState("project", "VIEW")}
            onMouseLeave={resetCursorState}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-white/15 bg-[#111111] shadow-xl transition-all hover:border-[#67C96B]/50"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src="/images/smart_meeting_preview.png"
                alt="Smart Meeting Assistant Teaser"
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-3 font-mono text-[11px] text-[#8A8A8A] flex justify-between bg-[#111111] border-t border-white/10 group-hover:text-[#F5F5F5] transition-colors">
              <span>SMART MEETING ASSISTANT</span>
              <span className="text-[#67C96B] font-bold">02</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

