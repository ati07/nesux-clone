"use client";

import { useEffect, useState, useRef } from "react";
import {
  Search,
  Zap,
  FileText,
  Globe,
  Shield,
  BarChart3,
  Link2,
  Smartphone,
  Bot,
} from "lucide-react";

interface Metric {
  key: string;
  label: string;
  value: string;
  target: number; // 0–100 fill of the bar
  status: "pass" | "warn" | "fail";
  icon: React.ReactNode;
}

const METRICS: Metric[] = [
  { key: "score", label: "SEO Score", value: "94", target: 94, status: "pass", icon: <Search className="h-4 w-4" /> },
  { key: "speed", label: "Page Speed", value: "88", target: 88, status: "pass", icon: <Zap className="h-4 w-4" /> },
  { key: "meta", label: "Meta Tags", value: "100%", target: 100, status: "pass", icon: <FileText className="h-4 w-4" /> },
  { key: "keywords", label: "KW Optimization", value: "4.2%", target: 75, status: "warn", icon: <BarChart3 className="h-4 w-4" /> },
  { key: "backlinks", label: "Backlink Profile", value: "1.2k", target: 85, status: "pass", icon: <Globe className="h-4 w-4" /> },
  { key: "security", label: "Security Grade", value: "A+", target: 100, status: "pass", icon: <Shield className="h-4 w-4" /> },
  { key: "crawlability", label: "Crawlability", value: "98%", target: 98, status: "pass", icon: <Link2 className="h-4 w-4" /> },
  { key: "mobile", label: "Mobile UX", value: "92%", target: 92, status: "pass", icon: <Smartphone className="h-4 w-4" /> },
  { key: "llm", label: "LLM Readiness", value: "86%", target: 86, status: "pass", icon: <Bot className="h-4 w-4" /> },
];

export default function SeoDiagnostic() {
  const [scanPhase, setScanPhase] = useState<0 | 1>(0);
  const [visibleMetrics, setVisibleMetrics] = useState(0);
  const [overallScore, setOverallScore] = useState(0);
  const [pulse, setPulse] = useState(0);
  const intervalsRef = useRef<number[]>([]);

  // Scan sequence: scanning → progressive reveal → score counting
  useEffect(() => {
    const scanningTimeout = window.setTimeout(() => {
      setScanPhase(1);

      // Phase 2: reveal metrics one by one
      let i = 0;
      const revealInterval = window.setInterval(() => {
        i++;
        setVisibleMetrics(i);
        if (i >= METRICS.length) {
          clearInterval(revealInterval);
          // Phase 3: count up the overall score
          const scoreInterval = window.setInterval(() => {
            setOverallScore((prev) => {
              if (prev >= 91) {
                clearInterval(scoreInterval);
                return 91;
              }
              return prev + 1;
            });
          }, 30);
          intervalsRef.current.push(scoreInterval);
        }
      }, 250);
      intervalsRef.current.push(revealInterval);
    }, 1200);

    return () => {
      clearTimeout(scanningTimeout);
      intervalsRef.current.forEach(clearInterval);
      intervalsRef.current = [];
    };
  }, []);

  // Live pulsing tick for the scan line effect
  useEffect(() => {
    if (scanPhase !== 0) return;
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [scanPhase]);

  const finalScore = scanPhase === 0 ? 0 : 91;

  return (
    <div className="w-[400px]">
      <div className="relative rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        {/* Top glow accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4FF00]/40 to-transparent" />

        {/* Glass backdrop */}
        <div className="absolute inset-0 bg-[#0A0A0A]/50 backdrop-blur-[20px] -webkit-backdrop-blur-[20px]" />

        {/* Subtle inner border highlight */}
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/[0.03]" />

        {/* Content */}
        <div className="relative z-[1]">
        {/* ── Header ── */}
        <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-[#D4FF00] animate-pulse shadow-[0_0_10px_rgba(212,255,0,0.6)]" />
            </div>
            <span className="text-xs tracking-[0.15em] uppercase text-zinc-400 font-mono-agency font-bold">
              SEO Diagnostics
            </span>
          </div>
          <span className="text-[10px] font-mono-agency text-zinc-600 tabular-nums">
            v2.4.1
          </span>
        </div>

        {/* ── Scan phase ── */}
        {scanPhase === 0 && (
          <div className="px-5 py-10 space-y-5">
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-[4px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-5 w-[3px] bg-[#D4FF00]/60 animate-pulse rounded-sm"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
              <span className="text-sm font-mono-agency text-zinc-500 uppercase tracking-wider">
                Scanning
              </span>
            </div>
            {/* Scanning bar */}
            <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full w-full bg-gradient-to-r from-[#D4FF00] via-[#00D4FF] to-[#A855F7] transition-none"
                style={{
                  transform: `translateX(-${100 - pulse}%)`,
                  transition: "none",
                }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono-agency text-zinc-600 tabular-nums">
              <span>Analyzing structure...</span>
              <span>{pulse}%</span>
            </div>
          </div>
        )}

        {/* ── Results phase ── */}
        {scanPhase === 1 && (
          <div className="px-5 py-4 space-y-3">
            {METRICS.map((metric, index) => (
              <div
                key={metric.key}
                className={`transition-all duration-500 ${
                  index < visibleMetrics
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        metric.status === "pass"
                          ? "text-[#D4FF00]"
                          : metric.status === "warn"
                            ? "text-yellow-400"
                            : "text-red-400"
                      }
                    >
                      {metric.icon}
                    </span>
                    <span className="text-xs font-mono-agency text-zinc-400">
                      {metric.label}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-mono-agency tabular-nums ${
                      metric.status === "pass"
                        ? "text-white/80"
                        : metric.status === "warn"
                          ? "text-yellow-400"
                          : "text-red-400"
                    }`}
                  >
                    {metric.value}
                  </span>
                </div>
                <div className="h-[4px] bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${
                      index < visibleMetrics ? "opacity-100" : "opacity-0"
                    } ${
                      metric.status === "pass"
                        ? "bg-gradient-to-r from-[#D4FF00] to-emerald-400"
                        : metric.status === "warn"
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                          : "bg-gradient-to-r from-red-400 to-red-500"
                    }`}
                    style={{ width: `${metric.target}%` }}
                  />
                </div>
              </div>
            ))}

            {/* Overall Score */}
            <div
              className={`pt-4 mt-3 border-t border-white/[0.06] transition-all duration-500 ${
                visibleMetrics >= METRICS.length ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono-agency text-zinc-500 uppercase tracking-wider">
                  Overall Score
                </span>
                <span className="font-mono-agency text-2xl tabular-nums text-[#D4FF00]">
                  {overallScore}
                  <span className="text-sm text-zinc-500">/100</span>
                </span>
              </div>
              {/* Score bar */}
              <div className="h-[5px] bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4FF00] to-[#00D4FF] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${finalScore}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] font-mono-agency text-zinc-600">
                  Last crawled:{" "}
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </span>
                <span className="text-[10px] font-mono-agency text-emerald-400/70 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                  All systems nominal
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
