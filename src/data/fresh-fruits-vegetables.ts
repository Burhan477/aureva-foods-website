import {
  contactLink,
  homeLink,
  type NavLink,
  productsLink,
} from "./navigation";

/**
 * Fresh Fruits & Vegetables page copy (SITE_STRUCTURE.md §4.6).
 *
 * Page Introduction (section 1). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied starter copy (2026-10-26), shown as supplied. It names
 * the five catalogue items (§5.3) and the audience; no origins, grades,
 * seasons, availability, volumes, certifications or freshness claims
 * (C-07, C-08, C-11).
 *
 * The brief asks for "Enquire on WhatsApp"; the label stays the approved
 * "WhatsApp Us" (D-08, BRAND_GUIDELINES.md §11) until the owner approves
 * the new label. Change `whatsappLabel` to switch.
 */
export const intro: {
  id: string;
  /** Breadcrumb trail shown as the eyebrow (C-32, D-20); last item is the current page */
  breadcrumbs: NavLink[];
  title: string;
  text: string;
  /** Primary CTA, the shared WhatsAppButton with the general template */
  whatsappLabel: string;
  secondaryCta: NavLink;
  imageAlt: string;
} = {
  id: "fresh-fruits-vegetables-introduction",
  breadcrumbs: [
    { label: "Aureva Foods", href: homeLink.href },
    { label: "Our Products", href: productsLink.href },
    {
      label: "Fresh Fruits & Vegetables",
      href: "/products/fresh-fruits-vegetables/",
    },
  ],
  title: "Fresh Produce for Business Buyers",
  text: "Onions, green chillies, bananas, pomegranates and mangoes for wholesale buyers, importers and distributors.",
  whatsappLabel: "WhatsApp Us",
  /** Fresh Vegetables (section 2), not built yet; keep this id stable */
  secondaryCta: {
    label: "Explore Our Products",
    href: "#fresh-vegetables",
  },
  /**
   * Image: src/assets/images/categories/fresh-fruits-vegetables.jpg
   * (ASSET_GUIDELINES.md §9.2), cropped left-aligned so the tomatoes,
   * which are not in the catalogue, stay out of frame
   */
  imageAlt:
    "Red onions, green chillies, bananas, pomegranates and mangoes among fresh herbs on a wooden table",
};

/**
 * Fresh Vegetables (section 2). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied starter copy (2026-10-26), shown as supplied. No
 * varieties, grades, sizes, origins, seasons, availability, packaging,
 * certifications or prices (C-07, C-11).
 *
 * The brief names the products "Fresh Onion" and "Fresh Green Chilli";
 * cards keep the approved catalogue names from products.json (D-14) with
 * `cardLabel` above them. The cards carry no action: the WhatsApp button
 * joins product cards once the number is confirmed (C-01, C-02).
 *
 * The primary CTA goes to the enquiry form (D-10), like "Enquire About
 * Garlic" on the Dehydrated page; the secondary to the Contact page.
 */
export const vegetables: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Short label above each product name */
  cardLabel: string;
  primaryCta: NavLink;
} = {
  /** Target of the Page Introduction's "Explore Our Products"; keep stable */
  id: "fresh-vegetables",
  eyebrow: "Fresh Vegetables",
  title: "Fresh Vegetables for Your Business",
  intro: "Onions and green chillies for commercial sourcing.",
  cardLabel: "Fresh Vegetable",
  primaryCta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
  },
};

/**
 * Fresh Fruits (section 3). DRAFT-TEMP, PENDING APPROVAL: owner-supplied
 * starter copy (2026-10-26), shown as supplied. No varieties, grades,
 * sizes, origins, seasons beyond the brief's "seasonal", availability,
 * packaging, certifications or prices (C-07, C-11).
 *
 * The brief names the products "Fresh Banana", "Fresh Pomegranate" and
 * "Fresh Mango"; cards keep the approved catalogue names from
 * products.json (D-14) with `cardLabel` above them, as in section 2.
 * `products` is keyed by products.json id; a fruit without an entry fails
 * the build.
 *
 * The primary CTA goes to the enquiry form (D-10); the secondary to the
 * Products Overview.
 */
export const fruits: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Short label above each product name */
  cardLabel: string;
  products: Record<string, { description: string }>;
  primaryCta: NavLink;
} = {
  id: "fresh-fruits",
  eyebrow: "Our Fresh Produce",
  title: "Fresh Fruits for Your Business",
  intro: "Bananas, pomegranates and mangoes for wholesale enquiries.",
  cardLabel: "Fresh Fruit",
  products: {
    banana: {
      description: "For wholesale sourcing and distribution.",
    },
    pomegranate: {
      description: "For commercial fruit supply and bulk enquiries.",
    },
    mango: {
      description: "For seasonal wholesale sourcing.",
    },
  },
  primaryCta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
  },
};

/**
 * Enquiry CTA (section 6), rendered by the shared EnquiryCTA. DRAFT-TEMP,
 * PENDING APPROVAL: owner-supplied copy (2026-10-26), shown as supplied.
 *
 * EnquiryCTA's buttons are the approved WhatsApp Us and Request a Quote
 * (D-08). The brief's "Enquire on WhatsApp" and "Contact Us" would need
 * the shared component changed, so they await approval. No image: the
 * only full-size Fresh image is the Page Introduction's.
 *
 * Title from the owner's UI/UX brief (2026-10-27), so each page's panel
 * reads differently; PENDING REVIEW.
 * It replaces "Looking for a Fresh Produce Supply Partner?".
 */
export const enquiryCta: {
  id: string;
  title: string;
  intro: string;
  quote: { href: string | null; pendingNote?: string };
} = {
  id: "fresh-enquiry-cta",
  title: "Discuss Your Produce Requirements",
  intro:
    "Tell us which fruits and vegetables you need, with quantities and destination.",
  quote: { href: `${contactLink.href}#enquiry-form` },
};
