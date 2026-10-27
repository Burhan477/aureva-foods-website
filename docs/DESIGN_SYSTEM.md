# AUREVA FOODS — Design System

| | |
|---|---|
| Version | 0.1 |
| Last updated | 2026-10-25 |
| Status | APPROVED by owner, 2026-10-25 |
| Coordinated by | [AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md](AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md) |

## 1. Status and scope

This document turns the brand (BRAND_GUIDELINES.md, D-01, D-08, D-09) into implementation values: colour tokens, type scale, spacing, layout, breakpoints, radii, elevation, buttons, forms, surfaces, icons, motion and layering. Tokens are implemented once in `src/styles/global.css` with Tailwind v4 `@theme` (AD-07) during M1.4.

Brand rules (what a colour means, where display type may be used) stay in [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md). Component behaviour is in [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md).

## 2. Principles

1. **One source of truth.** Every colour, size, radius, shadow and duration comes from a token. No raw values in components.
2. **Grid and whitespace first.** Industrial precision comes from alignment and spacing, not decoration.
3. **Natural warmth through colour and photography,** not ornament.
4. **Accessible by default.** Only the colour pairs in BRAND_GUIDELINES.md §3.2 or §3.3 below; visible focus everywhere; motion optional.
5. **Mobile first.** Styles start at the smallest screen and add complexity upwards.

## 3. Colour tokens

Values from D-24 (2026-10-26), which supersedes the D-01 palette and the D-19 derived shades. Contrast measured with the WCAG 2.x formula.

### 3.1 Primitive colours

| Token | Value | Use | Contrast checked |
|---|---|---|---|
| `--color-white` | `#FFFFFF` | Page background, cards, fields | — |
| `--color-snow` | `#FAFAF8` | Secondary button hover | Ink on it 17.3; Muted on it 4.62 |
| `--color-mint` | `#EFF7F3` | Alternate section background (2026-10-27, owner: visible alternate colour) | Ink 16.3; Emerald 700 5.03; Orange deep 4.75; Muted is darkened to `#6B6B74` inside the band (4.84) |
| `--color-mist` | `#F4F4F5` | Image placeholders, hover fills; text on Noir | On Noir 15.67. Never behind Muted text (4.40) |
| `--color-ink` | `#18181B` | Text and headings | On White 17.7 |
| `--color-muted` | `#71717A` | Secondary text | On White 4.83; on Snow 4.62 |
| `--color-line` | `#E4E4E7` | Decorative dividers and card borders only | Not used for essential boundaries |
| `--color-field-border` | `#86868F` | Form field borders (essential UI) | On White 3.61; on Snow 3.45 |
| `--color-noir` | `#181C19` | Footer and contained dark panels | — |
| `--color-emerald-deep` | `#047857` | Primary buttons and links on light | White on it 5.48; on White 5.48 |
| `--color-emerald-darker` | `#065F46` | Primary hover | White on it 7.68 |
| `--color-emerald` | `#10B981` | Marks; primary buttons on Noir (Ink text) | Ink on it 6.98; on Noir 6.79. Never white text (2.54) |
| `--color-emerald-light` | `#34D399` | Primary hover on Noir | Ink on it 9.22 |
| `--color-orange` / `-deep` | `#F97316` / `#C2410C` | Spices marks / text | Deep on White 5.18; base is marks only (2.8) |
| `--color-saffron` / `-deep` | `#F4C430` / `#DBB22F` | Dehydrated marks | Marks only on light; Ink on Saffron 10.79 |
| `--color-teal` / `-deep` | `#14B8A6` / `#0F766E` | Fresh marks / text | Deep on White 5.47; base is marks only (2.49) |
| `--color-error` | `#B91C1C` | Error text and error field borders | On White 6.47; on Snow 6.19 |

Success messages use Emerald 700. Errors and success are never shown by colour alone; each has an icon and text.

### 3.2 Semantic tokens

Components use these names, so a later palette change happens in one place.

