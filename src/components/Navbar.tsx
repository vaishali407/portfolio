"use client";

import React, { useState, useEffect } from "react";
import { useCursor } from "@/context/CursorContext";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const { setCursorState, resetCursorState } = useCursor();
  const resumeBtnRef = useMagnetic(0.3);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  const showHeader = isVisible || mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 py-4 bg-[#080808]/80 backdrop-blur-md border-b border-white/10 transition-all duration-500 ease-in-out transform ${
          showHeader
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between">
          {/* Left Branding */}
          <a
            href="#"
            onMouseEnter={() => setCursorState("button")}
            onMouseLeave={resetCursorState}
            className="group flex flex-col font-mono text-xs tracking-widest text-[#F5F5F5] uppercase transition-opacity hover:opacity-80"
          >
            <span className="font-bold text-sm tracking-[0.15em] text-[#F5F5F5] group-hover:text-[#67B7FF] transition-colors">
              VAISHALI NEGI
            </span>
            <span className="text-[11px] text-[#777777] font-normal tracking-wider group-hover:text-[#8A8A8A] transition-colors">
              FULL-STACK DEVELOPER
            </span>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setCursorState("link")}
                onMouseLeave={resetCursorState}
                className="font-mono text-xs md:text-sm tracking-[0.15em] text-[#8A8A8A] transition-colors hover:text-[#67B7FF]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action (Desktop Resume) */}
          <div className="hidden md:block">
            <a
              ref={resumeBtnRef as React.RefObject<HTMLAnchorElement>}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorState("button")}
              onMouseLeave={resetCursorState}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-xs tracking-[0.15em] text-[#F5F5F5] transition-all hover:border-[#67B7FF] hover:bg-[#67B7FF]/10 hover:text-[#67B7FF]"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#F5F5F5] hover:text-[#67B7FF] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#080808] flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col space-y-8 font-mono text-xl tracking-wider">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#8A8A8A] hover:text-[#67B7FF] transition-colors flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#777777]">0{idx + 1}</span>
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#67B7FF] bg-[#67B7FF]/10 px-6 py-4 font-mono text-sm tracking-widest text-[#67B7FF]"
            >
              <span>DOWNLOAD RESUME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
