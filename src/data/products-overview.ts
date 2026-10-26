import {
  contactLink,
  type ProductCategory,
  productCategories,
} from "./navigation";

/** Overview card copy for one category; name, link and image come from navigation.ts */
export interface CategoryCardCopy {
  description: string;
  ctaLabel: string;
}

/**
 * Explore Our Categories (section 2). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied descriptions (2026-10-26). Card titles stay the approved
 * category names (BRAND_GUIDELINES.md §9), so the brief's "Dehydrated
 * Ingredients" shows as "Dehydrated Products", as on Home and About Us.
 * CTA labels match the Home and About Us category cards.
 */
export const categoriesSection: {
  eyebrow: string;
  title: string;
  intro: string;
  cards: Record<ProductCategory["id"], CategoryCardCopy>;
} = {
  eyebrow: "Explore Our Categories",
  title: "Three Categories, One Point of Enquiry",
  intro: "Open a category, or browse every product below.",
  cards: {
    spices: {
      description: "Whole and ground spices.",
      ctaLabel: "Explore Spices",
    },
    "dehydrated-products": {
      description: "Dehydrated onion, garlic and vegetable powders.",
      ctaLabel: "Explore Dehydrated Products",
    },
    "fresh-fruits-vegetables": {
      description: "Fresh vegetables and fruits.",
      ctaLabel: "Explore Fresh Produce",
    },
  },
};

/**
 * Product Portfolio (section 3). DRAFT-TEMP, PENDING APPROVAL. Products,
 * names, images and alt text come from products.json (D-14); nothing about
 * prices, grades, forms, availability or specifications is added (C-10,
 * C-11). `countLabel` fills "{count}" with the number of products.
 */
export const portfolio = {
  eyebrow: "Product Portfolio",
  title: "Browse the Full Range",
  intro: "Every product we list, grouped by category.",
  tabsLabel: "Product categories",
  countLabel: "{count} products",
  viewLabel: "View {category}",
};

/**
 * Business Enquiry CTA (section 5), through the shared EnquiryCTA.
 * Owner-supplied heading and text (2026-10-26), PENDING APPROVAL. The
 * buttons keep the approved labels "WhatsApp Us" and "Request a Quote"
 * (D-08, BRAND_GUIDELINES.md §11), as on Home and About Us: the suggested
 * "Enquire on WhatsApp" and "Contact Us" need owner approval first.
 * WhatsApp Us stays inactive until C-01 and C-02 are resolved; Request a
 * Quote goes to the enquiry form on the Contact page (D-10), built in
 * M5.3, so `href` stays null and the button renders inactive.
 */
export const enquiryCta: {
  title: string;
  intro: string;
  topics: string[];
  topicsLabel: string;
  quote: { href: string | null; pendingNote?: string };
} = {
  title: "Looking for the Right Ingredients for Your Business?",
  intro: "Tell us which products you need and share your requirements.",
  topics: productCategories.map((category) => category.label),
  topicsLabel: "Product categories",
  quote: { href: `${contactLink.href}#enquiry-form` },
};
