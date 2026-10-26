/**
 * Header behaviour (ARCHITECTURE_DECISIONS.md AD-05, AD-15):
 * - scroll shadow on the sticky header
 * - desktop Products mega menu: hover (mouse), click, keyboard
 * - mobile menu with a Products disclosure, focus containment and scroll lock
 *
 * Both menus are disclosure patterns: buttons with aria-expanded and
 * aria-controls; panels contain plain links. Without JavaScript the
 * fallback links rendered in the markup stay in place.
 */

const desktop = window.matchMedia("(width >= 64rem)");
const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");

/** Short delays stop the menu flickering as the pointer passes by */
const HOVER_OPEN_DELAY = 80;
const HOVER_CLOSE_DELAY = 200;

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isExpanded(button: HTMLButtonElement): boolean {
  return button.getAttribute("aria-expanded") === "true";
}

function controlledElement(button: HTMLButtonElement): HTMLElement | null {
  const id = button.getAttribute("aria-controls");
  return id ? document.getElementById(id) : null;
}

/** Replace a no-JavaScript fallback link with its disclosure button */
function enhance(fallback: Element | null, button: HTMLButtonElement): void {
  fallback?.remove();
  button.hidden = false;
}

function initHeaderShadow(header: HTMLElement): void {
  const update = () => {
    header.toggleAttribute("data-scrolled", window.scrollY > 8);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initProductsMenu(root: HTMLElement): void {
  const trigger = root.querySelector<HTMLButtonElement>(
    "[data-products-trigger]",
  );
  const panel = trigger ? controlledElement(trigger) : null;
  if (!trigger || !panel) return;

  enhance(root.querySelector("[data-products-fallback]"), trigger);

  let openTimer: number | undefined;
  let closeTimer: number | undefined;
  let openedByHover = false;

  const clearTimers = () => {
    window.clearTimeout(openTimer);
    window.clearTimeout(closeTimer);
  };

  const setOpen = (open: boolean, byHover = false) => {
    clearTimers();
    // Never leave focus on a link that is about to be hidden
    if (!open && panel.contains(document.activeElement)) trigger.focus();
    trigger.setAttribute("aria-expanded", String(open));
    root.toggleAttribute("data-open", open);
    openedByHover = open && byHover;
  };

  // A click after a hover-open keeps the menu open instead of toggling it shut
  trigger.addEventListener("click", () => {
    setOpen(!isExpanded(trigger) || openedByHover);
  });

  root.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse" || !fineHover.matches) return;
    window.clearTimeout(closeTimer);
    if (!isExpanded(trigger)) {
      openTimer = window.setTimeout(
        () => setOpen(true, true),
        HOVER_OPEN_DELAY,
      );
    }
  });

  root.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(openTimer);
    if (isExpanded(trigger)) {
      closeTimer = window.setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY);
    }
  });

  root.addEventListener("focusout", (event) => {
    const next = event.relatedTarget;
    if (isExpanded(trigger) && next instanceof Node && !root.contains(next)) {
      setOpen(false);
    }
  });

  panel.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (
      isExpanded(trigger) &&
      event.target instanceof Node &&
      !root.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isExpanded(trigger)) {
      const hadFocus = root.contains(document.activeElement);
      setOpen(false);
      if (hadFocus) trigger.focus();
    }
  });

  desktop.addEventListener("change", () => {
    if (!desktop.matches && isExpanded(trigger)) setOpen(false);
  });
}

function initMobileMenu(toggle: HTMLButtonElement): void {
  const panel = controlledElement(toggle);
  if (!panel) return;

  enhance(document.querySelector("[data-mobile-menu-fallback]"), toggle);

  const focusables = () =>
    Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
      (element) => element.getClientRects().length > 0,
    );

  const setOpen = (open: boolean, returnFocus = true) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) {
      focusables()[0]?.focus();
    } else if (returnFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => setOpen(!isExpanded(toggle)));

  // Close after choosing a destination
  panel.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setOpen(false, false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!isExpanded(toggle)) return;

    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    // Keep focus within the menu button and the panel while open
    if (event.key !== "Tab") return;
    const items = [toggle, ...focusables()];
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    const inside = active instanceof HTMLElement && items.includes(active);

    if (event.shiftKey && (active === first || !inside)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !inside)) {
      event.preventDefault();
      first.focus();
    }
  });

  desktop.addEventListener("change", () => {
    if (desktop.matches && isExpanded(toggle)) setOpen(false, false);
  });

  const productsToggle = panel.querySelector<HTMLButtonElement>(
    "[data-mobile-products-toggle]",
  );
  const productsRegion = productsToggle
    ? controlledElement(productsToggle)
    : null;
  if (productsToggle && productsRegion) {
    productsToggle.addEventListener("click", () => {
      const open = !isExpanded(productsToggle);
      productsToggle.setAttribute("aria-expanded", String(open));
      productsRegion.hidden = !open;
    });
  }
}

const header = document.querySelector<HTMLElement>("[data-site-header]");
if (header) initHeaderShadow(header);

const productsMenu = document.querySelector<HTMLElement>(
  "[data-products-menu]",
);
if (productsMenu) initProductsMenu(productsMenu);

const mobileToggle = document.querySelector<HTMLButtonElement>(
  "[data-mobile-menu-toggle]",
);
if (mobileToggle) initMobileMenu(mobileToggle);
