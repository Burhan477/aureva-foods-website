# AUREVA FOODS — Architecture Decisions

| | |
|---|---|
| Version | 0.1 |
| Last updated | 2026-10-25 |
| Status | APPROVED by owner, 2026-10-25 |
| Coordinated by | [AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md](AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md) |

## 1. Status and scope

This document records how the site is built: rendering, routing, layouts, component boundaries, styling, data, images, fonts, animation, WhatsApp, the enquiry form, accessibility, security and tooling. Each record (AD-xx) states its context, the decision, the reasons and the consequences.

Visual values (tokens, sizes) are in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md); individual components in [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md); metadata and budgets in [SEO_AND_PERFORMANCE.md](SEO_AND_PERFORMANCE.md).

Facts about the installed stack were checked in `node_modules` on 2026-10-25 (Astro 7.4.2, @astrojs/react 7.1.1, React 19.3.1, Tailwind CSS 4.3.3, Framer Motion 14.6.0, Lucide React 1.61.0). Nothing here changes a package version (master plan §7.2).

The owner approved this document on 2026-10-25 with the recommended option for every owner choice (D-15, D-16, D-17). Hosting (AD-13) remains open under C-18.

## 2. Summary

| ID | Topic | Decision |
|---|---|---|
| AD-01 | Rendering | Fully static build; no server adapter |
| AD-02 | Routing | File-based pages matching D-10; directory output with trailing slashes |
| AD-03 | Layouts | One base layout plus a legal-text layout |
| AD-04 | Component boundaries | Astro components by default; React only for the enquiry form |
| AD-05 | Client scripts | Small TypeScript modules for the header menus and reveal-once motion |
| AD-06 | Animation and Framer Motion | CSS first; Framer Motion only inside React islands (D-15) |
| AD-07 | Styling | Tailwind v4 with `@theme` tokens in `global.css`; no config file |
| AD-08 | Content and data | Product catalogue as a JSON content collection; site settings as a typed module |
| AD-09 | Images | Astro `<Image>` / `<Picture>` from local files |
| AD-10 | Fonts | Astro's built-in fonts feature, self-hosted at build time |
| AD-11 | WhatsApp | One link builder fed by one setting |
| AD-12 | Enquiry form | React island posting to a managed form service (D-16) |
| AD-13 | Hosting | Any static host; choice tied to AD-12 (open, C-18) |
| AD-14 | Analytics | None at launch (D-17) |
| AD-15 | Accessibility | WCAG 2.2 AA target, with the patterns listed |
| AD-16 | Security and privacy | No secrets client-side; no third-party scripts without approval |
| AD-17 | Code quality tooling | TypeScript check, ESLint, Prettier (installed in M1.1 after approval) |
| AD-18 | Folder structure | As in §16 |

## 3. AD-01 Rendering: fully static

- **Context:** a content site of ten routes with no user accounts or live data. The brief asks for performance, SEO and no backend unless required.
- **Decision:** Astro's default static output. Every page is pre-rendered HTML at build time. No server adapter.
- **Rationale:** fastest delivery, cheapest hosting, smallest attack surface, works on any static host.
- **Consequences:** anything dynamic (form delivery) must use a hosted service or the host's own function feature (AD-12). Changing content means rebuilding and redeploying.

## 4. AD-02 Routing

- **Decision:** file-based routes in `src/pages/` exactly as approved in D-10, plus `src/pages/404.astro` (D-11). Astro's default directory build format, so `/products/spices/` is served from `products/spices/index.html`. `trailingSlash: "always"` so every internal link and canonical URL ends in `/`.
- **Rationale:** matches the approved routes; one URL form per page avoids duplicate URLs in search results.
- **Consequences:** internal links must always include the trailing slash. Hosts redirect the slash-less form; this is checked in M7.4. No dynamic `[slug]` routes, because there are no product pages (SITE_STRUCTURE.md §2).

## 5. AD-03 Layouts

- **Decision:**
  - `BaseLayout.astro`: `<html lang="en">`, head (title, description, canonical, social tags from props), font loading, global CSS, skip link, Header, `<main id="main">`, Footer, mobile floating WhatsApp button.
  - `LegalLayout.astro`: wraps BaseLayout with a readable text column for Privacy and Terms.
