# ZERO website

Marketing site for ZERO (carbon accounting, ESG reporting, product LCA; Nashik, India).
Built from the approved design in [`design-handoff/`](design-handoff/) with **Astro 5 + TypeScript**.
Static output, almost no client JavaScript: only small inline scripts for the interactive pieces.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site to dist/
npm run preview    # serve dist/
npm run check      # astro check (types)
```

Node 20+ (built on 22).

## Deploy (Vercel)

1. Vercel → **Add New → Project** → import this GitHub repo.
2. Framework preset is detected as **Astro** (`vercel.json` also sets it). No build settings to change.
3. Deploy. Every push to `main` redeploys; every branch gets a preview URL.
4. Set the production domain, then update `site` in [`astro.config.mjs`](astro.config.mjs). Canonical URLs and the social share image depend on it.

`vercel.json` enables clean URLs (`/pricing` instead of `/pricing.html`).
Put the Vercel project under an account or team the developer can access.

## Where things live

```
src/
  pages/            one file per page (index, platform, services, pricing, free-tools, contact, about, blog, blog/[slug])
  layouts/Layout.astro        <head>/SEO, skip link, header, footer
  components/                 Header, Footer, Faq, BlogCard, ClientMarquee, AskHaathi, CheckList, home/*
  config/                     <- numbers and copy that other teams own (see below)
    calculator.ts             emission factors + calculator formulas
    esg.ts                    ESG questions, scoring thresholds, recommendations
    sbti.ts, lca.ts, haathi.ts, booking.ts, site.ts
  content/                    <- CMS-style content (typed collections, see content.config.ts)
    blog/*.md                 blog posts (frontmatter: title, category, readTime, order, date, author, cover, featured)
    data/pricing.json         plans, comparison rows, add-ons, pricing FAQ
    data/clients.json         client logos
    data/testimonials.json
    data/events.json          Net Zero Events
  styles/                     tokens.css (design tokens), fonts.css, global.css
  scripts/forms.ts            the single place form submissions go through
public/                       fonts, images, logos, favicons (served as-is)
design-handoff/               the approved design bundle: spec, tokens, reference pages and captures
docs/OPEN-ITEMS.md            what is still missing or undecided (read this first)
```

## Common edits

| To change | Edit |
| --- | --- |
| Blog post | add/edit a file in `src/content/blog/` |
| Prices, plans, add-ons | `src/content/data/pricing.json` |
| Client logos / testimonials / events | `src/content/data/*.json` |
| Contact email, phone, address | `src/config/site.ts` |
| Emission factors | `src/config/calculator.ts` |
| ESG questions or scoring | `src/config/esg.ts` |
| Colours, type | `src/styles/tokens.css` (colours only come from tokens) |

Design rules that must hold: buttons are `#3D7A22` with white text (hover `#2F6119`); never white text on `#78B840` or `#D9763A`; fonts are Bricolage Grotesque (headings, numbers) and Figtree (body); all motion respects `prefers-reduced-motion`.

## Forms have no backend yet

Contact booking, both newsletter forms, and "Get the full report" are wired to [`src/scripts/forms.ts`](src/scripts/forms.ts).
Set `PUBLIC_FORM_ENDPOINT` (see `.env.example`, and Vercel → Settings → Environment Variables) and submissions are POSTed there as JSON.
**Until it is set, nothing is sent and the UI says so**, so nobody thinks a lead was captured. Replace with the real provider and CRM.

## Status

Open decisions, placeholders and deliberate deviations from the design are tracked in [`docs/OPEN-ITEMS.md`](docs/OPEN-ITEMS.md).
