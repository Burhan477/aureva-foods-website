# AUREVA FOODS — Site Structure

| | |
|---|---|
| Version | 0.1 |
| Last updated | 2026-10-25 |
| Status | APPROVED by owner, 2026-10-25 |
| Coordinated by | [AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md](AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md) |

## 1. Status and scope

This document defines what exists on the site and where: pages and routes, navigation, section order for every page, the product catalogue with display names, CTA placement, SEO priority between pages, and the content each section depends on.

The baseline is the Website Structure (S-01). Additions to it (the 404 page, the mobile floating WhatsApp button) were approved as D-11 and D-13. Visual design, components and metadata belong in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md), [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md) and [SEO_AND_PERFORMANCE.md](SEO_AND_PERFORMANCE.md).

## 2. Pages and routes

| # | Page | Route | In main navigation | Status |
|---|---|---|---|---|
| 1 | Home | `/` | Home | Page CONFIRMED (S-01); route APPROVED (D-10) |
| 2 | About Us | `/about/` | About Us | Page CONFIRMED; route APPROVED (D-10) |
| 3 | Products Overview | `/products/` | Products | Page CONFIRMED; route APPROVED (D-10) |
| 4 | Spices | `/products/spices/` | Products dropdown | Page CONFIRMED; route APPROVED (D-10) |
| 5 | Dehydrated Products | `/products/dehydrated-products/` | Products dropdown | Page CONFIRMED; route APPROVED (D-10) |
| 6 | Fresh Fruits & Vegetables | `/products/fresh-fruits-vegetables/` | Products dropdown | Page CONFIRMED; route APPROVED (D-10) |
| 7 | Contact Us | `/contact/` | Contact Us | Page CONFIRMED; route APPROVED (D-10) |
| 8 | Privacy Policy | `/privacy-policy/` | Footer only | Page CONFIRMED; route APPROVED (D-10) |
| 9 | Terms & Conditions | `/terms-and-conditions/` | Footer only | Page CONFIRMED; route APPROVED (D-10) |
| — | Not found (404) | `/404` | Not linked | APPROVED (D-11) |

Route rules:

- Lower-case, hyphen-separated, English words that match the page name. Category pages sit under `/products/` so the hierarchy is visible in the address.
- Trailing-slash and canonical-URL policy is set in [SEO_AND_PERFORMANCE.md](SEO_AND_PERFORMANCE.md).
- Routes are fixed once approved; any later change needs a redirect plan.
- No individual product pages. Products are shown as cards inside their category page, as in S-01. Adding product pages would be a scope change (master plan §10).

## 3. Navigation

### 3.1 Header (every page)

`[AUREVA FOODS wordmark → /]   Home | About Us | Products ▾ | Contact Us   [WhatsApp Us]`

- Products dropdown: Spices | Dehydrated Products | Fresh Fruits & Vegetables, in that order (S-01).
- The Products Overview page must remain reachable from the header as well as the three categories. How the label and dropdown behave (click, keyboard, touch) is defined in [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md).
- The current page is marked in the navigation.
- On small screens the same items appear in a mobile menu, with the WhatsApp Us button kept visible.

### 3.2 Footer (every page)

S-01 lists "Footer" as the last home section; it is one global footer shared by all pages.

| Footer group | Content | Status |
|---|---|---|
| Brand | Wordmark (D-08) and a one-line description | Description: TEMPORARY ASSUMPTION until approved |
| Pages | Home, About Us, Products, Contact Us | Ready |
| Products | Spices, Dehydrated Products, Fresh Fruits & Vegetables | Ready |
| Contact | Email, phone, WhatsApp | BLOCKED (C-01, C-02, C-03) |
| Partner | Dar Al Nibras Foodstuff Trading LLC | BLOCKED (C-04); shown only if approved |
| Social | Profile links | BLOCKED (C-20); omitted if none |
| Legal | Privacy Policy, Terms & Conditions, copyright line with company name | Links ready; Aureva's legal name not supplied (C-29) |

## 4. Page section order

### 4.0 Changes under D-24 (2026-10-26)

The theme modernisation merged or removed sections that repeated the same message. The tables below keep the S-01 list for reference; the built pages differ as follows.

