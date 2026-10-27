import {
  contactLink,
  homeLink,
  type NavLink,
  productsLink,
} from "./navigation";

/**
 * Dehydrated Products page copy (SITE_STRUCTURE.md §4.5).
 *
 * Page Introduction (section 1). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied starter copy (2026-10-26), shown as supplied. It names
 * the catalogue's three groups (§5.2) and the audience; no origins,
 * grades, forms, certifications, processing, shelf life, packaging or
 * export figures (C-05, C-10, C-11).
 */
export const intro: {
  id: string;
  /** Breadcrumb trail shown as the eyebrow (C-32, D-20); last item is the current page */
  breadcrumbs: NavLink[];
  title: string;
  text: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  imageAlt: string;
} = {
  id: "dehydrated-products-introduction",
  breadcrumbs: [
    { label: "Aureva Foods", href: homeLink.href },
    { label: "Our Products", href: productsLink.href },
    { label: "Dehydrated Products", href: "/products/dehydrated-products/" },
  ],
  title: "Dehydrated Ingredients. Versatile Possibilities.",
  text: "Dehydrated onion, garlic and vegetable powders for importers, distributors, wholesalers and food businesses.",
  /** Request a Quote destination: the enquiry form anchor (D-10) */
  primaryCta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
  },
  /** Dehydrated Onion Products (section 2), not built yet; keep this id stable */
  secondaryCta: {
    label: "Explore Products",
    href: "#dehydrated-onion-products",
  },
  /** Image: src/assets/images/categories/dehydrated-products.jpg (ASSET_GUIDELINES.md §9.2) */
  imageAlt:
    "Wooden bowls of dried onion and garlic flakes, fried onion and red, green and golden vegetable powders, among whole red and white onions, garlic bulbs, beetroot, fresh herbs and dried lemon slices",
};

/** Card copy for one onion product; name, image and alt text come from products.json */
export interface OnionCardCopy {
  /** Short label above the name */
  category: string;
  description: string;
}

/**
 * Dehydrated Onion Products (section 2). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied starter copy (2026-10-26), shown as supplied. No
 * formats (flakes, granules, minced, powder), origins, grades, moisture,
 * shelf life, processing, oil or recipe, certifications or stock claims
 * (C-10, C-11). Fried Onion has its own category label, so it is not
 * presented as a dehydrated form.
 *
 * Request a Quote goes to the enquiry form (D-10). The form reads no URL
 * parameters, so the product name is not carried over; it is in each
 * link's accessible name only. `products` is keyed by products.json id;
 * an onion product without an entry fails the build.
 */
export const onionProducts: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  cta: NavLink;
  products: Record<string, OnionCardCopy>;
} = {
  /** Target of the Page Introduction's "Explore Products"; keep stable */
  id: "dehydrated-onion-products",
  eyebrow: "Dehydrated Onion Range",
  title: "Dehydrated Onion Products for Diverse Applications",
  intro: "White, pink and fried onion for food preparation and seasoning.",
  cta: { label: "Request a Quote", href: `${contactLink.href}#enquiry-form` },
  products: {
    "white-onion": {
      category: "Dehydrated Onion",
      description:
        "A versatile ingredient for food preparation and seasoning blends.",
    },
    "pink-onion": {
      category: "Dehydrated Onion",
      description: "A dehydrated onion option for culinary and commercial use.",
    },
    "fried-onion": {
      category: "Fried Onion Product",
      description:
        "Golden fried onion pieces. Composition confirmed on enquiry.",
    },
  },
};

/** One supporting point in the Dehydrated Garlic section */
export interface GarlicPoint {
  id: "applications" | "packaging" | "specifications";
  title: string;
  text: string;
}

/**
 * Dehydrated Garlic (section 3). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied starter copy (2026-10-26), shown as supplied. The
 * catalogue confirms "Dehydrated Garlic" only (§5.2), so no format
 * (flakes, granules, minced, powder) is named, and applications are worded
 * as possible uses. No origin, processing, grade, moisture, shelf life,
 * packaging sizes, certifications, prices or MOQs (C-10, C-11).
 *
 * Both CTAs go to the enquiry form (D-10). The form reads no URL
 * parameters, so "Dehydrated Garlic" is not carried over; Request
 * Specifications names it in its accessible name only.
 */
export const garlic: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  points: GarlicPoint[];
  primaryCta: NavLink;
  /** Product named in the CTAs' accessible names */
  productName: string;
  imageAlt: string;
} = {
  id: "dehydrated-garlic",
  eyebrow: "Dehydrated Garlic",
  title: "Convenient Garlic Ingredients for Food Businesses",
  intro: "Dehydrated garlic for seasoning, prepared foods and sauces.",
  points: [
    {
      id: "applications",
      title: "Versatile Food Applications",
      text: "Seasoning blends, prepared foods, sauces and other formulations.",
    },
    {
      id: "packaging",
      title: "Product & Packaging Requirements",
      text: "Agree format, packaging and order quantity with our team.",
    },
    {
      id: "specifications",
      title: "Specifications on Request",
      text: "Specifications and documents confirmed before you order.",
    },
  ],
  primaryCta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
  },

  productName: "Dehydrated Garlic",
  /** Image: src/assets/images/sections/dehydrated-garlic.jpg (ASSET_GUIDELINES.md §9.2) */
  imageAlt:
    "A whole garlic bulb and peeled garlic cloves beside a scatter of dried garlic pieces on a cream surface",
};

