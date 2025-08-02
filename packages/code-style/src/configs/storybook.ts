const storybookFileRules = {
  files: [
    '**/*.stories.{js,jsx,ts,tsx}',
    '**/*.story.{js,jsx,ts,tsx}',
    '**/main.{js,ts}',
    '**/preview.{js,jsx,ts,tsx}',
    '**/theme.{js,ts}',
    '**/manager.{js,ts}',
  ],
  rules: {
    'import/no-default-export': 'off',
  },
};

export default [storybookFileRules];
