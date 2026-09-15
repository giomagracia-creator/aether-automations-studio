# Aether Automations Studio

Demo marketing one-pager for **Aether Automations** (placeholder brand) — Project A for Gio Magracia.

Built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **framer-motion**.

## Sections

1. Hero — AI automations for inbox, websites, ops + CTA
2. Services — Inbox automation / Animated live websites / Ops automations
3. How it works — three steps
4. Contact form — name, email, message (Formspree)
5. Footer — clearly labeled demo / placeholder

## Getting started

```bash
npm install
cp .env.example .env.local
# set NEXT_PUBLIC_FORMSPREE_FORM_ID
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Yes (for form submit) | Formspree form ID. Without it, the contact section shows a clear "form needs configuration" message. |

Create a form at [Formspree](https://formspree.io), then set forwarding so submissions go to **giomagracia@gmail.com**.

`.env.example` is committed; do **not** commit `.env` / `.env.local` with secrets.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Notes

- All marketing copy is labeled as demo / placeholder.
- No fake logos or testimonials.
