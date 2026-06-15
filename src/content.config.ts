import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Short-form notes / essays written directly on the site.
const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { thoughts };