- **Rationale:** one place for head tags and the shared shell; legal pages are long prose with different needs.
- **Consequences:** every page passes its own title and description; the layout has no default description, so a missing one fails the type check.

## 6. AD-04 Component boundaries

- **Context:** S-05 and the brief: Astro for static content, React only where interactivity justifies it. A React island loads the React runtime (tens of kilobytes compressed) on any page that uses it.
- **Decision:**
  - Astro components for all content, sections, cards, header and footer markup.
  - Header menus and reveal motion use small TypeScript scripts (AD-05), not React.
  - **One React island: the enquiry form** (`EnquiryForm.tsx`, hydrated with `client:visible`) because it has real state: field validation, submitting, success and error.
  - New React islands need a recorded reason in this document.
- **Rationale:** every page except Contact ships no React runtime, which keeps pages light while still using React where it pays off.
- **Consequences:** header dropdown and mobile menu are written as accessible disclosure patterns in plain TypeScript (AD-15).

## 7. AD-05 Client scripts

- **Decision:** two small modules in `src/scripts/`, bundled by Astro:
  - `navigation.ts`: Products dropdown and mobile menu open/close, `aria-expanded`, Escape to close, close on outside click, focus return.
  - `reveal.ts`: one shared `IntersectionObserver` that adds a class to `[data-reveal]` elements once, then stops observing them (D-06). Imported once in `BaseLayout`; staggers elements that enter the viewport together.
  - `motion.ts` (added 2026-10-27): shared `fadeIn` helper for content other scripts show, and `fadeOut` for content they are about to hide (the mobile menu), timed from the CSS tokens.
- **Rationale:** both behaviours are simple; plain scripts cost far less than a framework island.
- **Consequences:** content must be fully visible without JavaScript. The hidden starting state for reveals is applied only after the script marks the document as JS-enabled (S-07 §3).

## 8. AD-06 Animation and Framer Motion — decided (D-15, option A)

- **Context:** Framer Motion is installed and listed in the brief's stack. S-04, S-05 and S-07 say: CSS first, and no animation library just for card hover. The only React island is the form (AD-04).
- **Options:**
  - **A (recommended): CSS first.** Hover zoom and lift, focus states and menu transitions use CSS; reveal-once uses `reveal.ts`. Framer Motion is allowed only inside React islands, for example the form's success and error transitions, and is otherwise unused. The package stays installed.
  - **B: Framer Motion for header and cards.** Header and product cards become React islands animated with Framer Motion. This loads React and Framer Motion on every page for effects CSS already handles.
- **Rationale for A:** meets S-07 exactly, keeps every page except Contact free of React, and keeps the dependency available as the brief requires.
- **Consequences of A:** if Framer Motion is still unused at M6, the owner may decide whether to keep or remove it (removal needs approval). **Update 2026-10-27 (owner):** used in the enquiry form for message transitions (`LazyMotion` with `domAnimation` and `m`, about 37 KB gzip on the Contact page only); not used elsewhere. All motion respects `prefers-reduced-motion`; inside React islands this uses Framer Motion's reduced-motion support.
- **Update 2026-10-27 (owner, motion brief; PENDING REVIEW):** a brief asked for Motion for React and `@motionone/dom` site-wide, which would mean option B. The owner kept option A and chose:
  - `framer-motion` replaced by `motion` 14.7.1, the same library under its current name (`motion` wraps `framer-motion` 14.7.1). The form imports from `motion/react`; no change in behaviour or size.
  - `@motionone/dom` not installed. Its last release (10.18.0) dates from 2024; Motion One was merged into `motion`, which ships the same DOM functions (`animate`, `inView`, `scroll`). Installing it would duplicate them.
  - Motion's DOM `animate` is not used either. The one gap found, the mobile menu closing instantly, is a single opacity and translate fade; the browser's Web Animations API does it with no added bytes, alongside the existing `fadeIn` (`motion.ts` `fadeOut`).
  - Buttons stay colour-only (DESIGN_SYSTEM.md §9.2).

## 9. AD-07 Styling

