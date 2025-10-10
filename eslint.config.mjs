import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';

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
    plugins: {
      react
    },
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
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
