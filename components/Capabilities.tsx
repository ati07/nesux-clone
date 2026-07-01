import { Cpu, ChevronRight, CircuitBoard, Zap, Globe, Database, Bot, Workflow, Blocks } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GlowCard from "./GlowCard";

const SERVICES = [
  {
    id: "web-development",
    mono: "WEB_DEV // 01",
    title: "Web Development",
    desc: "Bespoke high-performance web systems engineered for maximum conversion, built with modern React, Next.js, and FastAPI architectures.",
    span: "md:col-span-8",
    icon: Globe,
  },
  {
    id: "crm-development",
    mono: "CRM_SYSTEMS // 02",
    title: "CRM Development",
    desc: "Tailored operational hubs, advanced sales pipelines, and centralized business intelligence platforms mapped to your unique workflows.",
    span: "md:col-span-4",
    icon: Database,
  },
  {
    id: "ai-automation",
    mono: "AI_FLOWS // 03",
    title: "AI Automation",
    desc: "Enterprise-grade intelligent automation pipelines that eliminate manual overhead, ingest documents, and execute multi-modal tasks.",
    span: "md:col-span-12",
    icon: Zap,
  },
  {
    id: "digital-marketing",
    mono: "GROWTH_SYS // 04",
    title: "Digital Marketing",
    desc: "Data-driven organic search scaling, algorithmic marketing campaigns, and conversion rate optimization engineered for high ROI.",
    span: "md:col-span-8",
    icon: CircuitBoard,
  },
  {
    id: "custom-software",
    mono: "PROP_SOFT // 05",
    title: "Custom Software",
    desc: "Robust, proprietary software ecosystems designed to handle high concurrency, custom integrations, and scale seamlessly as you grow.",
    span: "md:col-span-4",
    icon: Blocks,
  },
  {
    id: "ai-agents",
    mono: "AGENT_FORCE // 06",
    title: "AI Agents",
    desc: "Self-optimizing autonomous digital workforce utilizing cutting-edge LLMs (GPT, Claude, Gemini) to handle support, research, and operations.",
    span: "md:col-span-12",
    icon: Bot,
  },
  {
    id: "automations",
    mono: "INTEGRATIONS // 07",
    title: "Automations",
    desc: "Zero-latency synchronization between your internal database systems, marketing stacks, and external third-party communication layers.",
    span: "md:col-span-12",
    icon: Workflow,
  },
];

export default function Capabilities() {
  return (
    <section id="services-section" className="px-4 md:px-12 py-24 border-b border-white/10 bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        <ScrollReveal variant="fade-up">
          <div className="text-center md:text-left space-y-4">
            <span className="text-xs text-[#D4FF00] tracking-[0.3em] uppercase">
              01 / Capabilities
            </span>
            <h2 className="font-serif-agency text-4xl md:text-5xl font-light">
              OUR CAPABILITIES <span className="gradient-text-lime">DIRECTORY</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl">
              High-precision tech architectures designed and built from
              scratch. Click any directory listing to pre-fill inquiry or
              booking.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal
                key={s.id}
                variant="fade-up"
                delay={100 + i * 80}
                className={s.span}
              >
                <GlowCard
                  className="group relative"
                  glowColor="rgba(212,255,0,0.12)"
                >
                  <div className="bg-[#121212] border border-white/10 p-8 hover:border-[#D4FF00]/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-80 rounded-lg">
                    {/* Animated gradient top border */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-0" />

                    {/* Subtle radial glow on hover */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4FF00]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-mono text-zinc-600 group-hover:text-[#D4FF00]/60 tracking-widest transition-colors">
                          {s.mono}
                        </span>
                        <Icon className="h-5 w-5 text-zinc-600 group-hover:text-[#D4FF00] transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="font-serif-agency text-3xl mb-4 group-hover:text-[#D4FF00] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-2xl font-mono-agency">
                        {s.desc}
                      </p>
                    </div>

                    <div className="pt-6 flex items-center space-x-4 border-t border-white/5 mt-auto relative z-10">
                      <a
                        href="#booking-section"
                        className="text-xs tracking-wider text-[#D4FF00] hover:underline flex items-center font-bold group/link"
                      >
                        BOOK APPT
                        <ChevronRight className="h-3 w-3 ml-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                      <span className="text-zinc-800">|</span>
                      <a
                        href="#contact-section"
                        className="text-xs tracking-wider text-white hover:text-[#D4FF00] flex items-center group/link"
                      >
                        INQUIRE
                        <ChevronRight className="h-3 w-3 ml-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
