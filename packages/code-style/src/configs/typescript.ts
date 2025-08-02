/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
// @ts-expect-error-- Module resolution is handled at runtime
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

import type { ESLintConfig } from '../types';

const typescriptPluginConfig = typescriptPlugin as ESLintConfig;

const typescriptParserConfig = {
  name: 'papyrus-ui/typescript-parser',
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      tsconfigRootDir: process.cwd(),
      project: './tsconfig.json',
    },
  },
};

const typescriptLintRules = {
  name: 'papyrus-ui/typescript-rules',
  files: ['**/*.{ts,tsx}'],
  plugins: {
    '@typescript-eslint': typescriptPlugin,
    import: importPlugin,
  },
  rules: {
    ...typescriptPluginConfig.configs?.recommended?.rules,
    ...typescriptPluginConfig.configs?.['recommended-type-checked']?.rules,
    ...importPlugin.configs?.recommended?.rules,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as' },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'no-underscore-dangle': 'error',
  },
};

const typescriptOverrideRules = {
  name: 'papyrus-ui/typescript-overrides',
  files: ['**/*.d.ts'],
  rules: {
    'import/no-default-export': 'off',
  },
};

export default [
  typescriptParserConfig,
  typescriptLintRules,
  typescriptOverrideRules,
];
