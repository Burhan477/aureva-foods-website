# AUREVA FOODS — Brand Guidelines

| | |
|---|---|
| Version | 0.2 |
| Last updated | 2026-10-25 |
| Status | APPROVED by owner, 2026-10-25 |
| Coordinated by | [AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md](AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md) |

## 1. Status and scope

This document defines how the AUREVA FOODS brand looks and speaks: positioning, colour roles, typography, logo, photography, icons, voice, product naming, claims and CTA wording.

It does not define implementation values such as token names, type sizes, spacing or breakpoints; those belong in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). The full product list and spelling mapping belong in [SITE_STRUCTURE.md](SITE_STRUCTURE.md). Source IDs (S-xx), decisions (D-xx) and open items (C-xx) refer to the master plan.

The palette and fonts come from decision D-01 ("Natural mix", 2026-10-25). Everything else in Brand Kit Guidance v0.2 (S-04) still applies unless this document says otherwise.

## 2. Positioning

| Dimension | Guidance | Source |
|---|---|---|
| What we are | A B2B supplier of Indian spices, dehydrated products and fresh produce | S-02 Q1, Q3 |
| Audience | B2B importers, distributors, wholesalers, Amazon sellers | S-02 Q9 |
| Personality | Professional, confident, natural, clear, dependable | S-04 §2 |
| Visual character | Modern enterprise structure with natural warmth and industrial precision: strong grid, generous whitespace, ingredient-led imagery, restrained decoration | D-01, S-04 §3 |
| Primary action | Start a WhatsApp conversation | S-01, S-02 Q12 |
| Secondary action | Request a quote through the enquiry form | S-02 Q12, D-08 |

**Avoid:** rustic farm clichés, heavy leaf or mandala ornament, retail-grocery styling, excessive gradients, decorative effects that weaken B2B credibility (S-04 §3, S-08).

## 3. Colour

### 3.1 Palette and roles (D-01)

| Colour | Hex | Role | Allowed | Not allowed |
|---|---|---|---|---|
| Soft Ivory | `#F5F2E9` | Main page background | Page and section backgrounds; text on Deep Olive or Charcoal | — |
| White | `#FFFFFF` | Surfaces | Cards, form fields, content panels | Large page backgrounds (ivory carries the natural warmth) |
| Deep Olive | `#2F4638` | Primary brand colour | Header, footer, primary buttons, key headings, links, dark sections | — |
| Charcoal | `#252A26` | Text | Body text, secondary headings, icons | — |
| Saffron Gold | `#F4C430` | Signature accent | Fills behind Charcoal or Deep Olive text (badges, highlights, accent buttons); accent text and lines on Deep Olive or Charcoal; small decorative marks | **Any text, icon or essential control on Ivory or White** (fails contrast) |
| Terracotta | `#B96F4A` | Spices accent | Category marks, rules, borders, large text (≥ 24px, or ≥ 18.66px bold) | Body text, small labels, white or charcoal text on a Terracotta fill |
| Leaf Green | `#2E7D32` | Fresh Fruits & Vegetables accent | Category marks, text at any size on Ivory or White, fills behind White text | Combining with Deep Olive in the same element (two competing greens) |

**Dropped:** Sage `#89947B` (2.85:1 on ivory; fails even the 3:1 non-text minimum).

### 3.2 Contrast reference

Measured with the WCAG 2.x formula on 2026-10-25. AA requires 4.5:1 for normal text and 3:1 for large text and non-text UI.

| Foreground on background | Ratio | Normal text | Large text / UI |
|---|---|---|---|
| Charcoal on Ivory | 13.05 | Pass | Pass |
| Charcoal on White | 14.61 | Pass | Pass |
| Deep Olive on Ivory | 9.13 | Pass | Pass |
| Deep Olive on White | 10.22 | Pass | Pass |
| Ivory or White on Deep Olive | 9.13 / 10.22 | Pass | Pass |
| Ivory on Charcoal | 13.05 | Pass | Pass |
| Saffron Gold on Deep Olive | 6.22 | Pass | Pass |
| Saffron Gold on Charcoal | 8.89 | Pass | Pass |
| Charcoal on Saffron Gold | 8.89 | Pass | Pass |
| Deep Olive on Saffron Gold | 6.22 | Pass | Pass |
| Leaf Green on White | 5.13 | Pass | Pass |
| Leaf Green on Ivory | 4.58 | Pass (narrow margin) | Pass |
| White on Leaf Green | 5.13 | Pass | Pass |
| Terracotta on White | 3.86 | **Fail** | Pass |
| Terracotta on Ivory | 3.45 | **Fail** | Pass |
| White on Terracotta | 3.86 | **Fail** | Pass |
| Charcoal on Terracotta | 3.78 | **Fail** | Pass |
| Saffron Gold on White | 1.64 | **Fail** | **Fail** |
| Saffron Gold on Ivory | 1.47 | **Fail** | **Fail** |

