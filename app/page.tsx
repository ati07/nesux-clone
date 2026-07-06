import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Capabilities from "@/components/Capabilities";
import AiAgentDemo from "@/components/AiAgentDemo";
import IndustryCases from "@/components/IndustryCases";
import ProcessTimeline from "@/components/ProcessTimeline";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import RoiCalculator from "@/components/RoiCalculator";
import Scheduler from "@/components/Scheduler";
import Intake from "@/components/Intake";
import WorkflowDiff from "@/components/WorkflowDiff";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-mono-agency selection:bg-[#D4FF00] selection:text-black">
      <Navbar />
      <Hero />
      <Clients />
      <Capabilities />
      <AiAgentDemo />
      <IndustryCases />
      <ProcessTimeline />
      <Pricing />
      <Reviews />
      <RoiCalculator />
      <Scheduler />
      <Intake />
      <WorkflowDiff />
      <Footer />
    </div>
  );
}
