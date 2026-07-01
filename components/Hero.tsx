"use client";

import { useEffect, useState } from "react";
import { Activity, ArrowRight, Cpu, Radio } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const diagnostics = [
  { label: "WEB DEV DEPT", value: "ACTIVE / FASTAPI-REACT", accent: false },
  { label: "AI AGENT ENGINE", value: "COGNITIVE CORE v4.8", accent: false },
  { label: "CRM INTEGRATION", value: "OPERATIONAL", accent: true },
  { label: "DIGITAL REACH", value: "99.9% ATTRIBUTION", accent: false },
  { label: "DATABASE STATUS", value: "MONGO_LIVE [OK]", accent: false },
];

const FLICKER_CHARS = "!@#$%^&*()_+-=<>?/{}[]|~";

function flickerText(text: string, intensity = 0.06): string {
  return text
    .split("")
    .map((c) => (Math.random() < intensity ? FLICKER_CHARS[Math.floor(Math.random() * FLICKER_CHARS.length)] : c))
    .join("");
}

export default function Hero() {
  const [bootPhase, setBootPhase] = useState(0);
  const [bootText, setBootText] = useState("...");
  const [latency, setLatency] = useState("--");
  const [uptime, setUptime] = useState("--");

  useEffect(() => {
    const phases = [
      { text: "INITIALIZING KERNEL...", delay: 400 },
      { text: "MOUNTING SYSTEM MODULES...", delay: 600 },
      { text: "ESTABLISHING SECURE CHANNEL...", delay: 500 },
      { text: "ALL SYSTEMS NOMINAL.", delay: 300 },
    ];

    let cancelled = false;

    async function boot() {
      for (let i = 0; i < phases.length; i++) {
        await new Promise((r) => setTimeout(r, phases[i].delay));
        if (cancelled) return;
        setBootPhase(i + 1);
        setBootText(phases[i].text);
      }

      // Start flickering the boot text
      const flickerInterval = setInterval(() => {
        if (cancelled) { clearInterval(flickerInterval); return; }
        setBootText((prev) => {
          // Keep the last phase stable, just add terminal cursor feel
          return prev + "";
        });
      }, 2000);
    }

    // Animate live stats after boot
    setTimeout(() => {
      if (!cancelled) {
        setLatency("12");
        setUptime("100");
      }
    }, 2200);

    boot();

    // Uptime counter
    const uptimeInterval = setInterval(() => {
      setUptime((prev) => {
        const n = parseFloat(prev);
        if (isNaN(n) || n >= 99.99) return "100.00";
        return (n + 0.01).toFixed(2);
      });
    }, 3000);

    // Latency flicker
    const latencyInterval = setInterval(() => {
      setLatency(String(Math.floor(Math.random() * 8) + 8));
    }, 4000);

    return () => {
      cancelled = true;
      clearInterval(uptimeInterval);
      clearInterval(latencyInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-12 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0F0F0F] via-[#0C0C0C] to-[#0A0A0A]">
      {/* Top glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212,255,0,0.12) 0%, rgba(0,212,255,0.05) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        {/* Left: main content */}
        <div className="lg:col-span-8 space-y-8">
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Activity className="h-3 w-3 text-[#D4FF00] animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] text-[#D4FF00] uppercase font-bold">
                Systems Integrity: Nominal
              </span>
            </div>
          </ScrollReveal>

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
              NEXUS is an elite digital engineering firm. We construct bespoke
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

        {/* Right: diagnostics panel */}
        <ScrollReveal variant="slide-right" delay={400} className="lg:col-span-4">
          <div className="glass-strong rounded-lg p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2">
                <Cpu className="h-3 w-3 text-[#D4FF00]" />
                <span className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                  System Diagnostics
                </span>
              </div>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]" />
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {diagnostics.map((d, i) => (
                <ScrollReveal key={d.label} variant="slide-left" delay={500 + i * 80}>
                  <div className="flex justify-between items-center py-1.5 px-2 rounded hover:bg-white/[0.02] transition-colors">
                    <span className="text-zinc-500">{d.label}</span>
                    <span
                      className={
                        d.accent
                          ? "text-[#D4FF00] font-bold"
                          : "text-white font-bold"
                      }
                    >
                      {d.value}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-[10px] text-zinc-500">
              <div>
                <span className="block text-zinc-600 mb-1">LATENCY</span>
                <span className="text-white font-bold text-xs font-mono">
                  {latency}MS
                </span>
              </div>
              <div>
                <span className="block text-zinc-600 mb-1">UPTIME</span>
                <span className="text-[#D4FF00] font-bold text-xs font-mono">
                  {uptime}%
                </span>
              </div>
              <div>
                <span className="block text-zinc-600 mb-1">BOOT</span>
                <span className="text-cyan font-bold text-xs font-mono">
                  {bootPhase}/{4}
                </span>
              </div>
            </div>

            {/* Boot sequence text */}
            <div className="bg-black/50 rounded px-3 py-2 border border-white/5">
              <span className="text-[10px] text-zinc-600 font-mono">
                {">"} {bootText}
                <span className="inline-block w-1.5 h-3.5 bg-[#D4FF00] ml-0.5 animate-typing-cursor" />
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
