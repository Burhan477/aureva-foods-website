// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Production domain (C-18): canonical URLs, share tags, sitemap and
  // robots.txt are built from it. The live site is on www (owner,
  // 2026-10-29); the bare domain still shows the registrar's default page
  site: "https://www.aurevafoods.com",
  // Every route ends in a slash (AD-02)
  trailingSlash: "always",

  // The one site stylesheet (~10 KB gzip) goes inline, so the first paint
  // doesn't wait on a render-blocking request (Lighthouse, 2026-10-28)
  build: {
    inlineStylesheets: "always",
  },

  integrations: [react()],

  // Self-hosted at build time (AD-10); Inter is the only family (D-24)
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
