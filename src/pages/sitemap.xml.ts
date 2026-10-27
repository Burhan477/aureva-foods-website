import type { APIRoute } from "astro";

/**
 * sitemap.xml (SEO_AND_PERFORMANCE.md §5): every page in src/pages except
 * the 404 page, so a new page is listed as soon as it exists. Routes end
 * in a slash (AD-02).
 */
const routes = Object.keys(import.meta.glob("./**/*.astro"))
  .filter((path) => !path.endsWith("/404.astro") && !path.includes("["))
  .map((path) => path.slice(1).replace(/(index)?\.astro$/, ""))
  .map((route) => (route.endsWith("/") ? route : `${route}/`))
  .sort();

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("Set `site` in astro.config.mjs (C-18)");

  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
