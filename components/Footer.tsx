import { Terminal, Mail, Phone, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Logo from "./Logo";

const SOCIAL_LINKS = [
  {
    label: "X",
    href: "https://x.com/rabnix",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/rabnix",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 md:px-12 py-16 border-t border-white/10 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
            {/* Brand */}
            <div className="md:col-span-4 space-y-4">
              <Logo showTagline />
              <p className="text-xs text-zinc-600 max-w-sm leading-relaxed font-mono-agency">
                High-precision digital engineering for the modern AI era.
                Bespoke systems, autonomous agents, and enterprise-grade
                infrastructure.
              </p>
            </div>

            {/* Directories */}
            <div className="md:col-span-2 space-y-4">
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

            {/* Contact */}
            <div className="md:col-span-3 space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold">
                Contact
              </span>
              <div className="space-y-3 font-mono-agency text-xs">
                <a
                  href="mailto:hello@rabnix.com"
                  className="flex items-center gap-2 text-zinc-400 hover:text-[#D4FF00] transition-colors group"
                >
                  <Mail className="h-3.5 w-3.5 text-zinc-600 group-hover:text-[#D4FF00] transition-colors" />
                  <span>hello@rabnix.com</span>
                </a>
                <a
                  href="tel:+917565091186"
                  className="flex items-center gap-2 text-zinc-400 hover:text-[#D4FF00] transition-colors group"
                >
                  <Phone className="h-3.5 w-3.5 text-zinc-600 group-hover:text-[#D4FF00] transition-colors" />
                  <span>+91 75650 91186</span>
                </a>
                <a
                  href="tel:+918081820877"
                  className="flex items-center gap-2 text-zinc-400 hover:text-[#D4FF00] transition-colors group"
                >
                  <Phone className="h-3.5 w-3.5 text-zinc-600 group-hover:text-[#D4FF00] transition-colors" />
                  <span>+91 80818 20877</span>
                </a>
                <div className="pt-2">
                  <span className="block text-zinc-600 mb-2 text-[10px] tracking-[0.2em] uppercase">
                    Social
                  </span>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.label}
                        className="flex items-center justify-center h-8 w-8 rounded border border-white/10 text-zinc-500 hover:text-[#D4FF00] hover:border-[#D4FF00]/40 transition-all duration-300"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href="#booking-section"
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#D4FF00] hover:underline pt-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  Book a Call
                </a>
              </div>
            </div>

            {/* System Status */}
            <div className="md:col-span-3 space-y-4">
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
          <div className="flex items-center">
            <Terminal className="h-3 w-3 text-zinc-800" />
          </div>
        </div>
      </div>
    </footer>
  );
}
