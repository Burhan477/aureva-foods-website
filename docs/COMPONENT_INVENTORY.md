# AUREVA FOODS — Component Inventory

| | |
|---|---|
| Version | 0.2 |
| Last updated | 2026-10-27 |
| Status | APPROVED by owner, 2026-10-25 |
| Coordinated by | [AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md](AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md) |

## 1. Status and scope

This document lists every planned component: what it is for, how it is built (AD-04), where it lives (AD-18), what data it takes, its states, accessibility requirements and the task that builds it (PROJECT_PLAN.md). Visual values come from [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).

Nothing is built yet; every status is NOT BUILT. A component not listed here needs a short entry and owner approval before it is created.

**Type key:** Astro = server-rendered, no client JavaScript. Astro + script = server-rendered with a small TypeScript module (AD-05). React = client island (AD-04).

## 2. Summary

| Component | Type | Folder | Used on | Task |
|---|---|---|---|---|
| BaseLayout | Astro | `layouts/` | All pages | M1.3 / M2 |
| LegalLayout | Astro | `layouts/` | Privacy, Terms | M6.1 |
| SkipLink | Astro | `components/layout/` | All pages | M2.3 |
| Header | Astro + script | `components/layout/` | All pages | M2.3 |
| ProductsMenu (dropdown) | Astro + script | `components/layout/` | Header | M2.3 |
| MobileMenu | Astro + script | `components/layout/` | Header (< `lg`) | M2.3 |
| ScrollTopButton | Astro + script | `components/layout/` | All pages (BaseLayout) | 2026-10-27, PENDING REVIEW |
| FloatingWhatsApp | Astro | `components/layout/` | All pages below `lg` (BaseLayout) | 2026-10-27, PENDING REVIEW |
| Wordmark | Astro | `components/layout/` | Header, Footer | M2.3 |
| Footer | Astro | `components/layout/` | All pages | M2.4 |
| FloatingWhatsApp | Astro | `components/layout/` | All pages (< `lg`) | M2.5 |
| Container | Astro | `components/ui/` | Everywhere | M2.2 |
| Section | Astro | `components/ui/` | Everywhere | M2.2 |
| SectionHeading | Astro | `components/ui/` | Most sections | M2.2 |
| Button | Astro | `components/ui/` | Everywhere | M2.2 |
| WhatsAppButton | Astro | `components/ui/` | CTAs, cards | M2.5 |
| TextLink | Astro | `components/ui/` | Everywhere | M2.2 |
| Eyebrow / Badge | Astro | `components/ui/` | Headings, cards | M2.2 |
| Breadcrumbs | Astro | `components/ui/` | Category pages | M4 (C-32) |
| PendingContent | Astro | `components/ui/` | Blocked sections | M2.2 |
| CategoryCard | Astro | `components/product/` | Home, Products Overview | M3.3 |
| ProductCard | Astro | `components/product/` | Home, category pages | M3.4 |
| ProductGrid | Astro | `components/product/` | Home, category pages | M3.4 |
| ProductGroup | Astro | `components/product/` | Dehydrated, Fresh pages | M4.3 |
| SpecificationTable | Astro | `components/product/` | Spices, Dehydrated | M4.2 |
| Hero | Astro | `components/sections/home/` | Home | M3.1 |
| PageIntro | Astro | `components/sections/` | All inner pages | M4.1 |
| SplitContent | Astro | `components/sections/` | About, Home intro | M3.2 |
| FeatureList | Astro | `components/sections/` | Why Aureva | M3.7 |
| ComplianceList | Astro | `components/sections/` | Home, About | M3.8 |
| MarketsList | Astro | `components/sections/` | Home, About | M3.9 |
| FAQList | Astro | `components/sections/` | Spices | M4.2 |
| EnquiryCTA | Astro | `components/sections/` | End of most pages | M3.10 |
| ContactDetails | — | Removed 2026-10-27 | Contact | Details moved into EnquirySection (owner request) |
| PartnerInfo | Astro | `components/sections/contact/` | Contact | M5.2 |
| EnquiryForm | React | `components/islands/` | Contact | M5.3 |
| LegalProse | Astro | `components/sections/` | Privacy, Terms | M6.1 |
| NotFound content | Astro | `pages/404.astro` | 404 | M2.6 |

## 3. Layout components

### BaseLayout
- **Purpose:** the shared page shell (AD-03).
- **Props:** `title` (required), `description` (required), `noindex` (optional, for 404: adds `robots` noindex and leaves out the canonical and `og:url`), `organization` (optional, Home: Organization and WebSite JSON-LD), `breadcrumbs` (optional, category pages: BreadcrumbList JSON-LD from the same trail as Breadcrumbs). The canonical URL is built from `site` plus the page path, so no prop is needed (2026-10-27).
- **Contains:** head tags, fonts, global CSS, SkipLink, Header, `<main id="main">`, Footer, FloatingWhatsApp, script imports.
- **Accessibility:** `<html lang="en">`; landmarks in order; one `h1` comes from the page.

