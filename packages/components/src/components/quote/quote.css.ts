import { atoms } from '@papyrus-ui/style-utils';

export const root = atoms({
  position: 'relative',
  ps: 4,
});

export const line = atoms({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  display: 'block',
  width: 1,
  rounded: 'full',
});

export const lineVariant = {
  primary: atoms({ bg: 'primary400' }),
  secondary: atoms({ bg: 'secondary400' }),
  tertiary: atoms({ bg: 'neutral300' }),
};
