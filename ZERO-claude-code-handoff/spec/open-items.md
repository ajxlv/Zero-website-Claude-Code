# Open items

## Blocking: scope and structure
- Net Zero Events, ESG Assessment and Carbon Calculator are SECTIONS in the approved design (Services #events; Free Tools #esg and #calculator), not separate pages. Decide: keep as sections, or make three standalone pages (needs design).
- No Terms, Privacy, Careers/open positions, Case study or Contact-success pages exist (footer links are href="#").
- Mobile (390) and tablet (768) layouts were never designed: the build is desktop-first and flexes. Home 'Sky to soil' (rail + stacked cards) is cramped at 390 and some cards clip. A mobile design pass is needed before build sign-off.

## Placeholders in the design
- Footer + Contact: [ADD email], [ADD phone], [ADD office address] (also About/Contact).
- Contact: 'A scoped proposal within [ADD X] working days.'
- Pricing: [₹X] (Essentials), [₹Y] (Growth), 'Custom' (Enterprise); 'Up to [N] sites'; comparison row Sites '[N]'; FAQ answers '[ADD onboarding terms]', '[ADD upgrade / downgrade terms]', '[confirm]'.
- Blog: all eight post titles are illustrative ('[ADD real posts]'); Blog Article date '[ADD date]', author, body copy, sample chart.
- Platform: '[confirm connector list]' for the data-ingestion chips (ERP, Utility bills, Fuel & fleet, Business travel, Procurement, HR systems, Meters, Spreadsheets).
- Home FAQ: '[confirm default refresh cadence]' for how often data updates.
- Free Tools: '[confirm factors]' on the calculator factors.
- Stats to confirm: 10+ domains, 15+ years of experience (company founded 2020: confirm what 15+ refers to), 3+ countries, 'Trusted across 10+ domains in 3+ countries'.
- Client list: 5 logos supplied (Bajajsons Limited, Shree Krishna Paper Mills, KOSO, Jiwya, Mate Tree Free Paper) as PNG only; need SVG masters and permission to display each.
- Testimonials: 2 on Home (Aishwarya Lahariya, Jiwya; Vedant Rathi, WRS Energy) + 1 on Services: confirm approval to publish and need headshots/logos if wanted.
- Founder: LinkedIn, GitHub and Email URLs for Karan Racca.
- Sample dashboard figures (144.3 tCO2e etc.) are illustrative and labelled; confirm whether to keep a labelled sample or use a real anonymised dataset.

## Decisions not made in the design
- Forms backend: Contact booking, footer newsletter, blog newsletter, calculator and ESG 'Get the full report' have no submit action. Choose provider, fields stored, consent/privacy copy, success and error states, spam protection, and where leads go (CRM / email).
- Scheduling: slots in the Contact flow are generated placeholders. Pick a scheduler (Google Calendar, Calendly, Cal.com) and real availability, time-zone handling (currently labelled IST).
- CMS: choose (e.g. headless CMS vs. markdown/Git) for blog posts, events, testimonials, client logos, pricing. Blog needs categories, slugs, SEO fields, RSS.
- Analytics and consent banner: none specified (events to track: Book a demo, calculator interaction, ESG completed, newsletter).
- Calculator emission factors: illustrative (grid 0.71 kgCO2e/kWh, diesel 2.68 kg/L, petrol 2.31 kg/L, LPG 2.98 kg/kg, 0.25 t per return flight, 0.6 t per employee commute/yr). Need the sourced, dated factors (CEA India grid factor / DEFRA / IPCC), and a decision whether the Home mini-calculator and Free Tools calculator share one engine (their defaults differ: Home flights/month 40 vs Free Tools 4, so totals are 371.6 vs 327.1 t).
- ESG assessment scoring: 0/1/2 per answer, thresholds Leading ≥70, Developing ≥40, else Getting started: confirm with the sustainability team. Result is not saved or emailed.
- Pricing: billing toggle shows no price difference; decide discount and currency/GST display.
- Accessibility: the design defines hover only. Focus, active and disabled states shown here as 'Proposed' need sign-off. Skip link, landmarks, keyboard support for tabs/accordion/menu, alt text for CMS images.
- prefers-reduced-motion is implemented on Home, Platform and About only; apply globally.
- Dark mode: Home has dark token sets in code (--bg #0B1C10 etc.) but they were not approved: out of scope unless requested.
- SEO/meta: page titles and descriptions in these files are provisional; OG image is a provisional 1200×630 made from the logo.
- Hosting, domain, redirects, 404 page, cookie/consent, legal pages.

## Assets still needed
- Master vector logo: the SVG logo files are auto-traced from the 600px PNG and should be replaced with the original vector artwork. Logo lock-up/clear-space rules not supplied.
- Client logos in SVG; WRS Solutions logo usage rights.
- Product screenshots at true 2x (supplied rasters are ~760–820px wide); re-export from the product.
- Icon set: the design contains only 3 line icons (leaf, fuel, energy). No Scope 3 icon, social icons (footer uses text 'in') or UI icon set exists; supply or approve an icon library.
- Favicon: provisional (logo centred on a transparent square). A dedicated square mark is advisable.
- Photography: event photo, three service images and founder portrait are single supplied rasters (no originals).
- Fonts: Bricolage Grotesque and Figtree are Google Fonts (SIL OFL); WOFF2 subsets are supplied. Confirm self-hosting vs. Google Fonts CDN. The files are Latin / Latin-ext / Vietnamese subsets only.
