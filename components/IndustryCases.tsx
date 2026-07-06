"use client";

import { useState } from "react";
import { Building2, ShoppingCart, Stethoscope, Home, Layers } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Industry {
  key: string;
  label: string;
  icon: React.ReactNode;
  body: string;
}

const INDUSTRIES: Industry[] = [
  {
    key: "ecommerce",
    label: "E-commerce",
    icon: <ShoppingCart className="h-3.5 w-3.5" />,
    body: "Automated return triage, 3D product previews, and abandoned-cart follow-up agents that reply in your brand voice — connected directly to <b>Shopify</b>, <b>WooCommerce</b>, and your order data.",
  },
  {
    key: "clinics",
    label: "Clinics & Healthcare",
    icon: <Stethoscope className="h-3.5 w-3.5" />,
    body: "HIPAA-compliant intake automation, insurance verification agents, appointment scheduling with smart reminder sequences, and automated lab result routing to <b>EHR systems</b>.",
  },
  {
    key: "realestate",
    label: "Real Estate",
    icon: <Home className="h-3.5 w-3.5" />,
    body: "Lead qualification agents that score and enrich inbound prospects, automated tour scheduling, AI-powered property description generation, and <b>CRM sync</b> with MLS data.",
  },
  {
    key: "agencies",
    label: "Agencies",
    icon: <Building2 className="h-3.5 w-3.5" />,
    body: "Client reporting automation, resource scheduling agents, automated proposal generation from past work, and cross-platform <b>social media</b> publishing pipelines.",
  },
];

export default function IndustryCases() {
  const [active, setActive] = useState(INDUSTRIES[0].key);

  const current = INDUSTRIES.find((i) => i.key === active) ?? INDUSTRIES[0];

  return (
    <section
      id="industry-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-[#0A0A0A] relative"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <ScrollReveal variant="fade-up">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center">
              <Layers className="h-4 w-4 text-[#D4FF00]" />
            </div>
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-white block">
                Built For
              </span>
              <span className="text-[10px] text-zinc-500">INDUSTRY-SPECIFIC USE CASES</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left copy */}
          <ScrollReveal variant="slide-left" className="lg:col-span-4 space-y-5">
            <h2 className="font-serif-agency text-3xl md:text-4xl font-light leading-tight">
              Tailored to your <span className="gradient-text-duo">industry.</span>
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-mono-agency">
              We don&apos;t build generic automation. Every agent, every pipeline,
              every interface is engineered for the specific workflows,
              compliance needs, and integrations of your sector.
            </p>
          </ScrollReveal>

          {/* Tab panel */}
          <ScrollReveal variant="slide-right" delay={200} className="lg:col-span-8">
            <div className="bg-black/80 border border-white/10 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0F0F0F]">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-zinc-600 font-mono-agency">use_cases.sh</span>
                <div />
              </div>

              <div className="p-5">
                {/* Tabs */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.key}
                      onClick={() => setActive(ind.key)}
                      className={`flex items-center gap-1.5 text-xs font-mono-agency px-3.5 py-2 rounded-md border transition-[color,background-color,border-color] duration-300 ${
                        active === ind.key
                          ? "border-[#D4FF00]/40 bg-[#D4FF00]/8 text-[#D4FF00] shadow-[0_0_12px_rgba(212,255,0,0.06)]"
                          : "border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
                      }`}
                    >
                      {ind.icon}
                      {ind.label}
                    </button>
                  ))}
                </div>

                {/* Body */}
                <div className="min-h-[80px] animate-fade-in" key={current.key}>
                  <p
                    className="text-sm text-zinc-400 leading-relaxed font-mono-agency"
                    dangerouslySetInnerHTML={{ __html: current.body }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
