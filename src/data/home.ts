import {
  aboutLink,
  contactLink,
  type ProductCategory,
  productCategories,
  productsLink,
} from "./navigation";

/**
 * Home page copy (SITE_STRUCTURE.md §4.1).
 *
 * Hero: DRAFT-TEMP, PENDING APPROVAL. Built only from the approved
 * catalogue and audience (S-02 Q1, Q3, Q9); no claims from
 * BRAND_GUIDELINES.md §10.2. WhatsApp Us is not repeated here because the
 * header shows it on every page (owner instruction, 2026-10-25).
 */
export const hero = {
  eyebrow: "Aureva Foods: Quality Ingredients for Your Business",
  /** Each entry renders on its own line */
  title: ["Sourced in India.", "Supplied for Business."],
  intro:
    "Spices, dehydrated products and fresh fruits and vegetables for importers, distributors and wholesalers.",
  primaryCta: { label: "Explore Our Products", href: productsLink.href },
  /** Request a Quote destination: the enquiry form anchor (D-10) */
  secondaryCta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
  },
  imageAlt:
    "Bowls of turmeric, chilli and other ground spices with coriander seeds, cumin and cardamom pods, beside ginger, garlic and dried red chillies on a wooden table, with green fields behind",
};

/** One About point; the component picks its icon by id */
export interface AboutPoint {
  id: "portfolio" | "discovery" | "b2b" | "enquiries";
  title: string;
  text: string;
}

/**
 * About Aureva Foods (SITE_STRUCTURE.md §4.1, sections 2, 7 and 9).
 *
 * D-24 (2026-10-26) merges the former About, Why Aureva Foods and Global
 * Presence sections into one, because all three repeated the same
 * catalogue-and-audience message. Copy is shortened from the owner's
 * suggestions (2026-10-25/26), DRAFT-TEMP, PENDING REVIEW. It describes
 * the catalogue, audience and enquiry routes only; no history, markets,
 * sourcing model, facilities or credentials (C-05, C-07, C-08).
 */
export const about: {
  eyebrow: string;
  title: string;
  intro: string;
  points: AboutPoint[];
  cta: { label: string; href: string };
  imageAlt: string;
} = {
  eyebrow: "About Aureva Foods",
  title: "Your Partner in Quality Food Ingredients",
  intro:
    "Aureva Foods brings together spices, dehydrated ingredients and fresh produce for businesses that need dependable ingredient sourcing.",
  points: [
    {
      id: "portfolio",
      title: "Diverse Product Portfolio",
      text: "Three ingredient categories in one portfolio.",
    },
    {
      id: "discovery",
      title: "Clear Product Discovery",
      text: "A simple range that makes suitable products easy to find.",
    },
    {
      id: "b2b",
      title: "B2B-Focused Service",
      text: "For importers, distributors, wholesalers and food manufacturers.",
    },
    {
      id: "enquiries",
      title: "Straightforward Enquiries",
      text: "Talk to our team on WhatsApp or through the enquiry form.",
    },
  ],
  cta: { label: "About Aureva Foods", href: aboutLink.href },
  imageAlt:
    "Bowls of turmeric powder, whole and ground spices and black peppercorns on a wooden table, with fresh ginger, lemon wedges, cardamom pods and herbs",
};

/** Home card copy for one category; name, link and image come from navigation.ts */
export interface CategoryCardCopy {
  description: string;
  ctaLabel: string;
}

/**
 * Our Product Categories (SITE_STRUCTURE.md §4.1, section 3, M3.3).
 *
 * DRAFT-TEMP, PENDING APPROVAL: owner-suggested copy (2026-10-26), with the
 * card title kept as the approved category name (BRAND_GUIDELINES.md §9).
 * Examples are catalogue items only; no specifications, origins, capacity
 * or supply terms (C-11).
 */
export const productCategoriesSection: {
  eyebrow: string;
  title: string;
  intro: string;
  cards: Record<ProductCategory["id"], CategoryCardCopy>;
} = {
  eyebrow: "Our Product Range",
  title: "Quality Ingredients. Diverse Possibilities.",
  intro: "Three categories, each with its own range page.",
  cards: {
    spices: {
      description:
        "Whole and ground spices for manufacturing, wholesale and culinary use.",
      ctaLabel: "Explore Spices",
    },
    "dehydrated-products": {
      description:
        "Dehydrated onion and garlic, plus vegetable and fruit powders.",
      ctaLabel: "Explore Dehydrated Products",
    },
    "fresh-fruits-vegetables": {
      description: "Fresh vegetables and fruits for business buyers.",
      ctaLabel: "Explore Fresh Produce",
    },
  },
};

const spicesCategory = productCategories.find(
  (category) => category.id === "spices",
);

