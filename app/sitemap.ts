import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rabnexus.com";

  // All sections on the single-page site
  const sections = [
    "",
    "#services-section",
    "#clients-section",
    "#pricing-section",
    "#reviews-section",
    "#booking-section",
    "#contact-section",
    "#terminal-section",
  ];

  return sections.map((section) => ({
    url: `${baseUrl}${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: section === "" ? 1.0 : 0.7,
  }));
}
