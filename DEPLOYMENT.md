# Deployment Guide

## Overview

This is a **Docusaurus 3** static site, NOT a Jekyll site. The deployment process is automated via GitHub Actions.

## Important: This is NOT a Jekyll Site

⚠️ **Do NOT add Jekyll workflows or configuration files** (like `jekyll-gh-pages.yml` or `_config.yml`). This project uses Docusaurus for static site generation.

## Automated Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Deployment Workflow

The deployment is handled by `.github/workflows/deploy.yml`, which:

1. Checks out the code
2. Sets up Node.js 20
3. Installs npm dependencies
4. Runs `npm run build` (builds Docusaurus and indexes with Pagefind)
5. Publishes the `build/` directory to the `gh-pages` branch
6. GitHub Pages serves the site from the `gh-pages` branch

### Build Process

```bash
# Local build (same as CI)
npm ci
npm run build
```

The build command runs:
1. `docusaurus build` - Generates static HTML/CSS/JS in `build/`
2. `node scripts/build-search.mjs` - Runs Pagefind to create search index

## GitHub Pages Configuration

**IMPORTANT:** Your GitHub Pages **must** be configured to deploy from the `gh-pages` branch, **NOT** from `main/docs`.

### Required Settings

Go to your repository Settings > Pages and configure:
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` / `root`
- **Custom domain**: git.allseasonsbuilding.com (configured via CNAME file in `static/`)

### How it works

1. When you push to `main`, the GitHub Actions workflow (`.github/workflows/deploy.yml`) runs
2. The workflow builds the site with `npm run build` (generates static files in `build/`)
3. The workflow publishes the `build/` directory to the `gh-pages` branch
4. GitHub Pages serves the site from the `gh-pages` branch
5. The site is available at your custom domain: https://git.allseasonsbuilding.com

### Custom Domain Setup

The `CNAME` file in the `static/` directory contains your custom domain (`git.allseasonsbuilding.com`). Docusaurus automatically copies this file to the build output, which tells GitHub Pages to use your custom domain.

**Do not move or delete the CNAME file from `static/`** - it must be there for the custom domain to work.

Note: The `baseUrl` is set to `/` in `docusaurus.config.js`, which means the site deploys to the root of your domain rather than a subdirectory.

## Manual Deployment

If you need to manually trigger deployment:

1. Go to the Actions tab
2. Select "Deploy Docusaurus to GitHub Pages"
3. Click "Run workflow"
4. Select the `main` branch
5. Click "Run workflow"

## Troubleshooting 404 Errors

If the site shows a 404 error:

1. **Check the deployment workflow status** in the Actions tab
2. **Verify GitHub Pages settings** (should use `gh-pages` branch)
3. **Ensure no conflicting workflows** (like Jekyll) are enabled
4. **Check that the build completed successfully**
5. **Verify the `baseUrl` in `docusaurus.config.js` matches your deployment URL**
   - Current config uses `baseUrl: '/'` for root deployment at `https://bh-asbm.github.io/`
   - If deploying to a subdirectory, update `baseUrl` to match (e.g., `/ASBM_Knowledge-Base/`)

### Common Issues

- **Jekyll workflow added**: Remove any `jekyll-gh-pages.yml` or similar Jekyll configuration
- **Wrong branch configured**: Pages must deploy from `gh-pages` branch, not `main` or `main/docs`
  - Go to Settings > Pages and verify Source is set to "Deploy from a branch" with branch `gh-pages` / `root`
- **Build failures**: Check the Actions tab for error logs
- **Base URL mismatch**: Verify `baseUrl` in `docusaurus.config.js`
- **Custom domain not working**: Ensure `CNAME` file is in `static/` directory (not repository root)
- **404 on custom domain**: Verify DNS is configured correctly and GitHub Pages settings show your custom domain

## Local Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm start

# Production build (includes Pagefind indexing)
npm run build

# Serve the production build locally
npm run serve

# Run linter
npm run lint
```

## CI/CD Workflows

- **deploy.yml**: Builds and deploys to GitHub Pages on push to `main`
- **pr-ci.yml**: Validates builds on pull requests
- **eslint.yml**: Lints code for style and errors
- **freshness.yml**: Checks content freshness dates
- **codeql.yml**: Security scanning
- **dependency-review.yml**: Reviews dependencies on PRs

## Need Help?

- Review the [README.md](./README.md) for getting started
- Check [docusaurus.config.js](./docusaurus.config.js) for site configuration
- See [Docusaurus documentation](https://docusaurus.io/docs) for framework details
