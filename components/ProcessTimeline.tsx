"use client";

import { useEffect, useState } from "react";
import { GitBranch, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  { num: "01", name: "Scope Call", desc: "30 min, fixed quote after" },
  { num: "02", name: "Build", desc: "Milestone updates every sprint" },
  { num: "03", name: "Test", desc: "Your team reviews & approves" },
  { num: "04", name: "Deploy", desc: "Live in production, handed over" },
  { num: "05", name: "Support", desc: "30 days included post-launch" },
];

export default function ProcessTimeline() {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const timers = STEPS.map((_, i) =>
      setTimeout(() => setVisibleSteps(i + 1), 400 + i * 300)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="process-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-[#0A0A0A] relative"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center">
              <GitBranch className="h-4 w-4 text-[#D4FF00]" />
            </div>
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-white block">
                Process Timeline
              </span>
              <span className="text-[10px] text-zinc-500">
                HOW WE DELIVER
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left copy */}
          <ScrollReveal variant="slide-left" className="lg:col-span-4 space-y-5">
            <h2 className="font-serif-agency text-3xl md:text-4xl font-light leading-tight">
              From scope to <span className="gradient-text-duo">deploy.</span>
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-mono-agency">
              Every engagement follows the same sequence — no hidden loops, no
              scope creep. You&apos;ll know exactly what happens at each step
              and when to expect it.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-zinc-600 font-mono-agency">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
              Typical timeline: 2–6 weeks
            </div>
          </ScrollReveal>

          {/* Timeline panel */}
          <ScrollReveal variant="slide-right" delay={200} className="lg:col-span-8">
            <div className="bg-black/80 border border-white/10 rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0F0F0F]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-zinc-600 font-mono-agency">
                    process.log
                  </span>
                </div>
                <div />
              </div>

              {/* Timeline */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-0 md:gap-0 relative">
                  {STEPS.map((step, i) => (
                    <div
                      key={step.num}
                      className={`flex-1 transition-all duration-500 ${
                        i < visibleSteps
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="relative px-3 pb-6 md:pb-0">
                        {/* Number */}
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold font-mono-agency transition-all duration-500 ${
                              i < visibleSteps
                                ? "bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00]"
                                : "bg-zinc-900 border border-zinc-800 text-zinc-700"
                            }`}
                          >
                            {step.num}
                          </div>
                          {/* Active line indicator */}
                          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#D4FF00]/30 to-transparent" />
                        </div>

                        {/* Name */}
                        <div className="text-sm font-bold text-white font-serif-agency mb-1">
                          {step.name}
                        </div>

                        {/* Description */}
                        <div className="text-[11px] text-zinc-500 font-mono-agency">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connecting line (mobile) */}
                <div className="flex md:hidden flex-col gap-1 mt-2">
                  {STEPS.slice(0, -1).map((_, i) => (
                    <div
                      key={`line-${i}`}
                      className={`flex items-center justify-center transition-all duration-500 ${
                        i + 1 < visibleSteps ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4 text-zinc-700 rotate-90" />
                    </div>
                  ))}
                </div>

                {/* Bottom footer bar */}
                <div
                  className={`mt-6 pt-4 border-t border-white/5 transition-all duration-700 ${
                    visibleSteps >= STEPS.length
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-4 text-[10px] text-zinc-600 font-mono-agency">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF00]" />
                      Fixed-price quotes after scope call
                    </span>
                    <span className="text-zinc-800">|</span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF00]" />
                      No hidden retainers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
