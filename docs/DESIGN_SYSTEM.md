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

### 3.1 Brand colours (approved, D-01, D-09)

| Token | Value | Tailwind utility examples |
|---|---|---|
| `--color-ivory` | `#F5F2E9` | `bg-ivory`, `text-ivory` |
| `--color-white` | `#FFFFFF` | `bg-white` |
| `--color-olive` | `#2F4638` | `bg-olive`, `text-olive`, `border-olive` |
| `--color-charcoal` | `#252A26` | `text-charcoal` |
| `--color-saffron` | `#F4C430` | `bg-saffron` |
| `--color-terracotta` | `#B96F4A` | `border-terracotta` |
| `--color-leaf` | `#2E7D32` | `text-leaf`, `bg-leaf` |

### 3.2 Derived working shades (approved, D-19)

Mixed from the approved colours; no new hues. Approved by the owner on 2026-10-25 (D-19).

| Token | Value | Derived from | Use | Contrast checked |
|---|---|---|---|---|
| `--color-olive-deep` | `#26382D` | Olive 80% + black | Hover and pressed state of olive buttons | White on it 12.46; Ivory on it 11.13 |
| `--color-saffron-deep` | `#DBB22F` | Saffron 88% + Charcoal | Hover state of saffron buttons | Charcoal on it 7.25 |
| `--color-ivory-deep` | `#E5E4DB` | Ivory 92% + Olive | Alternate section background | Charcoal on it 11.44; Olive on it 8.01 |
| `--color-muted` | `#5F625D` | Charcoal 72% + Ivory | Secondary text, captions, help text | On Ivory 5.53; on White 6.19 |
| `--color-line` | `#D8D6CE` | Charcoal 14% + Ivory | Decorative dividers and card borders only | Not used for essential boundaries |
| `--color-field-border` | `#878A88` | Charcoal 55% + White | Form field borders (essential UI) | On White 3.49; on Ivory 3.12 |
| `--color-error` | `#8D5A3F` | Terracotta 70% + Charcoal | Error text and error field borders | On White 5.73; on Ivory 5.12 |

Success messages use Leaf Green (5.13 on White). Errors and success are never shown by colour alone; each has an icon and text.

### 3.3 Semantic tokens

Components use these names, not the raw colours, so a later palette change happens in one place.

| Semantic token | Maps to | Purpose |
|---|---|---|
| `--color-bg` | ivory | Page background |
| `--color-bg-alt` | ivory-deep | Alternate section background |
| `--color-surface` | white | Cards, fields, panels |
| `--color-inverse` | olive | Dark sections (Business Enquiry CTA), footer |
| `--color-text` | charcoal | Body text |
| `--color-text-muted` | muted | Secondary text |
| `--color-text-inverse` | ivory | Text on olive or charcoal |
| `--color-heading` | olive | h1 and h2 on light backgrounds |
| `--color-primary` / `--color-primary-hover` | olive / olive-deep | Primary buttons and links |
| `--color-accent` / `--color-accent-hover` | saffron / saffron-deep | Accent buttons, highlights (with dark text) |
| `--color-category` | set per category (§3.4) | Category marks |
| `--color-focus` | olive on light, saffron on dark | Focus ring |

### 3.4 Category accent

`--color-category` is set on the category container; components read it and never name a category colour directly.

| Category | `--color-category` | Allowed use (BRAND_GUIDELINES.md §3.3) |
|---|---|---|
| Spices | terracotta | Rules, borders, icon tint, large text only |
| Dehydrated Products | saffron | Fills and marks only, with dark text |
| Fresh Fruits & Vegetables | leaf | Rules, icon tint, text |

### 3.5 Removing Tailwind's default palette

The `@theme` block resets Tailwind's built-in colours (`--color-*: initial;`) before defining ours, so unapproved colours such as `bg-blue-500` do not exist and cannot be used by mistake.

## 4. Typography

### 4.1 Families (D-01, D-08)

| Token | Stack |
|---|---|
| `--font-display` | "DM Serif Display", Georgia, "Times New Roman", serif |
| `--font-sans` | "Inter", system-ui, "Segoe UI", Roboto, Arial, sans-serif |

Loaded with Astro's fonts feature (AD-10). Weights: DM Serif Display 400; Inter 400, 500, 600.

### 4.2 Type scale

Sizes are fluid between 360 px and 1280 px viewports using `clamp()`. Values in rem (1 rem = 16 px).

