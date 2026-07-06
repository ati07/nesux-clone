"use client";

import { useState } from "react";
import {
  Check,
  Zap,
  Shield,
  Server,
  Workflow,
  Bot,
  Clock,
  Star,
  BarChart3,
  Timer,
  Gift,
  Code2,
  Globe,
  Database,
  Headphones,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Bonus {
  label: string;
  worth: string;
}

interface Tier {
  id: string;
  name: string;
  tag: string;
  price: string;
  description: string;
  popular?: boolean;
  timeline: string;
  includesLabel: string;
  features: string[];
  bonuses: Bonus[];
  cta: string;
  icon: typeof Zap;
}

const TIERS: Tier[] = [
  {
    id: "launch",
    name: "Launch",
    tag: "FOUNDATION // 01",
    price: "$299",
    description:
      "Get found locally and start turning visitors into enquiries — without a bloated build.",
    timeline: "±4 weeks after content approval",
    includesLabel: "Everything you need to get online and start converting:",
    icon: Globe,
    features: [
      "Lead-ready homepage plus up to 5 pages",
      "Mobile-first layout for every device",
      "Contact form wired directly to your inbox",
      "Click-to-WhatsApp instant connect",
      "SSL security & analytics dashboard",
      "Basic on-page SEO for local discovery",
      "Free domain + hosting (1 year)",
      "6 months post-launch support & fixes",
    ],
    bonuses: [
      { label: "Local SEO Starter Checklist", worth: "$200" },
      { label: "Google Business Profile Setup Guide", worth: "$150" },
    ],
    cta: "Book a free slot",
  },
  {
    id: "professional",
    name: "Professional",
    tag: "PERFORMANCE // 02",
    price: "$599",
    description:
      "Rank faster, load quicker, and capture more leads from every page visit.",
    timeline: "±5 weeks after content approval",
    includesLabel: "Everything in Launch, plus:",
    icon: Code2,
    features: [
      "Up to 7 pages covering core offers",
      "Speed optimization for faster loads & rankings",
      "Lead capture beyond the contact form",
      "Optimized CTAs placed where visitors decide",
      "Expanded on-page SEO across key pages",
      "Blog section ready for trust-building content",
    ],
    bonuses: [
      { label: "Competitor CTA Teardown Report", worth: "$300" },
      { label: "High-Converting Copy Swipe File", worth: "$250" },
    ],
    cta: "Book a free slot",
  },
  {
    id: "growth",
    name: "Growth",
    tag: "AUTOMATION // 03",
    price: "$799",
    description:
      "Turn traffic into booked calls with content, CRM, and automated capture systems.",
    popular: true,
    timeline: "±6 weeks after content approval",
    includesLabel: "Everything in Professional, plus:",
    icon: Workflow,
    features: [
      "Up to 10 dynamic pages that answer objections",
      "Blog engine for trust-building & organic traffic",
      "CRM integration — every lead lands in one place",
      "Automated lead capture & follow-up flows",
      "Online booking system (no phone tag)",
      "SEO foundation tuned for your service area",
    ],
    bonuses: [
      { label: "Local SEO Action Checklist", worth: "$500" },
      { label: "Lead Flow Mapping Template", worth: "$350" },
      { label: "30-Day Post-Launch Growth Plan", worth: "$750" },
    ],
    cta: "Book a free slot",
  },
  {
    id: "revenue-engine",
    name: "Revenue Engine",
    tag: "SCALE // 04",
    price: "$1,199",
    description:
      "Full conversion architecture — design, SEO, paid traffic, and automation in one build.",
    timeline: "±8 weeks after discovery & content",
    includesLabel: "Everything in Growth, plus:",
    icon: BarChart3,
    features: [
      "Custom logo design from your brief (2-3 concepts)",
      "Full UI/UX design pass aligned to brand",
      "Complete SEO setup beyond on-page foundations",
      "$119 Meta ads setup credit toward ad spend",
      "Dedicated landing page for campaigns & offers",
      "Conversion path review for high-value services",
      "AI chatbot & automation for after-hours leads",
    ],
    bonuses: [
      { label: "Full Competitor Teardown Report", worth: "$600" },
      { label: "Meta Ads Launch Playbook", worth: "$400" },
      { label: "Automation Workflow Blueprint", worth: "$500" },
    ],
    cta: "Book a free slot",
  },
];

const STATS = [
  { label: "Client Satisfaction", value: "4.9/5", icon: Star },
  { label: "Avg. Enquiry Lift", value: "340%", icon: BarChart3 },
  { label: "Avg. Go-Live", value: "±5 Weeks", icon: Timer },
  { label: "Systems Deployed", value: "50+", icon: Database },
  { label: "Support Included", value: "6 Months", icon: Headphones },
];

const CROSS_FEATURES = [
  { icon: Zap, label: "Performance Engineering" },
  { icon: Bot, label: "AI Agent Deployment" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: Shield, label: "Enterprise Security (SOC-2)" },
];

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState(TIERS[2]); // Growth default

  return (
    <section
      id="pricing-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,255,0,0.1) 0%, rgba(0,212,255,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center space-y-4">
            <span className="text-xs text-[#D4FF00] tracking-[0.3em] uppercase">
              Investment
            </span>
            <h2 className="font-serif-agency text-4xl md:text-5xl font-light">
              PRECISION-<span className="gradient-text-cyan">PRICED</span>{" "}
              ARCHITECTURES
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              One-time packages. Hosting and 6 months support included.
              On-time delivery guaranteed.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="glass-strong rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="text-center space-y-1.5 group cursor-default"
                  >
                    <Icon className="h-4 w-4 mx-auto text-zinc-600 group-hover:text-[#D4FF00]/60 transition-colors" />
                    <span className="block text-lg md:text-xl font-bold text-white font-mono-agency group-hover:text-[#D4FF00] transition-colors">
                      {s.value}
                    </span>
                    <span className="text-[9px] tracking-wider text-zinc-600 uppercase">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Tab selector */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`relative px-5 py-3 text-xs tracking-wider uppercase font-bold transition-[color,background-color,border-color] duration-300 rounded ${
                  selectedTier.id === tier.id
                    ? "bg-[#D4FF00] text-black shadow-[0_0_20px_rgba(212,255,0,0.25)] scale-105"
                    : "bg-transparent text-zinc-500 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {tier.name}
                {tier.popular && (
                  <span className="absolute -top-1.5 -right-1.5 h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4FF00]" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Detail panel */}
        <ScrollReveal variant="fade-up" delay={200} key={selectedTier.id}>
          <div className="glass-strong rounded-lg border border-white/10 p-6 md:p-10 max-w-4xl mx-auto relative overflow-hidden">
            {/* Selected glow */}
            {selectedTier.popular && (
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,255,0,0.06) 0%, transparent 50%, rgba(0,212,255,0.03) 100%)",
                }}
              />
            )}

            <div className="relative z-10 space-y-8">
              {/* Top row: meta + price */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <selectedTier.icon className="h-4 w-4 text-[#D4FF00]/60" />
                    <span className="text-[9px] text-zinc-700 tracking-[0.2em] font-mono">
                      {selectedTier.tag}
                    </span>
                    {selectedTier.popular && (
                      <span className="text-[9px] bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/20 px-2 py-0.5 rounded-full tracking-wider font-bold uppercase">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif-agency text-2xl md:text-3xl text-white">
                    {selectedTier.name}
                  </h3>
                  <p className="text-xs text-zinc-500 max-w-lg">
                    {selectedTier.description}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-light text-white font-serif-agency">
                      {selectedTier.price}
                    </span>
                    <span className="text-zinc-600 text-xs">USD</span>
                  </div>
                  <p className="text-[10px] text-zinc-700 mt-1">one-time</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2 text-[11px] text-zinc-500 bg-black/30 rounded px-3 py-2 border border-white/5 w-fit">
                <Clock className="h-3 w-3 text-[#D4FF00]/60" />
                <span className="font-mono-agency">
                  Go-live:{" "}
                  <span className="text-zinc-300">{selectedTier.timeline}</span>
                </span>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <span className="text-[10px] tracking-wider text-zinc-600 uppercase font-bold block">
                  {selectedTier.includesLabel}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTier.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3 text-xs text-zinc-400 group/feature"
                    >
                      <Check className="h-3.5 w-3.5 text-[#D4FF00] mt-0.5 shrink-0 group-hover/feature:text-[#D4FF00]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonuses */}
              {selectedTier.bonuses.length > 0 && (
                <div className="space-y-3">
                  <span className="text-[10px] tracking-wider text-zinc-600 uppercase font-bold flex items-center gap-1.5">
                    <Gift className="h-3 w-3 text-[#D4FF00]/60" />
                    Included Bonuses
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedTier.bonuses.map((b) => (
                      <span
                        key={b.label}
                        className="text-[10px] text-zinc-500 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full font-mono-agency tracking-wider"
                      >
                        {b.label}{" "}
                        <span className="text-[#D4FF00]/70 font-bold">
                          (worth {b.worth})
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <a
                href="#contact-section"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4FF00] text-black text-xs uppercase tracking-wider font-bold rounded hover:shadow-[0_0_30px_rgba(212,255,0,0.35)] transition-[box-shadow] duration-300"
              >
                {selectedTier.cta}
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Everything included footnotes */}
        <ScrollReveal variant="fade-up" delay={100}>
          <p className="text-center text-[10px] text-zinc-700 font-mono-agency tracking-wider">
            All packages include SSL, analytics setup, free domain &amp; hosting
            (1 year), 6 months post-delivery support, and tier bonuses listed
            above.
          </p>
        </ScrollReveal>

        {/* Cross-features */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="glass-strong rounded-lg p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {CROSS_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="text-center space-y-3 group cursor-default"
                  >
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#D4FF00]/5 border border-[#D4FF00]/10 group-hover:bg-[#D4FF00]/10 group-hover:border-[#D4FF00]/20 transition-[background-color,border-color] duration-300">
                      <Icon className="h-4 w-4 text-[#D4FF00]/70 group-hover:text-[#D4FF00] transition-colors" />
                    </div>
                    <span className="block text-[11px] text-zinc-500 font-mono-agency tracking-wider group-hover:text-zinc-300 transition-colors">
                      {f.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