- **Decision:** Tailwind CSS v4 through the existing `@tailwindcss/vite` plugin. Design tokens are defined once in `src/styles/global.css` with `@theme` (no `tailwind.config.js`). Utility classes in markup; Astro scoped `<style>` only where utilities cannot express something cleanly. Category accents are set with a CSS variable on the category container so components stay identical across categories (BRAND_GUIDELINES.md §3.3).
- **Rationale:** Tailwind v4's CSS-first approach; one source for tokens (S-04 §12).
- **Consequences:** no hard-coded colours or sizes in components; only token-based utilities. No second styling system or CSS-in-JS.

## 10. AD-08 Content and data

- **Context:** S-05 asks for structured JSON with type validation for repeatable business and product data; the content rules require placeholders to be centralised and labelled (master plan §5).
- **Decision:**
  - **Products:** `src/data/products.json`, loaded as a content collection with the `file()` loader and a schema in `src/content.config.ts`. Fields: id, display name, as-supplied name, category, page group, home selection flags (D-12), image reference, image alt text.
  - **Site settings:** `src/data/site.ts`, a typed module holding company name, contact details, WhatsApp number and message, partner details and social links. Each value carries a status (`CONFIRMED`, `TEMPORARY`, `BLOCKED`) matching master plan §2.
  - **Page copy:** kept in the page or section component; any TEMPORARY sentence is marked with a code comment and listed in the content inventory.
  - A small build check (added in M6.9) lists every `TEMPORARY` or `BLOCKED` value so nothing is launched by accident.
- **Rationale:** the catalogue is validated at build time and editable as plain JSON; settings with status flags make unverified facts impossible to miss.
- **Consequences:** after editing `src/content.config.ts`, the dev server must be restarted or new fields arrive as `undefined`.

## 11. AD-09 Images

- **Decision:** source images live in `src/assets/images/` and are rendered with Astro's `<Picture>` (AVIF and WebP with fallback) or `<Image>`. Every image has explicit width and height or aspect ratio. The hero image is loaded eagerly with high fetch priority; all others lazy-load. `public/` holds only files that must keep a fixed URL (favicons, social share image).
- **Rationale:** built-in, no new dependency; covers S-05 §9.
- **Consequences:** remote images are not used. Sizes and naming rules are in [ASSET_GUIDELINES.md](ASSET_GUIDELINES.md).

## 12. AD-10 Fonts

- **Decision:** Astro's built-in fonts configuration (stable since Astro 6) with DM Serif Display 400 and Inter 400/500/600 (BRAND_GUIDELINES.md §4). Font files are downloaded at build time and served from the site itself; no request goes to Google at runtime. Fallback fonts are declared in DESIGN_SYSTEM.md.
- **Rationale:** no new package, self-hosting (privacy and speed), fallback metrics to limit layout shift.
- **Consequences:** the build needs network access to fetch the fonts the first time. Exact configuration is verified against Astro's fonts guide during M2.1.

## 13. AD-11 WhatsApp

- **Decision:** one helper in `src/lib/whatsapp.ts` builds `https://wa.me/<digits>?text=<encoded message>` from `site.ts`. Product cards pass the product name to fill a message template approved under C-02. Links open in a new tab with `rel="noopener noreferrer"`.
- While the number is `BLOCKED` (C-01, C-02), WhatsApp buttons render visibly but are not links, and the build prints a warning. Launch is blocked until it is set (master plan §14).
- **Rationale:** one implementation (S-05 §10); impossible to publish an invented or incomplete number.
- **Consequences:** M2.5 can be reviewed before the number arrives; M5.5 tests the live link.

## 14. AD-12 Enquiry form — decided (D-16, option A)

- **Context:** the form should reach the sales mailbox (S-02 note). The site is static (AD-01).
- **Options:**

