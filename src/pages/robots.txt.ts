import type { APIRoute } from "astro";

/**
 * robots.txt (SEO_AND_PERFORMANCE.md §5): all crawlers allowed, nothing
 * blocked, sitemap linked. Preview deployments are kept out of search by
 * the host's X-Robots-Tag header (M7.1), not by this file.
 */
export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("Set `site` in astro.config.mjs (C-18)");

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site).href}
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
