# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 16 App Router** personal portfolio site (`my-portfolio`) for Ziye Lin. The site has two distinct content types:

1. **Portfolio pages** — standard Next.js App Router pages written in TypeScript/React
2. **Embedded oil-dashboard** — a pre-compiled static dashboard (vanilla JS + CDN React 18, no Next.js) served from `public/oil-dashboard/`

---

## Commands

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

---

## Directory Structure

```
app/                    # Next.js App Router pages
  page.tsx              # Home page
  layout.tsx            # Root layout (Navigation + Footer)
  globals.css           # Global CSS + CSS custom properties
  projects/
    Projects.tsx        # Projects list section
    ProjectCard.tsx     # Shared project card component
    crypto-report/      # crypto-report project page
    oil-dashboard/      # oil-dashboard project page (iframe host)
      page.tsx          # Chinese-localized project page
      page.module.css
  contact/
  about/

components/            # Shared layout components
  Navigation.tsx
  Footer.tsx
  Hero.tsx
  About.tsx
  Contact.tsx

public/
  oil-dashboard/        # Pre-compiled static oil dashboard
    index.html          # Compiled from project2-oil/frontend/index.html
    homepage_payload.json
    index.html.bak
  projects/oil-dashboard/  # (legacy path — oil-dashboard now at /oil-dashboard/)
```

---

## Oil Dashboard Embed Architecture

The oil-dashboard is **NOT a Next.js page** — it is a pre-compiled static HTML app served from `public/`.

| URL | Type | Source |
|-----|------|--------|
| `/projects/oil-dashboard` | Next.js dynamic page | `app/projects/oil-dashboard/page.tsx` |
| `/oil-dashboard/index.html` | Static file | `public/oil-dashboard/index.html` (served directly by Next.js from `public/`) |

The project page embeds the dashboard via `<iframe src="/oil-dashboard/index.html">`.

**Sync workflow** — after rebuilding the dashboard in `project2-oil`, copy files to the portfolio:

```bash
cp project2-oil/frontend/index.html public/oil-dashboard/index.html
cp project2-oil/frontend/homepage_payload.json public/oil-dashboard/homepage_payload.json
```

---

## CSS Architecture

- CSS custom properties are defined in `app/globals.css` (e.g., `--color-accent`, `--space-*`, `--font-*`)
- Component-scoped styles via `page.module.css` or `[Component].module.css`
- No Tailwind — uses custom CSS with PostCSS

---

## MDX

The project has `@next/mdx` configured. See `mdx-components.tsx` for MDX component overrides.

---

## Key Patterns

- `app/page.tsx` — home page (root route)
- `app/layout.tsx` — root layout wrapping all pages with `Navigation` + `Footer`
- Project pages use a `Section` component for consistent section rendering
- `ProjectCard` is reused for all project entries in `Projects.tsx`
