/**
 * Reveal once (AD-05, D-06, DESIGN_SYSTEM.md §14).
 *
 * Content is visible by default. This script only hides `[data-reveal]`
 * elements that start below the viewport, by adding `reveal-ready` to the
 * root, then reveals each one the first time it enters the viewport.
 * Nothing happens under reduced motion or without IntersectionObserver.
 *
 * Elements that enter together are staggered in document order; one that
 * enters alone shows without delay, so stacked items on phones never wait
 * for their position in a list.
 */

const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/** Stagger steps per batch: 6 items, 400 ms at most (§14) */
const MAX_STEP = 5;

function init(): void {
  if (root.classList.contains("reveal-ready")) return;
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      let step = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.style.setProperty("--reveal-step", String(step));
        step = Math.min(step + 1, MAX_STEP);
        element.classList.add("is-revealed");
        observer.unobserve(element);
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );

  for (const element of elements) {
    // Content already on screen is never hidden (§14)
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("is-revealed");
    } else {
      observer.observe(element);
    }
  }

  root.classList.add("reveal-ready");
}

init();
