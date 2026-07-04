export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://rabnix.com/#organization",
        name: "RABNIX",
        alternateName: "RABNIX Digital Engineering",
        url: "https://rabnix.com",
        logo: "https://rabnix.com/rabnexus-og.svg",
        description:
          "RABNIX is an elite digital engineering firm that constructs bespoke websites, tailored CRM platforms, robust custom software, and complex AI Agent workforces.",
        slogan: "High-Precision Digital Engines",
        email: "hello@rabnix.com",
        foundingDate: "2025",
        datePublished: "2025-01-01T00:00:00Z",
        dateModified: "2026-07-02T00:00:00Z",
        sameAs: [
          // TODO: Add your social profiles here
          // "https://linkedin.com/company/rabnix",
          // "https://twitter.com/rabnix",
          // "https://github.com/rabnix",
        ],
        industry: "Software Development",
        knowsAbout: [
          "Web Development",
          "CRM Development",
          "AI Agents",
          "AI Automation",
          "Custom Software",
          "Digital Marketing",
          "Enterprise Infrastructure",
          "Software Engineering",
          "Digital Transformation",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description:
                  "Bespoke high-performance web systems engineered for maximum conversion.",
                serviceType: "Web Development",
                provider: { "@id": "https://rabnix.com/#organization" },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CRM Development",
                description:
                  "Tailored hub architectures that centralize operations, automate lead routing, and provide granular analytics.",
                serviceType: "Custom Software Development",
                provider: { "@id": "https://rabnix.com/#organization" },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Agent Development",
                description:
                  "Autonomous digital workforce utilizing cutting-edge LLMs to handle support, research, and operations.",
                serviceType: "AI Development",
                provider: { "@id": "https://rabnix.com/#organization" },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Workflow Automation",
                description:
                  "Custom agent chains that automate complex workflows end-to-end.",
                serviceType: "Automation",
                provider: { "@id": "https://rabnix.com/#organization" },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Software",
                description:
                  "Full-stack applications, dashboards, and internal tools built to spec.",
                serviceType: "Software Development",
                provider: { "@id": "https://rabnix.com/#organization" },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digital Marketing",
                description:
                  "Data-driven campaigns optimized for conversion across search and social.",
                serviceType: "Digital Marketing",
                provider: { "@id": "https://rabnix.com/#organization" },
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          ratingCount: "50",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://rabnix.com/#website",
        url: "https://rabnix.com",
        name: "RABNIX",
        description:
          "Elite digital engineering firm.",
        publisher: { "@id": "https://rabnix.com/#organization" },
        inLanguage: "en-US",
        about: {
          "@type": "Thing",
          name: "Digital Engineering",
          description:
            "Custom software development, AI agents, CRM platforms, and web development services.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
