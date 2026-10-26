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
    "Aureva Foods is an emerging food ingredients supplier focused on connecting the richness of agricultural produce with the evolving needs of global businesses. We bring together a diverse range of spices, dehydrated ingredients, and fresh fruits and vegetables to support food manufacturers, importers, distributors, wholesalers, and retailers.",
    "With a commitment to product quality, careful sourcing, and dependable business relationships, we aim to make ingredient procurement simpler and more reliable for our partners. From everyday culinary essentials to specialised food ingredients, our goal is to deliver products that meet business requirements while building lasting partnerships based on transparency and trust.",
  ],
  statement: "Quality Ingredients. Reliable Partnerships.",
  /** Image: src/assets/images/sections/home-about.jpg (ASSET_GUIDELINES.md §9.2) */
  imageAlt:
    "Bowls of turmeric powder, whole and ground spices and black peppercorns on a wooden table, with fresh ginger, lemon wedges, cardamom pods and herbs",
};

/**
 * Who We Are (SITE_STRUCTURE.md §4.2 section 2, M5.1). DRAFT-TEMP,
 * PENDING APPROVAL: owner-supplied provisional copy (2026-10-26), shown as
 * supplied except "prioritizing" → "prioritising" (D-08 spelling). Open
 * points for the owner: "Best" is restricted wording (BRAND_GUIDELINES.md
 * §10.2), "Around the World" implies markets served (C-07), and
 * "responsible sourcing" describes a sourcing practice (C-08).
 */
