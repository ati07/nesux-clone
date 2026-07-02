"use client";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  iconOnly?: boolean;
}

export default function Logo({ className = "", showTagline = false, iconOnly = false }: LogoProps) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo mark */}
      <div className="relative h-8 w-8 shrink-0">
        {/* Background */}
        <div className="absolute inset-0 rounded bg-[#0A0A0A] border border-white/10" />
        {/* Grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
            <line x1="8" y1="0" x2="8" y2="32" />
            <line x1="16" y1="0" x2="16" y2="32" />
            <line x1="24" y1="0" x2="24" y2="32" />
            <line x1="0" y1="8" x2="32" y2="8" />
            <line x1="0" y1="16" x2="32" y2="16" />
            <line x1="0" y1="24" x2="32" y2="24" />
          </g>
        </svg>
        {/* Terminal bracket mark */}
        <svg
          className="absolute inset-0 w-full h-full p-1"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M7 11 L3 16 L7 21"
            stroke="#D4FF00"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 11 L29 16 L25 21"
            stroke="#D4FF00"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="10"
            y1="16"
            x2="22"
            y2="16"
            stroke="#D4FF00"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="20" y="13" width="1.5" height="6" fill="#D4FF00">
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className="font-serif-agency text-xl md:text-2xl tracking-widest font-light text-white">
            RABNIX
          </span>
          {showTagline && (
            <span className="text-[8px] tracking-[0.3em] text-zinc-600 uppercase font-mono-agency -mt-1">
              High-Precision Digital Engines
            </span>
          )}
        </div>
      )}
    </a>
  );
}
