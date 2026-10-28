import { contactLink, type ProductCategory } from "./navigation";

/**
 * About Us page copy (SITE_STRUCTURE.md §4.2).
 *
 * Company Introduction (section 1, M5.1). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied copy (2026-10-26), shown as supplied except
 * "specialized" → "specialised" (D-08 spelling). It names the catalogue,
 * the audience and the company's aims only; no history, dates, figures,
 * facilities, markets or credentials (C-05, C-07, C-08).
 */
export const companyIntro = {
  eyebrow: "About Aureva Foods",
  title: "Rooted in Quality. Growing Through Trust.",
  paragraphs: [
    "Aureva Foods is a food ingredients supplier bringing together spices, dehydrated ingredients and fresh fruits and vegetables for food manufacturers, importers, distributors and wholesalers.",
    "We aim to make ingredient sourcing simpler, with clear product information and direct conversations with our team.",
  ],
  /** Image: src/assets/images/sections/home-about.webp (ASSET_GUIDELINES.md §9.2) */
  imageAlt:
    "Bowls of turmeric powder, whole and ground spices and black peppercorns on a wooden table, with fresh ginger, lemon wedges, cardamom pods and herbs",
};

/** About card copy for one category; name, link and image come from navigation.ts */
export interface ProductRangeCardCopy {
  description: string;
  ctaLabel: string;
}

/**
 * Our Product Range (SITE_STRUCTURE.md §4.2 section 3, M5.1). DRAFT-TEMP,
 * PENDING APPROVAL: owner-supplied provisional copy (2026-10-26). Card
 * titles stay the approved category names (BRAND_GUIDELINES.md §9), so
 * the brief's "Dehydrated Ingredients" shows as "Dehydrated Products", as
 * on Home. Product lists are not stored here: the component builds them
 * from products.json, so they always match the catalogue (D-14). CTA
 * labels match the Home category cards.
 */
export const productRange: {
  eyebrow: string;
  title: string;
  intro: string;
  cards: Record<ProductCategory["id"], ProductRangeCardCopy>;
} = {
  eyebrow: "Our Product Range",
  title: "A Diverse Range of Ingredients for Every Need",
  intro: "Three categories, with one point of contact for all of them.",
  cards: {
    spices: {
      description:
        "Whole and ground spices for food preparation and processing.",
      ctaLabel: "Explore Spices",
    },
    "dehydrated-products": {
      description: "Dried onion, garlic and vegetable and fruit powders.",
      ctaLabel: "Explore Dehydrated Products",
    },
    "fresh-fruits-vegetables": {
      description: "Fresh vegetables and fruits for business buyers.",
      ctaLabel: "Explore Fresh Produce",
    },
  },
};

/** One processing capability; listed in the usual processing order */
export interface ProcessingCapability {
  title: string;
  text: string;
}

/**
 * Manufacturing & Processing Capabilities (SITE_STRUCTURE.md §4.2
 * section 4, M5.1). BLOCKED (C-08): owner-supplied provisional copy
 * (2026-10-26) that presents processing as supplier-dependent options, not
 * in-house operations. Whether Aureva manufactures, processes or sources
 * each category is unconfirmed, so no facility, machinery, capacity,
 * certification, MOQ, packaging size or lead time may be added. Rewrite
 * this block once C-08 is answered; the component needs no change.
 */
export const processing: {
  eyebrow: string;
  title: string;
  intro: string;
  capabilities: ProcessingCapability[];
  imageAlt: string;
} = {
  eyebrow: "Our Processing Approach",
  title: "From Agricultural Produce to Business-Ready Ingredients",
  intro:
    "We start from your specification and find a suitable format. Depending on the product and confirmed supplier capabilities, preparation may include these steps.",
  capabilities: [
    {
      title: "Cleaning & Sorting",
      text: "Removing unwanted material and separating product to an agreed specification.",
    },
    {
      title: "Drying & Dehydration",
      text: "Dried formats such as onion, garlic and vegetable powders, subject to availability.",
    },
    {
      title: "Grinding & Powdering",
      text: "Ground spice and vegetable powders to suit buyer requirements.",
    },
    {
      title: "Packaging & Order Preparation",
      text: "Packing and order quantities agreed per product and destination.",
    },
  ],
  /**
   * Image: src/assets/images/hero/home-hero.webp (ASSET_GUIDELINES.md
   * §9.2), cropped to the ingredients. Generic ingredients only; it shows
   * no facility, equipment or people, and the alt text claims none.
   */
  imageAlt:
    "Fresh ginger and turmeric roots beside bowls of ground turmeric, chilli and other spice powders, with whole cumin, coriander seeds, cardamom pods and dried red chillies on a wooden table",
};

/** One quality principle; the component picks its icon by id */
export interface QualityPrinciple {
  id: "specifications" | "food-safety" | "documentation" | "partnerships";
  title: string;
  text: string;
}