/**
 * Featured Spices (SITE_STRUCTURE.md §4.1 section 4, M3.4).
 *
 * Owner-supplied copy (2026-10-26), PENDING APPROVAL. Shows all ten Spices
 * (owner instruction, 2026-10-26; D-12 listed four). The CTA goes to the
 * approved category route (D-10), which is built in M4.2; the header and
 * the category card already link there (owner instruction, 2026-10-26).
 */
export const featuredSpices = {
  eyebrow: "Featured Spices",
  title: "The Essence of Exceptional Spices",
  intro: "Aromatic whole and ground spices for food-industry buyers.",
  cta: {
    label: "Explore All Spices",
    href: spicesCategory?.href ?? productsLink.href,
  },
  carouselLabel: "Featured spices",
};

const dehydratedCategory = productCategories.find(
  (category) => category.id === "dehydrated-products",
);

/**
 * Dehydrated Products Showcase (SITE_STRUCTURE.md §4.1, M3.5).
 *
 * Owner-supplied copy (2026-10-26), PENDING APPROVAL. Shows all twelve
 * Dehydrated Products (owner instruction, 2026-10-26; D-12 listed four).
 * The CTA goes to the approved category route (D-10), which is built in
 * M4.3; the header and the category card already link there.
 */
export const dehydratedShowcase = {
  eyebrow: "Dehydrated Ingredients",
  title: "Convenient Ingredients. Versatile Applications.",
  intro: "Dehydrated onion, garlic and vegetable and fruit powders.",
  cta: {
    label: "Explore All Dehydrated Products",
    href: dehydratedCategory?.href ?? productsLink.href,
  },
  carouselLabel: "Dehydrated products",
};

const freshCategory = productCategories.find(
  (category) => category.id === "fresh-fruits-vegetables",
);

/**
 * Fresh Fruits & Vegetables Showcase (SITE_STRUCTURE.md §4.1, M3.6).
 *
 * Owner-supplied copy (2026-10-26), PENDING APPROVAL. Shows all five
 * products (D-12). No availability, regions, sourcing model, destinations
 * or freshness claims (C-07, C-08). The CTA goes to the approved category
 * route (D-10), which is built in M4.4, as in the other two showcases.
 */
export const freshShowcase = {
  eyebrow: "Fresh Fruits & Vegetables",
  title: "Fresh Produce for Your Business",
  intro: "Fresh vegetables and fruits for business sourcing.",
  cta: {
    label: "Explore All Fresh Produce",
    href: freshCategory?.href ?? productsLink.href,
  },
  carouselLabel: "Fresh fruits and vegetables",
};

/** One Quality & Compliance block; the component picks its icon by id */
export interface QualityPoint {
  id: "product-information" | "documentation" | "enquiries";
  title: string;
  text: string;
}

/**
 * Quality & Compliance (SITE_STRUCTURE.md §4.1 section 8, M3.8).
 *
 * Owner-suggested copy (2026-10-26), PENDING APPROVAL. The eyebrow says
 * "Quality & Compliance", not "Certifications", until credentials are
 * verified (C-05); verified credentials come from site.ts. The blocks say
 * how buyers can ask for information, not that any document, test or
 * process exists. The suggested title was "Quality and Transparency at
 * Every Step"; "every step" implies a documented quality process, which
 * C-05, C-06 and C-08 leave unconfirmed, so it is reworded here. The CTA
 * uses the approved "Request a Quote" label (D-08) and goes to the
 * enquiry form (D-10). Copy shortened under D-24, PENDING REVIEW.
 */
export const qualityCompliance: {
  eyebrow: string;
  title: string;
  intro: string;
  points: QualityPoint[];
  cta: { label: string; href: string | null; pendingNote: string };
} = {
  eyebrow: "Quality & Compliance",
  title: "Transparency in Every Enquiry",
  intro:
    "Ask for the product information and documentation your market requires.",
  points: [
    {
      id: "product-information",
      title: "Product Information",
      text: "Ask for the details of any product in our range.",
    },
    {
      id: "documentation",
      title: "Documentation & Compliance",
      text: "Tell us what your business and destination market need.",
    },
    {
      id: "enquiries",
      title: "Buyer Enquiries",
      text: "Get answers to product questions before you order.",
    },
  ],
  cta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
    pendingNote: "",
  },
};

/**
 * Business Enquiry CTA (SITE_STRUCTURE.md §4.1 section 10).
 *
 * Owner-suggested copy (2026-10-26), shortened under D-24, PENDING REVIEW.
 * No response times, availability, prices or supply terms
 * (BRAND_GUIDELINES.md §10). The buttons keep the approved labels "WhatsApp
 * Us" and "Request a Quote" (D-08) and the approved WhatsApp message (D-20).
 */
export const enquiryCta: {
  title: string;
  intro: string;
  quote: { href: string | null; pendingNote?: string };
} = {
  title: "Looking for the Right Ingredients for Your Business?",
  intro: "Tell us what you need and our team will discuss it with you.",
  quote: { href: `${contactLink.href}#enquiry-form` },
};
