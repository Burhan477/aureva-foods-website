/**
 * Shared motion helpers for client scripts (DESIGN_SYSTEM.md §14).
 * Timings come from the CSS tokens, so CSS and scripts stay in step.
 */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/** A duration token in milliseconds; the build may minify "150ms" to ".15s" */
function duration(value: string): number {
  const number = parseFloat(value);
  return value.trim().endsWith("ms") ? number : number * 1000;
}

/** Short opacity fade for content a script has just shown; none under reduced motion */
export function fadeIn(element: Element): void {
  if (reducedMotion.matches || !("animate" in element)) return;
  const tokens = getComputedStyle(document.documentElement);
  element.animate(
    { opacity: [0, 1] },
    {
      duration: duration(tokens.getPropertyValue("--duration-fast")),
      easing: tokens.getPropertyValue("--ease-out").trim() || "ease-out",
    },
  );
}
