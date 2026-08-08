"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface TypewriterIntroProps {
  onComplete: () => void;
}

const MESSAGES = [
  "{ hi there }",
  "{ I'm Vaishali }",
  "{ I build things }",
];

export const TypewriterIntro: React.FC<TypewriterIntroProps> = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [caretVisible, setCaretVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeRef = useRef(true);

  const stateRef = useRef({
    messageIndex: 0,
    charIndex: 0,
    phase: "typing" as "typing" | "pause-typing" | "deleting" | "pause-deleting" | "complete",
  });

  const finishIntro = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    activeRef.current = false;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        },
      });
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    activeRef.current = true;

    // Blinking caret interval
    const caretInterval = setInterval(() => {
      setCaretVisible((prev) => !prev);
    }, 500);

    const tick = () => {
      if (!activeRef.current) return;

      const { messageIndex, charIndex, phase } = stateRef.current;
      const currentMessage = MESSAGES[messageIndex];

      if (!currentMessage) {
        finishIntro();
        return;
      }

      if (phase === "typing") {
        const nextCharIndex = charIndex + 1;
        const nextText = currentMessage.slice(0, nextCharIndex);
        setDisplayedText(nextText);
        stateRef.current.charIndex = nextCharIndex;

        if (nextCharIndex >= currentMessage.length) {
          stateRef.current.phase = "pause-typing";
          timeoutRef.current = setTimeout(tick, 800); // Pause 800ms after typing
        } else {
          timeoutRef.current = setTimeout(tick, 70); // 70ms per char typing speed
        }
      } else if (phase === "pause-typing") {
        stateRef.current.phase = "deleting";
        timeoutRef.current = setTimeout(tick, 45); // 45ms per char deleting speed
      } else if (phase === "deleting") {
        const nextCharIndex = charIndex - 1;
        const nextText = currentMessage.slice(0, Math.max(0, nextCharIndex));
        setDisplayedText(nextText);
        stateRef.current.charIndex = Math.max(0, nextCharIndex);

        if (nextCharIndex <= 0) {
          stateRef.current.phase = "pause-deleting";
          timeoutRef.current = setTimeout(tick, 300); // Pause 300ms between messages
        } else {
          timeoutRef.current = setTimeout(tick, 45); // 45ms per char deleting speed
        }
      } else if (phase === "pause-deleting") {
        const nextMessageIndex = messageIndex + 1;
        if (nextMessageIndex < MESSAGES.length) {
          stateRef.current.messageIndex = nextMessageIndex;
          stateRef.current.charIndex = 0;
          stateRef.current.phase = "typing";
          timeoutRef.current = setTimeout(tick, 70);
        } else {
          stateRef.current.phase = "complete";
          finishIntro();
        }
      }
    };

    // Start tick sequence
    timeoutRef.current = setTimeout(tick, 100);

    return () => {
      activeRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearInterval(caretInterval);
    };
  }, []);

  // Helper to render text with accent green brackets
  const renderFormattedText = () => {
    if (!displayedText) return null;
    const hasOpening = displayedText.startsWith("{");
    const hasClosing = displayedText.endsWith("}");

    if (!hasOpening && !hasClosing) {
      return <span>{displayedText}</span>;
    }

    let core = displayedText;
    if (hasOpening) core = core.slice(1);
    if (hasClosing) core = core.slice(0, -1);

    return (
      <span>
        {hasOpening && <span className="text-[#67B7FF] font-bold">{'{'}</span>}
        {core}
        {hasClosing && <span className="text-[#67B7FF] font-bold">{'}'}</span>}
      </span>
    );
  };

  return (
    <div
      ref={containerRef}
      onClick={finishIntro}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] bg-grain text-[#F5F5F5] select-none cursor-pointer transition-opacity"
    >
      <div className="font-mono text-2xl sm:text-3xl md:text-4xl tracking-wider flex items-center min-h-[3rem]">
        {renderFormattedText()}

        {/* Blinking Caret */}
        <span
          className={`inline-block w-2.5 h-7 md:h-9 ml-2 bg-[#67B7FF] rounded-sm transition-opacity duration-100 ${
            caretVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Subtle Skip Indicator */}
      <span className="absolute bottom-8 font-mono text-[11px] tracking-[0.2em] text-[#777777] uppercase hover:text-[#67B7FF] transition-colors">
        CLICK ANYWHERE TO SKIP
      </span>
    </div>
  );
};
