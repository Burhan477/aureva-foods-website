/**
 * Shared motion helpers for client scripts (DESIGN_SYSTEM.md §14).
 * Timings come from the CSS tokens, so CSS and scripts stay in step.
 *
 * These use the browser's Web Animations API directly. Motion's own DOM
 * `animate` would add bytes to every page for the same result (AD-06).
 */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/** A duration token in milliseconds; the build may minify "150ms" to ".15s" */
function duration(value: string): number {
  const number = parseFloat(value);
  return value.trim().endsWith("ms") ? number : number * 1000;
}

function timing(token: string): KeyframeAnimationOptions {
  const tokens = getComputedStyle(document.documentElement);
  return {
    duration: duration(tokens.getPropertyValue(token)),
    easing: tokens.getPropertyValue("--ease-out").trim() || "ease-out",
  };
}

/** Short opacity fade for content a script has just shown; none under reduced motion */
export function fadeIn(element: Element): void {
  if (reducedMotion.matches || !("animate" in element)) return;
  element.animate({ opacity: [0, 1] }, timing("--duration-fast"));
}

/**
 * Short fade, rising `rise` px, for content a script is about to hide.
 * The animation holds its last frame, so the caller hides the element
 * when it finishes and then cancels it. Returns null under reduced
 * motion: hide at once.
 */
export function fadeOut(element: Element, rise = 0): Animation | null {
  if (reducedMotion.matches || !("animate" in element)) return null;
  return element.animate(
    { opacity: [1, 0], translate: ["0 0", `0 ${-rise}px`] },
    { ...timing("--duration-fast"), fill: "forwards" },
  );
}
