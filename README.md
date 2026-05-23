# justwhyus.ma

Dark, cinematic, multi-page brand identity site for a Moroccan creative studio that builds websites and digital systems for specific industries (restaurants, car rentals, travel, real estate, e-commerce, services).

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- next-intl (EN / FR / AR with RTL)
- next-themes (dark default)
- React Hook Form
- Lucide icons
- Space Grotesk + Inter + Tajawal (Arabic)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

If you hit memory pressure during the lint pass, prepend `NODE_OPTIONS="--max-old-space-size=4096"`.

## Structure

```
src/
├── app/[locale]/             # Locale-scoped pages
│   ├── page.jsx              # Home
│   ├── what-we-do/
│   ├── why-us/
│   ├── industries/[slug]/
│   ├── blog/ + blog/[slug]/
│   ├── faq/
│   └── contact/
├── components/
│   ├── layout/               # Navbar, Footer, ThemeProvider, LoadingScreen
│   ├── ui/                   # Button, Card, Badge, Accordion, ScrollReveal
│   ├── home/                 # Section components for the home page
│   ├── industry/             # IndustryPageTemplate
│   ├── blog/                 # BlogList
│   ├── faq/                  # FAQContent
│   └── contact/              # ContactForm
├── config/
│   ├── industries.config.js  # All industry data, multilingual
│   └── blog.config.js        # Sample blog posts
└── i18n.js                   # next-intl config

messages/
├── en.json
├── fr.json
└── ar.json
```

## Adding a new industry

Edit `src/config/industries.config.js` and add a new entry. The `/industries/[slug]` route picks it up automatically.

## Adding a blog post

Edit `src/config/blog.config.js`.

## i18n

Three locales: `en` (default, no prefix), `fr`, `ar`. AR triggers `dir="rtl"` automatically. Layouts use logical Tailwind properties (`ps-*`, `pe-*`, `start-*`, `end-*`) so they mirror cleanly.

## Contact endpoints

Both `hello@justwhyus.ma` and `wa.me/212600000000` are placeholders — search & replace before deployment. The contact form currently logs to console; plug Formspree, Resend, or your own endpoint into `src/components/contact/ContactForm.jsx`.

## Deployment

Built for Vercel. Push to a Git repo, import on Vercel, done — no env vars required for the base site.
