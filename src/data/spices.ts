import {
  contactLink,
  homeLink,
  type NavLink,
  productsLink,
} from "./navigation";

/**
 * Spices page copy (SITE_STRUCTURE.md §4.4).
 *
 * Page Introduction (section 1). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied copy (2026-10-26), shown as supplied. It names the
 * catalogue's two forms (§5.1) and the audience; no origins, grades,
 * certifications, MOQs, packaging or export figures (C-05, C-11). Open
 * points for the owner: "Reliable Global Supply" implies international
 * supply (C-07), and "carefully selected" describes a sourcing practice
 * (C-08).
 */
export const intro: {
  /** Breadcrumb trail shown as the eyebrow (C-32, D-20); last item is the current page */
  breadcrumbs: NavLink[];
  title: string;
  text: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  imageAlt: string;
} = {
  breadcrumbs: [
    { label: "Aureva Foods", href: homeLink.href },
    { label: "Our Products", href: productsLink.href },
    { label: "Spices", href: "/products/spices/" },
  ],
  title: "Authentic Spices for Business Supply",
  text: "Indian spice powders and whole spices for importers, distributors, wholesalers and food businesses.",
  /** Request a Quote destination: the enquiry form anchor (D-10) */
  primaryCta: {
    label: "Request a Quote",
    href: `${contactLink.href}#enquiry-form`,
  },
  /** Spice Product Showcase (section 2), not built yet; keep this id stable */
  secondaryCta: {
    label: "Explore Our Spices",
    href: "#spice-product-showcase",
  },
  /** Image: src/assets/images/categories/spices.jpg (ASSET_GUIDELINES.md §9.2) */
  imageAlt:
    "Wooden bowls of turmeric, chilli and other ground spices with coriander seeds, cumin, fennel and cardamom pods, beside fresh ginger, turmeric root, garlic and dried red chillies",
};

/** Form of each spice, as its catalogue name states it (SITE_STRUCTURE.md §5.1) */
export type SpiceForm = "powder" | "whole";

/** Showcase copy for one spice; name, image and alt text come from products.json */
export interface SpiceCardCopy {
  form: SpiceForm;
  description: string;
}

/**
 * Spice Product Showcase (section 2). DRAFT-TEMP, PENDING APPROVAL:
 * owner-supplied starter copy (2026-10-26), provisional and editable.
 * Card names stay the approved display names (D-14), so the brief's
 * "Coriander Whole", "Cumin Whole" and "Fennel Seed" show as "Whole
 * Coriander", "Whole Cumin" and "Fennel Seeds". Descriptions are shown as
 * supplied except "savory" → "savoury" and "color" → "colour" (D-08
 * spelling). They describe flavour and use only; no origin, purity,
 * grade, nutrition, certification or processing claims (C-06, C-11).
 *
 * The form label comes from the catalogue name itself (Powder / Whole /
 * Seeds); nothing else about format is added (C-10, C-11). `products` is
 * keyed by products.json id; a spice without an entry fails the build.
 *
 * Request a Quote goes to the enquiry form (D-10). The form reads no URL
 * parameters, so the product name is not carried over; it is in each
 * link's accessible name only. `statusLabel` fills "{count}" and
 * "{total}".
 */
export const showcase: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  filtersLabel: string;
  filters: { value: "all" | SpiceForm; label: string }[];
  statusLabel: string;
  formLabels: Record<SpiceForm, string>;
  cta: NavLink;
  products: Record<string, SpiceCardCopy>;
} = {
  /** Target of the Page Introduction's "Explore Our Spices"; keep stable */
  id: "spice-product-showcase",
  eyebrow: "Our Spice Range",
  title: "Explore Our Spice Range",
  intro: "Whole spices and ground powders. Filter by form.",
  filtersLabel: "Filter spices by form",
  filters: [
    { value: "all", label: "All Spices" },
    { value: "powder", label: "Spice Powders" },
    { value: "whole", label: "Whole Spices" },
  ],
  statusLabel: "Showing {count} of {total} spices",
  formLabels: { powder: "Spice Powders", whole: "Whole Spices" },
  cta: { label: "Request a Quote", href: `${contactLink.href}#enquiry-form` },
  products: {
    "turmeric-powder": {
      form: "powder",
      description:
        "A vibrant golden spice for diverse culinary and food ingredient applications.",
    },
    "ginger-powder": {
      form: "powder",
      description:
        "A versatile ground spice with a distinctive warm, aromatic character.",
    },
    "cardamom-powder": {
      form: "powder",
      description:
        "An aromatic spice valued in sweet and savoury preparations.",
    },
    "fenugreek-powder": {
      form: "powder",
      description:
        "A distinctive spice used in seasoning blends and traditional cuisines.",
    },
    "cumin-powder": {
      form: "powder",
      description:
        "A warm, earthy ground spice for seasoning and culinary blends.",
    },
    "chilli-powder": {
      form: "powder",
      description:
        "A ground chilli ingredient for adding colour and heat to recipes.",
    },
    "whole-coriander": {
      form: "whole",
      description:
        "Whole coriander seeds for seasoning, blending and food preparation.",
    },
    "whole-cumin": {
      form: "whole",
      description:
        "Whole cumin seeds with a characteristic earthy, aromatic profile.",
    },
    "garlic-powder": {
      form: "powder",
      description:
        "A convenient powdered garlic ingredient for seasonings and food formulations.",
    },
    "fennel-seeds": {
      form: "whole",
      description:
        "Aromatic fennel seeds for culinary use and ingredient blending.",
    },
  },
};

