"use client";

import { useRef } from "react";
import { Hexagon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CLIENTS = [
  { name: "Aetheris", tag: "DEFENSE / AI", span: "md:col-span-3" },
  { name: "Voidforge", tag: "FINANCE / BLOCKCHAIN", span: "md:col-span-3" },
  { name: "Cypra", tag: "HEALTHTECH / DIAGNOSTICS", span: "md:col-span-3" },
  { name: "Novera", tag: "ENERGY / INFRASTRUCTURE", span: "md:col-span-3" },
  { name: "PulseArc", tag: "EDTECH / SCALE", span: "md:col-span-4" },
  { name: "Ironmark", tag: "LOGISTICS / AUTOMATION", span: "md:col-span-4" },
  { name: "Solara", tag: "RETAIL / ANALYTICS", span: "md:col-span-4" },
  { name: "Zentra", tag: "GOV / SECURITY", span: "md:col-span-6" },
  { name: "BeaconX", tag: "MEDIA / STREAMING", span: "md:col-span-6" },
];

export default function Clients() {
  return (
    <section id="clients-section" className="px-4 md:px-12 py-24 border-b border-white/10 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <ScrollReveal variant="fade-up">
          <div className="text-center space-y-4">
            <span className="text-xs text-[#D4FF00] tracking-[0.3em] uppercase">
              Trusted Partners
            </span>
            <h2 className="font-serif-agency text-4xl md:text-5xl font-light">
              ENGINEERING FOR THE <span className="gradient-text-lime">ELITE</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Leading organizations across defense, finance, health, and
              infrastructure rely on RABNIX systems for mission-critical
              operations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {CLIENTS.map((client, i) => (
            <ScrollReveal
              key={client.name}
              variant="fade-up"
              delay={100 + i * 60}
              className={client.span}
            >
              <div className="group relative bg-[#121212] border border-white/10 rounded-lg px-6 py-8 hover:border-[#D4FF00]/30 transition-all duration-500 h-full flex flex-col items-center justify-center text-center">
                {/* Hover glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4FF00]/0 via-[#D4FF00]/5 to-[#D4FF00]/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4FF00]/60 to-transparent transition-all duration-500" />

                <Hexagon className="h-6 w-6 text-zinc-700 group-hover:text-[#D4FF00]/60 transition-colors duration-300 mb-4" />
                <h3 className="font-serif-agency text-xl md:text-2xl text-zinc-400 group-hover:text-white transition-colors duration-300">
                  {client.name}
                </h3>
                <span className="text-[10px] tracking-[0.2em] text-zinc-700 group-hover:text-[#D4FF00]/50 mt-2 transition-colors duration-300">
                  {client.tag}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="text-center">
            <p className="text-[11px] text-zinc-700 font-mono-agency tracking-wider">
              <span className="text-[#D4FF00]/60">[+]</span> 50+ ENGINEERED SYSTEMS
              DEPLOYED ACROSS 12 INDUSTRIES{" "}
              <span className="text-[#D4FF00]/60">[+]</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
