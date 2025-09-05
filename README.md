# Invio Site (Fresh + Deno Starter)

Basic unstyled starter using [Fresh](https://fresh.deno.dev/) and Deno.

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

## Production run
```bash
deno run -A main.ts
```

## Notes
- Add islands under `islands/` when you need interactive components.
- Regenerate manifest automatically by saving files during dev; Fresh updates it.
