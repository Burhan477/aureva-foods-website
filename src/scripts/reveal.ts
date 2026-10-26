/**
 * Reveal once (AD-05, D-06, DESIGN_SYSTEM.md §14).
 *
 * Content is visible by default. This script only hides `[data-reveal]`
 * elements that start below the viewport, by adding `reveal-ready` to the
 * root, then reveals each one the first time it enters the viewport.
 * Nothing happens under reduced motion or without IntersectionObserver.
 */

const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function init(): void {
  if (root.classList.contains("reveal-ready")) return;
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
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
