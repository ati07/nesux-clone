"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Drifting ambient orbs */}
      <div
        className="ambient-glow w-[500px] h-[500px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(212,255,0,0.3) 0%, rgba(0,212,255,0.1) 40%, transparent 70%)",
          top: "10%",
          left: "5%",
          animation: "orb-drift 25s ease-in-out infinite",
        }}
      />
      <div
        className="ambient-glow w-[400px] h-[400px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.25) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)",
          bottom: "20%",
          right: "10%",
          animation: "orb-drift 30s ease-in-out infinite reverse",
        }}
      />
      <div
        className="ambient-glow w-[300px] h-[300px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(212,255,0,0.05) 40%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "orb-drift 35s ease-in-out infinite 5s",
        }}
      />

      {/* Cursor-follow glow */}
      <MouseGlow />
    </div>
  );
}

function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const handleMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-[300px] h-[300px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
      style={{
        background:
          "radial-gradient(circle, rgba(212,255,0,0.08) 0%, transparent 70%)",
        transition: "opacity 1s ease",
      }}
    />
  );
}
