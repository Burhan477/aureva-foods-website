# AUREVA FOODS — QA Checklist

| | |
|---|---|
| Version | 0.1 |
| Last updated | 2026-10-25 |
| Status | APPROVED by owner, 2026-10-25 |
| Coordinated by | [AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md](AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md) |

## 1. How to use this checklist

- Every implementation report (master plan §12.1 step 7) includes the checks from this document that apply to the task, each marked **Pass**, **Fail** or **N/A**, with evidence (command output, measured value, or what was looked at and where).
- A check is never marked Pass unless it was actually run. Anything not run is reported as **Not run**, with the reason.
- **When** column: **T** = every task that touches the area; **M** = at each milestone review; **L** = before launch (M6–M7).
- IDs (QA-xx) are referenced in reports, so results can be compared over time.

## 2. Build and code

| ID | Check | How | When |
|---|---|---|---|
| QA-01 | Production build succeeds with no errors | `npm run build` | T |
| QA-02 | Type check passes | `npm run check` (`astro check`), available after M1.1 | T |
| QA-03 | Lint passes | `npm run lint`, after M1.1 | T |
| QA-04 | Formatting is clean | `npm run format:check`, after M1.1 | T |
| QA-05 | No browser console errors or warnings on changed pages | DevTools console in `npm run preview` | T |
| QA-06 | Only the approved scope changed | `git status` and `git diff` reviewed | T |
| QA-07 | No new dependency without approval | `package.json` diff | T |
| QA-08 | No raw colours or sizes outside the design tokens | Search changed files for hex codes and arbitrary values | T |

## 3. Content and claims

| ID | Check | How | When |
|---|---|---|---|
| QA-10 | Product names match the approved list (D-14) | Compare against SITE_STRUCTURE.md §5 | T |
| QA-11 | No restricted wording (BRAND_GUIDELINES.md §10.2) in copy, metadata or alt text | Text search for each restricted phrase | T |
| QA-12 | No packaging details (D-07) | Read changed content | T |
| QA-13 | Every unverified fact is labelled and stored centrally (master plan §5, AD-08) | Review `site.ts`, data files and comments | T |
| QA-14 | No credential, market, capacity or facility claim without verification (C-05, C-07, C-08) | Read changed content | T |
| QA-15 | British/Indian English spelling (D-08) | Read changed content | T |
| QA-16 | Build check lists no TEMPORARY or BLOCKED values | M6.9 check output | L |
| QA-17 | PendingContent markers render nothing in the production build | Inspect `dist/` HTML | L |

## 4. Brand and design

| ID | Check | How | When |
|---|---|---|---|
| QA-20 | Only approved colour pairs are used (BRAND_GUIDELINES.md §3.2, DESIGN_SYSTEM.md §3) | Visual review; contrast checker on any new pair | T |
| QA-21 | DM Serif Display only on `h1`/`h2` and the wordmark (D-08) | Visual review | T |
| QA-22 | Spacing, containers and grid follow DESIGN_SYSTEM.md | Visual review at test widths | T |
| QA-23 | Category accents used only as specified (D-09) | Visual review | T |

## 5. Responsive layout

| ID | Check | How | When |
|---|---|---|---|
| QA-30 | No horizontal scrolling at 360, 390, 768, 1024, 1280, 1440 and 1920 px | DevTools device toolbar | T |
| QA-31 | Layout matches the agreed column counts at each breakpoint | DevTools | T |
| QA-32 | Images crop sensibly and keep their frame while loading | DevTools with throttled network | T |
| QA-33 | Touch targets at least 44 × 44 px | DevTools measurement | T |
| QA-34 | Phone landscape orientation works | DevTools rotation | M |
| QA-35 | Real-device check on at least one Android phone and one iPhone | Owner or tester device | M |

## 6. Accessibility

| ID | Check | How | When |
|---|---|---|---|
| QA-40 | Whole page usable with keyboard only, in a logical order | Tab, Shift+Tab, Enter, Space, Escape | T |
| QA-41 | Focus always visible | Keyboard pass | T |
| QA-42 | Skip link works | Keyboard pass | M |
| QA-43 | One `h1`; no skipped heading levels; landmarks present | Browser accessibility tree or heading outline | T |
| QA-44 | Meaningful alt text; decorative images have empty alt | Inspect markup | T |
| QA-45 | Text and UI contrast meet AA | Contrast checker | T |
| QA-46 | Reduced motion removes movement and keeps content visible | Emulate `prefers-reduced-motion` in DevTools | T |
| QA-47 | Content reflows at 320 px width and is readable at 200% zoom | Browser zoom | M |
| QA-48 | Automated scan shows no serious or critical issues | Lighthouse accessibility audit; axe DevTools browser extension if available | M |
| QA-49 | Screen reader smoke test of navigation, menus and form | NVDA on Windows; VoiceOver on iPhone if available | M |
| QA-50 | Form errors are announced and linked to their fields | Screen reader and markup review | T (M5) |

## 7. Navigation and links

| ID | Check | How | When |
|---|---|---|---|
| QA-60 | Every header, dropdown, mobile menu and footer link goes to the right page | Click through | T |
| QA-61 | Products dropdown opens and closes by click, tap, keyboard and Escape; closes on outside click | Manual | T |
| QA-62 | Mobile menu traps and returns focus; scroll locked while open | Manual | T |
| QA-63 | Current page is marked in navigation | Manual | T |
| QA-64 | Unknown URLs show the 404 page with HTTP status 404 | Visit a made-up URL on preview and production | M |
| QA-65 | All internal links use the trailing slash (AD-02) | Search built HTML | M |
| QA-66 | External links open safely (`rel="noopener noreferrer"`) | Inspect markup | T |
| QA-67 | No broken links across the site | Full crawl with a link checker (tool approved before use) | L |

