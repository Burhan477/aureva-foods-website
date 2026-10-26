import {
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
  eyebrow: "B2B Ingredient Supply",
  /** Each entry renders on its own line */
  title: ["Sourced in India.", "Supplied for Business."],
  intro:
    "Spices, dehydrated products and fresh fruits and vegetables for importers, distributors and wholesalers. Explore our range, then talk to our team about your sourcing requirements.",
  primaryCta: { label: "Explore Our Products", href: productsLink.href },
  /** Request a Quote destination: the enquiry form anchor (D-10) */
  secondaryCta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
  },
  imageAlt:
    "Bowls of turmeric, chilli and other ground spices with coriander seeds, cumin and cardamom pods, beside ginger, garlic and dried red chillies on a wooden table, with green fields behind",
};

/**
 * About Aureva Foods (SITE_STRUCTURE.md §4.1, section 2).
 *
 * DRAFT-TEMP, PENDING APPROVAL: owner-suggested copy (2026-10-25). It
 * describes the catalogue and audience only; no history, facilities,
 * sourcing model, markets or credentials (C-05, C-07, C-08).
 */
export const about = {
  eyebrow: "About Aureva Foods",
  title: "Your Partner in Quality Food Ingredients",
  intro:
    "Aureva Foods brings together a diverse range of spices, dehydrated ingredients and fresh produce for businesses seeking dependable ingredient sourcing. We aim to make product discovery and supplier enquiries straightforward for importers, distributors, wholesalers and other food-industry buyers.",
  closing:
    "From everyday essentials to specialised ingredient requirements, explore our portfolio and connect with our team to discuss your business needs.",
  cta: { label: "Discover Our Products", href: productsLink.href },
  imageAlt:
    "Bowls of turmeric powder, whole and ground spices and black peppercorns on a wooden table, with fresh ginger, lemon wedges, cardamom pods and herbs",
};

