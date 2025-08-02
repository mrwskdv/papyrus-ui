import createConfig from '@papyrus-ui/code-style';

const config = createConfig({
  project: ['./tsconfig.json', './packages/*/tsconfig.json'],
});

export default [
  // Auto-detected configuration with libraries
  ...config,

  // Project-specific overrides
  {
    name: 'papyrus-ui/plugin-overrides',
    files: [
      './packages/code-style/src/**/*',
      './packages/papyrus-ui/src/plugin/index.ts',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },

  // Global ignores
  {
    name: 'papyrus-ui/ignores',
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/__reports__/**',
    ],
  },
];
