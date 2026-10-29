# AUREVA FOODS — Asset Guidelines

| | |
|---|---|
| Version | 0.1 |
| Last updated | 2026-10-25 |
| Status | APPROVED by owner, 2026-10-25 |
| Coordinated by | [AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md](AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md) |

## 1. Status and scope

This document covers the technical and legal side of images, logos and icons: folders, naming, source sizes, formats, optimisation, alt text, licensing, provenance and the asset register. The creative direction (what photos should look like) is in [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md) §6; how images sit in layouts is in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) §12.

## 2. Folders

```
src/assets/images/
  brand/           logo files (SVG preferred) once supplied (C-13)
  hero/            home hero image(s)
  categories/      one image per category: spices, dehydrated-products, fresh-fruits-vegetables
  products/
    spices/        one image per product, named by product id
    dehydrated/
    fresh/
  sections/        supporting images (About, Why Aureva), if approved
public/
  favicon.ico, apple-touch-icon.png (favicon.svg once a vector logo exists)
  og/default.jpg   social share image (fixed URL)
```

- Everything shown in pages goes in `src/assets/images/` so Astro can optimise it (AD-09).
- `public/` only for files that need a fixed, unprocessed URL.
- The Astro starter images (`src/assets/astro.svg`, `background.svg`) are removed in M1.3.

## 3. Naming

- Source images are stored as WebP (owner, 2026-10-28): photos lossy at quality 85–90, logos lossless with transparency kept. Astro still outputs AVIF and WebP with a JPG fallback (§7). `public/` files keep their fixed formats: the share image stays JPG and the touch icon PNG, for crawler and platform support.
- Lower case, words separated by hyphens, no spaces or special characters: `turmeric-powder.webp`.
- Product images use the product id from `products.json` (same as the display name in kebab case): `whole-coriander.webp`, `fennel-seeds.webp`, `pomegranate.webp`.
- Category images use the route slug: `spices.webp`, `dehydrated-products.webp`, `fresh-fruits-vegetables.webp`.
- Variants add a suffix: `home-hero-mobile.webp`.
- No vendor or stock-site names in file names; the source goes in the asset register (§9).

## 4. Required images

| Asset | Quantity | Aspect ratio | Minimum source size | Status |
|---|---|---|---|---|
| Home hero | 1 (plus optional mobile crop) | 16:9 or 3:2 | 2400 px wide | Needed (C-14) |
| Category images | 3 | 3:2 (cropped to 4:3 on phones) | 1800 × 1200 px | Needed |
| Product images | 27 (10 spices, 12 dehydrated, 5 fresh) | 4:3 | 1200 × 900 px | Needed |
| About / supporting | 1–2 | 3:2 | 1800 × 1200 px | Optional; generic only (§6) |
| Social share image | 1 | 1.91:1 | 1200 × 630 px | Needed for M6.3 |
| Logo | 1 set | — | SVG, or PNG ≥ 1000 px wide on transparent background | Needed (C-13) |
| Favicon set | 3 files | 1:1 | From the logo, or a temporary monogram | Needed for M2 |

If a product image is not available at build time, the card shows a neutral placeholder tile in `--color-ivory-deep` with the product name, never an unrelated photo.

## 5. Photography requirements (technical)

- Sharp focus on the ingredient; no motion blur; no visible noise at 100%.
- Consistent set-up across each category: same angle (top-down or 45°), same lighting direction, same neutral background family (BRAND_GUIDELINES.md §6).
- Subject fills about 60–75% of the frame, centred, with enough margin to survive 4:3 and 3:2 crops.
- Accurate colour: no heavy filters or oversaturation; white balance consistent across a category.
- No text, watermarks, visible brands, labels or packaging in the frame (D-07).
- People, if any: model releases required; never presented as Aureva staff.
- Hero: keep the subject off-centre with calm space on one side so it works in the split layout and in a narrow phone crop.

## 6. What images may imply

