// Replace <org> and <repo> before deploying
module.exports = {
  title: 'Masonry Knowledge Base',
  tagline: 'Fast, trustworthy answers for masonry products',
  url: 'https://<org>.github.io',
  baseUrl: '/<repo>/',
  favicon: 'img/favicon.ico',
  organizationName: '<org>',
  projectName: '<repo>',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/<org>/<repo>/edit/main/',
        showLastUpdateTime: true,
        showLastUpdateAuthor: false
      },
      theme: { customCss: require.resolve('./src/css/custom.css') },
      blog: false
    }]
  ],
  themeConfig: {
    navbar: {
      title: 'Masonry KB',
      items: [
        { to: '/docs/quick-guides/choosing-a-sealer', label: 'Quick Guides', position: 'left' },
        { to: '/docs/vendors/euclid-chemical', label: 'Vendors', position: 'left' },
        { href: 'https://github.com/<org>/<repo>', label: 'GitHub', position: 'right' }
      ]
    },
    prism: { additionalLanguages: ['bash','json','yaml'] }
  }
};
