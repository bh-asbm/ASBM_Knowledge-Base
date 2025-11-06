# GitHub Pages Setup Guide

## Quick Answer

**Your GitHub Pages should deploy from `gh-pages` branch at root (`/`), NOT from `main/docs`.**

## Step-by-Step Configuration

### 1. Go to Repository Settings
Navigate to: https://github.com/bh-asbm/ASBM_Knowledge-Base/settings/pages

### 2. Configure Source
Under "Build and deployment":
- **Source**: Select "Deploy from a branch"
- **Branch**: Select `gh-pages` and `/ (root)`
- Click "Save"

### 3. Custom Domain (Already Configured)
- Your custom domain `git.allseasonsbuilding.com` is configured via the `CNAME` file
- The CNAME file is in `static/CNAME` and automatically copied to the build output
- **Do not change this** - it's already correct

### 4. How Deployment Works

```
Push to main
    ↓
GitHub Actions runs (.github/workflows/deploy.yml)
    ↓
Builds site (npm run build)
    ↓
Publishes build/ directory to gh-pages branch
    ↓
GitHub Pages serves from gh-pages branch
    ↓
Site available at git.allseasonsbuilding.com
```

## Why NOT main/docs?

This is a **Docusaurus 3** static site, not a Jekyll site:
- Docusaurus needs to build the site first (converts docs to HTML/CSS/JS)
- The `docs/` folder contains source Markdown files, not the final website
- The build process generates optimized static files in `build/`
- GitHub Actions publishes these built files to the `gh-pages` branch
- GitHub Pages serves the pre-built files from `gh-pages`

## Verification Checklist

- [ ] GitHub Pages Source: `gh-pages` branch / `root`
- [ ] Custom domain shows: `git.allseasonsbuilding.com`
- [ ] HTTPS is enforced (if available)
- [ ] Site accessible at https://git.allseasonsbuilding.com
- [ ] GitHub Actions workflow runs successfully on push to main

## Need Help?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment information and troubleshooting.
