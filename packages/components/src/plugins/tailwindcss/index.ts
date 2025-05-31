import plugin from 'tailwindcss/plugin';

import { config } from './config';

const papyrusUIPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.hide-scrollbar': {
      'scrollbarWidth': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  });
}, config);

export default papyrusUIPlugin;