| Token | Size (min → max) | Line height | Family / weight | Use |
|---|---|---|---|---|
| `text-display` | 2.5 → 4 rem (40 → 64 px) | 1.08 | Display 400 | Home hero `h1` only |
| `text-h1` | 2.25 → 3.25 rem (36 → 52 px) | 1.1 | Display 400 | Page `h1` |
| `text-h2` | 1.75 → 2.5 rem (28 → 40 px) | 1.15 | Display 400 | Section `h2` |
| `text-h3` | 1.25 → 1.5 rem (20 → 24 px) | 1.3 | Sans 600 | Card titles, sub-sections |
| `text-h4` | 1.125 rem (18 px) | 1.4 | Sans 600 | Minor headings, footer group titles |
| `text-lead` | 1.125 → 1.25 rem (18 → 20 px) | 1.6 | Sans 400 | Section introductions |
| `text-body` | 1 → 1.0625 rem (16 → 17 px) | 1.65 | Sans 400 | Body text |
| `text-small` | 0.875 rem (14 px) | 1.5 | Sans 400/500 | Captions, help text, legal notes |
| `text-eyebrow` | 0.8125 rem (13 px) | 1.3 | Sans 600, uppercase, letter spacing 0.12 em | Labels above `h2` |

Rules:

- Display letter spacing −0.01 em; body letter spacing normal.
- Paragraph width at most 68 characters (`max-w-[68ch]`).
- No text smaller than 14 px, except the legal copyright line (13 px allowed).
- Headings never skip a level (AD-15).

## 5. Spacing

- Tailwind v4 base spacing unit is kept at 0.25 rem (4 px); utilities such as `p-4` (16 px) and `gap-6` (24 px) are the standard steps.
- Preferred steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px. Avoid odd values.

| Token | Value | Use |
|---|---|---|
| `--space-section` | clamp(4rem, 2.8rem + 5vw, 7.5rem) (64 → 120 px) | Vertical padding of a page section |
| `--space-section-tight` | clamp(3rem, 2.2rem + 3.5vw, 5rem) (48 → 80 px) | Compact sections (CTA bands, intros) |
| `--space-stack` | 1.5 rem (24 px) | Gap between a section heading block and its content |
| `--space-gutter` | 1 rem → 1.5 rem → 2 rem | Container side padding (mobile → tablet → desktop) |

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
- Section heading blocks align to the left edge of the grid; no centred long text.

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
| `--radius-md` | 6 px | Buttons, form fields |
| `--radius-lg` | 10 px | Cards, image frames, panels |
| `--radius-full` | 9999 px | Floating WhatsApp button only |
| `--shadow-card` | none | Cards at rest use a `--color-line` border instead |
| `--shadow-card-hover` | 0 12px 28px -16px rgb(37 42 38 / 0.28) | Card hover lift (D-06) |
| `--shadow-float` | 0 8px 24px -8px rgb(37 42 38 / 0.35) | Floating WhatsApp button, open dropdown |

## 9. Buttons

### 9.1 Variants

| Variant | Light background | Dark (olive) background | Typical use |
|---|---|---|---|
| Primary | Olive fill, White text; hover olive-deep | Saffron fill, Charcoal text; hover saffron-deep | WhatsApp Us |
| Secondary | Transparent, 1.5 px Olive border, Olive text; hover ivory-deep fill | Transparent, 1.5 px Ivory border, Ivory text; hover Ivory 10% fill | Request a Quote |
| Text link | Olive text, underline on hover and focus | Ivory text, underline | Inline and "View Spices" links |

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
| Default section | ivory | charcoal; headings olive | Most sections |
| Alternate section | ivory-deep | charcoal; headings olive | Used to separate adjacent sections; never two alternates in a row |
| Card | white with `--color-line` border | charcoal | radius-lg |
| Inverse band | olive | ivory; accents saffron | Business Enquiry CTA, footer |
| Header | ivory with bottom `--color-line` | charcoal; active item olive | Becomes sticky with a subtle shadow after scrolling |

Section rhythm: alternate default and alternate backgrounds; the Business Enquiry CTA is always an inverse band and always the last section before the footer.

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
| `--reveal-stagger` | 80 ms per item, maximum 6 items (cap 400 ms) | Card groups (S-07: 60–100 ms) |
| `--hover-lift` | −3 px | Card lift (S-07: −2 to −4 px) |
| `--hover-zoom` | 1.05 | Card image zoom (S-07: 1.04–1.06) |

Rules:

- Only `transform` and `opacity` are animated.
- Hover effects apply only on devices that support hover (`@media (hover: hover) and (pointer: fine)`).
- The hero and any content visible on first load are never hidden for a reveal, so the largest image paints immediately (SEO_AND_PERFORMANCE.md).
- `prefers-reduced-motion: reduce` removes all transforms and reveal transitions; content is shown immediately.

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
- Floating WhatsApp button: 56 px circle, bottom-right, 16 px from the edges plus the device safe-area inset; mobile only (`< lg`); the last section has enough bottom padding that the button never covers content.
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
