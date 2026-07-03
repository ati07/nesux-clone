export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RABNEXUS",
    url: "https://rabnexus.com",
    logo: "https://rabnexus.com/Rabnexus_logo.png",
    description:
      "An elite digital engineering firm constructing bespoke websites, tailored CRM platforms, robust custom software, and complex AI Agent workforces.",
    slogan: "High-Precision Digital Engines",
    email: "hello@rabnexus.com",
    foundingDate: "2025",
    datePublished: "2025-01-01T00:00:00Z",
    dateModified: "2026-07-02T00:00:00Z",
    sameAs: [],
    knowsAbout: [
      "Web Development",
      "CRM Development",
      "AI Agents",
      "AI Automation",
      "Custom Software",
      "Digital Marketing",
      "Enterprise Infrastructure",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Web Development",
          description:
            "Bespoke high-performance web systems engineered for maximum conversion.",
        },
        {
          "@type": "Offer",
          name: "CRM Development",
          description:
            "Tailored hub architectures that centralize operations, automate lead routing, and provide granular analytics.",
        },
        {
          "@type": "Offer",
          name: "AI Agent Development",
          description:
            "Autonomous digital workforce utilizing cutting-edge LLMs to handle support, research, and operations.",
        },
        {
          "@type": "Offer",
          name: "AI Workflow Automation",
          description:
            "Custom agent chains that automate complex workflows end-to-end.",
        },
        {
          "@type": "Offer",
          name: "Custom Software",
          description:
            "Full-stack applications, dashboards, and internal tools built to spec.",
        },
        {
          "@type": "Offer",
          name: "Digital Marketing",
          description:
            "Data-driven campaigns optimized for conversion across search and social.",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "50",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
