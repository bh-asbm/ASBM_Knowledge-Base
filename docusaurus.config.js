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
    navbar: {
      title: 'Masonry KB',
      items: [
        { to: '/docs/quick-guides/choosing-a-sealer', label: 'Quick Guides', position: 'left' },
        { to: '/docs/vendors/euclid-chemical', label: 'Vendors', position: 'left' },
        { href: 'https://github.com/bh-asbm/ASBM_Knowledge-Base', label: 'GitHub', position: 'right' }
      ]
    },
    prism: { additionalLanguages: ['bash','json','yaml'] }
  }
};
