import { Activity, ArrowRight } from "lucide-react";

const diagnostics = [
  { label: "WEB DEV DEPT", value: "ACTIVE / FASTAPI-REACT", accent: false },
  { label: "AI AGENT ENGINE", value: "COGNITIVE CORE v4.6", accent: false },
  { label: "CRM INTEGRATION", value: "OPERATIONAL", accent: true },
  { label: "DIGITAL REACH", value: "99.9% ATTRIBUTION", accent: false },
  { label: "DATABASE STATUS", value: "MONGO_LIVE [OK]", accent: false },
];

export default function Hero() {
  return (
    <section className="relative px-4 md:px-12 py-20 md:py-32 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A]">
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-8">
          <div className="inline-flex items-center space-x-2 border border-white/10 px-3 py-1 bg-white/5">
            <Activity className="h-3 w-3 text-[#D4FF00] animate-pulse" />
            <span className="text-[10px] tracking-[0.2em] text-[#D4FF00] uppercase font-bold">
              Systems Integrity: Nominal
            </span>
          </div>

          <h1 className="font-serif-agency text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none font-light">
            We Architect
            <br />
            <span className="text-[#D4FF00] italic">High-Precision</span>
            <br />
            Digital Engines.
          </h1>

          <p className="text-zinc-400 font-mono-agency text-sm md:text-base leading-relaxed max-w-xl">
            NEXUS is an elite digital engineering firm. We construct bespoke
            websites, tailored CRM platforms, robust custom software, and
            complex AI Agent workforces that operate at peak efficiency.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#services-section"
              className="group px-6 py-4 bg-white text-black font-mono-agency text-xs uppercase tracking-wider hover:bg-[#D4FF00] hover:shadow-[0_0_20px_rgba(212,255,0,0.3)] transition-all duration-300 flex items-center"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#booking-section"
              className="px-6 py-4 border border-white/20 text-white font-mono-agency text-xs uppercase tracking-wider hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors"
            >
              Schedule Appointment
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 border border-white/10 bg-[#121212] p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
              System Diagnostics
            </span>
            <span className="h-2 w-2 rounded-full bg-[#D4FF00] animate-ping" />
          </div>

          <div className="space-y-3 text-xs">
            {diagnostics.map((d) => (
              <div key={d.label} className="flex justify-between">
                <span className="text-zinc-500">{d.label}</span>
                <span
                  className={
                    d.accent ? "text-[#D4FF00] font-bold" : "text-white font-bold"
                  }
                >
                  {d.value}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
            <span>LATENCY: 12MS</span>
            <span>UPTIME: 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
