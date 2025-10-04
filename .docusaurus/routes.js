import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ASBM_Knowledge-Base/__docusaurus/debug',
    component: ComponentCreator('/ASBM_Knowledge-Base/__docusaurus/debug', 'a86'),
    exact: true
  },
  {
    path: '/ASBM_Knowledge-Base/__docusaurus/debug/config',
    component: ComponentCreator('/ASBM_Knowledge-Base/__docusaurus/debug/config', '375'),
    exact: true
  },
  {
    path: '/ASBM_Knowledge-Base/__docusaurus/debug/content',
    component: ComponentCreator('/ASBM_Knowledge-Base/__docusaurus/debug/content', '0b2'),
    exact: true
  },
  {
    path: '/ASBM_Knowledge-Base/__docusaurus/debug/globalData',
    component: ComponentCreator('/ASBM_Knowledge-Base/__docusaurus/debug/globalData', 'b82'),
    exact: true
  },
  {
    path: '/ASBM_Knowledge-Base/__docusaurus/debug/metadata',
    component: ComponentCreator('/ASBM_Knowledge-Base/__docusaurus/debug/metadata', 'c64'),
    exact: true
  },
  {
    path: '/ASBM_Knowledge-Base/__docusaurus/debug/registry',
    component: ComponentCreator('/ASBM_Knowledge-Base/__docusaurus/debug/registry', '341'),
    exact: true
  },
  {
    path: '/ASBM_Knowledge-Base/__docusaurus/debug/routes',
    component: ComponentCreator('/ASBM_Knowledge-Base/__docusaurus/debug/routes', '3ef'),
    exact: true
  },
  {
    path: '/ASBM_Knowledge-Base/docs',
    component: ComponentCreator('/ASBM_Knowledge-Base/docs', 'a48'),
    routes: [
      {
        path: '/ASBM_Knowledge-Base/docs',
        component: ComponentCreator('/ASBM_Knowledge-Base/docs', 'f1a'),
        routes: [
          {
            path: '/ASBM_Knowledge-Base/docs',
            component: ComponentCreator('/ASBM_Knowledge-Base/docs', '4a2'),
            routes: [
              {
                path: '/ASBM_Knowledge-Base/docs/meta/changelog',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/meta/changelog', '267'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/meta/glossary',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/meta/glossary', '2fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/quick-guides/choosing-a-sealer',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/quick-guides/choosing-a-sealer', '183'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/quick-guides/troubleshooting-efflorescence',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/quick-guides/troubleshooting-efflorescence', '495'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/search',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/search', '5ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/', '786'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/products/everclear-sealer',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/products/everclear-sealer', 'ce2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/products/tammscoat-acrylic',
                component: ComponentCreator('/ASBM_Knowledge-Base/docs/vendors/euclid-chemical/products/tammscoat-acrylic', '957'),
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
