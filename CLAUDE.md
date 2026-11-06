# ZERO website

Astro 5 + TypeScript static site. Read `README.md` first and `docs/OPEN-ITEMS.md` for what is undecided.

- The approved design is in `design-handoff/` (authoritative for tokens, copy, behaviour). Do not redesign.
- Colours only from `src/styles/tokens.css`. Buttons `#3D7A22` with white text; never white text on `#78B840` / `#D9763A`.
- Never invent placeholder values (prices, contact details, posts). Keep the visible `[ADD ...]` markers and list them in `docs/OPEN-ITEMS.md`.
- Factors, ESG questions and scoring live in `src/config/`. CMS-style data lives in `src/content/`.
- Respect `prefers-reduced-motion`. Keep focus states visible and everything keyboard-operable.
- Before finishing a change: `npm run check` and `npm run build`.
