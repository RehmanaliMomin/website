import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// `site` drives canonical URLs, sitemap, RSS, and the OG image URL.
// This is the free GitHub Pages user-site root (repo: RehmanaliMomin.github.io).
export default defineConfig({
  site: "https://rehmanalimomin.github.io",
  integrations: [mdx(), sitemap()],
});