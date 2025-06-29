export default {
  clearMocks: true,
  globals: {
    'process.env': {
      NODE_ENV: 'test',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    'minireset.css': '<rootDir>/__mocks__/style-mock.js',
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/__mocks__/file-mock.js',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/dist/'],
  transform: {
    '\\.(js|ts|tsx)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/'],
};
