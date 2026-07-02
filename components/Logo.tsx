"use client";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  iconOnly?: boolean;
}

export default function Logo({ className = "", showTagline = false, iconOnly = false }: LogoProps) {
  return (
    <a href="#" className={`block ${className}`}>
      <img
        src={iconOnly ? "/robix logo (1).png" : "/Full Logo.png"}
        alt="RABNIX"
        className={iconOnly ? "h-8 w-8 object-contain" : showTagline ? "h-14 object-contain" : "h-10 md:h-12 object-contain"}
      />
    </a>
  );
}