### SkipLink
- Hidden until focused; first focusable element; jumps to `#main`; uses `--z-skip`.

### Header
- **Purpose:** brand, navigation, primary CTA on every page (SITE_STRUCTURE.md §3.1).
- **Content:** Wordmark → `/`; Home, About Us, Products (ProductsMenu), Contact Us; WhatsAppButton (`md` size).
- **Behaviour:** sticky; gains `--shadow-float` style shadow after scrolling past the top; current page marked with `aria-current="page"` and an olive underline.
- **Reading progress (2026-10-27, PENDING REVIEW):** a 3 px Emerald 700 bar on the header's bottom edge tracks page scroll (DESIGN_SYSTEM.md §16). Shadow and progress share one passive, frame-throttled scroll handler in `scripts/navigation.ts`.
- **Below `lg`:** navigation collapses into MobileMenu; WhatsApp Us leaves the bar for the bottom-left FloatingWhatsApp (owner, 2026-10-27).

### ProductsMenu (dropdown)
- **Pattern:** disclosure. "Products" is a `<button>` with `aria-expanded` and `aria-controls`; the panel is a list of links (not an ARIA menu).
- **Panel items:** All Products (`/products/`, C-31), Spices, Dehydrated Products, Fresh Fruits & Vegetables. Each category item shows its `--color-category` mark.
- **Opening:** click, tap, Enter or Space. Not opened on hover, so it never opens by accident and works the same for mouse, touch and keyboard.
- **Closing:** Escape (focus returns to the button), clicking outside, or focus leaving the panel.
- **No-JS fallback:** the button is rendered as a link to `/products/`.
- **Update (owner instruction, 2026-10-26):** "Products" is always a link to `/products/`; the disclosure button is a separate chevron beside it (accessible name "Products menu", 44 px wide), shown only with JavaScript. Hover still opens the panel.
- **Motion:** fade and 4 px drop over `--duration-base`; none under reduced motion.

### MobileMenu
- Below `lg`: a "Menu" button (`aria-expanded`) opens a full-height panel with the same items; Products categories are listed directly under "Products" (no nested toggle).
- Focus moves into the panel on open, is kept inside while open, and returns to the button on close; Escape closes; page scrolling is locked while open.
- **Motion:** the panel fades in with an 8 px drop over `--duration-base` (CSS) and fades out rising 8 px over `--duration-fast` (`motion.ts` `fadeOut`), inert while it closes; reopening mid-close keeps it in place. None under reduced motion. (2026-10-27, PENDING REVIEW)

### Wordmark
- Text "AUREVA FOODS" in DM Serif Display (D-08), TEMPORARY until the logo (C-13). Same box size as the future logo slot. Rendered as a link with accessible name "Aureva Foods home".

### Footer
- Groups per SITE_STRUCTURE.md §3.2. Inverse band (olive).
- Contact, partner and social groups render only values whose status is CONFIRMED in `site.ts` (AD-08); otherwise a PendingContent marker in non-production builds and nothing in production.
- Copyright line uses the legal name (C-29).
- Privacy Policy and Terms & Conditions links are hidden until those pages are built (M6.1), so the footer never links to a missing page (owner, 2026-10-27).

### FloatingWhatsApp
- Mobile only (`< lg`), D-13. 56 px circle, WhatsApp glyph, accessible name "WhatsApp Us".
- Hidden while the MobileMenu is open. Never overlaps the footer's own WhatsApp link or form controls; the page adds bottom padding so content is never covered.
- Inactive state as WhatsAppButton while C-01/C-02 are open.

## 4. UI primitives

| Component | Props | Notes |
|---|---|---|
| Container | `width`: wide / text | DESIGN_SYSTEM.md §6.1 |
| Section | `tone`: default / alt / inverse; `id`; `spacing`: normal / tight | Sets background, padding and the inverse focus colour |
| SectionHeading | `eyebrow` (optional), `title`, `intro` (optional), `level` (2 by default) | Title uses display type for `h2` only (D-08). Centred (2026-10-27); an optional action sits centred below |
| Button | `variant`: primary / secondary / text; `size`: md / lg; `href`; `icon` (optional) | Renders `<a>` when `href` is given, `<button>` otherwise |
| WhatsAppButton | `productName` (optional), `variant`, `size` | Builds the link with `src/lib/whatsapp.ts` (AD-11). Inactive while the number is BLOCKED |
| TextLink | `href`, `external` | External links get `rel="noopener noreferrer"` and an "opens in a new tab" hint |
| Eyebrow / Badge | `text`, `tone` | Badge for category labels; uses `--color-category` |
| Breadcrumbs | `items` | Category pages only (C-32): Home / Products / {Category}; `nav` with `aria-label="Breadcrumb"`; last item `aria-current="page"` |
| PendingContent | `item` (C-ID), `note` | Visible, clearly styled box in development and preview builds; renders nothing in production builds; listed by the M6.9 build check |

