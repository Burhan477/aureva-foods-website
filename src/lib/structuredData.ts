import type { NavLink } from "../data/navigation";
import { confirmed, site as settings } from "../data/site";

/**
 * JSON-LD builders (SEO_AND_PERFORMANCE.md §7). Only CONFIRMED values from
 * site.ts are used (AD-08); email, address, social links and the legal
 * name are left out until they are confirmed.
 */

export type JsonLd = Record<string, unknown>;

/** Organization and WebSite, for the Home page */
export function organizationGraph(site: URL, logoUrl: string): JsonLd[] {
  const url = site.href;
  const phone = confirmed(settings.phone);

  return [
    {
      "@type": "Organization",
      "@id": `${url}#organization`,
      name: settings.name.value,
      url,
      logo: logoUrl,
      ...(phone && {
        contactPoint: {
          "@type": "ContactPoint",
          telephone: phone.replace(/\s/g, ""),
          contactType: "sales",
        },
      }),
    },
    {
      "@type": "WebSite",
      "@id": `${url}#website`,
      name: settings.name.value,
      url,
      publisher: { "@id": `${url}#organization` },
    },
  ];
}

/** The breadcrumb trail shown on a category page, last item is the page itself */
export function breadcrumbList(site: URL, items: NavLink[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, site).href,
    })),
  };
}

/** Serialise for a `<script type="application/ld+json">`; `<` is escaped so no text can close the tag */
export function toJsonLd(graph: JsonLd[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");
}