| Page | Change |
|---|---|
| Home | Order: Hero, Our Product Categories, Featured Spices, Dehydrated Products Showcase, Fresh Fruits & Vegetables Showcase, About Aureva Foods, Quality & Compliance, Business Enquiry CTA. About, Why Aureva Foods and Global Presence are merged into one About section; the globe is removed; category cards no longer list products |
| About Us | Who We Are is folded into the Company Introduction. Global Markets is shown as "Who We Work With" (buyer types; markets stay unconfirmed, C-07), without its closing card. Product Range cards no longer list products |
| Products Overview | Why Choose Aureva Foods removed (it repeated Home and About). Introduction removed (owner request, 2026-10-27); the page opens with the category cards, whose heading is the page h1 |
| Spices | B2B Supply Enquiries section removed; the range cards in Product Range & Specifications and the 4-step workflow in Quality are removed (they repeated the grid and the enquiry process) |
| Dehydrated Products | B2B Supply Enquiries section and the A/B/C group summary removed; Garlic keeps one CTA |
| Fresh Fruits & Vegetables | B2B Supply Enquiries section removed; one CTA per product group |
| Contact Us | Unchanged order; the WhatsApp section is a contained dark panel |


Section names are those in S-01. "Display heading" is given only where the visible heading must differ from the S-01 name. "Depends on" lists open items that block or limit the section; every section also follows master plan §5.

**Section readiness key:** READY = can be drafted from confirmed sources. DRAFT-TEMP = can be drafted with labelled TEMPORARY ASSUMPTIONS (D-05). BLOCKED = needs owner input before it can be finished.

### 4.1 Home (`/`)

| # | Section (S-01) | Purpose | Display heading | Depends on | Readiness |
|---|---|---|---|---|---|
| 1 | Hero Section | State what Aureva supplies and to whom; primary CTA | — | C-14 (image) | DRAFT-TEMP |
| 2 | About Aureva Foods | Short introduction linking to About Us | — | C-08 | DRAFT-TEMP |
| 3 | Our Product Categories | The three categories, each linking to its page | — | — | READY |
| 4 | Featured Spices | A selection of spices linking to the Spices page | — | D-12 (selection), C-14 | DRAFT-TEMP |
| 5 | Dehydrated Products Showcase | Representative dehydrated items | — | C-10, C-14 | DRAFT-TEMP |
| 6 | Fresh Fruits & Vegetables Showcase | Representative fresh produce | — | C-14 | DRAFT-TEMP |
| 7 | Why Aureva Foods | Reasons to enquire | — | C-12 | DRAFT-TEMP |
| 8 | Quality & Certifications | Quality approach and verified credentials | "Quality & Compliance" until credentials are verified | C-05, C-06 | BLOCKED |
| 9 | Global Presence | Markets served | — | C-07 | BLOCKED |
| 10 | Business Enquiry CTA | WhatsApp Us and Request a Quote | — | C-01, C-02 (live link) | READY (link inactive until C-02) |
| 11 | Footer | Global footer (§3.2) | — | §3.2 | — |

### 4.2 About Us (`/about/`)

| # | Section (S-01) | Purpose | Display heading | Depends on | Readiness |
|---|---|---|---|---|---|
| 1 | Company Introduction | Who Aureva is, in one paragraph | — | C-08 | DRAFT-TEMP |
| 2 | Who We Are | Business model and customers served | — | C-08 | DRAFT-TEMP |
| 3 | Our Product Range | Summary of the three categories with links | — | — | READY |
| 4 | Manufacturing & Processing Capabilities | What is made or processed in-house | — | C-08 (no capacity, facility or process facts may be assumed) | BLOCKED |
| 5 | Quality Standards & Certifications | Quality approach and verified credentials | "Quality Standards & Compliance" until verified | C-05, C-06 | BLOCKED |
| 6 | Global Markets | Markets served | — | C-07 | BLOCKED |
| 7 | Business Enquiry CTA | WhatsApp Us and Request a Quote | — | C-02 | READY |

### 4.3 Products Overview (`/products/`)

