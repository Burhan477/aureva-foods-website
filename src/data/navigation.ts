import type { ImageMetadata } from "astro";

import dehydratedImage from "../assets/images/categories/dehydrated-products.webp";
import freshImage from "../assets/images/categories/fresh-fruits-vegetables.webp";
import spicesImage from "../assets/images/categories/spices.webp";

/**
 * Navigation and product categories shared by the header, mobile menu and
 * footer. Routes are the approved ones in SITE_STRUCTURE.md §2 (D-10);
 * every internal link ends in a slash (AD-02).
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface ProductCategory extends NavLink {
  id: "spices" | "dehydrated-products" | "fresh-fruits-vegetables";
  /** Draft copy, PENDING APPROVAL: summarises the approved catalogue (SITE_STRUCTURE.md §5) */
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Category accent token (BRAND_GUIDELINES.md §3.3, D-09) */
  accent: "orange" | "saffron" | "teal";
}

export const homeLink: NavLink = { label: "Home", href: "/" };
export const aboutLink: NavLink = { label: "About Us", href: "/about/" };
export const productsLink: NavLink = { label: "Products", href: "/products/" };
export const contactLink: NavLink = { label: "Contact Us", href: "/contact/" };

/** "All Products" is the first Products menu entry (D-20, C-31) */
export const allProductsLink: NavLink = {
  label: "All Products",
  href: productsLink.href,
};

/** Order as in SITE_STRUCTURE.md §3.1 */
export const mainNav: NavLink[] = [
  homeLink,
  aboutLink,
  productsLink,
  contactLink,
];

/** Order and names as in S-01 and BRAND_GUIDELINES.md §9 */
export const productCategories: ProductCategory[] = [
  {
    id: "spices",
    label: "Spices",
    href: "/products/spices/",
    description:
      "Ground and whole spices, from turmeric and chilli to cumin and coriander.",
    image: spicesImage,
    imageAlt:
      "Bowls of turmeric, chilli and other ground spices with coriander seeds, cumin, cardamom pods, dried red chillies, ginger and garlic",
    accent: "orange",
  },
  {
    id: "dehydrated-products",
    label: "Dehydrated Products",
    href: "/products/dehydrated-products/",
    description:
      "Dehydrated onion and garlic, plus vegetable, fruit and herb powders.",
    image: dehydratedImage,
    imageAlt:
      "Dried onion and garlic flakes, beetroot and green vegetable powders and dried lemon slices in wooden bowls",
    accent: "saffron",
  },
  {
    id: "fresh-fruits-vegetables",
    label: "Fresh Fruits & Vegetables",
    href: "/products/fresh-fruits-vegetables/",
    description: "Onion, green chilli, banana, pomegranate and mango.",
    image: freshImage,
    imageAlt:
      "Red onions, green chillies, bananas, pomegranates and mangoes on a wooden table",
    accent: "teal",
  },
];

/**
 * Footer legal links. Privacy Policy (`/privacy-policy/`) and Terms &
 * Conditions (`/terms-and-conditions/`) are added back once their pages
 * are built (M6.1); until then the footer leaves them out rather than
 * link to missing pages (owner, 2026-10-27).
 */
export const legalNav: NavLink[] = [];

function withTrailingSlash(pathname: string): string {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

/** True when `href` is exactly the current page */
export function isExactPath(pathname: string, href: string): boolean {
  return withTrailingSlash(pathname) === href;
}

/** True when `href` is the current page, or a parent section of it (except Home) */
export function isCurrentPath(pathname: string, href: string): boolean {
  const path = withTrailingSlash(pathname);
  if (href === "/") return path === "/";
  return path.startsWith(href);
}
