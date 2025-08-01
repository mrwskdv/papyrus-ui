import globals from 'globals';

const jestTestRules = {
  files: [
    '**/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/*.{spec,test}.{js,jsx,ts,tsx}',
    '**/jest.*',
    '**/test-utils.{js,jsx,ts,tsx}',
  ],
  languageOptions: {
    globals: {
      ...globals.jest,
    },
    parserOptions: {
      ecmaVersion: 'latest',
    },
  },
  rules: {
    'import/no-default-export': 'off',
  },
};

export default [jestTestRules];
