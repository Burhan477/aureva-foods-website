/**
 * Product filters (Spices Product Showcase, SITE_STRUCTURE.md §4.4).
 *
 * Without JavaScript every product shows and the filter bar stays hidden.
 * This script shows the bar, a group of toggle buttons where exactly one
 * is pressed (`aria-pressed`). Pressing one hides the items whose
 * `data-filter-value` does not match ("all" shows every item) and updates
 * the polite status line from its `data-template` ("{count}", "{total}").
 * Buttons are native, so Tab, Enter and Space work as usual. Focus stays
 * on the pressed button. Items that were hidden fade in briefly, except
 * under reduced motion.
 */

import { fadeIn } from "./motion";

function setup(root: HTMLElement): void {
  const bar = root.querySelector<HTMLElement>("[data-filter-bar]");
  const status = root.querySelector<HTMLElement>("[data-filter-status]");
  const buttons = [
    ...root.querySelectorAll<HTMLButtonElement>("[data-filter-button]"),
  ];
  const items = [...root.querySelectorAll<HTMLElement>("[data-filter-item]")];
  if (!bar || !status || buttons.length === 0 || items.length === 0) return;

  const template = status.dataset.template ?? "";

  function apply(value: string): void {
    let count = 0;
    for (const item of items) {
      const shown = value === "all" || item.dataset.filterValue === value;
      const appearing = shown && item.hidden;
      item.hidden = !shown;
      // The card, not the item: the item may carry the reveal transition
      if (appearing) fadeIn(item.firstElementChild ?? item);
      if (shown) count += 1;
    }
    for (const button of buttons) {
      const pressed = button.dataset.filterValue === value;
      button.setAttribute("aria-pressed", String(pressed));
    }
    status!.textContent = template
      .replace("{count}", String(count))
      .replace("{total}", String(items.length));
  }

  for (const button of buttons) {
    button.addEventListener("click", () =>
      apply(button.dataset.filterValue ?? "all"),
    );
  }

  // The server renders the "all" state, so nothing is announced on load
  bar.hidden = false;
}

for (const root of document.querySelectorAll<HTMLElement>("[data-filter]")) {
  setup(root);
}
