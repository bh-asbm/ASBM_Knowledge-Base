---
title: Algolia DocSearch Setup
description: Configure dual-mode search with Algolia DocSearch and Pagefind fallback
last_verified: "2025-10-10"
---

# Algolia DocSearch Setup

This site supports **dual-mode search**: when Algolia DocSearch credentials are provided, the navbar displays an Algolia-powered search box. When credentials are absent, the site falls back to Pagefind-based search (accessible via `/docs/search`).

## Dual-Mode Behavior

### Algolia Mode (Primary)
When the following environment variables are set:
- `ALGOLIA_APP_ID`
- `ALGOLIA_SEARCH_API_KEY`
- `ALGOLIA_INDEX_NAME`

The site will:
- Display Algolia DocSearch in the navbar
- Use Algolia's cloud-hosted index for fast, typo-tolerant search
- Still build Pagefind index as a fallback

### Pagefind Mode (Fallback)
When Algolia environment variables are **not** set:
- The site operates as before with Pagefind-only search
- Pagefind search UI is available at `/docs/search`
- No Algolia integration is loaded

## Applying for Algolia DocSearch

Algolia offers free DocSearch hosting for open-source documentation projects:

1. Visit [https://docsearch.algolia.com/apply/](https://docsearch.algolia.com/apply/)
2. Fill out the application form with:
   - Your documentation site URL
   - Repository URL
   - Contact email
3. Wait for approval (typically 1-2 weeks)
4. Once approved, Algolia will provide:
   - `ALGOLIA_APP_ID`
   - `ALGOLIA_SEARCH_API_KEY` (public search-only key)
   - `ALGOLIA_INDEX_NAME`

## Local Development Setup

To enable Algolia search locally:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Algolia credentials:
   ```bash
   ALGOLIA_APP_ID=your_app_id_here
   ALGOLIA_SEARCH_API_KEY=your_search_api_key_here
   ALGOLIA_INDEX_NAME=your_index_name_here
   ```

3. Run the development server or build:
   ```bash
   npm start
   # or
   npm run build
   ```

**Note:** The `.env` file is ignored by git and should never be committed.

## GitHub Actions Configuration

To enable Algolia in CI builds and deployments:

1. Navigate to your repository's **Settings → Secrets and variables → Actions**
2. Add the following repository secrets:
   - `ALGOLIA_APP_ID`
   - `ALGOLIA_SEARCH_API_KEY`
   - `ALGOLIA_INDEX_NAME`

Both the PR CI workflow (`.github/workflows/pr-ci.yml`) and deploy workflow (`.github/workflows/deploy.yml`) are configured to automatically use these secrets when available.

## Maintaining Dual-Mode Support

- **Do not remove** Pagefind build scripts or components
- Pagefind remains the fallback when Algolia credentials are unavailable
- Both search solutions can coexist without conflict
- If Algolia secrets are not set in CI, builds will succeed with Pagefind-only mode

## Troubleshooting

### Algolia search not appearing
- Verify environment variables are set correctly
- Check that all three variables (`ALGOLIA_APP_ID`, `ALGOLIA_SEARCH_API_KEY`, `ALGOLIA_INDEX_NAME`) are present
- Rebuild the site after adding credentials

### Build failures
- Algolia credentials are optional—builds should never fail due to missing Algolia env vars
- Check that `@docusaurus/theme-search-algolia` is installed: `npm ci`
- Review build logs for specific errors

### Search results outdated
- Algolia crawlers need to re-index your site periodically
- Contact Algolia support to trigger manual re-crawls if needed
- Pagefind is always regenerated on each build
