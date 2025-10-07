import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b85'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '03d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '8a4'),
            routes: [
              {
                path: '/docs/meta/changelog',
                component: ComponentCreator('/docs/meta/changelog', '61a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/meta/glossary',
                component: ComponentCreator('/docs/meta/glossary', '4aa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/quick-guides/choosing-a-sealer',
                component: ComponentCreator('/docs/quick-guides/choosing-a-sealer', '123'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/quick-guides/troubleshooting-efflorescence',
                component: ComponentCreator('/docs/quick-guides/troubleshooting-efflorescence', '4ac'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/search',
                component: ComponentCreator('/docs/search', '45b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/vendors/euclid-chemical/',
                component: ComponentCreator('/docs/vendors/euclid-chemical/', '75d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/vendors/euclid-chemical/products/everclear-sealer',
                component: ComponentCreator('/docs/vendors/euclid-chemical/products/everclear-sealer', 'b88'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/vendors/euclid-chemical/products/tammscoat-acrylic',
                component: ComponentCreator('/docs/vendors/euclid-chemical/products/tammscoat-acrylic', 'f40'),
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
