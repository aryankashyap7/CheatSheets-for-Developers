import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc],
    // Preserve Astro's default plugins: GitHub-flavored Markdown and Smartypants
    // default: false
    extendDefaultPlugins: true,
    syntaxHighlight: "prism"
  },
  integrations: [tailwind(), react()]
});