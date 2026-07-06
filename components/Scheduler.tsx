"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, User, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  "Web Development",
  "CRM Development",
  "AI Automation",
  "Digital Marketing",
  "Custom Software",
  "AI Agents",
  "Automations",
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function buildCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: { day: number; current: boolean }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  while (cells.length % 7 !== 0 || cells.length < 42) {
    cells.push({
      day: cells.length - (firstDay + daysInMonth) + 1,
      current: false,
    });
    if (cells.length >= 42) break;
  }
  return cells;
}

export default function Scheduler() {
  const initial = new Date();
  const [viewDate, setViewDate] = useState(
    new Date(initial.getFullYear(), initial.getMonth(), 1)
  );
  const [selectedDay, setSelectedDay] = useState(initial.getDate());
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const monthLabel = viewDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const cells = buildCalendar(viewDate.getFullYear(), viewDate.getMonth());

  const selectedDate = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    selectedDay
  );
  const selectedLabel = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const prevMonth = () =>
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const nextMonth = () =>
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service,
          date: selectedLabel,
          timeSlot: selectedSlot,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setName("");
      setEmail("");
      setService(SERVICES[0]);
      setSelectedSlot(TIME_SLOTS[0]);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="booking-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] relative"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <ScrollReveal variant="fade-up">
          <div className="text-center space-y-4">
            <span className="text-xs text-[#D4FF00] tracking-[0.3em] uppercase">
              02 / Scheduling
            </span>
            <h2 className="font-serif-agency text-4xl md:text-5xl font-light">
              SYSTEM <span className="gradient-text-cyan">SCHEDULER</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Choose your service, select an available date, and lock down a
              high-fidelity time slot directly connected to our agent database.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="glass-strong rounded-lg p-6 md:p-10 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Calendar */}
              <div className="lg:col-span-5 space-y-6 flex flex-col items-center">
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold self-start flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> [ Step 1 ] Select Operational Date
                </span>

                <div className="bg-black/60 border border-white/10 p-4 md:p-5 w-full max-w-xs rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={prevMonth}
                      aria-label="Previous month"
                      className="text-zinc-500 hover:text-[#D4FF00] transition-colors p-1"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <span className="font-serif-agency text-lg">{monthLabel}</span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      aria-label="Next month"
                      className="text-zinc-500 hover:text-[#D4FF00] transition-colors p-1"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-600 mb-2">
                    {WEEKDAYS.map((w) => (
                      <span key={w} className="font-bold">
                        {w}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {cells.map((c, i) => {
                      const isSelected = c.current && c.day === selectedDay;
                      return (
                        <button
                          type="button"
                          key={i}
                          disabled={!c.current}
                          onClick={() => c.current && setSelectedDay(c.day)}
                          className={`py-1.5 rounded transition-[color,background-color,transform] duration-200 ${
                            !c.current
                              ? "text-zinc-800 cursor-default"
                              : isSelected
                              ? "bg-[#D4FF00] text-black font-bold scale-105 shadow-[0_0_10px_rgba(212,255,0,0.3)]"
                              : "text-zinc-300 hover:text-[#D4FF00] hover:bg-white/5"
                          }`}
                        >
                          {c.day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="text-[10px] text-zinc-500 self-start flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Selected: <span className="text-white">{selectedLabel}</span>
                </p>
              </div>

              {/* Service + Time */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                    <Clock className="h-3 w-3" /> [ Step 2 ] Define Service Vector
                  </span>
                  <div className="relative">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      aria-label="Service type"
                      className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full text-white cursor-pointer h-11 appearance-none">
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-[#121212] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-500 pointer-events-none rotate-90" />
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                    <Clock className="h-3 w-3" /> [ Step 3 ] Allocate Time Slot
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 border text-xs tracking-wider transition-[color,background-color,border-color,transform] duration-200 rounded font-mono ${
                          selectedSlot === slot
                            ? "border-[#D4FF00] text-black bg-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.25)] font-bold scale-[1.02]"
                            : "border-white/10 text-white hover:border-[#D4FF00]/50 hover:text-[#D4FF00] hover:bg-white/5"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                      <User className="h-3 w-3" /> Operator Full Name
                    </label>
                    <div className="relative border-b border-white/20 focus-within:border-[#D4FF00] transition-colors">
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="bg-transparent border-0 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none w-full placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block flex items-center gap-2">
                      <Mail className="h-3 w-3" /> Secure Email Address
                    </label>
                    <div className="relative border-b border-white/20 focus-within:border-[#D4FF00] transition-colors">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@operator.com"
                        className="bg-transparent border-0 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none w-full placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                </div>

                {status === "success" ? (
                  <div className="w-full py-4 font-bold uppercase tracking-wider text-xs rounded bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] text-center">
                    ✓ Booking Submitted — Check Your Email
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 font-bold uppercase tracking-wider text-xs transition-[background-color,box-shadow,opacity] duration-300 rounded bg-white text-black hover:bg-[#D4FF00] hover:shadow-[0_0_25px_rgba(212,255,0,0.35)] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {submitting ? "TRANSMITTING..." : "EXECUTE_SCHEDULER.MSI"}
                  </button>
                )}
                {status === "error" && (
                  <p className="text-xs text-red-400 text-center">
                    Failed to send. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
