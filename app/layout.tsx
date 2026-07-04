import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://rabnix.com";

export const metadata: Metadata = {
  title: {
    default: "RABNIX — High-Precision Digital Engines",
    template: "%s | RABNIX",
  },
  description:
    "RABNIX is an elite digital engineering firm. We construct bespoke websites, tailored CRM platforms, robust custom software, and complex AI Agent workforces that operate at peak efficiency.",
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/robix logo.png",
    shortcut: "/robix logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RABNIX",
    title: "RABNIX — High-Precision Digital Engines",
    description:
      "RABNIX is an elite digital engineering firm. We build bespoke websites, CRM platforms, custom software, and AI Agent workforces engineered for peak efficiency.",
    url: BASE_URL,
    images: [
      {
        url: "/rabnexus-og.svg",
        width: 1200,
        height: 630,
        alt: "RABNIX — Elite Digital Engineering Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RABNIX — High-Precision Digital Engines",
    description:
      "RABNIX is an elite digital engineering firm. We build bespoke websites, CRM platforms, custom software, and AI Agent workforces.",
    images: ["/rabnexus-og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "web development",
    "CRM development",
    "AI agents",
    "custom software",
    "digital engineering",
    "automation",
    "AI automation",
    "bespoke websites",
    "RABNIX",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  other: {
    "article:published_time": "2025-01-01T00:00:00Z",
    "article:modified_time": "2026-07-02T00:00:00Z",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd />
        <AnimatedBackground />
        <div className="noise-overlay" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
