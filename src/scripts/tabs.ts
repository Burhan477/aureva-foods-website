/**
 * Category tabs (COMPONENT_INVENTORY.md §5, Products Overview portfolio).
 *
 * Without JavaScript every panel shows, one after another, under its own
 * heading, and the tab list stays hidden. This script shows the tab list
 * and one panel at a time, following the WAI-ARIA tabs pattern with
 * automatic activation: click, or Left/Right arrow, Home and End on a tab.
 * Only the selected tab is in the tab order. Nothing animates.
 */

// A module, so its names stay out of the global scope shared with other scripts
export {};

function setup(root: HTMLElement): void {
  const list = root.querySelector<HTMLElement>("[data-tabs-list]");
  const tabs = [...root.querySelectorAll<HTMLButtonElement>("[data-tab]")];
  const panels = tabs.map((tab) =>
    document.getElementById(tab.getAttribute("aria-controls") ?? ""),
  );
  if (!list || tabs.length === 0 || panels.includes(null)) return;

  function select(index: number, moveFocus: boolean): void {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[i]!.hidden = !selected;
    });
    if (moveFocus) tabs[index].focus();
  }

  /** Tab index each key moves to from tab `i` */
  function target(key: string, i: number): number | null {
    const last = tabs.length - 1;
    switch (key) {
      case "ArrowRight":
        return i === last ? 0 : i + 1;
      case "ArrowLeft":
        return i === 0 ? last : i - 1;
      case "Home":
        return 0;
      case "End":
        return last;
      default:
        return null;
    }
  }

  panels.forEach((panel, i) => {
    panel!.setAttribute("role", "tabpanel");
    panel!.setAttribute("aria-labelledby", tabs[i].id);
  });

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(i, false));
    tab.addEventListener("keydown", (event) => {
      const next = target(event.key, i);
      if (next === null) return;
      event.preventDefault();
      select(next, true);
    });
  });

  const initial = tabs.findIndex(
    (tab) => tab.getAttribute("aria-selected") === "true",
  );
  select(Math.max(0, initial), false);
  list.hidden = false;
}

for (const root of document.querySelectorAll<HTMLElement>("[data-tabs]")) {
  setup(root);
}
