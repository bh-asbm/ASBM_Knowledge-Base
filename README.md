# ASBM Knowledge Base

Static Docusaurus 3 site for ASBM documentation and vendor product details.

## Getting started

- Requires Node.js 18 (matches CI) and npm.
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

## Contributor docs

- Agent-focused guide: [`agents.md`](agents.md)
- Copilot-specific hints consumed by GitHub: [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

## License

Specify license details here.
