import { confirmed, site } from "../data/site";

/**
 * The single WhatsApp link builder (ARCHITECTURE_DECISIONS.md AD-11).
 *
 * Returns null while the number is not CONFIRMED, so callers render an
 * inactive button instead of a link (DESIGN_SYSTEM.md §9.2, QA-80).
 */

const { number, messages } = site.whatsapp;

const confirmedNumber = confirmed(number) || null;

if (!confirmedNumber) {
  console.warn(
    `[whatsapp] Number is ${number.status} (${number.note}). WhatsApp buttons render inactive.`,
  );
}

export const isWhatsAppActive = confirmedNumber !== null;

export function getWhatsAppMessage(productName?: string): string {
  return productName
    ? messages.product.replace("{Product Name}", productName)
    : messages.general;
}

/** `message`, when given, replaces the general or product template */
export function getWhatsAppHref(
  productName?: string,
  message = getWhatsAppMessage(productName),
): string | null {
  if (!confirmedNumber) return null;
  const text = encodeURIComponent(message);
  return `https://wa.me/${confirmedNumber}?text=${text}`;
}