## 8. Enquiry form

| ID | Check | How | When |
|---|---|---|---|
| QA-70 | Required fields and email format are validated with clear messages | Manual | T (M5) |
| QA-71 | Focus moves to the first error; a summary is announced | Keyboard and screen reader | T (M5) |
| QA-72 | Button is disabled while sending; no double submission | Throttled network | T (M5) |
| QA-73 | Success message shown and announced | Real submission | T (M5) |
| QA-74 | Failure path keeps the data and offers WhatsApp and email | Simulate offline | T (M5) |
| QA-75 | Spam trap field drops automated submissions | Fill the hidden field via DevTools | T (M5) |
| QA-76 | A real submission arrives at the confirmed sales address (C-03) with all fields | Check the inbox; report time received | M (M5.4), L |
| QA-77 | Privacy Policy names the form service and what is collected (C-21) | Read the policy | L |

## 9. WhatsApp

| ID | Check | How | When |
|---|---|---|---|
| QA-80 | Before C-02: buttons are visibly inactive and not links; build warns | Inspect markup and build output | T |
| QA-81 | After C-02: number in the link matches the confirmed number exactly | Inspect link | M (M5.5), L |
| QA-82 | Default and product messages match the approved templates; product name inserted correctly | Click several product cards | M, L |
| QA-83 | Opens the WhatsApp app on Android and iPhone, and WhatsApp Web or desktop on a computer | Real devices | M (M5.5), L |
| QA-84 | Floating button shows only below `lg`, never covers content or controls, hides when the menu is open | Manual at phone widths | T |

## 10. Motion

| ID | Check | How | When |
|---|---|---|---|
| QA-90 | Cards reveal once and do not replay when scrolled back into view | Manual | T |
| QA-91 | Hover zoom and lift only on hover-capable devices; nothing essential depends on hover | Desktop and touch emulation | T |
| QA-92 | With JavaScript disabled, all content is visible | DevTools: disable JavaScript | M |
| QA-93 | The hero and first-screen content are never hidden by animation | Throttled load | T |
| QA-94 | No layout shift caused by animation | Lighthouse CLS, Performance panel | M |

## 11. SEO

| ID | Check | How | When |
|---|---|---|---|
| QA-100 | Unique title and description on every page, within the length rules | View source; compare pages | M, L |
| QA-101 | Absolute self-referencing canonical on every page | View source | L |
| QA-102 | `sitemap.xml` lists the nine indexable routes; `robots.txt` points to it | Open both on preview | L |
| QA-103 | Open Graph and Twitter tags present; share preview looks right | Social preview debugger or link preview in a messaging app | L |
| QA-104 | Structured data valid and uses only confirmed values | Rich Results Test / Schema.org validator | L |
| QA-105 | Preview deployments send `noindex`; production does not | Response headers | L |

## 12. Performance

| ID | Check | How | When |
|---|---|---|---|
| QA-110 | Lighthouse mobile scores against SEO_AND_PERFORMANCE.md §11.2 | Lighthouse on `npm run preview` | M (from M3) |
| QA-111 | Page budgets in SEO_AND_PERFORMANCE.md §11.3 | Build output and Network panel | M (from M2) |
| QA-112 | Hero image is the LCP element, loads eagerly with high priority | Performance panel | M (M3.1 onwards) |
| QA-113 | No third-party requests on page load | Network panel | M |
| QA-114 | Real-world Core Web Vitals | PageSpeed Insights on production | L |

## 13. Browsers

| ID | Check | How | When |
|---|---|---|---|
| QA-120 | Latest Chrome, Edge and Firefox on Windows | Manual pass of each page | M |
| QA-121 | Safari on iPhone (and macOS if available) | Real device | M, L |
| QA-122 | Chrome on Android (Samsung Internet if available) | Real device | M, L |

Last two major versions of each browser are supported. Browsers that cannot be tested locally are reported as Not run, with who will test them.

## 14. Security and privacy

| ID | Check | How | When |
|---|---|---|---|
| QA-130 | No secrets or private keys in the built site | Search `dist/` for key patterns | M, L |
| QA-131 | Security headers set on the host (AD-16) | Response headers on production | L |
| QA-132 | No analytics or tracking scripts unless approved (D-17) | Network panel | L |
| QA-133 | HTTPS enforced; HTTP redirects to HTTPS | Visit `http://` URL | L |

## 15. Launch readiness

All of master plan §14, plus:

| ID | Check | When |
|---|---|---|
| QA-140 | Every item in master plan §9 that affects public content is RESOLVED, or its section is removed with owner approval | L |
| QA-141 | Owner has approved every page and section (PROJECT_PLAN.md shows DONE) | L |
| QA-142 | Domain, HTTPS, slash redirects and 404 work on production | L |
| QA-143 | Post-deploy smoke test: every page loads, navigation, form submission, WhatsApp link (M7.4) | L |
| QA-144 | Sitemap submitted in Search Console by the owner | After launch |
| QA-145 | Rollback approach documented and understood (M7.5) | L |

## 16. Report template

```
Task: <ID and name>
Changed files: <list>
Checks:
  QA-01 Build ............ Pass (output: ...)
  QA-02 Type check ....... Not run (tooling not installed, C-16)
  QA-30 No h-scroll ...... Pass (360, 390, 768, 1024, 1280, 1440, 1920)
  ...
Known issues: <list, with C-IDs>
How to review: <command and URL>
```

## 17. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft: checks QA-01 to QA-145, usage rules, report template |
| 0.1 | 2026-10-25 | Approved by owner (D-21) |