| # | Section (S-01) | Purpose | Depends on | Readiness |
|---|---|---|---|---|
| 1 | Page Introduction | Explain the three categories | — | READY |
| 2 | Spices | Category summary, sample items, link | — | READY |
| 3 | Dehydrated Products | Category summary, sample items, link | C-10 | READY |
| 4 | Fresh Fruits & Vegetables | Category summary, sample items, link | — | READY |
| 5 | Business Enquiry CTA | WhatsApp Us and Request a Quote | C-02 | READY |

Built 2026-10-26 in the order of the owner's brief, PENDING APPROVAL: Hero (Page Introduction), Explore Our Categories, Product Portfolio (S-01 sections 2–4, all 27 products in category tabs), Why Choose Aureva Foods (added by the brief), Business Enquiry CTA.

### 4.4 Spices (`/products/spices/`) — SEO priority 1

| # | Section (S-01) | Purpose | Depends on | Readiness |
|---|---|---|---|---|
| 1 | Page Introduction | Spices range for B2B buyers | C-06 | READY |
| 2 | Spice Product Showcase | All 10 spices as product cards (§5.1) | C-14 | READY |
| 3 | Product Range & Specifications | Formats, grades, specifications | C-11 (nothing may be invented) | BLOCKED; falls back to an enquiry prompt if no data |
| 4 | Quality & Processing | How spices are processed and checked | C-05, C-06, C-08 | BLOCKED |
| 5 | B2B Supply Enquiries | How bulk buyers enquire | C-11 (no MOQ or terms invented) | DRAFT-TEMP |
| 6 | FAQs | Common buyer questions | C-12 | DRAFT-TEMP |
| 7 | Enquiry CTA | WhatsApp Us and Request a Quote | C-02 | READY |

### 4.5 Dehydrated Products (`/products/dehydrated-products/`) — SEO priority 2

| # | Section (S-01) | Purpose | Depends on | Readiness |
|---|---|---|---|---|
| 1 | Page Introduction | Dehydrated range for B2B buyers | C-06 | READY |
| 2 | Dehydrated Onion Products | White Onion, Pink Onion, Fried Onion | C-10 (forms) | READY |
| 3 | Dehydrated Garlic | Garlic | C-10 (form) | READY |
| 4 | Vegetable & Other Powders | The eight powders (§5.2) | — | READY |
| 5 | Product Range & Specifications | Formats, grades, specifications | C-11 | BLOCKED; falls back to an enquiry prompt if no data |
| 6 | B2B Supply Enquiries | How bulk buyers enquire | C-11 | DRAFT-TEMP |
| 7 | Enquiry CTA | WhatsApp Us and Request a Quote | C-02 | READY |

### 4.6 Fresh Fruits & Vegetables (`/products/fresh-fruits-vegetables/`) — SEO priority 3

| # | Section (S-01) | Purpose | Depends on | Readiness |
|---|---|---|---|---|
| 1 | Page Introduction | Fresh produce range for B2B buyers | C-06 | READY |
| 2 | Fresh Vegetables | Onion, Green Chilli | — | READY |
| 3 | Fresh Fruits | Banana, Pomegranate, Mango | — | READY |
| 4 | Product Availability & Supply | Seasonality and supply | No availability, seasons or volumes may be invented | BLOCKED; falls back to an enquiry prompt if no data |
| 5 | B2B Supply Enquiries | How bulk buyers enquire | — | DRAFT-TEMP |
| 6 | Enquiry CTA | WhatsApp Us and Request a Quote | C-02 | READY |

### 4.7 Contact Us (`/contact/`)

| # | Section (S-01) | Purpose | Depends on | Readiness |
|---|---|---|---|---|
| 1 | Contact Introduction | Invite enquiries | — | READY |
| 2 | Contact Information | Email, phone | C-01, C-03 | BLOCKED |
| 3 | Business Enquiry Form | Request a Quote destination (anchor `#enquiry-form`, D-10) | C-03, C-17 | BLOCKED (delivery method) |
| 4 | WhatsApp Enquiry | Direct WhatsApp start | C-01, C-02 | BLOCKED |
| 5 | Partner Company Information | Dar Al Nibras Foodstuff Trading LLC | C-04 | BLOCKED |
| 6 | Business Address & Location, if applicable | Address, if one is approved | C-19 | BLOCKED; omitted if no address |

