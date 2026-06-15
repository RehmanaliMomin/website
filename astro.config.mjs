import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Update `site` to your real domain before deploying for correct
// canonical URLs, sitemap, and RSS links.
export default defineConfig({
  site: "https://rehmanmomin.com",
  integrations: [mdx(), sitemap()],
});
