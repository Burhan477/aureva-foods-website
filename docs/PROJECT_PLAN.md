# AUREVA FOODS — Project Plan

| | |
|---|---|
| Version | 0.5 |
| Last updated | 2026-10-25 |
| Status | APPROVED by owner, 2026-10-25 |
| Coordinated by | [AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md](AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md) |

## 1. Status and scope

This document breaks the milestone sequence (master plan §11, decision D-04) into tasks, with each task's deliverables, dependencies, acceptance criteria and status. It is the place to look for "what is next and what is it waiting on".

The approval workflow (master plan §12) and the open-items register (master plan §9) are not repeated here; tasks refer to them by ID. The full test list will live in [QA_CHECKLIST.md](QA_CHECKLIST.md).

## 2. Status values

| Status | Meaning |
|---|---|
| NOT STARTED | No plan presented yet |
| PLANNED | Plan presented to the owner, awaiting approval |
| APPROVED TO BUILD | Owner approved the plan; work may start |
| IN PROGRESS | Being implemented |
| IN REVIEW | Implemented, checks reported, awaiting owner review |
| CHANGES REQUESTED | Owner asked for changes; returns to IN PROGRESS |
| DONE | Owner explicitly approved the result |
| BLOCKED | Cannot finish until a listed open item is resolved |

A task moves forward only on the owner's explicit word. A task can be DONE with a dependency still open only if the open part is clearly marked (for example a WhatsApp link that stays inactive until C-02) and the owner accepts it.

## 3. Definition of done

**Task:** the approved scope is implemented and nothing outside it changed; the checks in master plan §12.3 were run and their real output reported; changed files and remaining issues are listed; content follows master plan §5 with every placeholder labelled; the owner has approved the result.

**Milestone:** every task is DONE; the milestone exit gate (§4) is met; the status here and in master plan §11 is updated; the owner explicitly authorises the next milestone.

**Documentation task:** the document exists in `docs/`; every fact traces to a source (S-xx), decision (D-xx) or labelled assumption; new decisions and open items are added to the master plan; every C-/D- reference resolves; the owner approves it.

## 4. Milestones and tasks

### P0 — Planning foundation — DONE (2026-10-25)

**Goal:** an approved, single source of truth before any application code changes.
**Exit gate:** all ten documents approved. No application code changes in P0.

| Task | Deliverable | Depends on | Status |
|---|---|---|---|
| P0.1 | Read-only audit of repository and sources | — | DONE (2026-10-25) |
| P0.2 | AUREVA_FOODS_MASTER_DEVELOPMENT_PLAN.md | P0.1 | DONE (2026-10-25) |
| P0.3 | BRAND_GUIDELINES.md | P0.2 | DONE (2026-10-25) |
| P0.4 | SITE_STRUCTURE.md | P0.2 | DONE (2026-10-25) |
| P0.5 | PROJECT_PLAN.md (this file) | P0.4 | DONE (2026-10-25) |
| P0.6 | ARCHITECTURE_DECISIONS.md | P0.5; decides C-15, C-17 approach | DONE (2026-10-25) |
| P0.7 | DESIGN_SYSTEM.md | P0.3, P0.6 | DONE (2026-10-25) |
| P0.8 | COMPONENT_INVENTORY.md | P0.4, P0.7 | DONE (2026-10-25) |
| P0.9 | ASSET_GUIDELINES.md | P0.3 | DONE (2026-10-25) |
| P0.10 | SEO_AND_PERFORMANCE.md | P0.4, P0.6 | DONE (2026-10-25) |
| P0.11 | QA_CHECKLIST.md | P0.6 to P0.10 | DONE (2026-10-25) |

### M1 — Project foundation — IN PROGRESS

**Goal:** a clean, checked codebase with tokens and conventions in place, and no visible pages yet.
**Task status:** M1.1, M1.2 and M1.3 IN REVIEW (2026-10-25); M1.4 to M1.6 NOT STARTED.
**Exit gate:** build, type check, lint and format check all pass, with real output reported; owner approval.

