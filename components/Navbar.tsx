export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/10 px-4 md:px-12 py-5 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="h-5 w-5 bg-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.6)] animate-pulse" />
        <span className="font-serif-agency text-xl md:text-2xl tracking-widest font-light text-white">
          NEXUS <span className="text-[#D4FF00]">// SYSTEMS</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase text-zinc-400">
        <a href="#services-section" className="hover:text-[#D4FF00] transition-colors">
          01 / Services
        </a>
        <a href="#booking-section" className="hover:text-[#D4FF00] transition-colors">
          02 / Booking
        </a>
        <a href="#contact-section" className="hover:text-[#D4FF00] transition-colors">
          03 / Inquiries
        </a>
        <a href="#terminal-section" className="hover:text-[#D4FF00] transition-colors">
          04 / Terminal
        </a>
      </nav>

      <a
        href="#contact-section"
        className="border border-[#D4FF00]/40 text-[#D4FF00] hover:bg-[#D4FF00] hover:text-black text-xs uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300 shadow-[0_0_10px_rgba(212,255,0,0.1)] hover:shadow-[0_0_20px_rgba(212,255,0,0.4)]"
      >
        Inquire.exe
      </a>
    </header>
  );
}
