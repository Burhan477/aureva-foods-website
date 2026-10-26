/**
 * Product carousel (COMPONENT_INVENTORY.md §5, M3.5).
 *
 * The track is a native horizontal scroller with CSS scroll snap, so touch,
 * trackpad and keyboard scrolling work without JavaScript. This script adds
 * the previous/next buttons, the position label and the progress rail, and
 * only then hides the scrollbar. Buttons move by one view of whole cards;
 * smooth scrolling is skipped under reduced motion.
 */

// A module, so its names stay out of the global scope shared with other scripts
export {};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/** Wait after scrolling stops before updating the announced position */
const STATUS_DELAY = 150;

function setDisabled(button: HTMLButtonElement, disabled: boolean): void {
  // aria-disabled keeps the button focusable, so focus is not lost at either end
  button.setAttribute("aria-disabled", String(disabled));
}

function setup(root: HTMLElement): void {
  const track = root.querySelector<HTMLElement>("[data-carousel-track]");
  const items = track ? [...track.querySelectorAll<HTMLElement>("li")] : [];
  const prev = root.querySelector<HTMLButtonElement>("[data-carousel-prev]");
  const next = root.querySelector<HTMLButtonElement>("[data-carousel-next]");
  const status = root.querySelector<HTMLElement>("[data-carousel-status]");
  const thumb = root.querySelector<HTMLElement>("[data-carousel-thumb]");
  if (!track || items.length === 0 || !prev || !next) return;

  const total = items.length;

  /** Distance between card starts, and how many whole cards fit in view */
  function metrics(): { step: number; perView: number } {
    const style = getComputedStyle(track!);
    const padding =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const first = items[0].getBoundingClientRect();
    const second = items[1]?.getBoundingClientRect();
    const step = second ? second.left - first.left : first.width;
    const gap = step - first.width;
    const perView = Math.max(
      1,
      Math.floor((track!.clientWidth - padding + gap + 1) / step),
    );
    return { step, perView };
  }

  function edges(): { atStart: boolean; atEnd: boolean } {
    const max = track!.scrollWidth - track!.clientWidth;
    return {
      atStart: track!.scrollLeft <= 1,
      atEnd: track!.scrollLeft >= max - 1,
    };
  }

  function updateControls(): void {
    const { atStart, atEnd } = edges();
    setDisabled(prev!, atStart);
    setDisabled(next!, atEnd);

    if (thumb) {
      const { scrollLeft, scrollWidth, clientWidth } = track!;
      thumb.style.width = `${(clientWidth / scrollWidth) * 100}%`;
      thumb.style.transform = `translateX(${(scrollLeft / clientWidth) * 100}%)`;
    }
  }

  function updateStatus(): void {
    if (!status) return;
    const { step, perView } = metrics();
    let first = Math.round(track!.scrollLeft / step) + 1;
    let last = Math.min(total, first + perView - 1);
    if (edges().atEnd) {
      last = total;
      first = Math.max(1, total - perView + 1);
    }
    status.textContent =
      first === last ? `${first} of ${total}` : `${first}–${last} of ${total}`;
  }

  function go(direction: 1 | -1): void {
    const { step, perView } = metrics();
    track!.scrollBy({
      left: direction * step * perView,
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  }

  prev.addEventListener("click", () => {
    if (!edges().atStart) go(-1);
  });
  next.addEventListener("click", () => {
    if (!edges().atEnd) go(1);
  });

  let frame = 0;
  let statusTimer = 0;
  function onChange(): void {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateControls);
    window.clearTimeout(statusTimer);
    statusTimer = window.setTimeout(updateStatus, STATUS_DELAY);
  }

  track.addEventListener("scroll", onChange, { passive: true });
  new ResizeObserver(onChange).observe(track);

  for (const element of root.querySelectorAll<HTMLElement>(
    "[data-carousel-js]",
  )) {
    element.hidden = false;
  }
  root.dataset.ready = "";
  updateControls();
  updateStatus();
}

for (const root of document.querySelectorAll<HTMLElement>("[data-carousel]")) {
  setup(root);
}
