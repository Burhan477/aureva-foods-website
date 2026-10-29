import type { NavLink } from "../data/navigation";
import { confirmed, site as settings } from "../data/site";

/**
 * JSON-LD builders (SEO_AND_PERFORMANCE.md §7). Only CONFIRMED values from
 * site.ts are used (AD-08); address, social links and the legal name are
 * left out until they are confirmed.
 */

export type JsonLd = Record<string, unknown>;

/** Organization and WebSite, for the Home page */
export function organizationGraph(site: URL, logoUrl: string): JsonLd[] {
  const url = site.href;
  const phone = confirmed(settings.phone);
  const email = confirmed(settings.email);

  return [
    {
      "@type": "Organization",
      "@id": `${url}#organization`,
      name: settings.name.value,
      url,
      logo: logoUrl,
      ...(email && { email }),
      ...((phone || email) && {
        contactPoint: {
          "@type": "ContactPoint",
          ...(phone && { telephone: phone.replace(/\s/g, "") }),
          ...(email && { email }),
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

/**
 * A page that lists products or categories, with the list as an ItemList.
 * Names only: `Product` is not used, since rich results need price or
 * offer details the site does not show (§7, D-07).
 */
export function collectionPage(
  site: URL,
  page: { url: string; title: string; description: string },
  items: { name: string; url?: string }[],
): JsonLd {
  return {
    "@type": "CollectionPage",
    "@id": `${page.url}#webpage`,
    url: page.url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${site.href}#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(item.url && { url: new URL(item.url, site).href }),
      })),
    },
  };
}

/** Serialise for a `<script type="application/ld+json">`; `<` is escaped so no text can close the tag */
export function toJsonLd(graph: JsonLd[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");
}
