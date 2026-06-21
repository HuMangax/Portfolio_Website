# Max Huang — Portfolio

A personal portfolio site for Max Huang, a 4th-year Computer Science student at UBC and software engineer. Built as a fast, single-page static site with a warm, forest-inspired design.

**Live:** https://maxhuang.netlify.app/

<p>
  <img alt="Astro" src="https://img.shields.io/badge/Astro-6-BC52EE?logo=astro&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white" />
  <img alt="Netlify" src="https://img.shields.io/badge/Netlify-deploy-00C7B7?logo=netlify&logoColor=white" />
</p>

## Overview

The site is a single page (`src/pages/index.astro`) composed of self-contained sections — Hero, About, Education, Skills, Experience, Projects, and Contact. It ships almost no JavaScript: most sections are static Astro with small vanilla-JS enhancements, and only the project cards hydrate as a React island.

## Features

- **Single-page layout** with a sticky nav, animated scroll-progress bar, scrollspy active-section highlighting, and a mobile hamburger menu.
- **Scroll-reveal animations** — sections fade in on scroll via `IntersectionObserver`; project cards use [Motion](https://motion.dev/) for hover and in-view transitions.
- **Resume-request modal** — an accessible dialog (focus trap, `Esc` to close, success state) that posts to [Netlify Forms](https://docs.netlify.com/forms/setup/). Submissions land in the Netlify dashboard under **Forms → `resume-request`**.
- **Content-driven** — projects, experience, and skills live in typed data files (`src/data/`), so updating the site is mostly editing arrays, not markup.
- **SEO & sharing** — canonical URL, meta description, and Open Graph / Twitter Card tags with a 1200×630 preview image (`public/og.png`).
- **Accessible & responsive** — semantic markup, keyboard support, mobile breakpoints, and `prefers-reduced-motion` handling throughout.

## Tech stack

| Area        | Choice                                                              |
| ----------- | ------------------------------------------------------------------ |
| Framework   | [Astro 6](https://astro.build/) (static output, islands)           |
| UI islands  | [React 19](https://react.dev/) — only where interactivity is needed |
| Styling     | [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` + CSS custom properties |
| Animation   | [Motion](https://motion.dev/) (`motion/react`)                     |
| Icons       | [lucide-react](https://lucide.dev/)                                |
| Language    | TypeScript (`astro/tsconfigs/strict`)                              |
| Hosting     | [Netlify](https://www.netlify.com/) (static + Forms)               |

**Design tokens** (`src/styles/global.css`): a pine / moss / sage / paper palette, with Fraunces (serif headings), Karla (sans body), and JetBrains Mono (mono accents).

## Project structure

```text
/
├── public/                 # Static assets served as-is
│   ├── images/             # Headshot + project screenshots
│   ├── og.png              # Social share preview
│   └── favicon.svg / .ico  # Icons
├── src/
│   ├── pages/
│   │   └── index.astro     # The single page — composes every section
│   ├── components/
│   │   ├── Nav.astro       # Sticky nav, scrollspy, mobile menu
│   │   ├── ResumeModal.astro   # Resume-request form (Netlify Forms)
│   │   ├── sections/       # Hero, About, Education, Skills, Experience, Projects, Contacts
│   │   └── ui/             # ProjectCard (React), SkillChip, ContactLinks
│   ├── data/               # Content as typed arrays
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── skills.ts
│   └── styles/
│       └── global.css      # Design tokens + global styles
├── astro.config.mjs        # Astro + React + Tailwind (Vite) config
└── netlify.toml            # Build command, publish dir, Node version
```

## Getting started

**Prerequisites:** Node.js `>=22.12.0` (see `engines` in `package.json`).

```sh
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

> **Note:** The resume-request form only records real submissions on the deployed Netlify site. Locally it shows the success state without sending — see the console message in the form's preview.

## Editing content

Most updates don't require touching components — edit the data files:

- **Projects** → `src/data/projects.ts` (title, date, description, tags, optional GitHub `link` and screenshot `image`)
- **Experience** → `src/data/experience.ts` (role, company, location, date, bullets, tags)
- **Skills** → `src/data/skills.ts` (grouped by category)

Project and headshot images go in `public/images/`; reference them with a root-relative path (e.g. `/images/projects/expense-tracker.png`).

## Deployment

Deployed on Netlify with the settings in `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `22`

Pushing to the connected branch triggers a build and deploy. Netlify automatically detects the `resume-request` form at deploy time — add an email notification under **Forms** in the Netlify dashboard to be alerted on new requests.

## Commands

All commands are run from the project root:

| Command            | Action                                          |
| ------------------ | ----------------------------------------------- |
| `npm install`      | Install dependencies                            |
| `npm run dev`      | Start the local dev server at `localhost:4321`  |
| `npm run build`    | Build the production site to `./dist/`          |
| `npm run preview`  | Preview the production build locally            |
| `npm run astro ...`| Run Astro CLI commands (`astro add`, `astro check`) |
