import { productCategories } from "./navigation";
import type { Setting } from "./site";

/**
 * Contact Us page copy (SITE_STRUCTURE.md §4.7).
 *
 * Contact Introduction (section 1, M5.2). READY, PENDING APPROVAL:
 * owner-supplied copy (2026-10-26), shown as supplied. It invites
 * enquiries only; no contact details, response times, markets or terms
 * (C-01, C-03).
 *
 * CTA labels "Make a Business Enquiry" and "Chat on WhatsApp" are the
 * owner's for this section (2026-10-26), in place of the standard
 * "Request a Quote" / "WhatsApp Us" pair (BRAND_GUIDELINES.md §11), with
 * the enquiry as Primary.
 */
export const intro = {
  eyebrow: "Get in Touch",
  title: "Let's Talk About Your Ingredient Requirements",
  text: "Tell us what you're looking for and we'll discuss suitable options with you.",
  topics: ["Product Enquiries", "Bulk Requirements", "Business Partnerships"],
  topicsLabel: "Enquiry topics",
  /** Same-page anchor of the Business Enquiry Form, section 3 (D-10) */
  enquiryCta: { label: "Make a Business Enquiry", href: "#enquiry-form" },
  whatsAppLabel: "Chat on WhatsApp",
  pendingNote:
    "Chat on WhatsApp stays inactive until the number is confirmed (C-01, C-02).",
  /**
   * Image: src/assets/images/categories/dehydrated-products.jpg
   * (ASSET_GUIDELINES.md §9.2). Fresh onions, garlic and beetroot beside
   * dehydrated flakes and powders; generic illustration only (§6)
   */
  imageAlt:
    "Wooden bowls of dried onion and garlic flakes and beetroot, green and golden powders, with fresh red onions, garlic bulbs, beetroot, mint and dried lemon slices",
};

/** One Contact Information card; its details come from site.ts */
export interface ContactCardCopy {
  id: "email" | "phone" | "hours";
  title: string;
  text: string;
  /** Open item IDs for the PendingContent marker */
  pendingItem: string;
  pendingNote: string;
}

/**
 * Contact Information (section 2, M5.2). BLOCKED (C-01, C-02, C-03, hours
 * not supplied). Heading, introduction and the email and phone card texts
 * are owner-supplied (2026-10-26), shown as supplied. The Business Hours
 * text is a DRAFT, PENDING APPROVAL: the brief gave an instruction there,
 * not copy.
 *
 * Email, phone, WhatsApp and hours are read from site.ts and shown only
 * when CONFIRMED. Production builds leave out any card without a confirmed
 * detail, and the whole section while none has one; development builds
 * show every card with a pending marker.
 */
export const contactInfo: {
  eyebrow: string;
  title: string;
  intro: string;
  cards: ContactCardCopy[];
} = {
  eyebrow: "Contact Information",
  title: "Contact Details",
  intro: "Choose the way that suits you best.",
  cards: [
    {
      id: "email",
      title: "Business Email",
      text: "For enquiries, quotations and correspondence.",
      pendingItem: "C-03",
      pendingNote:
        "Email address appears here once confirmed (C-03: sales@aurevafoods.com vs SALES@AUREVA.COM).",
    },
    {
      id: "phone",
      title: "Phone & WhatsApp",
      text: "For direct questions about products and orders.",
      pendingItem: "C-01, C-02",
      pendingNote:
        "Phone number and WhatsApp link appear here once confirmed (C-01: supplied number appears incomplete; C-02).",
    },
    {
      id: "hours",
      title: "Business Hours",
      text: "When our team is available.",
      pendingItem: "Business hours",
      pendingNote:
        "Operating days, hours and time zone appear here once the owner supplies them; nothing has been supplied yet.",
    },
  ],
};

/** Labels for the EnquiryForm island; a field is required when `required` is true */
export interface EnquiryFieldCopy {
  label: string;
  required: boolean;
  placeholder?: string;
  help?: string;
  options?: string[];
}

export interface EnquiryFormCopy {
  requiredNote: string;
  /** Fieldset legends */
  groups: { details: string; enquiry: string };
  fields: {
    name: EnquiryFieldCopy;
    company: EnquiryFieldCopy;
    email: EnquiryFieldCopy;
    phone: EnquiryFieldCopy;
    enquiryType: EnquiryFieldCopy;
    category: EnquiryFieldCopy;
    country: EnquiryFieldCopy;
    requirements: EnquiryFieldCopy;
  };
  selectPrompt: string;
  submitLabel: string;
  privacyNote: string;
  /** Shown after a valid submit while no form service is connected (C-18) */
  notConnected: string;
}

/**
 * Business Enquiry Form (section 3, M5.3). Heading, introduction, fields
 * and options are owner-supplied (2026-10-26). They replace the D-20 field
 * list (COMPONENT_INVENTORY.md §7.1): enquiry type is added, country and
 * category swap required/optional, and products, quantity and message
 * become one "Product requirements" field. The message length limits of
 * D-20 are kept. Category options use the approved category names
 * (BRAND_GUIDELINES.md §9), so the brief's "Dehydrated ingredients" shows
 * as "Dehydrated Products".
 *
 * DRAFT, PENDING APPROVAL: the required note, group legends, placeholder,
 * help texts,
 * select prompt, submit label, privacy note and the not-connected notice.
 *
 * No form service is chosen yet (D-16, C-18), so nothing is sent: a valid
 * submit shows `notConnected` and keeps the entries.
 */