export const whoWeAre = {
  eyebrow: "Who We Are",
  title: "Bringing Nature's Best to Businesses Around the World.",
  paragraphs: [
    "Aureva Foods is built around a simple idea: quality ingredients and dependable partnerships are essential to a successful food business.",
    "We focus on bringing together a diverse portfolio of spices, dehydrated food ingredients, and fresh fruits and vegetables to serve the needs of businesses across the food supply chain. By understanding our customers' requirements and prioritising consistency, clear communication, and responsible sourcing, we aim to make ingredient procurement a smoother and more dependable experience.",
    "Our approach combines an appreciation for agricultural produce with a business-first mindset, helping buyers find the ingredients they need to support their products, customers, and growth.",
  ],
  statement: "Nature's Goodness. Business-Focused Solutions.",
  /**
   * Image: src/assets/images/categories/fresh-fruits-vegetables.jpg
   * (ASSET_GUIDELINES.md §9.2), cropped so the tomatoes on its right
   * edge, which are not in the catalogue, stay out of frame
   */
  imageAlt:
    "Red onions, green chillies, bananas, a halved pomegranate and mangoes among fresh herbs on a wooden table",
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
  supporting: string;
  examplesLabel: string;
  cards: Record<ProductCategory["id"], ProductRangeCardCopy>;
} = {
  eyebrow: "Our Product Range",
  title: "A Diverse Range of Ingredients for Every Need.",
  intro:
    "From essential spices to convenient dehydrated ingredients and fresh agricultural produce, Aureva Foods offers a broad product portfolio designed around the varied requirements of food businesses.",
  supporting:
    "Our range brings together ingredients for food manufacturers, importers, distributors, wholesalers, and retailers, giving business buyers a single point of enquiry for multiple product categories.",
  examplesLabel: "Products",
  cards: {
    spices: {
      description:
        "A selection of whole and ground spices for food preparation, processing, and ingredient sourcing.",
      ctaLabel: "Explore Spices",
    },
    "dehydrated-products": {
      description:
        "Convenient dried ingredients and vegetable powders for food businesses seeking versatile ingredient options.",
      ctaLabel: "Explore Dehydrated Products",
    },
    "fresh-fruits-vegetables": {
      description:
        "Fresh produce options for buyers looking to source everyday agricultural essentials.",
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
  supporting: string;
  capabilities: ProcessingCapability[];
  imageAlt: string;
} = {
  eyebrow: "Our Processing Approach",
  title: "From Agricultural Produce to Business-Ready Ingredients.",
  intro:
    "Every food business has different ingredient requirements. At Aureva Foods, our approach focuses on understanding buyer specifications and identifying suitable product options across spices, dehydrated ingredients, and fresh agricultural produce.",
  supporting:
    "Depending on product requirements and confirmed supplier capabilities, processing and preparation may include cleaning, sorting, size grading, drying, milling, and packaging. Our aim is to help buyers identify appropriate ingredient formats for their intended applications and procurement needs.",
  capabilities: [
    {
      title: "Cleaning & Sorting",
      text: "Preparation of ingredients to remove unwanted material and separate products according to agreed specifications, where supported by the supplier.",
    },
    {
      title: "Drying & Dehydration",
      text: "Dehydrated ingredient formats such as onion, garlic, and vegetable powders, subject to product availability and confirmed processing arrangements.",
    },
    {
      title: "Grinding & Powdering",
      text: "Ground spice and vegetable powder formats suited to buyer requirements, depending on the product and available processing capabilities.",
    },
    {
      title: "Packaging & Order Preparation",
      text: "Explore suitable packaging formats and order quantities based on the product, destination market, and confirmed supplier options.",
    },
  ],
  /**
   * Image: src/assets/images/hero/home-hero.png (ASSET_GUIDELINES.md
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
  paragraphs: string[];
  principles: QualityPrinciple[];
  cta: { label: string; href: string | null; pendingNote: string };
  imageAlt: string;
} = {
  eyebrow: "Our Commitment to Quality",
  title: "Quality You Can Build Your Business On.",
  paragraphs: [
    "In the food ingredients business, quality and consistency are essential to building lasting relationships. At Aureva Foods, our goal is to help business customers source ingredients that align with their product requirements, intended applications, and applicable market expectations.",
    "From discussing product specifications to confirming available documentation and packaging requirements, we aim to support a transparent procurement process that helps buyers make informed decisions.",
    "We recognise the importance of traceability, appropriate handling, and relevant food safety requirements throughout the supply chain.",
  ],
  principles: [
    {
      id: "specifications",
      title: "Product Specifications",
      text: "Discuss product type, form, grade, and buyer requirements before confirming an order.",
    },
    {
      id: "food-safety",
      title: "Food Safety Awareness",
      text: "Consider relevant food safety requirements and handling expectations for the selected product and destination market.",
    },
    {
      id: "documentation",
      title: "Documentation & Traceability",
      text: "Clarify which product documents, batch details, and traceability records are available for a particular order.",
    },
    {
      id: "partnerships",
      title: "Transparent Partnerships",
      text: "Communicate product specifications, order requirements, and documentation expectations clearly with buyers.",
    },
  ],
  cta: {
    label: "Request Product Specifications",
    href: null,
    pendingNote: `"Request Product Specifications" is added here, linking to the enquiry form (${contactLink.href}#enquiry-form), once the Contact page is built in M5.3.`,
  },
  /**
   * Image: src/assets/images/categories/dehydrated-products.jpg
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
  paragraphs: string[];
  marketsLabel: string;
  markets: string[];
  segments: BuyerSegment[];
  cta: {
    title: string;
    text: string;
    label: string;
    href: string | null;
    pendingNote: string;
  };
} = {
  eyebrow: "Global Markets",
  title: "Connecting Quality Ingredients with Global Opportunities.",
  paragraphs: [
    "Food businesses need dependable access to ingredients that meet their product specifications, purchasing requirements, and target-market expectations.",
    "Aureva Foods aims to build connections with importers, distributors, wholesalers, food manufacturers, and other B2B buyers seeking spices, dehydrated ingredients, and fresh agricultural produce. Our focus is on understanding buyer requirements, communicating product details clearly, and exploring suitable sourcing and supply arrangements.",
    "Whether you are evaluating a new supplier or expanding your ingredient portfolio, we welcome enquiries from businesses interested in exploring opportunities with Aureva Foods.",
  ],
  marketsLabel: "Markets served",
  markets: [],
  segments: [
    {
      id: "importers",
      title: "Importers",
      text: "Explore ingredient sourcing opportunities for import requirements.",
    },
    {
      id: "distributors",
      title: "Distributors",
      text: "Discuss suitable product portfolios for distribution channels.",
    },
    {
      id: "manufacturers",
      title: "Food Manufacturers",
      text: "Enquire about ingredient formats and product specifications.",
    },
    {
      id: "wholesalers",
      title: "Wholesalers & Retail Suppliers",
      text: "Explore product options suited to your business requirements.",
    },
  ],
  cta: {
    title: "Looking for a Food Ingredients Partner?",
    text: "Tell us which products you need, your destination market, and your purchasing requirements. Our team can review your enquiry and discuss suitable options.",
    label: "Discuss Your Requirements",
    href: null,
    pendingNote: `Links to the enquiry form (${contactLink.href}#enquiry-form) once the Contact page is built in M5.3; the WhatsApp number is also unconfirmed (C-01, C-02).`,
  },
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
 */
export const enquiryCta: {
  eyebrow: string;
  title: string;
  intro: string;
  topics: string[];
  topicsLabel: string;
  quote: { href: string | null; pendingNote: string };
  /** Image: src/assets/images/categories/spices.jpg (ASSET_GUIDELINES.md §9.2) */
  imageAlt: string;
} = {
  eyebrow: "Let's Work Together",
  title: "Let's Source Better Ingredients, Together.",
  intro:
    "Looking for a reliable source of spices, dehydrated ingredients, or fresh fruits and vegetables? Tell us what your business needs, and let's explore the right options for you.",
  topics: [
    "Product requirements",
    "Specifications",
    "Packaging enquiries",
    "Bulk orders",
  ],
  topicsLabel: "Enquiry topics",
  quote: {
    href: null,
    pendingNote: `Request a Quote links to the enquiry form (${contactLink.href}#enquiry-form) once the Contact page is built in M5.3. WhatsApp Us stays inactive until the number is confirmed (C-01, C-02).`,
  },
  imageAlt:
    "Bowls of turmeric, chilli and other ground spices with coriander seeds, cumin, cardamom pods, dried red chillies, ginger and garlic",
};
