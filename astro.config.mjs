// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  // Self-hosted at build time (AD-10); weights per BRAND_GUIDELINES.md §4
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
    {
      provider: fontProviders.google(),
      name: "DM Serif Display",
      cssVariable: "--font-dm-serif-display",
      weights: [400],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "Times New Roman", "serif"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