export const enquiry: {
  eyebrow: string;
  title: string;
  intro: string;
  form: EnquiryFormCopy;
  pendingNote: string;
} = {
  eyebrow: "Business Enquiry",
  title: "Tell Us What Your Business Needs",
  intro: "Share your requirements and our team will review them.",
  form: {
    requiredNote: "Fields marked (required) must be filled in.",
    groups: { details: "Your details", enquiry: "Your enquiry" },
    fields: {
      name: { label: "Full name", required: true },
      company: { label: "Company name", required: false },
      email: {
        label: "Business email",
        required: true,
        help: "For example, name@company.com",
      },
      phone: {
        label: "Phone / WhatsApp",
        required: false,
        help: "Include your country code.",
      },
      enquiryType: {
        label: "Enquiry type",
        required: true,
        options: [
          "Product enquiry",
          "Request a quotation",
          "Bulk order enquiry",
          "Business partnership",
          "Other",
        ],
      },
      category: {
        label: "Product category",
        required: true,
        options: [
          ...productCategories.map((category) => category.label),
          "Multiple categories",
        ],
      },
      country: { label: "Destination country / market", required: false },
      requirements: {
        label: "Product requirements",
        required: true,
        placeholder:
          "Tell us which products you need, approximate quantities, any specifications, packaging preferences, delivery timelines or other requirements.",
        help: "Between 20 and 2,000 characters.",
      },
    },
    selectPrompt: "Select an option",
    submitLabel: "Send Enquiry",
    privacyNote:
      "We use the details you share only to respond to your enquiry.",
    notConnected:
      "Online enquiries are not connected yet, so this enquiry has not been sent. Your details are still in the form.",
  },
  pendingNote:
    "Submission is not connected: the form service is chosen with hosting (D-16, C-18) and delivers to the confirmed sales address (C-03). Sending, success and failure states are added with it (COMPONENT_INVENTORY.md §7.2). The privacy note links to the Privacy Policy once that page exists (M6.1).",
};

/**
 * WhatsApp Enquiry (section 4). BLOCKED for a live link (C-01, C-02):
 * owner-supplied copy, label and message (2026-10-26), shown as supplied.
 * The message is the `contactEnquiry` template in site.ts, beside the
 * other WhatsApp templates (AD-11).
 */
export const whatsAppEnquiry = {
  eyebrow: "Quick Business Enquiries",
  title: "Let's Connect on WhatsApp",
  text: "Ask a product question or discuss a bulk requirement directly with our team.",
  topics: ["Product enquiries", "Quotations", "Bulk orders"],
  topicsLabel: "Enquiry topics",
  ctaLabel: "WhatsApp Us",
  pendingNote:
    "Discuss Your Requirements stays inactive until the WhatsApp number is confirmed (C-01, C-02); it then opens WhatsApp with the contactEnquiry message from site.ts.",
  /**
   * Image: src/assets/images/categories/fresh-fruits-vegetables.jpg
   * (ASSET_GUIDELINES.md §9.2), cropped from the left so the tomatoes on
   * its right edge, which are not in the catalogue, stay out of frame
   */
  imageAlt:
    "Red onions, green chillies, bananas, pomegranates and mangoes among fresh herbs on a wooden table",
};

/**
 * Partner Company Information (section 5). BLOCKED (C-04). The company
 * name is `site.partner`. The paragraphs are the owner's provisional
 * explanatory copy (2026-10-26): they describe the placeholder, not the
 * company, so they are TEMPORARY and never published. Production builds
 * leave the section out until `site.partner` is CONFIRMED, and then show
 * only the name and the approved wording that replaces these paragraphs.
 * Nothing is said about ownership, control, representation, location,
 * services or history.
 */
export const partnerInfo: {
  eyebrow: string;
  title: string;
  paragraphs: Setting<string[]>;
  pendingNote: string;
} = {
  eyebrow: "Our Business Network",
  title: "Partner Company Information",
  paragraphs: {
    value: [
      "Dar Al Nibras Foodstuff Trading LLC is a business entity identified for inclusion in the Aureva Foods website's partner information section.",
      "This section can provide visitors with additional business context and clarify the relationship between the companies once the relevant details have been confirmed.",
    ],
    status: "TEMPORARY",
    note: "C-04: replace with approved wording describing the relationship",
  },
  pendingNote:
    "Development only until the owner confirms the legal name (S-01 and S-02 spell it differently), the relationship to Aureva Foods and the wording that may be shown. No logo, address, website or services are shown.",
};

/**
 * Business Address & Location (section 6). BLOCKED (C-19). The address is
 * `site.address`. Heading and supporting copy are owner-supplied
 * (2026-10-26) and provisional until the location and its public use are
 * confirmed. "Visit" is shown only when the owner confirms visitors are
 * welcome; otherwise `eyebrowNoVisits` (DRAFT) is used. `directionsLabel`
 * is a DRAFT. No map embed: only a directions link, and only for a
 * confirmed public address (AD-16: no third-party embeds without
 * approval). Production builds leave the section out until the address is
 * CONFIRMED (SITE_STRUCTURE.md §4.7).
 */
export const addressLocation = {
  eyebrow: "Visit or Contact Us",
  eyebrowNoVisits: "Our Location",
  title: "Business Address & Location",
  text: "Find our business location and contact details to discuss your product and sourcing requirements.",
  directionsLabel: "Get Directions",
  pendingNote:
    "No address supplied (C-19). The address, its type (registered office, trading office, warehouse or visitor location), whether visitors may attend, and any directions link appear here once confirmed.",
  locationPendingNote:
    "No map or directions link: shown only for a confirmed public address with an approved directions URL (C-19). No map embed without approval (AD-16).",
};
