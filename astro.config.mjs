import { defineConfig } from "astro/config"; // import lit from '@astrojs/lit';

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { astroImageTools } from "astro-imagetools";
import pagefind from "astro-pagefind";
import serviceWorker from "astrojs-service-worker";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    site: "https://blogguillermozaandam.nl",
    base: "",

    integrations: [mdx(), sitemap(), tailwind(), pagefind(), serviceWorker(), [astroImageTools], compressor({ gzip: false, brotli: true })],

    build: {
    format: "file",
  },
  
  devToolbar: {
    enabled: false
  },

  image: {
    domains: ["astro.build"],
    remotePatterns: [{
      protocol: "https"
    }]
  },
  // Markdown
  markdown: {
    remarkPlugins: [[remarkToc, {
      heading: "(table[ -]of[ -])?contents?|toc",
      maxDepth: 3
    }]],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: "prepend"
    }]],
    syntaxHighlight: "shiki",
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      // theme: "",
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: "catppuccin-latte",
        dark: "dracula"
      },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: []
    }
  }
});