- Generic and stock images illustrate ingredients only. They must not suggest they show Aureva's facilities, stock, staff, farms, factories or operations (master plan §5).
- No facility, warehouse or factory images unless the owner supplies them and confirms they are Aureva's own (C-08).
- Credential logos (Spices Board, APEDA, FSSAI, FDA and others) only after verification and permission under C-05.

## 7. Formats and optimisation

| Stage | Rule |
|---|---|
| Source | High-quality JPG (photos), PNG (graphics with transparency) or SVG (logo, icons). Keep originals outside the repository if they exceed 5 MB; commit a resized master (longest side ≤ 2560 px). |
| Output | Astro `<Picture>` generates AVIF and WebP with a JPG fallback (AD-09). |
| Widths | Product and category cards: 400, 800, 1200 px. Hero: 640, 960, 1280, 1920, 2560 px. Each with a correct `sizes` attribute. |
| Weight targets | Hero image as delivered to a phone ≤ 200 KB; each card image ≤ 60 KB. |
| Dimensions | Every image has width and height or a fixed aspect-ratio frame (no layout shift). |
| Loading | Hero: eager with high fetch priority. Everything else: lazy. |
| Metadata | Camera and location metadata (EXIF, GPS) stripped from committed files. |
| SVG | Optimised, no embedded raster images or scripts. |

## 8. Alt text

| Image type | Rule | Example |
|---|---|---|
| Product image | Name the product and what is visible | "Turmeric powder in a shallow bowl" |
| Category image | Describe the ingredients shown | "Whole cumin, coriander seeds and chilli powder in small bowls" |
| Hero | Describe the scene briefly | "Assorted ground spices on a stone surface" |
| Decorative | Empty `alt=""` | Background textures |
| Logo / wordmark link | The destination, not the image | "Aureva Foods home" |

- No "image of" or "photo of".
- No claims in alt text ("100% natural", "premium", "best"; BRAND_GUIDELINES.md §10.2) and no keyword stuffing.
- Alt text for products is stored in `products.json` next to the image reference (AD-08).
- Do not describe an image as showing Aureva's own product unless it does.

## 9. Licensing and provenance

### 9.1 Allowed sources

| Source | Conditions |
|---|---|
| Owner-supplied photos | Owner confirms Aureva holds the rights |
| Paid stock | Licence covers commercial web use; licence reference recorded |
| Free stock with a commercial licence (for example Unsplash, Pexels) | Licence terms checked at download time; no identifiable people or brands without releases |
| AI-generated images | Owner approves each image; the generating tool's terms allow commercial use; recorded as AI-generated in the register; same "what images may imply" rules (§6) |

**Not allowed:** images copied from search results, other companies' or competitors' websites, marketplaces or social media; images with visible third-party brands or packaging.

### 9.2 Asset register

Every image added to the repository gets a row here, in the same change that adds the file.

