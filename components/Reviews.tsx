"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface Review {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  tags: string[];
}

const REVIEWS: Review[] = [
  {
    quote:
      "RABNIX rebuilt our entire client-facing platform from the ground up. Load times dropped 340%, and our conversion pipeline went from fragmented to fully autonomous. They didn't just build software — they engineered a revenue machine.",
    author: "Marcus V.",
    role: "CTO",
    company: "Aetheris Defense",
    rating: 5,
    tags: ["Web Dev", "Performance"],
  },
  {
    quote:
      "The AI agent workforce RABNIX deployed handles 70% of our tier-1 support inquiries autonomously. Our team went from drowning in tickets to focusing on strategic development. ROI was realized within the first 45 days.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Cypra Health",
    rating: 5,
    tags: ["AI Agents", "Automation"],
  },
  {
    quote:
      "We approached RABNIX for a custom CRM. What we got was a complete operational ecosystem — sales pipeline, client portal, real-time analytics, and automated reporting. Our deal velocity increased by 28% in one quarter.",
    author: "James Okonkwo",
    role: "CEO",
    company: "Ironmark Logistics",
    rating: 5,
    tags: ["CRM", "Custom Software"],
  },
  {
    quote:
      "Their intake-to-deployment pipeline is remarkable. RABNIX took our vague concept, architectured a complete spec within a week, and delivered ahead of schedule. This is what happens when you hire engineers who actually understand systems.",
    author: "Elena Torres",
    role: "Director of Product",
    company: "PulseArc EdTech",
    rating: 5,
    tags: ["Consulting", "Full-Stack"],
  },
  {
    quote:
      "We'd burned through three agencies before RABNIX. Everyone else sold us templates. RABNIX sold us architecture. Our platform handles 10× the traffic we originally spec'd with zero degradation. They over-deliver by default.",
    author: "David Kim",
    role: "Founder & CEO",
    company: "Innova Tech AI",
    rating: 4,
    tags: ["Digital Marketing", "Infrastructure"],
  },
  {
    quote:
      "The SOC-2 compliance layer and enterprise security architecture RABNIX implemented gave our board exactly the confidence they needed. External auditors were impressed. In 8 years, I haven't seen a cleaner deployment.",
    author: "Priya Sharma",
    role: "CISO",
    company: "Zentra Government Solutions",
    rating: 5,
    tags: ["Security", "Infrastructure"],
  },
];

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(REVIEWS.length / itemsPerPage);

  const displayed = REVIEWS.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const next = () =>
    setCurrentPage((p) => (p + 1 >= totalPages ? 0 : p + 1));
  const prev = () =>
    setCurrentPage((p) => (p - 1 < 0 ? totalPages - 1 : p - 1));

  return (
    <section id="reviews-section" className="px-4 md:px-12 py-24 border-b border-white/10 bg-[#0A0A0A] relative overflow-hidden">
      {/* Scan line overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <ScrollReveal variant="fade-up" className="space-y-4">
            <span className="text-xs text-[#D4FF00] tracking-[0.3em] uppercase">
              Client Testimonials
            </span>
            <h2 className="font-serif-agency text-4xl md:text-5xl font-light">
              TRUSTED BY <span className="gradient-text-duo">ENGINEERS</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl">
              Measurable outcomes from technical leaders who hold their
              engineering partners to the highest standard.
            </p>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal variant="fade-up" delay={200} className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="h-9 w-9 rounded-lg border border-white/10 flex items-center justify-center text-zinc-500 hover:text-[#D4FF00] hover:border-[#D4FF00]/30 transition-[color,border-color] duration-300"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-[10px] text-zinc-600 tracking-wider font-mono">
              {String(currentPage + 1).padStart(2, "0")} /{" "}
              {String(totalPages).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              className="h-9 w-9 rounded-lg border border-white/10 flex items-center justify-center text-zinc-500 hover:text-[#D4FF00] hover:border-[#D4FF00]/30 transition-[color,border-color] duration-300"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </ScrollReveal>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayed.map((review, i) => (
            <ScrollReveal
              key={`${review.author}-${i}`}
              variant="fade-up"
              delay={150 + i * 100}
              className="h-full"
            >
              <div className="glass rounded-lg p-8 border border-white/10 hover:border-[#D4FF00]/20 transition-[border-color] duration-500 group h-full flex flex-col relative overflow-hidden">
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#D4FF00] to-transparent group-hover:w-full transition-[width] duration-500" />

                <Quote className="h-6 w-6 text-[#D4FF00]/20 group-hover:text-[#D4FF00]/40 transition-colors duration-300 mb-4 shrink-0" />

                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed flex-1 font-mono-agency">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex items-center gap-0.5 mt-6 mb-4">
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      className={`h-3 w-3 ${
                        s < review.rating
                          ? "text-[#D4FF00] fill-[#D4FF00]"
                          : "text-zinc-700"
                      }`}
                    />
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-wider text-zinc-600 bg-white/[0.03] border border-white/5 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm text-white font-bold font-serif-agency">
                    {review.author}
                  </p>
                  <p className="text-[10px] text-zinc-600 font-mono-agency tracking-wider">
                    {review.role}, {review.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pagination dots */}
        <ScrollReveal variant="fade-up" delay={300}>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                  p === currentPage
                    ? "w-8 bg-[#D4FF00]"
                    : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to page ${p + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
