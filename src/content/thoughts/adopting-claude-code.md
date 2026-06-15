---
title: "Rolling Out Claude Code: What Actually Moved the Needle"
date: 2026-06-14
description: "Notes from putting agentic coding into a real engineering org — what compounds, what's overrated, and how I'd spend the budget."
---

I've spent the last stretch moving an engineering org from assisted coding to genuinely agentic workflows. Here's what actually moved the needle, stripped of the hype.

## A CLAUDE.md tree, not a single doc

For anything bigger than a toy repo, one giant context file becomes noise. The fix is a tree: the root `CLAUDE.md` is an index — stack, top-level map, global conventions — and it redirects into module-level files that stay small and accurate.

```
my-repo/
  CLAUDE.md                # 80 lines: stack, top-level map, global conventions
  packages/
    api/
      CLAUDE.md            # 40 lines: API conventions, test command, gotchas
      handlers/
        ...
    web/
      CLAUDE.md            # 50 lines: React conventions, design tokens
      app/
        ...
  infrastructure/
    CLAUDE.md              # 30 lines: deploy targets, dangerous commands
    terraform/
      ...
```

Each file is focused enough to stay true as the code changes. A 600-line monolith goes stale the week after you write it; nobody updates it, and the agent inherits your lies.

## Skills are tribal knowledge made executable

Skills bundle prompts, tools, and commands into named, versioned recipes — `/debug-stuck-hsp-scan`, `/post-deploy-regression-check`. The knowledge that used to live in one senior engineer's head, or in a Slack thread from eight months ago, becomes something anyone can run.

We've codified about ten of these internally and they've measurably cut investigation time. The win isn't any single skill — it's that the workflow stops depending on who's online.

## MCPs are the second big unlock

This is the one I'd push hardest on. Skills make the agent *act* well; MCPs let it *see* reality — your real logs, tickets, and dashboards instead of pasted snippets.

A logs MCP (Chronosphere, Datadog, whatever you run) is on its own probably half the total value. The moment the agent can pull the actual error spike and correlate it to a deploy, you've collapsed the slowest part of every investigation. Cloud-provider CLIs are the next biggest lever — gated behind proper role-based access control.

## PR hygiene is the agent's runbook

Descriptions, files changed, verification steps, rollback commands — all the things that make a PR good for a human reviewer also steer the agent more deterministically. The PR template does double duty: it's the agent's runbook. Invest in the template once and every future agent run gets more reliable for free.

## Two agents: developer and reviewer

A separate reviewer agent — fresh context, no memory of writing the code — catches real bugs the author's agent rationalized away. One caveat I'd underline: don't over-tune the reviewer into a senior-architect persona. Do that and it pushes relentlessly toward over-engineering, and you spend your time arguing with it instead of shipping.

The natural next step is automating it entirely — a plugin that reviews every PR on raise, the way Cursor's Bugbot or CodeRabbit do. For us that means a Bitbucket plugin; the mechanism matters less than closing the loop so review isn't something a human has to remember to trigger.

And let the tool tell you how it's being used — running something like `/insights` periodically surfaces how the team actually works with it, which is where the next round of improvements comes from.

## How I'd spend the money

Pricing is where teams overspend out of caution. My approach:

- **Start everyone on the standard seat** (~$20/month) with no on-demand allowance. Most engineers won't saturate $20 in their first month, and you want *real* usage — not a guess — to drive the spend.
- **Upgrade to Premium (~$100/month) per engineer as they actually hit limits.** Provisioning Premium across the board upfront is overkill.
- In my experience Premium comfortably covers ~12h/day, five days a week of continuous use. I've hit caps occasionally, but the rolling five-hour window made that far less painful than it used to be.

## On tool choice

I've heard good things about other agentic coding tools and won't knock what I haven't run. But our own path is telling: we used Cursor for a long time, costs ballooned, and — more importantly — our mental model was *assisted programming*. Autocomplete with ambition.

Agentic tooling has crossed a threshold recently. It's good enough that we moved over entirely. That's the real shift: not a faster way to type code, but a different unit of work. You stop writing lines and start delegating outcomes. Everything above — the CLAUDE.md tree, the skills, the MCPs, the PR runbooks, the reviewer split — exists to make that delegation reliable.