/**
 * Vegetable & Other Powders (section 4). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied starter copy (2026-10-26), shown as supplied except
 * "colorful" → "colourful" (D-08 spelling). Descriptions name the
 * source ingredient and possible uses only; no grade, origin, purity,
 * nutrition, processing, moisture, shelf life, packaging, price,
 * certification or MOQ claims (C-10, C-11).
 *
 * The CTA goes to the enquiry form (D-10). The form reads no URL
 * parameters, so the product name is not carried over; it is in each
 * link's accessible name only. `products` is keyed by products.json id;
 * a powder without an entry fails the build.
 */
export const powders: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  cta: NavLink;
  /** Description per product, keyed by products.json id */
  products: Record<string, string>;
} = {
  id: "vegetable-other-powders",
  eyebrow: "Vegetable & Other Powders",
  title: "Versatile Powdered Ingredients for Your Business",
  intro:
    "Vegetable, herb and fruit powders for seasoning and product development.",
  cta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
  },
  products: {
    "beetroot-powder": "A colourful vegetable powder for food formulations.",
    "lemon-powder":
      "A citrus ingredient for seasoning and product development.",
    "coriander-leaves-powder": "A herb powder for seasoning blends.",
    "dry-mango-powder": "A tangy mango powder for seasoning blends.",
    "tamarind-powder": "A tamarind ingredient for sauces and seasoning.",
    "potato-powder": "A potato ingredient for commercial food use.",
    "spinach-powder": "A leafy vegetable powder for food formulations.",
    "mint-leaves-powder": "A mint powder for seasoning blends.",
  },
};

/** One enquiry topic in the specification checklist; never a value */
export interface SpecificationTopic {
  label: string;
  text: string;
}

/**
 * Product Range & Specifications (section 5). BLOCKED on data (C-11),
 * so it is the enquiry prompt SITE_STRUCTURE.md §4.5 allows instead.
 * DRAFT-TEMP, PENDING APPROVAL: owner-supplied copy (2026-10-26), shown
 * as supplied.
 *
 * Product lists are not repeated here: the section takes each group's
 * products from products.json by `group`, so names stay the approved
 * ones (D-14). Every checklist row is an enquiry topic, not a
 * specification: no formats, grades, particle sizes, moisture, shelf
 * life, pack sizes, MOQs, documents or destinations are offered as
 * available (C-05, C-07, C-10, C-11). Open point for the owner:
 * "Delivery destination" implies supply to other markets (C-07), as on
 * the Spices page.
 *
 * `checklist.note` and the headings "Specification Checklist" and "Buyer
 * Enquiry Process" were drafted from the brief's section names and need
 * approval. `countLabels` fill "{count}".
 */
export const specifications: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  checklist: {
    title: string;
    note: string;
    columns: { label: string; text: string };
    rows: SpecificationTopic[];
  };
  process: {
    title: string;
    steps: { title: string; text: string }[];
    cta: NavLink;
  };
} = {
  id: "dehydrated-product-specifications",
  eyebrow: "Product Range & Specifications",
  title: "The Right Ingredients for Your Requirements",
  intro: "Topics to agree for each product and order before you buy.",
  checklist: {
    title: "Specification Checklist",
    note: "These are topics to discuss in your enquiry, not fixed specifications. Details are confirmed for each product and order, and not every option applies to every product.",
    columns: { label: "Topic", text: "What to discuss" },
    rows: [
      {
        label: "Product format",
        text: "Available form for the selected product.",
      },
      {
        label: "Grade and quality",
        text: "Applicable product-specific quality parameters.",
      },
      {
        label: "Particle size",
        text: "Relevant where applicable to the product.",
      },
      {
        label: "Moisture and shelf life",
        text: "Confirmed values from product documentation, where available.",
      },
      {
        label: "Packaging",
        text: "Available packaging formats and buyer requirements.",
      },
      {
        label: "Order quantity",
        text: "Required quantity and applicable minimum order.",
      },
      {
        label: "Documentation",
        text: "Available specifications and supporting documents.",
      },
      {
        label: "Delivery destination",
        text: "Destination market and shipping requirements.",
      },
    ],
  },
  process: {
    title: "Buyer Enquiry Process",
    steps: [
      {
        title: "Select Your Product",
        text: "Identify the dehydrated onion, garlic or powder product required.",
      },
      {
        title: "Share Your Requirements",
        text: "Quantity, application, packaging and specifications.",
      },
      {
        title: "Confirm Product Details",
        text: "Agree availability, documents, pricing and delivery.",
      },
    ],
    /** Request a Quote destination: the enquiry form anchor (D-10) */
    cta: { label: "Request a Quote", href: `${contactLink.href}#enquiry-form` },
  },
};

/**
 * Final Enquiry CTA (section 7), through the shared EnquiryCTA on the
 * Charcoal tone, as on the Spices page. DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied copy (2026-10-26), shown as supplied. The buttons keep
 * the approved labels and order, "WhatsApp Us" Primary and "Request a
 * Quote" Secondary, as on every other page (D-08, BRAND_GUIDELINES.md
 * §11): the brief's "Enquire on WhatsApp" label and Request a Quote as
 * Primary need owner approval. Request a Quote goes to the enquiry form
 * (D-10); the form reads no URL parameters, so no Dehydrated Products
 * category is preselected. WhatsApp Us uses the `dehydratedEnquiry`
 * template in site.ts (the brief's message) and stays inactive until the
 * number is confirmed (C-01, C-02).
 *
 * Title from the owner's UI/UX brief (2026-10-27), so each page's panel
 * reads differently; PENDING REVIEW.
 * It replaces "Looking for Dehydrated Ingredients for Your Business?".
 */
export const enquiryCta: {
  id: string;
  title: string;
  intro: string;
  quote: { href: string | null; pendingNote?: string };
} = {
  id: "dehydrated-enquiry-cta",
  title: "Enquire About Bulk Supply",
  intro: "Tell us which onion, garlic or powder products you need.",
  quote: { href: `${contactLink.href}#enquiry-form` },
};
