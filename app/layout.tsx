import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXUS // SYSTEMS — High-Precision Digital Engines",
  description:
    "NEXUS is an elite digital engineering firm. We construct bespoke websites, tailored CRM platforms, robust custom software, and complex AI Agent workforces that operate at peak efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