### 3.3 Category accents

Accents identify a category; they never replace the core palette. Cards, typography, image treatment, spacing and CTA patterns stay identical across categories (S-04 §6).

| Category | Accent | Use |
|---|---|---|
| Spices | Terracotta | Category label rule, card top border, icon tint, large headings only |
| Dehydrated Products | Saffron Gold (D-09) | Fills and marks only, with Charcoal or Deep Olive text |
| Fresh Fruits & Vegetables | Leaf Green | Category label, rule, icon tint, text |

Accents cover small areas only. No full-section accent backgrounds.

## 4. Typography (D-01, D-08)

| Role | Typeface | Used for | Weights |
|---|---|---|---|
| Display | DM Serif Display | Page titles (h1) and section headings (h2) only; the temporary wordmark (§5) | 400 (the family's only weight); italic not used |
| Text and UI | Inter | h3 and below, body copy, navigation, buttons, forms, labels, product content, tables | 400, 500, 600 (700 only if a later decision needs it) |

- Fallbacks: DM Serif Display → Georgia, "Times New Roman", serif. Inter → system-ui, "Segoe UI", Roboto, Arial, sans-serif.
- Display type is used sparingly: never for body text, buttons, navigation, labels or long headings that wrap past three lines on mobile.
- Page and section headings, CTA labels (§11) and product names (§9) use Title Case, matching S-01. Body text and descriptive subheadings use sentence case. No all-caps body text; small uppercase labels (eyebrows) may use Inter 500–600 with added letter spacing.
- Font loading, subsetting and layout-shift prevention are architecture decisions ([ARCHITECTURE_DECISIONS.md](ARCHITECTURE_DECISIONS.md)); the type scale is in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).

## 5. Logo

An AI-generated AUREVA FOODS logo and an "A" monogram were supplied on 2026-10-25 as raster files (ASSET_GUIDELINES.md §9.2, §10). Their use is not yet approved: commercial and trademark terms, a light version for dark backgrounds, a simpler header lockup and the tagline are open under C-13 and C-06. The `Png main logo.png` file in Downloads belongs to another company and must not be used.

Until the supplied logo is approved for use, the temporary wordmark below remains the fallback.

**Temporary wordmark (TEMPORARY ASSUMPTION, D-08):**

- Text "AUREVA FOODS" in DM Serif Display.
- Deep Olive on Ivory or White; Ivory on Deep Olive or Charcoal.
- No icon, no tagline, no effects, no Saffron Gold on light backgrounds.
- Same position and size in the header and footer, so the real logo can replace it without layout changes.

When the logo is approved, this section is replaced with: approved files and formats, colour versions, clear space, minimum size, placement, and misuse examples.

## 6. Photography

**Direction (S-04 §6–7, D-01):**

- Realistic, high-quality ingredient photography with consistent, natural daylight and a warm, neutral colour balance.
- Uncluttered compositions on simple natural surfaces (stone, wood, linen) with generous negative space for text.
- Ingredient close-ups showing texture: whole spices, ground powders, seeds, dried onion and garlic, herbs, fresh produce.
- One consistent treatment across all three categories; colour differences come from the ingredients, not from filters.

**Rules:**

- No packaging shown or described (D-07).
- Generic or stock imagery must never imply it shows Aureva's own facilities, stock, staff or operations.
- AI-generated imagery, if approved, is recorded as such in the asset register ([ASSET_GUIDELINES.md](ASSET_GUIDELINES.md)) and follows the same rule.
- Avoid: crowded market scenes, heavy rustic props (sacks, baskets) as the dominant look, staged smiling-farmer clichés, oversaturation.
- The two images in Downloads ("Golden Spice Market at Sunrise.png", "Rustic Indian Spice Market Spread.png") have unknown origin and licence (C-14). They also lean towards the market-scene look this section avoids, so they need review before any use.

Technical requirements (formats, sizes, alt text, optimisation) are in [ASSET_GUIDELINES.md](ASSET_GUIDELINES.md).

## 7. Icons

- Lucide React only (already installed), one stroke width and consistent sizing throughout.
- Icons support a label; they never replace text for an essential action.
- Used sparingly: navigation affordances, contact methods, feature lists. No decorative icon clusters.
- The WhatsApp CTA may use the WhatsApp glyph if its trademark guidelines are followed; this is decided in [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md).

## 8. Voice and tone

| Do | Avoid |
|---|---|
| Concise, factual, business-oriented language | Unsupported superlatives ("the best", "leading", "No. 1") |
| Explain product categories and invite a direct enquiry | Inventing sourcing, production, capacity or export details |
| Confident, respectful B2B communication | Consumer-only or retail language |
| Short sentences and scannable lists | Long promotional paragraphs |
| Use "organic" only when accurate and substantiated | Implying certification through wording or visual style |

