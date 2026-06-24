import Hero from "@/components/home/Hero";
import StatBand from "@/components/home/StatBand";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import WhereImBuildingNext from "@/components/home/WhereImBuildingNext";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import SocialProof from "@/components/home/SocialProof";
import GiveBackTeaser from "@/components/home/GiveBackTeaser";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <ServicesSnapshot />
      <PortfolioPreview />
      <WhereImBuildingNext />
      <ExperiencePreview />
      <SocialProof />
      <GiveBackTeaser />
      <FinalCTA />
    </>
  );
}
