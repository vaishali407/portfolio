"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useMagnetic(strength: number = 0.35) {
  const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseMove = (evt: Event) => {
      const e = evt as MouseEvent;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = (e.clientX - centerX) * strength;
      const distY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: distX,
        y: distY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return elementRef;
}