## 5. Product components

### CategoryCard
- **Data:** category name, one-line description (copy approved per section), image, link.
- Whole card is one link (the title link stretched over the card); visible "View {Category}" text link.
- Category accent as a top border. Reveal and hover per D-06.

### ProductCard
- **Data (from `products.json`, D-14):** display name, image, image alt.
- **Content:** image (4:3), product name as `h3`, WhatsAppButton (`md`, secondary style inside cards) with the product name passed in.
- **Not shown:** price, availability, grade, origin, packaging, specifications (D-07, C-11).
- **Motion (D-06, S-07):** reveal once; on hover-capable devices image zoom 1.05 and card lift −3 px; nothing essential depends on hover.

### ProductGrid
- Responsive grid per DESIGN_SYSTEM.md §6.2 (2 / 3 / 4 columns). Each card reveals on its own; cards entering together stagger (capped at 6 items, DESIGN_SYSTEM.md §14).

### Product carousel (Home Featured Spices, M3.4; Dehydrated Products Showcase, M3.5; Fresh Fruits & Vegetables Showcase, M3.6)
- Added 2026-10-26 on the owner's instruction; built inside `components/sections/home/FeaturedSpices.astro`, `DehydratedShowcase.astro` and `FreshShowcase.astro` with the shared `src/scripts/carousel.ts` (Astro + script, AD-05). The markup is repeated in all three sections; not yet a separate reusable component (candidate for extraction once the three sections are approved).
- **Track:** native horizontal scroller with CSS scroll snap; a focusable `region` labelled "Featured spices", "Dehydrated products" or "Fresh fruits and vegetables" so the arrow keys scroll it. About 1.2 cards on phones (full-bleed, snapping to the gutter), 2 from `sm`, 3 from `lg`, 4 from `xl`; card gap equals the page gutter.
- **Controls (script):** "Previous products" / "Next products" buttons ("Previous spices" / "Next spices" in Featured Spices, "Previous fresh produce" / "Next fresh produce" in Fresh) move one view of whole cards; `aria-disabled` at either end (stays focusable). Visible "1–4 of 12" position text (polite live region) and a decorative progress rail in the category accent (Terracotta for Spices, Saffron for Dehydrated, Leaf Green for Fresh). No autoplay; instant scrolling under reduced motion.
- **Without JavaScript:** controls stay hidden, the track keeps its scrollbar and still scrolls by touch, trackpad and keyboard.
- **Cards:** ProductCard with image and name only (no WhatsApp button until C-01/C-02; cards are not links because there are no product pages).

