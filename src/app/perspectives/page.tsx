import type { Metadata } from "next";
import Section from "@/components/ui/Section";


export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "Payal Ponkshe on the philosophy of work, team ethics, leadership, workplace culture, and where technology is actually headed.",
};

const topics = [
  "Leadership",
  "Team ethics",
  "Workplace culture",
  "AI & Technology",
  "Philosophy of work",
  "Fintech & Payments",
];

const perspectives = [
  {
    title: "Revenue per employee is the only AI metric that matters to a CEO",
    excerpt:
      "Every boardroom is asking some version of 'are we using AI?' Almost none are asking the right follow-up question. Activity is not a strategy. Here's what I'd measure instead.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "5 min",
  },
  {
    title: "What most enterprise AI transformations get wrong before they start",
    excerpt:
      "The failure mode is almost never the technology. It's the org design, the incentive structure, and the decision to treat AI as an IT initiative rather than an operating model question.",
    topic: "Leadership",
    date: "2025",
    readTime: "6 min",
  },
  {
    title: "Building a team that ships: what I learned managing 120 people across 4 regions",
    excerpt:
      "Scale exposes everything. The things that feel like culture at 10 people become liabilities at 100. The principles I'd carry into any team build — based on what broke and what held.",
    topic: "Team ethics",
    date: "2025",
    readTime: "7 min",
  },
  {
    title: "What I learned building 6 AI ventures while looking for a VP role",
    excerpt:
      "Two years. Six ventures in build or live. A €250K pipeline from zero in 30 days. And the strangest thing: the building made me a better candidate — not despite the gap, but because of it.",
    topic: "Philosophy of work",
    date: "2025",
    readTime: "8 min",
  },
  {
    title: "On workplace culture: the things no one puts in the job description",
    excerpt:
      "I've been on both sides of the hiring table in fintech, payments, and now AI. The signals that tell you whether a team will actually let you do your best work — and the ones that should make you walk away.",
    topic: "Workplace culture",
    date: "2025",
    readTime: "5 min",
  },
  {
    title: "The regulated industries mindset: why constraint is a creative advantage",
    excerpt:
      "Working in fintech, payments, and regulated financial services for 18 years taught me something counterintuitive: constraints are not obstacles to innovation. They're the brief. Here's why I prefer them.",
    topic: "Fintech & Payments",
    date: "2025",
    readTime: "6 min",
  },
];

export default function PerspectivesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-[140px] md:pt-[160px]">
        <h1 className="font-jakarta font-bold text-navy text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em] max-w-2xl">
          Perspectives
        </h1>
        <p className="font-jakarta text-slate text-[18px] leading-[1.6] mt-5 max-w-xl">
          How I think about work, leadership, team ethics, workplace culture, and
          where technology is actually headed — written when I have something
          worth saying.
        </p>
      </Section>

      {/* Topic filter — static for v1 */}
      <div className="border-t border-rule">
        <div className="content-width py-4 flex gap-3 flex-wrap">
          {topics.map((topic) => (
            <span
              key={topic}
              className="font-jakarta font-medium text-[12px] text-slate px-3 py-1.5 border border-rule rounded-tag hover:border-navy hover:text-navy transition-colors cursor-pointer"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Articles */}
      <Section>
        <div className="flex flex-col divide-y divide-rule">
          {perspectives.map((piece) => (
            <article
              key={piece.title}
              className="group py-8 first:pt-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="label-meta">{piece.topic}</span>
                <span className="text-rule text-slate">·</span>
                <span className="font-jakarta font-bold text-slate text-[11px]">
                  {piece.readTime} read
                </span>
              </div>
              <h2 className="font-jakarta font-bold text-navy text-[20px] md:text-[22px] leading-[1.3] group-hover:opacity-75 transition-opacity max-w-3xl">
                {piece.title}
              </h2>
              <p className="font-jakarta text-slate text-[15px] leading-[1.65] mt-3 max-w-2xl">
                {piece.excerpt}
              </p>
              <div className="mt-5">
                <span className="font-jakarta font-medium text-[13px] text-navy opacity-50 cursor-not-allowed">
                  Coming soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
