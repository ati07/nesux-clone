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
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const variantStyle: Record<AnimationVariant, { name: string; duration: string }> = {
    "fade-up": { name: "fade-up", duration: "0.7s" },
    "fade-in": { name: "fade-in", duration: "0.6s" },
    "slide-left": { name: "slide-left", duration: "0.7s" },
    "slide-right": { name: "slide-right", duration: "0.7s" },
    "scale-in": { name: "scale-in", duration: "0.5s" },
  };

  const { name, duration } = variantStyle[variant];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        animationName: visible ? name : "none",
        animationDuration: duration,
        animationTimingFunction: "ease-out",
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
