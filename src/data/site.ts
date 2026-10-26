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

export interface SiteSettings {
  name: Setting<string>;
  legalName: Setting<string | null>;
  footerIntro: Setting<string>;
  whatsapp: {
    /** Digits only, with country code, no "+" (wa.me format) */
    number: Setting<string | null>;
    /** Approved templates (COMPONENT_INVENTORY.md §8, D-20) */
    messages: { general: string; product: string };
  };
  email: Setting<string | null>;
  phone: Setting<string | null>;
  partner: Setting<string | null>;
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
      value: null,
      status: "BLOCKED",
      note: "C-01, C-02: supplied phone +91875895300 has 9 digits after +91; WhatsApp number not confirmed",
    },
    messages: {
      general: "Hello Aureva Foods, I would like to make a business enquiry.",
      product:
        "Hello Aureva Foods, I would like to enquire about {Product Name}.",
    },
  },

  email: {
    value: null,
    status: "BLOCKED",
    note: "C-03: sales@aurevafoods.com vs SALES@AUREVA.COM unresolved",
  },

  phone: {
    value: null,
    status: "BLOCKED",
    note: "C-01: supplied number appears incomplete",
  },

  partner: {
    value: null,
    status: "BLOCKED",
    note: "C-04: legal name, relationship and approved wording unconfirmed",
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