| Option | How it works | Pros | Cons |
|---|---|---|---|
| **A (recommended): managed form service** (for example Web3Forms, Formspree, or the host's built-in forms if it has them) | Form posts to the service, which emails the sales address | No server code or secrets to maintain; spam filtering included; works on any host | A third party processes enquiry data (must be named in the Privacy Policy); free-tier limits |
| B: host function plus email API | A serverless function on the host sends the email through an email provider | Full control of the email | More code, an API key to keep secret, ties the site to one host |
| C: `mailto:` link | Opens the visitor's email app | No service | Unreliable, no validation, exposes the address to spam; not a real form |

- **Decision (recommended):** Option A, with the specific service picked together with hosting (AD-13). The form island validates fields, sends with `fetch`, shows clear sending, success and error states, and includes a hidden spam trap field. Fields are defined in COMPONENT_INVENTORY.md.
- **Consequences:** the Privacy Policy (C-21) names the service. "Form works" is claimed only after a real submission reaches the confirmed address (C-03) in M5.4.

## 15. AD-13 to AD-16

### AD-13 Hosting — Owner choice (C-18)

Any static host works (for example Netlify, Vercel, Cloudflare Pages). The choice should consider the form option (AD-12), the domain (C-18), and who will manage the account. Security headers, redirects and the slash policy (AD-02) are configured on the host in M7.1. **Recommendation:** decide hosting and form service together before M5.

### AD-14 Analytics — decided (D-17)

No analytics script at launch unless the owner decides otherwise. If analytics is wanted, prefer a cookieless, privacy-friendly service so no cookie banner is required; any choice must be reflected in the Privacy Policy (C-21). **Recommendation:** none at launch.

### AD-15 Accessibility

- Target WCAG 2.2 level AA.
- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, ordered headings, skip link to `#main`.
- Navigation dropdown and mobile menu built as disclosure buttons with `aria-expanded` and `aria-controls`; Escape closes them; focus is never trapped except in an open full-screen mobile menu, which returns focus on close.
- Visible `:focus-visible` styles on every interactive element; touch targets at least 44 × 44 px.
- Colour pairs only from BRAND_GUIDELINES.md §3.2.
- Form: visible labels, errors linked with `aria-describedby`, status announced with a live region.
- All motion off under `prefers-reduced-motion` (D-06).

### AD-16 Security and privacy

- No secrets in client code or public data. A form service key that is public by design is documented as such.
- No third-party scripts, embeds or trackers without approval.
- External links use `rel="noopener noreferrer"`.
- Security headers (Content-Security-Policy, Referrer-Policy, X-Content-Type-Options, Permissions-Policy) set on the host in M7.1.
- Enquiry data is handled only by the approved form service.

## 16. AD-17 Code quality tooling and AD-18 Folder structure

### AD-17 Code quality tooling (C-16)

Proposed for M1.1, each package to be approved before install:

| Purpose | Candidate packages |
|---|---|
| Type checking | `typescript`, `@astrojs/check` (`astro check`) |
| Linting | `eslint`, `typescript-eslint`, `eslint-plugin-astro`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y` |
| Formatting | `prettier`, `prettier-plugin-astro`, `prettier-plugin-tailwindcss` (class ordering), `eslint-config-prettier` |

Exact versions are chosen in M1.1 to match the installed Astro, React and Tailwind versions.

### AD-18 Folder structure

```
src/
  assets/images/        source images (structure in ASSET_GUIDELINES.md)
  components/
    layout/             Header, Footer, MobileMenu, FloatingWhatsApp
    ui/                 Container, Section, Button, Link, Badge
    product/            CategoryCard, ProductCard, ProductGrid
    sections/
      home/  about/  products/  contact/
    islands/            React components (EnquiryForm.tsx)
  data/                 products.json, site.ts
  layouts/              BaseLayout.astro, LegalLayout.astro
  lib/                  whatsapp.ts, seo.ts
  pages/                routes per D-10, 404.astro
  scripts/              navigation.ts, reveal.ts
  styles/               global.css
  content.config.ts
```

Component file names use PascalCase; scripts and helpers use camelCase; data files use lower-case names.

## 17. Decisions

| ID | Decision | Status |
|---|---|---|
| D-15 | AD-06 option A: CSS first; Framer Motion only inside React islands (resolves C-15) | APPROVED |
| D-16 | AD-12 option A: managed form service, the specific service chosen with hosting (resolves C-17) | APPROVED |
| D-17 | AD-14: no analytics at launch (resolves C-30) | APPROVED |
| C-18 | Hosting provider, domain and form service (AD-13) | Domain confirmed 2026-10-27 (`https://aurevafoods.com`); hosting and form service OPEN |
| — | All other records (AD-01 to AD-05, AD-07 to AD-11, AD-15 to AD-18) | APPROVED |

## 18. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft: AD-01 to AD-18 |
| 0.1 | 2026-10-25 | Approved by owner with recommended options (D-15 to D-17) |
