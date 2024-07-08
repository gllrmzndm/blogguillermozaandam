import { defineConfig } from "astro/config"; // import lit from '@astrojs/lit';

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  site: "https://gllrmzndm.github.io",
  base: "",

  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "https" }],
  },

  integrations: [mdx(), sitemap(), tailwind(), [astroImageTools]],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "(table[ -]of[ -])?contents?|toc", maxDepth: 3 }],
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: "material-theme-darker",
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: "material-theme",
        dark: "material-theme",
      },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