/** Whether a specification row is a catalogue fact or agreed per enquiry */
export type SpecificationStatus = "catalogue" | "enquiry";

export interface SpecificationRow {
  label: string;
  value: string;
  status: SpecificationStatus;
}

/**
 * Product Range & Specifications (section 3). DRAFT-TEMP, PENDING
 * APPROVAL: owner-supplied copy (2026-10-26), shown as supplied. Product
 * lists are not repeated here: the section takes the spices from
 * products.json with the forms set in `showcase.products`, so the brief's
 * "Coriander Whole", "Cumin Whole" and "Fennel Seed" show as the approved
 * names (D-14).
 *
 * Only the two "catalogue" rows state facts, and both come from the
 * product names (SITE_STRUCTURE.md §5.1). Every other row is an enquiry
 * topic, not a specification: no grades, pack sizes, MOQs, documents,
 * private label or destinations are offered as available (C-05, C-07,
 * C-11). `tableNote` was drafted for this distinction and needs approval.
 * Open points for the owner: "food manufacturing" names a buyer segment,
 * and "Shipping and destination" implies supply to other markets (C-07).
 *
 * Headings "Buyer Specification Overview" and "B2B Enquiry Process" are
 * the brief's section names. `countLabel` fills "{count}".
 */
export const specifications: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  table: {
    title: string;
    columns: { label: string; value: string; status: string };
    statusLabels: Record<SpecificationStatus, string>;
    rows: SpecificationRow[];
    note: string;
  };
  process: {
    title: string;
    steps: { title: string; text: string }[];
    cta: NavLink;
  };
} = {
  id: "spice-product-specifications",
  eyebrow: "Product Range & Specifications",
  title: "Spice Solutions Tailored to Your Needs",
  intro:
    "What is fixed by our catalogue, and what we agree with you for each order.",
  table: {
    title: "Buyer Specification Overview",
    columns: { label: "Specification", value: "Details", status: "Status" },
    statusLabels: {
      catalogue: "From our catalogue",
      enquiry: "Confirmed on enquiry",
    },
    rows: [
      {
        label: "Product format",
        value: "Whole spices, seeds and ground powders.",
        status: "catalogue",
      },
      {
        label: "Available varieties",
        value: "The 10 listed spice products.",
        status: "catalogue",
      },
      {
        label: "Grade and quality parameters",
        value: "Confirmed per product and buyer requirements.",
        status: "enquiry",
      },
      {
        label: "Packaging format",
        value:
          "To be confirmed based on product availability and order requirements.",
        status: "enquiry",
      },
      {
        label: "Order quantity / MOQ",
        value: "Confirm during enquiry.",
        status: "enquiry",
      },
      {
        label: "Private-label packaging",
        value: "Subject to confirmation.",
        status: "enquiry",
      },
      {
        label: "Product documentation",
        value: "Available documentation to be confirmed.",
        status: "enquiry",
      },
      {
        label: "Shipping and destination",
        value: "Discussed according to order and destination market.",
        status: "enquiry",
      },
    ],
    note: "Details marked “Confirmed on enquiry” are not fixed specifications. They are agreed for each order, and not every option is available for every product.",
  },
  process: {
    title: "B2B Enquiry Process",
    steps: [
      {
        title: "Select Your Products",
        text: "Identify required spice varieties and product formats.",
      },
      {
        title: "Share Your Requirements",
        text: "Quantity, packaging, destination market and quality parameters.",
      },
      {
        title: "Confirm Availability and Specifications",
        text: "Agree details, pricing and documentation before ordering.",
      },
    ],
    /** Request a Quote destination: the enquiry form anchor (D-10) */
    cta: { label: "Request a Quote", href: `${contactLink.href}#enquiry-form` },
  },
};

/** One quality block; the component picks its icon by id */
export interface QualityBlock {
  id: "sourcing" | "processing" | "specifications" | "documentation";
  title: string;
  text: string;
}

/**
 * Quality & Processing (section 4). BLOCKED (C-05, C-06, C-08):
 * owner-supplied provisional copy (2026-10-26), shown as supplied. It
 * describes buyer conversations only; no facility, audit, inspection,
 * testing, certification, grade or guaranteed outcome. Open point for the
 * owner: "Product Sourcing" describes a sourcing model, which is still
 * open by category (C-08).
 *
 * The workflow is a proposed, buyer-facing sequence, not a description of
 * internal operations. Its heading, `workflowLabel` and `workflowNote`
 * were drafted to say so and need approval.
 */
