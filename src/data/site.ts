// ─────────────────────────────────────────────────────────────────────────
// Edit this file to update your profile, links, and external writing.
// Everything below is sourced from your resume + the blog links you gave me.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Rehmanali Momin",
  role: "Lead Backend Engineer",
  company: "Nightfall.AI",
  // One-liner shown under the name.
  tagline:
    "Distributed systems, data platforms, and AI-native backends — built for scale and reliability.",
  // Landing intro. A couple of short paragraphs in your voice.
  intro: [
    "I'm a backend engineer with 8+ years building large-scale distributed systems and data platforms. I work at the layer where reliability, cost, and scale collide — storage re-architectures moving billions of records, ingestion pipelines doing millions of events a day, and the observability that keeps them honest.",
    "Right now I lead platform engineering for data-loss prevention across the SaaS apps enterprises live in, and I'm pushing on agentic, AI-driven software development — embedding AI through coding, review, deployment, and on-call to multiply what a team can ship.",
  ],
  email: "rehmanmomin@gmail.com",
  location: "Bengaluru, India",
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rehmanali-momin/" },
  { label: "Medium", href: "https://medium.com/@rehmanmomin" },
  { label: "Email", href: "mailto:rehmanmomin@gmail.com" },
];

// Externally published articles (Medium, company blogs, etc.).
export const writing = [
  {
    title: "Calibrating Engineering Impact Beyond Commit Counts",
    href: "https://medium.com/@rehmanmomin/calibrating-engineering-impact-beyond-commit-counts-0dc54425df20",
    venue: "Medium",
    date: "2025-09-24",
    blurb:
      "What performance reviews get wrong about measuring an engineer's impact — and what to look at instead of code metrics.",
  },
  {
    title:
      "The Death of Long-Form Video: Why LLMs Make Hours-Long Content Obsolete",
    href: "https://medium.com/@rehmanmomin/the-death-of-long-form-video-why-llms-make-hours-long-content-obsolete-dfaee4c8aab0",
    venue: "Medium",
    date: "2025-08-16",
    blurb:
      "When you can extract, analyze, and converse with any video in seconds, the hours-long format stops being the unit of consumption.",
  },
  {
    title: "The Unfashionable Art of Actually Learning Things",
    href: "https://medium.com/@rehmanmomin/the-unfashionable-art-of-actually-learning-things-0cc7359dbb88",
    venue: "Medium",
    date: "2025-08-14",
    blurb:
      "A case for slow, hand-written, deliberately inefficient learning in an age that optimizes it away.",
  },
  {
    title:
      "How Observe.ai Migrated 1.8 Billion Documents with High Throughput and Zero Downtime",
    href: "https://www.observe.ai/blog/how-observe-ai-migrated-1-8-billion-documents-with-high-throughput-and-zero-downtime",
    venue: "Observe.ai Engineering",
    date: "2025-08-04",
    blurb:
      "Moving 1.8B interaction documents off legacy MongoDB onto S3 + Snowflake at 6,000 docs/sec — backfilled in four days with minimal disruption.",
  },
];
