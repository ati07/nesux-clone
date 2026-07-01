"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

interface Props {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number; // ms
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const animationMap: Record<AnimationVariant, string> = {
    "fade-up": "fade-up 0.7s ease-out forwards",
    "fade-in": "fade-in 0.6s ease-out forwards",
    "slide-left": "slide-left 0.7s ease-out forwards",
    "slide-right": "slide-right 0.7s ease-out forwards",
    "scale-in": "scale-in 0.5s ease-out forwards",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        animation: visible ? animationMap[variant] : "none",
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
