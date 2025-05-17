import { atoms } from '@papyrus-ui/style-utils';

export const root = atoms({
  bg: 'currentColor',
});

export const rootDirection = {
  horizontal: atoms({
    width: 'full',
    height: 'px',
  }),
  vertical: atoms({
    height: 'full',
    width: 'px',
  }),
};
