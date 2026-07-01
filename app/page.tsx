import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Scheduler from "@/components/Scheduler";
import Intake from "@/components/Intake";
import TerminalConsole from "@/components/TerminalConsole";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-mono-agency selection:bg-[#D4FF00] selection:text-black">
      <Navbar />
      <Hero />
      <Capabilities />
      <Scheduler />
      <Intake />
      <TerminalConsole />
      <Footer />
    </div>
  );
}
