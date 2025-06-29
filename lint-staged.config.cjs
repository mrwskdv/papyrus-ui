module.exports = {
  '*.(js|ts|tsx)': ['npm run lint:fix'],
  '*.(ts|tsx)': () => 'tsc -p tsconfig.json --noEmit',
};
