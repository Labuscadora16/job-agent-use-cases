export type UseCase = {
  id: string;
  title: string;
  description: string;
  prompt?: string;
  result?: string;
  source?: string;
  sourceUrl?: string;
  agent?: string;
  category: string;
  date: string;
  saves?: number;
};

export const categories = [
  { slug: "resume", name: "Resume & Cover Letter", description: "Tailoring documents that actually get interviews" },
  { slug: "linkedin", name: "LinkedIn & Networking", description: "Profile upgrades, outreach, and warm intros" },
  { slug: "interview", name: "Interview Prep", description: "Mock interviews, stories, and company research" },
  { slug: "applications", name: "Applications & Automation", description: "Searching, ranking, and applying smarter" },
  { slug: "negotiation", name: "Salary & Negotiation", description: "Getting paid what you're worth" },
  { slug: "career-switch", name: "Career Switching", description: "Breaking into tech, AI, or new fields" },
  { slug: "portfolio", name: "Portfolio & Proof of Work", description: "Building visible proof you can do the job" },
  { slug: "company-research", name: "Company Research", description: "Research companies, teams, and culture before you apply" },
  { slug: "follow-ups", name: "Follow-ups & Closing", description: "Thank-yous, status checks, and post-offer negotiation" },
  { slug: "mindset", name: "Mindset & Consistency", description: "Staying unstuck and showing up daily" },
] as const;

