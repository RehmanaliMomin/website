---
title: "Reliability Is the Feature"
date: 2026-06-04
description: "At scale, the interesting work isn't the happy path — it's everything the happy path quietly assumed."
---

Every system that's processed billions of records taught me the same lesson: the happy path is the easy 80%, and it's worth maybe 20% of the engineering. The other 80% of the work lives in the failures the happy path silently assumed wouldn't happen.

Migrate 1.8 billion documents and the headline number — throughput — is almost a footnote. What actually decides whether you ship is the boring machinery around it. Atomic stage claims so two workers don't process the same batch. Stage-aware retries so a transient blip doesn't replay a day of work. Replayable queues so recovery is a button, not an archaeology dig. Execution histories deep enough that when something goes wrong at 2am, the system can tell you *what* it was doing, not just *that* it stopped.

I've come to think of reliability not as a non-functional requirement bolted on at the end, but as the actual product. A pipeline that's correct 99% of the time at a billion records is wrong ten million times. Customers don't experience your architecture diagram; they experience the tail.

The corollary: observability isn't a dashboard you add later. It's the thing that lets you make claims at all. If you can't see it, you don't know it works — you're just hoping. "It's probably fine" is not an engineering statement.

Build the recovery path first. Make the system able to explain itself. The features will still be there; they're just easier when the floor underneath them holds.
