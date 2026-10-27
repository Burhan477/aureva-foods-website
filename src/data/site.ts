/**
 * Site settings (ARCHITECTURE_DECISIONS.md AD-08).
 *
 * Every value carries a status matching the master plan §2:
 * - CONFIRMED: may be shown on the site.
 * - TEMPORARY: draft placeholder; must be approved or replaced before launch.
 * - BLOCKED: missing or unverified; components must not publish it.
 *
 * Components render contact, partner and social details only when their
 * status is CONFIRMED (COMPONENT_INVENTORY.md, Footer).
 */

export type SettingStatus = "CONFIRMED" | "TEMPORARY" | "BLOCKED";

export interface Setting<T> {
  value: T;
  status: SettingStatus;
  /** Open item or decision IDs from the master plan, for reviewers */
  note?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/** A registration or licence shown in Quality & Compliance (ComplianceList) */
export interface Credential {
  /** Exact name as it may appear on the site, once verified */
  name: string;
  /** What the document is, in plain words, e.g. "Export registration" */
  type: string;
}

/** Operating hours shown on the Contact page, worded as they may appear */
export interface BusinessHours {
  /** For example "Monday to Saturday" */
  days: string;
  /** For example "9:30 am to 6:30 pm" */
  time: string;
  /** For example "IST (UTC+5:30)" */
  timeZone: string;
}

/** Business address shown on the Contact page (C-19) */
export interface BusinessAddress {
  /** Street lines, as they should be printed */
  lines: string[];
  city: string;
  region?: string;
  postalCode?: string;
  country: string;
  /** What the address is, for example "Registered office" or "Warehouse" */
  type: string;
  /** True only when the owner confirms visitors may attend this address */
  visitorsWelcome: boolean;
  /** Approved public map or directions link, if any */
  directionsUrl?: string;
}

export interface SiteSettings {
  name: Setting<string>;
  legalName: Setting<string | null>;
  footerIntro: Setting<string>;
  whatsapp: {
    /** Digits only, with country code, no "+" (wa.me format) */
    number: Setting<string | null>;
    /**
     * Approved templates (COMPONENT_INVENTORY.md §8): general and product
     * (D-20); contactEnquiry for the Contact page WhatsApp Enquiry
     * section (owner brief, 2026-10-26); spicesEnquiry for the Spices
     * page B2B Supply Enquiries section (owner brief, 2026-10-26,
     * PENDING APPROVAL); dehydratedEnquiry for the Dehydrated Products
     * page B2B Supply Enquiries section (owner brief, 2026-10-26,
     * PENDING APPROVAL)
     */
    messages: {
      general: string;
      product: string;
      contactEnquiry: string;
      spicesEnquiry: string;
      dehydratedEnquiry: string;
    };
  };
  email: Setting<string | null>;
  phone: Setting<string | null>;
  hours: Setting<BusinessHours | null>;
  /** Partner company name, exactly as it may appear on the site */
  partner: Setting<string | null>;
  address: Setting<BusinessAddress | null>;
  social: Setting<SocialLink[]>;
  credentials: Setting<Credential>[];
}

export const site: SiteSettings = {
  name: {
    value: "Aureva Foods",
    status: "CONFIRMED",
    note: "Trading name, S-02 Q6",
  },

  legalName: {
    value: null,
    status: "BLOCKED",
    note: "C-29: registered company name not supplied; copyright uses the trading name until then",
  },

  footerIntro: {
    value:
      "B2B supplier of Indian spices, dehydrated products and fresh fruits and vegetables for importers, distributors and wholesalers.",
    status: "TEMPORARY",
    note: "Draft one-line description (SITE_STRUCTURE.md §3.2), built from S-02 Q1, Q3 and Q9; awaiting owner approval",
  },

  whatsapp: {
    number: {
      value: "918758953000",
      status: "CONFIRMED",
      note: "C-02: supplied by the owner, 2026-10-26",
    },
    messages: {
      general: "Hello Aureva Foods, I would like to make a business enquiry.",
      product:
        "Hello Aureva Foods, I would like to enquire about {Product Name}.",
      contactEnquiry:
        "Hello Aureva Foods, I would like to enquire about your products. Please share the available options and relevant product details.",
      spicesEnquiry:
        "Hello Aureva Foods, I would like to enquire about your spice products for business supply. Please share availability and quotation details.",
      dehydratedEnquiry:
        "Hello Aureva Foods, I would like to enquire about your dehydrated onion, garlic and vegetable powder products for business supply. Please share availability and quotation details.",
    },
  },

  email: {
    value: "sales@aurevafoods.com",
    status: "CONFIRMED",
    note: "C-03: owner confirmed the company email, 2026-10-27",
  },

  phone: {
    value: "+91 87589 53000",
    status: "CONFIRMED",
    note: "C-01: owner confirmed, 2026-10-26, that the WhatsApp number is also the phone number",
  },

  hours: {
    value: null,
    status: "BLOCKED",
    note: "Not supplied: owner to give operating days, hours and time zone (no open item yet)",
  },

  partner: {
    value: "Dar Al Nibras Foodstuff Trading LLC",
    status: "BLOCKED",
    note: "C-04: name as in S-01 (S-02 writes 'DARALNIBRAS FOODSTUFF TRADIN LLC'); legal name, relationship and approved wording unconfirmed",
  },

  address: {
    value: null,
    status: "BLOCKED",
    note: "C-19: no address supplied; S-01 lists the section as 'if applicable'",
  },

  social: {
    value: [],
    status: "BLOCKED",
    note: "C-20: no profile links supplied",
  },

  /*
   * Credentials listed by the client (S-02 Q11), BRAND_GUIDELINES.md §10.1.
   * Names and types are the likely documents, not verified facts. Before a
   * status becomes CONFIRMED, check the owner's document for entity name,
   * type, validity, permitted wording and logo-use rules (C-05). No numbers,
   * dates or logos are stored here. GST is left out on purpose: it is a tax
   * registration, not a quality or food-safety credential.
   */
  credentials: [
    {
      value: {
        name: "Spices Board India: Certificate of Registration as Exporter of Spices",
        type: "Export registration",
      },
      status: "BLOCKED",
      note: "C-05: supplied as 'spice board certic'; no document supplied",
    },
    {
      value: {
        name: "APEDA Registration-cum-Membership Certificate",
        type: "Export registration",
      },
      status: "BLOCKED",
      note: "C-05: supplied as 'apeda'; no document supplied",
    },
    {
      value: {
        name: "FSSAI licence or registration",
        type: "Food business licence",
      },
      status: "BLOCKED",
      note: "C-05: supplied as 'fssai'; licence or registration, and which kind, unknown",
    },
    {
      value: {
        name: "US FDA Food Facility Registration",
        type: "Facility registration",
      },
      status: "BLOCKED",
      note: "C-05: supplied as 'fda'; presumed US FDA registration. Never worded as FDA approved or certified",
    },
  ],
};

/** The value when it may be published, otherwise null */
export function confirmed<T>(setting: Setting<T>): T | null {
  return setting.status === "CONFIRMED" ? setting.value : null;
}
