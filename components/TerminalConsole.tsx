import { Terminal } from "lucide-react";

const bootLogs = [
  { time: "00:57:21", text: "Querying booked slots for date: 2026-07-01" },
  { time: "00:57:22", text: "Found 0 booked slot(s) for 2026-07-01" },
  { time: "00:57:24", text: "Querying booked slots for date: 2026-07-01" },
  { time: "00:57:24", text: "Found 0 booked slot(s) for 2026-07-01" },
  { time: "00:57:26", text: "Sync: Loaded 3 Inquiries, 3 Appointments." },
  { time: "00:57:27", text: "Sync: Loaded 3 Inquiries, 3 Appointments." },
];

const appointments = [
  { name: "Atiurrahman", service: "Web Development", date: "2026-07-16", time: "09:00 AM" },
  { name: "TEST_Jane_Booking_UI", service: "AI Automation", date: "2026-07-17", time: "03:00 PM" },
  { name: "TEST_Jane_Booking_UI", service: "AI Automation", date: "2026-07-17", time: "09:00 AM" },
];

export default function TerminalConsole() {
  return (
    <section
      id="terminal-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-[#0F0F0F]"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-3">
            <Terminal className="h-5 w-5 text-[#D4FF00]" />
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-white">
              Realtime Core Node Console
            </span>
          </div>
          <div className="flex items-center space-x-2 text-[10px] text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-[#D4FF00] animate-pulse" />
            <span>LIVE_DB_FEED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Boot log */}
          <div className="lg:col-span-6 bg-black border border-white/10 p-5 font-mono text-[11px] leading-relaxed text-zinc-400 space-y-2 min-h-64 flex flex-col justify-between">
            <div className="space-y-1 overflow-y-auto term-scroll">
              <span className="text-zinc-600 block">
                // SYSTEM BOOT SEQUENCE SUCCESSFUL
              </span>
              {bootLogs.map((log, i) => (
                <div className="flex items-start" key={i}>
                  <span className="text-[#D4FF00]/75 mr-2">[{log.time}]</span>
                  <span className="text-zinc-300">{log.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active inquiries/appointments */}
          <div className="lg:col-span-6 bg-black border border-white/10 p-5 space-y-3 min-h-64">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block pb-1 border-b border-white/10">
              Active Inquiries &amp; Appointments (Live Retrieval)
            </span>
            <div className="space-y-2">
              {appointments.map((a, i) => (
                <div
                  key={i}
                  className="border border-white/10 px-4 py-3 flex items-center justify-between text-xs"
                >
                  <div>
                    <p className="text-white font-bold">
                      APPT: {a.name}
                    </p>
                    <p className="text-zinc-500">
                      Service: {a.service} | Date: {a.date}
                    </p>
                  </div>
                  <span className="text-[#D4FF00] font-bold">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
