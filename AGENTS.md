# Repository Guidelines

## Project Structure & Module Organization

ASBM Knowledge Base is a Docusaurus 3 site. Author content under `docs/`, grouped by domain (e.g., `docs/vendors/<vendor>/products/`). React tweaks live in `src/` (`src/components/PagefindSearch.jsx` bootstraps Pagefind, `src/pages/index.js` redirects to the primary guide). Place static assets in `static/`. Automation lives in `scripts/`, and site-wide nav resides in `docusaurus.config.js` and `sidebars.js`.

## Build, Test, and Development Commands

Install dependencies with `npm install` (CI uses `npm ci`). Use `npm start` for local preview with hot reload. Run `npm run build` for production output plus the Pagefind search index; the command fails if `build/` is missing or stale. Execute `node scripts/freshness-check.mjs` before opening a PR to ensure `last_verified` front matter meets the 180-day SLA. Lint React and MDX-linked JS with `npm run lint`.

## Coding Style & Naming Conventions

Work on Node.js 20.x with npm v20 (`corepack use npm@20` keeps tooling aligned with CI). Follow ESLint recommendations defined in `eslint.config.mjs`; rely on 2-space indentation, semicolons, and double quotes in JS/JSX. Keep docs and directories in kebab-case, match existing front-matter keys, and prefer descriptive, lowercase slugs (`sku` when available).

## Testing Guidelines

There is no unit-test harness; treat `npm run build` and the freshness script as gating checks. Use `npm run lint` to catch stylistic issues. When adding CSV importers or changing automation, add targeted scripts under `scripts/` and document invocations inside MDX quick guides.

## Commit & Pull Request Guidelines

Write one-line, sentence-case commit subjects (e.g., `Fix broken links in navbar`). Reference issue IDs or vendors in the body when relevant. PRs must summarize the intent, list impacted docs, and include build/freshness/lint status. Provide screenshots for visual tweaks and link to staging URLs when available.

## Content Authoring Tips

Populate `last_verified` dates whenever content shifts; stale entries break the freshness check. For vendor products, use `scripts/csv_to_mdx.mjs` to seed MDX files, then adjust copy manually. Keep external links absolute and validate with the broken-link check triggered by `npm run build`.
