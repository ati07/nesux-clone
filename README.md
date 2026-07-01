# NEXUS // SYSTEMS — Next.js Clone

A pixel-close clone of the NEXUS Systems landing page, rebuilt in Next.js (App Router) + Tailwind CSS v4.

## Design tokens (matched from the source site)

- **Background:** `#0A0A0A` (page), `#0F0F0F` (alt sections), `#121212` (cards), `#050505` (footer)
- **Accent:** `#D4FF00` (lime)
- **Headings font:** Cormorant Garamond (serif, used via `.font-serif-agency`)
- **Body/UI font:** IBM Plex Mono (used via `.font-mono-agency`)
- **Borders:** white at 5–20% opacity

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx` — root layout, loads Google Fonts (Cormorant Garamond + IBM Plex Mono)
- `app/page.tsx` — composes all sections
- `components/Navbar.tsx` — sticky header
- `components/Hero.tsx` — hero + system diagnostics panel
- `components/Capabilities.tsx` — bento-grid service directory (7 services)
- `components/Scheduler.tsx` — interactive calendar + time slot picker
- `components/Intake.tsx` — inquiry form with budget selector
- `components/TerminalConsole.tsx` — live log / appointments console
- `components/Footer.tsx`

## Notes

- All interactive bits (calendar, time slots, budget selector) are wired up client-side with React state but don't submit anywhere — hook up your own API/DB as needed.
- Icons via `lucide-react`.
