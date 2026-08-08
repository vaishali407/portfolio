"use client";

import React, { useEffect, useRef } from "react";
import { useCursor } from "@/context/CursorContext";

const PRIMARY_SYMBOLS = ["+", "-", "=", "{", "}", "[", "]", "(", ")", ";", ":", "*", "/"];
const SECONDARY_SYMBOLS = ["<", ">", "_", "~", "&", "|"];
const RARE_SYMBOLS = ["</>", "<>", "&&", "||", "01"];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  size: number;
  color: string;
  opacity: number;
  rotation: number;
  rotSpeed: number;
  life: number;
  maxLife: number;
}

export const BlobCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { cursorType } = useCursor();
  const cursorTypeRef = useRef(cursorType);

  useEffect(() => {
    cursorTypeRef.current = cursorType;
  }, [cursorType]);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    let lastX = -100;
    let lastY = -100;
    let currentX = -100;
    let currentY = -100;

    const pickSymbol = () => {
      const rand = Math.random();
      if (rand < 0.65) {
        return PRIMARY_SYMBOLS[Math.floor(Math.random() * PRIMARY_SYMBOLS.length)];
      } else if (rand < 0.90) {
        return SECONDARY_SYMBOLS[Math.floor(Math.random() * SECONDARY_SYMBOLS.length)];
      } else {
        return RARE_SYMBOLS[Math.floor(Math.random() * RARE_SYMBOLS.length)];
      }
    };

    const pickColor = (isHover: boolean) => {
      const rand = Math.random();
      if (isHover) {
        // Higher probability of green on hover
        if (rand < 0.65) return "#67C96B";
        if (rand < 0.85) return "#EBE0C8";
        return "#8A8A8A";
      } else {
        // Muted gray / cream default
        if (rand < 0.55) return "#EBE0C8"; // Cream / off-white
        if (rand < 0.85) return "#8A8A8A"; // Muted gray
        return "#67C96B"; // Accent green
      }
    };

    const spawnParticle = (x: number, y: number) => {
      if (particles.length >= 26) {
        particles.shift(); // Hard limit on active particles
      }

      const isHover = cursorTypeRef.current !== "default";
      const offsetX = (Math.random() - 0.5) * 22;
      const offsetY = (Math.random() - 0.5) * 22;
      const size = Math.floor(Math.random() * 8) + 10; // 10px to 18px

      particles.push({
        x: x + offsetX,
        y: y + offsetY,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.7 - 0.2, // Subtle upward drift
        symbol: pickSymbol(),
        size: size,
        color: pickColor(isHover),
        opacity: Math.random() * 0.35 + 0.4, // 0.40 to 0.75
        rotation: (Math.random() - 0.5) * 0.4, // -20deg to +20deg
        rotSpeed: (Math.random() - 0.5) * 0.02,
        life: 0,
        maxLife: Math.floor(Math.random() * 25) + 25, // ~400ms to 800ms
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;

      const dist = Math.hypot(currentX - lastX, currentY - lastY);
      if (dist > 22) {
        // Spawn every ~22px of cursor movement
        spawnParticle(currentX, currentY);
        lastX = currentX;
        lastY = currentY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render small precise 5px cream dot cursor
      if (currentX > 0 && currentY > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = cursorTypeRef.current !== "default" ? "#67C96B" : "#EBE0C8";
        ctx.shadowColor = "rgba(103, 201, 107, 0.4)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      // Render and update active particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        const progress = p.life / p.maxLife;
        const currentOpacity = p.opacity * (1 - progress);

        if (p.life >= p.maxLife || currentOpacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px "JetBrains Mono", "Geist Mono", monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    />
  );
};
