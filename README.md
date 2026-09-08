# Tabassamu Logistics Ltd — Website

Marketing site for Tabassamu Logistics Ltd, a Kenya-based freight and cargo
transport company connecting Nairobi to Tanzania through the Taveta border
crossing, with support from a Mombasa office.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript). Four pages:
Home, About, Services (& Coverage), and Contact.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — pages (`/`, `/about`, `/services`, `/contact`) and the root layout
- `components/` — shared `Nav`, `Footer`, `ContactForm`, `PlaceholderImage`
- `app/globals.css` — design tokens (color, type, spacing) and component
  classes (buttons, cards, nav, form fields)

## Known placeholders — swap before launch

- **Logo** (`public/brand/logo-mark.png`, `app/favicon.ico`): rasterized from
  the supplied logo PDF (a design mockup page, not a vector export). Fine for
  web use at current sizes; swap for a real vector (SVG/AI) file if the brand
  team produces one, for crisper scaling at large sizes.
- **Contact details** (`app/contact/page.tsx`): phone, WhatsApp and email are
  placeholders.
- **Photos**: hero/about images use a placeholder plate (`PlaceholderImage`).
  Replace with real photography by swapping in an `<Image>` where each
  `<PlaceholderImage label="..." />` is used.
- **Testimonials** (`app/page.tsx`): client quotes are placeholders pending
  real client feedback.
- **Track Shipment**: the "Track Now" button on the home page is wired to `#`
  — point it at TransportBook's public tracking URL once available.
- **Contact form** (`components/ContactForm.tsx`): currently client-side only
  (shows a confirmation, sends nothing). Wire it to a form backend or a
  Next.js API route + email/SMS provider before relying on it.

## Deploy

Deploys as-is on [Vercel](https://vercel.com/new) — import this repo, no
extra configuration needed.