| Semantic token | Maps to | Purpose |
|---|---|---|
| `--color-bg` | white | Page background |
| `--color-bg-alt` | mint | Alternate section background |
| `--color-surface` | white | Cards, fields, panels |
| `--color-inverse` | noir | Footer, contained dark panels |
| `--color-text` | ink | Body text |
| `--color-text-muted` | muted | Secondary text |
| `--color-text-inverse` | mist | Text on Noir |
| `--color-heading` | ink | Headings |
| `--color-primary` / `--color-primary-hover` | emerald-deep / emerald-darker | Primary buttons and links |
| `--color-accent` / `--color-accent-hover` | emerald / emerald-light | Primary buttons and marks on Noir (Ink text) |
| `--color-category` | set per category (§3.3) | Category marks |
| `--color-focus` | emerald-deep on light, emerald on Noir | Focus ring |

### 3.3 Category accent

`--color-category` is set on the category container; components read it and never name a category colour directly. Accents are marks only (rules, short bars, card top edges, icon tint); text uses the `-deep` shade. One accent per component.

| Category | `--color-category` |
|---|---|
| Spices | orange |
| Dehydrated Products | saffron (saffron-deep for marks on white) |
| Fresh Fruits & Vegetables | teal |

### 3.4 Removing Tailwind's default palette

The `@theme` block resets Tailwind's built-in colours (`--color-*: initial;`) before defining ours, so unapproved colours such as `bg-blue-500` do not exist and cannot be used by mistake.

## 4. Typography

### 4.1 Families (D-24)

| Token | Stack |
|---|---|
| `--font-sans` | "Inter", system-ui, "Segoe UI", Roboto, Arial, sans-serif |
| `--font-display` | Same as `--font-sans`; the token is kept so h1/h2 styling stays in one place |

Loaded with Astro's fonts feature (AD-10). Weights: Inter 400, 500, 600. DM Serif Display is no longer loaded.

### 4.2 Type scale

Sizes are fluid between 360 px and 1280 px viewports using `clamp()`. Values in rem (1 rem = 16 px).

| Token | Size (min → max) | Line height | Weight / tracking | Use |
|---|---|---|---|---|
| `text-display` | 2.625 → 4 rem (42 → 64 px) | 1.05 | 600 / −0.03 em | Home hero `h1` only |
| `text-h1` | 2.375 → 3.5 rem (38 → 56 px) | 1.08 | 600 / −0.03 em | Page `h1` |
| `text-h2` | 1.875 → 2.75 rem (30 → 44 px) | 1.15 | 600 / −0.025 em | Section `h2` |
| `text-h3` | 1.25 → 1.625 rem (20 → 26 px) | 1.3 | 600 / −0.015 em | Card titles, sub-sections |
| `text-h4` | 1.125 rem (18 px) | 1.4 | 600 | Minor headings, footer group titles |
| `text-lead` | 1.125 → 1.25 rem (18 → 20 px) | 1.6 | 400 | Section introductions |
| `text-body` | 1 → 1.0625 rem (16 → 17 px) | 1.65 | 400 | Body text |
| `text-small` | 0.875 rem (14 px) | 1.5 | 400/500 | Captions, help text, card descriptions |
| `text-eyebrow` | 0.8125 rem (13 px) | 1.3 | 600, sentence case | Optional short label above an `h2` |

Rules:

- Section intros are one sentence, at most about 60 characters per line (`max-w-[60ch]`).
- Eyebrows are sentence case with no decorative rule; use one only when it adds context the heading does not.
- No text smaller than 14 px, except the eyebrow and the legal copyright line (13 px).
- Headings never skip a level (AD-15).

## 5. Spacing

- Tailwind v4 base spacing unit is kept at 0.25 rem (4 px); utilities such as `p-4` (16 px) and `gap-6` (24 px) are the standard steps.
- Preferred steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px. Avoid odd values.

| Token | Value | Use |
|---|---|---|
| `--space-section` | clamp(3rem, 2.5rem + 2vw, 4.5rem) (48 → 72 px) | Vertical padding of a page section |
| `--space-section-tight` | clamp(2rem, 1.75rem + 1vw, 3rem) (32 → 48 px) | Compact sections (CTA bands, intros) |
| `--space-stack` | 1.5 rem (24 px) | Gap between a section heading block and its content |
| `--space-gutter` | 1 rem → 1.5 rem → 2 rem | Container side padding (mobile → tablet → desktop) |

