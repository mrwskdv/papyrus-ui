import eslintPlugin from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

import type { ESLintConfig } from '../types';

const importPluginConfig = importPlugin as unknown as ESLintConfig;
const prettierPluginConfig = prettierPlugin as unknown as ESLintConfig;

const commonImportRules = {
  files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    sourceType: 'module',
  },
  plugins: {
    import: importPlugin,
    prettier: prettierPlugin,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.json'],
        moduleDirectory: ['node_modules', '.'],
        paths: ['.'],
      },
    },
  },
  rules: {
    ...eslintPlugin.configs?.recommended?.rules,
    ...importPluginConfig.configs?.recommended?.rules,
    ...prettierPluginConfig.configs?.recommended?.rules,
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'guard-for-in': 'error',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-var': 'error',
    'no-with': 'error',
    'one-var': [
      'error',
      {
        var: 'never',
        let: 'never',
        const: 'never',
      },
    ],
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prettier/prettier': 'error',
    radix: 'error',
  },
};

const configFileOverrides = {
  files: [
    // Common config files
    '**/*.config.{js,cjs,mjs,ts}',
    '**/*rc.{js,cjs,mjs,ts}',
  ],
  rules: {
    'import/no-default-export': 'off',
  },
};

export default [commonImportRules, configFileOverrides];
