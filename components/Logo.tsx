"use client";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  iconOnly?: boolean;
}

export default function Logo({ className = "", showTagline = false, iconOnly = false }: LogoProps) {
  return (
    <a href="#" className={`block ${className}`}>
      {iconOnly ? (
        <img
          src="/robix logo (1).png"
          alt="RABNIX"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          fetchPriority="high"
        />
      ) : (
        <img
          src="/Full Logo.png"
          alt="RABNIX"
          width={200}
          height={showTagline ? 56 : 48}
          className={showTagline ? "h-14 object-contain" : "h-10 md:h-12 object-contain"}
          fetchPriority="high"
        />
      )}
    </a>
  );
}
