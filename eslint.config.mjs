import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      'build/**',
      '.docusaurus/**',
      'node_modules/**',
      '**/*.min.js'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {}
  }
];
