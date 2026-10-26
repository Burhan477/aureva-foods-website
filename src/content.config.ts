import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Product catalogue (ARCHITECTURE_DECISIONS.md AD-08).
 *
 * Display names, as-supplied names and page groups follow
 * SITE_STRUCTURE.md §5 (D-14), except "Dehydrated Garlic", which uses the
 * owner's wording for the home showcase (2026-10-26; D-14 lists "Garlic").
 * No formats, grades, origins, packaging or specifications (C-10, C-11,
 * D-07). Spices use a single group, "Spices": S-01 gives that page no
 * groups.
 *
 * After editing this schema, restart the dev server (AD-08).
 */
const products = defineCollection({
  loader: file("src/data/products.json"),
  schema: ({ image }) =>
    z.object({
      /** Position in the catalogue as supplied (SITE_STRUCTURE.md §5); collections are otherwise sorted by id */
      order: z.number().int().positive(),
      name: z.string(),
      /** The client's original wording (S-02 Q3), kept as the record */
      suppliedName: z.string(),
      category: z.enum([
        "spices",
        "dehydrated-products",
        "fresh-fruits-vegetables",
      ]),
      /** S-01 page group on the category page */
      group: z.string(),
      image: image(),
      imageAlt: z.string(),
    }),
});

export const collections = { products };