- Section tokens reduced 2026-10-27 (owner UI/UX brief, then reduced again on owner request). When two consecutive sections share a background, the second drops its top padding (`global.css`), so the gap between them is one section padding, not two.
- Gap between a SectionHeader and its content: `mt-10 lg:mt-12` (40 / 48 px) everywhere.

## 6. Layout

### 6.1 Containers

| Container | Max width | Use |
|---|---|---|
| `container-wide` | 80 rem (1280 px) | Default for sections and grids |
| `container-text` | 48 rem (768 px) | Legal pages, long text, the form |
| Full bleed | 100% | Hero image, dark CTA bands (content inside still uses a container) |

Containers are centred and use `--space-gutter` side padding, so content never touches the screen edge (16 px minimum on phones).

### 6.2 Grid

- 12-column grid from `lg` (1024 px), 6 columns at `md`, 4 at the smallest size; column gap 16 / 24 / 32 px.
- Stacked section heading blocks (SectionHeader: label, title, intro) are centred on one axis (owner instruction, 2026-10-27); headings set beside a photo in a two-column section, heroes and the enquiry form stay left-aligned. Since 2026-10-27 (owner UI/UX brief), sections whose heading sat beside a list, cards or FAQs use a centred SectionHeader above that content (Home Quality & Compliance, Fresh Vegetables, Spices FAQs, Contact Information), and button rows under a centred header are centred too. Only headings and one-sentence intros are centred; body text, lists and cards stay left-aligned.

| Pattern | Small (< 640) | `sm`/`md` | `lg`+ |
|---|---|---|---|
| Category cards | 1 column | 3 columns from `md` | 3 columns |
| Product cards | 2 columns | 3 columns | 4 columns |
| Text + image split | stacked, image first | stacked | 2 columns (6 / 6 or 5 / 7) |
| Feature list (Why Aureva) | 1 column | 2 columns | 3 or 4 columns |
| Footer groups | 1 column | 2 columns | 4 columns |

## 7. Breakpoints

Tailwind defaults are kept: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536 px.

Test widths (QA_CHECKLIST.md): 360, 390, 768, 1024, 1280, 1440 and 1920 px.

## 8. Shape and elevation

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4 px | Badges, small tags |
| `--radius-md` | 8 px | Buttons, form fields, icon tiles |
| `--radius-lg` | 12 px | Cards, panels, small image frames |
| `rounded-2xl` | 16 px | Large photo frames and contained dark panels |
| `--radius-full` | 9999 px | Floating WhatsApp button only |
| `--shadow-card` | none | Cards at rest use a `--color-line` border instead |
| `--shadow-card-hover` | 0 16px 32px -20px rgb(24 24 27 / 0.22) | Card hover lift (D-06) |
| `--shadow-float` | 0 12px 32px -12px rgb(24 24 27 / 0.22) | Floating WhatsApp button, open dropdown, scrolled header |

## 9. Buttons

### 9.1 Variants

| Variant | Light background | Dark (olive) background | Typical use |
|---|---|---|---|
| Primary | Emerald 700 fill, White text; hover Emerald 800 | Emerald 500 fill, Ink text; hover Emerald 400 | WhatsApp Us |
| Secondary | White fill, 1 px Ink 20% border, Ink text; hover Ink 40% border and Snow fill | Transparent, 1 px Mist 35% border, White text; hover White 10% fill | Request a Quote |
| Text link | Emerald 700 text, underline on hover and focus | Mist text, underline | Inline and "View Spices" links |

The two CTAs (BRAND_GUIDELINES.md §11) always appear as Primary (WhatsApp Us) and Secondary (Request a Quote) when shown together.

### 9.2 Sizes and states

| Size | Height | Horizontal padding | Text |
|---|---|---|---|
| `md` | 44 px minimum | 20 px | 15 px Sans 600 |
| `lg` | 52 px | 28 px | 16 px Sans 600 |

- Icon (when used) 20 px, 8 px gap, placed before the label.
- **Focus:** 2 px `--color-focus` outline with 2 px offset, on `:focus-visible`.
- **Pressed:** same as hover, no movement.
- **Inactive** (WhatsApp before C-02, AD-11): rendered with `aria-disabled="true"`, 60% opacity, no hover change, and a short visible note in non-production builds.
- Full width on phones only where a section has a single CTA.

## 10. Forms

