# Ruslan Reshetniak — Independent IT Consultant

A portable, statically exported Next.js website with English as its default language and complete German and Russian versions.

## Quick start

Use Node.js 22.13 or newer and pnpm 11.25.0 (pinned in `package.json`).

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. The first visit to `/` opens `/en/`. An explicit language choice is remembered locally; visiting a `/de/` or `/ru/` link does not silently overwrite it. Language switching preserves the visible section or the legal page. If browser storage is blocked, the website still works and defaults to English.

## Build and deploy

```sh
pnpm verify
```

This checks translation completeness, type-checks the application during the Next.js production build, and writes static HTML, CSS and JavaScript into `out/`.

- **Vercel:** import this directory as a Git repository, choose Next.js, build with `pnpm build`, output directory `out`. `vercel.json` already supplies the build settings.
- **Static hosting:** upload the CONTENTS of `out/` to the hosting root. This can be Cloudflare Pages or a conventional web host that serves directory index files.
- The site must be served from a domain root, not a GitHub project subdirectory. A deployment below `/some-repository/` would require a `basePath` configuration and localized URL changes.
- `next start` is not used with `output: 'export'`. Use `pnpm dev` in development or a static HTTP server for `out/`.

Set these build-time environment variables in the host dashboard, or copy `.env.example` to `.env.local` for local builds:

| Variable | Meaning |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your final HTTPS origin, e.g. `https://www.example.org`, without a trailing slash |
| `NEXT_PUBLIC_SITE_INDEXABLE` | `false` by default; use `true` only when the public site and legal pages are ready |

When no explicit URL is provided, a Vercel production URL is used if available, otherwise the placeholder `https://your-domain.example`. Rebuild after changing either variable. Canonical URLs, language alternates, Open Graph metadata, sitemap and robots settings are generated at build time. `noindex` and robots rules are NOT access protection. Configure protection at the hosting provider if a deployment must stay private.

The bundled static export is a staging build with search indexing disabled and a placeholder canonical domain. It runs on a static host immediately. Rebuild from the source with the real domain before a public launch.

## Maintain the content

- `content/site.ts`: name, email, photograph, social links, service visibility, skills, experience periods, optional projects, legal details and language defaults.
- `content/locales/en.json`: English copy and the default content schema.
- `content/locales/de.json`, `ru.json`: German and Russian copy with the same keys.
- `components/sections/`: independent page sections.
- `components/navigation.tsx`: responsive navigation and language selector.
- `lib/language-preference.ts`: locale preference, URL and section-selection logic.
- `app/globals.css`: responsive design, visual styling and reduced-motion support.

Update all three JSON files when changing copy. `pnpm check:content` detects missing or empty translations. No component changes are needed to edit copy, technology tags, dates, photos or existing service visibility.

To add a real project: enable `site.projects`, add an item with `id`, `tags` and optional `url`, and add matching `work.items.<id>` entries with `title`, `task`, `role`, `result` in all three JSON files. The section stays hidden until actual cases are configured.

A future CMS can be connected through `getContent()` in `content/index.ts` without redesigning the sections.

## Current functionality and launch details

The contact button opens the visitor's email application using a real `mailto:` link. The site does not pretend to send messages and has no form backend. Social links and a portrait remain optional. The application includes no analytics, external fonts, ad scripts, third-party embeds or runtime account dependency.

Legal pages are explicitly labelled drafts. Complete and review the operator's details, address, actual host/data processing and the remaining privacy information before a public launch. Update service scope and professional dates if needed. Search indexing is disabled by default. The operator's phone, personal address, birth date and family status are not shown in the main contact/profile sections.

The source uses Next.js, React, TypeScript, Tailwind CSS and Lucide icons. It contains four direct runtime dependencies and no database or hosting-specific application runtime. It does not include an `node_modules` folder; install dependencies from the pinned lockfile.

## Verified in this delivery

- Frozen-lockfile dependency installation.
- Production build using the standard Next.js CLI, including TypeScript checks.
- Static HTML for `/en/`, `/de/`, `/ru/` and six localized legal pages.
- Locale metadata, `x-default` pointing to English, real email links and disabled draft indexing.
- Locale preference behavior with empty, valid, invalid and unavailable browser storage.

A browser layout/device check has not been performed in this environment; Core Web Vitals have not been measured.
