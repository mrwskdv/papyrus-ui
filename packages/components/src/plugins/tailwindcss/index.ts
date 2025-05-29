import plugin from 'tailwindcss/plugin';

import { config } from './config';

const papyrusUIPlugin = plugin(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
  config,
);

export default papyrusUIPlugin;
