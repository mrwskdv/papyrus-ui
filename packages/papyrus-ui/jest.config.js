import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import baseConfig from '../../jest.config.base.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = JSON.parse(
  readFileSync(join(__dirname, 'package.json'), 'utf8'),
);

const packageName = packageJson.name;

export default {
  ...baseConfig,
  displayName: packageName,
  rootDir: '../..',
};
