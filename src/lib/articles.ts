export type StatItem = { value: string; label: string; sub?: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "bold-p"; text: string }
  | { type: "pull-quote"; text: string }
  | { type: "stat-grid"; stats: StatItem[] }
  | { type: "highlight"; text: string }
  | { type: "labeled"; label: string; body: string }
  | { type: "bullets"; intro?: string; items: string[] }
  | { type: "numbered"; items: { title: string; body: string }[] }
  | { type: "question"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  date: string;
  readTime: string;
  live: boolean;
  keywords?: string[];
  blocks: Block[];
};

export const articles: Article[] = [
  {
    slug: "qonto-mcp-fintech-finance-teams",
    title:
      "Qonto\u2019s MCP launch is not a feature. It\u2019s a signal about who wins the next decade of finance.",
    excerpt:
      "Most coverage has framed Qonto\u2019s MCP integration as a smart product move. It\u2019s something more structurally significant \u2014 and the implications for finance teams, CFOs, and incumbent banks run several layers deeper than any product page will tell you.",
    topic: "Fintech & Payments",
    date: "June 2026",
    readTime: "8 min",
    live: true,
    keywords: [
      "Qonto MCP",
      "Model Context Protocol fintech",
      "agentic AI finance",
      "AI finance automation",
      "MCP banking",
      "Qonto AI tools",
      "AI agents for CFOs",
      "fintech AI 2026",
      "EU AI Act finance",
      "agentic finance operating model",
      "neobank AI",
      "finance AI agents",
    ],
    blocks: [
      {
        type: "p",
        text: "Most fintech announcements follow a familiar arc. A new integration. A sharper dashboard. A faster way to do something that was already being done. Qonto\u2019s MCP launch is something structurally different \u2014 and I think most of the coverage has significantly underestimated what it means.",
      },
      {
        type: "p",
        text: "Not because the demo reel is impressive (it is). But because the implications for how finance teams operate, how CFOs think about leverage, and how the gap between neobanks and incumbent institutions grows \u2014 run several layers deeper than what any product announcement page will tell you.",
      },
      {
        type: "labeled",
        label: "What Qonto MCP actually is \u2014 and why the protocol matters more than the product",
        body: "Qonto has implemented the Model Context Protocol (MCP) \u2014 an open standard developed by Anthropic that allows AI systems to connect directly to live data sources and take actions through them. The result: you can prompt Claude, ChatGPT, or Notion with a question about your finances, and the AI pulls live Qonto data to answer it \u2014 without switching tabs, running an export, or reformatting a spreadsheet.",
      },
      {
        type: "p",
        text: "The surface use cases Qonto demonstrates are useful: visualise spending history, look up who paid an invoice, see overdue items, invoice a client, onboard a team member, lock a card. Clean. Practical. Genuinely time-saving for a 10-person scale-up.",
      },
      {
        type: "highlight",
        text: "MCP is not an API integration. It is a context layer. An API integration answers a specific query: what is my balance? An MCP server gives an AI agent ongoing situational awareness of your financial state \u2014 and the ability to act on it across multiple steps without a human orchestrating each one.",
      },
      {
        type: "pull-quote",
        text: "That is a different class of capability. And it is why this announcement is protocol-level news, not product-level news.",
      },
      {
        type: "labeled",
        label: "What finance teams can actually do with this \u2014 beyond the demo",
        body: "The Qonto announcement shows you the ground floor. Here are the floors nobody is showing yet.",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Multi-step agentic cash flow management",
            body: "The real promise is not asking Claude what you spent last month. A single prompt can identify all clients with invoices overdue more than 30 days, cross-reference payment history, calculate the total cash flow impact, draft personalised follow-up messages weighted by relationship value, and flag the top 3 to the CFO briefing \u2014 in one agent run. Not a better dashboard. A junior analyst who never sleeps.",
          },
          {
            title: "Variance explanation at the moment it happens",
            body: "Finance teams spend significant time not on analysis, but on explaining analysis to non-finance stakeholders. An MCP-connected agent can monitor spend against budget in real time, flag when a category exceeds threshold, and draft the variance explanation for the budget owner \u2014 before anyone has to ask. The CFO stops being the explainer. They become the decision-maker on pre-prepared intelligence.",
          },
          {
            title: "Vendor relationship intelligence and negotiation leverage",
            body: "Your payment data contains your entire negotiating history with every supplier. An agent with Qonto context can surface which vendors represent 80% of tail spend, who you consistently pay late, and which relationships carry negotiation leverage. Combined with contract data \u2014 the next MCP integration layer \u2014 it becomes a live procurement intelligence function that most teams currently do not have.",
          },
          {
            title: "Regulatory reporting preparation",
            body: "In regulated European markets, VAT returns, AML transaction monitoring, and audit trail generation consume disproportionate finance team hours. An MCP-connected agent can pre-structure transaction categorisation for VAT, flag transactions that deviate from expected patterns, and draft the narrative documentation auditors require. The data is already in Qonto. The protocol is available. The workflows need building.",
          },
          {
            title: "Cross-entity treasury decisions",
            body: "For companies operating across multiple European entities \u2014 common in DACH, Benelux, and cross-border SaaS \u2014 the cash visibility problem is acute. MCP opens the door to agents that aggregate treasury position across entities, model inter-company loan scenarios, and recommend cash pooling actions. Most companies currently manage this with spreadsheets.",
          },
          {
            title: "Board pack financial section, generated from live data",
            body: "Every month, finance teams produce the same structure: P&L vs budget, cash position, key variances, forward outlook. The inputs are always in the bank account and accounting system. The narrative has 3 variables. This is one of the highest-effort, lowest-skill tasks in a finance function \u2014 and it is entirely automatable with MCP-connected agents. The CFO\u2019s job becomes reviewing and signing off, not producing.",
          },
        ],
      },
      {
        type: "labeled",
        label: "The approval paradox \u2014 a risk no one is discussing",
        body: "Qonto is careful to say: nothing moves unless you approve. This is presented as a safety feature, and it is. But if every agentic action requires human approval, you have not automated the finance function. You have added a new interface to the same manual process. You are still the bottleneck.",
      },
      {
        type: "pull-quote",
        text: "If every agentic action requires human approval, you have not automated the finance function. You have added a new interface to the same manual process.",
      },
      {
        type: "highlight",
        text: "The sophisticated question for any finance leader adopting MCP is: which actions are safe to run autonomously, which require approval, and how do you build a trust framework that allows those gates to evolve? Early adopters who think carefully about that tiering will build genuine leverage. Those who keep approval gates on everything will find that MCP feels impressive in demos and underwhelming in practice.",
      },
      {
        type: "labeled",
        label: "The European regulatory layer nobody mentions in product launches",
        body: "I work across European regulated financial services. MCP-connected financial agents operating in the EU exist inside a specific regulatory context, and finance leaders need to understand it before they automate at scale.",
      },
      {
        type: "bullets",
        items: [
          "PSD2 and PSD3 regulate who can initiate payment instructions. If an AI agent executing a Qonto action triggers a payment, questions arise about whether that constitutes a payment initiation service and what authorisation is required.",
          "GDPR Article 22 restricts automated decision-making that produces legal or significant financial effects. Sending an invoice, locking a card, onboarding a team member \u2014 these are consequential actions. Humans need to be meaningfully in the loop, not just clicking approve on a pre-formed instruction they cannot practically reverse.",
          "The EU AI Act classifies AI systems used in financial services as potentially high-risk, triggering requirements around transparency, human oversight, and auditability. Agentic systems that touch payment data and initiate financial actions will need documentation, audit logging, and governance structures that most SME finance teams are not currently thinking about.",
        ],
      },
      {
        type: "p",
        text: "I am not raising these to discourage adoption. I am raising them because the finance leaders who build MCP-connected workflows with these constraints designed in from the start will not have to rebuild them in 18 months when enforcement catches up.",
      },
      {
        type: "labeled",
        label: "What this means for traditional banks \u2014 and why they should be paying attention",
        body: "Qonto is a neobank. It has clean data architecture, modern API-first infrastructure, and no 40-year-old core banking system negotiating every technical decision. Deutsche Bank, Barclays, Soci\u00e9t\u00e9 G\u00e9n\u00e9rale \u2014 they cannot ship an MCP server in 2026. Not because they lack the talent or the intent. Because the data they would need to expose is locked inside systems that predate the web.",
      },
      {
        type: "highlight",
        text: "This is the structural moat that Qonto\u2019s MCP launch creates. Every enterprise bank client that migrates to a neobank for their operating account \u2014 even partially \u2014 because the neobank\u2019s data is AI-native and the incumbent\u2019s is not, represents a strategic loss that takes years to claw back.",
      },
      {
        type: "labeled",
        label: "The new CFO skillset: prompt architecture",
        body: "There is one implication of MCP adoption I have not seen discussed anywhere, and I think it is the most important for individual finance professionals. The leverage in an MCP-connected finance function does not come from the tool. It comes from the quality of the prompts directing the tool. A poorly-specified prompt produces a generic answer. A well-specified prompt \u2014 one that includes business context, decision criteria, output format, and escalation conditions \u2014 produces intelligence that moves a business forward.",
      },
      {
        type: "pull-quote",
        text: "The most valuable skill in the next 24 months for finance professionals will not be financial modelling. It will be the ability to write precise, high-context prompts that extract the right decisions from a system that has access to all your financial data.",
      },
      {
        type: "bold-p",
        text: "Qonto\u2019s MCP implementation is the most structurally significant fintech product move of 2026, and it is being covered as a feature announcement. It is not. It is the beginning of AI-native finance operations \u2014 where the bank account is not a place you log into, but a live context layer that powers the intelligence your agents run on.",
      },
      {
        type: "question",
        text: "For finance leaders: the question is not whether to try Qonto MCP. The question is what your agentic finance operating model looks like \u2014 and how you design it to scale safely inside EU regulatory constraints. That is the harder question. It is also the right one.",
      },
    ],
  },
  {
    slug: "ai-ipo-valuations",
    title: "Three companies. One technology wave. The numbers that matter.",
    excerpt:
      "SpaceX. Anthropic. OpenAI. Market capitalisations the world has never seen \u2014 and we\u2019re not halfway through the year.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "5 min",
    live: true,
    blocks: [
      {
        type: "stat-grid",
        stats: [
          {
            value: "$1.75\u20132T",
            label: "SpaceX target IPO valuation",
            sub: "Largest IPO in history",
          },
          {
            value: "$65B",
            label: "Anthropic Series H raise",
            sub: "$965B valuation",
          },
          {
            value: "$47B",
            label: "Anthropic ARR",
            sub: "Primarily coding agents & enterprise",
          },
          {
            value: "$852B\u20131T",
            label: "OpenAI IPO target",
            sub: "Still operating at a loss",
          },
        ],
      },
      {
        type: "labeled",
        label: "SpaceX",
        body: "SpaceX is targeting a listing at a valuation of $1.75 to $2 trillion \u2014 the largest IPO in history, and by a significant margin. For context, the previous record was Saudi Aramco raising $25.6 billion in 2019. That\u2019s three Aramcos in capital raised alone.",
      },
      {
        type: "labeled",
        label: "Anthropic",
        body: "Anthropic just closed a $65 billion Series H at a $965 billion valuation \u2014 what is expected to be its final private fundraise before IPO. Annual recurring revenue is now reported at around $47 billion, driven primarily by coding agents and enterprise adoption.",
      },
      {
        type: "labeled",
        label: "OpenAI",
        body: "OpenAI confidentially filed its S-1 with the SEC, targeting a Q4 listing at a valuation between $852 billion and $1 trillion \u2014 while still operating at a loss for every $1 of revenue earned.",
      },
      {
        type: "highlight",
        text: "Three companies. One technology wave. One calendar year. And we are not even halfway through.",
      },
      {
        type: "bold-p",
        text: "The question for everyone building right now isn\u2019t whether AI will change the nature of work \u2014 it already has. The question is whether we are choosing to up-skill at the same speed.",
      },
      {
        type: "question",
        text: "The trillion-dollar listings are happening whether we\u2019re ready or not. The opportunity \u2014 and the responsibility \u2014 is to be part of what comes next.",
      },
    ],
  },
  {
    slug: "activity-vs-impact",
    title:
      "Activity vs impact: how Duolingo accidentally ran two AI experiments at once",
    excerpt:
      "One part of Duolingo measured whether employees used AI. The other part had two people build the company\u2019s fastest-growing course ever. Same company. Two completely different definitions of AI impact.",
    topic: "Leadership",
    date: "2025",
    readTime: "6 min",
    live: true,
    blocks: [
      {
        type: "p",
        text: "\u201cAre you using AI at work?\u201d is like asking someone in 2010 \u201cDo you use the internet?\u201d Of course they do. But it tells you nothing about what anyone is actually producing.",
      },
      {
        type: "p",
        text: "3 years into GenAI, and the most common way companies measure AI impact is still tracking whether people are using it.",
      },
      {
        type: "labeled",
        label: "The Duolingo experiment",
        body: "Last April, Duolingo built AI usage into performance reviews. Employees pushed back \u2014 asking whether they were expected to use AI just for AI\u2019s sake. The policy was reversed.",
      },
      {
        type: "labeled",
        label: "What was happening in another part of the same company",
        body: "A product manager and a designer \u2014 neither of them engineers, neither chess players \u2014 used AI to prototype an entire chess course from scratch. They pitched it in August 2024. Had a working prototype by October. An engineer joined to ship it. By early 2025, it was in beta. Today it has millions of daily active users. Duolingo\u2019s fastest-growing course ever.",
      },
      {
        type: "pull-quote",
        text: "Same company. Two completely different definitions of AI impact. The first measured adoption. The second created revenue.",
      },
      {
        type: "highlight",
        text: "That gap between tracking activity and measuring value is where most organisations are sitting right now.",
      },
      {
        type: "p",
        text: "How do you evaluate someone who used AI to deliver in 2 days what used to take a team of four two weeks? The effort looks smaller. The output is larger. The old metrics don\u2019t capture what just happened.",
      },
      {
        type: "question",
        text: "How is your organisation measuring AI\u2019s contribution \u2014 activity or impact?",
      },
    ],
  },
  {
    slug: "ai-revenue-per-employee-data",
    title: "The data backs it: AI\u2019s impact gap isn\u2019t about adoption",
    excerpt:
      "Klarna achieved a 152% lift in revenue per employee while halving its workforce. AI-native companies are running at 5 to 15 times traditional SaaS benchmarks. The numbers are in.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "5 min",
    live: true,
    blocks: [
      {
        type: "p",
        text: "Last week I wrote about the gap between companies tracking AI activity and companies measuring AI impact. The data is in \u2014 and it\u2019s clarifying.",
      },
      {
        type: "stat-grid",
        stats: [
          {
            value: "152%",
            label: "Klarna revenue per employee lift since Q1 2023",
            sub: "Workforce halved as revenue grew 108%",
          },
          {
            value: "$2.77M",
            label: "Lovable revenue per employee",
            sub: "5\u20137x traditional SaaS",
          },
          {
            value: "~$6.7M",
            label: "Cursor revenue per employee",
            sub: "AI-native benchmark",
          },
          {
            value: "~$4.7M",
            label: "Midjourney revenue per employee",
            sub: "Lean team, massive scale",
          },
        ],
      },
      {
        type: "p",
        text: "Traditional SaaS benchmarks sit at $200K\u2013$400K revenue per employee. AI-native companies are running at 5 to 15 times that figure. This is not a marginal improvement. This is a structural shift in what a unit of human work can produce.",
      },
      {
        type: "labeled",
        label: "Why most companies aren\u2019t there yet",
        body: "MIT research shows 95% of GenAI pilots deliver little to no measurable P&L impact. Gartner data shows only 7% of finance leaders report high impact from their AI use cases. Most organisations are investing in AI adoption \u2014 not AI outcomes.",
      },
      {
        type: "pull-quote",
        text: "The difference between Klarna and most enterprise AI programmes isn\u2019t the technology. It\u2019s what they chose to measure.",
      },
      {
        type: "p",
        text: "Klarna didn\u2019t just deploy AI tools. They redesigned workflows around AI output. They restructured what employees are responsible for producing. And they measured revenue per employee \u2014 not AI usage rates.",
      },
      {
        type: "question",
        text: "Which metric is your organisation actually tracking \u2014 and which one would change your strategy if you measured it instead?",
      },
    ],
  },
  {
    slug: "work-evolution-curve",
    title: "The Work Evolution Curve: why 86% of companies are stuck at Stage B",
    excerpt:
      "86% of organisations are increasing AI budgets. Only 20% report measurable revenue impact. That gap has a name \u2014 and a map.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "6 min",
    live: true,
    blocks: [
      {
        type: "stat-grid",
        stats: [
          {
            value: "86%",
            label: "Organisations increasing AI budgets",
            sub: "Deloitte State of AI 2026",
          },
          {
            value: "20%",
            label: "Report measurable revenue impact",
            sub: "Same dataset",
          },
          {
            value: "$2M",
            label: "Revenue per employee target",
            sub: "Gartner projection by 2030",
          },
          {
            value: "Stage B\u2192D",
            label: "The journey",
            sub: "Most companies start here",
          },
        ],
      },
      {
        type: "p",
        text: "3 years into GenAI and the picture is becoming clearer. 86% of organisations are increasing AI budgets. Only 20% report measurable revenue impact. That gap has a name.",
      },
      {
        type: "labeled",
        label: "Stage B \u2014 where most companies sit",
        body: "AI is assisting humans, but humans still own every workflow. Output is still capped by headcount. Useful. But not transformative.",
      },
      {
        type: "labeled",
        label: "Stage D \u2014 a different category entirely",
        body: "Revenue that structurally didn\u2019t exist before AI \u2014 net-new products, new customer segments, new business models that no additional headcount could have unlocked.",
      },
      {
        type: "pull-quote",
        text: "Name one revenue line in your business that didn\u2019t exist before AI. If the answer takes more than 10 seconds \u2014 you now know exactly where you sit on the curve.",
      },
      {
        type: "p",
        text: "Gartner\u2019s latest data points to a new class of companies on track for $2M in annual revenue per employee by 2030. Not by cutting costs. By operating at a stage most organisations haven\u2019t reached yet.",
      },
      {
        type: "p",
        text: "The path from Stage B to Stage D isn\u2019t about more AI tools. It\u2019s about redesigning what your workflows are optimising for \u2014 activity, or outcomes?",
      },
      {
        type: "question",
        text: "Where are you \u2014 Stage B, or already building toward Stage D?",
      },
    ],
  },
  {
    slug: "wrong-ai-problem",
    title: "Organisations are solving the wrong AI problem",
    excerpt:
      "The AI conversation keeps defaulting to one word: replacement. But the organisations building competitive advantage aren\u2019t asking how to do the same with fewer people.",
    topic: "Leadership",
    date: "2025",
    readTime: "5 min",
    live: true,
    blocks: [
      {
        type: "p",
        text: "The AI conversation keeps defaulting to one word: replacement.",
      },
      {
        type: "pull-quote",
        text: "The organisations asking \u2018how do we do the same with fewer people?\u2019 are solving the wrong problem.",
      },
      {
        type: "labeled",
        label: "The wrong question",
        body: "How do we do the same work with fewer people? This question optimises for cost reduction. It treats AI as a labour substitution tool \u2014 and delivers labour substitution outcomes.",
      },
      {
        type: "labeled",
        label: "The right question",
        body: "What could our people accomplish if the low-value work simply wasn\u2019t theirs to carry anymore? This question optimises for capability expansion. It treats AI as a force multiplier \u2014 and delivers force multiplier outcomes.",
      },
      {
        type: "p",
        text: "The difference shows up in the metrics. Companies optimising for headcount reduction typically see 10\u201320% cost savings. Companies optimising for capability expansion are building toward the $2M revenue per employee benchmark that Gartner is now projecting for 2030.",
      },
      {
        type: "highlight",
        text: "The $2M employee isn\u2019t a product of cutting costs. It\u2019s a product of expanding what a single unit of human work can produce.",
      },
      {
        type: "p",
        text: "Gartner\u2019s Agentic AI research identifies capability expansion \u2014 not headcount reduction \u2014 as the primary driver of the top-performing cohort. The AI advantage isn\u2019t about fewer people. It\u2019s about what each person can now accomplish.",
      },
      {
        type: "question",
        text: "Which function in your organisation has the most untapped capacity right now \u2014 and what would it look like if low-value work simply wasn\u2019t theirs to carry anymore?",
      },
    ],
  },
  {
    slug: "transformation-literacy",
    title:
      "Beyond AI literacy: the case for Transformation Literacy",
    excerpt:
      "Dario Amodei\u2019s 38-page essay opens with a question that stopped me cold. The answer reshapes what professionals actually need to develop right now \u2014 and it isn\u2019t AI literacy.",
    topic: "Future of Work",
    date: "2025",
    readTime: "7 min",
    live: true,
    blocks: [
      {
        type: "p",
        text: "Dario Amodei\u2019s 38-page essay opens with a question that stopped me cold: \u201cHow did you survive this technological adolescence without destroying yourself?\u201d",
      },
      {
        type: "p",
        text: "It\u2019s not a question about tools. It\u2019s a question about orientation \u2014 how you position yourself relative to a technology that is changing faster than any institution can accommodate.",
      },
      {
        type: "labeled",
        label: "The literacy gap",
        body: "Most professional development programmes are focused on AI literacy \u2014 teaching people to use AI tools effectively in their current role. That\u2019s necessary. But it isn\u2019t sufficient. What the next phase requires is something I\u2019d call Transformation Literacy: the ability to reimagine what your role could be \u2014 not just execute it more efficiently.",
      },
      {
        type: "pull-quote",
        text: "Don\u2019t ask \u2018How can AI make me better at my current job?\u2019 Ask \u2018What becomes possible when AI unlocks 80% of my time?\u2019",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Portfolio Thinking",
            body: "Stop viewing your career as a fixed title or function. Start viewing it as a portfolio of evolving capabilities. The question isn\u2019t \u2018what is my job?\u2019 \u2014 it\u2019s \u2018what can I build, solve, or create with the capabilities I\u2019m accumulating?\u2019",
          },
          {
            title: "Extreme Humility",
            body: "Actively work to make your own skills obsolete every six months. Not in a self-destructive way \u2014 but by asking which parts of what you do today will be automated by this time next year. Then get ahead of it.",
          },
          {
            title: "Hyper-Learning",
            body: "Adopt a builder\u2019s mindset. Create with AI weekly, not just consume content about it. The gap between people who read about AI and people who build with it is widening faster than most people realise.",
          },
        ],
      },
      {
        type: "p",
        text: "Amodei\u2019s essay is ultimately about responsibility \u2014 the responsibility of people building powerful technology to think carefully about what comes next. But it\u2019s also a challenge to the rest of us: to be participants in what\u2019s being built, not passengers.",
      },
      {
        type: "question",
        text: "What is one traditional operating method you\u2019re prepared to reimagine this week?",
      },
    ],
  },
  {
    slug: "the-right-to-begin",
    title:
      "The right to begin: why not knowing isn\u2019t weakness in an AI era",
    excerpt:
      "A statement about youth and innocence \u2014 the permission to try, fail, and try again \u2014 turned out to be the most useful reframe I\u2019d encountered for navigating professional uncertainty in a fast-moving technological moment.",
    topic: "Personal & Professional",
    date: "2025",
    readTime: "4 min",
    live: true,
    blocks: [
      {
        type: "p",
        text: "\u201cThey have the right to innocence.\u201d The statement was made about young people. But sitting with it, I found it applied far more broadly \u2014 to anyone navigating a moment of rapid change without a clear map.",
      },
      {
        type: "p",
        text: "We\u2019re in a technological adolescence. The tools are more powerful than anyone fully understands. The norms haven\u2019t been written. The institutions haven\u2019t caught up. And the pressure to appear confident about all of it is immense.",
      },
      {
        type: "labeled",
        label: "What \u2018innocence\u2019 actually means here",
        body: "Not ignorance. Not inexperience. But the permission to approach something new without the weight of needing to be an expert first. The permission to try, to fail, and to try again \u2014 because that\u2019s how we learn. And technology has made the iteration cycle faster than it has ever been.",
      },
      {
        type: "labeled",
        label: "What it looks like in practice",
        body: "Curiosity without judgment \u2014 approaching a new AI tool, a new role, a new industry with genuine openness rather than performed expertise. Asking questions you think you should already know the answers to. Pitching something before you\u2019ve fully figured it out.",
      },
      {
        type: "pull-quote",
        text: "The grownups are still figuring it out too. And uncertainty isn\u2019t weakness. That\u2019s just being human.",
      },
      {
        type: "p",
        text: "The professionals I see building most effectively right now aren\u2019t the ones with the most AI expertise. They\u2019re the ones most comfortable with not knowing \u2014 combined with a bias to try anyway.",
      },
      {
        type: "question",
        text: "What is one thing you\u2019ve been holding back from trying because you didn\u2019t feel ready enough?",
      },
    ],
  },
  {
    slug: "december-recalibration",
    title: "The last 31 days: a case for recalibrating before January",
    excerpt:
      "Most people won\u2019t reset in December. They\u2019ll close deals, finish projects, and plan Q1. But what if you used these last 31 days differently \u2014 not to start over, but to check whether what you\u2019re building still aligns with what you believe matters?",
    topic: "Personal & Professional",
    date: "2025",
    readTime: "4 min",
    live: true,
    blocks: [
      {
        type: "p",
        text: "The last 31 days of a year ending in 5. The next one is a decade away.",
      },
      {
        type: "p",
        text: "Most of us won\u2019t reset this month. We\u2019ll close deals, finish projects, plan Q1. The momentum of the year carries forward \u2014 and that\u2019s often the right call.",
      },
      {
        type: "labeled",
        label: "But what if you used 31 days differently?",
        body: "Not to start over. Not to \u2018save\u2019 the year. Just enough time to stop one thing quietly draining you. Start one conversation that matters. Recalibrate one buried priority.",
      },
      {
        type: "pull-quote",
        text: "December isn\u2019t too late to adjust. It\u2019s actually the perfect checkpoint.",
      },
      {
        type: "p",
        text: "The goals we set in January were set by a version of us that didn\u2019t know what December would teach. A lot has happened since January. The question isn\u2019t whether to keep going \u2014 it\u2019s whether what you\u2019re building is still aligned with what you believe matters.",
      },
      {
        type: "highlight",
        text: "Is what I\u2019m building still aligned with what I believe matters?",
      },
      {
        type: "p",
        text: "That single question, answered honestly, is worth more than any year-end productivity framework.",
      },
      {
        type: "question",
        text: "What is one thing you\u2019re carrying into January that you could choose to leave behind?",
      },
    ],
  },
  {
    slug: "ai-in-finance",
    title:
      "How AI is rewriting financial services \u2014 from Goldman Sachs to Project Mercury",
    excerpt:
      "OpenAI quietly hired 100+ ex-Wall Street bankers to train ChatGPT to build financial models. Goldman Sachs drafts 95% of IPO documents with AI \u2014 in minutes, not days. The inflection point in financial services is here.",
    topic: "Fintech & Payments",
    date: "2025",
    readTime: "6 min",
    live: true,
    blocks: [
      {
        type: "p",
        text: "Two things happened recently that didn\u2019t get enough attention.",
      },
      {
        type: "bullets",
        items: [
          "OpenAI quietly hired over 100 ex-Wall Street bankers \u2014 not to advise them, but to train ChatGPT to build financial models as part of Project Mercury.",
          "Goldman Sachs admitted that AI now drafts 95% of their IPO documents \u2014 not in days or hours, but in minutes.",
        ],
      },
      {
        type: "p",
        text: "Taken individually, each of these is interesting. Taken together, they mark something more significant: the moment AI moved from assisting financial professionals to performing core financial work.",
      },
      {
        type: "stat-grid",
        stats: [
          {
            value: "95%",
            label: "Goldman Sachs IPO documents drafted by AI",
            sub: "Minutes not days",
          },
          {
            value: "76%",
            label: "JPMorgan AI market direction accuracy",
            sub: "Live deployment",
          },
          {
            value: "100+",
            label: "Ex-Wall Street bankers hired by OpenAI",
            sub: "Training Project Mercury",
          },
          {
            value: "Real-time",
            label: "Morgan Stanley client research",
            sub: "AI-powered answers",
          },
        ],
      },
      {
        type: "labeled",
        label: "What\u2019s actually changing",
        body: "Financial modelling \u2014 manual for decades \u2014 is going from human-built to machine-assisted at pace. IPO document preparation. Market direction prediction. Client-facing research synthesis. These are not peripheral tasks. They are the core work of financial services.",
      },
      {
        type: "labeled",
        label: "Project Mercury",
        body: "OpenAI\u2019s Project Mercury is significant not because of the product it will produce, but because of what it signals: that frontier AI labs see financial modelling as a domain where AI can operate at professional level \u2014 and are investing accordingly.",
      },
      {
        type: "pull-quote",
        text: "The professionals who will advance in the next decade of financial services are those who combine deep domain expertise with the ability to direct, evaluate, and build on AI output \u2014 not those who compete with it.",
      },
      {
        type: "p",
        text: "This isn\u2019t a story about displacement. It\u2019s a story about where the value in financial work is going to sit. The domain knowledge still matters. The regulatory judgement still matters. The client relationship still matters. What changes is the ratio of that high-judgment work to the hours previously spent on the mechanical execution beneath it.",
      },
      {
        type: "question",
        text: "How are you preparing now to stay ahead of this shift?",
      },
    ],
  },
  {
    slug: "how-to-set-up-a-claude-project",
    title: "How to Set Up a Claude Project the Right Way: A Step-by-Step Blueprint",
    excerpt:
      "A Claude Project is a persistent workspace built from three layers. Most people set one up wrong and wonder why answers still drift. Here's the discipline that makes the difference.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "8 min",
    live: true,
    blocks: [
      {
        type: "pull-quote",
        text: "The single rule that prevents most problems: anything that must persist goes into the knowledge base or instructions — never into a single chat.",
      },
      {
        type: "bold-p",
        text: "If you've ever re-explained the same context to an AI assistant for the tenth time, Claude Projects are the fix. But most people create a project, dump a few files in, and wonder why answers still drift. The difference between a project that feels like a trained teammate and one that feels like a slightly-better chatbot comes down to setup discipline.",
      },
      {
        type: "labeled",
        label: "What is a Claude Project?",
        body: "A Claude Project is a self-contained workspace inside Claude that bundles a knowledge base, custom instructions, and a set of related chats around one goal — a product, a client, or a workflow. It has three layers: the knowledge base (documents available to every chat), project instructions (standing rules applied across all chats), and individual chats (which are isolated from each other by default).",
      },
      {
        type: "highlight",
        text: "The layer most people miss: individual chats are isolated. One chat cannot see what happened in another. A brilliant decision you made in Tuesday's chat is invisible to the chat you open on Wednesday.",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Define the project's boundary",
            body: "One project equals one coherent workstream. Projects can't cross-reference each other — don't split things that need shared context, and don't merge two unrelated ventures into one.",
          },
          {
            title: "Write a one-page project brief (the charter)",
            body: "This is the first and most important file in your knowledge base. Include: mission (one line), current state, definition of done, in scope / out of scope, a glossary, and open items. That last field does quiet, powerful work — by explicitly marking what's undecided, you teach Claude to ask instead of invent.",
          },
          {
            title: "Curate a lean knowledge base",
            body: "Upload only genuine reference material: the charter, architecture notes, schema definitions, a style guide, key code snippets, and decisions. Resist the urge to dump everything. Add a one-page index file describing what each document is and when it was last updated — it noticeably reduces retrieval errors.",
          },
          {
            title: "Write project instructions with grounding rules",
            body: "Short directives beat long essays. Include: role (who Claude is in this project), context (stack, audience, constraints), grounding rules (ground every answer in the knowledge base — name the file a fact came from), do/don't lists, and output style. The grounding block is what separates a reliable project from a confident-but-wrong one.",
          },
          {
            title: "Keep a decision log",
            body: "Because chats don't persist to each other, decisions need a home. Create a single decision log file in the knowledge base with two sections: decisions made (dated and numbered) and pending changes. When you settle something in a chat, write it to the log.",
          },
          {
            title: "Iterate the setup",
            body: "Your first instructions won't be perfect. After about five chats, you'll notice Claude repeating a mistake or re-asking for context you could have supplied. Each time, fold the fix into the instructions or add the missing file. This compounding is the biggest driver of a low-hallucination, high-context project.",
          },
        ],
      },
      {
        type: "labeled",
        label: "Common mistakes",
        body: "Treating a chat as memory (it isn't — durable facts go in files). Over-stuffing the knowledge base (lean and indexed beats large and messy). Vague instructions ('be helpful' does nothing; 'never invent pricing — ask' does a lot). Never updating (instructions go stale as the product evolves — review them every couple of weeks).",
      },
      {
        type: "bullets",
        intro: "Frequently asked questions:",
        items: [
          "Does Claude remember things between chats? Only what's in the knowledge base or instructions. Individual chats are isolated.",
          "Is there a file limit? No fixed count, but total content works within the context window. On paid plans Claude uses RAG to expand effective capacity by roughly 10x.",
          "Do project instructions replace my global preferences? No — they stack. Global preferences load first; project instructions add venture-specific context on top.",
          "What if I delete a chat? Deleting a chat does not affect the project's instructions or knowledge base. They're separate.",
        ],
      },
      {
        type: "pull-quote",
        text: "Put durable context in the knowledge base, behaviour in the instructions, decisions in a log — and keep individual chats for thinking, not storage.",
      },
    ],
  },
  {
    slug: "claude-personal-vs-project-instructions",
    title: "Personal Instructions vs Project Instructions in Claude: Why the Separation Matters",
    excerpt:
      "Claude has two instruction layers. Most people pour everything into one box — and then wonder why Claude brings up their startup's database schema in the middle of a personal travel question.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "5 min",
    live: true,
    blocks: [
      {
        type: "pull-quote",
        text: "Personal instructions define how you work. Project instructions define what you're working on.",
      },
      {
        type: "bold-p",
        text: "Claude reads instructions in two layers, each with a different scope. Used correctly, the separation is what lets the same Claude be a sharp technical co-builder in one window and a neutral generalist in the next.",
      },
      {
        type: "labeled",
        label: "Personal instructions",
        body: "Global — they load into every conversation you have with Claude, across every project and every standalone chat. This is where you describe how you work and how you want to be treated. These are for durable, universal preferences: tone, how you want to be challenged, formatting.",
      },
      {
        type: "labeled",
        label: "Project instructions",
        body: "Scoped — they load only inside the specific project they belong to. This is where you describe what you're working on and the rules for that particular workstream: the stack, the audience, the constraints, the grounding rules tied to that project's knowledge base.",
      },
      {
        type: "labeled",
        label: "How the two layers stack",
        body: "They don't compete — they combine. When you open a chat inside a project, Claude reads your personal instructions first, then layers the project instructions on top. The practical consequence: never repeat a global preference inside a project. If 'challenge my reasoning and don't flatter me' already lives in your personal instructions, you don't restate it in every project.",
      },
      {
        type: "bullets",
        intro: "Belongs in personal instructions (global):",
        items: [
          "Who you are professionally, in one or two lines",
          "How you want answers delivered — brief-first, plain prose, minimal formatting",
          "How you want to be challenged — directness, surfacing risks, disagreeing when warranted",
          "Universal don'ts — no flattery, no invented facts, no padding",
          "Standing preferences like units, date format, and language",
        ],
      },
      {
        type: "bullets",
        intro: "Belongs in project instructions (scoped):",
        items: [
          "Claude's role in that specific project",
          "Product context, tech stack, and audience",
          "Grounding rules tied to that project's knowledge base",
          "Project-specific do/don't lists (e.g., 'don't change the framework without flagging why')",
          "Who owns what, if you're working with collaborators",
        ],
      },
      {
        type: "highlight",
        text: "Why the separation actually matters: it prevents context bleed (global instructions surface everywhere — project-specific detail doesn't belong in every chat), keeps each layer maintainable, and makes your communication preferences portable across all new projects from day one.",
      },
      {
        type: "labeled",
        label: "How to write strong personal instructions",
        body: "Keep them about you and communication, not any single project. A reliable structure: About me (a short professional snapshot), How I want you to communicate (answer-first, formatting preferences), Interaction — do (challenge weak reasoning, separate fact from suggestion, ask one question at a time), Interaction — don't (no flattery, no confident-but-unverified detail, no padding for length).",
      },
      {
        type: "labeled",
        label: "What to keep out of personal instructions",
        body: "Anything project-specific (one product's schema, a client's name), anything sensitive (credentials, personal identifiers), and anything you only want occasionally. Global means always — if you wouldn't want it surfacing in a random unrelated chat, scope it to a project instead.",
      },
      {
        type: "bullets",
        intro: "Frequently asked questions:",
        items: [
          "Do project instructions override personal instructions? No — they stack. Personal loads first, project adds on top. If they conflict, the more specific guidance tends to win.",
          "Should I repeat my tone preferences in every project? No. Set it once globally. Repeating wastes space and risks inconsistency.",
          "What if I want a rule everywhere but stronger in one project? Set the baseline globally, add a sharper restated version in the project that needs it — a deliberate belt-and-suspenders approach.",
        ],
      },
      {
        type: "pull-quote",
        text: "Two layers, two jobs. Respect the boundary between them and Claude becomes both consistent and context-aware — the same reliable collaborator, correctly scoped to whatever you're doing right now.",
      },
    ],
  },
  {
    slug: "claude-kickoff-prompt-template",
    title: "Why You Should Write a Kickoff Prompt Before Every New Claude Chat (With a Reusable Template)",
    excerpt:
      "The first message sets the trajectory for everything after it. Spend ninety seconds framing the chat properly and you get a focused, grounded session. Skip it and you get drift, scope creep, and confident guesses.",
    topic: "AI & Technology",
    date: "2025",
    readTime: "5 min",
    live: true,
    blocks: [
      {
        type: "pull-quote",
        text: "A kickoff prompt is a mission briefing, not a question. It names the single task, draws a boundary around scope, points Claude at the right knowledge, and instructs it to ask before assuming.",
      },
      {
        type: "bold-p",
        text: "Inside a Claude Project, your instructions and knowledge base load automatically — but individual chats are isolated from each other. Whatever you decided in another chat doesn't carry over unless it's written into the project's knowledge base. Each new chat starts with the project's standing context but none of the situational context for the specific task at hand. A kickoff prompt fills that gap.",
      },
      {
        type: "labeled",
        label: "What a kickoff prompt is",
        body: "The first message you send in a new chat that frames the entire conversation. It names the single task, draws a boundary around scope, points Claude at the right knowledge, and instructs it to ask before assuming. It pairs naturally with a piece of project hygiene worth adopting: one task per chat. A chat dedicated to 'design the database schema' stays that; a different task gets a different chat.",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Focus",
            body: "One line stating the single task and explicitly telling Claude not to drift into other topics.",
          },
          {
            title: "What and why",
            body: "What you're assessing or building, and why it matters. Context improves the quality of the reasoning.",
          },
          {
            title: "Goal",
            body: "The concrete outcome you want from this chat (a recommendation, a plan, a draft) — not a vague 'help'.",
          },
          {
            title: "How to approach it",
            body: "Any method, constraints, or grounding rules: which files to rely on, your stack, what's in or out of scope.",
          },
          {
            title: "What to ask first",
            body: "The instruction to surface missing inputs as questions before analysing, ideally one at a time, rather than assuming them. This is the quiet hero — it converts Claude from a tool that guesses into a collaborator that checks.",
          },
        ],
      },
      {
        type: "highlight",
        text: "Reusable template — copy, fill in the brackets, paste as your first message:\n\nThis chat is focused on ONE task: [the task]. Stay on this; don't drift into [unrelated areas].\n\nWHAT WE'RE DOING AND WHY\n[What you're assessing or building.] This matters because [the stakes].\n\nGOAL\n[The concrete, actionable outcome you want from this chat.]\n\nHOW TO APPROACH IT\n- Ground everything in [the relevant knowledge files]. Name the file when you state a fact from it.\n- [Any constraints, your tech stack, what's in/out of scope.]\n- Separate grounded facts from your own suggestions, and label suggestions as suggestions.\n\nBEFORE YOU START — ASK ME WHAT YOU NEED\nSome inputs aren't defined yet: [list them]. Don't assume any of these. Ask me — one question at a time — starting with whichever single input most changes the outcome.\n\nStart by confirming you've read the relevant knowledge files, then ask your first question.",
      },
      {
        type: "labeled",
        label: "The 'confirm you read the files' trick",
        body: "Notice the last line of the template. Asking Claude to confirm it has read the relevant knowledge files before doing anything is a cheap, effective safeguard. It surfaces the rare case where a chat didn't pick up your knowledge base, and it primes Claude to actually use that material rather than answer from general knowledge. One sentence, meaningful payoff.",
      },
      {
        type: "labeled",
        label: "When you can skip it",
        body: "Not every chat needs a full kickoff prompt. Quick, low-stakes questions — a syntax lookup, a one-off reword — don't warrant the ceremony. Reserve the structured kickoff for working chats: decisions, plans, designs, and anything where an unforced assumption would be expensive to unwind.",
      },
      {
        type: "bullets",
        intro: "Frequently asked questions:",
        items: [
          "Why can't Claude just remember my last chat? Inside a project, chats are isolated by design. Situational context for a specific task comes from your kickoff prompt or the knowledge base.",
          "Isn't this just a longer prompt? It's a structured one. The value isn't length — it's that it sets scope, goal, grounding, and a rule to ask before assuming.",
          "Do I need a kickoff prompt if I already have project instructions? They work together. Instructions are the constitution; the kickoff is the agenda.",
          "Can I save kickoff prompts to reuse? Yes — keep a small library of templates per task type (architecture decisions, drafting, reviews). Reusing them keeps your sessions consistent.",
          "What's the single most important part? The instruction to ask before assuming. It turns missing information into a question instead of a fabrication.",
        ],
      },
      {
        type: "pull-quote",
        text: "A new chat is a blank stage, and the first message is the script. Spend ninety seconds framing the task, the goal, the grounding, and the rule to ask before assuming — and you trade a wandering, guess-prone session for a focused, grounded one.",
      },
    ],
  },
  {
    slug: "engineering-principles-ai-coding-agents",
    title:
      "What I look for when I audit an AI-assisted engineering team \u2014 17 principles that determine whether agentic code compounds or collapses",
    excerpt:
      "Before designing an AI operating model around an engineering team, I run an architecture audit. These 17 principles are what I check. They determine whether an AI-assisted codebase stays governable or becomes a liability.",
    topic: "AI & Technology",
    date: "June 2026",
    readTime: "10 min",
    live: true,
    keywords: [
      "engineering principles AI coding agents fintech",
      "AI coding agents architecture",
      "agentic code governance",
      "AI engineering audit",
      "fintech AI operating model",
      "Claude Code engineering principles",
      "AI-assisted engineering team",
      "EU AI Act engineering",
      "DORA AI compliance",
      "GDPR AI systems",
    ],
    blocks: [
      {
        type: "bold-p",
        text: "Most conversations about AI coding agents focus on the prompt. Most problems with AI-assisted codebases exist underneath it.",
      },
      {
        type: "p",
        text: "I\u2019ve built 6 production AI systems using Claude Code, Codex, n8n, and Supabase \u2014 across language learning platforms, content pipelines, agentic commerce, and workflow automation. When I assess an AI-assisted engineering operation before advising on operating model design, I\u2019m not looking at the prompts. I\u2019m looking at the architectural decisions that were made before the first agent session opened.",
      },
      {
        type: "p",
        text: "These are the 17 principles that determine whether an AI-assisted codebase is an asset or a liability. They apply to any company letting AI agents touch production systems \u2014 and in regulated financial services, the cost of getting them wrong is not just technical debt. It\u2019s a DORA incident, a GDPR breach, or an EU AI Act audit finding.",
      },
      {
        type: "labeled",
        label: "Why AI agents make architectural principles more important, not less",
        body: "A senior engineer accumulates institutional knowledge. They notice when a change looks architecturally wrong, push back on shortcuts, and remember the decision made three months ago about why your ingestion pipeline writes to staging before publishing. An AI agent has none of that \u2014 unless you build the scaffolding that provides it. Agents are fast, capable, and have no skin in the game. They will take the most direct path to completing the task. If that path bypasses a constraint, removes a security control, or introduces a second source of truth for the same fact, the agent will do it \u2014 not out of malice, but because nothing stopped it. The 17 principles below are calibrated for the reality of building with AI agents at v1-to-v2 scale. Not enterprise ceremony. The minimum that keeps your system governable, auditable, and changeable as it grows.",
      },
      {
        type: "labeled",
        label: "Principle 1 \u2014 One database, one authority",
        body: "Your primary datastore is the single source of truth. Pages render from it. Search indexes it. AI agents query it. Nothing else holds authoritative state. The failure mode is subtle: an agent tasked with making a feature faster introduces a JSON file or a CMS collection that starts holding authoritative facts. Six months later you have two sources of truth for the same data. They\u2019ve drifted. The inconsistency exists at the architecture level, not in any one piece of code, so it\u2019s nearly impossible to locate by debugging. The rule to give your agent: if a change introduces persistence that could become authoritative for any fact, it must derive from the primary datastore and be invalidatable from it. In financial services this principle isn\u2019t optional. A payments system with two sources of truth for transaction state is a settlement risk, not a code smell.",
      },
      {
        type: "labeled",
        label: "Principle 2 \u2014 Automation writes to staging. Publishing is a gate.",
        body: "Any automated pipeline \u2014 AI extraction, scheduled imports, web scraping, CSV uploads \u2014 should write to a staging or proposed-change layer, not directly to your published data. Publishing is a governed action, not the default output of an automation run. Agents given broad write access will use it. An agent tasked with \u2018importing records from this CSV\u2019 will, if not constrained, write directly to your core tables. The staging boundary is the constraint. Anti-pattern: adding a \u2018temporary\u2019 direct-write shortcut to speed up development. There are no temporary shortcuts at the architecture boundary. They stay. For DORA-regulated firms, every automated write that bypasses a staging layer is an unlogged change event.",
      },
      {
        type: "labeled",
        label: "Principle 3 \u2014 Facts are claims with provenance",
        body: "If your system holds facts that users rely on, those facts should carry metadata: where did this come from, when was it sourced, how confident are we, what\u2019s the verification status? This matters especially when AI is generating or processing facts. A bare column holding a value with no provenance is a liability \u2014 you can\u2019t answer \u2018why does it say this?\u2019, you can\u2019t prioritise what needs human review, and you can\u2019t safely ground AI responses in data whose reliability you can\u2019t assess. When an agent adds a new fact-bearing field to your schema, the task spec should explicitly require the claim shape \u2014 source, source date, confidence, verification status \u2014 not just the value field. For a credit decision system or a compliance record under the EU AI Act, this isn\u2019t engineering hygiene. It\u2019s a legal requirement.",
      },
      {
        type: "labeled",
        label: "Principle 4 \u2014 Decisions live in written artifacts, not chat threads",
        body: "Context matters enormously in an AI-assisted workflow because agents have no memory between sessions. If the rationale for a decision lives only in a chat thread, the next agent session \u2014 or the next human \u2014 will rediscover the question and potentially resolve it differently. The decision log is the institutional memory the agent lacks. If a task requires resolving an open architectural question, the agent surfaces it. It does not resolve the question in code and move on. Practically: every significant session ends with a structured handoff note \u2014 what changed, what migrations ran, what tests cover it, what assumptions were made, what risks were identified.",
      },
      {
        type: "labeled",
        label: "Principle 5 \u2014 Every architectural decision has a written rationale",
        body: "Architecture-Decision Records (ADRs) are the permanent record of why the architecture is the way it is \u2014 distinct from session handoffs. Three fields: the decision, the context that made it necessary, and the alternatives that were rejected. When an agent is asked to modify a component and encounters an ADR that explains why a particular constraint exists, it has the context to make a good decision. Without it, it optimises locally and breaks something globally.",
      },
      {
        type: "labeled",
        label: "Principle 6 \u2014 No feature ships without a data-governance path",
        body: "Before any data-touching feature goes to implementation, the spec must answer: what does this read? What does this write? Does it touch published data or only staging? Does it need row-level security? Does it need an audit event? Does it need provenance or confidence tracking? These questions take 5 minutes to answer in a spec and 5 days to retrofit into code. An agent that starts implementing a feature without these answers will make implicit choices \u2014 often wrong ones \u2014 that become architecture. Make this a mandatory block in every task spec template. In regulated financial services, this block is also your EU AI Act Article 13 transparency pre-work.",
      },
      {
        type: "labeled",
        label: "Principle 7 \u2014 Least privilege by default",
        body: "Row-level security on every table. Public read granted only through narrow, explicit policies. Privileged operations done server-side with scoped credentials. No path trusted because of where it comes from. AI agents will widen permissions to get things working. \u2018I\u2019ll just disable RLS on this table for now\u2019 is an agent completing a task by removing a constraint. The constraint was there for a reason the agent doesn\u2019t know and doesn\u2019t ask about. The enforcement mechanism that actually works: a CI script that checks every new table migration for security policy enablement and fails the build if it\u2019s absent. Agents will pass gates they can\u2019t argue with. Under GDPR and PSD2, least privilege isn\u2019t a best practice. It\u2019s a data-minimisation requirement.",
      },
      {
        type: "labeled",
        label: "Principle 8 \u2014 Secrets never touch the agent context",
        body: "The agent never holds production credentials. Production secrets are not in the repo, not in the prompt, not in the environment the agent sees. If an agent needs to call an external service, it calls a server-side wrapper that holds the credential. The agent gets the result, not the key. In a DORA-regulated environment, a credential in an agent context is an unlogged access event \u2014 a gap in your operational incident trail.",
      },
      {
        type: "labeled",
        label: "Principle 9 \u2014 Modular monolith with real seams",
        body: "A codebase with no clear module boundaries is hard for a human to navigate. For an agent, it\u2019s nearly impossible \u2014 the agent has no intuition about which parts of the codebase a change should touch, so it touches whatever is technically connected. What you need isn\u2019t microservices. It\u2019s clear domain separation: distinct modules for distinct concerns with explicit seams between them. An agent working on your search module should not need to touch your billing module. If a task requires changes across domains, that\u2019s a signal the task is too large or the domain boundaries are wrong. For vendor integrations, create a seam that the rest of your code calls \u2014 never the vendor SDK directly. This makes vendor-switching cheap and prevents agents from embedding vendor-specific logic throughout your codebase. Modular boundaries also make it significantly easier to isolate and document which components constitute a high-risk AI system component under the EU AI Act.",
      },
      {
        type: "labeled",
        label: "Principle 10 \u2014 SEO and indexability are engineering requirements",
        body: "If search engine visibility matters to your product, programmatic page generation, canonical handling, structured data, and sitemap generation are engineering requirements \u2014 not CMS features, not marketing requests, not afterthoughts. The specific failure mode for AI-assisted development: an agent building a new page type defaults to the simplest rendering approach, which may be client-side only and invisible to crawlers. You don\u2019t find out until your indexation data comes back thin. Build a quality gate: programmatic pages earn indexation by meeting content quality thresholds. Pages below the threshold get noindex treatment. Tests assert this.",
      },
      {
        type: "pull-quote",
        text: "The productivity gain from AI coding agents comes not from reducing the thinking but from eliminating the typing. The thinking \u2014 the spec \u2014 still belongs to the human.",
      },
      {
        type: "labeled",
        label: "Principle 11 \u2014 The spec is the unit of work",
        body: "\u2018Build the review console\u2019 is not a task. It\u2019s an invitation for the agent to make a hundred decisions you haven\u2019t made yet and present them to you as a fait accompli. A task is a spec with an objective, explicit non-goals, a list of allowed files, constraints, a data-governance block, and acceptance criteria you can grade as pass or fail. If you can\u2019t state acceptance criteria for a task, the task isn\u2019t ready to hand over. That\u2019s not a limitation \u2014 it\u2019s information. The pre-work of writing the spec is where most of the real engineering judgment lives.",
      },
      {
        type: "labeled",
        label: "Principle 12 \u2014 Change happens in layers",
        body: "When something changes in your system \u2014 a schema migration, a new content type, a modified API contract \u2014 the change should flow in a defined sequence: schema first, then data migration, then application code, then tests, then deployment. An agent given an open-ended change task will make all of these simultaneously in whatever order is most locally convenient. That produces a change that\u2019s hard to roll back, hard to test in isolation, and hard to trace when something breaks. Layer your changes explicitly in the spec. \u2018This task only touches the schema layer. Application code changes are a separate task.\u2019",
      },
      {
        type: "labeled",
        label: "Principle 13 \u2014 Every AI-generated output has a human review gate before it affects users",
        body: "If AI generates content, decisions, or data that users see or rely on, there is a human gate before it reaches them. Not necessarily for every piece \u2014 but for the type, the first time, and whenever the model or prompt changes. This is Principle 2 applied to AI outputs rather than automated writes. For regulated financial services this principle is the operationalisation of EU AI Act Article 14 \u2014 human oversight for high-risk AI systems. Design the gate before the agent builds the feature.",
      },
      {
        type: "labeled",
        label: "Principle 14 \u2014 Separate planning, implementation, and review",
        body: "A planning pass, an implementation pass, and a review pass are three distinct modes of work. They can be done by the same agent in sequence \u2014 or by different agents (Claude Code for architecture, Codex for implementation) \u2014 but collapsing them into one unreviewed motion on any non-trivial task produces unreliable results. An agent cannot meaningfully review its own output for architectural correctness. The human is the final reviewer. That\u2019s not a limitation of the current technology \u2014 it\u2019s the appropriate allocation of judgment given where the technology is today.",
      },
      {
        type: "labeled",
        label: "Principle 15 \u2014 Test your AI pipeline, not just your application",
        body: "If your system uses AI to generate content, classify data, or make decisions, the AI pipeline itself needs tests: evals that define expected behaviour for a set of representative inputs, and that run against every prompt or model change. An agent changing a prompt to fix one problem will break another if there are no evals constraining the output space. Evals don\u2019t need to be exhaustive. They need to cover the failure modes that matter most \u2014 the cases where a wrong output has a real consequence.",
      },
      {
        type: "labeled",
        label: "Principle 16 \u2014 Keep a deliberate non-scope list",
        body: "At any point in the build, there are things you know you\u2019re not doing yet. Keep a written list: what it is, why it\u2019s deferred, and what would trigger adding it. This prevents the list from being interpreted as \u2018we forgot about this\u2019 and makes scope expansion a deliberate decision rather than an accretion. When an agent encounters something that looks like a gap, it should check the non-scope list before filling it.",
      },
      {
        type: "labeled",
        label: "Principle 17 \u2014 The right-sizing test",
        body: "Before adding a principle to your working set, apply this test: does this principle reduce a real risk at current scale, or does it add overhead without protecting anything that matters yet? Real risks at v1 scale: losing data integrity from multiple sources of truth, having an agent undermine your security model, accumulating untraceable technical debt, building in a way that makes the next phase expensive. Not real risks at v1 scale: the absence of a distributed tracing system, a missing event bus, a dedicated audit microservice. Calibrate your principles to the risks you actually face. The principles above are the minimum for a solo builder or small team operating an AI-assisted system that touches user data or makes decisions users rely on.",
      },
      {
        type: "labeled",
        label: "What this means for founders and COOs",
        body: "If you\u2019re a founder or COO running an AI-assisted engineering team, you don\u2019t need to author these principles yourself. But you do need to know whether they exist. The question to ask your team: \u2018Show me the task spec for the last feature an agent built.\u2019 If the answer is a chat thread, you have an architecture problem that will surface at the worst possible moment \u2014 a security incident, a data loss event, or a regulatory audit. The principles above are what I look for when I assess an AI-assisted engineering operation before designing an operating model around it. They\u2019re not a maturity framework. They\u2019re a floor. Below the floor, your AI coding agents are moving fast in a direction you can\u2019t fully see.",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Audit the last 5 agent task handoffs",
            body: "Count how many have a written spec with acceptance criteria. If it\u2019s fewer than 3, introduce the spec template before the next sprint.",
          },
          {
            title: "Run a quick RLS audit on your primary database",
            body: "Check whether any table was migrated in the last 90 days without a security policy. If so, find out why and fix it before it becomes a finding.",
          },
          {
            title: "Map your codebase to 3\u20135 domain modules on a whiteboard",
            body: "Ask your team to do this together. If they can\u2019t agree on the boundaries in under an hour, the modular seams need defining before the next feature build.",
          },
          {
            title: "Check whether your CI pipeline has a security gate on new migrations",
            body: "If it doesn\u2019t, add one. It takes 30 minutes and it will catch an agent\u2019s shortcut at the earliest possible moment.",
          },
        ],
      },
      {
        type: "labeled",
        label: "What are the most important engineering principles when using AI coding agents?",
        body: "The 3 most critical are: single-source database authority (no second sources of truth), staging boundaries for all automated writes (publishing is a governed action, not the default output of an automation run), and spec-driven task handoffs (the spec is the unit of work, not the prompt). These three catch the failure modes most likely to create irreversible damage.",
      },
      {
        type: "labeled",
        label: "How do I prevent an AI coding agent from breaking my security model?",
        body: "Three controls work together: row-level security on every table with CI enforcement, a least-privilege credential architecture where agents call server-side wrappers rather than holding credentials directly, and a non-goals list in every task spec that explicitly excludes security-policy changes from agent scope. Agents pass gates they can\u2019t argue with \u2014 make the gates mechanical.",
      },
      {
        type: "labeled",
        label: "How should I structure a codebase so AI agents work reliably?",
        body: "Use a modular monolith with explicit domain separation and seams at vendor integration points. Agents work reliably within a bounded domain; they produce cascading problems when given unconstrained access to a tangled codebase. If a task requires changes across more than one domain module, it\u2019s either too large or the module boundaries are wrong.",
      },
      {
        type: "labeled",
        label: "How do I handle context between AI agent sessions?",
        body: "Context passes through written artifacts, not chat memory. At the end of every significant session, produce a structured handoff note: what changed, what migrations ran, what tests cover it, what assumptions were made, what risks were identified. The decision log is the institutional memory the agent lacks \u2014 you have to build it explicitly.",
      },
      {
        type: "labeled",
        label: "Do these engineering principles apply to regulated financial services specifically?",
        body: "Yes \u2014 and several are regulatory requirements in disguise. Principle 2 (staging boundaries) maps to DORA change management. Principle 3 (facts with provenance) maps to EU AI Act Article 13 transparency. Principle 6 (data-governance path per feature) is the pre-work for EU AI Act high-risk system documentation. Principle 7 (least privilege) is a GDPR data-minimisation requirement. Building these principles in from day one is cheaper than retrofitting them after a compliance audit.",
      },
      {
        type: "question",
        text: "If you\u2019re building an AI-assisted engineering operation in a regulated industry and want a practical assessment of where your current architecture stands, read about the AI Implementation & Operating Model Design advisory on the Services page \u2014 or book a 30-minute discovery call to start with your specific situation.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
