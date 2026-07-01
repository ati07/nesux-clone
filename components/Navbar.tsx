"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "01 / Services", href: "#services-section" },
  { label: "02 / Booking", href: "#booking-section" },
  { label: "03 / Inquiries", href: "#contact-section" },
  { label: "04 / Terminal", href: "#terminal-section" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/75 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="h-5 w-5 bg-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.6)] animate-glow-pulse rounded-sm" />
          <span className="font-serif-agency text-xl md:text-2xl tracking-widest font-light text-white">
            NEXUS <span className="text-[#D4FF00]">// SYSTEMS</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase text-zinc-400">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative hover:text-[#D4FF00] transition-colors duration-300 py-1
                after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#D4FF00]
                after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact-section"
          className="hidden md:inline-flex border border-[#D4FF00]/40 text-[#D4FF00] hover:bg-[#D4FF00] hover:text-black text-xs uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300 shadow-[0_0_10px_rgba(212,255,0,0.1)] hover:shadow-[0_0_25px_rgba(212,255,0,0.4)] relative overflow-hidden group"
        >
          <span className="relative z-10">Inquire.exe</span>
          <span className="absolute inset-0 bg-[#D4FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-400 hover:text-[#D4FF00] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A0A0A]/95 backdrop-blur-2xl border-t border-white/10 px-4 py-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-[#D4FF00] transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact-section"
            onClick={() => setMobileOpen(false)}
            className="block text-center border border-[#D4FF00]/40 text-[#D4FF00] hover:bg-[#D4FF00] hover:text-black text-xs uppercase tracking-[0.2em] px-5 py-3 transition-all duration-300 mt-4"
          >
            Inquire.exe
          </a>
        </div>
      </div>
    </header>
  );
}
