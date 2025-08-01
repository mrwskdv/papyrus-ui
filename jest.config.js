import baseConfig from './jest.config.base.js';

export default {
  ...baseConfig,
  collectCoverage: true,
  projects: ['<rootDir>/packages/**/jest.config.js'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{ts,tsx,js}',
    '!<rootDir>/**/node_modules/**/*',
    '!<rootDir>/**/dist/**/*',
    '!<rootDir>/**/*.config.*',
    '!<rootDir>/**/*.stories.*',
    '!<rootDir>/**/*rc.*',
    '!<rootDir>/**/index.*',
    '!<rootDir>/**/jest.*',
  ],
};
