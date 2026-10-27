# AUREVA FOODS — Master Development Plan

| | |
|---|---|
| Version | 1.2 |
| Last updated | 2026-10-27 |
| Status | APPROVED by owner, 2026-10-25 |
| Scope of this file | Coordination: sources, rules, decisions, open conflicts, milestone sequence, workflow |

This file coordinates the project. It does not replace the supporting documents. Each subject (brand, design system, site structure and so on) is defined in its own document (see §13). Where this plan summarises a subject, the supporting document is authoritative once it exists.

---

## 1. Purpose and scope

Build the AUREVA FOODS business website: a B2B site for an Indian spice manufacturer and exporter. Its job is to present three product categories to importers, distributors, wholesalers and Amazon sellers and turn visits into WhatsApp conversations and business enquiries.

**In scope:** the nine pages listed in §6.3, shared layout and navigation, a WhatsApp CTA, a business enquiry form, SEO metadata, sitemap, accessibility and performance work, deployment.

**Out of scope unless approved through change control (§10):** backend services, databases, CMS, authentication, e-commerce, pricing, extra pages, multilingual content, third-party integrations.

## 2. Status labels

These labels apply in planning documents and content inventories only. They are never shown to site visitors.

| Label | Meaning |
|---|---|
| CONFIRMED | Stated by the client and not contradicted, or verified from a document |
| CLIENT-PROVIDED / UNVERIFIED | Stated by the client but needing evidence or clarification before publication |
| TEMPORARY ASSUMPTION | Placeholder written to keep work moving; must be replaced or confirmed before launch |
| RECOMMENDATION | Proposed by the developer; not yet approved |
| APPROVED | Decided by the owner (recorded in §8) |
| BLOCKER | Missing input that stops a specific milestone or section |
| OPEN / RESOLVED | State of an item in the conflict register (§9) |

## 3. Source register

Client-supplied files are kept outside the repository (decision D-03). Paths are on the owner's machine.

