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
  { slug: "negotiation", name: "Salary & Negotiation", description: "Getting paid what you’re worth" },
  { slug: "career-switch", name: "Career Switching", description: "Breaking into tech, AI, or new fields" },
  { slug: "mindset", name: "Mindset & Consistency", description: "Staying unstuck and showing up daily" },
] as const;

export const useCases: UseCase[] = [
  {
    id: "multi-agent-job-system",
    title: "Built a multi-agent job search system with 12 modes in Claude Code",
    description:
      "A full pipeline that evaluates job offers (A–F scoring), generates tailored PDFs, tracks applications, and runs 631 evaluations. The human only decides which ones to pursue.",
    result: "631 evaluations, 68 applications sent, 354 tailored PDFs. 74% of offers scored below 4.0 and were filtered out.",
    agent: "Claude Code",
    category: "applications",
    date: "2026-03-17",
    source: "DEV Community",
    sourceUrl: "https://dev.to/santifer/i-built-a-multi-agent-job-search-system-with-claude-code-631-evaluations-12-modes-2cd0",
    saves: 42,
  },
  {
    id: "job-search-os-claude",
    title: "Job Search OS that finds unposted roles and maps referral paths",
    description:
      "Sub-agents audit LinkedIn, find roles that fit, locate conference organizers, draft speaking pitches, and map people at target companies for referrals — focused on jobs that never get posted.",
    agent: "Claude Code",
    category: "linkedin",
    date: "2026-10-08",
    source: "X / Aakash Gupta",
    sourceUrl: "https://x.com/aakashgupta/status/2108260905318539705",
    saves: 28,
  },
  {
    id: "20-ai-prompts-job-search",
    title: "20 AI prompts that cover every stage of the job search",
    description:
      "Ready-to-use prompts for resume positioning, cover letters, personal pitch, LinkedIn upgrade, interview readiness, behavioral stories, compensation strategy, and company intelligence.",
    agent: "ChatGPT / Claude / Gemini",
    category: "resume",
    date: "2026-08-26",
    source: "X",
    sourceUrl: "https://x.com/Igor_Buinevici/status/2092605709632549284",
    saves: 85,
  },
  {
    id: "claude-resume-linkedin-interview",
    title: "7 Claude prompts that nail resume, LinkedIn, interviews and outreach",
    description:
      "Short, high-signal prompts that rewrite your resume, refine LinkedIn, prep interview answers, and craft outreach in minutes.",
    agent: "Claude",
    category: "interview",
    date: "2026-06-10",
    source: "X",
    sourceUrl: "https://x.com/uncover_ai/status/2064724521085747401",
    saves: 31,
  },
  {
    id: "dreamwork-single-prompt",
    title: "Single-prompt job hunting: find roles + write applications",
    description:
      "One prompt finds matching remote AI engineer roles, writes each application, and (with approval) submits directly on company sites via an MCP agent.",
    agent: "Custom agent / Dreamwork",
    category: "applications",
    date: "2026-10-08",
    source: "X",
    sourceUrl: "https://x.com/marcusyul/status/2108246639274307674",
    saves: 67,
  },
  {
    id: "daily-job-agent-search",
    title: "Morning agent that searches LinkedIn, Indeed & Glassdoor and sends a short ranked list",
    description:
      "Agent runs reusable scripts on multiple job sites, deduplicates, drops sponsored/irrelevant results, ranks against your resume criteria, and emails one clean shortlist.",
    agent: "Custom agent",
    category: "applications",
    date: "2026-10-08",
    source: "Reduck",
    sourceUrl: "https://reduck.ai/use-cases/job-search-automation",
    saves: 19,
  },
];
