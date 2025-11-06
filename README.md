# ASBM Knowledge Base

Static Docusaurus 3 site for ASBM documentation and vendor product details.

## Getting started

- Requires Node.js 20 (matches CI) and npm.
- **Dev Container**: Open in VS Code with the Dev Containers extension or GitHub Codespaces for automatic setup.
- Install dependencies with:

  ```bash
  npm install
  ```

- Launch the dev server (hot reload):

  ```bash
  npm start
  ```

## Build & verification

- Production build (includes Pagefind indexing):

  ```bash
  npm run build
  ```

- Freshness check enforced in CI; run locally before PRs:

  ```bash
  node scripts/freshness-check.mjs
  ```

## Deployment

The site automatically deploys to GitHub Pages on push to `main`. 

- **Quick Setup**: See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for GitHub Pages configuration (deploy from `gh-pages` branch, not `main/docs`)
- **Details**: See [DEPLOYMENT.md](DEPLOYMENT.md) for the full deployment process, troubleshooting, and technical details

## Contributor docs

- Agent-focused guide: [`agents.md`](agents.md)
- Copilot-specific hints consumed by GitHub: [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

## License

Specify license details here.
