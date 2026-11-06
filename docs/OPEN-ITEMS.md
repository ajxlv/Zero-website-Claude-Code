# Open items and deviations

Placeholders are intentionally visible as `[ADD ...]` / `[confirm ...]` in the UI. Search the repo for `[ADD` and `[confirm` to find them.
Original design-side list: [`design-handoff/spec/open-items.md`](../design-handoff/spec/open-items.md). This file adds what the build decided or changed.

## Must be supplied before launch

**Contact and company**
- Email, phone, office address (footer, Contact, About): `src/config/site.ts`
- "A scoped proposal within [ADD X] working days": `site.contact.responseDays`
- Founder LinkedIn / GitHub / Email URLs: `site.founder`; footer LinkedIn URL: `site.social`
- Production domain: `site` in `astro.config.mjs`

**Pricing** (`src/content/data/pricing.json`): `[₹X]`, `[₹Y]`, `[N]` sites, FAQ answers `[ADD onboarding terms]`, `[ADD upgrade / downgrade terms]`, `[confirm]`. Billing toggle only changes the `/ year` vs `/ month` suffix; discount and currency/GST display are undecided.

**Content**
- Blog: all 9 posts are illustrative titles with placeholder bodies, no dates, no covers (`src/content/blog/`). `[ADD date]`, `[ADD author]`.
- Platform and Home data-ingestion chips: `[confirm connector list]`
- Home FAQ: `[confirm default refresh cadence]`
- Stats to confirm: 10+ domains, **15+ years** (company founded 2020: what does 15+ refer to?), 3+ countries
- Calculator factors are illustrative (`src/config/calculator.ts`): need sourced, dated factors (CEA India grid / DEFRA / IPCC). Decide whether Home mini-calculator and Free Tools calculator share one engine (they do share factors; defaults differ, giving 371.6 t vs 327.1 t).
- ESG scoring (0/1/2 per answer; Leading >= 70, Developing >= 40): confirm with the sustainability team (`src/config/esg.ts`). Result is not saved or emailed.
- Testimonials: confirm permission to publish; headshots wanted? (the Home quote has an empty headshot slot)
- Client logos: SVG masters and display permission for each (PNG only today)
- Sample dashboard figures (144.3 tCO2e etc.) are labelled as samples: keep, or use a real anonymised dataset?

**Assets**
- Master vector logo (the SVGs are auto-traced from a 600px PNG). The footer shows the ink logo turned white with a CSS filter because no white master exists.
- Product screenshots at true 2x (supplied ones are ~760px wide)
- Blog covers, team photo (About), service photos are single supplied rasters
- Icon set / social icons (footer uses the text "in")
- Dedicated square favicon mark

## Decisions the design did not make

- **Forms backend**: provider, fields stored, consent copy, success/error states, spam protection, where leads go. See "Forms have no backend yet" in the README.
- **Scheduling**: the Contact time slots are generated placeholders (two "unavailable" per day, pseudo-random). Pick Google Calendar / Calendly / Cal.com and real availability.
- **CMS**: blog, events, testimonials, clients and pricing are typed content collections (`src/content.config.ts`). Choose a headless CMS or keep markdown/Git. Blog still needs RSS, categories and SEO fields beyond title/excerpt.
- **Analytics and cookie consent**: none yet. Events worth tracking: Book a demo, calculator interaction, ESG completed, newsletter.
- **Pages that do not exist**: Privacy, Terms, Careers / open positions, case study, Contact-success, 404. Footer and About links are `#` placeholders (marked `TODO` in the source).
- **Scope**: Net Zero Events, ESG Assessment and Carbon Calculator are *sections* (Services `#events`; Free Tools `#esg`, `#calculator`), as in the approved design.
- **Dark mode**: tokens exist in the design source but were never approved. Not built.
- **Hosting**: domain, redirects, legal pages.

## Deviations from the design (deliberate, review them)

| Where | Design | Build | Why |
| --- | --- | --- | --- |
| Mobile (390) and tablet (768) | Not designed (desktop flexed) | Derived layouts: diagrams (tangle, LCA loop, data flow, process cycle) reflow to stacks/grids; sky-to-soil rail hidden under 1100px | Definition of done needs no horizontal scroll. **Needs a designer's pass.** |
| Services, Net Zero Events | "200 participants" in the meta line, "177" everywhere else | 177 (from the events data) | Design was internally inconsistent. Confirm the real number. |
| Services "Our process" cards | Cream text on lightened moss (3.87:1) | Darker card tint, near-white text | WCAG AA |
| About founder tags | Cream on lightened moss (3.7:1) | Darker tint | WCAG AA |
| Platform LCA stage rows | Whole inactive row at 45% opacity (1.9:1) | Only the bar is dimmed; labels stay full strength | WCAG AA |
| Pricing comparison dashes | `--line` colour (fails contrast) | `--ink2` | WCAG AA |
| Focus, active, disabled, error states | "Proposed" in the handoff | Implemented: visible 3px focus ring, `aria-` states, skip link, keyboard tabs/accordion/menu | Needs sign-off |
| Booking "confirm" | Always showed "calendar invite is on its way" | Says so only when a form endpoint is configured; otherwise shows "nothing was sent" | Avoid implying a booking exists when none does |
| Reduced motion | Implemented on Home, Platform, About only | Global | Handoff rule |
| Fonts | Google Fonts CDN link | Self-hosted WOFF2 (Latin, Latin-ext, Vietnamese subsets) | Handoff rule; confirm |

Behaviour worth knowing: the Platform SBTi simulator defaults to a 7% reduction rate, which is *Off track* (2030 value 93 t vs target 84 t). That is what the design's formula gives; 9% is the first rate that gets on track.

## Verified

- `npm run check`: 0 errors, 0 warnings.
- Page heights at 1440 are within 2% of the design captures on every page (Contact is the largest gap, 1430 vs 1404 px). Side-by-side visual comparison against the 1440 captures was done on all nine pages except Blog Article; the differences seen are the deliberate ones listed above.
- No horizontal scroll at 1440, 768 and 390 on any page.
- axe-core (WCAG 2.0/2.1 A and AA): 0 violations on all nine pages in their default state.
- Interaction tests pass: calculators, ESG scoring (best = 100 Leading, worst = 0 Getting started), Platform tabs, Haathi tabs, FAQ single-open, billing toggle, blog filter, reading progress, booking flow.

Not verified: real devices, screen-reader walkthrough, Safari/Firefox, Lighthouse scores, and any state beyond each page's default and the flows above.
