import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7f4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '521'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '9db'),
            routes: [
              {
                path: '/docs/meta/changelog',
                component: ComponentCreator('/docs/meta/changelog', 'da6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/meta/glossary',
                component: ComponentCreator('/docs/meta/glossary', '315'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/quick-guides/choosing-a-sealer',
                component: ComponentCreator('/docs/quick-guides/choosing-a-sealer', '85f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/quick-guides/troubleshooting-efflorescence',
                component: ComponentCreator('/docs/quick-guides/troubleshooting-efflorescence', '192'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/search',
                component: ComponentCreator('/docs/search', '856'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/vendors/euclid-chemical/',
                component: ComponentCreator('/docs/vendors/euclid-chemical/', 'e2e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/vendors/euclid-chemical/products/everclear-sealer',
                component: ComponentCreator('/docs/vendors/euclid-chemical/products/everclear-sealer', 'd37'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/vendors/euclid-chemical/products/tammscoat-acrylic',
                component: ComponentCreator('/docs/vendors/euclid-chemical/products/tammscoat-acrylic', '90c'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