/** Home card copy for one category; name, link and image come from navigation.ts */
export interface CategoryCardCopy {
  description: string;
  /** Items from the approved catalogue (SITE_STRUCTURE.md §5), as one line */
  examples: string;
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
  examplesLabel: string;
  cards: Record<ProductCategory["id"], CategoryCardCopy>;
} = {
  eyebrow: "Our Product Range",
  title: "Quality Ingredients. Diverse Possibilities.",
  intro:
    "Explore our range of spices, dehydrated ingredients and fresh produce for your business sourcing requirements.",
  examplesLabel: "Includes",
  cards: {
    spices: {
      description:
        "Discover a versatile selection of whole and ground spices for food manufacturing, distribution, wholesale and culinary applications.",
      examples:
        "Turmeric, ginger, cardamom, fenugreek, cumin, chilli, coriander, garlic and fennel",
      ctaLabel: "Explore Spices",
    },
    "dehydrated-products": {
      description:
        "Explore dehydrated ingredients and vegetable and fruit powders for convenient ingredient sourcing and diverse food applications.",
      examples:
        "White onion, pink onion, fried onion, garlic, beetroot powder, lemon powder, coriander leaves, dry mango, tamarind, potato, spinach and mint",
      ctaLabel: "Explore Dehydrated Products",
    },
    "fresh-fruits-vegetables": {
      description:
        "Browse a selection of fresh produce for buyers seeking fruit and vegetable sourcing options.",
      examples: "Onion, green chilli, banana, pomegranate and mango",
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
  intro:
    "Explore a selection of aromatic whole and ground spices for diverse food-industry and culinary applications.",
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
  intro:
    "Explore our range of dehydrated vegetables, aromatic ingredients, and fruit and vegetable powders for diverse food-industry applications.",
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
  intro:
    "Explore our selection of fresh fruits and vegetables for business sourcing requirements.",
  cta: {
    label: "Explore All Fresh Produce",
    href: freshCategory?.href ?? productsLink.href,
  },
  carouselLabel: "Fresh fruits and vegetables",
};

/** One "Why Aureva Foods" point; the component picks its icon by id */
export interface WhyAurevaPoint {
  id: "portfolio" | "discovery" | "b2b" | "enquiries";
  title: string;
  text: string;
}

/**
 * Why Aureva Foods (SITE_STRUCTURE.md §4.1 section 7, M3.7, C-12).
 *
 * Owner-suggested copy (2026-10-26), PENDING APPROVAL. Each point describes
 * the catalogue, the audience or the enquiry route only; no experience,
 * markets, sourcing, facilities, testing, credentials or supply terms
 * (BRAND_GUIDELINES.md §10). The second point was "Quality-Focused
 * Approach" in the suggestion; it is retitled to match its text, because
 * no quality process is documented (C-05, C-06). The CTA label is the
 * owner's (2026-10-26) and goes to the Request a Quote destination (D-10),
 * which is built in M5.3.
 */
export const whyAureva: {
  eyebrow: string;
  title: string;
  intro: string;
  points: WhyAurevaPoint[];
  cta: { label: string; href: string };
} = {
  eyebrow: "Why Aureva Foods",
  title: "A Partner for Your Ingredient Sourcing Needs",
  intro:
    "Explore a diverse portfolio of spices, dehydrated ingredients and fresh produce, with a straightforward way to connect with our team about your business requirements.",
  points: [
    {
      id: "portfolio",
      title: "Diverse Product Portfolio",
      text: "Discover spices, dehydrated ingredients and fresh fruits and vegetables in one convenient product portfolio.",
    },
    {
      id: "discovery",
      title: "Clear Product Discovery",
      text: "Our range is organised into three categories, to help buyers identify ingredients that suit their sourcing needs.",
    },
    {
      id: "b2b",
      title: "B2B-Focused Service",
      text: "Our product range is presented for importers, distributors, wholesalers and other business buyers exploring ingredient supply options.",
    },
    {
      id: "enquiries",
      title: "Straightforward Enquiries",
      text: "Connect with our team to discuss product enquiries and your business requirements.",
    },
  ],
  cta: {
    label: "Discuss Your Requirements",
    href: `${contactLink.href}#enquiry-form`,
  },
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
 * label is the owner's. Its destination, the enquiry form (D-10), is built
 * in M5.3, so `href` stays null until then and the button renders inactive
 * rather than linking to a missing page.
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
    "We understand the importance of clear product information and documentation when sourcing food ingredients. Contact our team to discuss your requirements and request the information relevant to your enquiry.",
  points: [
    {
      id: "product-information",
      title: "Product Information",
      text: "Explore our product range and contact our team for relevant product details and documentation.",
    },
    {
      id: "documentation",
      title: "Documentation & Compliance",
      text: "Discuss the documentation requirements applicable to your business and intended market with our team.",
    },
    {
      id: "enquiries",
      title: "Buyer Enquiries",
      text: "Contact us to clarify product-related questions and identify the information needed for your sourcing decision.",
    },
  ],
  cta: {
    label: "Discuss Documentation Requirements",
    href: null,
    pendingNote: `Links to the enquiry form (${contactLink.href}#enquiry-form) once the Contact page is built in M5.3.`,
  },
};

/**
 * Global Presence (SITE_STRUCTURE.md §4.1 section 9, M3.9, C-07).
 *
 * Owner-suggested copy (2026-10-26), PENDING APPROVAL. Markets served are
 * not confirmed (C-07), so the section names no country, region, route,
 * office or volume and describes only an invitation to enquire. Confirmed
 * markets are added later through MarketsList (COMPONENT_INVENTORY.md §6).
 * The audience list is the one in the owner's brief (2026-10-26), worded
 * as who may enquire, not as existing customers. The CTA destination, the
 * enquiry form (D-10), is built in M5.3, so `href` stays null until then
 * and the button renders inactive, as in Quality & Compliance.
 */
export const globalPresence: {
  eyebrow: string;
  title: string;
  intro: string;
  audienceLabel: string;
  audience: string[];
  cta: { label: string; href: string | null; pendingNote: string };
} = {
  eyebrow: "Global Opportunities",
  title: "Connecting Ingredients with Global Opportunities",
  intro:
    "Aureva Foods offers a portfolio of spices, dehydrated ingredients and fresh produce for business buyers. Connect with our team to discuss your product requirements and explore potential sourcing opportunities for your market.",
  audienceLabel: "Enquiries welcome from",
  audience: [
    "Importers",
    "Distributors",
    "Wholesalers",
    "Food manufacturers",
    "Ingredient resellers",
  ],
  cta: {
    label: "Discuss Your Market Requirements",
    href: null,
    pendingNote: `Links to the enquiry form (${contactLink.href}#enquiry-form) once the Contact page is built in M5.3.`,
  },
};

/**
 * Business Enquiry CTA (SITE_STRUCTURE.md §4.1 section 10, M3.10).
 *
 * Owner-suggested copy (2026-10-26), PENDING APPROVAL. No response times,
 * availability, prices or supply terms (BRAND_GUIDELINES.md §10). The
 * buttons keep the approved labels "WhatsApp Us" and "Request a Quote"
 * (D-08, §11) and the approved WhatsApp message (D-20); the suggested
 * "Enquire on WhatsApp" label and message need owner approval first.
 * WhatsApp Us stays inactive until C-01 and C-02 are resolved. Request a
 * Quote goes to the enquiry form (D-10), which is built in M5.3, so `href`
 * stays null until then and the button renders inactive.
 */
export const enquiryCta: {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  quote: { href: string | null; pendingNote: string };
} = {
  eyebrow: "Let's Work Together",
  title: "Looking for the Right Ingredients for Your Business?",
  intro:
    "Tell us what you're looking for. Connect with our team to discuss our product range and your business sourcing requirements.",
  note: "Have a product requirement in mind? We're ready to hear from you.",
  quote: {
    href: null,
    pendingNote: `Request a Quote links to the enquiry form (${contactLink.href}#enquiry-form) once the Contact page is built in M5.3. WhatsApp Us activates once the business number is confirmed (C-01, C-02).`,
  },
};
