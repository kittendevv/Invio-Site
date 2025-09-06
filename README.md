# Invio Site (Fresh + Deno Starter)

Basic starter using [Fresh](https://fresh.deno.dev/) + Twind (Tailwind-in-JS) and Deno.

## Prerequisites
- Deno 2.x (already installed in dev container)

## Run in dev
```bash
deno task start
```
Then open: http://localhost:8000

## Project Structure
- `deno.json` – import map, tasks, compiler options
- `dev.ts` – Fresh dev server bootstrap
- `main.ts` – production entry point
- `fresh.config.ts` – Fresh configuration
- `fresh.gen.ts` – auto-generated manifest (placeholder committed for TS imports)
- `routes/` – route modules (`index.tsx` root page)
- `static/` – place static assets (optional, create when needed)
- `twind.config.ts` – Twind/Tailwind theme (custom color palette)

## Production run
```bash
deno run -A main.ts
```

## Design System
Palette (names adapted):
| Token | Hex | Usage |
|-------|-----|-------|
| cloud | `#F0EEE9` | Light surfaces, text contrast bg |
| nordic | `#D3DDE7` | Muted text, subtle panels |
| duranta | `#D8E63C` | Primary accent (CTA) |
| violet | `#D6B4FC` | Secondary accent / borders |
| highway | `#273287` | Panel backgrounds, depth |
| tetsu | `#17184B` | Base gradient top, dark bg |

Gradient background is applied globally via `preflight` in `twind.config.ts`.

## Notes
- Add islands under `islands/` when you need interactive components.
- Regenerate manifest automatically by saving files during dev; Fresh updates it.
