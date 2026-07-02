import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "RABNIX — High-Precision Digital Engines",
  description:
    "RABNIX is an elite digital engineering firm. We construct bespoke websites, tailored CRM platforms, robust custom software, and complex AI Agent workforces that operate at peak efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative">
        <AnimatedBackground />
        <div className="noise-overlay" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
