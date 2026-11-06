# Page specs

Order, components, ownership (static vs CMS), behaviour. Exact copy per section is in content.json; interactive-state copy is in design-source/*.dc.html (the script block at the bottom of each).

## Home

**Content ownership:** Static: hero, problem, sky-to-soil copy, platform tabs content, AI section, process, services summary, standards list, founder, FAQ (6 items, copy managed by marketing but low change rate), final CTA. CMS: client logos (5), testimonials (2), the Net Zero Events feature (1 event), latest 3 blog posts (pulled from Blog). Sample dashboard numbers are illustrative (static, labelled).

**Behaviour:**
- Header, footer, nav: see Components.
- Sky-to-soil rail: scroll listener marks the section whose top has passed 50% of the viewport as active (Atmosphere / Operations / Roots / New growth). Rail is decorative state, not anchors.
- Platform tabs (BRSR, GRI, CSRD, CDP): click swaps the report title, sub-title, completion % and three row labels. Default BRSR (86%).
- Ask Haathi tabs (3 questions): click swaps the question, answer and bar set. Default first question.
- Mini carbon calculator (electricity kWh/month default 25000, diesel L/month 1200, flights/month 40): live result. Scope 1 = diesel × 12 × 2.68 / 1000; Scope 2 = kWh × 12 × 0.71 / 1000; Scope 3 = trips × 12 × 0.25. Bars show shares.
- FAQ accordion: 6 items, single-open, first open by default.
- Client marquee: auto-scrolls, 40s linear.
- Hero: floating dashboard cards use sample figures (144.3 tCO2e; scope split 20.9 / 36.2 / 42.9%).
- CTA buttons: Book a demo → Contact; Try the free calculator → Free Tools#calculator.

**Sections:**
1. 01 Hero: Eyebrow tag, H1/Display, Primary + secondary button
2. 02 Clients: Logo carousel (marquee), Stat block
3. 03 Problem: Illustration (tangle), Note cards
4. 04 Sky to soil: Charts (bars, donut, reduction area), Illustrations, Scroll rail, Stat cards
5. 05 Platform: Card, Charts, Tabs (reports)
6. 06 Data connections: Chips, Illustration (flow)
7. 07 AI: Chart bars, Feature cards, Tabs (Ask Haathi)
8. 08 Process: Numbered step cards
9. 09 Services: Buttons, Service card, Tags
10. 10 Net Zero Events: Button, Empty-state box, Event card, Stat block
11. 11 Standards: Chips
12. 12 Free tools: Button, Calculator inputs, Result card, Stacked scope bar
13. 13 Testimonials: Testimonial
14. 14 Founder: Links, Portrait image, Pull quote
15. 15 FAQ: Accordion
16. 16 Blog: Article body, Blog card, Tag
17. 17 Final CTA: Primary button, Sprout illustration

## Platform

**Content ownership:** Static: all module copy, framework chips, stage data, SBTi simulator (sample baseline 144.3 tCO2e). CMS: none. Confirm connector list.

**Behaviour:**
- LCA stage selector (5 stages): click highlights the stage (others 45% opacity) and shows its note. Values per tote bag: Raw materials 1.84, Manufacturing 0.92, Distribution 0.31, Use 0.12, End of life 0.08 kgCO2e.
- SBTi simulator: slider 'annual reduction rate' (default 7%). Projection = 144.3 × (1 − rate)^n for 2024…2030. The 2030 target line sits at 58% of baseline. Status 'On track for SBTi 2030' when 2030 value ≤ 0.58 × baseline, else 'Off track · N t above target'.
- Anchors: #carbon, #esg, #lca (linked from footer and Services).

**Sections:**
1. 01 Platform hero: Card, Charts, Eyebrow tag, H1/Display, Primary + secondary button, Tabs (reports)
2. 02 Carbon Accounting: Section heading, Body text
3. 03 ESG Reporting: Buttons, ESG option buttons, Progress dots, Result ring
4. 04 Product LCA: Section heading, Body text
5. 05 AI predictive: Chart bars, Feature cards, Tabs (Ask Haathi)
6. 06 Data ingestion: Chips, Illustration (flow)
7. 07 CTA: Primary button, Sprout illustration

## Services

**Content ownership:** Static: three service cards, process steps. CMS: Net Zero Events (event cards, 'upcoming' empty state), testimonial quote.

**Behaviour:**
- Service cards link to Platform anchors (#carbon, #lca, #esg) and Contact.
- Net Zero Events (#events): featured event is CMS; the dashed 'Upcoming event: coming soon' box is the empty state, replaced by an upcoming-event card when one exists.
- Quote: static single quote (candidate CMS testimonial).

**Sections:**
1. 01 Services hero: Buttons, Eyebrow tag, H1/Display, Primary + secondary button, Service card, Tags
2. 02 Service list: Buttons, Service card, Tags
3. 03 Process: Numbered step cards
4. 04 Net Zero Events: Button, Empty-state box, Event card, Stat block
5. 05 Quote: Testimonial

## Pricing

**Content ownership:** Static: plan structure, comparison rows. CMS (recommended): prices, site limits, add-on list, pricing FAQ. All price values are placeholders.

**Behaviour:**
- Billing toggle (Billed yearly default / Billed monthly): switches the '/ year' vs '/ month' suffix. Price values are placeholders; no price difference is designed, so the discount logic is a decision.
- Plan CTAs: Get started / Book a demo / Talk to sales (target Contact; recommend passing the plan as a query param).
- FAQ accordion: 4 items, single-open.

**Sections:**
1. 01 Pricing hero: Eyebrow tag, H1/Display, Primary + secondary button
2. 02 Plans: Billing toggle, Plan card x3
3. 03 Compare: Comparison table
4. 04 Add-ons: Cards
5. 05 Pricing FAQ: Accordion

## Free Tools

**Content ownership:** Static: all copy. Config (not CMS): emission factors, question set, recommendation text and scoring thresholds should live in one config file/JSON, owned by the sustainability team.

**Behaviour:**
- Carbon calculator (#calculator): 6 number inputs, live results (formulas in Calculator logic below). No data leaves the page; the CTA goes to Contact.
- ESG assessment (#esg): 6 single-choice questions, auto-advance on click, Back available from question 2, progress dots, result screen. Details below.
- Hero chips scroll to #calculator and #esg.

**Sections:**
1. 01 Tools hero: Eyebrow tag, H1/Display, Primary + secondary button
2. 02 Carbon calculator: Button, Calculator inputs, Result card, Stacked scope bar
3. 03 ESG assessment: Buttons, ESG option buttons, Progress dots, Result ring

## Contact

**Content ownership:** Static: step copy. CMS/config: interest options, contact details, response-time promise. Backend: form submission + scheduling.

**Behaviour:**
- 3-step flow: Details → Time → Done. Step 1: interests (multi-select chips, default 'Carbon Accounting'), full name, work email, company, role, number of sites (1, 2–5, 6–20, 20+; default 1). 'Choose a time →' validates name and email (/.+@.+\..+/) else shows 'Add your name and a valid work email.'
- Step 2: next five weekdays (tomorrow onward, Sat/Sun skipped) and 8 slots (10:00, 10:30, 11:30, 12:00, 14:00, 15:00, 16:00, 17:30 IST). Two slots per day are shown as unavailable (pseudo-random placeholder). Confirm is disabled-looking (#D3E6C1) until a slot is picked. Back returns to step 1 keeping values.
- Step 3 (Done): confirmation with first name, email, chosen date/time and a summary of interests + site count; 'reset' returns to step 1.
- NOTHING IS SUBMITTED: no request is made on confirm. Backend, calendar availability and notifications are open items.

**Sections:**
1. 01 Book a demo: Buttons, Chips (multi-select), Date and time pickers, Form fields, Stepper

## Blog

**Content ownership:** CMS: all posts (title, category/tag, read time, cover, slug, body, date, author, featured flag), categories (All, Regulation, Scope 3, LCA, Trade, Events). Static: hero, newsletter band.

**Behaviour:**
- Category chips filter the grid client-side (All, Regulation, Scope 3, LCA, Trade, Events). Single-select; All default.
- Featured card and all cards link to Blog Article. Covers are image slots (CMS image, 4:3; featured 16:10).
- Newsletter form: no handler in the design.

**Sections:**
1. 01 Blog hero: Article body, Blog card, Eyebrow tag, H1/Display, Primary + secondary button, Tag
2. 02 Featured: Article body, Blog card, Tag
3. 03 Posts: Blog card, Chip filter, Tag
4. 04 Newsletter: Newsletter form

## Blog Article

**Content ownership:** CMS: everything in the article body template (title, tag, read time, date, author, cover, body blocks, sample chart, related posts). Static: layout and progress bar.

**Behaviour:**
- Reading progress bar: width follows how far the article body has scrolled (0–100%).
- Body includes a sample chart ('A sample footprint, by scope') as a template for data blocks; Related posts: 3 cards.
- Date is a placeholder.

**Sections:**
1. 01 Article: Article body, Blog card, Tag
2. 02 Related: Article body, Blog card, Tag

## About

**Content ownership:** Static: mission, story, founder bio, stats (confirm figures), careers CTA. CMS: client logos (shared with Home).

**Behaviour:**
- Client marquee (36s). Founder links (LinkedIn, GitHub, Email) have no real URLs. Careers: 'View open positions' has no target (page missing).

**Sections:**
1. 01 Mission: H1, Stat block
2. 02 Future: H1, Stat block
3. 03 Founder: Links, Portrait image, Pull quote
4. 04 Clients: Logo carousel (marquee), Stat block
5. 05 Careers: Button/link
