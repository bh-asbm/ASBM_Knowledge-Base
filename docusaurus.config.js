require('dotenv').config();

// Check if Algolia DocSearch is enabled via environment variables
const algoliaEnabled = !!(
  process.env.ALGOLIA_APP_ID &&
  process.env.ALGOLIA_SEARCH_API_KEY &&
  process.env.ALGOLIA_INDEX_NAME
);

module.exports = {
  title: 'Masonry Knowledge Base',
  tagline: 'Fast, trustworthy answers for masonry products',
  url: 'https://bh-asbm.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'bh-asbm',
  projectName: 'ASBM_Knowledge-Base',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/bh-asbm/ASBM_Knowledge-Base/edit/main/',
        showLastUpdateTime: true,
        showLastUpdateAuthor: false
      },
      theme: { customCss: require.resolve('./src/css/custom.css') },
      blog: false
    }]
  ],
  themeConfig: {
    ...(algoliaEnabled && {
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true
      }
    }),
    navbar: {
      title: 'Masonry KB',
      items: [
        { to: '/docs/quick-guides/choosing-a-sealer', label: 'Quick Guides', position: 'left' },
        { to: '/docs/vendors', label: 'Vendors', position: 'left' },
        { to: '/docs/resources', label: 'Resources', position: 'left' },
        { href: 'https://github.com/bh-asbm/ASBM_Knowledge-Base', label: 'GitHub', position: 'right' },
        ...(algoliaEnabled ? [{ type: 'search', position: 'right' }] : [])
      ]
    },
    prism: { additionalLanguages: ['bash','json','yaml'] }
  }
};
