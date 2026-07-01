"use client";

import { useState } from "react";
import { ShieldCheck, Zap } from "lucide-react";

const SERVICES = [
  "Web Development",
  "CRM Development",
  "AI Automation",
  "Digital Marketing",
  "Custom Software",
  "AI Agents",
  "Automations",
];

const BUDGETS = ["< $10k", "$10k - $30k", "$30k - $100k", "$100k+"];

export default function Intake() {
  const [budget, setBudget] = useState(BUDGETS[0]);

  return (
    <section id="contact-section" className="px-4 md:px-12 py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <span className="text-xs text-[#D4FF00] tracking-[0.3em] uppercase">
            03 / Intake
          </span>
          <h2 className="font-serif-agency text-4xl md:text-5xl font-light leading-tight">
            INITIATE A NEW SYSTEM RUN.
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Have a proprietary concept or complex automation need? Fill out
            our executive intake directory. Our executive architects review
            inquiries daily and respond within 24 operational hours.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-center space-x-2 text-xs text-zinc-400">
              <ShieldCheck className="h-4 w-4 text-[#D4FF00]" />
              <span>SOC-2 compliant client database encryption</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-zinc-400">
              <Zap className="h-4 w-4 text-[#D4FF00]" />
              <span>Direct alert routing to on-call developers</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-[#121212] border border-white/10 p-6 md:p-10">
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full placeholder:text-zinc-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                  Secure Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@organization.com"
                  className="bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Corp Inc. (Optional)"
                  className="bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full placeholder:text-zinc-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                  Inquiry Vector
                </label>
                <select className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full text-white cursor-pointer h-11">
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#121212] text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                Budget Scope
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BUDGETS.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`py-3 border text-xs tracking-wider transition-all rounded-none font-mono ${
                      budget === b
                        ? "border-[#D4FF00] text-black bg-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.2)] font-bold"
                        : "border-white/10 text-white hover:border-[#D4FF00]/50 hover:text-[#D4FF00]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                Project Architectural Requirements
              </label>
              <textarea
                required
                rows={4}
                placeholder="Outline key systems, specifications, user volumes, and necessary integrations..."
                className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full placeholder:text-zinc-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-[#D4FF00] hover:shadow-[0_0_20px_rgba(212,255,0,0.3)] transition-all duration-300"
            >
              TRANSMIT_INQUIRY.SH
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
