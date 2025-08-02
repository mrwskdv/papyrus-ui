import nextPlugin from '@next/eslint-plugin-next';

import type { ESLintConfig } from '../types';

const nextPluginConfig = nextPlugin as unknown as ESLintConfig;

const nextjsRules = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPluginConfig.configs?.recommended?.rules,
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-img-element': 'error',
    '@next/next/no-page-custom-font': 'error',
    '@next/next/no-sync-scripts': 'error',
    '@next/next/no-title-in-document-head': 'error',
  },
};

const nextjsAppDirectoryRules = {
  files: ['**/app/**/*', '**/pages/**/*'],
  rules: {
    'import/no-default-export': 'off',
  },
};

export default [nextjsRules, nextjsAppDirectoryRules];