export const useCases: UseCase[] = [
  {
    id: "multi-agent-job-system",
    title: "Run 631 job evaluations with a 12-mode Claude Code pipeline",
    description:
      "A multi-agent system scores every role A–F, generates tailored PDFs, tracks applications, and filters out weak fits so you only act on the top ones.",
    result: "631 evaluations · 68 applications · 354 tailored PDFs · 74% of roles filtered out below 4.0",
    prompt:
      "You are my job search operations team. Modes: (1) score this job description 1–10 against my resume criteria, (2) list gaps, (3) draft a tailored one-page resume PDF outline, (4) write a 3-sentence why-this-role note. Only recommend apply if score ≥ 7.",
    agent: "Claude Code",
    category: "applications",
    date: "2026-03-17",
    source: "DEV Community",
    sourceUrl: "https://dev.to/santifer/i-built-a-multi-agent-job-search-system-with-claude-code-631-evaluations-12-modes-2cd0",
    saves: 42,
  },
  {
    id: "job-search-os-claude",
    title: "Map unposted roles and referral paths with a Job Search OS",
    description:
      "Sub-agents audit LinkedIn, find fit roles, locate conference organizers, draft speaking pitches, and map people at target companies for warm intros — focused on jobs that never get posted.",
    result: "Built for hidden-market outreach instead of spray-and-pray applications",
    prompt:
      "Given my target role and 10 companies: (1) find 3 people per company who could refer me, (2) draft a short value-first LinkedIn note (no ask for a job), (3) flag any unposted team growth signals from recent posts or news.",
    agent: "Claude Code",
    category: "linkedin",
    date: "2026-10-08",
    source: "X / Aakash Gupta",
    sourceUrl: "https://x.com/aakashgupta/status/2108260905318539705",
    saves: 28,
  },
  {
    id: "20-ai-prompts-job-search",
    title: "Cover every stage of the search with 20 ready prompts",
    description:
      "A prompt pack for resume positioning, cover letters, personal pitch, LinkedIn upgrade, interview stories, compensation strategy, and company intelligence.",
    result: "One pack that replaces random ChatGPT sessions with a repeatable system",
    prompt:
      "Act as a senior recruiter for [ROLE] at [COMPANY]. Here is my resume: [PASTE]. Rewrite the top 6 bullets so each starts with a result, includes a real number I provided, and mirrors keywords from this job description: [PASTE JD]. Do not invent achievements.",
    agent: "ChatGPT / Claude / Gemini",
    category: "resume",
    date: "2026-08-26",
    source: "X",
    sourceUrl: "https://x.com/Igor_Buinevici/status/2092605709632549284",
    saves: 85,
  },
  {
    id: "claude-resume-linkedin-interview",
    title: "Nail resume, LinkedIn, interviews and outreach with 7 Claude prompts",
    description:
      "Short, high-signal prompts that rewrite your resume, refine LinkedIn, prep behavioral answers, and craft outreach in minutes — without sounding like generic AI.",
    result: "Minutes per asset instead of hours of blank-page work",
    prompt:
      "Rewrite my LinkedIn About in first person, 3 short paragraphs: (1) who I help and the outcome, (2) 2–3 proof points with numbers, (3) what I'm looking for next. Tone: clear and human, not corporate. Resume: [PASTE].",
    agent: "Claude",
    category: "interview",
    date: "2026-06-10",
    source: "X",
    sourceUrl: "https://x.com/uncover_ai/status/2064724521085747401",
    saves: 31,
  },
  {
    id: "dreamwork-single-prompt",
    title: "Find roles and write applications from a single prompt",
    description:
      "One prompt finds matching remote AI engineer roles, writes each application, and with approval submits on company sites via an MCP agent.",
    result: "End-to-end apply flow with human approval before submit",
    prompt:
      "Search for remote [ROLE] roles posted in the last 7 days that match: [3 must-have skills]. For each match above 75% fit: draft a tailored resume summary and a 4-sentence application note. Do not submit until I approve.",
    agent: "Custom agent",
    category: "applications",
    date: "2026-10-08",
    source: "X",
    sourceUrl: "https://x.com/marcusyul/status/2108246639274307674",
    saves: 67,
  },
  {
    id: "daily-job-agent-search",
    title: "Get a ranked shortlist every morning from LinkedIn, Indeed & Glassdoor",
    description:
      "An agent runs reusable scripts across job sites, deduplicates, drops sponsored noise, ranks against your criteria, and emails one clean shortlist.",
    result: "One email instead of 45 minutes of tab chaos",
    prompt:
      "Every weekday at 7am: pull new [ROLE] postings from LinkedIn, Indeed, Glassdoor. Deduplicate by company+title. Drop staffing-agency spam. Rank by match to: [criteria]. Email me the top 8 with one-line why-fit.",
    agent: "Custom agent",
    category: "applications",
    date: "2026-10-08",
    source: "Reduck",
    sourceUrl: "https://reduck.ai/use-cases/job-search-automation",
    saves: 19,
  },
  {
    id: "proof-of-work-portfolio",
    title: "Build a proof-of-work artifact instead of another generic portfolio",
    description:
      "In a cautious 2026 market, polished resumes look the same. Hiring teams respond to a small public artifact that shows how you think on a real problem for the target role.",
    result: "Shifts the conversation from 'can they do it?' to 'here's how they did it'",
    prompt:
      "I'm applying for [ROLE] at [COMPANY]. Their JD emphasizes [2–3 themes]. Propose one small public artifact I can build in under 8 hours that demonstrates those themes with my real background. Include: problem, approach, what to publish, and how to link it in the application.",
    agent: "Claude / ChatGPT",
    category: "portfolio",
    date: "2026-09-20",
    source: "Industry pattern",
    saves: 54,
  },
  {
    id: "salary-comp-research",
    title: "Walk into negotiation with real comp bands and a script",
    description:
      "Pull levels.fyi / teamblind-style ranges, map them to the role level, and draft a negotiation script that anchors on market data without sounding aggressive.",
    result: "Candidates who negotiate with data typically leave 10–20% more on the table less often",
    prompt:
      "Role: [TITLE] at [COMPANY], location [CITY], level [L]. Research realistic base + bonus + equity bands. Give me: (1) a target total comp range, (2) a 4-line negotiation script when they ask expectations, (3) what to say if they lowball by 15%.",
    agent: "Claude / ChatGPT",
    category: "negotiation",
    date: "2026-09-01",
    source: "Practitioner pattern",
    saves: 47,
  },
];
