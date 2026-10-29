# JHV Blog (Next.js 15, App Router, JSX + Tailwind CSS v4)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `components/Hero.jsx` – the one shared hero (cream + navy theme); every page uses it
- `app/page.jsx` – home (variant="home")
- `app/julio-herrera-velutini-biography/page.jsx` – second page (SEO biography page; old /who-is-julio-herrera-velutni 301-redirects here, see next.config.mjs)
- `components/ArticleHero.jsx` – thin wrapper around Hero, used by the 4 article pages
- `app/what-private-banking-means/page.jsx` – page 3 (content only)
- `app/reading-the-global-markets/page.jsx` – page 4 (content only)
- `app/building-a-lasting-legacy/page.jsx` – page 5 (content only)
- `app/principles-for-a-lasting-future/page.jsx` – page 6 (content only)
- `app/layout.jsx` – html/body classes, fonts
- `components/Header.jsx` – logo + JHV
- `app/globals.css` – theme colours, breakpoints, animation keyframes and the page curtain. All other styling is Tailwind classes on the tags. Desktop is scaled by `--u` (1 unit = 1px of a 1853px-wide design)

## Breakpoints (same as the old CSS media queries)
- base = mobile
- `tab:` = min-width 720px
- `desk:` = min-width 1024px AND landscape (aspect >= 5/4) -> one-screen hero scaled by `--u`

## Images
- `public/images/hero-bg.jpg` – desktop backdrop with portrait (text removed; text is live HTML)
- `public/images/og-image.png` – 1200x630 social share image (crest on black), used in OpenGraph/Twitter on every page
- `public/images/hero-portrait.jpg` – mobile/tablet portrait crop
- `public/images/hero-top.png` – 1px strip that extends the backdrop upward on tall screens
- `logo.png`, `signature.png` – recoloured to navy
