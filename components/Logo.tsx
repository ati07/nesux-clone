import Image from "next/image";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  iconOnly?: boolean;
}

export default function Logo({ className = "", showTagline = false, iconOnly = false }: LogoProps) {
  return (
    <a href="#" className={`block ${className}`}>
      {iconOnly ? (
        <Image
          src="/robix logo (1).png"
          alt="RABNEXUS"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          priority
        />
      ) : (
        <Image
          src="/Rabnexus_logo.png"
          alt="RABNEXUS"
          width={showTagline ? 300 : 260}
          height={showTagline ? 68 : 60}
          className={showTagline ? "h-16 object-contain" : "h-14 md:h-16 object-contain"}
          priority
        />
      )}
    </a>
  );
}
