# Diane Rosellini & Associates — Portfolio

A simple, lightweight Astro site for [Diane Rosellini and Associates](https://www.dianeroselliniassociates.com/), rebuilt and improved with a clean design, portfolio blog, and contact section.

## Commands

| Command           | Action                              |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview the production build         |

## Project structure

- **`src/pages/`** — Home (`index.astro`), portfolio list (`portfolio/index.astro`), and project pages (`portfolio/[slug].astro`).
- **`src/content/portfolio/`** — Portfolio entries as Markdown. Add a `.md` file with frontmatter: `title`, `description`, optional `date`, `image`, `tags`.
- **`src/components/`** — Header, Footer, ContactForm.
- **`src/layouts/Layout.astro`** — Shared layout with meta and global styles.
- **`src/styles/global.css`** — CSS variables and base styles.

## Adding portfolio projects

Create a new file in `src/content/portfolio/`, e.g. `my-project.md`:

```md
---
title: Project Name
description: Short summary for cards and meta.
date: 2025-02-24
tags: [kitchen, remodel]
image: /images/my-project.jpg   # optional; put image in public/images/
---

Body content in Markdown. This appears on the project page.
```

The filename (without `.md`) becomes the URL slug, e.g. `my-project.md` → `/portfolio/my-project/`.

## Contact form

The contact form in `src/components/ContactForm.astro` currently uses `action="#"`. To receive submissions:

1. **Formspree** — Create a form at [formspree.io](https://formspree.io), then set `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` on the `<form>`.
2. **Netlify Forms** — Add `name="contact"` and `data-netlify="true"` to the form; Netlify will handle submissions when deployed there.
3. **Custom API** — Add an Astro API route or serverless function and set the form `action` to that endpoint.

## Design

- Typography: Cormorant Garamond (headings), DM Sans (body).
- Palette: warm neutrals, off-white background, subtle borders.
- Fully static output; no client-side JS except for optional form handling.