### 4.8 Privacy Policy (`/privacy-policy/`) and Terms & Conditions (`/terms-and-conditions/`)

| Page | Sections (S-01, in order) | Depends on | Readiness |
|---|---|---|---|
| Privacy Policy | Information Collection; Use of Information; Data Protection; Cookies & Website Analytics, where applicable; Contact Information | C-17 (what the form collects), C-30 (analytics), C-03, C-21 | BLOCKED until those are known |
| Terms & Conditions | Website Usage; Product Information Disclaimer; Intellectual Property; Limitation of Liability; Contact Information | C-03, C-21 | DRAFT-TEMP, then legal review |

## 5. Product catalogue

The client's original wording (S-02 Q3) is kept exactly in the "As supplied" column as the record. Display names follow BRAND_GUIDELINES.md §9 (D-08). Display names were approved by the owner on 2026-10-25 (D-14). Order is as supplied. No formats, grades, origins, packaging or specifications are attached to any product (C-11, D-07).

### 5.1 Spices (10)

| # | As supplied | Display name | Note |
|---|---|---|---|
| 1 | turmeric powder | Turmeric Powder | — |
| 2 | ginger poweder | Ginger Powder | Spelling corrected |
| 3 | cardamom powder | Cardamom Powder | — |
| 4 | fenugirk powder | Fenugreek Powder | Spelling corrected |
| 5 | cumin powder | Cumin Powder | — |
| 6 | chilli powder | Chilli Powder | Type (for example red chilli) not stated; not added |
| 7 | corionder whole | Whole Coriander | Spelling corrected; form-first (D-08) |
| 8 | cumin whole | Whole Cumin | Form-first (D-08) |
| 9 | garli powder | Garlic Powder | Spelling corrected; see C-10 |
| 10 | fennel seed | Fennel Seeds | Plural (D-08) |

### 5.2 Dehydrated Products (12)

| # | As supplied | Display name | Page group (S-01) | Note |
|---|---|---|---|---|
| 1 | white onion | White Onion | Dehydrated Onion Products | Form (flakes, powder, etc.) not stated (C-10) |
| 2 | pink onion | Pink Onion | Dehydrated Onion Products | Form not stated (C-10) |
| 3 | fried onion | Fried Onion | Dehydrated Onion Products | — |
| 4 | garlic | Garlic | Dehydrated Garlic | Form not stated; overlaps Spices #9 (C-10) |
| 5 | beat root powder | Beetroot Powder | Vegetable & Other Powders | Spelling corrected |
| 6 | lemon powder | Lemon Powder | Vegetable & Other Powders | — |
| 7 | corronder leaves powder | Coriander Leaves Powder | Vegetable & Other Powders | Spelling corrected |
| 8 | dry mango powder | Dry Mango Powder | Vegetable & Other Powders | — |
| 9 | tamrind powder | Tamarind Powder | Vegetable & Other Powders | Spelling corrected |
| 10 | potato powder | Potato Powder | Vegetable & Other Powders | — |
| 11 | spinach powder | Spinach Powder | Vegetable & Other Powders | — |
| 12 | mint leaves powder | Mint Leaves Powder | Vegetable & Other Powders | — |

The client grouped items 5–12 as "vegetable powders"; S-01's "Vegetable & Other Powders" is used because lemon, mango, tamarind and mint are not vegetables (C-10).

### 5.3 Fresh Fruits & Vegetables (5)

| # | As supplied | Display name | Page group (S-01) | Note |
|---|---|---|---|---|
| 1 | onion | Onion | Fresh Vegetables | Also a dehydrated product (C-10) |
| 2 | green chilli | Green Chilli | Fresh Vegetables | — |
| 3 | banana | Banana | Fresh Fruits | — |
| 4 | pomog | Pomegranate | Fresh Fruits | Interpretation of "pomog", approved (D-14) |
| 5 | mango | Mango | Fresh Fruits | — |

### 5.4 Home page selections

