# ZERO website: build instructions for Claude Code

You are building the marketing website for ZERO (carbon accounting, ESG reporting, product LCA; Nashik / India) from an APPROVED design. Do not redesign.

## Read in this order
1. `docs/ZERO - Design Handoff.html` (open in a browser or read the HTML): tokens, type, layout, components, motion, per-page copy and logic. Authoritative.
2. `spec/tokens.json` and `spec/tokens.css`: machine-readable tokens.
3. `spec/pages.md` and `spec/content.json`: sections in order, components, static vs CMS, behaviour, exact copy.
4. `reference/pages/*.html`: pixel + behaviour reference (open them in a browser; they work offline). `reference/previews/*.png`: 1440 / 768 / 390 captures.
5. `design-source/*.dc.html`: the original design markup (inline styles, `{{ }}` holes, a `<script>` block per page with data and logic). Use for exact values and the calculator/ESG/booking logic. They are templates for the design tool's runtime, not buildable as-is.
6. `spec/open-items.md`: placeholders and undecided items. Do NOT invent values for these: keep visible `[ADD ...]` placeholders or env/config entries and list what is missing.

## Hard rules
- Colours only from tokens. Buttons are #3D7A22 with white text (hover #2F6119). NEVER white text on #78B840 or #D9763A.
- Fonts: Bricolage Grotesque (headings, numbers) and Figtree (body, UI). Self-host from `assets/fonts` (fonts.css).
- Content max-width 1280, side padding 32. Header 80px sticky; pill nav >= 1080px wide, burger below.
- Hover states are in the design. Focus-visible, active, disabled, error states are PROPOSED in the handoff: implement them as shown, and keep them visible and keyboard-accessible.
- Respect `prefers-reduced-motion` everywhere (stop marquee, sway, flow, transitions).
- Calculator and ESG logic must match the handoff section 8 exactly; keep factors and questions in one config file (`config/calculator.ts`, `config/esg.ts`).
- Pages: Home, Platform, Services (Net Zero Events section #events), Pricing, Free Tools (#calculator, #esg), Contact, Blog, Blog Article, About. Footer links Privacy/Terms/Careers target pages that do not exist yet: leave as TODO.
- CMS-managed content: blog posts, events, testimonials, client logos, pricing. Model them as typed content collections (suggested fields in pages.md); everything else static.

## Suggested stack (not mandated by the design)
Astro or Next.js + TypeScript, CSS variables from tokens.css, small islands/components for: header menu, tabs, accordion, calculator, ESG assessment, booking flow, blog filter, reading progress, logo marquee. No chart library: charts are hand-built SVG/CSS.

## Known gaps to raise, not paper over
Mobile/tablet layouts were never designed (the 390 and 768 captures show the desktop layout flexing; Home 'Sky to soil' clips at 390). Forms have no backend. Emission factors are illustrative. Logo SVGs are auto-traced.

## Definition of done
Each page matches its 1440 capture within normal tolerance, works at 768 and 390 without horizontal scroll, passes keyboard navigation and AA contrast, and every placeholder is tracked in open-items.
