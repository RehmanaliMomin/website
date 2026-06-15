# rehmanmomin.com

Personal site — typography-first, static, built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the built site
```

## Where things live

| What | File |
| --- | --- |
| Profile, bio, social links, external writing | `src/data/site.ts` |
| Thoughts (posts on this site) | `src/content/thoughts/*.md` |
| About page (experience, skills) | `src/pages/about.astro` |
| Colors, fonts, typography | `src/styles/global.css` |
| Layout / `<head>` / nav | `src/layouts/BaseLayout.astro` |

### Add a thought

Drop a new Markdown file in `src/content/thoughts/`:

```markdown
---
title: "Title here"
date: 2026-06-15
description: "One-line summary for the listing."
---

Body in Markdown.
```

It appears automatically on the home page, `/thoughts`, and the RSS feed. Set
`draft: true` in the frontmatter to hide it.

### Add an external article

Append an entry to the `writing` array in `src/data/site.ts`.

## Deploy (Netlify)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git**, pick the repo.
3. Build command `npm run build`, publish directory `dist` (auto-detected).
4. Add your custom domain and update `site:` in `astro.config.mjs`.

Every push to the default branch redeploys.