| ID | Document | Location | Date | Notes |
|---|---|---|---|---|
| S-01 | AUREVA FOODS — Website Structure (PDF) | `C:\Users\Burhan\Downloads\AUREVA FOODS — Website Structure.pdf` | 2026-10-22 | Page hierarchy, sections, navigation, primary CTA, SEO priority |
| S-02 | Discovery Sheet (XLSX) | `C:\Users\Burhan\Downloads\Discovery Sheet_AUREVA_website.xlsx` | 2026-10-23 | Client answers, 18 questions plus 2 notes |
| S-03 | Discovery Sheet JSON export (PDF) | `C:\Users\Burhan\Downloads\AUREVA_FOODS_Discovery_Sheet_JSON.pdf` | 2026-10-23 | Same content as S-02; checked identical 2026-10-25 |
| S-04 | Brand Kit Guidance v0.2 (DOCX) | `C:\Users\Burhan\Downloads\AUREVA-FOODS-Planning-Documents-v0.2.zip` | 2026-10-22 | Palette and fonts superseded by D-01; all other guidance stands |
| S-05 | Claude Code Development Instructions (DOCX) | same zip as S-04 | 2026-10-22 | Stack, workflow, code quality, image/SEO, WhatsApp, claims rules |
| S-06 | Milestone & Review Workflow (DOCX) | same zip as S-04 | 2026-10-22 | Milestones P0–M7, approval protocol, review template |
| S-07 | Product Animation Specification v1.0 (DOCX) | `C:\Users\Burhan\Downloads\AUREVA-FOODS-Product-Animation-Specification-v1.0\` | 2026-10-22 | Product-card reveal and hover behaviour |
| S-08 | Phase 0 brief (pasted by owner) | Conversation, 2026-10-25 | 2026-10-25 | Required docs, technical constraints, workflow |
| S-09 | Owner decisions | Conversation, 2026-10-23 and 2026-10-25 | — | Recorded in §8 |

When a source is replaced by a newer version, add a row instead of editing the old one, and note what changed.

## 4. Source-of-truth hierarchy

1. Explicitly confirmed client facts and approved brand assets.
2. Approved website structure and discovery documents (S-01, S-02/S-03).
3. Approved architecture and design decisions (§8, then ARCHITECTURE_DECISIONS.md and DESIGN_SYSTEM.md).
4. This master plan and milestone acceptance criteria (PROJECT_PLAN.md).
5. The existing implementation, when checking actual behaviour.
6. Clearly labelled recommendations.

**Conflict rule:** when two sources disagree, record the conflict in §9 with a proposed resolution and ask the owner. Never overwrite one source with another silently.

## 5. Rules for content and claims

- Do not invent company history, addresses, factories, facilities, capacity, export volumes, destinations, technical specifications, grades, certifications, registrations, licence numbers, testimonials, awards or customer logos.
- TEMPORARY ASSUMPTIONS are allowed in draft copy (owner instruction, 2026-10-23) only if labelled and kept in central data files, never scattered through components. They must never cover contact details, credentials, claims of being natural or preservative-free, or any item in the list above.
- No packaging details anywhere on the site (S-02 Q17, S-04 §7).
- Generic showcase imagery must not imply it shows Aureva's own facilities, stock, staff or operations (S-04 §7).
- Credentials (Spice Board, APEDA, GST, FSSAI, FDA) are not published until verified (C-05).
- Never invent a WhatsApp number or build a public address from incomplete information.
- Never claim that a form works until its submission flow is implemented and tested.

## 6. Project summary

### 6.1 Business

| Fact | Status | Source |
|---|---|---|
| Manufacturer and exporter of spices from India | CLIENT-PROVIDED / UNVERIFIED (scope across categories unclear, C-08) | S-02 Q1 |
| Business model: "combination (no white label)" | CLIENT-PROVIDED / UNVERIFIED (C-08) | S-02 Q2 |
| Sells under its own brand | CONFIRMED | S-02 Q6 |
| Customers: B2B importers, distributors, Amazon sellers, wholesalers | CONFIRMED | S-02 Q9 |
| Strengths / USPs: "GENERIC" | BLOCKER for specific claims (C-12) | S-02 Q10 |
| Partner company: Dar Al Nibras Foodstuff Trading LLC | CLIENT-PROVIDED / UNVERIFIED (C-04) | S-01, S-02 Q14 |
| Email sales@aurevafoods.com | CONFIRMED (owner, 2026-10-27; C-03) | S-02 Q14 |
| Phone and WhatsApp +91 87589 53000 | CONFIRMED by owner, 2026-10-26 (D-23; S-02 Q14 had dropped the last digit) | S-09 |

### 6.2 Product categories

| Priority | Category | Items supplied | Status |
|---|---|---|---|
| 1 | Spices | 10 | CONFIRMED as a category; names need confirming (C-09) |
| 2 | Dehydrated Products | 12 | CONFIRMED as a category; names and forms need confirming (C-09, C-10) |
| 3 | Fresh Fruits & Vegetables | 5 | CONFIRMED as a category; names need confirming (C-09) |

Source: S-02 Q3. The full product list, with the client's original spelling next to the proposed display name, will live in SITE_STRUCTURE.md. Until then S-02 Q3 is the reference. Priority order comes from S-01 and S-02 Q15.

### 6.3 Pages and navigation (CONFIRMED, S-01; S-02 note)

1. Home 2. About Us 3. Products Overview 4. Spices 5. Dehydrated Products 6. Fresh Fruits & Vegetables 7. Contact Us 8. Privacy Policy 9. Terms & Conditions

- Main navigation: Home | About Us | Products ▾ | Contact Us
- Products dropdown: Spices | Dehydrated Products | Fresh Fruits & Vegetables
- Primary CTA: WhatsApp Us. Secondary: business enquiry form (S-02 Q12: "WA first > inquiry").
- Section order for each page is defined in S-01 and will be carried into SITE_STRUCTURE.md.

## 7. Technical baseline and constraints

### 7.1 Repository state (checked 2026-10-25)

| Item | State |
|---|---|
| Git | Branch `development`, one initial commit; remote `Burhan477/aureva-foods-website` |
| Installed | astro 7.4.2, @astrojs/react 7.1.1, react / react-dom 19.3.1, tailwindcss and @tailwindcss/vite 4.3.3, framer-motion 14.6.0, lucide-react 1.61.0, @types/react and @types/react-dom 19.3.0 |
| Dev tooling | Installed 2026-10-25 (D-22): typescript 6.0.3, @astrojs/check 0.9.12, eslint 10.13.0, typescript-eslint 8.72.0, eslint-plugin-astro 3.2.1, eslint-plugin-jsx-a11y-x 0.2.0, @eslint-react/eslint-plugin 5.28.8, eslint-plugin-react-hooks 7.1.1, globals 17.13.0, prettier 3.9.10, prettier-plugin-astro 1.1.2, prettier-plugin-tailwindcss 0.8.1, eslint-config-prettier 10.1.8 |
| Config | `astro.config.mjs`: React integration and Tailwind Vite plugin; `site` is `https://aurevafoods.com` and `trailingSlash: "always"` (C-18, AD-02). `tsconfig.json`: strict mode, React JSX |
| Source | After M1.3 (2026-10-25): `src/layouts/BaseLayout.astro` (`lang="en"`, full viewport tag, title and description props, global stylesheet, favicon links from the separate session) and a placeholder `src/pages/index.astro`. Astro starter files removed. Config files formatted with Prettier |
| Assets | Starter images removed in M1.3. Added 2026-10-25 in a separate session: `src/assets/images/brand/aureva-foods-logo.png`, `aureva-foods-monogram.png`, new `public/favicon.ico` and `public/apple-touch-icon.png`; `public/favicon.svg` deleted (ASSET_GUIDELINES.md §9.2, C-13) |
| Docs | The ten planning documents in `docs/`, all approved 2026-10-25 |

