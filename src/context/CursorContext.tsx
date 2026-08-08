"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import gsap from "gsap";

export type CursorType = "default" | "text" | "project" | "button" | "link";

interface CursorContextType {
  cursorType: CursorType;
  cursorLabel: string;
  setCursorState: (type: CursorType, label?: string) => void;
  resetCursorState: () => void;
  isTouchDevice: boolean;
  mousePos: React.RefObject<{ x: number; y: number }>;
  lerpPos: React.RefObject<{ x: number; y: number }>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lerpPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const checkTouch = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    // Initial mouse center position
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    lerpPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // GSAP Ticker for smooth lerping
    const ticker = gsap.ticker.add(() => {
      const ease = 0.12; // Lerp inertia factor
      lerpPos.current.x += (mousePos.current.x - lerpPos.current.x) * ease;
      lerpPos.current.y += (mousePos.current.y - lerpPos.current.y) * ease;

      // Update CSS variables for high-performance localized masking
      document.documentElement.style.setProperty("--cursor-x", `${lerpPos.current.x}px`);
      document.documentElement.style.setProperty("--cursor-y", `${lerpPos.current.y}px`);
    });

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  const setCursorState = (type: CursorType, label: string = "") => {
    setCursorType(type);
    setCursorLabel(label);
  };

  const resetCursorState = () => {
    setCursorType("default");
    setCursorLabel("");
  };

  return (
    <CursorContext.Provider
      value={{
        cursorType,
        cursorLabel,
        setCursorState,
        resetCursorState,
        isTouchDevice,
        mousePos,
        lerpPos,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
