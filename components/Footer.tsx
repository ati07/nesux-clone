export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 md:px-12 py-12 border-t border-white/10 bg-[#050505]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xs text-zinc-600">
        <div>
          © {year} NEXUS SYSTEMS LTD. ALL SYSTEMS NOMINAL.
        </div>
        <div className="flex space-x-6">
          <a href="#services-section" className="hover:text-white">
            SERVICES
          </a>
          <a href="#booking-section" className="hover:text-white">
            SCHEDULER
          </a>
          <a href="#contact-section" className="hover:text-white">
            INTAKE
          </a>
        </div>
      </div>
    </footer>
  );
}