| Home section | Items shown | Status |
|---|---|---|
| Featured Spices | All ten, in catalogue order, as a carousel (owner instruction, 2026-10-26, replacing D-12's Turmeric Powder, Chilli Powder, Cumin Powder, Whole Coriander) | PENDING APPROVAL (visual review) |
| Dehydrated Products Showcase | White Onion, Fried Onion, Garlic, Beetroot Powder | APPROVED (D-12) |
| Fresh Fruits & Vegetables Showcase | All five | APPROVED (D-12) |

## 6. CTA placement

| Location | CTA | Notes |
|---|---|---|
| Header, every page | WhatsApp Us | Primary, always visible including on mobile |
| Home hero | WhatsApp Us + Request a Quote | — |
| End of every page except legal pages | Business Enquiry CTA: WhatsApp Us + Request a Quote | Fixed final section per S-01 |
| Product cards | WhatsApp Us, with the product name in the prefilled message | S-05 §10; message must not mention price, availability or terms |
| Category page sections "B2B Supply Enquiries" | WhatsApp Us + Request a Quote | — |
| Contact page | Enquiry form and WhatsApp Enquiry sections | — |
| Mobile floating WhatsApp button | WhatsApp Us | Mobile only; must not cover content or controls (D-13) |

- **Request a Quote** always links to the enquiry form on the Contact page (`/contact/#enquiry-form`, D-10).
- **WhatsApp Us** uses one shared configuration for number and default message. No WhatsApp link is published until C-01 and C-02 are resolved.

## 7. SEO priority and internal linking

| Priority | Page | Primary topic (SUGGESTION, not keyword-researched) |
|---|---|---|
| 1 | Spices | Indian spice powders and whole spices for B2B buyers |
| 2 | Dehydrated Products | Dehydrated onion, garlic and vegetable powders |
| 3 | Fresh Fruits & Vegetables | Fresh produce supply from India |
| — | Home | Aureva Foods as a supplier across the three categories |

- Each category page targets its own topic; Home and Products Overview summarise and link to them rather than competing.
- Onion appears on both the Dehydrated and Fresh pages: the Dehydrated page describes dehydrated onion, the Fresh page fresh onion, and each links to the other (C-10).
- Every page links to at least one category page and to Contact. Category pages link to each other.
- The claim wording "100% natural" and similar is not used as a keyword in copy or metadata (BRAND_GUIDELINES.md §10.2, C-06).
- Metadata, structured data and keyword research are defined in [SEO_AND_PERFORMANCE.md](SEO_AND_PERFORMANCE.md).

## 8. Content readiness summary

| Page | READY | DRAFT-TEMP | BLOCKED |
|---|---|---|---|
| Home | 2 | 6 | 2 |
| About Us | 2 | 2 | 3 |
| Products Overview | 5 | 0 | 0 |
| Spices | 3 | 2 | 2 |
| Dehydrated Products | 5 | 1 | 1 |
| Fresh Fruits & Vegetables | 4 | 1 | 1 |
| Contact Us | 1 | 0 | 5 |
| Privacy Policy | 0 | 0 | 1 page |
| Terms & Conditions | 0 | 1 page | 0 |

Home's Footer is counted under §3.2, not here. BLOCKED sections can still be built as layout with clearly marked placeholders, but cannot be approved as finished or launched.

## 9. Decisions

| ID | Decision | Status |
|---|---|---|
| D-10 | Routes in §2; "Request a Quote" links to `/contact/#enquiry-form` | APPROVED |
| D-11 | 404 page, not linked in navigation (resolves C-26) | APPROVED |
| D-12 | Home product selections in §5.4 (resolves C-27) | APPROVED |
| D-13 | Floating WhatsApp button on mobile only (resolves C-28) | APPROVED |
| D-14 | Product display names in §5, including "Pomegranate" (resolves C-09; product forms remain open under C-10) | APPROVED |
| C-29 | Aureva's registered legal name for the footer copyright and legal pages | OPEN: owner to supply |

## 10. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft from S-01 and S-02: routes, navigation, section order, product catalogue, CTA placement, SEO priority |
| 0.1 | 2026-10-25 | Approved by owner; D-10 to D-14 recorded |
| 0.1 | 2026-10-25 | Reference update only: "analytics decision" now points to C-30 |
| 0.2 | 2026-10-26 | §4.0 added: section changes under D-24 |