| Element | Specification |
|---|---|
| Field | White fill; 1 px `--color-field-border`; radius-md; height 48 px (textarea min 140 px); 16 px text (prevents zoom on iOS) |
| Label | Above the field; 14–15 px Sans 500, Charcoal; required fields marked with "(required)" in text, not only an asterisk |
| Help text | 14 px, `--color-text-muted`, below the field |
| Focus | 2 px Olive outline, 2 px offset; border becomes Olive |
| Error | Border `--color-error`; message below in `--color-error` with an alert icon; linked with `aria-describedby` |
| Success | Panel with Leaf Green icon and Charcoal text; announced through a live region |
| Layout | One column on phones; two columns from `md` for short fields (name, email); message full width |

## 11. Surfaces and sections

| Surface | Background | Text | Notes |
|---|---|---|---|
| Default section | white | ink; muted for intros | Most sections |
| Alternate section | mint | ink; muted `#6B6B74` | Separates adjacent sections; white and mint alternate, never two mint bands in a row |
| Card | white with `--color-line` border | ink | radius-lg; image first |
| Dark panel | noir, inside the container, `rounded-2xl` | mist; accents emerald | Business Enquiry CTA, Contact WhatsApp panel. Contained, so it never merges with the footer |
| Footer | noir, full bleed | mist | The only full-bleed dark band |
| Header | noir, solid, like the Footer (owner, 2026-10-27, PENDING REVIEW), bottom border white/10 | mist; hover and active item Emerald 500; monogram + light wordmark as in the Footer; dark WhatsApp Us | Sticky; subtle shadow after scrolling; 3 px Emerald 500 progress bar |

Section rhythm: alternate default and alternate backgrounds; the Business Enquiry CTA panel is the last section before the footer. No image washes, decorative offset frames or illustrations (D-24), except the Home hero: its photo fills the section with a white fade on the text side (owner request, 2026-10-26).

## 12. Images in layout

- Product card image: 4:3, object-fit cover, radius-lg top corners only.
- Category card image: 4:3 on mobile, 3:2 from `md`.
- Hero: 16:9 or 3:2 frame beside the headline on desktop (split layout); stacked above or below on phones. Text is never placed over a busy photo without a solid panel behind it.
- Image frames keep their aspect ratio while loading (no layout shift).
- Technical rules are in [ASSET_GUIDELINES.md](ASSET_GUIDELINES.md).

## 13. Icons

- Lucide React, used inside Astro components rendered on the server (no client JavaScript).
- Sizes: 16 px (inline with small text), 20 px (buttons, lists), 24 px (feature lists). Stroke width 1.75.
- Colour inherits from text (`currentColor`), or `--color-category` in category contexts.

