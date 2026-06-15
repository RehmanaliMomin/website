---
title: "Agents Belong in the Loop, Not Just the Editor"
date: 2026-06-10
description: "The leverage from AI isn't faster typing — it's collapsing the loop between writing code and knowing whether it's right."
---

Most of the conversation about AI and engineering is still stuck at autocomplete. Faster typing. Boilerplate generation. That's the least interesting part.

The real loop in software isn't writing code — it's the cycle of *write → review → ship → observe → fix*. Every hour an engineer spends is mostly spent moving through that loop, not producing characters. The bottleneck was never typing speed.

So the question I keep asking isn't "can the model write this function," it's "can the model close the loop." Can it triage the alert, pull the relevant logs, correlate them to the change that shipped, form a hypothesis, and hand me a diff with the reasoning attached? That's where the leverage compounds — because that's where the wall-clock actually goes.

The teams that win with this won't be the ones with the best prompts. They'll be the ones who rebuilt their SDLC so an agent can participate at every stage with real context: the codebase, the deploy history, the observability data, the incident playbooks. The model is only as good as what it can see and what it's allowed to do.

I think the org chart of a strong engineering team in a few years looks less like "engineers who use AI tools" and more like "engineers who supervise a fleet of agents across the lifecycle." The skill that matters becomes judgment and verification, not production.
