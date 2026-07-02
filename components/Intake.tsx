"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Send,
  User,
  Mail,
  Building2,
  ListChecks,
  DollarSign,
  FileText,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, service, budget, message }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setService(SERVICES[0]);
      setBudget(BUDGETS[0]);
      setMessage("");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-[#0A0A0A] relative"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left copy */}
        <ScrollReveal variant="slide-left" className="lg:col-span-4 space-y-6">
          <span className="text-xs text-[#D4FF00] tracking-[0.3em] uppercase">
            03 / Intake
          </span>
          <h2 className="font-serif-agency text-4xl md:text-5xl font-light leading-tight">
            INITIATE A NEW
            <br />
            <span className="gradient-text-duo">SYSTEM RUN.</span>
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Have a proprietary concept or complex automation need? Fill out our
            executive intake directory. Our executive architects review
            inquiries daily and respond within 24 operational hours.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-3 text-xs text-zinc-400 group">
              <div className="h-8 w-8 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center group-hover:bg-[#D4FF00]/20 transition-colors">
                <ShieldCheck className="h-4 w-4 text-[#D4FF00]" />
              </div>
              <span>SOC-2 compliant client database encryption</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-zinc-400 group">
              <div className="h-8 w-8 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center group-hover:bg-[#D4FF00]/20 transition-colors">
                <Zap className="h-4 w-4 text-[#D4FF00]" />
              </div>
              <span>Direct alert routing to on-call developers</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right form */}
        <ScrollReveal variant="slide-right" delay={200} className="lg:col-span-8">
          <div className="glass-strong rounded-lg p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                    <User className="h-3 w-3" /> Your Name
                  </label>
                  <div className="relative border-b border-white/20 focus-within:border-[#D4FF00] transition-all duration-300">
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="bg-transparent border-0 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none w-full placeholder:text-zinc-600"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#D4FF00] transition-all duration-300 focus-within:w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                    <Mail className="h-3 w-3" /> Secure Email
                  </label>
                  <div className="relative border-b border-white/20 focus-within:border-[#D4FF00] transition-all duration-300">
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@organization.com"
                      className="bg-transparent border-0 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none w-full placeholder:text-zinc-600"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#D4FF00] transition-all duration-300 focus-within:w-full" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                    <Building2 className="h-3 w-3" /> Company Name
                  </label>
                  <div className="relative border-b border-white/20 focus-within:border-[#D4FF00] transition-all duration-300">
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Corp Inc. (Optional)"
                      className="bg-transparent border-0 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none w-full placeholder:text-zinc-600"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#D4FF00] transition-all duration-300 focus-within:w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                    <ListChecks className="h-3 w-3" /> Inquiry Vector
                  </label>
                  <div className="relative">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full text-white cursor-pointer h-11 appearance-none">
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-[#121212] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                  <DollarSign className="h-3 w-3" /> Budget Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`py-3 border text-xs tracking-wider transition-all duration-200 rounded font-mono ${
                        budget === b
                          ? "border-[#D4FF00] text-black bg-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.25)] font-bold scale-[1.02]"
                          : "border-white/10 text-white hover:border-[#D4FF00]/50 hover:text-[#D4FF00] hover:bg-white/5"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                  <FileText className="h-3 w-3" /> Project Architectural Requirements
                </label>
                <div className="relative border border-white/20 focus-within:border-[#D4FF00] rounded transition-all duration-300 p-0.5">
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Outline key systems, specifications, user volumes, and necessary integrations..."
                    className="bg-transparent border-0 rounded px-3 py-3 font-mono-agency text-sm focus:outline-none w-full placeholder:text-zinc-600 resize-none"
                  />
                </div>
              </div>

              {status === "success" ? (
                <div className="w-full py-4 font-bold uppercase tracking-wider text-xs rounded bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] text-center">
                  ✓ Inquiry Sent — We&rsquo;ll Respond Within 24 Hours
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 font-bold uppercase tracking-wider text-xs transition-all duration-300 rounded bg-white text-black hover:bg-[#D4FF00] hover:shadow-[0_0_25px_rgba(212,255,0,0.35)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="h-3 w-3" />
                  {submitting ? "TRANSMITTING..." : "TRANSMIT_INQUIRY.SH"}
                </button>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  Failed to send. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ChevronDown(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
