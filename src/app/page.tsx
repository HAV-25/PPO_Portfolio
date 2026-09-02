import Hero from "@/components/home/Hero";
import StatBand from "@/components/home/StatBand";
import AgenticTransition from "@/components/home/AgenticTransition";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import AgenticCommercePreview from "@/components/home/AgenticCommercePreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import SelectedThinking from "@/components/home/SelectedThinking";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <AgenticTransition />
      <ServicesSnapshot />
      <AgenticCommercePreview />
      <PortfolioPreview />
      <ExperiencePreview />
      <SelectedThinking />
      <FinalCTA />
    </>
  );
}