| Task | Deliverable | Depends on | Acceptance criteria |
|---|---|---|---|
| M1.1 | Quality tooling: TypeScript, `@astrojs/check`, ESLint and Prettier with Astro, TypeScript and React support | C-16 (dependency approval), P0.6 | Each package's purpose and maintenance cost stated and approved before install; no existing package upgraded |
| M1.2 | npm scripts: `dev`, `build`, `preview`, `check`, `lint`, `format`, `format:check` | M1.1 | Every script runs; output reported |
| M1.3 | Starter removal and base document: remove `Welcome.astro` and starter assets; base layout with `lang="en"`, full viewport tag, global stylesheet imported | P0.6 | No starter content left; build passes |
| M1.4 | Design tokens in `global.css` using Tailwind v4 `@theme` | P0.7 | Tokens match DESIGN_SYSTEM.md and D-01 exactly; no unapproved colours |
| M1.5 | Folder and data conventions; central data files for site settings, contact settings (unresolved values marked BLOCKED) and the product catalogue from SITE_STRUCTURE.md §5 | P0.6, D-14 | Data typed; product names match D-14; no invented values |
| M1.6 | Production `site` URL in Astro config | C-18 | DONE 2026-10-27: `https://aurevafoods.com` |

### M2 — Shared shell — NOT STARTED

**Goal:** the layout every page shares.
**Exit gate:** desktop and mobile review of the shell on a placeholder page; owner approval.

Each task is planned and approved separately; small related primitives (M2.2) may be reviewed together if the owner agrees.

| Task | Deliverable | Depends on | Acceptance criteria |
|---|---|---|---|
| M2.1 | Font loading (DM Serif Display, Inter) | P0.6, P0.7 | Approved weights only; fallbacks set; no visible layout shift |
| M2.2 | Primitives: container, section, button, link | P0.7, P0.8 | Match DESIGN_SYSTEM.md; visible focus; touch targets meet the agreed size |
| M2.3 | Header with navigation, Products dropdown and mobile menu | M2.2, P0.8, D-10 | Works by mouse, keyboard and touch; current page marked; no horizontal overflow |
| M2.4 | Footer | M2.2, C-20, C-29 | Links per SITE_STRUCTURE.md §3.2; blocked items shown only as marked placeholders or omitted |
| M2.5 | WhatsApp CTA component and mobile floating button | M2.2, D-13, C-01, C-02 | Single shared configuration; link inactive until C-02 is resolved; floating button never covers content or controls |
| M2.6 | 404 page | M2.3, M2.4, D-11 | Links to Home, Products and Contact; not in navigation |

### M3 — Homepage — NOT STARTED

