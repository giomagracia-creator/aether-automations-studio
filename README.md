# Aether Automations Studio

Demo marketing one-pager for **Aether Automations** (placeholder brand) — Project A for Gio Magracia.

Built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **framer-motion**.

## Sections

1. Hero — AI automations for inbox, websites, ops + CTA
2. Services — Inbox automation / Animated live websites / Ops automations
3. How it works — three steps
4. Contact form — name, email, message (**demo — not wired**; client-only fake success)
5. Footer — clearly labeled demo / placeholder

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No env vars are required for the contact form. Copying `.env.example` is optional.

## Contact form (demo-only)

The contact UI looks complete but **does not submit to any email API** (no Formspree, no Resend). Submit shows a client-only “demo success” message so you can teach the flow without secrets.

Real email later: wire Formspree or Resend when ready. Until then, use **mailto:giomagracia@gmail.com**.

`.env.example` is committed; do **not** commit `.env` / `.env.local` with secrets.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Notes

- All marketing copy is labeled as demo / placeholder.
- No fake logos or testimonials.
