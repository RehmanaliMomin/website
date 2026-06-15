import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { profile } from "../data/site";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const thoughts = (await getCollection("thoughts")).filter(
    (t) => !t.data.draft,
  );
  return rss({
    title: `${profile.name} — Thoughts`,
    description: "Notes on engineering, AI, and craft.",
    site: context.site!,
    items: thoughts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((t) => ({
        title: t.data.title,
        description: t.data.description ?? "",
        pubDate: t.data.date,
        link: `/thoughts/${t.id}/`,
      })),
  });
}