| File | Source | Creator / owner | Licence / reference | AI-generated | Date added | Approved by | Status |
|---|---|---|---|---|---|---|---|
| `src/assets/images/brand/aureva-foods-logo.webp` | Derived from `Gemini_Generated_Image_krqn0ckrqn0ckrqn.png` (Downloads): ivory background converted to transparency, trimmed to the artwork; tagline and generator watermark corner left out. 1624 × 1077 | Owner (generated with Google Gemini) | Gemini terms to confirm for commercial and trademark use | Yes | 2026-10-25 | Owner supplied for integration; final approval PENDING | Primary logo, light backgrounds only. Not yet placed: header and footer are M2 |
| `src/assets/images/brand/aureva-foods-monogram.webp` | Square crop of `Gemini_Generated_Image_1wcnt01wcnt01wcn.png` (Downloads), background margin only. 1240 × 1240 | Owner (generated with Google Gemini) | As above | Yes | 2026-10-25 | As above | Symbol on Deep-Olive-like green (#2B4A28); source for the favicon set |
| `public/favicon.ico` (16, 32, 48) and `public/apple-touch-icon.png` (180) | Resized from the monogram source | As above | As above | Yes | 2026-10-25 | As above | Live in `Layout.astro`; replace the starter Astro favicons |
| `src/assets/images/categories/spices.webp` | Owner supplied in conversation (2026-10-25) as PNG for the header Products menu; converted to JPG (quality 86, metadata stripped). 1672 × 941 | Owner; creator not stated | To confirm (C-14) | Unknown; appears AI-generated, to confirm | 2026-10-25 | Owner supplied for the header menu; licence and final approval PENDING | Header Products menu and mobile menu. Below the 1800 × 1200 category minimum (§4), adequate for menu cards. Spices image also used in the About Us Business Enquiry CTA (2026-10-26), cropped 4:3 |
| `src/assets/images/categories/dehydrated-products.webp` | As above | As above | As above | As above | 2026-10-25 | As above | As above. Also used temporarily in About Us Quality (2026-10-26), cropped 4:3, as generic illustration only (§6), until owner-supplied quality imagery exists. Also used in the Contact Us Contact Introduction (2026-10-26), cropped 16:9 / 4:3, as generic illustration only (§6) |
| `src/assets/images/categories/fresh-fruits-vegetables.webp` | As above | As above | As above | As above | 2026-10-25 | As above | As above. Also shows tomatoes, which are not in the catalogue (SITE_STRUCTURE.md §5.3). Also used temporarily in About Us Who We Are (2026-10-26), cropped 4:3 left-aligned and 1:1 centred so the tomatoes stay out of frame, until a separate About image is supplied. Also used in the Contact Us WhatsApp Enquiry section (2026-10-26), cropped 4:3 left-aligned for the same reason |
| `src/assets/images/hero/home-hero.webp` | Owner supplied in conversation (2026-10-25) for the home hero; byte-identical to `Golden Spice Market at Sunrise.png` (Downloads, §9.3). Committed unchanged, no metadata found. 1983 × 793 (2.5:1) | Owner; creator not stated | To confirm (C-14) | Unknown; appears AI-generated, to confirm | 2026-10-25 | Owner supplied for the hero; licence and final approval PENDING | Home hero background. Below the 2400 px hero minimum and not 16:9 or 3:2 (§4); Astro serves it at up to 1983 px. Also used temporarily in About Us Manufacturing & Processing (2026-10-26), cropped 4:3 to the ingredients, as generic illustration only (§6), until owner-confirmed imagery is supplied (C-08) |
| `src/assets/images/hero/products-overview.webp` | Owner supplied in conversation (2026-10-26) with the Products Overview brief as one of four images; identified as the C04 Products Overview banner (the only wide, mixed-category image; the other three match the C01–C03 category banners and were not added). Committed unchanged (PNG, no metadata chunks). 2048 × 982 (about 2.09:1) | Owner; creator not stated | To confirm (C-14) | Unknown; appears AI-generated, to confirm | 2026-10-26 | Owner supplied for the Products Overview hero; licence and final approval PENDING | Products Overview hero, full-bleed, cropped 4:3 / 16:9 / 5:2 / 3:1. Also shows cranberries, quinces, thyme, pecans, almonds and orange slices, which are not in the catalogue (SITE_STRUCTURE.md §5) |
| `src/assets/images/sections/home-about.webp` | Owner supplied in conversation (2026-10-26) to replace the earlier processing-plant image, which is no longer in the repository. Committed unchanged (JPG, no metadata found). 1536 × 1024 (3:2) | Owner; creator not stated | To confirm (C-14) | Unknown; appears AI-generated, to confirm | 2026-10-26 | Owner supplied for the About section; licence and final approval PENDING | Home About section, cropped to 4:3 / 5:4. Below the 1800 × 1200 supporting-image minimum (§4), adequate at the displayed size (about 720 px wide). Ingredients only; no facility or people. Also used temporarily in About Us Company Introduction (2026-10-26), cropped to 4:3 / 1:1, until a separate About image is supplied |
| `src/assets/images/sections/dehydrated-garlic.webp` | Owner supplied in conversation (2026-10-26) with the Dehydrated Garlic brief as one of two garlic images; converted from PNG to JPG (quality 86, no metadata found). 1024 × 1024 (1:1). The other image (700 × 700, garlic in a white bowl on white) was not added: it looks like a marketplace or stock listing photo, so its source must be confirmed first (§9.1) | Owner; creator not stated | To confirm (C-14) | Unknown; appears AI-generated, to confirm | 2026-10-26 | Owner supplied for the Dehydrated Garlic section; licence and final approval PENDING | Dehydrated Products page, Dehydrated Garlic (section 3), cropped 4:3 / 4:5. Below the 1800 × 1200 supporting-image minimum (§4), adequate at the displayed size (about 480 px wide on desktop). Ingredients only; dried pieces are illustration, not a confirmed product format (C-10) |
| `src/assets/images/products/dehydrated/white-onion.webp` | Cropped from `wide_clean_high_resolution_collage_product_photo.png` (Downloads, `AUREVA_FOODS_Dehydrated_Product_Image_Sheets`; 2172 × 724, 6 × 2 labelled tiles), supplied by the owner in conversation (2026-10-26). One 352 × 264 (4:3) crop per tile, inside the measured tile edges, excluding the name labels, gold marks and white separators; lossless WebP, no metadata. Collage left unchanged | Owner; creator not stated | To confirm (C-14) | Unknown; appears AI-generated, to confirm | 2026-10-26 | Owner supplied for the home Dehydrated Products Showcase; licence and final approval PENDING | Home Dehydrated Products Showcase (M3.5). 352 × 264 is the collage's full tile resolution, far below the 1200 × 900 product minimum (§4); soft on high-density screens. Replace with full-resolution originals when available |
| `src/assets/images/products/dehydrated/pink-onion.webp` | As above (tile 2) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/fried-onion.webp` | As above (tile 3) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/dehydrated-garlic.webp` | As above (tile 4) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/beetroot-powder.webp` | As above (tile 5) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/lemon-powder.webp` | As above (tile 6) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/coriander-leaves-powder.webp` | As above (tile 7) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/dry-mango-powder.webp` | As above (tile 8) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/tamarind-powder.webp` | As above (tile 9) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/potato-powder.webp` | As above (tile 10) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/spinach-powder.webp` | As above (tile 11) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/dehydrated/mint-leaves-powder.webp` | As above (tile 12) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/turmeric-powder.webp` | Cropped from `Rustic Spice Collection Grid.png` (Downloads; 2172 × 724, 5 × 2 labelled tiles), supplied by the owner in conversation (2026-10-26). One 368 × 276 (4:3) crop per tile, centred in the measured tile and inside its edges, excluding the name labels, gold marks and white separators; lossless WebP, no metadata. Collage left unchanged | Owner; creator not stated | To confirm (C-14) | Unknown; appears AI-generated, to confirm | 2026-10-26 | Owner supplied for the home Featured Spices section; licence and final approval PENDING | Home Featured Spices (M3.4). 368 × 276 is close to the collage's full tile resolution, far below the 1200 × 900 product minimum (§4); soft on high-density screens. Replace with full-resolution originals when available |
| `src/assets/images/products/spices/ginger-powder.webp` | As above (tile 2) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/cardamom-powder.webp` | As above (tile 3) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/fenugreek-powder.webp` | As above (tile 4) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/cumin-powder.webp` | As above (tile 5) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/chilli-powder.webp` | As above (tile 6) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/whole-coriander.webp` | As above (tile 7) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/whole-cumin.webp` | As above (tile 8) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/garlic-powder.webp` | As above (tile 9) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/spices/fennel-seeds.webp` | As above (tile 10) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/fresh/onion.webp` | Cropped from `Fresh Produce Showcase Banner.png` (Downloads; 2172 × 724, 5 × 1 labelled tiles), supplied by the owner in conversation (2026-10-26). One 424 × 318 (4:3) crop per tile at full tile width, inside the measured tile edges, with the vertical position chosen per product to frame the subject; name labels, gold marks and white separators excluded; lossless WebP, no metadata. Collage left unchanged | Owner; creator not stated | To confirm (C-14) | Unknown; appears AI-generated, to confirm | 2026-10-26 | Owner supplied for the home Fresh Fruits & Vegetables Showcase; licence and final approval PENDING | Home Fresh Fruits & Vegetables Showcase (M3.6). 424 × 318 is the collage's full tile width, far below the 1200 × 900 product minimum (§4); soft on high-density screens. Replace with full-resolution originals when available |
| `src/assets/images/products/fresh/green-chilli.webp` | As above (tile 2) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/fresh/banana.webp` | As above (tile 3) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/fresh/pomegranate.webp` | As above (tile 4) | As above | As above | As above | 2026-10-26 | As above | As above |
| `src/assets/images/products/fresh/mango.webp` | As above (tile 5) | As above | As above | As above | 2026-10-26 | As above | As above |

### 9.3 Candidates under review

| File (Downloads) | Size | Issue | Status |
|---|---|---|---|
| Golden Spice Market at Sunrise.png | 1983 × 793 | Unknown origin and licence; market scene (BRAND_GUIDELINES.md §6 avoids crowded market scenes); possibly AI-generated | Supplied by the owner for the home hero on 2026-10-25 (§9.2); licence still OPEN (C-14) |
| Rustic Indian Spice Market Spread.png | 1672 × 941 | Unknown origin and licence; rustic market styling; below the 2400 px hero minimum | OPEN (C-14) |
| Png main logo.png | 2000 × 2000 | Belongs to another company (TAE Korea) | Must not be used |

## 10. Icons and logos

- Icons: Lucide React only (BRAND_GUIDELINES.md §7); no icon fonts.
- WhatsApp glyph: official mark, used per WhatsApp's brand guidelines, unmodified.
- Aureva logo: supplied 2026-10-25 as AI-generated raster artwork (register §9.2); it replaces the temporary wordmark once the header and footer are built in M2 (C-13). Supplied files: primary logo on ivory (two near-identical renders), a "transparent" version whose checkerboard is baked in and fully opaque (not usable), and an "A" monogram on green. No vector file and no light-on-dark version of the full logo; the dark logo green (#243B21) is about 1.2:1 against the Deep Olive footer.
- Favicon: the supplied monogram (`public/favicon.ico`, `public/apple-touch-icon.png`). There is no `favicon.svg` until a real vector exists. At 16 px the hairline "A" and spice detail are soft; a simplified icon would read better.

## 11. Decisions needed

| ID | Question | Recommendation |
|---|---|---|
| C-14 | How photography will be sourced: owner photos, paid stock, free stock or approved AI images | Owner photos where possible, otherwise licensed stock in one consistent style; decide before M3.1 |
| C-13 | Approve the supplied AI-generated logo for use, and confirm Gemini's terms allow commercial and trademark use | Confirm before launch; ideally commission a vector redraw |
| C-13 | Footer (olive band) needs a light version of the logo | Done 2026-10-29 (owner request): `brand/aureva-foods-logo-light.webp`, the same artwork with the dark green wordmark and ring recoloured to mist, replaces the monogram plus text wordmark in the footer. A vector redraw would still give cleaner edges |
| C-13 | Header lockup: the full emblem is detailed at header height (about 64 px) | A horizontal wordmark (leafed "A" plus "Aureva"), without globe and spices, for the header |
| C-06 | Tagline "Nature Preserved. Flavor Delivered.": "preserved" may read as a preservation or natural claim, and "Flavor" is US spelling (D-08 uses British/Indian) | Kept out of the web logo until approved |

## 12. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft: folders, naming, required images, formats, alt text, licensing, asset register |
| 0.1 | 2026-10-25 | Approved by owner (D-21), including the logo and favicon records added in a separate session; `favicon.svg` note in §2 aligned with §10 |
| 0.1 | 2026-10-26 | Register: twelve Dehydrated product crops added (§9.2) |
| 0.1 | 2026-10-26 | Register: ten Spices product crops added (§9.2) |
| 0.1 | 2026-10-26 | Register: five Fresh Fruits & Vegetables product crops added (§9.2) |
| 0.1 | 2026-10-26 | Register: Products Overview banner (C04) added (§9.2) |