/**
 * Quality Standards & Certifications, shown without "Certifications"
 * until credentials are verified (SITE_STRUCTURE.md §4.2 section 5, M5.1).
 * BLOCKED (C-05, C-06): owner-supplied provisional copy (2026-10-26),
 * shown as supplied except "recognize" → "recognise" (D-08 spelling). It
 * describes aims and buyer conversations only; no quality process, test,
 * audit, laboratory or approval. Credentials are not listed here: they
 * live in site.ts as BLOCKED and appear through ComplianceList only once
 * CONFIRMED. GST stays out of that list, as a tax registration
 * (BRAND_GUIDELINES.md §10.1). The CTA destination, the enquiry form
 * (D-10), is built in M5.3, so `href` stays null and the button is not
 * rendered until then.
 */
export const quality: {
  eyebrow: string;
  title: string;
  intro: string;
  principles: QualityPrinciple[];
  imageAlt: string;
} = {
  eyebrow: "Our Commitment to Quality",
  title: "Quality You Can Build Your Business On",
  intro:
    "We agree specifications, documentation and handling requirements with each buyer before an order is confirmed.",
  principles: [
    {
      id: "specifications",
      title: "Product Specifications",
      text: "Agree type, form and grade before an order is confirmed.",
    },
    {
      id: "food-safety",
      title: "Food Safety Awareness",
      text: "Handling requirements for the product and destination market.",
    },
    {
      id: "documentation",
      title: "Documentation & Traceability",
      text: "Which documents and batch records are available for each order.",
    },
    {
      id: "partnerships",
      title: "Transparent Partnerships",
      text: "Clear communication on specifications and order terms.",
    },
  ],
  /**
   * Image: src/assets/images/categories/dehydrated-products.webp
   * (ASSET_GUIDELINES.md §9.2). Generic ingredients only; no laboratory,
   * facility or people, and the alt text claims none.
   */
  imageAlt:
    "Bowls of dried onion and garlic flakes, beetroot, spinach and other vegetable powders, with dried lemon slices, fresh onions, garlic and beetroot on a wooden table",
};

/** One buyer segment; the component picks its icon by id */
export interface BuyerSegment {
  id: "importers" | "distributors" | "manufacturers" | "wholesalers";
  title: string;
  text: string;
}

/**
 * Global Markets (SITE_STRUCTURE.md §4.2 section 6, M5.1). BLOCKED
 * (C-07): owner-supplied provisional copy (2026-10-26). Markets served are
 * not confirmed, so the section names no country, region, client, office,
 * route or volume; the buyer segments say who may enquire, not who buys.
 * `markets` stays empty until the owner confirms which may be named
 * publicly; the component lists them only when there are some.
 *
 * CTA: neither the WhatsApp number (C-01, C-02) nor the enquiry form
 * (D-10, built in M5.3) exists yet, so `href` stays null and the button
 * renders inactive, as on Home.
 */
export const globalMarkets: {
  eyebrow: string;
  title: string;
  intro: string;
  marketsLabel: string;
  markets: string[];
  segments: BuyerSegment[];
} = {
  eyebrow: "Who We Work With",
  title: "Built for Business Buyers",
  intro:
    "We welcome enquiries from businesses evaluating a new supplier or expanding their ingredient portfolio.",
  marketsLabel: "Markets served",
  markets: [],
  segments: [
    {
      id: "importers",
      title: "Importers",
      text: "Sourcing for import requirements.",
    },
    {
      id: "distributors",
      title: "Distributors",
      text: "Product portfolios for distribution channels.",
    },
    {
      id: "manufacturers",
      title: "Food Manufacturers",
      text: "Ingredient formats and specifications.",
    },
    {
      id: "wholesalers",
      title: "Wholesalers & Retail Suppliers",
      text: "Product options for resale.",
    },
  ],
};

/**
 * Business Enquiry CTA (SITE_STRUCTURE.md §4.2 section 7, M5.1), through
 * the shared EnquiryCTA. Owner-supplied copy (2026-10-26), PENDING
 * APPROVAL. The buttons keep the approved labels "WhatsApp Us" and
 * "Request a Quote" (D-08, BRAND_GUIDELINES.md §11) and the approved
 * WhatsApp message (D-20), as on Home: the suggested "Chat with us on
 * WhatsApp", "Submit a Business Enquiry" and new message need owner
 * approval first. WhatsApp Us stays inactive until C-01 and C-02 are
 * resolved; Request a Quote goes to the enquiry form (D-10), built in
 * M5.3, so `href` stays null and the button renders inactive.
 *
 * Title from the owner's UI/UX brief (2026-10-27), so each page's panel
 * reads differently; PENDING REVIEW.
 * It replaces "Let's Source Better Ingredients, Together".
 */
export const enquiryCta: {
  title: string;
  intro: string;
  topics: string[];
  topicsLabel: string;
  quote: { href: string | null; pendingNote?: string };
  /** Image: src/assets/images/categories/spices.webp (ASSET_GUIDELINES.md §9.2) */
  imageAlt: string;
} = {
  title: "Partner With Aureva Foods",
  intro:
    "Tell us what your business needs and we'll explore the right options with you.",
  topics: [
    "Product requirements",
    "Specifications",
    "Packaging enquiries",
    "Bulk orders",
  ],
  topicsLabel: "Enquiry topics",
  quote: { href: `${contactLink.href}#enquiry-form` },
  imageAlt:
    "Bowls of turmeric, chilli and other ground spices with coriander seeds, cumin, cardamom pods, dried red chillies, ginger and garlic",
};
