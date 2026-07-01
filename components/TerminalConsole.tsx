"use client";

import { useEffect, useState, useRef } from "react";
import { Terminal, Clock, Activity, Database } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const bootLogsRaw = [
  { time: "00:57:21", text: "Querying booked slots for date: 2026-07-01" },
  { time: "00:57:22", text: "Found 0 booked slot(s) for 2026-07-01" },
  { time: "00:57:24", text: "Querying booked slots for date: 2026-07-01" },
  { time: "00:57:24", text: "Found 0 booked slot(s) for 2026-07-01" },
  { time: "00:57:26", text: "Sync: Loaded 3 Inquiries, 3 Appointments." },
  { time: "00:57:27", text: "Sync: Loaded 3 Inquiries, 3 Appointments." },
];

const appointmentsRaw = [
  {
    name: "Atiurrahman",
    service: "Web Development",
    date: "2026-07-16",
    time: "09:00 AM",
  },
  {
    name: "TEST_Jane_Booking_UI",
    service: "AI Automation",
    date: "2026-07-17",
    time: "03:00 PM",
  },
  {
    name: "TEST_Jane_Booking_UI",
    service: "AI Automation",
    date: "2026-07-17",
    time: "09:00 AM",
  },
];

const statusLines = [
  "// SYSTEM BOOT SEQUENCE SUCCESSFUL",
  "// KERNEL v4.8 LOADED INTO MEMORY",
  "// AI AGENT NODES: 12 ONLINE",
  "// SECURE TUNNEL ESTABLISHED",
];

export default function TerminalConsole() {
  const [visibleLogs, setVisibleLogs] = useState<number>(0);
  const [visibleStatusLines, setVisibleStatusLines] = useState<number>(0);

  useEffect(() => {
    // Animate status lines appearing one by one
    const t1 = setTimeout(() => setVisibleStatusLines(1), 300);
    const t2 = setTimeout(() => setVisibleStatusLines(2), 800);
    const t3 = setTimeout(() => setVisibleStatusLines(3), 1300);
    const t4 = setTimeout(() => setVisibleStatusLines(4), 1800);

    // Animate boot logs appearing
    const intervals = [2400, 2800, 3200, 3600, 4000, 4400];
    const timers = intervals.map((delay, i) =>
      setTimeout(() => setVisibleLogs(i + 1), delay)
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      id="terminal-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] relative"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <ScrollReveal variant="fade-up">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center">
                <Terminal className="h-4 w-4 text-[#D4FF00]" />
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-white block">
                  Core Node Console
                </span>
                <span className="text-[10px] text-zinc-500">REALTIME SYSTEM FEED</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-[10px] text-zinc-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]" />
              </span>
              <span className="tracking-wider">LIVE_DB_FEED</span>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <span className="hidden sm:inline text-zinc-600">
                <Activity className="h-3 w-3 inline mr-1" />
                {appointmentsRaw.length} ACTIVE
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Boot log terminal */}
          <ScrollReveal variant="fade-up" delay={150} className="lg:col-span-6">
            <div className="bg-black/80 border border-white/10 rounded-lg p-5 font-mono text-[11px] leading-relaxed min-h-72 flex flex-col">
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="text-zinc-700 text-[9px] tracking-wider ml-2 uppercase">
                  nexus-terminal -- tty1
                </span>
              </div>
              <div className="space-y-1 overflow-y-auto term-scroll flex-1">
                {statusLines.slice(0, visibleStatusLines).map((line, i) => (
                  <div
                    key={`status-${i}`}
                    className="text-zinc-600 animate-fade-in"
                    style={{ animationDuration: "0.3s" }}
                  >
                    {line}
                  </div>
                ))}
                {visibleStatusLines > 1 && (
                  <div className="text-zinc-600 my-2">
                    {"=".repeat(45)}
                  </div>
                )}
                {bootLogsRaw.slice(0, visibleLogs).map((log, i) => (
                  <div
                    className="flex items-start animate-fade-in"
                    key={i}
                    style={{ animationDuration: "0.3s" }}
                  >
                    <span className="text-[#D4FF00]/70 mr-2 shrink-0">
                      [{log.time}]
                    </span>
                    <span className="text-zinc-300">{log.text}</span>
                  </div>
                ))}
                {visibleLogs >= bootLogsRaw.length && (
                  <div className="flex items-center mt-2">
                    <span className="text-[#D4FF00]">{">"}</span>
                    <span className="inline-block w-1.5 h-3.5 bg-[#D4FF00] ml-1.5 animate-typing-cursor" />
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Active inquiries/appointments */}
          <ScrollReveal variant="fade-up" delay={300} className="lg:col-span-6">
            <div className="bg-black/80 border border-white/10 rounded-lg p-5 space-y-4 min-h-72">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold flex items-center gap-2">
                  <Database className="h-3 w-3" />
                  Active Inquiries &amp; Appointments
                </span>
                <span className="text-[10px] text-[#D4FF00]">(Live Retrieval)</span>
              </div>
              <div className="space-y-3">
                {appointmentsRaw.map((a, i) => (
                  <div
                    key={i}
                    className="glass rounded-lg px-4 py-3 flex items-center justify-between text-xs animate-scale-in"
                    style={{ animationDelay: `${400 + i * 150}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-7 w-7 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center mt-0.5">
                        <Database className="h-3 w-3 text-[#D4FF00]" />
                      </div>
                      <div>
                        <p className="text-white font-bold flex items-center gap-2">
                          APPT: {a.name}
                          <span className="text-[10px] text-zinc-600 font-normal">
                            ID: {String(i + 1).padStart(3, "0")}
                          </span>
                        </p>
                        <p className="text-zinc-500 mt-0.5">
                          <span className="text-[#D4FF00]/60">Service:</span>{" "}
                          {a.service} <span className="text-zinc-700">|</span>{" "}
                          <span className="text-[#D4FF00]/60">Date:</span> {a.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-zinc-600" />
                      <span className="text-[#D4FF00] font-bold">{a.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
