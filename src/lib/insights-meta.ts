export const ARTICLE_TYPE: Record<string, string> = {
  "qonto-mcp-fintech-finance-teams": "Field Observation",
  "ai-ipo-valuations": "Research Note",
  "activity-vs-impact": "Field Observation",
  "ai-revenue-per-employee-data": "Research Note",
  "work-evolution-curve": "Framework",
  "wrong-ai-problem": "Essay",
  "transformation-literacy": "Essay",
  "the-right-to-begin": "Personal Essay",
  "december-recalibration": "Personal Essay",
  "ai-in-finance": "Research Note",
  "how-to-set-up-a-claude-project": "Playbook",
  "claude-personal-vs-project-instructions": "Playbook",
  "claude-kickoff-prompt-template": "Playbook",
  "engineering-principles-ai-coding-agents": "Framework",
  "agentic-commerce-eu-regulatory-opportunity": "Essay",
  "ai-content-pipeline-brand-consistency-at-scale": "Case Study",
  "ai-workflow-automation-sme-revenue-impact": "Framework",
  "ai-literacy-platform-senior-demographic-product-strategy": "Case Study",
  "carousel-content-platform-ai-architecture-decisions": "Case Study",
  "language-learning-app-agentic-build-blueprint": "Playbook",
  // Pipeline (MDX) articles
  "what-agentic-ai-actually-is": "Essay",
  "agentic-ai-use-case-map-financial-services": "Framework",
  "ai-operating-model-playbook-regulated-firms": "Playbook",
  "eu-ai-act-fintech-what-august-2026-actually-requires": "Research Note",
  "iso-20022-data-asset-not-compliance-chore": "Research Note",
  "payments-meets-inference-stripe-openrouter-ramp-router": "Research Note",
};

export const ARTICLE_PILLAR: Record<string, string> = {
  "qonto-mcp-fintech-finance-teams": "Financial Infrastructure",
  "ai-ipo-valuations": "Financial Infrastructure",
  "ai-in-finance": "Financial Infrastructure",
  "agentic-commerce-eu-regulatory-opportunity": "Financial Infrastructure",
  "activity-vs-impact": "Leadership & Human Systems",
  "wrong-ai-problem": "Leadership & Human Systems",
  "transformation-literacy": "Leadership & Human Systems",
  "ai-revenue-per-employee-data": "Operating Models",
  "work-evolution-curve": "Operating Models",
  "ai-workflow-automation-sme-revenue-impact": "Operating Models",
  "the-right-to-begin": "Personal Essays",
  "december-recalibration": "Personal Essays",
  "how-to-set-up-a-claude-project": "AI Systems",
  "claude-personal-vs-project-instructions": "AI Systems",
  "claude-kickoff-prompt-template": "AI Systems",
  "engineering-principles-ai-coding-agents": "AI Systems",
  "ai-content-pipeline-brand-consistency-at-scale": "AI Systems",
  "ai-literacy-platform-senior-demographic-product-strategy": "AI Systems",
  "carousel-content-platform-ai-architecture-decisions": "AI Systems",
  "language-learning-app-agentic-build-blueprint": "AI Systems",
  // Pipeline (MDX) articles
  "what-agentic-ai-actually-is": "AI Systems",
  "agentic-ai-use-case-map-financial-services": "AI Systems",
  "ai-operating-model-playbook-regulated-firms": "Operating Models",
  "eu-ai-act-fintech-what-august-2026-actually-requires": "Financial Infrastructure",
  "iso-20022-data-asset-not-compliance-chore": "Financial Infrastructure",
  "payments-meets-inference-stripe-openrouter-ramp-router": "Financial Infrastructure",
};

export const PILLARS = [
  "Financial Infrastructure",
  "AI Systems",
  "Operating Models",
  "Physical AI & Robotics",
  "Leadership & Human Systems",
  "Personal Essays",
] as const;

export type Pillar = (typeof PILLARS)[number];

export const PILLAR_SLUGS: Record<string, string> = {
  "Financial Infrastructure": "financial-infrastructure",
  "AI Systems": "ai-systems",
  "Operating Models": "operating-models",
  "Physical AI & Robotics": "physical-ai-robotics",
  "Leadership & Human Systems": "leadership-human-systems",
  "Personal Essays": "personal-essays",
};

export function getYear(date: string): string {
  const match = date.match(/\d{4}/);
  return match ? match[0] : date;
}

// Reverse map: pillar slug → pillar name
export const SLUG_TO_PILLAR: Record<string, string> = Object.fromEntries(
  Object.entries(PILLAR_SLUGS).map(([name, slug]) => [slug, name])
);

// Canonical href for any article slug — pillar-nested if mapped, flat otherwise
export function getArticleHref(slug: string): string {
  const pillar = ARTICLE_PILLAR[slug];
  if (pillar && PILLAR_SLUGS[pillar]) {
    return `/insights/${PILLAR_SLUGS[pillar]}/${slug}`;
  }
  return `/insights/${slug}`;
}