### 7.2 Constraints

- Keep the installed dependencies and working configuration. Do not reinstall, upgrade or change major versions of Astro, React or Tailwind without a stated reason and owner approval.
- Any new dependency (including dev tooling) needs its purpose and maintenance cost explained, then approval.
- Tailwind CSS v4 conventions (CSS-first `@theme` tokens); no second styling framework.
- Astro renders static content by default. Use React only where interactivity justifies it, and keep client hydration to a minimum.
- Prefer CSS transitions. Use Framer Motion only in approved interactive React components (C-15).
- Respect `prefers-reduced-motion`; content must stay usable without animation or JavaScript.
- Strict TypeScript; avoid `any` unless justified and documented.
- No backend, database, CMS, authentication or third-party service without a documented requirement and approved architecture (C-17).
- No secrets in client bundles or public data files.
- One reusable WhatsApp implementation with a configurable number and message (S-05 §10).

## 8. Decision log

| ID | Date | Decision | Status | Source |
|---|---|---|---|---|
| D-01 | 2026-10-25 | **Brand: "Natural mix."** Soft Ivory `#F5F2E9` background; Deep Olive `#2F4638` primary (header, primary CTA, key headings); Saffron Gold `#F4C430` accent, used as a fill behind dark text or on Deep Olive only, **never as text on light surfaces** (1.64:1 on white); Charcoal `#252A26` text; Terracotta `#B96F4A` Spices accent, large text or non-text only (3.45:1 on ivory); Leaf Green `#2E7D32` Fresh Produce accent (4.58:1 on ivory); White `#FFFFFF` cards. Sage `#89947B` dropped (2.85:1 on ivory). Fonts: DM Serif Display for headlines, Inter for body and UI. Layout keeps the brief's grid, whitespace and precision principles with a natural look. Supersedes the S-04 palette and fonts and the brief's "proposed" Saffron/Leaf Green/Inter set. Full guidance to be written in BRAND_GUIDELINES.md. | SUPERSEDED for palette and fonts by D-24 | Owner, 2026-10-25 |
| D-02 | 2026-10-25 | Earlier build work from before the repository was re-created (2026-10-24) is ignored. The current repository is the only implementation record; M1 has not started. | APPROVED | Owner, 2026-10-25 |
| D-03 | 2026-10-25 | Client source documents are not copied into the repository; they are referenced by path in §3. | APPROVED | Owner, 2026-10-25 |
| D-04 | 2026-10-25 | Milestone names and sequence follow S-06: P0, M1–M7. | APPROVED | Owner, 2026-10-25 |
| D-05 | 2026-10-23 | Labelled TEMPORARY ASSUMPTIONS may fill missing company facts in draft copy, subject to §5. | APPROVED | Owner, 2026-10-23 |
| D-06 | 2026-10-22 | Product-card motion behaviour: premium style; cards reveal once on first entering the viewport; hover combines gentle image zoom and card lift; reduced motion disables movement. Implementation not yet authorised. | APPROVED (behaviour only) | S-07 §1 |
| D-07 | 2026-10-22 | No packaging details on the website. | APPROVED | S-02 Q17, S-04 §7 |
| D-08 | 2026-10-25 | Brand details: DM Serif Display for h1 and h2 only (Inter for h3 and below); product names form-first and plural seeds ("Whole Coriander", "Fennel Seeds"); secondary CTA label "Request a Quote"; British/Indian English spelling; temporary "AUREVA FOODS" wordmark in DM Serif Display until a logo is supplied. Detail in [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md). | APPROVED | Owner, 2026-10-25 |
| D-09 | 2026-10-25 | Dehydrated Products category accent is Saffron Gold, used as fills and marks only with Charcoal or Deep Olive text. Resolves C-25. | APPROVED | Owner, 2026-10-25 |
| D-10 | 2026-10-25 | Routes as in [SITE_STRUCTURE.md](SITE_STRUCTURE.md) §2 (category pages under `/products/`); "Request a Quote" links to `/contact/#enquiry-form`. | APPROVED | Owner, 2026-10-25 |
| D-11 | 2026-10-25 | Add a 404 page, not linked in navigation. Resolves C-26. | APPROVED | Owner, 2026-10-25 |
| D-12 | 2026-10-25 | Home product selections as in SITE_STRUCTURE.md §5.4 (Featured Spices: Turmeric Powder, Chilli Powder, Cumin Powder, Whole Coriander). Resolves C-27. | APPROVED | Owner, 2026-10-25 |
| D-13 | 2026-10-25 | Floating WhatsApp button on mobile only, not covering content or controls. Resolves C-28. | APPROVED | Owner, 2026-10-25 |
| D-14 | 2026-10-25 | Product display names as in SITE_STRUCTURE.md §5, including "Pomegranate" for "pomog". Resolves C-09; product forms stay open under C-10. | APPROVED | Owner, 2026-10-25 |
| D-15 | 2026-10-25 | Animation: CSS first; Framer Motion only inside React islands (ARCHITECTURE_DECISIONS.md AD-06). Resolves C-15. | APPROVED | Owner, 2026-10-25 |
| D-16 | 2026-10-25 | Enquiry form delivered through a managed form service; the specific service is chosen together with hosting (AD-12). Resolves C-17. | APPROVED | Owner, 2026-10-25 |
| D-17 | 2026-10-25 | No analytics at launch (AD-14). Resolves C-30. | APPROVED | Owner, 2026-10-25 |
| D-18 | 2026-10-25 | ARCHITECTURE_DECISIONS.md approved in full (AD-01 to AD-18). | APPROVED | Owner, 2026-10-25 |
| D-19 | 2026-10-25 | DESIGN_SYSTEM.md approved, including the seven derived working shades. Resolves C-33. | SUPERSEDED for colour values by D-24 | Owner, 2026-10-25 |
| D-20 | 2026-10-25 | COMPONENT_INVENTORY.md approved: "All Products" first in the Products dropdown (resolves C-31), breadcrumbs on category pages (resolves C-32), enquiry form fields, and the two WhatsApp message templates (the number remains open under C-01, C-02). | APPROVED | Owner, 2026-10-25 |
| D-21 | 2026-10-25 | ASSET_GUIDELINES.md, SEO_AND_PERFORMANCE.md and QA_CHECKLIST.md approved. All ten planning documents are approved; P0 is complete. | APPROVED | Owner, 2026-10-25 |
| D-23 | 2026-10-26 | WhatsApp and phone number +91 87589 53000 (`918758953000` in `site.ts`), supplied by the owner; the same number serves as the phone (C-01, C-02 resolved). WhatsApp buttons are now live links. | APPROVED | Owner, 2026-10-26 |
| D-24 | 2026-10-26 | **Theme modernisation** (owner brief and answers, 2026-10-26). Palette: White `#FFFFFF` and `#FAFAF8` backgrounds, Ink `#18181B` text, `#71717A` secondary text, `#E4E4E7` decorative borders, Noir `#181C19` for the footer and contained dark panels; primary action Emerald 700 `#047857` (white text 5.48:1; the brief's `#10B981` fails at 2.54:1 and is used only for marks and for buttons on Noir with Ink text, 6.98:1); category accents Orange `#F97316` (Spices), Saffron `#F4C430` (Dehydrated) and Teal `#14B8A6` (Fresh) as marks only, with `-deep` shades for any text. Typography: Inter only (DM Serif Display removed); h1/h2 Inter 600 with tight tracking. Layout: no image washes, offset frames or globe illustrations; shared SectionHeader; eyebrows in sentence case. Content cut by roughly half on Home, About, Spices and Dehydrated; sections merged or removed as listed in SITE_STRUCTURE.md §4.0. Buttons keep the D-08 labels. Supersedes the D-01 palette and fonts and the D-19 derived shades; all other decisions stand. Copy is PENDING REVIEW. | APPROVED | Owner, 2026-10-26 |
| D-22 | 2026-10-25 | M1.1 and M1.2 approved: dev tooling installed (TypeScript held at `~6.0.3` because `@astrojs/check` and `typescript-eslint` do not support TypeScript 7; ESLint 10 with `eslint-plugin-astro`, `eslint-plugin-jsx-a11y-x`, `@eslint-react/eslint-plugin` and `eslint-plugin-react-hooks` because the classic React and accessibility plugins stop at ESLint 9; Prettier with Astro and Tailwind plugins) and scripts `check`, `lint`, `format`, `format:check` added. Resolves C-16. | APPROVED | Owner, 2026-10-25 |

New decisions are appended with the next ID. A decision that replaces an earlier one names it ("supersedes D-xx") and the earlier row is left in place.

## 9. Conflict and open-items register

"Blocks" names the earliest milestone or section that cannot be finished without the item.

| ID | Topic | Detail | Proposed resolution | Blocks | Status |
|---|---|---|---|---|---|
| C-01 | Phone number | S-02 Q14 gives `+91875895300`: 9 digits after +91, where Indian mobile numbers have 10. | Resolved by D-23. | — | RESOLVED |
| C-02 | WhatsApp number | No WhatsApp number is stated separately; unclear whether it equals C-01. Message templates approved in D-20. | Resolved by D-23. | — | RESOLVED |
| C-03 | Email domain | S-02 Q14: `sales@aurevafoods.com`; S-02 note: form goes to `SALES@AUREVA.COM`. | Resolved 2026-10-27: owner confirmed `sales@aurevafoods.com` (domain matches C-18). Shown on Contact and in the Footer, and used in Organization JSON-LD; form delivery still waits on the form service (C-18, M5.4). | — | RESOLVED |
| C-04 | Partner company | S-02 writes "DARALNIBRAS FOODSTUFF TRADIN LLC, (...)" (truncated); S-01 writes "Dar Al Nibras Foodstuff Trading LLC". Relationship and approved wording unknown. | Owner confirms legal name, relationship and what may be shown. | Contact section 5 (M5) | OPEN |
| C-05 | Credentials | Client lists Spice Board, APEDA, GST, FSSAI, FDA (S-02 Q11). These are mostly registrations or licences, not quality certifications; none verified. S-01 headings say "Quality & Certifications". | Owner provides documents. Verify entity, type, validity, permitted wording and logo-use rules. Section headings to use accurate wording (for example "Quality & Compliance") until verified. | Home section 8 (M3), About section 5 (M5), launch | OPEN |
| C-06 | "Natural" claims | S-02 Q16 gives "100% NATURAL, WITHOUT ANY MIXES (COLOR AND ALL) (NO PRESERVE)" in answer to the **search terms** question. The Phase 0 brief lists it as product positioning. Indian food advertising rules restrict wording such as "natural". The supplied logo also carries the tagline "Nature Preserved. Flavor Delivered.", where "preserved" may read as a preservation or natural claim and "Flavor" is US spelling. | Do not publish as a claim until the owner confirms it as a product claim with supporting evidence and approved wording. May inform keyword research, labelled as a suggestion. | Product copy (M3, M4) | OPEN |
| C-07 | Markets served | S-02 Q7 lists UAE, Qatar, Oman, UK, USA, Canada, Germany, France, Japan, Africa. S-06 says global presence is "to be confirmed later". | Owner confirms which markets may be named publicly. | Home "Global Presence" (M3), About "Global Markets" (M5) | OPEN |
| C-08 | Business model | "Manufacturer and exporter of spices" (Q1) but the range includes dehydrated goods and fresh produce; "combination" (Q2). Not stated which products are manufactured, processed or sourced. | Owner clarifies by category. | About "Manufacturing & Processing Capabilities", Spices "Quality & Processing" | OPEN |
| C-09 | Product names | Client spellings: fenugirk, garli, corionder, beat root, corronder leaves, tamrind, pomog, ginger poweder; "coriander whole" vs "whole coriander"; "fennel seed" vs "fennel seeds"; "chilli powder" type unstated. | Resolved by D-14. | — | RESOLVED |
| C-10 | Overlapping items | Garlic appears under Spices (powder) and Dehydrated (form unstated). Onion appears under Dehydrated and Fresh. Client groups lemon, mango, tamarind and mint as "vegetable powders" (S-01 uses "Vegetable & Other Powders"). | Owner confirms the dehydrated garlic and onion forms. Use S-01 grouping. Plan SEO to avoid the pages competing with each other. | M4 | OPEN |
| C-11 | Formats and specifications | Product formats not answered (S-02 Q4 null). No specifications, grades or origins supplied. S-01 includes "Product Range & Specifications" sections. | Owner supplies data, or those sections are reduced to an enquiry prompt. Specifications are never invented. | Spices / Dehydrated "Product Range & Specifications" (M4) | OPEN |
| C-12 | Strengths and FAQs | USPs answered "GENERIC"; no FAQ content supplied. | Draft copy with labelled TEMPORARY ASSUMPTIONS (D-05) for owner review. | Home "Why Aureva Foods" (M3), Spices FAQs (M4) | OPEN |
| C-13 | Logo | An AI-generated logo and monogram were supplied on 2026-10-25 as raster files and recorded in ASSET_GUIDELINES.md §9.2 (added in a separate session). Not yet approved for use: Gemini terms for commercial and trademark use, no vector, no light version for the Olive footer, the full emblem is too detailed for a 64 px header, and the tagline raises C-06. | Owner approves use and confirms the terms; ideally commission a vector redraw with a light version and a simplified header lockup. Temporary wordmark remains the fallback. | Final header/footer (M2), launch | OPEN |
| C-14 | Photography | No product photography supplied. Two images in Downloads ("Golden Spice Market at Sunrise.png", "Rustic Indian Spice Market Spread.png") have unknown origin and licence. | Owner confirms origin and licence, or approves a sourcing plan. Rules in ASSET_GUIDELINES.md. | Hero and showcases (M3) | OPEN |
| C-15 | Framer Motion | Installed (S-08), but S-04, S-05 and S-07 prefer CSS and say a library should be used only when justified. S-07 card behaviour can be done with CSS plus a small observer script. | Resolved by D-15. | — | RESOLVED |
| C-16 | Quality tooling | S-05 §8 requires ESLint, Prettier, type checking and matching scripts. None are present, and `typescript` / `@astrojs/check` are not installed. | Resolved by D-22. | — | RESOLVED |
| C-17 | Form delivery | The form should reach the sales mailbox (S-02 note), but the site is static with no backend, and hosting is undecided. | Resolved by D-16. | — | RESOLVED |
| C-18 | Hosting and domain | Hosting provider and production domain not stated. `aurevafoods.com` is only inferred from the email (C-03). Astro `site` is unset, which canonical URLs and the sitemap need. | Owner confirms the domain and hosting; the form service is chosen at the same time (D-16). | M6 SEO, M7 deployment | PARTLY RESOLVED: owner confirmed the domain `https://aurevafoods.com` (no www) on 2026-10-27, and `site` is set. Hosting and form service still OPEN. |
| C-19 | Address | None supplied; S-01 Contact section 6 is "if applicable". | Owner supplies the address or confirms it is omitted. | Contact section 6 (M5) | OPEN |
| C-20 | Social media | S-02 Q14 "smm -" is blank. | Owner supplies profile links or confirms none. | Footer (M2) | OPEN |
| C-21 | Legal pages | S-02 Q14: privacy and terms "generic". Content must reflect actual data collection (form, any analytics). | Draft after C-17 and the analytics decision; owner arranges legal review. | M6 | OPEN |
| C-22 | Brand direction | S-04 palette and fonts vs the brief's Saffron/Leaf Green/Inter. | Resolved by D-01. | — | RESOLVED |
| C-23 | Milestone status | S-06 says "M1.1 environment setup was reported complete"; the repository holds only the starter. | Resolved by D-02: M1 not started. | — | RESOLVED |
| C-24 | Packaging | S-02 Q5 says non-fresh products are packaged; Q17 says no packaging details. | Resolved by D-07: no packaging content. | — | RESOLVED |
| C-25 | Dehydrated Products accent | S-04 gave Dehydrated Products the Sage accent, which D-01 dropped. | Use Saffron Gold as fills and marks only, with Charcoal or Deep Olive text (BRAND_GUIDELINES.md §3.3). | Resolved by D-09. | RESOLVED |
| C-26 | 404 page | Not in S-01. | Resolved by D-11. | — | RESOLVED |
| C-27 | Featured Spices selection | S-01 has a Home "Featured Spices" section but no selection. | Resolved by D-12. | — | RESOLVED |
| C-28 | Mobile floating WhatsApp button | Not in S-01. | Resolved by D-13. | — | RESOLVED |
| C-29 | Aureva legal name | Registered company name not supplied; needed for the footer copyright and legal pages. | Owner supplies it. | Footer (M2), M6 legal pages | OPEN |
| C-30 | Analytics | Not mentioned in any source; affects the Privacy Policy and whether a cookie notice is needed. | Resolved by D-17. | — | RESOLVED |
| C-31 | Products dropdown entry | S-01 lists only the three categories in the dropdown; the Products Overview page needs a way in from it. | Resolved by D-20. | — | RESOLVED |
| C-32 | Breadcrumbs | Not in S-01. | Resolved by D-20. | — | RESOLVED |
| C-33 | Derived colour shades | Hover, muted text, borders, alternate background and error colour need values not in D-01. | Resolved by D-19. | — | RESOLVED |
| C-34 | Node.js version | `eslint-plugin-astro` 3.x and its parser declare Node `^22.22.3 \|\| ^24.16.0 \|\| >=26.3.0`; the development machine runs Node 24.11.1, so npm prints an engine warning. Lint runs correctly today. Every ESLint 10 version of the plugin has the same requirement. | Owner updates Node on the development machine to the latest 24.x LTS (24.16 or newer). No project change needed; production builds do not run lint. | M1 exit (clean install) | OPEN |
| C-35 | Line endings | Git on the development machine uses `core.autocrlf=true`, so checked-out files get Windows line endings, while Prettier expects Unix line endings. After a fresh clone or checkout, `npm run format:check` would fail on every file. | Add a `.gitattributes` file with `* text=auto eol=lf` so text files always use Unix line endings in the working copy. | M1 exit | OPEN |

## 10. Change control

- Record every approved design or content decision in §8 (or in the authoritative supporting document, with a link here).
- If a new requirement conflicts with an approved decision, add it to §9, explain the conflict and ask the owner before changing anything.
- Keep each change to the approved scope; no unrelated refactoring.
- Superseded decisions and sources stay in place and are marked as superseded.
- Finishing a milestone never authorises the next one.

## 11. Milestone sequence

Detailed deliverables, dependencies and acceptance criteria will live in PROJECT_PLAN.md.

| Milestone | Scope (S-06) | Exit gate | Status |
|---|---|---|---|
| P0 — Planning foundation | Audit, the ten planning documents, source and decision records | Owner approves the planning documents. No application code changes. | DONE (2026-10-25) |
| M1 — Project foundation | Configuration, global design tokens (D-01), ESLint/Prettier/type checking (C-16), folder and data conventions, baseline checks | Checks documented and actually run; owner approval | IN PROGRESS |
| M2 — Shared shell | Fonts, tokens, layout, header, navigation and Products dropdown, footer, buttons, containers, WhatsApp CTA component | Desktop and mobile review; owner approval | NOT STARTED |
| M3 — Homepage | The 11 S-01 home sections, **one section per approval cycle** | Each section approved before the next | NOT STARTED |
| M4 — Product pages | Products Overview, Spices, Dehydrated Products, Fresh Fruits & Vegetables | Product data verified; each page and section approved | NOT STARTED |
| M5 — About and Contact | About Us, enquiry form, WhatsApp enquiry, partner and contact details | Facts verified; form and CTA tested end to end | NOT STARTED |
| M6 — Legal, SEO and quality | Privacy, Terms, metadata, sitemap, robots, structured data, accessibility, performance, responsive and link checks | Actual check results reported; legal text and claims reviewed | NOT STARTED |
| M7 — Deployment and handover | Hosting configuration, environment variables, deployment, smoke tests, rollback notes, handover | Owner authorises deployment; production checks documented | NOT STARTED |

## 12. Working process

### 12.1 For every page or section

1. Inspect the existing implementation and the relevant documents.
2. Confirm the exact scope and dependencies, including open items from §9.
3. Present the plan using the review template (12.2).
4. Wait for explicit owner approval.
5. Implement only the approved scope.
6. Run the relevant checks (12.3).
7. Report changed files, commands run with their actual results, and remaining issues.
8. Present the result for review, with how to view it locally.
9. Wait for explicit approval before continuing.

Silence, a passing build or a completed checklist is never approval. Unrelated homepage sections are never built in a single step. The owner makes all git commits and pushes.

### 12.2 Section review template (S-06 §4)

| Field | Content |
|---|---|
| Section | Exact page and section |
| Purpose | What the visitor should understand or do |
| Content source | Source ID (§3), decision ID (§8), or labelled assumption |
| Layout plan | Structure, hierarchy, imagery, responsive behaviour |
| Interactions | Links, WhatsApp action, forms, motion |
| Assets | Images, icons, logos; missing materials |
| Acceptance criteria | Observable requirements |
| Review result | Approved / changes requested / rejected |

### 12.3 Minimum checks per implementation task

- `npm run build` passes.
- Type checking passes (`npm run check`).
- Lint and format checks pass (`npm run lint`, `npm run format:check`).
- Manual check at small mobile, tablet, laptop and wide desktop widths with no horizontal overflow.
- Keyboard navigation, visible focus and reduced-motion behaviour checked for anything interactive.
- Content checked against §5 and the status labels.

A passing build proves the site compiles. It does not prove visual approval, factual accuracy or working functionality. The full checklist will live in QA_CHECKLIST.md.

## 13. Supporting documents

Recommended writing order; each is written and approved one at a time.

| Order | Document | Responsible for | Status |
|---|---|---|---|
| 1 | AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md (this file) | Coordination, sources, decisions, conflicts, sequence | APPROVED 2026-10-25 |
| 2 | [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md) | Positioning, palette (D-01), typography, logo, photography direction, voice, product naming, claims | APPROVED 2026-10-25 |
| 3 | [SITE_STRUCTURE.md](SITE_STRUCTURE.md) | Page hierarchy, routes, section order, navigation, product list and name mapping, CTA placement, SEO priority, content dependencies | APPROVED 2026-10-25 |
| 4 | [PROJECT_PLAN.md](PROJECT_PLAN.md) | Milestone deliverables, dependencies, acceptance criteria, status, blockers, definition of done | APPROVED 2026-10-25 |
| 5 | [ARCHITECTURE_DECISIONS.md](ARCHITECTURE_DECISIONS.md) | Rendering, routing, layouts, Tailwind v4, animation, component boundaries, data, forms, accessibility, security | APPROVED 2026-10-25 |
| 6 | [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) | Tokens, type scale, spacing, containers, grids, breakpoints, buttons, forms, surfaces, motion | APPROVED 2026-10-25 |
| 7 | [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md) | Header, dropdown, buttons, product cards and grids, showcases, specification tables, forms, WhatsApp CTA, footer, primitives | APPROVED 2026-10-25 |
| 8 | [ASSET_GUIDELINES.md](ASSET_GUIDELINES.md) | Directories, naming, formats, sizes, photography, optimisation, alt text, licensing and provenance | APPROVED 2026-10-25 |
| 9 | [SEO_AND_PERFORMANCE.md](SEO_AND_PERFORMANCE.md) | Metadata, canonical URLs, sitemap, robots, structured data, headings, internal links, images, Core Web Vitals, budgets | APPROVED 2026-10-25 |
| 10 | [QA_CHECKLIST.md](QA_CHECKLIST.md) | Build, types, responsive, accessibility, links, form, WhatsApp, content verification, browsers, launch readiness | APPROVED 2026-10-25 |

## 14. Launch requirements

The site may launch only when all of the following hold:

- No content marked TEMPORARY ASSUMPTION or CLIENT-PROVIDED / UNVERIFIED remains on public pages.
- Phone, WhatsApp, email, partner and address details are confirmed (C-01 to C-04, C-19).
- Every credential shown is verified with approved wording (C-05); every claim is substantiated (C-06).
- The enquiry form and WhatsApp CTA have been tested end to end on the production domain.
- Privacy Policy and Terms reflect actual site behaviour and have been reviewed (C-21).
- QA_CHECKLIST.md has been completed with actual results.
- The owner explicitly authorises deployment (M7).

## 15. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft from the P0 audit: sources, decisions D-01 to D-07, conflicts C-01 to C-24, milestone sequence, workflow |
| 0.1 | 2026-10-25 | Approved by owner; status fields updated, no content changes |
| 0.2 | 2026-10-25 | Added D-08 (brand details) and C-25 (Dehydrated accent); BRAND_GUIDELINES.md drafted |
| 0.3 | 2026-10-25 | BRAND_GUIDELINES.md approved; added D-09 (C-25 resolved); added C-26 to C-29 from SITE_STRUCTURE.md draft |
| 0.4 | 2026-10-25 | SITE_STRUCTURE.md approved; added D-10 to D-14 (C-09, C-26, C-27, C-28 resolved); PROJECT_PLAN.md drafted |
| 0.5 | 2026-10-25 | PROJECT_PLAN.md approved; ARCHITECTURE_DECISIONS.md drafted; added C-30 (analytics) |
| 0.6 | 2026-10-25 | ARCHITECTURE_DECISIONS.md approved (D-15 to D-18; C-15, C-17, C-30 resolved); remaining five documents drafted; added C-31 to C-33 |
| 0.7 | 2026-10-25 | Five remaining documents approved (D-19 to D-21; C-31 to C-33 resolved); P0 DONE; C-02, C-06, C-13 and §7.1 updated for the logo and favicon files added in a separate session |
| 0.8 | 2026-10-25 | M1.1 and M1.2 done (D-22, C-16 resolved); added C-34 (Node version); §7.1 and §12.3 updated for the installed tooling |
| 0.9 | 2026-10-25 | M1.3 implemented; §7.1 updated; added C-35 (line endings) |
| 1.0 | 2026-10-26 | Added D-23 (WhatsApp and phone number); C-01 and C-02 resolved; §6.1 updated |
| 1.1 | 2026-10-26 | Added D-24 (theme modernisation); D-01 palette and fonts and D-19 shades marked superseded |
| 1.2 | 2026-10-27 | C-18 partly resolved: production domain confirmed and set; SEO batch (canonicals, sitemap, robots, structured data, 404 page) implemented per SEO_AND_PERFORMANCE.md v0.2 |