**Spelling (D-08):** British/Indian English, matching the Website Structure (S-01): enquiry, colour, flavour, chilli, optimise, organisation, licence (noun).

## 9. Product naming (D-08)

- Category names exactly as approved: **Spices**, **Dehydrated Products**, **Fresh Fruits & Vegetables** (ampersand in navigation and headings).
- Product names in Title Case: "Turmeric Powder", "Mint Leaves Powder".
- Form before the ingredient for whole products: **"Whole Coriander"**, **"Whole Cumin"**.
- Plural for seeds: **"Fennel Seeds"**.
- Spelling is corrected for display, but the client's original list stays the record. The original-to-display mapping and confirmation status live in [SITE_STRUCTURE.md](SITE_STRUCTURE.md) (C-09).
- Where a product's form is unknown (for example dehydrated garlic and onion, C-10), use the name as supplied with no added form, grade or origin.
- No packaging sizes, pack types or grades in names (D-07, C-11).

## 10. Claims and credentials

### 10.1 Credentials (C-05)

None of these may be shown, named as a "certification", or illustrated with a logo until the owner supplies the document and it is verified for entity name, type, number, validity, permitted wording and logo-use rules.

| As supplied (S-02 Q11) | Likely document (to verify) | Nature | Status |
|---|---|---|---|
| "spice board certic" | Spices Board India: Certificate of Registration as Exporter of Spices (CRES) | Export registration | CLIENT-PROVIDED / UNVERIFIED |
| "apeda" | APEDA: Registration-cum-Membership Certificate (RCMC) | Export registration | CLIENT-PROVIDED / UNVERIFIED |
| "gst" | GST registration (GSTIN) | Tax registration; not a quality credential | CLIENT-PROVIDED / UNVERIFIED |
| "fssai" | FSSAI licence or registration | Food business licence | CLIENT-PROVIDED / UNVERIFIED |
| "fda" | Presumably US FDA Food Facility Registration | Registration; the US FDA does not "certify" or "approve" food facilities | CLIENT-PROVIDED / UNVERIFIED |

Until verified, section headings use accurate neutral wording (for example "Quality & Compliance") rather than "Certifications" (C-05).

### 10.2 Restricted wording

These words and phrases are not used in site copy, metadata or image alt text unless the owner approves the exact wording with supporting evidence:

| Wording | Reason |
|---|---|
| "100% natural", "natural" as a product claim, "pure" | Client supplied as search terms, not a verified claim; regulated food-claim wording in India (C-06) |
| "No preservatives", "no added colour", "chemical-free", "no mixes" | Product claims needing evidence (C-06) |
| "Organic" | Requires certification |
| "Certified", "FDA approved", "FDA certified" | Misstates registrations (§10.1) |
| "Best", "leading", "No. 1", "premium quality" as a claim, "world-class" | Unsupported superlatives (§8) |
| Market or country names as served markets | Unconfirmed (C-07) |
| Years of experience, capacity, volumes, customer counts | Not supplied; never invented (master plan §5) |

"Natural" may still describe the visual direction in internal documents; it is restricted only as a product claim.

## 11. CTA wording (D-08)

| CTA | Label | Action |
|---|---|---|
| Primary | **WhatsApp Us** | Opens WhatsApp with the approved number and default message (C-01, C-02) |
| Secondary | **Request a Quote** | Goes to the business enquiry form |

The same two labels are used everywhere, including product cards and section CTAs. New CTA labels need owner approval. Supporting links ("View Spices", "Contact Us") are navigation, not CTAs.

## 12. Motion character

Motion is restrained and functional: short fades, small upward reveals, gentle image zoom and card lift on hover, all disabled under reduced motion (D-06, S-04 §11, S-07). No scroll-jacking, parallax, bouncing or continuous movement. Timings and rules are in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).

## 13. Open items for this document

| ID | Item | Effect here |
|---|---|---|
| C-05 | Credentials unverified | §10.1 stays UNVERIFIED; no credential content on the site |
| C-06 | "Natural" / no-preservative claims | §10.2 restrictions stay in force |
| C-09, C-10 | Product names and forms | §9 conventions apply; mapping in SITE_STRUCTURE.md |
| C-13 | Supplied logo not yet approved for use | §5 temporary wordmark remains the fallback |
| C-14 | Photography origin and licence | §6 images not cleared for use |

## 14. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft: D-01 palette and fonts, D-08 choices, credentials and restricted wording |
| 0.1 | 2026-10-25 | Approved by owner; Dehydrated accent confirmed as D-09 (C-25 resolved) |
| 0.2 | 2026-10-25 | §5 and §13 updated: AI-generated logo supplied, approval pending (C-13); no rule changes |
