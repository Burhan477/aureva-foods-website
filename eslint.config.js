// @ts-check
import eslintReact from "@eslint-react/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist/", ".astro/", "node_modules/", "public/"]),

  // TypeScript and JavaScript
  tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Astro components, including accessibility rules (ARCHITECTURE_DECISIONS.md AD-15)
  astro.configs["flat/recommended"],
  astro.configs["flat/jsx-a11y-recommended"],

  // React islands (AD-04)
  {
    files: ["**/*.{jsx,tsx}"],
    ...eslintReact.configs["recommended-typescript"],
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ...reactHooks.configs.flat["recommended-latest"],
  },

  // Formatting is left to Prettier
  eslintConfigPrettier,
]);
