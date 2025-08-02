// @ts-expect-error - eslint-plugin-jsx-a11y has no type definitions
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import type { ESLintConfig } from '../types';

const jsxA11yPluginConfig = jsxA11yPlugin as ESLintConfig;
const reactPluginConfig = reactPlugin as ESLintConfig;
const reactHooksPluginConfig = reactHooksPlugin as ESLintConfig;

const reactAccessibilityRules = {
  files: ['**/*.{jsx,tsx}'],
  plugins: {
    'jsx-a11y': jsxA11yPlugin as unknown,
  },
  rules: {
    ...jsxA11yPluginConfig.configs?.recommended?.rules,
  },
};

const reactCoreRules = {
  files: ['**/*.{jsx,tsx}'],
  plugins: {
    react: reactPlugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...reactPluginConfig.configs?.recommended?.rules,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
          },
        ],
      },
    ],
    'react/destructuring-assignment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      { callbacksLast: true, reservedFirst: true },
    ],
    'react/no-array-index-key': 'off',
  },
};

const reactHooksRules = {
  files: ['**/*.{jsx,tsx}'],
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    ...reactHooksPluginConfig.configs?.recommended?.rules,
  },
};

const reactOverrideRules = {
  files: ['**/*.jsx'],
  rules: {
    'import/no-default-export': 'off',
  },
};

export default [
  reactAccessibilityRules,
  reactCoreRules,
  reactHooksRules,
  reactOverrideRules,
];
