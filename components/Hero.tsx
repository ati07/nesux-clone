"use client";

import { Activity, ArrowRight, Radio } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import HeroVisual from "./HeroVisual";
import SeoDiagnostic from "./SeoDiagnostic";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-12 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-white/10">
      {/* Full background: canvas 3D visual */}
      <HeroVisual />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/30 via-[#0A0A0A]/10 to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

      {/* Top glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212,255,0,0.12) 0%, rgba(0,212,255,0.05) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Activity className="h-3 w-3 text-[#D4FF00] animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] text-[#D4FF00] uppercase font-bold">
                Systems Integrity: Nominal
              </span>
            </div>
          </ScrollReveal>

          {/* Hidden heading for search engines and screen readers — brand disambiguation */}
          <h2 className="sr-only">
            RABNIX Digital Engineering Firm — Bespoke Websites, CRM, AI Agents, and Custom Software Development
          </h2>

          <ScrollReveal variant="fade-up" delay={250}>
            <h1 className="font-serif-agency text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none font-light">
              We Architect
              <br />
              <span className="gradient-text-duo italic">High-Precision</span>
              <br />
              Digital Engines.
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={400}>
            <p className="text-zinc-400 font-mono-agency text-sm md:text-base leading-relaxed max-w-xl">
              RABNIX is an elite digital engineering firm. We construct bespoke
              websites, tailored CRM platforms, robust custom software, and
              complex AI Agent workforces that operate at peak efficiency.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={550}>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services-section"
                className="group px-6 py-4 bg-white text-black font-mono-agency text-xs uppercase tracking-wider hover:bg-[#D4FF00] hover:shadow-[0_0_30px_rgba(212,255,0,0.3)] transition-all duration-300 flex items-center rounded-sm relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Services
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#booking-section"
                className="px-6 py-4 border border-white/20 text-white font-mono-agency text-xs uppercase tracking-wider hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all duration-300 rounded-sm flex items-center gap-2 group"
              >
                <Radio className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Schedule Appointment
              </a>
            </div>
          </ScrollReveal>
          </div>

          {/* Right side — SEO diagnostic panel */}
          <ScrollReveal variant="fade-in" delay={700} className="hidden lg:block shrink-0 lg:ml-16">
            <SeoDiagnostic />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
