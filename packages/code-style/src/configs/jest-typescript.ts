// Jest config for TypeScript test files - this will override TypeScript rules
const jestTypescriptTestRules = {
  files: ['**/*.{spec,test}.{ts,tsx}'],
  rules: {
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
  },
};

export default [jestTypescriptTestRules];