**Goal:** the ten home sections (S-01 #1–10; #11 is the M2 footer).
**Exit gate:** each section approved before the next is started.

| Task | Section | Depends on | Notes |
|---|---|---|---|
| M3.1 | Hero | C-14 | Image needs cleared licence; DRAFT-TEMP copy |
| M3.2 | About Aureva Foods | C-08 | DRAFT-TEMP copy |
| M3.3 | Our Product Categories | — | First use of category cards |
| M3.4 | Featured Spices | D-12, C-14 | First use of product cards and product-card motion (D-06) |
| M3.5 | Dehydrated Products Showcase | D-12, C-10, C-14 | Reuses product cards |
| M3.6 | Fresh Fruits & Vegetables Showcase | D-12, C-14 | Reuses product cards |
| M3.7 | Why Aureva Foods | C-12 | DRAFT-TEMP copy for owner review |
| M3.8 | Quality & Compliance | C-05, C-06 | BLOCKED for final content; layout may be built with marked placeholders |
| M3.9 | Global Presence | C-07 | BLOCKED for final content |
| M3.10 | Business Enquiry CTA | M2.5 | Reusable on every page |

### M4 — Product pages — NOT STARTED

**Goal:** Products Overview and the three category pages, in SEO priority order.
**Exit gate:** each page approved section by section; product data matches D-14.

| Task | Page | Depends on | Notes |
|---|---|---|---|
| M4.1 | Products Overview | M3.3, M3.10 | 5 sections, all READY |
| M4.2 | Spices | C-11, C-05, C-06, C-08, C-12 | Specifications and Quality & Processing BLOCKED; falls back to an enquiry prompt |
| M4.3 | Dehydrated Products | C-10, C-11 | Product forms open (C-10) |
| M4.4 | Fresh Fruits & Vegetables | — | Availability & Supply BLOCKED; falls back to an enquiry prompt |

### M5 — About and Contact — NOT STARTED

**Goal:** company and contact pages, with a working enquiry path.
**Exit gate:** facts verified; form and WhatsApp tested end to end.

| Task | Deliverable | Depends on | Notes |
|---|---|---|---|
| M5.1 | About Us page | C-05, C-06, C-07, C-08 | 3 of 7 sections BLOCKED |
| M5.2 | Contact page layout and contact details | C-01, C-03, C-04, C-19 | — |
| M5.3 | Enquiry form (fields, validation, accessible errors) | P0.6, P0.8 | Form UI only; no claim that it sends |
| M5.4 | Form delivery to the sales mailbox | D-16, C-18, C-03 | Tested with a real submission; result reported |
| M5.5 | WhatsApp activation with the confirmed number and message | C-01, C-02 | Tested on a phone and a desktop; result reported |

### M6 — Legal, SEO and quality — NOT STARTED

**Goal:** launch-ready content, metadata and measured quality.
**Exit gate:** actual check results reported; legal text and claims reviewed by the owner.

| Task | Deliverable | Depends on |
|---|---|---|
| M6.1 | Privacy Policy | D-16, D-17, C-21, C-29 |
| M6.2 | Terms & Conditions | C-21, C-29 |
| M6.3 | Page metadata and canonical URLs | C-18, P0.10 |
| M6.4 | Sitemap and robots | C-18, P0.10 (any new package needs approval) |
| M6.5 | Structured data, verified facts only | P0.10, C-29 |
| M6.6 | Accessibility audit and fixes | P0.11 |
| M6.7 | Performance measurement and fixes | P0.10 |
| M6.8 | Browser and responsive testing | P0.11 |
| M6.9 | Content verification pass: no TEMPORARY or UNVERIFIED content left on public pages | All content items in master plan §9 |

### M7 — Deployment and handover — NOT STARTED

**Goal:** the site live on the confirmed domain, with handover notes.
**Exit gate:** owner authorises production deployment; production checks documented.

| Task | Deliverable | Depends on |
|---|---|---|
| M7.1 | Hosting setup and environment variables | C-18, C-17 |
| M7.2 | Preview deployment and review | M7.1 |
| M7.3 | Production deployment | Owner authorisation, master plan §14 |
| M7.4 | Smoke tests on production (pages, links, form, WhatsApp) | M7.3 |
| M7.5 | Handover notes and rollback approach | M7.4 |

## 5. Owner inputs by milestone

The earliest milestone that needs each open item (from master plan §9). Supplying these early prevents placeholders from piling up.

| Needed by | Open items |
|---|---|
| M1 | C-16 (approve dev tooling) |
| M2 | C-01, C-02 (WhatsApp number), C-13 (approve supplied logo; light version; header lockup), C-20 (social links), C-29 (legal name) |
| M3 | C-05 (credential documents), C-06 (claims), C-07 (markets), C-08 (business model), C-12 (strengths), C-14 (photography) |
| M4 | C-10 (product forms), C-11 (specifications) |
| M5 | C-03 (email), C-04 (partner details), C-18 (hosting and form service), C-19 (address) |
| M6 | C-18 (domain), C-21 (legal review) |

## 6. Risks

| Risk | Effect | Mitigation |
|---|---|---|
| Content blockers stay open | Many sections stay as placeholders; launch slips | §5 lists inputs early; BLOCKED sections built as layout so content can be dropped in |
| No licensed photography | Weak hero and showcases | Agree a sourcing plan in ASSET_GUIDELINES.md before M3.1 |
| Credentials or claims cannot be verified | "Quality" sections reduced | Neutral wording (BRAND_GUIDELINES.md §10); sections designed to work without logos |
| Form delivery undecided | Contact page cannot launch | Decide C-17 with C-18 during P0.6 |
| Scope creep (extra pages or features) | Delay, inconsistency | Change control (master plan §10) |

## 7. Revision history

| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-10-25 | First draft: task breakdown P0–M7, status values, definition of done, owner inputs, risks |
| 0.1 | 2026-10-25 | Approved by owner; P0.5 DONE, P0.6 IN REVIEW |
| 0.1 | 2026-10-25 | Reference update only: "analytics decision" now points to C-30 |
| 0.2 | 2026-10-25 | P0.6 DONE; P0.7 to P0.11 drafted and IN REVIEW; owner inputs updated for D-15 to D-17 and C-31 to C-33 |
| 0.3 | 2026-10-25 | P0.7 to P0.11 approved; P0 DONE; owner inputs updated for D-19 to D-21 |
| 0.4 | 2026-10-25 | M1 started; M1.1 (tooling) and M1.2 (scripts) implemented and IN REVIEW (D-22) |
| 0.5 | 2026-10-25 | M1.3 implemented and IN REVIEW: starter removed, `BaseLayout.astro` created |