export const quality: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Image: src/assets/images/hero/products-overview.png, cropped to the ginger and cinnamon */
  imageAlt: string;
  blocks: QualityBlock[];
} = {
  id: "spice-quality-processing",
  eyebrow: "Our Approach to Quality",
  title: "Quality Matters at Every Stage",
  intro:
    "We start from your specification and confirm suitability, format and documentation for each order.",
  imageAlt:
    "A fresh ginger root and cinnamon sticks on a linen cloth beside a wooden board",
  blocks: [
    {
      id: "sourcing",
      title: "Product Sourcing",
      text: "Spices matched to the variety and format you specify.",
    },
    {
      id: "processing",
      title: "Processing Requirements",
      text: "Whole or ground, to suit your application and availability.",
    },
    {
      id: "specifications",
      title: "Specification Alignment",
      text: "Grades and quality parameters confirmed per order.",
    },
    {
      id: "documentation",
      title: "Documentation & Packaging",
      text: "Documents and packing agreed during the enquiry.",
    },
  ],
};

/**
 * FAQs (section 6). DRAFT-TEMP, PENDING APPROVAL (C-12): owner-supplied
 * questions and answers (2026-10-26), shown as supplied except
 * "customized" → "customised" and "customization" → "customisation"
 * (D-08 spelling). No price, MOQ, certification, packaging guarantee or
 * export commitment is stated; each answer defers to the enquiry. Open
 * points for the owner: answer 8 names a "verified WhatsApp link", which
 * is not live until the number is confirmed (C-01, C-02), and answer 7
 * invites export enquiries (C-07). No FAQPage markup
 * (SEO_AND_PERFORMANCE.md §4).
 */
export const faqs: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: { question: string; answer: string }[];
} = {
  id: "spice-faqs",
  eyebrow: "Buyer Information",
  title: "Frequently Asked Questions",
  intro: "Common questions about our spice range and ordering.",
  items: [
    {
      question: "Which spices does Aureva Foods offer?",
      answer:
        "Our listed range includes turmeric, ginger, cardamom, fenugreek, cumin, chilli and garlic powders, as well as whole coriander, whole cumin and fennel seeds. Availability should be confirmed when enquiring.",
    },
    {
      question: "Are both whole spices and spice powders available?",
      answer:
        "Our product range includes both whole spices and ground powders. Please contact us to confirm the current availability of your required products.",
    },
    {
      question: "Can I request a bulk quotation?",
      answer:
        "Yes, you can submit a business enquiry with the products and estimated quantities you require. Pricing and order terms can be discussed based on your specific requirements.",
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer:
        "Minimum order quantities may depend on the product and supply arrangement. Please contact us to confirm the applicable MOQ for your enquiry.",
    },
    {
      question: "Can packaging be customised?",
      answer:
        "You can share your preferred packaging requirements during your enquiry. Available packaging formats and any customisation options must be confirmed for the selected product.",
    },
    {
      question: "Can I request product specifications or supporting documents?",
      answer:
        "You may request relevant product specifications and documentation. The availability and applicability of each document will need to be confirmed.",
    },
    {
      question: "Does Aureva Foods accept export enquiries?",
      answer:
        "We welcome business enquiries from buyers interested in discussing supply for their destination markets. Product availability, shipping arrangements and applicable export documentation must be confirmed.",
    },
    {
      question: "How can I enquire about spice products?",
      answer:
        "You can contact us through the website's business enquiry form or verified WhatsApp link. Include your product selection, estimated quantity and destination market, if known.",
    },
  ],
};

/**
 * Final Enquiry CTA (section 7), through the shared EnquiryCTA on the
 * Charcoal tone. DRAFT-TEMP, PENDING APPROVAL: owner-supplied copy
 * (2026-10-26), shown as supplied. The buttons keep the approved labels
 * and order, "WhatsApp Us" Primary and "Request a Quote" Secondary, as on
 * every other page (D-08, BRAND_GUIDELINES.md §11): the brief's "Enquire
 * on WhatsApp" label and Request a Quote as Primary need owner approval.
 * Request a Quote goes to the enquiry form (D-10); the form reads no URL
 * parameters, so no Spices category is preselected. WhatsApp Us uses the
 * `spicesEnquiry` template in site.ts and stays inactive until the number
 * is confirmed (C-01, C-02).
 */
export const enquiryCta: {
  id: string;
  title: string;
  intro: string;
  quote: { href: string | null; pendingNote?: string };
} = {
  id: "spice-enquiry-cta",
  title: "Looking for a Reliable Spice Supply Partner?",
  intro:
    "Tell us which spices you need and we'll confirm availability, specifications and pricing.",
  quote: { href: `${contactLink.href}#enquiry-form` },
};
