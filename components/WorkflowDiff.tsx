"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Timer, ArrowDown, Clock, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const BEFORE_STEPS = [
  { n: "01", text: "Read incoming request" },
  { n: "02", text: "Cross-check order in 2 systems" },
  { n: "03", text: "Draft reply manually" },
  { n: "04", text: "Wait for manager approval" },
  { n: "05", text: "Send and log in CRM" },
];

const AFTER_STEPS = [
  { n: "01", text: "Agent reads and triages request" },
  { n: "02", text: "Drafts and sends reply" },
  { n: "03", text: "Flags edge cases to human only" },
];

export default function WorkflowDiff() {
  const [visibleBefore, setVisibleBefore] = useState(0);
  const [visibleAfter, setVisibleAfter] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Animate before steps
    const t1 = setTimeout(() => setVisibleBefore(1), 400);
    const t2 = setTimeout(() => setVisibleBefore(2), 700);
    const t3 = setTimeout(() => setVisibleBefore(3), 1000);
    const t4 = setTimeout(() => setVisibleBefore(4), 1300);
    const t5 = setTimeout(() => setVisibleBefore(5), 1600);

    // Animate after steps
    const a1 = setTimeout(() => setVisibleAfter(1), 2200);
    const a2 = setTimeout(() => setVisibleAfter(2), 2500);
    const a3 = setTimeout(() => setVisibleAfter(3), 2800);

    // Show result summary
    const r = setTimeout(() => setShowResult(true), 3400);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5);
      clearTimeout(a1); clearTimeout(a2); clearTimeout(a3);
      clearTimeout(r);
    };
  }, []);

  return (
    <section
      id="workflow-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] relative"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center">
                <Zap className="h-4 w-4 text-[#D4FF00]" />
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-white block">
                  Automation Impact
                </span>
                <span className="text-[10px] text-zinc-500">
                  BEFORE → AFTER WORKFLOW
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-[10px] text-zinc-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]" />
              </span>
              <span className="tracking-wider">LIVE_DIFF</span>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <span className="hidden sm:inline text-zinc-600">
                <Timer className="h-3 w-3 inline mr-1" />
                REAL_WORLD_DATA
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison panels — side by side */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-3">
          {/* Before panel */}
          <ScrollReveal variant="fade-up" delay={150} className="flex-1">
            <div className="bg-black/80 border border-white/10 rounded-lg p-5 min-h-[380px] flex flex-col">
              {/* Terminal header */}
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="text-zinc-700 text-[9px] tracking-wider ml-2 uppercase">
                  before.log — manual
                </span>
              </div>

              <div className="space-y-1 flex-1">
                <div className="text-xs text-red-400/60 mb-3 font-mono-agency">
                  // {BEFORE_STEPS.length} manual steps · avg 2 day turnaround
                </div>
                {BEFORE_STEPS.map((step, i) => (
                  <div
                    key={`before-${i}`}
                    className={`flex items-center gap-3 py-2 px-3 rounded transition-all duration-500 ${
                      i < visibleBefore
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    } ${
                      i < visibleBefore && i === visibleBefore - 1
                        ? "bg-red-950/20 border border-red-900/30"
                        : "border border-transparent"
                    }`}
                  >
                    <span className="text-[10px] text-zinc-600 font-mono-agency w-5 shrink-0">
                      {step.n}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono-agency">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats footer */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-6">
                <div>
                  <div className="text-2xl font-bold text-red-400 font-mono-agency">2 days</div>
                  <div className="text-[9px] text-zinc-600 uppercase tracking-wider mt-1">
                    avg turnaround
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400/60 font-mono-agency">5</div>
                  <div className="text-[9px] text-zinc-600 uppercase tracking-wider mt-1">
                    manual steps
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Arrow connector */}
          <div className="flex items-center justify-center lg:py-0 py-2">
            <ArrowRight className="hidden lg:block h-8 w-8 text-[#D4FF00]/40 shrink-0" />
            <ArrowDown className="lg:hidden h-6 w-6 text-[#D4FF00]/40 shrink-0" />
          </div>

          {/* After panel */}
          <ScrollReveal variant="fade-up" delay={250} className="flex-1">
            <div className="bg-black/80 border border-[#D4FF00]/20 rounded-lg p-5 min-h-[380px] flex flex-col relative overflow-hidden">
              {/* Glow border top */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4FF00]/30 to-transparent" />

              {/* Terminal header */}
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="text-zinc-700 text-[9px] tracking-wider ml-2 uppercase">
                  after.log — automated
                </span>
              </div>

              <div className="space-y-1 flex-1">
                <div className="text-xs text-emerald-400/60 mb-3 font-mono-agency">
                  // {AFTER_STEPS.length} automated steps · avg 10 min turnaround
                </div>
                {AFTER_STEPS.map((step, i) => (
                  <div
                    key={`after-${i}`}
                    className={`flex items-center gap-3 py-2 px-3 rounded transition-all duration-500 ${
                      i < visibleAfter
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    } ${
                      i < visibleAfter && i === visibleAfter - 1
                        ? "bg-emerald-950/20 border border-emerald-900/30"
                        : "border border-transparent"
                    }`}
                  >
                    <span className="text-[10px] text-zinc-600 font-mono-agency w-5 shrink-0">
                      {step.n}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono-agency">
                      {step.text}
                    </span>
                    <span className="ml-auto text-emerald-400/60">
                      <Zap className="h-3 w-3" />
                    </span>
                  </div>
                ))}

                {/* Ghost rows for visual balance */}
                {AFTER_STEPS.length < BEFORE_STEPS.length &&
                  Array.from({
                    length: BEFORE_STEPS.length - AFTER_STEPS.length,
                  }).map((_, i) => (
                    <div
                      key={`ghost-${i}`}
                      className="flex items-center gap-3 py-2 px-3 opacity-0"
                    >
                      <span className="text-[10px] w-5 shrink-0">&nbsp;</span>
                    </div>
                  ))}
              </div>

              {/* Stats footer */}
              <div
                className={`mt-4 pt-4 border-t border-white/5 transition-all duration-700 ${
                  showResult
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400 font-mono-agency flex items-center gap-2">
                      10 min
                      <span className="text-xs text-zinc-600 font-normal line-through">
                        2 days
                      </span>
                    </div>
                    <div className="text-[9px] text-zinc-600 uppercase tracking-wider mt-1">
                      avg turnaround
                    </div>
                  </div>
                  <div className="h-10 w-px bg-white/5" />
                  <div>
                    <div className="text-2xl font-bold text-emerald-400 font-mono-agency">
                      3
                    </div>
                    <div className="text-[9px] text-zinc-600 uppercase tracking-wider mt-1">
                      automated steps
                    </div>
                  </div>
                  <div className="h-10 w-px bg-white/5" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-emerald-400" />
                      <span className="text-lg font-bold text-emerald-400 font-mono-agency">
                        99.6%
                      </span>
                    </div>
                    <div className="text-[9px] text-zinc-600 uppercase tracking-wider mt-1">
                      autonomously handled
                    </div>
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
