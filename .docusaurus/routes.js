import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ASBM_Knowledge-Base/docs',
    component: ComponentCreator('/ASBM_Knowledge-Base/docs', 'f2d'),
    routes: [
      {
        path: '/ASBM_Knowledge-Base/docs',
        component: ComponentCreator('/ASBM_Knowledge-Base/docs', 'ac4'),
        routes: [
          {
            path: '/ASBM_Knowledge-Base/docs',
            component: ComponentCreator('/ASBM_Knowledge-Base/docs', '35b'),
            routes: [
              {
                path: '/ASBM_Knowledge-Base/docs/meta/changelog',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/meta/changelog', '41c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/meta/glossary',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/meta/glossary', '6b9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/quick-guides/choosing-a-sealer',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/quick-guides/choosing-a-sealer', 'b5b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/quick-guides/troubleshooting-efflorescence',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/quick-guides/troubleshooting-efflorescence', 'ea3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/search',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/search', '641'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/', '513'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/products/everclear-sealer',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/products/everclear-sealer', '14a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/products/tammscoat-acrylic',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/products/tammscoat-acrylic', '244'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
