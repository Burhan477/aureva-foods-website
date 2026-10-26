/**
 * Desktop navigation item styles, shared by Header and ProductsMenu.
 * Items fill the full header height so the pointer path from "Products"
 * to its panel has no gap.
 */
export const desktopNavItem =
  "group/link flex h-full items-center gap-1 px-3 text-button font-medium text-charcoal transition-colors duration-(--duration-fast) ease-out hover:text-olive focus-visible:outline-none aria-expanded:text-olive aria-[current=page]:text-olive data-current:text-olive xl:px-4";

/** Label inside a desktop item; carries the focus ring so it hugs the text, not the full header height */
export const desktopNavLabel =
  "relative rounded-sm py-2 group-focus-visible/link:outline-2 group-focus-visible/link:outline-offset-4 group-focus-visible/link:outline-focus";

/** Olive underline: shown for the current page, grows in on hover */
export const desktopNavUnderline =
  "pointer-events-none absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-olive transition-transform duration-(--duration-base) ease-out group-hover/link:scale-x-100 group-aria-[current=page]/link:scale-x-100 group-data-current/link:scale-x-100";
