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

## Contact form

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which sends
the message as an email via [Resend](https://resend.com). It also carries a
honeypot field (`website`) to quietly drop bot submissions.

Set these environment variables (copy `.env.example` to `.env.local` for
local dev, and add the same three in the Vercel project's Settings →
Environment Variables for production):

- `RESEND_API_KEY` — from your Resend dashboard
- `CONTACT_FROM_EMAIL` — must be on a domain verified in Resend, e.g.
  `"Tabassamu Website <noreply@yourverifieddomain>"`
- `CONTACT_TO_EMAIL` — the real inbox that should receive quote requests
  (no verification needed on the receiving side)

Without these set, the API route responds with a graceful error (the form
tells the visitor to try WhatsApp instead) rather than crashing.

## Known placeholders — swap before launch

- **Logo** (`public/brand/logo-mark.png`, `app/favicon.ico`): rasterized from
  the supplied logo PDF (a design mockup page, not a vector export). Fine for
  web use at current sizes; swap for a real vector (SVG/AI) file if the brand
  team produces one, for crisper scaling at large sizes.
- **Photos**: hero/about images use a placeholder plate (`PlaceholderImage`).
  Replace with real photography by swapping in an `<Image>` where each
  `<PlaceholderImage label="..." />` is used.
- **Testimonials** (`app/page.tsx`): client quotes are placeholders pending
  real client feedback.
- **Track Shipment**: the "Track Now" button on the home page is wired to `#`
  — point it at TransportBook's public tracking URL once available.

## Deploy

Deploys on [Vercel](https://vercel.com/new) — import this repo, then set the
three contact-form environment variables above in the project settings
before the "Send Request" button will actually deliver email.
