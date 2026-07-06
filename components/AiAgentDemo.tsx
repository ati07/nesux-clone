"use client";

import { useState, useEffect, useRef } from "react";
import { Bot, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Message {
  role: "agent" | "user";
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  { role: "agent", text: "Hi — I'm the RABNIX agent. Tell me what you're trying to automate and I'll scope it in a sentence." },
];

const AUTO_REPLIES: Record<string, string> = {
  shopify: "That's a 1-agent build — triages the request, drafts a reply, flags edge cases to a human. ~2 weeks to deploy.",
  return: "Simple triage + reply agent. Connects to Shopify orders API, drafts responses in your brand voice, escalates edge cases. ~2 weeks.",
  support: "Multi-agent system: classification agent → resolution agent → escalation guard. Handles ~70% autonomously. 3–4 weeks.",
  email: "Inbox triage agent — reads, categorizes, drafts replies. You review before send. ~2 weeks with your template library.",
  data: "Data pipeline agent — ingests from your source, transforms, loads to your warehouse. Custom connectors. 2–4 weeks depending on sources.",
  lead: "Lead qualification agent — scores inbound leads, enriches with public data, schedules meetings via calendar API. ~3 weeks.",
  invoice: "Invoice processing agent — extracts line items, matches to PO, flags discrepancies for review. ~2 weeks.",
  social: "Social media agent — drafts posts, schedules, replies to common DMs with approved copy. ~2 weeks.",
  report: "Reporting agent — queries your data sources, builds dashboards/PDFs, emails on schedule. ~3 weeks.",
  default: "Interesting. Typical agent builds run 2–4 weeks depending on integration depth. Want to hop on a scope call?",
};

export default function AiAgentDemo() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Animate initial message appearing
  useEffect(() => {
    const t = setTimeout(() => {
      setVisibleLines(1);
      const t2 = setTimeout(() => setShowInput(true), 800);
      return () => clearTimeout(t2);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setShowInput(false);
    setIsTyping(true);

    // Find matching auto-reply
    const lower = trimmed.toLowerCase();
    const matchedKey = Object.keys(AUTO_REPLIES).find((key) => lower.includes(key));
    const reply = matchedKey ? AUTO_REPLIES[matchedKey] : AUTO_REPLIES.default;

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "agent", text: reply }]);
      setIsTyping(false);
      setTimeout(() => setShowInput(true), 600);
    }, 1200 + Math.random() * 600);
  };

  return (
    <section
      id="agent-demo-section"
      className="px-4 md:px-12 py-24 border-b border-white/10 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] relative"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <ScrollReveal variant="fade-up">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center">
              <Bot className="h-4 w-4 text-[#D4FF00]" />
            </div>
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-white block">
                Live AI Agent
              </span>
              <span className="text-[10px] text-zinc-500">INTERACTIVE DEMO</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left copy */}
          <ScrollReveal variant="slide-left" className="lg:col-span-4 space-y-5">
            <h2 className="font-serif-agency text-3xl md:text-4xl font-light leading-tight">
              See an agent <span className="gradient-text-duo">work.</span>
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-mono-agency">
              Describe a task you&apos;d like automated. The agent responds with a
              scope estimate — just like it would during a real engagement.
            </p>
            <div className="space-y-2 text-xs text-zinc-500 font-mono-agency">
              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#D4FF00]" />
                Try: &ldquo;Shopify returns&rdquo;
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#D4FF00]" />
                Try: &ldquo;Lead qualification&rdquo;
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#D4FF00]" />
                Try: &ldquo;Customer support&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Chat console */}
          <ScrollReveal variant="slide-right" delay={200} className="lg:col-span-8">
            <div className="bg-black/80 border border-white/10 rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0F0F0F]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-zinc-600 font-mono-agency">
                    rabnix-agent — interactive
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[9px] text-zinc-600 font-mono-agency">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  MODEL: CLAUDE
                </span>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-3 max-h-[340px] overflow-y-auto">
                {messages.slice(0, visibleLines).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 items-start animate-fade-in ${
                      msg.role === "user" ? "flex-row-reverse" : ""
                    }`}
                    style={{ animationDuration: "0.4s" }}
                  >
                    <div
                      className={`h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        msg.role === "agent"
                          ? "bg-emerald-950/40 border border-emerald-800/40 text-emerald-400"
                          : "bg-zinc-800 border border-zinc-700 text-zinc-400"
                      }`}
                    >
                      {msg.role === "agent" ? "AI" : "U"}
                    </div>
                    <div
                      className={`text-xs leading-relaxed p-3 rounded-lg max-w-[80%] ${
                        msg.role === "agent"
                          ? "bg-zinc-900/80 border border-zinc-800 text-zinc-300 rounded-tl-[2px]"
                          : "bg-[#D4FF00]/5 border border-[#D4FF00]/10 text-zinc-200 rounded-tr-[2px]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex gap-3 items-start animate-fade-in">
                    <div className="h-7 w-7 rounded-full bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center shrink-0">
                      <Bot className="h-3 w-3 text-emerald-400" />
                    </div>
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg rounded-tl-[2px] p-3">
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Input — always rendered, hidden until showInput */}
              <div
                className={`border-t border-white/5 p-3 transition-all duration-500 ${
                  showInput
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(input);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Describe a task you'd like automated..."
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-mono-agency text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-[#D4FF00]/40 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="px-4 py-2.5 bg-[#D4FF00] text-black rounded-lg font-bold text-xs hover:bg-[#D4FF00]/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    <Send className="h-3 w-3" />
                    Send
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
