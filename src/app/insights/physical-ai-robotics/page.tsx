import type { Metadata } from "next";
import PillarPageTemplate from "@/components/PillarPageTemplate";

const PILLAR = "Physical AI & Robotics";
const PILLAR_SLUG = "physical-ai-robotics";
const DESCRIPTION =
  "Consumer robotics, embodied intelligence, edge computing, and the infrastructure required for large-scale physical AI deployment. An emerging focus area — writing in progress.";

export const metadata: Metadata = {
  title: "Physical AI & Robotics — Insights by Payal Ponkshe",
  description: DESCRIPTION,
  keywords: [
    "physical AI",
    "consumer robotics",
    "embodied intelligence",
    "edge computing",
    "human-robot collaboration",
    "service robotics",
    "multi-agent physical systems",
  ],
  alternates: { canonical: `https://payalponkshe.com/insights/${PILLAR_SLUG}` },
  openGraph: {
    title: `Physical AI & Robotics — Insights by Payal Ponkshe`,
    description: DESCRIPTION,
    url: `https://payalponkshe.com/insights/${PILLAR_SLUG}`,
    type: "website",
  },
};

export default function PhysicalAIRoboticsPage() {
  return (
    <PillarPageTemplate
      pillar={PILLAR}
      pillarSlug={PILLAR_SLUG}
      description={DESCRIPTION}
      articles={[]}
      isEmpty={true}
    />
  );
}
