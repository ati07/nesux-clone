"use client";

import { useState, useEffect } from "react";
import { Calculator, Timer, IndianRupee, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function RoiCalculator() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(50);

  const monthlyHours = hours * 4.3;
  const savedHours = Math.round(monthlyHours * 0.8);
  const savedMoney = Math.round(savedHours * rate);
  const yearlyMoney = savedMoney * 12;

  return (
    <section
      id="roi-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] relative"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <ScrollReveal variant="fade-up">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center">
              <Calculator className="h-4 w-4 text-[#D4FF00]" />
            </div>
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-white block">
                ROI Calculator
              </span>
              <span className="text-[10px] text-zinc-500">ESTIMATE YOUR SAVINGS</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left copy */}
          <ScrollReveal variant="slide-left" className="lg:col-span-4 space-y-5">
            <h2 className="font-serif-agency text-3xl md:text-4xl font-light leading-tight">
              What&apos;s automation <span className="gradient-text-duo">worth</span> to you?
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-mono-agency">
              Move the sliders to estimate how much time and money AI
              automation would save your team each month.
            </p>
            <div className="text-[10px] text-zinc-600 font-mono-agency flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-[#D4FF00]" />
              Based on real outcomes from RABNIX deployments
            </div>
          </ScrollReveal>

          {/* Calculator panel */}
          <ScrollReveal variant="slide-right" delay={200} className="lg:col-span-8">
            <div className="bg-black/80 border border-white/10 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0F0F0F]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-zinc-600 font-mono-agency">roi_calc.sh</span>
                </div>
                <span className="flex items-center gap-1.5 text-[9px] text-zinc-600 font-mono-agency">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                  LIVE
                </span>
              </div>

              <div className="p-6 space-y-8">
                {/* Hours slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs text-zinc-400 font-mono-agency">
                      <Timer className="h-3.5 w-3.5 text-[#D4FF00]" />
                      Hours/week on manual task
                    </label>
                    <span className="text-sm font-bold text-white font-mono-agency tabular-nums">
                      {hours}
                      <span className="text-xs text-zinc-600 font-normal"> hrs</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={40}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-[#D4FF00] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4FF00] [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(212,255,0,0.4)]"
                  />
                  <div className="flex justify-between text-[9px] text-zinc-700 font-mono-agency">
                    <span>1 hr</span>
                    <span>40 hrs</span>
                  </div>
                </div>

                {/* Rate slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs text-zinc-400 font-mono-agency">
                      <IndianRupee className="h-3.5 w-3.5 text-[#D4FF00]" />
                      Hourly cost
                    </label>
                    <span className="text-sm font-bold text-white font-mono-agency tabular-nums">
                      ${rate}
                      <span className="text-xs text-zinc-600 font-normal">/hr</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={250}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-[#D4FF00] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4FF00] [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(212,255,0,0.4)]"
                  />
                  <div className="flex justify-between text-[9px] text-zinc-700 font-mono-agency">
                    <span>$15/hr</span>
                    <span>$250/hr</span>
                  </div>
                </div>

                {/* Results */}
                <div className="pt-4 border-t border-white/5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                      <div className="text-[9px] text-zinc-600 uppercase tracking-wider mb-1 font-mono-agency">
                        Hours saved / month
                      </div>
                      <div className="text-2xl font-bold text-[#D4FF00] font-mono-agency tabular-nums">
                        {savedHours}
                      </div>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                      <div className="text-[9px] text-zinc-600 uppercase tracking-wider mb-1 font-mono-agency">
                        Saved / month
                      </div>
                      <div className="text-2xl font-bold text-[#D4FF00] font-mono-agency tabular-nums">
                        ${savedMoney.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                      <div className="text-[9px] text-zinc-600 uppercase tracking-wider mb-1 font-mono-agency">
                        Saved / year
                      </div>
                      <div className="text-2xl font-bold text-emerald-400 font-mono-agency tabular-nums">
                        ${yearlyMoney.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-600 mt-3 text-center font-mono-agency">
                    * Based on 80% of manual hours automated — typical RABNIX deployment benchmark
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