## 14. Motion

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | 150 ms | Colour, border and underline changes |
| `--duration-base` | 250 ms | Card lift, image zoom, dropdown open |
| `--duration-reveal` | 450 ms | Reveal-once fade and rise |
| `--ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | All entrances and hovers |
| `--reveal-distance` | 16 px | Upward travel on reveal (S-07: 12–20 px) |
| `--reveal-stagger` | 80 ms per item, maximum 6 items (cap 400 ms) | Items entering the viewport together (S-07: 60–100 ms) |
| `--hover-lift` | −3 px | Card lift (S-07: −2 to −4 px) |
| `--hover-zoom` | 1.05 | Card image zoom (S-07: 1.04–1.06) |

Rules:

- Only `transform` and `opacity` are animated.
- Hover effects apply only on devices that support hover (`@media (hover: hover) and (pointer: fine)`).
- The hero and any content visible on first load are never hidden for a reveal, so the largest image paints immediately (SEO_AND_PERFORMANCE.md).
- `prefers-reduced-motion: reduce` removes all transforms and reveal transitions; content is shown immediately.
- Stagger is set by `reveal.ts` from the elements that enter the viewport together, in document order; an element entering alone has no delay. Product grids reveal card by card.
- The reveal hidden state is screen-only, so content not yet scrolled to still prints.
- `data-reveal` never goes on an element with its own transitions; wrap it instead.
- Content a script shows (a tab panel, filtered cards, the mobile Products list) fades in over `--duration-fast` (`src/scripts/motion.ts`).
- Enquiry form messages (error summary, field errors, notices) fade in with a 4 px drop over `--duration-fast` and fade out, using Framer Motion inside the form island (AD-06); under reduced motion they appear and go at once.
- Arrow text links nudge their arrow 2 px on hover.
- Smooth scrolling (owner, 2026-10-27, PENDING REVIEW): native `scroll-behavior: smooth` on `html` for in-page links, the skip link and Back to top; off under reduced motion. No scroll libraries or wheel hijacking.

## 15. Layering

| Token | Value | Element |
|---|---|---|
| `--z-float` | 30 | Floating WhatsApp button |
| `--z-header` | 40 | Sticky header |
| `--z-dropdown` | 50 | Products dropdown |
| `--z-menu` | 60 | Mobile menu panel |
| `--z-skip` | 100 | Skip link when focused |

## 16. Responsive conventions

- No horizontal scrolling at any test width.
- Touch targets at least 44 × 44 px with 8 px spacing between adjacent targets.
- Header height 64 px on phones, 80 px from `lg`.
- Back to top (2026-10-27, PENDING REVIEW): 48 px noir circle with a mist arrow, fixed bottom-right (16 / 24 / 32 px from the edges plus the safe-area inset), `--z-float`; Emerald 700 on hover. It shows after one screen of scrolling and hides near the top. A click scrolls to the top (instant under reduced motion) and moves focus to the header logo.
- Reading progress bar: 3 px, `--color-accent` (Emerald 500, on the noir header), along the header's bottom edge (covers the border, so no layout change). Scaled from 0 to 100% of the scrollable height by `navigation.ts`, at most once per animation frame; empty on pages too short to scroll. No transition, so it behaves the same under reduced motion.
- Floating WhatsApp button (built 2026-10-27, owner: bottom-left, PENDING REVIEW): 56 px Emerald 700 circle, bottom-left, 16 / 24 px from the edges plus the device safe-area inset; below `lg` only, where it replaces WhatsApp Us in the header bar (MobileMenu keeps its full-width WhatsApp Us). Rendered only while the number is CONFIRMED. The Footer has extra bottom padding below `lg` (`pb-24`) so the copyright line stays clear of it and of Back to top.
- Text stays readable at 200% browser zoom, and content reflows without loss at 320 px width.

## 17. Reference: `@theme` outline for M1.4

For orientation only; the actual file is written in M1.4 after approval.

```css
@import "tailwindcss";

@theme {
  --color-*: initial;
  --color-ivory: #F5F2E9;
  --color-ivory-deep: #E5E4DB;
  --color-white: #FFFFFF;
  --color-olive: #2F4638;
  --color-olive-deep: #26382D;
  --color-charcoal: #252A26;
  --color-muted: #5F625D;
  --color-line: #D8D6CE;
  --color-field-border: #878A88;
  --color-saffron: #F4C430;
  --color-saffron-deep: #DBB22F;
  --color-terracotta: #B96F4A;
  --color-leaf: #2E7D32;
  --color-error: #8D5A3F;

  --font-display: /* from Astro fonts, D-08 */;
  --font-sans: /* from Astro fonts, D-08 */;

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;
  /* type scale, shadows and motion tokens as in §4, §8 and §14 */
}
```

## 18. Decisions

| ID | Decision | Status |
|---|---|---|
| D-19 | Derived working shades in §3.2 and all other values in this document (resolves C-33) | APPROVED |

## 19. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft: tokens, type scale, spacing, layout, buttons, forms, surfaces, motion |
| 0.1 | 2026-10-25 | Approved by owner, including the derived shades (D-19, C-33 resolved) |
| 0.2 | 2026-10-26 | D-24 theme modernisation: §3 colours, §4 typography, §8 radii and shadows, §9.1 buttons, §11 surfaces |
| 0.4 | 2026-10-27 | UI/UX brief (owner): §5 section tokens reduced and same-background gap collapse; §6.2 list/grid section headings centred; §16 header reading progress bar; then section tokens reduced again and the alternate band changed to mint `#EFF7F3`. PENDING REVIEW |
| 0.3 | 2026-10-27 | Animation audit (owner approved): §14 batch stagger, per-card grid reveals, print-safe reveals, script fades, arrow nudge, Framer Motion form messages; §11 header blur removed; §6 stacked section headings centred |
