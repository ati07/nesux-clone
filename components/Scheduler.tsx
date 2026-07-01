"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    cells.push({ day: cells.length - (firstDay + daysInMonth) + 1, current: false });
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

  return (
    <section
      id="booking-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-[#0F0F0F]"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs text-[#D4FF00] tracking-[0.3em] uppercase">
            02 / Scheduling
          </span>
          <h2 className="font-serif-agency text-4xl md:text-5xl font-light">
            SYSTEM SCHEDULER
          </h2>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">
            Choose your service, select an available date, and lock down a
            high-fidelity time slot directly connected to our agent database.
          </p>
        </div>

        <div className="bg-[#121212] border border-white/10 p-6 md:p-10 max-w-5xl mx-auto">
          <form className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-5 space-y-6 flex flex-col items-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold self-start">
                [ Step 1 ] Select Operational Date
              </span>

              <div className="bg-black border border-white/10 p-4 w-full max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <button
                    type="button"
                    onClick={() =>
                      setViewDate(
                        new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)
                      )
                    }
                    className="text-zinc-500 hover:text-[#D4FF00] transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="font-serif-agency text-lg">{monthLabel}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setViewDate(
                        new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)
                      )
                    }
                    className="text-zinc-500 hover:text-[#D4FF00] transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-600 mb-1">
                  {WEEKDAYS.map((w) => (
                    <span key={w}>{w}</span>
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
                        className={`py-1.5 transition-colors ${
                          !c.current
                            ? "text-zinc-800 cursor-default"
                            : isSelected
                            ? "bg-[#D4FF00] text-black font-bold"
                            : "text-zinc-300 hover:text-[#D4FF00]"
                        }`}
                      >
                        {c.day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="text-[10px] text-zinc-500 self-start">
                Selected:{" "}
                <span className="text-white">{selectedLabel}</span>
              </p>
            </div>

            {/* Service + Time */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                  [ Step 2 ] Define Service Vector
                </span>
                <select className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full text-white cursor-pointer h-11">
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#121212] text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                  [ Step 3 ] Allocate Time Slot
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-3 border text-xs tracking-wider transition-all rounded-none font-mono ${
                        selectedSlot === slot
                          ? "border-[#D4FF00] text-black bg-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.2)] font-bold"
                          : "border-white/10 text-white hover:border-[#D4FF00]/50 hover:text-[#D4FF00]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                    Operator Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-bold block">
                    Secure Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane@operator.com"
                    className="bg-transparent border-b border-white/20 rounded-none px-0 py-3 font-mono-agency text-sm focus:outline-none focus:border-[#D4FF00] transition-colors w-full placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-[#D4FF00] hover:shadow-[0_0_20px_rgba(212,255,0,0.3)] transition-all duration-300"
              >
                EXECUTE_SCHEDULER.MSI
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
