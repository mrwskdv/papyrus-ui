# @papyrus-ui/configs

Shareable configurations for JavaScript and TypeScript projects based on Google Style Guide.

## Getting Started

### ESLint configuration

For JS projects

```js
// .eslintrc.js

module.exports = {
  extends: [
    './node_modules/@papyrus-ui/configs/eslint-config',
    './node_modules/@papyrus-ui/configs/eslint-config-react',
  ],
  // Your settings...
};
```

For TS projects

```js
// .eslintrc.js

module.exports = {
  extends: [
    './node_modules/@papyrus-ui/configs/eslint-config',
    './node_modules/@papyrus-ui/configs/eslint-config-typescript',
    './node_modules/@papyrus-ui/configs/eslint-config-react',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        tsconfigRootDir: '.',
        project: ['./tsconfig.json'],
      },
    },
  ],
  // Your settings...
};
```

### Prettier configuration

```js
// .prettier-config.js

module.exports = require('@papyrus-ui/configs/prettier-config');
```

## Contributing

We welcome contributions to enhance Papyrus UI. To contribute, fork the repository, make your changes, and submit a pull
request. If you encounter issues or have suggestions, please open an issue on GitHub.