### Category tabs (Products Overview portfolio)
- Added 2026-10-26 for the owner's Products Overview brief, PENDING APPROVAL; built inside `components/sections/products/Portfolio.astro` with `src/scripts/tabs.ts` (Astro + script, AD-05).
- **Without JavaScript:** the three category groups show one after another, each with an `h3`, a product count, a "View {Category}" link and a ProductGrid (products as `h4` through ProductCard's optional `headingLevel`, default 3).
- **With JavaScript:** a `tablist` ("Product categories") shows one group at a time; WAI-ARIA tabs pattern with automatic activation (click, Left/Right arrows wrapping, Home, End); only the selected tab is in the tab order. Hidden groups' lazy images load when their tab opens. The newly selected panel fades in over `--duration-fast`; none under reduced motion.

### ProductGroup
- `h2` or `h3` heading plus a ProductGrid; used for the S-01 groups (Dehydrated Onion Products, Dehydrated Garlic, Vegetable & Other Powders, Fresh Vegetables, Fresh Fruits).

### SpecificationTable
- Renders a real `<table>` with caption and header cells, built only from data the owner supplies (C-11).
- **Empty state:** when no data exists, renders an enquiry prompt ("Specifications are shared on request") with both CTAs instead of an empty or invented table.
- Scrolls horizontally inside its own frame on phones; the page never scrolls sideways.

## 6. Section components

| Component | Purpose | Key rules |
|---|---|---|
| Hero | Home `h1`, short supporting line, both CTAs, one image | Split layout (DESIGN_SYSTEM.md §12); image loaded eagerly with high priority; no reveal animation |
| PageIntro | Inner-page `h1` and intro paragraph; Breadcrumbs on category pages | One per page |
| SplitContent | Text beside an image | Image optional; stacked on phones |
| FeatureList | Grid of short points with an icon each | Copy is DRAFT-TEMP until approved (C-12) |
| ComplianceList | Credentials, each with name, type and optional logo | Shows only items verified under C-05; heading "Quality & Compliance" until verified; no logos without permission |
| MarketsList | Markets served, as a list of names | Shows only markets confirmed under C-07; no world map with pins (would imply presence that is not confirmed) |
| FAQList | Questions and answers using native `<details>` / `<summary>` | No JavaScript; answers approved per C-12 |
| EnquiryCTA | Inverse band with heading, one line and both CTAs | Last section before the footer on every page except legal pages |
| Contact details (in EnquirySection) | Email, phone, WhatsApp, hours beside the enquiry form | CONFIRMED values only (C-01, C-02, C-03); email and phone as `mailto:` / `tel:` links |
| PartnerInfo | Partner company name and approved wording | C-04 |
| LegalProse | Long-form text styling for Privacy and Terms | `container-text`; readable headings and lists |

## 7. EnquiryForm (React island)

- **Hydration:** `client:visible` on the Contact page only (AD-04). The form markup is server-rendered so it is visible before JavaScript loads.
- **Anchor:** `id="enquiry-form"` (D-10).

### 7.1 Fields (approved, D-20)

| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | text | Yes | `autocomplete="name"` |
| Company | text | No | `autocomplete="organization"` |
| Email | email | Yes | Format validated |
| Phone / WhatsApp | tel | No | Free format with country code; `autocomplete="tel"` |
| Country | text | Yes | Free text (no long dropdown) |
| Product category | select | No | Spices / Dehydrated Products / Fresh Fruits & Vegetables / Not sure |
| Products of interest | text | No | Free text |
| Estimated quantity | text | No | Free text; no units or minimums implied |
| Message | textarea | Yes | 20 to 2000 characters |
| Hidden spam trap | text | — | Hidden from people and assistive technology; submissions that fill it are dropped |

A short line under the button links to the Privacy Policy; no marketing consent box, because the form is used only to answer the enquiry.

### 7.2 States

| State | Behaviour |
|---|---|
| Idle | All fields enabled |
| Validation error | Checked on submit and when leaving a field after a first attempt; error text under each field; focus moves to the first invalid field; a summary is announced |
| Submitting | Button shows "Sending…" and is disabled to prevent double sends |
| Success | Form replaced by a confirmation message (announced), with a WhatsApp Us option |
| Failure | Message explaining the enquiry was not sent, with the WhatsApp option and the confirmed email address; entered data is kept |

- Delivery: managed form service (D-16); the service is chosen with hosting (C-18).
- The form is never described as working until M5.4 is tested with a real submission.
- **Motion:** the error summary, field errors and notices fade in with a 4 px drop and fade out (Motion for React, `motion/react`, AD-06); none under reduced motion.

## 8. WhatsApp message templates (approved, D-20)

| Context | Message |
|---|---|
| General (header, CTAs, floating button) | "Hello Aureva Foods, I would like to make a business enquiry." |
| Product card | "Hello Aureva Foods, I would like to enquire about {Product Name}." |
| Contact page, WhatsApp Enquiry section (owner brief, 2026-10-26) | "Hello Aureva Foods, I would like to enquire about your products. Please share the available options and relevant product details." |

Messages contain no price, quantity, availability or terms. The WhatsApp glyph is used according to WhatsApp's published brand guidelines.

## 9. 404 page (D-11)

- `noindex`; `h1` "Page not found"; one sentence; links to Home, Products and Contact Us; standard header and footer.
- Built 2026-10-27 (`src/pages/404.astro`): centred SectionHeader with the eyebrow "Error 404", then Back to Home (primary), View Products and Contact Us (secondary). PENDING APPROVAL.

## 10. Decisions

| ID | Decision | Status |
|---|---|---|
| D-20 | "All Products" first in the Products dropdown (resolves C-31); breadcrumbs on category pages (resolves C-32); form fields in §7.1; WhatsApp message templates in §8 | APPROVED |
| C-02 | WhatsApp number | RESOLVED by D-23 (2026-10-26): +91 87589 53000 |

## 11. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft: full component list, behaviours, form fields and states, WhatsApp templates |
| 0.1 | 2026-10-25 | Approved by owner, including All Products, breadcrumbs, form fields and WhatsApp message templates (D-20) |
| 0.2 | 2026-10-27 | BaseLayout props for SEO (noindex, organization, breadcrumbs); 404 page built; footer legal links hidden until the legal pages exist |
