import { Terminal } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 md:px-12 py-16 border-t border-white/10 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
            {/* Brand */}
            <div className="md:col-span-5 space-y-4">
              <Logo showTagline />
              <p className="text-xs text-zinc-600 max-w-sm leading-relaxed font-mono-agency">
                High-precision digital engineering for the modern AI era.
                Bespoke systems, autonomous agents, and enterprise-grade
                infrastructure.
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3 space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold">
                Directories
              </span>
              <div className="space-y-3">
                {[
                  { label: "Services", href: "#services-section" },
                  { label: "Scheduler", href: "#booking-section" },
                  { label: "Intake", href: "#contact-section" },
                  { label: "Terminal", href: "#terminal-section" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-xs text-zinc-600 hover:text-[#D4FF00] transition-colors font-mono-agency"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="md:col-span-4 space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold">
                System Status
              </span>
              <div className="space-y-3 font-mono-agency text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-600">AI Core</span>
                  <span className="flex items-center gap-1.5 text-[#D4FF00]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-600">API Gateway</span>
                  <span className="flex items-center gap-1.5 text-[#D4FF00]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-600">Agent Network</span>
                  <span className="flex items-center gap-1.5 text-[#D4FF00]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                    12 Nodes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-zinc-700 font-mono-agency">
          <span>© {year} RABNIX. ALL SYSTEMS NOMINAL.</span>
          <div className="flex items-center gap-1">
            <Terminal className="h-3 w-3 text-zinc-800" />
          </div>
        </div>
      </div>
    </footer>
  );
}
